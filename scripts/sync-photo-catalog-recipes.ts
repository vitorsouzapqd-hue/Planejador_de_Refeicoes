import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { listPhotoCatalogRecipes } from '../src/data/photoRecipeCatalog'
import type { Recipe } from '../src/types/recipe'
import { normalizeNameToSlug } from '../src/utils/recipeImages'

type Env = Record<string, string>

type DbCategory = {
  id: string
  slug: string
}

type DbTag = {
  id: string
  slug: string
}

type DbRecipe = {
  id: string
  slug: string
  image_path: string | null
}

type DbIngredient = {
  id: string
  name: string
  slug: string
  display_name: string | null
  aliases: string[] | null
}

const categoryDescriptions: Record<string, string> = {
  proteinas: 'Preparo de proteinas para porcoes planejadas.',
  carboidratos: 'Arroz, batatas, massas e outras bases para porcoes.',
  saladas: 'Folhas, legumes e mixes de salada para montar refeicoes.',
  frutas: 'Frutas planejadas em gramas.',
}

async function main() {
  const env = loadEnv()
  const supabaseUrl = env.NUXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = env.NUXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('NUXT_PUBLIC_SUPABASE_URL e NUXT_PUBLIC_SUPABASE_ANON_KEY precisam estar no .env.')
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey)

  if (env.SUPABASE_AUTH_EMAIL && env.SUPABASE_AUTH_PASSWORD) {
    const { error } = await supabase.auth.signInWithPassword({
      email: env.SUPABASE_AUTH_EMAIL,
      password: env.SUPABASE_AUTH_PASSWORD,
    })

    if (error) throw error
  }

  const recipes = listPhotoCatalogRecipes()
  const categoriesBySlug = await syncCategories(supabase, recipes)
  const tagsBySlug = await syncTags(supabase, recipes)
  const initialMasterIngredientsByKey = await getMasterIngredientsByKey(supabase)
  await ensureRecipeMasterIngredients(supabase, recipes, initialMasterIngredientsByKey)
  const masterIngredientsByKey = await getMasterIngredientsByKey(supabase)
  const syncResult = await syncRecipes(supabase, recipes, categoriesBySlug)
  const repairExistingIngredients = env.REPAIR_PHOTO_RECIPE_INGREDIENTS === 'true'

  await syncTagLinks(supabase, recipes, syncResult.recipesBySlug, tagsBySlug)
  await syncRecipeDetails(
    supabase,
    recipes,
    syncResult.recipesBySlug,
    syncResult.initialExistingSlugs,
    masterIngredientsByKey,
    repairExistingIngredients,
  )

  console.log(
    `Catalogo sincronizado: ${recipes.length} receitas, ${syncResult.insertedCount} novas, ${syncResult.updatedCount} ja existentes atualizadas.`,
  )
  if (repairExistingIngredients) {
    console.log('Ingredientes existentes do catalogo fotografico foram substituidos pela fonte local atual.')
  }
}

async function syncCategories(supabase: ReturnType<typeof createClient>, recipes: Recipe[]) {
  const categories = uniqueBy(
    recipes
      .map((recipe) => recipe.category)
      .filter((category): category is NonNullable<Recipe['category']> => Boolean(category)),
    (category) => category.slug,
  )

  const rows = categories.map((category) => ({
    name: category.name,
    slug: category.slug,
    description: categoryDescriptions[category.slug] ?? category.description,
    is_active: true,
    sort_order: category.sortOrder,
  }))

  const { error } = await supabase.from('recipe_categories').upsert(rows, { onConflict: 'slug' })
  if (error) throw error

  const { data, error: selectError } = await supabase
    .from('recipe_categories')
    .select('id, slug')
    .in('slug', categories.map((category) => category.slug))

  if (selectError) throw selectError

  return new Map((data as DbCategory[] | null ?? []).map((category) => [category.slug, category.id]))
}

