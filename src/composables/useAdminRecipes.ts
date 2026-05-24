import { useSupabaseClient } from './useSupabaseClient'
import type { Ingredient } from '../types/ingredient'
import type { IngredientRole, RecipeStatus, RoundingMode } from '../types/recipe'

const RECIPE_IMAGES_BUCKET = 'recipe-images'

export type AdminCategory = {
  id: string
  name: string
  slug: string
  description: string | null
  isActive: boolean
  sortOrder: number
}

export type AdminTag = {
  id: string
  name: string
  slug: string
}

export type AdminCategoryInput = {
  name: string
  slug: string
  description: string | null
  isActive: boolean
  sortOrder: number
}

export type AdminTagInput = {
  name: string
  slug: string
}

export type AdminRecipe = {
  id: string
  categoryId: string | null
  categoryName: string | null
  categorySlug: string | null
  name: string
  slug: string
  type: string | null
  status: RecipeStatus
  imagePath: string | null
  shortDescription: string | null
  baseRawWeightG: number
  baseCleanWeightG: number | null
  baseReadyWeightG: number
  cookingMethod: string | null
  correctionFactor: number | null
  cookingFactor: number | null
  baseYieldNote: string | null
  referenceVideoUrl: string | null
  referenceVideoTitle: string | null
  referenceVideoSource: string | null
  referenceVideoNotes: string | null
  costLevel: number | null
  timeLevel: number | null
  workLevel: number | null
  practicalityLevel: number | null
  freezesWell: boolean
  storageInstructions: string | null
  reheatInstructions: string | null
  lockedRecipeWarning: string | null
  kcalPer100g: number | null
  proteinGPer100g: number | null
  carbsGPer100g: number | null
  fatGPer100g: number | null
  fiberGPer100g: number | null
  sodiumMgPer100g: number | null
  nutritionNotes: string | null
  sortOrder: number
  tagIds: string[]
  updatedAt: string | null
  hasMainIngredient: boolean
  hasSteps: boolean
}

export type AdminRecipeInput = {
  categoryId: string | null
  name: string
  slug: string
  type: string | null
  status: RecipeStatus
  imagePath: string | null
  shortDescription: string | null
  baseRawWeightG: number
  baseCleanWeightG: number | null
  baseReadyWeightG: number
  cookingMethod: string | null
  correctionFactor: number | null
  cookingFactor: number | null
  baseYieldNote: string | null
  referenceVideoUrl: string | null
  referenceVideoTitle: string | null
  referenceVideoSource: string | null
  referenceVideoNotes: string | null
  costLevel: number | null
  timeLevel: number | null
  workLevel: number | null
  practicalityLevel: number | null
  freezesWell: boolean
  storageInstructions: string | null
  reheatInstructions: string | null
  lockedRecipeWarning: string | null
  kcalPer100g: number | null
  proteinGPer100g: number | null
  carbsGPer100g: number | null
  fatGPer100g: number | null
  fiberGPer100g: number | null
  sodiumMgPer100g: number | null
  nutritionNotes: string | null
  tagIds: string[]
  sortOrder: number
}

export type AdminRecipeIngredient = {
  id: string
  recipeId: string
  ingredientId: string | null
  name: string
  shoppingCategory: string
  ingredientRole: IngredientRole
  baseQuantity: number | null
  unit: string | null
  isCritical: boolean
  isFreeSeasoning: boolean
  includeInShoppingList: boolean
  roundingStep: number | null
  roundingMode: RoundingMode
  displayName: string | null
  notes: string | null
  sortOrder: number
}

export type AdminRecipeIngredientInput = Omit<AdminRecipeIngredient, 'id' | 'recipeId'>

export type AdminRecipeStep = {
  id: string
  recipeId: string
  stepNumber: number
  instruction: string
}

export type AdminRecipeStepInput = Omit<AdminRecipeStep, 'id' | 'recipeId'>

