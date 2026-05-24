import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { listPhotoCatalogRecipes } from '../src/data/photoRecipeCatalog'
import { normalizeNameToSlug } from '../src/utils/recipeImages'

type ParsedIngredient = {
  name: string
  quantityText: string
  quantityG: number | null
  role: 'main' | 'complement' | 'seasoning'
  includeInShoppingList: boolean
  isFreeSeasoning: boolean
  shoppingCategory: string
}

type ParsedRecipe = {
  index: number
  name: string
  suggestedSlug: string
  proteinPrincipal: string | null
  cookingMethod: string | null
  baseRawWeightG: number
  baseReadyWeightG: number | null
  nutrition: {
    kcalPer100g: number | null
    proteinGPer100g: number | null
    carbsGPer100g: number | null
    fatGPer100g: number | null
  }
  ingredients: ParsedIngredient[]
  steps: string[]
}

type ExistingMatch = {
  dossier: ParsedRecipe
  currentSlug: string
  currentName: string
  currentReadyWeightG: number
  currentIngredientCount: number
  currentStepCount: number
  currentHasNutrition: boolean
}

const DEFAULT_OUTPUT_PATH = path.join('docs', 'AI_RECIPE_DOSSIER_IMPORT_REPORT.md')
const DEFAULT_DOSSIER_PATH = path.join(
  process.env.USERPROFILE ?? '',
  'Downloads',
  'cardapio-engenharia-hibrida.md',
)

const knownSlugMatches = new Map<string, string>([
  ['almondegas-de-carne', 'almondegas-carne'],
  ['almondegas-de-frango', 'almondegas-frango'],
  ['carne-de-panela', 'carne-panela'],
  ['file-mignon-suino-acebolado', 'file-mignon-suino'],
  ['frango-com-creme-de-milho', 'frango-creme-milho'],
  ['lombo-suino-barbecue', 'lombo-barbecue'],
  ['strogonoff-de-frango', 'strogonoff-frango'],
])

main()

function main() {
  const dossierPath = path.resolve(getArgValue('--file') ?? DEFAULT_DOSSIER_PATH)
  const outputPath = path.resolve(getArgValue('--out') ?? DEFAULT_OUTPUT_PATH)

  if (!existsSync(dossierPath)) {
    throw new Error(`Dossie nao encontrado: ${dossierPath}`)
  }

  const parsedRecipes = parseDossier(dossierPath)
  const currentRecipes = listPhotoCatalogRecipes()
  const currentBySlug = new Map(currentRecipes.map((recipe) => [recipe.slug, recipe]))
  const existingMatches: ExistingMatch[] = []
  const newRecipes: ParsedRecipe[] = []

  for (const dossierRecipe of parsedRecipes) {
    const currentSlug = findCurrentRecipeSlug(dossierRecipe.suggestedSlug, currentBySlug)
    const currentRecipe = currentSlug ? currentBySlug.get(currentSlug) : null

    if (!currentRecipe || !currentSlug) {
      newRecipes.push(dossierRecipe)
      continue
    }

    existingMatches.push({
      dossier: dossierRecipe,
      currentSlug,
      currentName: currentRecipe.name,
      currentReadyWeightG: currentRecipe.baseReadyWeightG,
      currentIngredientCount: currentRecipe.ingredients.length,
      currentStepCount: currentRecipe.steps.length,
      currentHasNutrition: hasRecipeNutrition(currentRecipe.nutrition),
    })
  }

  const report = buildReport({
    dossierPath,
    parsedRecipes,
    existingMatches,
    newRecipes,
  })

  mkdirSync(path.dirname(outputPath), { recursive: true })
  writeFileSync(outputPath, report, 'utf8')

  printConsoleSummary(outputPath, parsedRecipes, existingMatches, newRecipes)
}

