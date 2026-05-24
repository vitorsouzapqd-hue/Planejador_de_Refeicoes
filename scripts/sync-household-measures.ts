import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { existsSync, readFileSync } from 'node:fs'

type Measure = {
  measure_name: string
  grams_equivalent: number | null
  ml_equivalent: number | null
  is_default: boolean
  notes: string | null
}

type IngredientRow = {
  id: string
  slug: string
  name: string
}

const dryRun = process.argv.includes('--dry-run')

const measuresBySlug: Record<string, Measure[]> = {
  abacaxi: [
    measure('1 fatia fina', 75, true),
    measure('1 fatia média', 100),
    measure('1 xícara picado', 165),
  ],
  abobora: [
    measure('1 colher de sopa cozida', 35, true),
    measure('1 colher de servir cozida', 90),
    measure('1 xícara em cubos cozida', 180),
  ],
  'acafrao-da-terra': [
    measure('1 colher de chá rasa', 2, true),
    measure('1 colher de sopa rasa', 6),
  ],
  agriao: [
    measure('1 xícara cheia', 20, true),
    measure('1 prato de sobremesa', 35),
  ],
  alface: [
    measure('1 folha média', 10, true),
    measure('1 prato de sobremesa', 30),
    measure('1 prato cheio', 60),
  ],
  alho: [
    measure('1 dente pequeno', 3, true),
    measure('1 dente médio', 5),
    measure('1 dente grande', 7),
  ],
  'arroz-branco': [
    measure('1 colher de sopa de arroz cozido', 25),
    measure('1 colher de servir de arroz cozido', 80),
    measure('1 escumadeira de arroz cozido', 100),
    measure('1 colher de sopa de arroz cru', 15, true),
    measure('1 xícara de arroz cru', 180),
  ],
  'arroz-integral': [
    measure('1 colher de sopa de arroz cozido', 25),
    measure('1 colher de servir de arroz cozido', 80),
    measure('1 escumadeira de arroz cozido', 100),
    measure('1 colher de sopa de arroz cru', 15, true),
    measure('1 xícara de arroz cru', 180),
  ],
  'azeite-de-oliva': [
    measure('1 colher de chá', 4.5, true, 5),
    measure('1 colher de sopa', 13.5, false, 15),
  ],
  bacon: [
    measure('1 fatia fina', 10, true),
    measure('1 colher de sopa em cubos', 15),
  ],
  banana: [
    measure('1 unidade pequena', 55, true),
    measure('1 unidade média', 80),
    measure('1 unidade grande', 110),
  ],
  'batata-doce': [
    measure('1 unidade pequena', 100, true),
    measure('1 unidade média', 150),
    measure('1 unidade grande', 220),
    measure('1 colher de servir cozida', 90),
  ],
  'batata-inglesa': [
    measure('1 unidade pequena', 90, true),
    measure('1 unidade média', 150),
    measure('1 unidade grande', 220),
    measure('1 colher de servir cozida', 85),
  ],
  beterraba: [
    measure('1 unidade pequena', 80, true),
    measure('1 unidade média', 140),
    measure('1 colher de servir cozida', 90),
  ],
  brocolis: [
    measure('1 xícara cozido', 90, true),
    measure('1 colher de servir cozido', 80),
  ],
  caqui: [
    measure('1 unidade pequena', 80, true),
    measure('1 unidade média', 110),
    measure('1 unidade grande', 160),
  ],
  cebola: [
    measure('1 unidade pequena', 70, true),
    measure('1 unidade média', 100),
    measure('1 unidade grande', 150),
    measure('1 colher de sopa picada', 10),
  ],
  'cebola-roxa': [
    measure('1 unidade pequena', 70, true),
    measure('1 unidade média', 100),
    measure('1 unidade grande', 150),
    measure('1 colher de sopa picada', 10),
  ],
  cenoura: [
    measure('1 unidade pequena', 60, true),
    measure('1 unidade média', 100),
    measure('1 unidade grande', 150),
    measure('1 colher de servir cozida', 80),
  ],
  couve: [
    measure('1 folha média', 20, true),
    measure('1 xícara fatiada', 35),
  ],
  'couve-flor': [
    measure('1 xícara cozida', 100, true),
    measure('1 colher de servir cozida', 90),
  ],
  'coxao-mole': [
    measure('1 bife pequeno cru', 100, true),
    measure('1 bife médio cru', 150),
    measure('1 bife grande cru', 200),
  ],
  'creme-de-leite-light': [
    measure('1 colher de sopa', 15, true),
    measure('1/2 caixinha', 100),
    measure('1 caixinha', 200),
  ],
  ervilha: [
    measure('1 colher de sopa', 20, true),
    measure('1/2 xícara', 80),
    measure('1 xícara', 160),
  ],
  'extrato-de-tomate': [
    measure('1 colher de sopa', 20, true),
    measure('1 sachê pequeno', 130),
  ],
  'farelo-de-aveia': [
    measure('1 colher de chá', 3, true),
    measure('1 colher de sopa', 10),
    measure('1/2 xícara', 40),
  ],
  'feijao-carioca': [
    measure('1 concha pequena de feijão cozido', 80),
    measure('1 concha média de feijão cozido', 120),
    measure('1 concha grande de feijão cozido', 160),
    measure('1 colher de sopa de feijão cru', 15, true),
  ],
  'feijao-preto-cru': [
    measure('1 concha pequena de feijão cozido', 80),
    measure('1 concha média de feijão cozido', 120),
    measure('1 concha grande de feijão cozido', 160),
    measure('1 colher de sopa de feijão cru', 15, true),
  ],
  'file-de-tilapia': [
    measure('1 filé pequeno cru', 100, true),
    measure('1 filé médio cru', 150),
    measure('1 filé grande cru', 200),
  ],
  'file-mignon-suino': [
    measure('1 medalhão pequeno cru', 80, true),
    measure('1 medalhão médio cru', 120),
    measure('1 bife médio cru', 150),
  ],
  goiaba: [
    measure('1 unidade pequena', 90, true),
    measure('1 unidade média', 130),
    measure('1 unidade grande', 180),
  ],
  inhame: [
    measure('1 unidade pequena', 90, true),
    measure('1 unidade média', 150),
    measure('1 colher de servir cozido', 90),
  ],
  ketchup: [
    measure('1 colher de chá', 5, true),
    measure('1 colher de sopa', 15),
  ],
  laranja: [
    measure('1 unidade pequena', 100, true),
    measure('1 unidade média', 130),
    measure('1 unidade grande', 180),
  ],
  'leite-integral': [
    measure('1 colher de sopa', 15, true, 15),
    measure('1/2 xícara', 120, false, 120),
    measure('1 xícara', 240, false, 240),
  ],
  lentilha: [
    measure('1 concha pequena cozida', 80),
    measure('1 concha média cozida', 120),
    measure('1 colher de sopa de lentilha crua', 15, true),
  ],
  limao: [
    measure('1 unidade pequena', 50, true),
    measure('1 unidade média', 70),
    measure('suco de 1 limão médio', 35, false, 35),
  ],
  'lombo-suino': [
    measure('1 bife pequeno cru', 100, true),
    measure('1 bife médio cru', 150),
    measure('1 fatia assada média', 80),
  ],
  maca: [
    measure('1 unidade pequena', 100, true),
    measure('1 unidade média', 130),
    measure('1 unidade grande', 180),
  ],
  macarrao: [
    measure('1 pegador de macarrão cozido', 100, true),
    measure('1 xícara de macarrão cozido', 140),
    measure('1 xícara de macarrão cru', 100),
  ],
  'macarrao-integral': [
    measure('1 pegador de macarrão cozido', 100, true),
    measure('1 xícara de macarrão cozido', 140),
    measure('1 xícara de macarrão cru', 100),
  ],
  mamao: [
    measure('1 fatia média', 120, true),
    measure('1/2 mamão papaia', 150),
    measure('1 xícara em cubos', 140),
  ],
  mandioca: [
    measure('1 pedaço pequeno cozido', 60, true),
    measure('1 pedaço médio cozido', 100),
    measure('1 colher de servir cozida', 90),
  ],
  manga: [
    measure('1 fatia média', 100, true),
    measure('1 xícara em cubos', 165),
    measure('1 unidade média sem casca', 250),
  ],
  manteiga: [
    measure('1 colher de chá', 5, true),
    measure('1 colher de sopa', 14),
  ],
  melancia: [
    measure('1 fatia fina', 150, true),
    measure('1 fatia média', 250),
    measure('1 xícara em cubos', 150),
  ],
  melao: [
    measure('1 fatia média', 150, true),
    measure('1 xícara em cubos', 160),
  ],
  'milho-verde': [
    measure('1 colher de sopa', 20, true),
    measure('1/2 xícara', 80),
    measure('1 espiga média debulhada', 100),
  ],
  'molho-barbecue': [
    measure('1 colher de chá', 6, true),
    measure('1 colher de sopa', 18),
  ],
  morango: [
    measure('1 unidade média', 12, true),
    measure('1 xícara fatiado', 150),
  ],
  'mostarda-amarela': [
    measure('1 colher de chá', 5, true),
    measure('1 colher de sopa', 15),
  ],
  'ovo-inteiro': [
    measure('1 unidade pequena', 45, true),
    measure('1 unidade média', 50),
    measure('1 unidade grande', 60),
  ],
  patinho: [
    measure('1 bife pequeno cru', 100, true),
    measure('1 bife médio cru', 150),
    measure('1 bife grande cru', 200),
  ],
  'patinho-moido': [
    measure('1 colher de servir cru', 80, true),
    measure('1 xícara cru', 150),
  ],
  'peito-de-frango': [
    measure('1 filé pequeno cru', 100, true),
    measure('1 filé médio cru', 150),
    measure('1 filé grande cru', 200),
  ],
  pepino: [
    measure('1/2 unidade média', 100, true),
    measure('1 unidade média', 200),
    measure('1 xícara fatiado', 120),
  ],
  pera: [
    measure('1 unidade pequena', 100, true),
    measure('1 unidade média', 130),
    measure('1 unidade grande', 180),
  ],
  pimentao: [
    measure('1 unidade pequena', 100, true),
    measure('1 unidade média', 150),
    measure('1 unidade grande', 200),
    measure('1 colher de sopa picado', 10),
  ],
  pitaya: [
    measure('1/2 unidade média', 100, true),
    measure('1 unidade média', 200),
    measure('1 xícara em cubos', 170),
  ],
  repolho: [
    measure('1 xícara fatiado', 70, true),
    measure('1 prato de sobremesa', 90),
  ],
  'repolho-roxo': [
    measure('1 xícara fatiado', 70, true),
    measure('1 prato de sobremesa', 90),
  ],
  'repolho-verde': [
    measure('1 xícara fatiado', 70, true),
    measure('1 prato de sobremesa', 90),
  ],
  salsinha: [
    measure('1 colher de sopa picada', 4, true),
    measure('1/2 xícara picada', 20),
  ],
  shoyu: [
    measure('1 colher de chá', 5, true, 5),
    measure('1 colher de sopa', 15, false, 15),
  ],
  'sobrecoxa-de-frango': [
    measure('1 unidade pequena crua sem osso', 90, true),
    measure('1 unidade média crua sem osso', 130),
    measure('1 unidade grande crua sem osso', 180),
  ],
  'talo-de-couve': [
    measure('1 colher de sopa picado', 10, true),
    measure('1/2 xícara picado', 45),
  ],
  tangerina: [
    measure('1 unidade pequena', 80, true),
    measure('1 unidade média', 100),
    measure('1 unidade grande', 140),
  ],
  tomate: [
    measure('1 unidade pequena', 80, true),
    measure('1 unidade média', 120),
    measure('1 unidade grande', 180),
    measure('1 colher de sopa picado', 15),
  ],
  'uva-roxa': [
    measure('10 unidades', 50, true),
    measure('1 xícara', 150),
  ],
  'uva-verde': [
    measure('10 unidades', 50, true),
    measure('1 xícara', 150),
  ],
}

