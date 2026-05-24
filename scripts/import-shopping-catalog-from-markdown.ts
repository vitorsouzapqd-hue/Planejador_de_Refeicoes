import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'

type ParsedCatalogItem = {
  name: string
  slug: string
  display_name: string
  aliases: string[]
  shopping_category: string
  shopping_subcategory: string | null
  default_quantity_text: string | null
  default_unit: string | null
  notes: string | null
  is_active: boolean
  is_food: boolean
  ingredient_id: string | null
  sort_order: number
}

const DEFAULT_MARKDOWN_PATH = path.join('docs', 'catalogo_compras_rascunho.md')
const DEFAULT_SQL_PATH = path.join('docs', 'supabase-handoff', 'seed_shopping_catalog_items.sql')
const DEPRECATED_GENERIC_SLUGS = [
  'aveia',
  'castanhas',
  'cafe',
  'cebola',
  'chia',
  'curry',
  'feijao',
  'frutas-congeladas',
  'iogurte-natural',
  'linhaca',
  'legumes-congelados',
  'milho',
  'ervilha',
  'azeitona',
  'leite',
  'mel',
  'mostarda',
  'oleo',
  'paprica',
  'polpa-de-fruta',
  'sobrecoxa',
  'suco-zero',
  'uva',
  'vinagre',
]
const ALLOWED_CATEGORIES = new Set([
  'Proteínas',
  'Carboidratos',
  'Vegetais',
  'Frutas',
  'Laticínios',
  'Congelados',
  'Temperos e Condimentos',
  'Despensa',
  'Bebidas',
  'Utilidades',
  'Outros',
])

loadDotEnv()

const dryRun = process.argv.includes('--dry-run')
const writeSql = process.argv.includes('--write-sql') || process.argv.includes('--generate-sql')
const markdownPath = path.resolve(getArgValue('--file') ?? DEFAULT_MARKDOWN_PATH)
const sqlOutputPath = path.resolve(getArgValue('--sql-out') ?? DEFAULT_SQL_PATH)

main().catch((error: unknown) => {
  console.error('\nErro ao importar Lista de Compras.')
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})

async function main() {
  const items = parseMarkdownCatalog(markdownPath)
  const duplicateSlugs = findDuplicateSlugs(items)

  if (duplicateSlugs.length > 0) {
    throw new Error(`Slugs duplicados no markdown: ${duplicateSlugs.join(', ')}`)
  }

  if (writeSql) {
    writeSeedSql(items, sqlOutputPath)
  }

  if (dryRun) {
    printReport({ items, insertedOrUpdated: 0, dryRun: true })
    return
  }

  const supabase = await createSupabaseClient()
  const { error } = await supabase
    .from('shopping_catalog_items')
    .upsert(items, { onConflict: 'slug' })

  if (error) throw error

  const { error: deactivationError } = await supabase
    .from('shopping_catalog_items')
    .update({ is_active: false })
    .in('slug', DEPRECATED_GENERIC_SLUGS)

  if (deactivationError) throw deactivationError

  printReport({ items, insertedOrUpdated: items.length, dryRun: false })
}