async function syncTags(supabase: ReturnType<typeof createClient>, recipes: Recipe[]) {
  const tags = uniqueBy(recipes.flatMap((recipe) => recipe.tags), (tag) => tag.slug)
  const rows = tags.map((tag) => ({
    name: tag.name,
    slug: tag.slug,
  }))

  const { error } = await supabase.from('recipe_tags').upsert(rows, { onConflict: 'slug' })
  if (error) throw error

  const { data, error: selectError } = await supabase
    .from('recipe_tags')
    .select('id, slug')
    .in('slug', tags.map((tag) => tag.slug))

  if (selectError) throw selectError

  return new Map((data as DbTag[] | null ?? []).map((tag) => [tag.slug, tag.id]))
}

async function syncRecipes(
  supabase: ReturnType<typeof createClient>,
  recipes: Recipe[],
  categoriesBySlug: Map<string, string>,
) {
  const slugs = recipes.map((recipe) => recipe.slug)
  const { data: existingData, error: existingError } = await supabase
    .from('recipes')
    .select('id, slug, image_path')
    .in('slug', slugs)

  if (existingError) throw existingError

  const existingBySlug = new Map((existingData as DbRecipe[] | null ?? []).map((recipe) => [recipe.slug, recipe]))
  const initialExistingSlugs = new Set(existingBySlug.keys())
  const rowsToInsert = recipes
    .filter((recipe) => !existingBySlug.has(recipe.slug))
    .map((recipe) => mapRecipeInsert(recipe, categoriesBySlug))

  if (rowsToInsert.length) {
    const { error } = await supabase.from('recipes').insert(rowsToInsert)
    if (error) throw error
  }

  const rowsToUpdate = recipes
    .filter((recipe) => existingBySlug.has(recipe.slug))
    .map((recipe) => {
      const existing = existingBySlug.get(recipe.slug)

      return {
        slug: recipe.slug,
        category_id: getCategoryId(recipe, categoriesBySlug),
        status: 'published',
        image_path: existing?.image_path ?? recipe.imagePath,
        sort_order: recipe.sortOrder,
      }
    })

  for (const row of rowsToUpdate) {
    const { slug, ...updateRow } = row
    const { error } = await supabase.from('recipes').update(updateRow).eq('slug', slug)
    if (error) throw error
  }

  const { data: recipeData, error: recipeError } = await supabase
    .from('recipes')
    .select('id, slug, image_path')
    .in('slug', slugs)

  if (recipeError) throw recipeError

  return {
    insertedCount: rowsToInsert.length,
    updatedCount: rowsToUpdate.length,
    initialExistingSlugs,
    recipesBySlug: new Map((recipeData as DbRecipe[] | null ?? []).map((recipe) => [recipe.slug, recipe.id])),
  }
}

async function syncTagLinks(
  supabase: ReturnType<typeof createClient>,
  recipes: Recipe[],
  recipesBySlug: Map<string, string>,
  tagsBySlug: Map<string, string>,
) {
  const rows = recipes.flatMap((recipe) => {
    const recipeId = recipesBySlug.get(recipe.slug)
    if (!recipeId) return []

    return recipe.tags.flatMap((tag) => {
      const tagId = tagsBySlug.get(tag.slug)
      if (!tagId) return []

      return { recipe_id: recipeId, tag_id: tagId }
    })
  })

  if (!rows.length) return

  const { error } = await supabase.from('recipe_tag_links').upsert(rows, {
    onConflict: 'recipe_id,tag_id',
  })

  if (error) throw error
}

