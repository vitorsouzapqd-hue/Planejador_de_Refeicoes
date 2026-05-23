import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import type { Recipe, RecipeIngredient, RecipeStep, RecipeTag } from '../../types/recipe'
import {
  getRecipePracticalityLevel,
  getRecipePrepTimeMinutes,
  getRecipeVersatilityLevel,
} from '../../utils/recipeAttributes'
import type { RecipeListFilters, RecipesProvider } from './recipesProvider'

type SupabaseRecipesProviderOptions = {
  supabaseClient?: SupabaseClient | null
  supabaseUrl?: string
  supabaseAnonKey?: string
}

type RecipeRow = {
  id: string
  category_id: string | null
  name: string
  slug: string
  short_description: string | null
  type: string | null
  status: 'draft' | 'published' | 'archived'
  image_path: string | null
  base_raw_weight_g: number
  base_ready_weight_g: number
  base_yield_note: string | null
  cost_level: number | null
  time_level: number | null
  work_level: number | null
  practicality_level: number | null
  freezes_well: boolean
  storage_instructions: string | null
  reheat_instructions: string | null
  locked_recipe_warning: string | null
  kcal_per_100g: number | null
  protein_g_per_100g: number | null
  carbs_g_per_100g: number | null
  fat_g_per_100g: number | null
  fiber_g_per_100g: number | null
  sodium_mg_per_100g: number | null
  nutrition_notes: string | null
  sort_order: number
  recipe_categories: {
    id: string
    name: string
    slug: string
    description: string | null
    is_active: boolean
    sort_order: number
  } | null
  recipe_ingredients: IngredientRow[]
  recipe_steps: StepRow[]
  recipe_tag_links: Array<{
    recipe_tags: TagRow | null
  }>
}

type IngredientRow = {
  id: string
  recipe_id: string
  name: string
  shopping_category: string
  ingredient_role: 'main' | 'complement' | 'critical' | 'seasoning'
  base_quantity: number | null
  unit: string | null
  is_critical: boolean
  is_free_seasoning: boolean
  include_in_shopping_list: boolean
  rounding_step: number | null
  rounding_mode: 'up' | 'nearest' | 'manual' | 'none'
  display_name: string | null
  notes: string | null
  sort_order: number
  package_size_g: number | null
  purchase_increment_g: number | null
  purchase_unit: string | null
  package_label: string | null
  buy_in_whole_packages: boolean | null
}

type StepRow = {
  id: string
  recipe_id: string
  step_number: number
  instruction: string
}

type TagRow = {
  id: string
  name: string
  slug: string
}

const recipeSelect = `
  id,
  category_id,
  name,
  slug,
  short_description,
  type,
  status,
  image_path,
  base_raw_weight_g,
  base_ready_weight_g,
  base_yield_note,
  cost_level,
  time_level,
  work_level,
  practicality_level,
  freezes_well,
  storage_instructions,
  reheat_instructions,
  locked_recipe_warning,
  kcal_per_100g,
  protein_g_per_100g,
  carbs_g_per_100g,
  fat_g_per_100g,
  fiber_g_per_100g,
  sodium_mg_per_100g,
  nutrition_notes,
  sort_order,
  recipe_categories (
    id,
    name,
    slug,
    description,
    is_active,
    sort_order
  ),
  recipe_ingredients (
    id,
    recipe_id,
    name,
    shopping_category,
    ingredient_role,
    base_quantity,
    unit,
    is_critical,
    is_free_seasoning,
    include_in_shopping_list,
    rounding_step,
    rounding_mode,
    display_name,
    notes,
    sort_order,
    package_size_g,
    purchase_increment_g,
    purchase_unit,
    package_label,
    buy_in_whole_packages
  ),
  recipe_steps (
    id,
    recipe_id,
    step_number,
    instruction
  ),
  recipe_tag_links (
    recipe_tags (
      id,
      name,
      slug
    )
  )
`

export function createSupabaseRecipesProvider(
  options: SupabaseRecipesProviderOptions,
): RecipesProvider {
  if (options.supabaseClient) {
    return createProviderFromClient(options.supabaseClient)
  }

  if (!options.supabaseUrl || !options.supabaseAnonKey) {
    return createUnconfiguredProvider()
  }

  const supabase = createClient(options.supabaseUrl, options.supabaseAnonKey)

  return createProviderFromClient(supabase)
}

function createUnconfiguredProvider(): RecipesProvider {
  return {
    async listPublishedRecipes() {
      return []
    },

    async getPublishedRecipeBySlug() {
      return null
    },
  }
}