type RecipeRow = {
  id: string
  category_id: string | null
  name: string
  slug: string
  type: string | null
  status: RecipeStatus
  image_path: string | null
  short_description: string | null
  base_raw_weight_g: number
  base_clean_weight_g: number | null
  base_ready_weight_g: number
  cooking_method: string | null
  correction_factor: number | null
  cooking_factor: number | null
  base_yield_note: string | null
  reference_video_url: string | null
  reference_video_title: string | null
  reference_video_source: string | null
  reference_video_notes: string | null
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
  updated_at: string | null
  recipe_tag_links?: Array<{ tag_id: string }>
  recipe_categories?: { name: string; slug: string } | null
  recipe_ingredients?: Array<{ ingredient_role: IngredientRole }>
  recipe_steps?: Array<{ id: string }>
}

type CategoryRow = {
  id: string
  name: string
  slug: string
  description: string | null
  is_active: boolean
  sort_order: number
}

type TagRow = {
  id: string
  name: string
  slug: string
}

type IngredientRow = {
  id: string
  recipe_id: string
  ingredient_id: string | null
  name: string
  shopping_category: string
  ingredient_role: IngredientRole
  base_quantity: number | null
  unit: string | null
  is_critical: boolean
  is_free_seasoning: boolean
  include_in_shopping_list: boolean
  rounding_step: number | null
  rounding_mode: RoundingMode
  display_name: string | null
  notes: string | null
  sort_order: number
}

type MasterIngredientRow = {
  id: string
  name: string
  slug: string
  display_name: string | null
  aliases: string[] | null
  shopping_category: string
  default_unit: string
  is_active: boolean
  kcal_per_100g: number | null
  protein_g_per_100g: number | null
  carbs_g_per_100g: number | null
  fat_g_per_100g: number | null
  fiber_g_per_100g: number | null
  sodium_mg_per_100g: number | null
  nutrition_source: string | null
  nutrition_notes: string | null
  default_rounding_mode: RoundingMode
  default_rounding_step: number | null
  buy_in_whole_packages: boolean
  package_size_g: number | null
  package_label: string | null
  purchase_increment_g: number | null
  default_correction_factor: number | null
  edible_portion_percent: number | null
  correction_notes: string | null
  notes: string | null
  sort_order: number
}

type StepRow = {
  id: string
  recipe_id: string
  step_number: number
  instruction: string
}

const adminRecipeSelect = `
  id,
  category_id,
  name,
  slug,
  type,
  status,
  image_path,
  short_description,
  base_raw_weight_g,
  base_clean_weight_g,
  base_ready_weight_g,
  cooking_method,
  correction_factor,
  cooking_factor,
  base_yield_note,
  reference_video_url,
  reference_video_title,
  reference_video_source,
  reference_video_notes,
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
  updated_at,
  recipe_categories (
    name,
    slug
  ),
  recipe_ingredients (
    ingredient_role
  ),
  recipe_steps (
    id
  ),
  recipe_tag_links (
    tag_id
  )
`