loadDotEnv()

main().catch((error) => {
  console.error('\nErro ao sincronizar medidas caseiras.')
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})

async function main() {
  const supabase = await createSupabaseClient()
  const slugs = Object.keys(measuresBySlug)
  const { data, error } = await supabase
    .from('ingredients')
    .select('id, slug, name')
    .in('slug', slugs)

  if (error) throw error

  const ingredients = (data as IngredientRow[] | null) ?? []
  const ingredientBySlug = new Map(ingredients.map((ingredient) => [ingredient.slug, ingredient]))
  const missingSlugs = slugs.filter((slug) => !ingredientBySlug.has(slug))

  console.log('\nSincronizacao de medidas caseiras')
  console.log(`Dry run: ${dryRun ? 'sim' : 'nao'}`)
  console.log(`Ingredientes cobertos: ${ingredients.length}`)
  console.log(`Slugs sem ingrediente no Supabase: ${missingSlugs.length}`)

  if (missingSlugs.length) {
    console.log(missingSlugs.map((slug) => `- ${slug}`).join('\n'))
  }

  if (dryRun) return

  for (const slug of slugs) {
    const ingredient = ingredientBySlug.get(slug)
    if (!ingredient) continue

    const measures = measuresBySlug[slug].map((item) => ({
      ...item,
      notes: item.notes ?? 'Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.',
    }))

    const { error: measureError } = await supabase.rpc('replace_ingredient_household_measures', {
      p_ingredient_id: ingredient.id,
      p_measures: measures,
    })

    if (measureError) throw measureError

    console.log(`- ${ingredient.name}: ${measures.length} medida(s)`)
  }
}

