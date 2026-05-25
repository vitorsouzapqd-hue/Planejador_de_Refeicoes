import { createClient } from '@supabase/supabase-js'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { listPhotoCatalogRecipes } from '../src/data/photoRecipeCatalog'
import type { Recipe } from '../src/types/recipe'

type Env = Record<string, string | undefined>

type RecipeRow = {
  id: string
  slug: string
}

type RecipeIngredientRow = {
  id: string
  recipe_id: string
  ingredient_id: string | null
}

main().catch((error) => {
  console.error('\nErro ao sincronizar fatores de correcao das frutas.')
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})

async function main() {
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

  if (!serviceRoleKey) {
    const email = env.SUPABASE_AUTH_EMAIL
    const password = env.SUPABASE_AUTH_PASSWORD

    if (!email || !password) {
      throw new Error('Credencial de escrita ausente. Use service role ou SUPABASE_AUTH_EMAIL/SUPABASE_AUTH_PASSWORD.')
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
  }

  const fruitRecipes = listPhotoCatalogRecipes({ categorySlug: 'frutas' })
  const recipeSlugs = fruitRecipes.map((recipe) => recipe.slug)
  const { data: recipeRows, error: recipeError } = await supabase
    .from('recipes')
    .select('id, slug')
    .in('slug', recipeSlugs)

  if (recipeError) throw recipeError

  const recipesBySlug = new Map((recipeRows as RecipeRow[] | null ?? []).map((recipe) => [recipe.slug, recipe.id]))
  const recipeIds = [...recipesBySlug.values()]
  const { data: ingredientRows, error: ingredientError } = await supabase
    .from('recipe_ingredients')
    .select('id, recipe_id, ingredient_id')
    .in('recipe_id', recipeIds)
    .eq('ingredient_role', 'main')

  if (ingredientError) throw ingredientError

  const recipeIngredientsByRecipeId = new Map(
    (ingredientRows as RecipeIngredientRow[] | null ?? []).map((ingredient) => [ingredient.recipe_id, ingredient]),
  )

  let updatedRecipes = 0
  let updatedRecipeIngredients = 0
  let updatedMasterIngredients = 0

  for (const recipe of fruitRecipes) {
    const recipeId = recipesBySlug.get(recipe.slug)
    if (!recipeId) continue

    const mainIngredient = recipe.ingredients[0]
    if (!mainIngredient) continue

    const correctionFactor = getCorrectionFactor(recipe)
    const ediblePortionPercent = getEdiblePortionPercent(recipe)

    const { error: recipeUpdateError } = await supabase
      .from('recipes')
      .update({
        base_raw_weight_g: recipe.baseRawWeightG,
        base_clean_weight_g: recipe.baseCleanWeightG ?? recipe.baseReadyWeightG,
        base_ready_weight_g: recipe.baseReadyWeightG,
        correction_factor: correctionFactor,
        cooking_factor: Number((recipe.baseReadyWeightG / recipe.baseRawWeightG).toFixed(3)),
        base_yield_note: recipe.baseYieldNote,
      })
      .eq('id', recipeId)

    if (recipeUpdateError) throw recipeUpdateError
    updatedRecipes += 1

    const { error: ingredientUpdateError } = await supabase
      .from('recipe_ingredients')
      .update({
        name: mainIngredient.name,
        display_name: mainIngredient.displayName,
        shopping_category: mainIngredient.shoppingCategory,
        base_quantity: mainIngredient.baseQuantity,
        unit: mainIngredient.unit,
        rounding_step: mainIngredient.roundingStep,
        rounding_mode: mainIngredient.roundingMode,
      })
      .eq('recipe_id', recipeId)
      .eq('ingredient_role', 'main')

    if (ingredientUpdateError) throw ingredientUpdateError
    updatedRecipeIngredients += 1

    const recipeIngredient = recipeIngredientsByRecipeId.get(recipeId)
    if (recipeIngredient?.ingredient_id) {
      const { error: masterIngredientError } = await supabase
        .from('ingredients')
        .update({
          default_correction_factor: correctionFactor,
          edible_portion_percent: ediblePortionPercent,
          correction_notes: 'Fator de correcao aplicado para converter peso pronto comestivel em peso de compra.',
          default_rounding_step: mainIngredient.roundingStep,
          purchase_increment_g: mainIngredient.roundingStep,
        })
        .eq('id', recipeIngredient.ingredient_id)

      if (masterIngredientError) throw masterIngredientError
      updatedMasterIngredients += 1
    }
  }

  console.log(
    `Fatores de frutas sincronizados: ${updatedRecipes} receitas, ${updatedRecipeIngredients} ingredientes de receita, ${updatedMasterIngredients} ingredientes mestre.`,
  )
}

function getCorrectionFactor(recipe: Recipe) {
  return Number((recipe.baseRawWeightG / recipe.baseReadyWeightG).toFixed(2))
}

function getEdiblePortionPercent(recipe: Recipe) {
  return Number(((recipe.baseReadyWeightG / recipe.baseRawWeightG) * 100).toFixed(1))
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