export function useAdminRecipes() {
  async function listCategories() {
    const supabase = requireSupabase()

    const { data, error } = await supabase
      .from('recipe_categories')
      .select('id, name, slug, description, is_active, sort_order')
      .order('sort_order', { ascending: true })

    if (error) throw error

    return (data ?? []).map((row) => mapCategoryRow(row as CategoryRow))
  }

  async function createCategory(input: AdminCategoryInput) {
    const supabase = requireSupabase()

    const { data, error } = await supabase
      .from('recipe_categories')
      .insert(mapCategoryInput(input))
      .select('id')
      .single()

    if (error) throw error

    return data.id as string
  }

  async function updateCategory(id: string, input: AdminCategoryInput) {
    const supabase = requireSupabase()

    const { error } = await supabase
      .from('recipe_categories')
      .update(mapCategoryInput(input))
      .eq('id', id)

    if (error) throw error
  }

  async function isCategorySlugAvailable(slug: string, currentId?: string) {
    const supabase = requireSupabase()

    let query = supabase
      .from('recipe_categories')
      .select('id')
      .eq('slug', slug)
      .limit(1)

    if (currentId) query = query.neq('id', currentId)

    const { data, error } = await query

    if (error) throw error

    return (data ?? []).length === 0
  }

  async function getCategoryUsageCount(categoryId: string) {
    const supabase = requireSupabase()

    const { count, error } = await supabase
      .from('recipes')
      .select('id', { count: 'exact', head: true })
      .eq('category_id', categoryId)

    if (error) throw error

    return count ?? 0
  }

  async function deleteCategoryIfUnused(categoryId: string) {
    const usageCount = await getCategoryUsageCount(categoryId)
    if (usageCount > 0) {
      throw new Error('Categoria vinculada a receitas. Desative ou mova as receitas antes de excluir.')
    }

    const supabase = requireSupabase()
    const { error } = await supabase
      .from('recipe_categories')
      .delete()
      .eq('id', categoryId)

    if (error) throw error
  }

  async function listTags() {
    const supabase = requireSupabase()

    const { data, error } = await supabase
      .from('recipe_tags')
      .select('id, name, slug')
      .order('name', { ascending: true })

    if (error) throw error

    return (data ?? []).map((row) => mapTagRow(row as TagRow))
  }

  async function createTag(input: AdminTagInput) {
    const supabase = requireSupabase()

    const { data, error } = await supabase
      .from('recipe_tags')
      .insert(mapTagInput(input))
      .select('id')
      .single()

    if (error) throw error

    return data.id as string
  }

  async function updateTag(id: string, input: AdminTagInput) {
    const supabase = requireSupabase()

    const { error } = await supabase
      .from('recipe_tags')
      .update(mapTagInput(input))
      .eq('id', id)

    if (error) throw error
  }

  async function isTagSlugAvailable(slug: string, currentId?: string) {
    const supabase = requireSupabase()

    let query = supabase
      .from('recipe_tags')
      .select('id')
      .eq('slug', slug)
      .limit(1)

    if (currentId) query = query.neq('id', currentId)

    const { data, error } = await query

    if (error) throw error

    return (data ?? []).length === 0
  }

  async function getTagUsageCount(tagId: string) {
    const supabase = requireSupabase()

    const { count, error } = await supabase
      .from('recipe_tag_links')
      .select('recipe_id', { count: 'exact', head: true })
      .eq('tag_id', tagId)

    if (error) throw error

    return count ?? 0
  }

  async function deleteTagIfUnused(tagId: string) {
    const usageCount = await getTagUsageCount(tagId)
    if (usageCount > 0) {
      throw new Error('Tag vinculada a receitas. Remova a tag das receitas antes de excluir.')
    }

    const supabase = requireSupabase()
    const { error } = await supabase
      .from('recipe_tags')
      .delete()
      .eq('id', tagId)

    if (error) throw error
  }

  async function listIngredients() {
    const supabase = requireSupabase()

    const { data, error } = await supabase
      .from('ingredients')
      .select(`
        id,
        name,
        slug,
        display_name,
        aliases,
        shopping_category,
        default_unit,
        is_active,
        kcal_per_100g,
        protein_g_per_100g,
        carbs_g_per_100g,
        fat_g_per_100g,
        fiber_g_per_100g,
        sodium_mg_per_100g,
        nutrition_source,
        nutrition_notes,
        default_rounding_mode,
        default_rounding_step,
        buy_in_whole_packages,
        package_size_g,
        package_label,
        purchase_increment_g,
        default_correction_factor,
        edible_portion_percent,
        correction_notes,
        notes,
        sort_order
      `)
      .eq('is_active', true)
      .order('sort_order', { ascending: true })
      .order('name', { ascending: true })

    if (error) throw error

    return (data ?? []).map((row) => mapMasterIngredientRow(row as MasterIngredientRow))
  }

  async function listRecipes() {
    const supabase = requireSupabase()

    const { data, error } = await supabase
      .from('recipes')
      .select(adminRecipeSelect)
      .order('sort_order', { ascending: true })
      .order('name', { ascending: true })

    if (error) throw error

    return (data ?? []).map((row) => mapRecipeRow(row as unknown as RecipeRow))
  }

  async function getRecipe(id: string) {
    const supabase = requireSupabase()

    const { data, error } = await supabase
      .from('recipes')
      .select(adminRecipeSelect)
      .eq('id', id)
      .maybeSingle()

    if (error) throw error
    if (!data) return null

    return mapRecipeRow(data as unknown as RecipeRow)
  }

  async function isRecipeSlugAvailable(slug: string, currentId?: string) {
    const supabase = requireSupabase()

    let query = supabase
      .from('recipes')
      .select('id')
      .eq('slug', slug)
      .limit(1)

    if (currentId) query = query.neq('id', currentId)

    const { data, error } = await query

    if (error) throw error

    return (data ?? []).length === 0
  }

  async function createRecipe(input: AdminRecipeInput) {
    const supabase = requireSupabase()

    const { data, error } = await supabase
      .from('recipes')
      .insert(mapRecipeInput(input))
      .select('id')
      .single()

    if (error) throw error

    const recipeId = data.id as string
    await replaceRecipeTags(recipeId, input.tagIds)

    return recipeId
  }

  async function updateRecipe(id: string, input: AdminRecipeInput) {
    const supabase = requireSupabase()

    const { error } = await supabase
      .from('recipes')
      .update(mapRecipeInput(input))
      .eq('id', id)

    if (error) throw error

    await replaceRecipeTags(id, input.tagIds)
  }

  async function updateRecipeStatus(id: string, status: RecipeStatus) {
    const supabase = requireSupabase()

    const { error } = await supabase
      .from('recipes')
      .update({ status })
      .eq('id', id)

    if (error) throw error
  }

  async function deleteRecipe(id: string) {
    const supabase = requireSupabase()

    const { error } = await supabase
      .from('recipes')
      .delete()
      .eq('id', id)

    if (error) throw error
  }

  async function uploadRecipeImage(recipeId: string, file: File) {
    const supabase = requireSupabase()
    const imagePath = buildRecipeImagePath(recipeId, file.name)

    const { error: uploadError } = await supabase.storage
      .from(RECIPE_IMAGES_BUCKET)
      .upload(imagePath, file, {
        cacheControl: '31536000',
        contentType: file.type || undefined,
        upsert: true,
      })

    if (uploadError) throw uploadError

    await updateRecipeImagePath(recipeId, imagePath)

    return imagePath
  }

  async function updateRecipeImagePath(id: string, imagePath: string | null) {
    const supabase = requireSupabase()

    const { error } = await supabase
      .from('recipes')
      .update({ image_path: imagePath })
      .eq('id', id)

    if (error) throw error
  }

  async function removeRecipeImage(id: string, imagePath: string | null) {
    const supabase = requireSupabase()

    if (imagePath && !imagePath.startsWith('/') && !imagePath.startsWith('http://') && !imagePath.startsWith('https://')) {
      const { error: removeError } = await supabase.storage
        .from(RECIPE_IMAGES_BUCKET)
        .remove([imagePath])

      if (removeError) throw removeError
    }

    await updateRecipeImagePath(id, null)
  }

  function getRecipeImagePublicUrl(imagePath: string | null) {
    if (!imagePath) return null
    if (imagePath.startsWith('/')) return imagePath
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return imagePath

    return requireSupabase().storage
      .from(RECIPE_IMAGES_BUCKET)
      .getPublicUrl(imagePath).data.publicUrl
  }

  async function listRecipeIngredients(recipeId: string) {
    const supabase = requireSupabase()

    const { data, error } = await supabase
      .from('recipe_ingredients')
      .select(`
        id,
        recipe_id,
        ingredient_id,
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
        sort_order
      `)
      .eq('recipe_id', recipeId)
      .order('sort_order', { ascending: true })
      .order('name', { ascending: true })

    if (error) throw error

    return (data ?? []).map((row) => mapIngredientRow(row as IngredientRow))
  }

  async function saveRecipeIngredients(
    recipeId: string,
    ingredients: AdminRecipeIngredientInput[],
  ) {
    const supabase = requireSupabase()

    const rows = ingredients
      .map((ingredient, index) => normalizeIngredientInput(ingredient, index))
      .filter((ingredient) => ingredient.name.trim())
      .map((ingredient) => ({
        ingredient_id: ingredient.ingredientId,
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
      }))

    const { error } = await supabase.rpc('replace_recipe_ingredients', {
      p_recipe_id: recipeId,
      p_ingredients: rows,
    })

    if (error) throw error
  }

  async function listRecipeSteps(recipeId: string) {
    const supabase = requireSupabase()

    const { data, error } = await supabase
      .from('recipe_steps')
      .select('id, recipe_id, step_number, instruction')
      .eq('recipe_id', recipeId)
      .order('step_number', { ascending: true })

    if (error) throw error

    return (data ?? []).map((row) => mapStepRow(row as StepRow))
  }

  async function saveRecipeSteps(recipeId: string, steps: AdminRecipeStepInput[]) {
    const supabase = requireSupabase()

    const rows = steps
      .map((step) => ({
        instruction: step.instruction.trim(),
      }))
      .filter((step) => step.instruction)

    const { error } = await supabase.rpc('replace_recipe_steps', {
      p_recipe_id: recipeId,
      p_steps: rows,
    })

    if (error) throw error
  }

  async function replaceRecipeTags(recipeId: string, tagIds: string[]) {
    const supabase = requireSupabase()

    const { error } = await supabase.rpc('replace_recipe_tags', {
      p_recipe_id: recipeId,
      p_tag_ids: tagIds,
    })

    if (error) throw error
  }

  async function duplicateRecipe(id: string) {
    const source = await getRecipe(id)
    if (!source) throw new Error('Receita não encontrada.')

    const recipeIngredients = await listRecipeIngredients(id)
    const recipeSteps = await listRecipeSteps(id)
    const nextSlug = `${source.slug}-copia-${Date.now()}`
    const nextName = `${source.name} (cópia)`
    const newId = await createRecipe({
      ...source,
      categoryId: source.categoryId,
      name: nextName,
      slug: nextSlug,
      status: 'draft',
      imagePath: source.imagePath,
      shortDescription: source.shortDescription,
      tagIds: source.tagIds,
      sortOrder: source.sortOrder + 1,
    })

    await saveRecipeIngredients(
      newId,
      recipeIngredients.map(({ id: _id, recipeId: _recipeId, ...ingredient }) => ingredient),
    )
    await saveRecipeSteps(
      newId,
      recipeSteps.map(({ id: _id, recipeId: _recipeId, ...step }) => step),
    )

    return newId
  }

  return {
    listCategories,
    createCategory,
    updateCategory,
    isCategorySlugAvailable,
    getCategoryUsageCount,
    deleteCategoryIfUnused,
    listIngredients,
    listTags,
    createTag,
    updateTag,
    isTagSlugAvailable,
    getTagUsageCount,
    deleteTagIfUnused,
    listRecipes,
    getRecipe,
    isRecipeSlugAvailable,
    createRecipe,
    updateRecipe,
    updateRecipeStatus,
    deleteRecipe,
    duplicateRecipe,
    uploadRecipeImage,
    updateRecipeImagePath,
    removeRecipeImage,
    getRecipeImagePublicUrl,
    listRecipeIngredients,
    saveRecipeIngredients,
    listRecipeSteps,
    saveRecipeSteps,
  }
}