export function createProviderFromClient(supabase: SupabaseClient): RecipesProvider {
  return {
    async listPublishedRecipes(filters = {}) {
      let query = supabase
        .from('recipes')
        .select(recipeSelect)
        .eq('status', 'published')
        .order('sort_order', { ascending: true })
        .order('name', { ascending: true })

      if (filters.search) {
        query = query.ilike('name', `%${filters.search}%`)
      }

      if (filters.type) {
        query = query.eq('type', filters.type)
      }

      const { data, error } = await query

      if (error) throw error

      const recipes = (data ?? []).map((row) =>
        mapRecipeRow(row as unknown as RecipeRow, supabase),
      )

      if (!filters.categorySlug && !filters.tagSlugs?.length) return recipes

      return recipes.filter((recipe) => {
        const matchesCategory = !filters.categorySlug || recipe.category?.slug === filters.categorySlug
        const recipeTagSlugs = new Set(recipe.tags.map((tag) => tag.slug))
        const matchesTags =
          !filters.tagSlugs?.length ||
          filters.tagSlugs.every((tagSlug) => recipeTagSlugs.has(tagSlug))

        return matchesCategory && matchesTags
      })
    },

    async getPublishedRecipeBySlug(slug) {
      const { data, error } = await supabase
        .from('recipes')
        .select(recipeSelect)
        .eq('status', 'published')
        .eq('slug', slug)
        .maybeSingle()

      if (error) throw error
      if (!data) return null

      return mapRecipeRow(data as unknown as RecipeRow, supabase)
    },
  }
}

function mapRecipeRow(row: RecipeRow, supabase: SupabaseClient): Recipe {
  const attributeSource = {
    slug: row.slug,
    name: row.name,
    type: row.type,
    timeLevel: row.time_level,
    workLevel: row.work_level,
    freezesWell: row.freezes_well,
    categorySlug: row.recipe_categories?.slug ?? null,
  }

  return {
    id: row.id,
    categoryId: row.category_id,
    category: row.recipe_categories
      ? {
          id: row.recipe_categories.id,
          name: row.recipe_categories.name,
          slug: row.recipe_categories.slug,
          description: row.recipe_categories.description,
          isActive: row.recipe_categories.is_active,
          sortOrder: row.recipe_categories.sort_order,
        }
      : null,
    name: row.name,
    slug: row.slug,
    shortDescription: row.short_description,
    type: row.type,
    status: row.status,
    imagePath: row.image_path,
    imageUrl: resolveRecipeImageUrl(row.image_path, supabase),
    baseRawWeightG: Number(row.base_raw_weight_g),
    baseReadyWeightG: Number(row.base_ready_weight_g),
    baseYieldNote: row.base_yield_note,
    prepTimeMinutes: getRecipePrepTimeMinutes(attributeSource),
    costLevel: row.cost_level,
    timeLevel: row.time_level,
    workLevel: row.work_level,
    practicalityLevel: row.practicality_level ?? getRecipePracticalityLevel(attributeSource),
    versatilityLevel: getRecipeVersatilityLevel(attributeSource),
    freezesWell: row.freezes_well,
    storageInstructions: row.storage_instructions,
    reheatInstructions: row.reheat_instructions,
    lockedRecipeWarning: row.locked_recipe_warning,
    nutrition: {
      kcalPer100g: toNullableNumber(row.kcal_per_100g),
      proteinGPer100g: toNullableNumber(row.protein_g_per_100g),
      carbsGPer100g: toNullableNumber(row.carbs_g_per_100g),
      fatGPer100g: toNullableNumber(row.fat_g_per_100g),
      fiberGPer100g: toNullableNumber(row.fiber_g_per_100g),
      sodiumMgPer100g: toNullableNumber(row.sodium_mg_per_100g),
      nutritionNotes: row.nutrition_notes,
    },
    sortOrder: row.sort_order,
    tags: row.recipe_tag_links
      .map((link) => link.recipe_tags)
      .filter((tag): tag is TagRow => Boolean(tag))
      .map(mapTagRow),
    ingredients: [...row.recipe_ingredients]
      .sort((a, b) => a.sort_order - b.sort_order)
      .map(mapIngredientRow),
    steps: [...row.recipe_steps]
      .sort((a, b) => a.step_number - b.step_number)
      .map(mapStepRow),
  }
}

function toNullableNumber(value: number | null): number | null {
  return value === null ? null : Number(value)
}

function resolveRecipeImageUrl(
  imagePath: string | null,
  supabase: SupabaseClient,
): string | null {
  if (!imagePath) return null
  if (imagePath.startsWith('/')) return imagePath
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return imagePath

  return supabase.storage.from('recipe-images').getPublicUrl(imagePath).data.publicUrl
}

function mapIngredientRow(row: IngredientRow): RecipeIngredient {
  return {
    id: row.id,
    recipeId: row.recipe_id,
    name: row.name,
    shoppingCategory: row.shopping_category,
    ingredientRole: row.ingredient_role,
    baseQuantity: row.base_quantity === null ? null : Number(row.base_quantity),
    unit: row.unit,
    isCritical: row.is_critical,
    isFreeSeasoning: row.is_free_seasoning,
    includeInShoppingList: row.include_in_shopping_list,
    roundingStep: row.rounding_step === null ? null : Number(row.rounding_step),
    roundingMode: row.rounding_mode,
    displayName: row.display_name,
    notes: row.notes,
    sortOrder: row.sort_order,
    packageSizeG: row.package_size_g === null ? null : Number(row.package_size_g),
    purchaseIncrementG: row.purchase_increment_g === null ? null : Number(row.purchase_increment_g),
    purchaseUnit: row.purchase_unit,
    packageLabel: row.package_label,
    buyInWholePackages: row.buy_in_whole_packages,
  }
}

function mapStepRow(row: StepRow): RecipeStep {
  return {
    id: row.id,
    recipeId: row.recipe_id,
    stepNumber: row.step_number,
    instruction: row.instruction,
  }
}

function mapTagRow(row: TagRow): RecipeTag {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
  }
}