async function syncRecipeDetails(
  supabase: ReturnType<typeof createClient>,
  recipes: Recipe[],
  recipesBySlug: Map<string, string>,
  initialExistingSlugs: Set<string>,
  masterIngredientsByKey: Map<string, string>,
  repairExistingIngredients: boolean,
) {
  const recipeIds = [...recipesBySlug.values()]
  const [ingredientCounts, stepCounts] = await Promise.all([
    getDetailRecipeIds(supabase, 'recipe_ingredients', recipeIds),
    getDetailRecipeIds(supabase, 'recipe_steps', recipeIds),
  ])

  if (repairExistingIngredients && recipeIds.length) {
    const { error } = await supabase.from('recipe_ingredients').delete().in('recipe_id', recipeIds)
    if (error) throw error
    ingredientCounts.clear()
  }

  const ingredientRows = recipes.flatMap((recipe) => {
    const recipeId = recipesBySlug.get(recipe.slug)
    if (!recipeId) return []
    if (initialExistingSlugs.has(recipe.slug) && ingredientCounts.has(recipeId)) return []

    return recipe.ingredients.map((ingredient) => ({
      recipe_id: recipeId,
      ingredient_id: findMasterIngredientId(ingredient.name, masterIngredientsByKey),
      name: ingredient.name,
      shopping_category: ingredient.shoppingCategory,
      ingredient_role: ingredient.ingredientRole,
      base_quantity: ingredient.baseQuantity,
      unit: ingredient.unit,
      is_critical: ingredient.isCritical,
      is_free_seasoning: ingredient.isFreeSeasoning,
      include_in_shopping_list: ingredient.includeInShoppingList,
      rounding_step: ingredient.roundingStep,
      rounding_mode: ingredient.roundingMode,
      display_name: ingredient.displayName,
      notes: ingredient.notes,
      sort_order: ingredient.sortOrder,
    }))
  })

  if (ingredientRows.length) {
    const { error } = await supabase.from('recipe_ingredients').insert(ingredientRows)
    if (error) throw error
  }

  const stepRows = recipes.flatMap((recipe) => {
    const recipeId = recipesBySlug.get(recipe.slug)
    if (!recipeId) return []
    if (initialExistingSlugs.has(recipe.slug) && stepCounts.has(recipeId)) return []

    return recipe.steps.map((step) => ({
      recipe_id: recipeId,
      step_number: step.stepNumber,
      instruction: step.instruction,
    }))
  })

  if (stepRows.length) {
    const { error } = await supabase.from('recipe_steps').insert(stepRows)
    if (error) throw error
  }
}

async function getMasterIngredientsByKey(supabase: ReturnType<typeof createClient>) {
  const { data, error } = await supabase
    .from('ingredients')
    .select('id, name, slug, display_name, aliases')
    .eq('is_active', true)

  if (error) throw error

  const ingredientsByKey = new Map<string, string>()

  for (const ingredient of (data as DbIngredient[] | null) ?? []) {
    addIngredientLookupKeys(ingredientsByKey, ingredient.name, ingredient.id)
    addIngredientLookupKeys(ingredientsByKey, ingredient.slug, ingredient.id)
    addIngredientLookupKeys(ingredientsByKey, ingredient.display_name, ingredient.id)

    for (const alias of ingredient.aliases ?? []) {
      addIngredientLookupKeys(ingredientsByKey, alias, ingredient.id)
    }
  }

  return ingredientsByKey
}

async function ensureRecipeMasterIngredients(
  supabase: ReturnType<typeof createClient>,
  recipes: Recipe[],
  existingIngredientsByKey: Map<string, string>,
) {
  const missingIngredients = uniqueBy(
    recipes.flatMap((recipe) =>
      recipe.ingredients
        .filter((ingredient) => ingredient.includeInShoppingList && !ingredient.isFreeSeasoning)
        .filter((ingredient) => !findMasterIngredientId(ingredient.name, existingIngredientsByKey))
        .map((ingredient, index) => ({
          name: ingredient.name,
          slug: normalizeNameToSlug(ingredient.name),
          display_name: ingredient.displayName ?? ingredient.name,
          aliases: getIngredientAliases(ingredient.name),
          shopping_category: ingredient.shoppingCategory,
          default_unit: ingredient.unit ?? 'g',
          default_rounding_mode: ingredient.roundingMode,
          default_rounding_step: ingredient.roundingStep,
          buy_in_whole_packages: false,
          purchase_increment_g: ingredient.unit === 'g' ? ingredient.roundingStep : null,
          sort_order: 10000 + index,
        })),
    ),
    (ingredient) => ingredient.slug,
  )

  if (!missingIngredients.length) return

  const { error } = await supabase.from('ingredients').upsert(missingIngredients, {
    onConflict: 'slug',
  })

  if (error) throw error
}