function requireSupabase() {
  const supabase = useSupabaseClient()

  if (!supabase) {
    throw new Error('Supabase não configurado.')
  }

  return supabase
}

function mapCategoryRow(row: CategoryRow): AdminCategory {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    description: row.description,
    isActive: row.is_active,
    sortOrder: row.sort_order,
  }
}

function mapTagRow(row: TagRow): AdminTag {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
  }
}

function mapCategoryInput(input: AdminCategoryInput) {
  return {
    name: input.name.trim(),
    slug: input.slug.trim(),
    description: cleanOptionalText(input.description),
    is_active: input.isActive,
    sort_order: Number(input.sortOrder) || 0,
  }
}

function mapTagInput(input: AdminTagInput) {
  return {
    name: input.name.trim(),
    slug: input.slug.trim(),
  }
}

function mapRecipeRow(row: RecipeRow): AdminRecipe {
  return {
    id: row.id,
    categoryId: row.category_id,
    categoryName: row.recipe_categories?.name ?? null,
    categorySlug: row.recipe_categories?.slug ?? null,
    name: row.name,
    slug: row.slug,
    type: row.type,
    status: row.status,
    imagePath: row.image_path,
    shortDescription: row.short_description,
    baseRawWeightG: Number(row.base_raw_weight_g),
    baseCleanWeightG: toNullableNumber(row.base_clean_weight_g),
    baseReadyWeightG: Number(row.base_ready_weight_g),
    cookingMethod: row.cooking_method,
    correctionFactor: toNullableNumber(row.correction_factor),
    cookingFactor: toNullableNumber(row.cooking_factor),
    baseYieldNote: row.base_yield_note,
    referenceVideoUrl: row.reference_video_url,
    referenceVideoTitle: row.reference_video_title,
    referenceVideoSource: row.reference_video_source,
    referenceVideoNotes: row.reference_video_notes,
    costLevel: row.cost_level,
    timeLevel: row.time_level,
    workLevel: row.work_level,
    practicalityLevel: row.practicality_level,
    freezesWell: row.freezes_well,
    storageInstructions: row.storage_instructions,
    reheatInstructions: row.reheat_instructions,
    lockedRecipeWarning: row.locked_recipe_warning,
    kcalPer100g: toNullableNumber(row.kcal_per_100g),
    proteinGPer100g: toNullableNumber(row.protein_g_per_100g),
    carbsGPer100g: toNullableNumber(row.carbs_g_per_100g),
    fatGPer100g: toNullableNumber(row.fat_g_per_100g),
    fiberGPer100g: toNullableNumber(row.fiber_g_per_100g),
    sodiumMgPer100g: toNullableNumber(row.sodium_mg_per_100g),
    nutritionNotes: row.nutrition_notes,
    sortOrder: row.sort_order,
    tagIds: row.recipe_tag_links?.map((link) => link.tag_id) ?? [],
    updatedAt: row.updated_at,
    hasMainIngredient: Boolean(
      row.recipe_ingredients?.some((ingredient) => ingredient.ingredient_role === 'main'),
    ),
    hasSteps: Boolean(row.recipe_steps?.length),
  }
}