function measure(
  measureName: string,
  gramsEquivalent: number | null,
  isDefault = false,
  mlEquivalent: number | null = null,
): Measure {
  return {
    measure_name: measureName,
    grams_equivalent: gramsEquivalent,
    ml_equivalent: mlEquivalent,
    is_default: isDefault,
    notes: null,
  }
}

async function createSupabaseClient(): Promise<SupabaseClient> {
  const url = process.env.NUXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.NUXT_SUPABASE_SERVICE_ROLE_KEY ??
    process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY
    ?? process.env.SUPABASE_ANON_KEY
  const hasServiceRole = Boolean(
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NUXT_SUPABASE_SERVICE_ROLE_KEY,
  )

  if (!url || !key) {
    throw new Error('Configure NUXT_PUBLIC_SUPABASE_URL e uma chave Supabase no .env.')
  }

  const supabase = createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })

  if (hasServiceRole) return supabase

  const email = process.env.SUPABASE_AUTH_EMAIL
  const password = process.env.SUPABASE_AUTH_PASSWORD

  if (!email || !password) {
    throw new Error('Credencial de escrita ausente. Use service role ou SUPABASE_AUTH_EMAIL/SUPABASE_AUTH_PASSWORD.')
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error

  return supabase
}

function loadDotEnv() {
  if (!existsSync('.env')) return

  const content = readFileSync('.env', 'utf8')
  for (const line of content.split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/)
    if (!match) continue

    let value = match[2] ?? ''
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }

    process.env[match[1] ?? ''] ??= value
  }
}
