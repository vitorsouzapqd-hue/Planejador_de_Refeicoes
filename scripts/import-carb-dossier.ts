import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { normalizeNameToSlug } from '../src/utils/recipeImages'

type Env = Record<string, string | undefined>
type IngredientRole = 'main' | 'complement' | 'critical' | 'seasoning'
type RoundingMode = 'up' | 'nearest' | 'manual' | 'none'
type RecipeStatus = 'draft' | 'published' | 'archived'

type Nutrition = {
  kcalPer100g: number | null
  proteinGPer100g: number | null
  carbsGPer100g: number | null
  fatGPer100g: number | null
}

type ParsedIngredient = {
  sourceName: string
  purchaseName: string
  displayName: string
  quantityText: string
  quantity: number | null
  unit: 'g' | 'ml' | null
  role: IngredientRole
  includeInShoppingList: boolean
  isFreeSeasoning: boolean
  shoppingCategory: string
  aliases: string[]
  nutrition: Nutrition
}

type ParsedRecipe = {
  index: number
  name: string
  suggestedSlug: string
  targetSlug: string
  type: string
  cookingMethod: string | null
  baseRawWeightG: number
  baseReadyWeightG: number
  nutrition: Nutrition
  ingredients: ParsedIngredient[]
  steps: string[]
}

type ExistingRecipeRow = {
  id: string
  slug: string
  name: string
  status: RecipeStatus
  image_path: string | null
  reference_video_url: string | null
  reference_video_title: string | null
  reference_video_source: string | null
  reference_video_notes: string | null
  sort_order: number
}

type CategoryRow = {
  id: string
  slug: string
}

type TagRow = {
  id: string
  slug: string
}

type IngredientRow = {
  id: string
  name: string
  slug: string
  display_name: string | null
  aliases: string[] | null
}

const DEFAULT_DOSSIER_PATH = path.join(
  process.env.USERPROFILE ?? '',
  'Downloads',
  'carboidratos-engenharia-hibrida.md',
)

const knownSlugMatches = new Map<string, string>([
  ['arroz-com-acafrao', 'arroz-acafrao'],
  ['arroz-com-cenoura', 'arroz-branco-cenoura'],
  ['arroz-branco', 'arroz-branco-cozido'],
  ['arroz-a-grega', 'arroz-branco-grega'],
  ['arroz-com-lentilha', 'arroz-branco-lentilha'],
  ['arroz-com-milho', 'arroz-branco-milho'],
  ['pure-de-batata-inglesa', 'pure-batata-inglesa'],
  ['pure-de-inhame', 'pure-inhame'],
  ['pure-de-mandioca', 'pure-mandioca'],
  ['macarrao', 'macarrao-cozido'],
])

const category = {
  name: 'Carboidratos',
  slug: 'carboidratos',
  description: 'Preparo de carboidratos para porções planejadas por peso pronto.',
  is_active: true,
  sort_order: 2,
}

const recipeTag = {
  name: 'Carboidratos',
  slug: 'carboidratos',
}

loadDotEnv()

const dryRun = process.argv.includes('--dry-run')
const dossierPath = path.resolve(getArgValue('--file') ?? DEFAULT_DOSSIER_PATH)

main().catch((error) => {
  console.error('\nErro ao importar dossie de carboidratos.')
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})