function mapRecipeInput(input: AdminRecipeInput) {
  return {
    category_id: input.categoryId,
    name: input.name,
    slug: input.slug,
    type: input.type,
    status: input.status,
    image_path: input.imagePath,
    short_description: input.shortDescription,
    base_raw_weight_g: input.baseRawWeightG,
    base_clean_weight_g: input.baseCleanWeightG,
    base_ready_weight_g: input.baseReadyWeightG,
    cooking_method: input.cookingMethod,
    correction_factor: input.correctionFactor,
    cooking_factor: input.cookingFactor,
    base_yield_note: input.baseYieldNote,
    reference_video_url: input.referenceVideoUrl,
    reference_video_title: input.referenceVideoTitle,
    reference_video_source: input.referenceVideoSource,
    reference_video_notes: input.referenceVideoNotes,
    cost_level: input.costLevel,
    time_level: input.timeLevel,
    work_level: input.workLevel,
    practicality_level: input.practicalityLevel,
    freezes_well: input.freezesWell,
    storage_instructions: input.storageInstructions,
    reheat_instructions: input.reheatInstructions,
    locked_recipe_warning: input.lockedRecipeWarning,
    kcal_per_100g: input.kcalPer100g,
    protein_g_per_100g: input.proteinGPer100g,
    carbs_g_per_100g: input.carbsGPer100g,
    fat_g_per_100g: input.fatGPer100g,
    fiber_g_per_100g: input.fiberGPer100g,
    sodium_mg_per_100g: input.sodiumMgPer100g,
    nutrition_notes: input.nutritionNotes,
    sort_order: input.sortOrder,
  }
}