export function parseMarkdownCatalog(filePath: string): ParsedCatalogItem[] {
  if (!existsSync(filePath)) {
    throw new Error('Arquivo docs/catalogo_compras_rascunho.md não encontrado. Coloque o rascunho nesse caminho antes de importar.')
  }

  const lines = readFileSync(filePath, 'utf8').split(/\r?\n/)
  const items: ParsedCatalogItem[] = []
  const usedSlugs = new Set<string>()
  let category: string | null = null
  let subcategory: string | null = null

  for (const line of lines) {
    const categoryMatch = line.match(/^#\s+(.+?)\s*$/)
    if (categoryMatch) {
      category = normalizeCategory(categoryMatch[1] ?? '')
      subcategory = null
      continue
    }

    const subcategoryMatch = line.match(/^###\s+(.+?)\s*$/)
    if (subcategoryMatch) {
      subcategory = cleanText(subcategoryMatch[1] ?? '')
      continue
    }

    const itemMatch = line.match(/^-\s+\[(?: |x|X)\]\s+(.+?)\s*$/)
    if (!itemMatch) continue
    if (!category) {
      throw new Error(`Item sem categoria: ${line}`)
    }

    const originalText = cleanText(itemMatch[1] ?? '')
    if (!originalText) continue

    const { name: rawName, quantity } = splitQuantity(originalText)
    const { name, aliases } = extractAliases(rawName)
    const slug = createUniqueSlug(name, category, subcategory, usedSlugs)

    items.push({
      name,
      slug,
      display_name: name,
      aliases,
      shopping_category: category,
      shopping_subcategory: subcategory,
      default_quantity_text: quantity,
      default_unit: inferUnit(quantity),
      notes: null,
      is_active: true,
      is_food: category !== 'Utilidades',
      ingredient_id: null,
      sort_order: items.length + 1,
    })
  }

  return items
}

function normalizeCategory(value: string) {
  const category = cleanText(value)

  if (!ALLOWED_CATEGORIES.has(category)) {
    throw new Error(`Categoria não permitida na Lista de Compras: ${category}`)
  }

  return category
}

function splitQuantity(value: string) {
  const quantityMatch = value.match(
    /\s+((?:\d+(?:[,.]\d+)?)\s*(?:kg|g|ml|l|und|un|unidade|unidades|pacote|pacotes|lata|latas|caixa|caixas|garrafa|garrafas|vidro|vidros|pote|potes|rolo|rolos|maço|maços|bandeja|bandejas|litro|litros|cabeça|cabeças))$/i,
  )

  if (!quantityMatch) {
    return { name: cleanText(value), quantity: null }
  }

  const quantity = cleanText(quantityMatch[1] ?? '').replace(/^(\d+)\s*(kg|g|ml|l|und)$/i, '$1$2')
  const name = cleanText(value.slice(0, quantityMatch.index))

  return { name, quantity }
}

function extractAliases(value: string) {
  const parentheticalMatch = value.match(/^(.+?)\s*\((.+)\)$/)
  if (parentheticalMatch) {
    const baseName = cleanText(parentheticalMatch[1] ?? '')
    const variants = (parentheticalMatch[2] ?? '').split('/').map(cleanText).filter(Boolean)
    const aliases = buildVariantAliases(baseName, variants)

    if (aliases.length === variants.length) {
      return { name: baseName, aliases }
    }

    return { name: cleanText(value), aliases: [] }
  }

  const slashParts = value.split('/').map(cleanText).filter(Boolean)
  if (slashParts.length > 1) {
    return {
      name: slashParts[0] ?? cleanText(value),
      aliases: slashParts.slice(1),
    }
  }

  return { name: cleanText(value), aliases: [] }
}

function buildVariantAliases(baseName: string, variants: string[]) {
  const normalizedBase = normalizeKey(baseName)

  if (normalizedBase === 'aveia') {
    return variants.map((variant) => {
      const normalizedVariant = normalizeKey(variant)
      if (normalizedVariant === 'flocos') return 'Aveia em Flocos'
      if (normalizedVariant === 'farinha') return 'Farinha de Aveia'
      if (normalizedVariant === 'farelo') return 'Farelo de Aveia'

      return `${baseName} ${variant}`.trim()
    })
  }

  if (normalizedBase === 'vinagre') {
    return variants.map((variant) => {
      const normalizedVariant = normalizeKey(variant)
      if (normalizedVariant === 'balsamico') return 'Vinagre Balsâmico'

      return `Vinagre de ${variant.toLocaleLowerCase('pt-BR')}`
    })
  }

  if (normalizedBase === 'mostarda') {
    return variants.map((variant) => `Mostarda ${variant}`)
  }

  if (normalizedBase === 'cafe') {
    return variants.map((variant) => {
      const normalizedVariant = normalizeKey(variant)
      if (normalizedVariant === 'po') return 'Café em Pó'
      if (normalizedVariant === 'graos') return 'Café em Grãos'
      if (normalizedVariant === 'capsulas') return 'Cápsulas de Café'

      return `${baseName} ${variant}`.trim()
    })
  }

  return []
}

function inferUnit(quantity: string | null) {
  if (!quantity) return null

  const unitMatch = quantity.match(/[a-zçãõáéíóú]+$/i)

  return unitMatch?.[0]?.toLocaleLowerCase('pt-BR') ?? null
}

function findDuplicateSlugs(items: ParsedCatalogItem[]) {
  const seen = new Set<string>()
  const duplicates = new Set<string>()

  for (const item of items) {
    if (seen.has(item.slug)) duplicates.add(item.slug)
    seen.add(item.slug)
  }

  return Array.from(duplicates)
}

async function createSupabaseClient(): Promise<SupabaseClient> {
  const supabaseUrl = process.env.NUXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL
  const serviceRoleKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NUXT_SUPABASE_SERVICE_ROLE_KEY
  const anonKey = process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY
  const key = serviceRoleKey ?? anonKey

  if (!supabaseUrl || !key) {
    throw new Error(
      'Supabase não configurado. Informe NUXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY ou NUXT_PUBLIC_SUPABASE_ANON_KEY.',
    )
  }

  const client = createClient(supabaseUrl, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })

  if (serviceRoleKey) return client

  const adminEmail = process.env.SUPABASE_AUTH_EMAIL
  const adminPassword = process.env.SUPABASE_AUTH_PASSWORD

  if (adminEmail && adminPassword) {
    const { error } = await client.auth.signInWithPassword({
      email: adminEmail,
      password: adminPassword,
    })

    if (error) throw error

    return client
  }

  throw new Error(
    'Credencial de escrita ausente. Use SUPABASE_SERVICE_ROLE_KEY ou SUPABASE_AUTH_EMAIL/SUPABASE_AUTH_PASSWORD para importar.',
  )
}

function printReport(params: {
  items: ParsedCatalogItem[]
  insertedOrUpdated: number
  dryRun: boolean
}) {
  const byCategory = new Map<string, number>()
  const subcategories = new Set<string>()

  for (const item of params.items) {
    byCategory.set(item.shopping_category, (byCategory.get(item.shopping_category) ?? 0) + 1)
    if (item.shopping_subcategory) {
      subcategories.add(`${item.shopping_category} > ${item.shopping_subcategory}`)
    }
  }

  console.log('\nImportação da Lista de Compras')
  console.log(`Arquivo: ${markdownPath}`)
  console.log(`Dry run: ${params.dryRun ? 'sim' : 'não'}`)
  console.log(`Categorias detectadas: ${byCategory.size}`)
  console.log(`Subcategorias detectadas: ${subcategories.size}`)
  console.log(`Itens lidos do markdown: ${params.items.length}`)
  console.log(`Itens inseridos/atualizados: ${params.insertedOrUpdated}`)
  if (writeSql) console.log(`SQL idempotente gerado: ${sqlOutputPath}`)
  console.log('\nCategorias:')

  for (const [category, count] of byCategory.entries()) {
    console.log(`- ${category}: ${count}`)
  }
}

function cleanText(value: string) {
  return value.replace(/\s+/g, ' ').trim()
}

function slugify(value: string) {
  return normalizeKey(value)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function createUniqueSlug(
  name: string,
  category: string,
  subcategory: string | null,
  usedSlugs: Set<string>,
) {
  const baseSlug = slugify(name)
  const candidates = [
    baseSlug,
    `${baseSlug}-${slugify(category)}`,
    subcategory ? `${baseSlug}-${slugify(category)}-${slugify(subcategory)}` : null,
  ].filter(Boolean) as string[]

  for (const candidate of candidates) {
    if (!usedSlugs.has(candidate)) {
      usedSlugs.add(candidate)
      return candidate
    }
  }

  let suffix = 2
  while (usedSlugs.has(`${baseSlug}-${suffix}`)) suffix += 1

  const slug = `${baseSlug}-${suffix}`
  usedSlugs.add(slug)
  return slug
}

function writeSeedSql(items: ParsedCatalogItem[], outputPath: string) {
  mkdirSync(path.dirname(outputPath), { recursive: true })
  writeFileSync(outputPath, buildSeedSql(items), 'utf8')
}

export function buildSeedSql(items: ParsedCatalogItem[]) {
  const rows = items
    .map((item) => `  (${[
      sqlText(item.name),
      sqlText(item.slug),
      sqlText(item.display_name),
      sqlTextArray(item.aliases),
      sqlText(item.shopping_category),
      sqlText(item.shopping_subcategory),
      sqlText(item.default_quantity_text),
      sqlText(item.default_unit),
      sqlText(item.notes),
      item.is_active ? 'true' : 'false',
      item.is_food ? 'true' : 'false',
      'null',
      String(item.sort_order),
    ].join(', ')})`)
    .join(',\n')

  return `-- Generated from ${DEFAULT_MARKDOWN_PATH}.
-- Run after migrations that create public.shopping_catalog_items.

insert into public.shopping_catalog_items (
  name,
  slug,
  display_name,
  aliases,
  shopping_category,
  shopping_subcategory,
  default_quantity_text,
  default_unit,
  notes,
  is_active,
  is_food,
  ingredient_id,
  sort_order
)
values
${rows}
on conflict (slug) do update set
  name = excluded.name,
  display_name = excluded.display_name,
  aliases = excluded.aliases,
  shopping_category = excluded.shopping_category,
  shopping_subcategory = excluded.shopping_subcategory,
  default_quantity_text = excluded.default_quantity_text,
  default_unit = excluded.default_unit,
  notes = excluded.notes,
  is_active = excluded.is_active,
  is_food = excluded.is_food,
  ingredient_id = excluded.ingredient_id,
  sort_order = excluded.sort_order,
  updated_at = now();

-- These older generic entries are now represented by specific buyable catalog items
-- such as "Vinagre de Maçã", "Café em Pó" and "Suco de Uva Integral".
update public.shopping_catalog_items
set
  is_active = false,
  updated_at = now()
where slug in (
${DEPRECATED_GENERIC_SLUGS.map((slug) => `  ${sqlText(slug)}`).join(',\n')}
);
`
}

function sqlText(value: string | null) {
  if (value === null) return 'null'

  return `'${value.replace(/'/g, "''")}'`
}

function sqlTextArray(values: string[]) {
  if (values.length === 0) return 'ARRAY[]::text[]'

  return `ARRAY[${values.map(sqlText).join(', ')}]::text[]`
}

function normalizeKey(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .trim()
}

function loadDotEnv() {
  const envPath = path.resolve('.env')
  if (!existsSync(envPath)) return

  const lines = readFileSync(envPath, 'utf8').split(/\r?\n/)

  for (const line of lines) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/)
    if (!match) continue

    const [, key, rawValue] = match
    if (!key || process.env[key] !== undefined) continue

    process.env[key] = stripEnvQuotes(rawValue ?? '')
  }
}

function stripEnvQuotes(value: string) {
  const trimmed = value.trim()

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1)
  }

  return trimmed
}

function getArgValue(name: string) {
  const argument = process.argv.find((arg) => arg.startsWith(`${name}=`))

  return argument?.split('=').slice(1).join('=')
}