function parseDossier(filePath: string): ParsedRecipe[] {
  const content = readFileSync(filePath, 'utf8')
  const matches = Array.from(content.matchAll(/^##\s+(\d+)\.\s+(.+?)\s*$/gm))

  return matches.map((match, index) => {
    const start = match.index ?? 0
    const end = matches[index + 1]?.index ?? content.length
    const section = content.slice(start, end)
    const recipeIndex = Number(match[1])
    const name = cleanText(match[2] ?? '')
    const proteinPrincipal = getMetadataValue(section, 'Proteína principal')
    const cookingMethod = getMetadataValue(section, 'Método')
    const baseReadyWeightG = parseReadyWeight(section)
    const ingredients = parseIngredients(section, proteinPrincipal)

    return {
      index: recipeIndex,
      name,
      suggestedSlug: normalizeNameToSlug(name),
      proteinPrincipal,
      cookingMethod,
      baseRawWeightG: 1000,
      baseReadyWeightG,
      nutrition: parseRecipeNutrition(section),
      ingredients,
      steps: parseSteps(section),
    }
  })
}

function getMetadataValue(section: string, label: string) {
  const escapedLabel = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const match = section.match(new RegExp(`^\\*\\*${escapedLabel}:\\*\\*\\s+(.+?)\\s*$`, 'm'))

  return match?.[1] ? cleanText(match[1]) : null
}

function parseReadyWeight(section: string) {
  const value = getMetadataValue(section, 'Peso cozido estimado')
  const match = value?.match(/~\s*([\d.]+(?:,\d+)?)\s*g/i)

  return match?.[1] ? parsePtNumber(match[1]) : null
}

function parseIngredients(section: string, proteinPrincipal: string | null): ParsedIngredient[] {
  const block = getHeadingBlock(section, 'Ingredientes')
  const rows = parseMarkdownRows(block)

  return rows.map(([name = '', quantityText = ''], index) => {
    const cleanName = cleanText(name)
    const cleanQuantity = cleanText(quantityText)
    const isFreeSeasoning = isQuantityFreeSeasoning(cleanQuantity)
    const role = inferIngredientRole(cleanName, proteinPrincipal, index, isFreeSeasoning)

    return {
      name: cleanName,
      quantityText: cleanQuantity,
      quantityG: parseQuantityG(cleanQuantity),
      role,
      includeInShoppingList: true,
      isFreeSeasoning,
      shoppingCategory: inferShoppingCategory(cleanName, role),
    }
  })
}

function parseRecipeNutrition(section: string): ParsedRecipe['nutrition'] {
  const block = getHeadingBlock(section, 'Total da Receita')
  const rows = parseMarkdownRows(block)
  const per100gRow = rows.find((row) => normalizeKey(row[0] ?? '').includes('por 100g de prato pronto'))

  return {
    kcalPer100g: parseMacroValue(per100gRow?.[1]),
    proteinGPer100g: parseMacroValue(per100gRow?.[2]),
    carbsGPer100g: parseMacroValue(per100gRow?.[3]),
    fatGPer100g: parseMacroValue(per100gRow?.[4]),
  }
}

function parseSteps(section: string) {
  const block = getHeadingBlock(section, 'Modo de Preparo')
  const steps: string[] = []

  for (const rawLine of block.split(/\r?\n/)) {
    const line = cleanText(rawLine)
    const stepMatch = line.match(/^\d+\.\s+(.+)$/)

    if (stepMatch?.[1]) {
      steps.push(cleanText(stepMatch[1]))
      continue
    }

    if (line && steps.length > 0 && !line.startsWith('|')) {
      steps[steps.length - 1] = `${steps[steps.length - 1]} ${line}`
    }
  }

  return steps
}

function getHeadingBlock(section: string, heading: string) {
  const escapedHeading = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const headingMatch = section.match(new RegExp(`^###\\s+${escapedHeading}\\s*$`, 'm'))
  if (!headingMatch || headingMatch.index === undefined) return ''

  const start = headingMatch.index + headingMatch[0].length
  const rest = section.slice(start)
  const nextHeading = rest.search(/^###\s+/m)
  const nextDivider = rest.search(/^---\s*$/m)
  const candidates = [nextHeading, nextDivider].filter((index) => index >= 0)
  const end = candidates.length ? Math.min(...candidates) : rest.length

  return rest.slice(0, end)
}

function parseMarkdownRows(block: string) {
  return block
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith('|') && !line.includes('---'))
    .map((line) => line.replace(/^\||\|$/g, '').split('|').map(cleanText))
    .filter((cells) => {
      const firstCell = normalizeKey(cells[0] ?? '')

      return firstCell && firstCell !== 'ingrediente' && firstCell !== ''
    })
}

function parseQuantityG(value: string) {
  if (isQuantityFreeSeasoning(value)) return null

  const parentheticalGrams = value.match(/\(\s*~?\s*([\d.]+(?:,\d+)?)\s*g\s*\)/i)
  if (parentheticalGrams?.[1]) return parsePtNumber(parentheticalGrams[1])

  const gramMatch = value.match(/(?:^|\s)([\d.]+(?:,\d+)?)\s*g\b/i)
  if (gramMatch?.[1]) return parsePtNumber(gramMatch[1])

  return null
}

function parseMacroValue(value: string | undefined) {
  if (!value) return null

  const match = value.replace(/\*\*/g, '').match(/[\d.]+(?:,\d+)?/)

  return match?.[0] ? parsePtNumber(match[0]) : null
}

function inferIngredientRole(
  ingredientName: string,
  proteinPrincipal: string | null,
  index: number,
  isFreeSeasoning: boolean,
): ParsedIngredient['role'] {
  if (isFreeSeasoning) return 'seasoning'
  if (index === 0) return 'main'

  const ingredientKey = normalizeKey(stripParenthetical(ingredientName))
  const proteinKey = normalizeKey(stripParenthetical(proteinPrincipal ?? ''))

  if (proteinKey && (proteinKey.includes(ingredientKey) || ingredientKey.includes(proteinKey))) {
    return 'main'
  }

  return 'complement'
}

function inferShoppingCategory(ingredientName: string, role: ParsedIngredient['role']) {
  const key = normalizeKey(ingredientName)

  if (role === 'main' && /frango|patinho|coxao|carne|suino|lombo|tilapia|file/.test(key)) return 'Proteínas'
  if (/ovo|creme de leite/.test(key)) return 'Laticínios'
  if (/milho|farelo|aveia/.test(key)) return 'Carboidratos'
  if (/cebola|alho|tomate|pimentao|salsinha|limao/.test(key)) return 'Vegetais'
  if (/azeite|shoyu|barbecue|ketchup|mostarda|sal|pimenta|louro|colorau|paprica|oregano|alecrim|tomilho|noz-moscada|lemon pepper|cominho/.test(key)) return 'Temperos'

  return role === 'seasoning' ? 'Temperos' : 'Outros'
}

function findCurrentRecipeSlug(suggestedSlug: string, currentBySlug: Map<string, unknown>) {
  if (currentBySlug.has(suggestedSlug)) return suggestedSlug

  const knownMatch = knownSlugMatches.get(suggestedSlug)
  if (knownMatch && currentBySlug.has(knownMatch)) return knownMatch

  return null
}

function hasRecipeNutrition(nutrition: {
  kcalPer100g: number | null
  proteinGPer100g: number | null
  carbsGPer100g: number | null
  fatGPer100g: number | null
}) {
  return [
    nutrition.kcalPer100g,
    nutrition.proteinGPer100g,
    nutrition.carbsGPer100g,
    nutrition.fatGPer100g,
  ].some((value) => value !== null)
}

function buildReport(params: {
  dossierPath: string
  parsedRecipes: ParsedRecipe[]
  existingMatches: ExistingMatch[]
  newRecipes: ParsedRecipe[]
}) {
  const { dossierPath, parsedRecipes, existingMatches, newRecipes } = params
  const ingredientGroups = groupMeasuredIngredients(parsedRecipes)
  const reviewNotes = buildReviewNotes(parsedRecipes, existingMatches)
  const lines: string[] = [
    '# Relatorio seco de importacao do dossie de receitas',
    '',
    `Gerado em: ${new Date().toISOString()}`,
    `Arquivo analisado: \`${dossierPath}\``,
    '',
    'Este relatorio nao grava dados no Supabase, nao altera migrations e nao altera regras de compra, preparo ou porcionamento.',
    '',
    '## Resumo',
    '',
    `- Receitas lidas do dossie: ${parsedRecipes.length}`,
    `- Receitas que parecem ja existir no catalogo local: ${existingMatches.length}`,
    `- Receitas novas candidatas: ${newRecipes.length}`,
    `- Ingredientes medidos unicos detectados: ${Array.from(ingredientGroups.values()).reduce((total, items) => total + items.length, 0)}`,
    '',
    '## Receitas existentes para enriquecer',
    '',
    '| Receita no dossie | Slug atual | Peso pronto atual -> dossie | Ingredientes atual -> dossie | Passos atual -> dossie | Nutricao atual |',
    '|---|---|---:|---:|---:|---|',
    ...existingMatches.map((match) => [
      escapeCell(match.dossier.name),
      `\`${match.currentSlug}\``,
      `${formatWeight(match.currentReadyWeightG)} -> ${formatWeight(match.dossier.baseReadyWeightG)}`,
      `${match.currentIngredientCount} -> ${match.dossier.ingredients.length}`,
      `${match.currentStepCount} -> ${match.dossier.steps.length}`,
      match.currentHasNutrition ? 'ja preenchida' : 'vazia; dossie preenche',
    ].join(' | ')).map((row) => `| ${row} |`),
    '',
    '## Receitas novas candidatas',
    '',
    '| Receita | Slug sugerido | Peso pronto | Ingredientes | Passos |',
    '|---|---|---:|---:|---:|',
    ...newRecipes.map((recipe) => `| ${escapeCell(recipe.name)} | \`${recipe.suggestedSlug}\` | ${formatWeight(recipe.baseReadyWeightG)} | ${recipe.ingredients.length} | ${recipe.steps.length} |`),
    '',
    '## Ingredientes medidos detectados',
    '',
    ...Array.from(ingredientGroups.entries()).flatMap(([category, ingredientNames]) => [
      `### ${category}`,
      '',
      ...ingredientNames.map((name) => `- ${name}`),
      '',
    ]),
    '## Pontos que precisam de decisao antes da importacao real',
    '',
    ...reviewNotes.map((note) => `- ${note}`),
    '',
    '## Proxima etapa segura',
    '',
    'Criar um importador idempotente que use estes dados estruturados para fazer upsert de categorias, tags, ingredientes mestre, receitas, ingredientes da receita e passos. O importador deve ter `--dry-run` e so escrever no Supabase apos autorizacao explicita.',
    '',
  ]

  return `${lines.join('\n')}\n`
}

function groupMeasuredIngredients(recipes: ParsedRecipe[]) {
  const groups = new Map<string, Set<string>>()

  for (const recipe of recipes) {
    for (const ingredient of recipe.ingredients) {
      if (ingredient.isFreeSeasoning || ingredient.quantityG === null) continue

      const names = groups.get(ingredient.shoppingCategory) ?? new Set<string>()
      names.add(`${ingredient.name} (${formatWeight(ingredient.quantityG)})`)
      groups.set(ingredient.shoppingCategory, names)
    }
  }

  return new Map(Array.from(groups.entries()).map(([category, items]) => [
    category,
    Array.from(items).sort((a, b) => a.localeCompare(b, 'pt-BR')),
  ]))
}

function buildReviewNotes(recipes: ParsedRecipe[], existingMatches: ExistingMatch[]) {
  const notes = new Set<string>()
  const matchedCurrentByDossierSlug = new Map(existingMatches.map((match) => [
    match.dossier.suggestedSlug,
    match.currentSlug,
  ]))

  for (const recipe of recipes) {
    if (recipe.baseReadyWeightG === null) {
      notes.add(`${recipe.name}: peso pronto estimado nao foi identificado.`)
    }

    if (recipe.steps.length === 0) {
      notes.add(`${recipe.name}: modo de preparo nao foi identificado.`)
    }

    for (const ingredient of recipe.ingredients) {
      const key = normalizeKey(ingredient.name)

      if (/\bou\b/.test(key)) {
        notes.add(`${recipe.name}: ingrediente com alternativa de compra ("${ingredient.name}"). Escolher um item principal ou cadastrar alternativa com alias antes de publicar.`)
      }

      if (ingredient.quantityG === null && !ingredient.isFreeSeasoning) {
        notes.add(`${recipe.name}: ingrediente sem quantidade em gramas ("${ingredient.name}" / "${ingredient.quantityText}").`)
      }
    }

    const currentSlug = matchedCurrentByDossierSlug.get(recipe.suggestedSlug)
    if (currentSlug && currentSlug !== recipe.suggestedSlug) {
      notes.add(`${recipe.name}: slug do dossie \`${recipe.suggestedSlug}\` deve atualizar a receita existente \`${currentSlug}\`, preservando imagem/status atuais.`)
    }
  }

  notes.add('Receitas existentes devem ser enriquecidas sem apagar imagem, status e eventuais links de video ja cadastrados.')
  notes.add('Ingredientes "a gosto" devem entrar como temperos livres, sem peso de compra obrigatorio.')
  notes.add('Como o app nao prescreve dieta, os dados nutricionais devem ficar como informacao da receita/admin, sem virar foco do fluxo do aluno.')

  return Array.from(notes)
}

function printConsoleSummary(
  outputPath: string,
  parsedRecipes: ParsedRecipe[],
  existingMatches: ExistingMatch[],
  newRecipes: ParsedRecipe[],
) {
  console.log('Auditoria seca do dossie concluida.')
  console.log(`Receitas lidas: ${parsedRecipes.length}`)
  console.log(`Receitas existentes para enriquecer: ${existingMatches.length}`)
  console.log(`Receitas novas candidatas: ${newRecipes.length}`)
  console.log(`Relatorio: ${outputPath}`)
}

function cleanText(value: string) {
  return value.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim()
}

function stripParenthetical(value: string) {
  return value.replace(/\(.+?\)/g, '').trim()
}

function normalizeKey(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .trim()
}

function isQuantityFreeSeasoning(value: string) {
  return normalizeKey(value) === 'a gosto'
}

function parsePtNumber(value: string) {
  return Number(value.replace(/\./g, '').replace(',', '.'))
}

function formatWeight(value: number | null) {
  if (value === null) return 'nao identificado'
  if (value >= 1000) return `${new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(value / 1000)}kg`

  return `${new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(value)}g`
}

function escapeCell(value: string) {
  return value.replace(/\|/g, '\\|')
}

function getArgValue(name: string) {
  const argument = process.argv.find((arg) => arg.startsWith(`${name}=`))

  return argument?.split('=').slice(1).join('=')
}