function toNullableNumber(value: number | null): number | null {
  return value === null ? null : Number(value)
}

function mapIngredientRow(row: IngredientRow): AdminRecipeIngredient {
  return {
    id: row.id,
    recipeId: row.recipe_id,
    ingredientId: row.ingredient_id,
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
  }
}

function mapStepRow(row: StepRow): AdminRecipeStep {
  return {
    id: row.id,
    recipeId: row.recipe_id,
    stepNumber: row.step_number,
    instruction: row.instruction,
  }
}

function normalizeIngredientInput(
  ingredient: AdminRecipeIngredientInput,
  index: number,
): AdminRecipeIngredientInput {
  const isFreeSeasoning =
    ingredient.isFreeSeasoning || ingredient.ingredientRole === 'seasoning'
  const isCritical = ingredient.isCritical || ingredient.ingredientRole === 'critical'

  return {
    ingredientId: ingredient.ingredientId,
    name: ingredient.name.trim(),
    shoppingCategory: cleanOptionalText(ingredient.shoppingCategory) ?? 'Outros',
    ingredientRole: ingredient.ingredientRole,
    baseQuantity: isFreeSeasoning ? null : normalizeOptionalNumber(ingredient.baseQuantity),
    unit: cleanOptionalText(ingredient.unit),
    isCritical,
    isFreeSeasoning,
    includeInShoppingList: ingredient.includeInShoppingList,
    roundingStep: isFreeSeasoning ? null : normalizeOptionalNumber(ingredient.roundingStep),
    roundingMode: isFreeSeasoning ? 'none' : ingredient.roundingMode,
    displayName: cleanOptionalText(ingredient.displayName),
    notes: cleanOptionalText(ingredient.notes),
    sortOrder: index,
  }
}