async function main() {
  if (!existsSync(dossierPath)) {
    throw new Error(`Dossie nao encontrado: ${dossierPath}`)
  }

  const recipes = parseDossier(dossierPath)
  const duplicateSlugs = findDuplicates(recipes.map((recipe) => recipe.targetSlug))
  if (duplicateSlugs.length) {
    throw new Error(`Slugs duplicados no dossie: ${duplicateSlugs.join(', ')}`)
  }

  const supabase = await createSupabaseClient()
  const existingRecipesBySlug = await getExistingRecipesBySlug(supabase, recipes.map((recipe) => recipe.targetSlug))
  const importPlan = buildImportPlan(recipes, existingRecipesBySlug)

  printPlan(importPlan, recipes)

  if (dryRun) {
    console.log('\nDry run ativo: nada foi gravado no Supabase.')
    return
  }

  await syncCategory(supabase)
  const categoryId = await getCategoryId(supabase)
  const tagIdsBySlug = await syncTags(supabase, recipes)
  await syncMasterIngredients(supabase, recipes)
  const ingredientsByKey = await getMasterIngredientsByKey(supabase)
  const recipeIdsBySlug = await syncRecipes(supabase, recipes, existingRecipesBySlug, categoryId)
  await syncRecipeRelations(supabase, recipes, recipeIdsBySlug, tagIdsBySlug, ingredientsByKey)

  console.log(
    `\nDossie de carboidratos importado: ${recipes.length} receitas, ${importPlan.toUpdate.length} atualizadas, ${importPlan.toInsert.length} novas.`,
  )
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
    const suggestedSlug = normalizeNameToSlug(name)
    const targetSlug = knownSlugMatches.get(suggestedSlug) ?? suggestedSlug
    const cookingMethod = getMetadataValue(section, 'Método')
    const baseReadyWeightG = parseReadyWeight(section)
    if (!baseReadyWeightG) {
      throw new Error(`Peso pronto nao identificado para ${name}.`)
    }
    const ingredients = parseIngredients(section)
    const baseRawWeightG = sumMeasuredIngredients(ingredients)
    if (baseRawWeightG <= 0) {
      throw new Error(`Peso cru base nao identificado para ${name}.`)
    }

    return {
      index: recipeIndex,
      name,
      suggestedSlug,
      targetSlug,
      type: inferRecipeType(name),
      cookingMethod,
      baseRawWeightG,
      baseReadyWeightG,
      nutrition: parseRecipeNutrition(section),
      ingredients,
      steps: parseSteps(section),
    }
  })
}

function parseIngredients(section: string): ParsedIngredient[] {
  const ingredientNutritionByName = parseIngredientNutrition(section)
  const block = getHeadingBlock(section, 'Ingredientes')
  const rows = parseMarkdownRows(block)
  let mainAssigned = false

  return rows.map(([name = '', quantityText = '']) => {
    const sourceName = cleanText(name)
    const cleanQuantity = cleanText(quantityText)
    const isFreeSeasoning = isQuantityFreeSeasoning(cleanQuantity)
    const quantity = parseQuantity(cleanQuantity)
    const role: IngredientRole = !isFreeSeasoning && !mainAssigned ? 'main' : isFreeSeasoning ? 'seasoning' : 'complement'
    if (role === 'main') mainAssigned = true
    const canonical = canonicalizeIngredient(sourceName, isFreeSeasoning)

    return {
      sourceName,
      purchaseName: canonical.purchaseName,
      displayName: canonical.displayName,
      quantityText: cleanQuantity,
      quantity: quantity.value,
      unit: quantity.unit,
      role,
      includeInShoppingList: true,
      isFreeSeasoning,
      shoppingCategory: inferShoppingCategory(canonical.purchaseName, role),
      aliases: canonical.aliases,
      nutrition: ingredientNutritionByName.get(normalizeKey(sourceName)) ?? emptyNutrition(),
    }
  })
}

function parseIngredientNutrition(section: string) {
  const block = getHeadingBlock(section, 'Tabela Nutricional por Ingrediente')
  const rows = parseMarkdownRows(block)
  const nutritionByName = new Map<string, Nutrition>()

  for (const row of rows) {
    const name = row[0]
    if (!name || normalizeKey(name) === 'ingrediente') continue

    nutritionByName.set(normalizeKey(name), {
      kcalPer100g: parseMacroValue(row[2]),
      proteinGPer100g: parseMacroValue(row[3]),
      carbsGPer100g: parseMacroValue(row[4]),
      fatGPer100g: parseMacroValue(row[5]),
    })
  }

  return nutritionByName
}