function findMasterIngredientId(name: string, masterIngredientsByKey: Map<string, string>) {
  return masterIngredientsByKey.get(getIngredientLookupKey(name)) ?? null
}

function addIngredientLookupKeys(
  masterIngredientsByKey: Map<string, string>,
  value: string | null,
  ingredientId: string,
) {
  if (!value?.trim()) return

  masterIngredientsByKey.set(getIngredientLookupKey(value), ingredientId)
  masterIngredientsByKey.set(normalizeNameToSlug(value), ingredientId)
}

function getIngredientLookupKey(value: string) {
  return normalizeNameToSlug(stripIngredientStateSuffix(value))
}

function stripIngredientStateSuffix(value: string) {
  return value
    .trim()
    .replace(/\s+(cru|crua|crus|cruas|cozido|cozida|cozidos|cozidas|assado|assada|assados|assadas|refogado|refogada|refogados|refogadas|grelhado|grelhada|grelhados|grelhadas)$/i, '')
    .trim()
}

function getIngredientAliases(name: string) {
  const strippedName = stripIngredientStateSuffix(name)

  return strippedName && strippedName !== name ? [strippedName] : []
}

async function getDetailRecipeIds(
  supabase: ReturnType<typeof createClient>,
  table: 'recipe_ingredients' | 'recipe_steps',
  recipeIds: string[],
) {
  const { data, error } = await supabase.from(table).select('recipe_id').in('recipe_id', recipeIds)
  if (error) throw error

  return new Set((data as Array<{ recipe_id: string }> | null ?? []).map((row) => row.recipe_id))
}

function mapRecipeInsert(recipe: Recipe, categoriesBySlug: Map<string, string>) {
  return {
    category_id: getCategoryId(recipe, categoriesBySlug),
    name: recipe.name,
    slug: recipe.slug,
    short_description: recipe.shortDescription,
    type: recipe.type,
    status: 'published',
    image_path: recipe.imagePath,
    base_raw_weight_g: recipe.baseRawWeightG,
    base_clean_weight_g: recipe.baseCleanWeightG ?? null,
    base_ready_weight_g: recipe.baseReadyWeightG,
    cooking_method: recipe.cookingMethod ?? null,
    correction_factor: recipe.correctionFactor ?? null,
    cooking_factor: recipe.cookingFactor ?? null,
    base_yield_note: recipe.baseYieldNote,
    cost_level: recipe.costLevel,
    time_level: recipe.timeLevel,
    work_level: recipe.workLevel,
    practicality_level: recipe.practicalityLevel,
    freezes_well: recipe.freezesWell,
    storage_instructions: recipe.storageInstructions,
    reheat_instructions: recipe.reheatInstructions,
    locked_recipe_warning: recipe.lockedRecipeWarning,
    kcal_per_100g: recipe.nutrition.kcalPer100g,
    protein_g_per_100g: recipe.nutrition.proteinGPer100g,
    carbs_g_per_100g: recipe.nutrition.carbsGPer100g,
    fat_g_per_100g: recipe.nutrition.fatGPer100g,
    fiber_g_per_100g: recipe.nutrition.fiberGPer100g,
    sodium_mg_per_100g: recipe.nutrition.sodiumMgPer100g,
    nutrition_notes: recipe.nutrition.nutritionNotes,
    sort_order: recipe.sortOrder,
  }
}

function getCategoryId(recipe: Recipe, categoriesBySlug: Map<string, string>) {
  const slug = recipe.category?.slug
  const categoryId = slug ? categoriesBySlug.get(slug) : null

  if (!categoryId) {
    throw new Error(`Categoria nao encontrada para a receita ${recipe.slug}.`)
  }

  return categoryId
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

function loadEnv(): Env {
  const envPath = resolve(process.cwd(), '.env')
  const parsed: Env = { ...process.env } as Env

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
