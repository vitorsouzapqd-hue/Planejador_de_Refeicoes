import { createClient } from '@supabase/supabase-js'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { listPhotoCatalogRecipes } from '../src/data/photoRecipeCatalog'
import { dossierRecipesProvider } from '../src/providers/recipes/dossierRecipesProvider'
import { mockRecipesProvider } from '../src/providers/recipes/mockRecipesProvider'
import { hasCompoundShoppingName } from '../src/services/shoppingIngredientIdentity'
import type { Recipe } from '../src/types/recipe'

type Env = Record<string, string | undefined>

type AuditFinding = {
  source: string
  recipe: string
  slug: string
  field: string
  message: string
}

type SupabaseRecipeRow = {
  name: string
  slug: string
  recipe_ingredients?: Array<{
    name: string
    display_name: string | null
    ingredient_id: string | null
    include_in_shopping_list: boolean
    is_free_seasoning: boolean
  }>
}

async function main() {
  const findings: AuditFinding[] = []

  findings.push(...auditRecipes('photo-catalog', listPhotoCatalogRecipes()))
  findings.push(...auditRecipes('mock-catalog', await mockRecipesProvider.listPublishedRecipes()))
  findings.push(...auditRecipes('dossier-catalog', await dossierRecipesProvider.listPublishedRecipes()))
  findings.push(...await auditSupabaseRecipes())

  if (!findings.length) {
    console.log('recipe shopping integrity audit passed')
    return
  }

  console.error('recipe shopping integrity audit found issues:')
  for (const finding of findings) {
    console.error(`- [${finding.source}] ${finding.recipe} (${finding.slug}) / ${finding.field}: ${finding.message}`)
  }

  process.exitCode = 1
}

function auditRecipes(source: string, recipes: Recipe[]): AuditFinding[] {
  return recipes.flatMap((recipe) =>
    recipe.ingredients.flatMap((ingredient) => {
      const displayName = ingredient.displayName ?? ingredient.name
      const findings: AuditFinding[] = []

      if (hasCompoundShoppingName(displayName)) {
        findings.push({
          source,
          recipe: recipe.name,
          slug: recipe.slug,
          field: displayName,
          message: 'ingrediente de compra composto; cadastre cada item em uma linha propria.',
        })
      }

      return findings
    }),
  )
}

async function auditSupabaseRecipes(): Promise<AuditFinding[]> {
  const env = loadEnv()
  const supabaseUrl = env.NUXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = env.NUXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.log('Supabase audit skipped: missing NUXT_PUBLIC_SUPABASE_URL or NUXT_PUBLIC_SUPABASE_ANON_KEY.')
    return []
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey)
  const { data, error } = await supabase
    .from('recipes')
    .select(`
      name,
      slug,
      recipe_ingredients (
        name,
        display_name,
        ingredient_id,
        include_in_shopping_list,
        is_free_seasoning
      )
    `)
    .eq('status', 'published')

  if (error) {
    console.log(`Supabase audit skipped: ${error.message}`)
    return []
  }

  return (data as SupabaseRecipeRow[] | null ?? []).flatMap((recipe) =>
    (recipe.recipe_ingredients ?? []).flatMap((ingredient) => {
      const displayName = ingredient.display_name ?? ingredient.name
      const findings: AuditFinding[] = []

      if (hasCompoundShoppingName(displayName)) {
        findings.push({
          source: 'supabase',
          recipe: recipe.name,
          slug: recipe.slug,
          field: displayName,
          message: 'ingrediente de compra composto; cadastre cada item em uma linha propria.',
        })
      }

      if (ingredient.include_in_shopping_list && !ingredient.is_free_seasoning && !ingredient.ingredient_id) {
        findings.push({
          source: 'supabase',
          recipe: recipe.name,
          slug: recipe.slug,
          field: displayName,
          message: 'ingrediente de compra sem ingrediente mestre vinculado.',
        })
      }

      return findings
    }),
  )
}

function loadEnv(): Env {
  const envPath = resolve(process.cwd(), '.env')
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

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