function mapMasterIngredientRow(row: MasterIngredientRow): Ingredient {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    displayName: row.display_name,
    aliases: row.aliases ?? [],
    shoppingCategory: row.shopping_category,
    defaultUnit: row.default_unit,
    isActive: row.is_active,
    nutrition: {
      kcalPer100g: toNullableNumber(row.kcal_per_100g),
      proteinGPer100g: toNullableNumber(row.protein_g_per_100g),
      carbsGPer100g: toNullableNumber(row.carbs_g_per_100g),
      fatGPer100g: toNullableNumber(row.fat_g_per_100g),
      fiberGPer100g: toNullableNumber(row.fiber_g_per_100g),
      sodiumMgPer100g: toNullableNumber(row.sodium_mg_per_100g),
      nutritionSource: row.nutrition_source,
      nutritionNotes: row.nutrition_notes,
    },
    purchaseRules: {
      defaultRoundingMode: row.default_rounding_mode,
      defaultRoundingStep: toNullableNumber(row.default_rounding_step),
      buyInWholePackages: row.buy_in_whole_packages,
      packageSizeG: toNullableNumber(row.package_size_g),
      packageLabel: row.package_label,
      purchaseIncrementG: toNullableNumber(row.purchase_increment_g),
    },
    correctionFactors: {
      defaultCorrectionFactor: toNullableNumber(row.default_correction_factor),
      ediblePortionPercent: toNullableNumber(row.edible_portion_percent),
      correctionNotes: row.correction_notes,
    },
    notes: row.notes,
    sortOrder: row.sort_order,
  }
}

function cleanOptionalText(value: string | null) {
  return value?.trim() || null
}

function normalizeOptionalNumber(value: unknown) {
  if (value === null || value === '') return null

  const numericValue = Number(value)

  return Number.isNaN(numericValue) ? null : numericValue
}

function buildRecipeImagePath(recipeId: string, fileName: string) {
  const safeFileName = fileName
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, '-')
    .replace(/(^-|-$)/g, '')

  return `recipes/${recipeId}/${Date.now()}-${safeFileName || 'imagem.jpg'}`
}