function parseRecipeNutrition(section: string): Nutrition {
  const block = getHeadingBlock(section, 'Total da Receita')
  const rows = parseMarkdownRows(block)
  const per100gRow = rows.find((row) => normalizeKey(row[0] ?? '').includes('por 100g'))

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

async function syncCategory(supabase: SupabaseClient) {
  const { error } = await supabase.from('recipe_categories').upsert(category, { onConflict: 'slug' })
  if (error) throw error
}

async function getCategoryId(supabase: SupabaseClient) {
  const { data, error } = await supabase
    .from('recipe_categories')
    .select('id, slug')
    .eq('slug', category.slug)
    .single()

  if (error) throw error

  return (data as CategoryRow).id
}

async function syncTags(supabase: SupabaseClient, recipes: ParsedRecipe[]) {
  const tags = uniqueBy(
    [
      recipeTag,
      ...recipes.map((recipe) => ({
        name: formatRecipeType(recipe.type),
        slug: recipe.type,
      })),
    ],
    (tag) => tag.slug,
  )

  const { error } = await supabase.from('recipe_tags').upsert(tags, { onConflict: 'slug' })
  if (error) throw error

  const { data, error: selectError } = await supabase
    .from('recipe_tags')
    .select('id, slug')
    .in('slug', tags.map((tag) => tag.slug))

  if (selectError) throw selectError

  return new Map((data as TagRow[] | null ?? []).map((tag) => [tag.slug, tag.id]))
}

async function syncMasterIngredients(supabase: SupabaseClient, recipes: ParsedRecipe[]) {
  const ingredients = uniqueBy(
    recipes.flatMap((recipe) =>
      recipe.ingredients
        .filter((ingredient) => ingredient.includeInShoppingList && !ingredient.isFreeSeasoning)
        .map((ingredient, index) => {
          const slug = normalizeNameToSlug(ingredient.purchaseName)

          return {
            name: ingredient.purchaseName,
            slug,
            display_name: ingredient.displayName,
            aliases: unique([
              ...ingredient.aliases,
              ingredient.sourceName,
              stripParenthetical(ingredient.sourceName),
            ].filter((alias) => alias && normalizeNameToSlug(alias) !== slug)),
            shopping_category: ingredient.shoppingCategory,
            default_unit: ingredient.unit ?? 'g',
            is_active: true,
            kcal_per_100g: ingredient.nutrition.kcalPer100g,
            protein_g_per_100g: ingredient.nutrition.proteinGPer100g,
            carbs_g_per_100g: ingredient.nutrition.carbsGPer100g,
            fat_g_per_100g: ingredient.nutrition.fatGPer100g,
            nutrition_source: 'Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.',
            nutrition_notes: 'Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem.',
            default_rounding_mode: 'up' satisfies RoundingMode,
            default_rounding_step: inferRoundingStep(ingredient.shoppingCategory),
            buy_in_whole_packages: false,
            purchase_increment_g: ingredient.unit === 'g' ? inferRoundingStep(ingredient.shoppingCategory) : null,
            sort_order: 30000 + index,
          }
        }),
    ),
    (ingredient) => ingredient.slug,
  )

  if (!ingredients.length) return

  const { error } = await supabase.from('ingredients').upsert(ingredients, { onConflict: 'slug' })
  if (error) throw error
}

async function syncRecipes(
  supabase: SupabaseClient,
  recipes: ParsedRecipe[],
  existingRecipesBySlug: Map<string, ExistingRecipeRow>,
  categoryId: string,
) {
  const maxSortOrder = Math.max(0, ...Array.from(existingRecipesBySlug.values()).map((recipe) => recipe.sort_order))
  const recipeIdsBySlug = new Map<string, string>()
  let newIndex = 1

  for (const recipe of recipes) {
    const existingRecipe = existingRecipesBySlug.get(recipe.targetSlug)
    const row = mapRecipeRow(recipe, categoryId, existingRecipe, maxSortOrder + newIndex)

    if (existingRecipe) {
      const { error } = await supabase.from('recipes').update(row).eq('id', existingRecipe.id)
      if (error) throw error
      recipeIdsBySlug.set(recipe.targetSlug, existingRecipe.id)
      continue
    }

    const { data, error } = await supabase.from('recipes').insert(row).select('id').single()
    if (error) throw error

    recipeIdsBySlug.set(recipe.targetSlug, data.id as string)
    newIndex += 1
  }

  return recipeIdsBySlug
}

async function syncRecipeRelations(
  supabase: SupabaseClient,
  recipes: ParsedRecipe[],
  recipeIdsBySlug: Map<string, string>,
  tagIdsBySlug: Map<string, string>,
  ingredientsByKey: Map<string, string>,
) {
  for (const recipe of recipes) {
    const recipeId = recipeIdsBySlug.get(recipe.targetSlug)
    if (!recipeId) throw new Error(`Receita sem id apos upsert: ${recipe.targetSlug}`)

    const tagIds = [recipeTag.slug, recipe.type]
      .map((slug) => tagIdsBySlug.get(slug))
      .filter((tagId): tagId is string => Boolean(tagId))

    const { error: tagError } = await supabase.rpc('replace_recipe_tags', {
      p_recipe_id: recipeId,
      p_tag_ids: tagIds,
    })
    if (tagError) throw tagError

    const ingredientRows = recipe.ingredients.map((ingredient) => ({
      ingredient_id: ingredient.isFreeSeasoning ? null : ingredientsByKey.get(getIngredientLookupKey(ingredient.purchaseName)) ?? null,
      name: ingredient.purchaseName,
      shopping_category: ingredient.shoppingCategory,
      ingredient_role: ingredient.role,
      base_quantity: ingredient.isFreeSeasoning ? null : ingredient.quantity,
      unit: ingredient.isFreeSeasoning ? null : ingredient.unit,
      is_critical: false,
      is_free_seasoning: ingredient.isFreeSeasoning,
      include_in_shopping_list: ingredient.includeInShoppingList,
      rounding_step: ingredient.isFreeSeasoning ? null : inferRoundingStep(ingredient.shoppingCategory),
      rounding_mode: ingredient.isFreeSeasoning ? 'none' : 'up',
      display_name: ingredient.displayName,
      notes: null,
    }))

    const missingMasterIngredient = ingredientRows.find((ingredient) => {
      return ingredient.include_in_shopping_list && !ingredient.is_free_seasoning && !ingredient.ingredient_id
    })
    if (missingMasterIngredient) {
      throw new Error(`Ingrediente sem mestre para ${recipe.name}: ${missingMasterIngredient.name}`)
    }

    const { error: ingredientError } = await supabase.rpc('replace_recipe_ingredients', {
      p_recipe_id: recipeId,
      p_ingredients: ingredientRows,
    })
    if (ingredientError) throw ingredientError

    const { error: stepError } = await supabase.rpc('replace_recipe_steps', {
      p_recipe_id: recipeId,
      p_steps: recipe.steps.map((instruction) => ({ instruction })),
    })
    if (stepError) throw stepError
  }
}

function mapRecipeRow(
  recipe: ParsedRecipe,
  categoryId: string,
  existingRecipe: ExistingRecipeRow | undefined,
  newSortOrder: number,
) {
  return {
    category_id: categoryId,
    name: recipe.name,
    slug: existingRecipe?.slug ?? recipe.targetSlug,
    short_description: 'Preparo de carboidrato para planejar porções por peso pronto.',
    type: recipe.type,
    status: existingRecipe?.status ?? 'published',
    image_path: existingRecipe?.image_path ?? null,
    reference_video_url: existingRecipe?.reference_video_url ?? null,
    reference_video_title: existingRecipe?.reference_video_title ?? null,
    reference_video_source: existingRecipe?.reference_video_source ?? null,
    reference_video_notes: existingRecipe?.reference_video_notes ?? null,
    base_raw_weight_g: recipe.baseRawWeightG,
    base_clean_weight_g: null,
    base_ready_weight_g: recipe.baseReadyWeightG,
    cooking_method: recipe.cookingMethod,
    correction_factor: null,
    cooking_factor: Number((recipe.baseReadyWeightG / recipe.baseRawWeightG).toFixed(3)),
    base_yield_note: `${formatWeight(recipe.baseRawWeightG)} de ingredientes medidos rende cerca de ${formatWeight(recipe.baseReadyWeightG)} de preparo pronto.`,
    cost_level: inferCostLevel(recipe),
    time_level: inferTimeLevel(recipe),
    work_level: inferWorkLevel(recipe),
    practicality_level: inferPracticalityLevel(recipe),
    freezes_well: !['salada', 'fruta'].includes(recipe.type),
    storage_instructions: 'Manter refrigerado e separar conforme o planejamento.',
    reheat_instructions: 'Reaquecer se fizer sentido para o preparo.',
    locked_recipe_warning: 'Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.',
    kcal_per_100g: recipe.nutrition.kcalPer100g,
    protein_g_per_100g: recipe.nutrition.proteinGPer100g,
    carbs_g_per_100g: recipe.nutrition.carbsGPer100g,
    fat_g_per_100g: recipe.nutrition.fatGPer100g,
    fiber_g_per_100g: null,
    sodium_mg_per_100g: null,
    nutrition_notes: 'Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA.',
    sort_order: existingRecipe?.sort_order ?? newSortOrder,
  }
}

function buildImportPlan(recipes: ParsedRecipe[], existingRecipesBySlug: Map<string, ExistingRecipeRow>) {
  return {
    toUpdate: recipes.filter((recipe) => existingRecipesBySlug.has(recipe.targetSlug)),
    toInsert: recipes.filter((recipe) => !existingRecipesBySlug.has(recipe.targetSlug)),
  }
}

function printPlan(plan: { toUpdate: ParsedRecipe[]; toInsert: ParsedRecipe[] }, recipes: ParsedRecipe[]) {
  const measuredIngredients = uniqueBy(
    recipes.flatMap((recipe) => recipe.ingredients.filter((ingredient) => !ingredient.isFreeSeasoning)),
    (ingredient) => normalizeNameToSlug(ingredient.purchaseName),
  )

  console.log('\nImportacao do dossie de carboidratos')
  console.log(`Arquivo: ${dossierPath}`)
  console.log(`Dry run: ${dryRun ? 'sim' : 'nao'}`)
  console.log(`Receitas lidas: ${recipes.length}`)
  console.log(`Receitas a atualizar: ${plan.toUpdate.length}`)
  console.log(`Receitas novas: ${plan.toInsert.length}`)
  console.log(`Ingredientes mestre medidos: ${measuredIngredients.length}`)
  console.log('\nAtualizar:')
  for (const recipe of plan.toUpdate) console.log(`- ${recipe.name} (${recipe.targetSlug})`)
  console.log('\nInserir:')
  for (const recipe of plan.toInsert) console.log(`- ${recipe.name} (${recipe.targetSlug})`)
}

async function getExistingRecipesBySlug(supabase: SupabaseClient, slugs: string[]) {
  const { data, error } = await supabase
    .from('recipes')
    .select(`
      id,
      slug,
      name,
      status,
      image_path,
      reference_video_url,
      reference_video_title,
      reference_video_source,
      reference_video_notes,
      sort_order
    `)
    .in('slug', slugs)

  if (error) throw error

  return new Map((data as ExistingRecipeRow[] | null ?? []).map((recipe) => [recipe.slug, recipe]))
}

async function getMasterIngredientsByKey(supabase: SupabaseClient) {
  const { data, error } = await supabase
    .from('ingredients')
    .select('id, name, slug, display_name, aliases')
    .eq('is_active', true)

  if (error) throw error

  const ingredientsByKey = new Map<string, string>()

  for (const ingredient of (data as IngredientRow[] | null) ?? []) {
    addIngredientLookupKeys(ingredientsByKey, ingredient.name, ingredient.id)
    addIngredientLookupKeys(ingredientsByKey, ingredient.slug, ingredient.id)
    addIngredientLookupKeys(ingredientsByKey, ingredient.display_name, ingredient.id)

    for (const alias of ingredient.aliases ?? []) {
      addIngredientLookupKeys(ingredientsByKey, alias, ingredient.id)
    }
  }

  return ingredientsByKey
}

function canonicalizeIngredient(value: string, isFreeSeasoning: boolean) {
  if (isFreeSeasoning) {
    return { purchaseName: value, displayName: value, aliases: [] }
  }

  const stripped = stripIngredientDescriptor(value)
  const key = normalizeKey(stripped)

  if (key.includes('abobora')) return named('Abóbora', value, stripped)
  if (key.includes('arroz integral')) return named('Arroz integral', value, stripped)
  if (key.includes('arroz branco')) return named('Arroz branco', value, stripped)
  if (key.includes('batata doce')) return named('Batata doce', value, stripped)
  if (key.includes('batata inglesa')) return named('Batata inglesa', value, stripped)
  if (key.includes('inhame')) return named('Inhame', value, stripped)
  if (key.includes('mandioca')) return named('Mandioca', value, stripped)
  if (key.includes('macarrao integral')) return named('Macarrão integral', value, stripped)
  if (key.includes('macarrao')) return named('Macarrão', value, stripped)
  if (key.includes('feijao carioca')) return named('Feijão carioca', value, stripped)
  if (key.includes('milho verde')) return named('Milho verde', value, stripped)
  if (key.includes('ervilha')) return named('Ervilha', value, stripped)
  if (key.includes('cenoura')) return named('Cenoura', value, stripped)
  if (key.includes('cebola')) return named('Cebola', value, stripped)
  if (key.includes('alho')) return named('Alho', value, stripped)
  if (key.includes('salsinha')) return named('Salsinha', value, stripped)
  if (key.includes('acafrao') || key.includes('curcuma')) return named('Açafrão-da-terra', value, stripped, ['Cúrcuma'])
  if (key.includes('azeite')) return named('Azeite de oliva', value, stripped)
  if (key.includes('lentilha')) return named('Lentilha', value, stripped)
  if (key.includes('talo de couve')) return named('Talo de couve', value, stripped)
  if (key.includes('brocolis')) return named('Brócolis', value, stripped)
  if (key.includes('leite integral')) return named('Leite integral', value, stripped)
  if (key.includes('manteiga')) return named('Manteiga', value, stripped)
  if (key.includes('bacon')) return named('Bacon', value, stripped)

  return named(stripped, value, stripped)
}

function named(purchaseName: string, sourceName: string, strippedName: string, aliases: string[] = []) {
  return {
    purchaseName,
    displayName: purchaseName,
    aliases: unique([sourceName, strippedName, ...aliases].filter((alias) => alias && alias !== purchaseName)),
  }
}

function stripIngredientDescriptor(value: string) {
  return value
    .replace(/\s*\(.+?\)\s*/g, ' ')
    .replace(/\s+seco(?:a|s|as)?$/i, '')
    .replace(/\s+cru(?:a|s|as)?$/i, '')
    .replace(/\s+escorrido(?:a|s|as)?$/i, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function inferShoppingCategory(ingredientName: string, role: IngredientRole) {
  const key = normalizeKey(ingredientName)

  if (/arroz|batata|inhame|mandioca|macarrao|feijao|lentilha/.test(key)) return 'Carboidratos'
  if (/abobora|salsinha|alho|cenoura|cebola|milho|ervilha|couve|brocolis/.test(key)) return 'Vegetais'
  if (/leite|manteiga/.test(key)) return 'Laticínios'
  if (/bacon/.test(key)) return 'Proteínas'
  if (/azeite|sal|pimenta|louro|cominho|noz-moscada|acafrao|curcuma/.test(key)) return 'Temperos e Condimentos'

  return role === 'seasoning' ? 'Temperos e Condimentos' : 'Outros'
}

function inferRecipeType(name: string) {
  const key = normalizeKey(name)

  if (key.includes('arroz')) return 'arroz'
  if (key.includes('batata')) return 'batata'
  if (key.includes('pure')) return 'pure'
  if (key.includes('inhame')) return 'pure'
  if (key.includes('mandioca')) return 'mandioca'
  if (key.includes('macarrao')) return 'massa'
  if (key.includes('feijao')) return 'feijao'

  return 'legumes'
}

function inferRoundingStep(categoryName: string) {
  if (categoryName === 'Carboidratos') return 100
  if (categoryName === 'Temperos e Condimentos') return 10

  return 50
}

function inferCostLevel(recipe: ParsedRecipe) {
  if (recipe.type === 'arroz' || recipe.type === 'massa') return 1
  if (recipe.type === 'feijao') return 2

  return 2
}

function inferTimeLevel(recipe: ParsedRecipe) {
  const method = normalizeKey(recipe.cookingMethod ?? '')

  if (method.includes('pressao')) return 4
  if (method.includes('forno') || method.includes('airfryer')) return 3
  if (recipe.type === 'arroz' || recipe.type === 'massa') return 2

  return 3
}

function inferWorkLevel(recipe: ParsedRecipe) {
  if (recipe.name.includes('Purê') || recipe.type === 'feijao') return 3
  if (recipe.ingredients.length >= 6) return 2

  return 1
}

function inferPracticalityLevel(recipe: ParsedRecipe) {
  if (recipe.name.includes('Purê')) return 3
  if (recipe.type === 'feijao') return 3

  return 4
}

function formatRecipeType(type: string) {
  const labels: Record<string, string> = {
    arroz: 'Arroz',
    batata: 'Batata',
    pure: 'Purê',
    mandioca: 'Mandioca',
    massa: 'Massa',
    feijao: 'Feijão',
    legumes: 'Legumes',
  }

  return labels[type] ?? type
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

function getHeadingBlock(section: string, heading: string) {
  const escapedHeading = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const headingMatch = section.match(new RegExp(`^###\\s+${escapedHeading}\\s*$`, 'm'))
  if (!headingMatch || headingMatch.index === undefined) return ''

  const start = headingMatch.index + headingMatch[0].length
  const rest = section.slice(start)
  const nextHeading = rest.search(/^###\s+/m)
  const nextDivider = rest.search(/^---\s*$/m)
  const candidates = [nextHeading, nextDivider].filter((blockIndex) => blockIndex >= 0)
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

function parseQuantity(value: string): { value: number | null; unit: 'g' | 'ml' | null } {
  if (isQuantityFreeSeasoning(value)) return { value: null, unit: null }

  const parenthetical = value.match(/\(\s*~?\s*([\d.]+(?:,\d+)?)\s*(g|ml)\s*\)/i)
  if (parenthetical?.[1] && parenthetical[2]) {
    return {
      value: parsePtNumber(parenthetical[1]),
      unit: parenthetical[2].toLocaleLowerCase('pt-BR') as 'g' | 'ml',
    }
  }

  const direct = value.match(/(?:^|\s)([\d.]+(?:,\d+)?)\s*(g|ml)\b/i)
  if (direct?.[1] && direct[2]) {
    return {
      value: parsePtNumber(direct[1]),
      unit: direct[2].toLocaleLowerCase('pt-BR') as 'g' | 'ml',
    }
  }

  return { value: null, unit: null }
}

function parseMacroValue(value: string | undefined) {
  if (!value || value.includes('—')) return null

  const match = value.replace(/\*\*/g, '').match(/[\d.]+(?:,\d+)?/)

  return match?.[0] ? parsePtNumber(match[0]) : null
}

function sumMeasuredIngredients(ingredients: ParsedIngredient[]) {
  return ingredients.reduce((total, ingredient) => {
    if (ingredient.isFreeSeasoning || ingredient.quantity === null) return total

    return total + ingredient.quantity
  }, 0)
}

function isQuantityFreeSeasoning(value: string) {
  return normalizeKey(value).startsWith('a gosto')
}

async function createSupabaseClient() {
  const env = loadEnv()
  const supabaseUrl = env.NUXT_PUBLIC_SUPABASE_URL ?? env.SUPABASE_URL
  const serviceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY ?? env.NUXT_SUPABASE_SERVICE_ROLE_KEY
  const anonKey = env.NUXT_PUBLIC_SUPABASE_ANON_KEY ?? env.SUPABASE_ANON_KEY
  const key = serviceRoleKey ?? anonKey

  if (!supabaseUrl || !key) {
    throw new Error('Supabase nao configurado. Informe NUXT_PUBLIC_SUPABASE_URL e uma chave Supabase.')
  }

  const supabase = createClient(supabaseUrl, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })

  if (serviceRoleKey) return supabase

  const email = env.SUPABASE_AUTH_EMAIL
  const password = env.SUPABASE_AUTH_PASSWORD

  if (!email || !password) {
    throw new Error('Credencial de escrita ausente. Use service role ou SUPABASE_AUTH_EMAIL/SUPABASE_AUTH_PASSWORD.')
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error

  return supabase
}

function loadEnv(): Env {
  const envPath = path.resolve('.env')
  const parsed: Env = { ...process.env }

  if (!existsSync(envPath)) return parsed

  for (const line of readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue

    const separatorIndex = trimmed.indexOf('=')
    if (separatorIndex === -1) continue

    const key = trimmed.slice(0, separatorIndex).trim()
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, '')
    parsed[key] = value
  }

  return parsed
}

function loadDotEnv() {
  const env = loadEnv()
  for (const [key, value] of Object.entries(env)) {
    if (process.env[key] === undefined && value !== undefined) {
      process.env[key] = value
    }
  }
}

function addIngredientLookupKeys(masterIngredientsByKey: Map<string, string>, value: string | null, ingredientId: string) {
  if (!value?.trim()) return

  masterIngredientsByKey.set(getIngredientLookupKey(value), ingredientId)
  masterIngredientsByKey.set(normalizeNameToSlug(value), ingredientId)
}

function getIngredientLookupKey(value: string) {
  return normalizeNameToSlug(stripIngredientDescriptor(value))
}

function emptyNutrition(): Nutrition {
  return {
    kcalPer100g: null,
    proteinGPer100g: null,
    carbsGPer100g: null,
    fatGPer100g: null,
  }
}

function cleanText(value: string) {
  return value.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim()
}

function stripParenthetical(value: string) {
  return value.replace(/\(.+?\)/g, '').replace(/\s+/g, ' ').trim()
}

function normalizeKey(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .trim()
}

function parsePtNumber(value: string) {
  return Number(value.replace(/\./g, '').replace(',', '.'))
}

function formatWeight(value: number) {
  if (value >= 1000) return `${new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(value / 1000)}kg`

  return `${new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(value)}g`
}

function unique<T>(items: T[]) {
  return Array.from(new Set(items))
}

function uniqueBy<T>(items: T[], getKey: (item: T) => string) {
  const seen = new Set<string>()

  return items.filter((item) => {
    const key = getKey(item)
    if (seen.has(key)) return false

    seen.add(key)
    return true
  })
}

function findDuplicates(items: string[]) {
  const seen = new Set<string>()
  const duplicates = new Set<string>()

  for (const item of items) {
    if (seen.has(item)) duplicates.add(item)
    seen.add(item)
  }

  return Array.from(duplicates)
}

function getArgValue(name: string) {
  const argument = process.argv.find((arg) => arg.startsWith(`${name}=`))
  if (argument) {
    return argument.split('=').slice(1).join('=')
  }

  const argumentIndex = process.argv.indexOf(name)
  if (argumentIndex < 0) return undefined

  return process.argv[argumentIndex + 1]
}
