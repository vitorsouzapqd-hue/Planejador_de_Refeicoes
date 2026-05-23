import { useSupabaseClient } from './useSupabaseClient'
import type { IngredientRole, RecipeStatus, RoundingMode } from '../types/recipe'

const RECIPE_IMAGES_BUCKET = 'recipe-images'

export type AdminCategory = {
  id: string
  name: string
  slug: string
  isActive: boolean
}

export type AdminTag = {
  id: string
  name: string
  slug: string
}

export type AdminRecipe = {
  id: string
  categoryId: string | null
  name: string
  slug: string
  type: string | null
  status: RecipeStatus
  imagePath: string | null
  shortDescription: string | null
  baseRawWeightG: number
  baseReadyWeightG: number
  baseYieldNote: string | null
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
  baseReadyWeightG: number
  baseYieldNote: string | null
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
}

export type AdminRecipeIngredient = {
  id: string
  recipeId: string
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
  updated_at: string | null
  recipe_tag_links?: Array<{ tag_id: string }>
}

type CategoryRow = {
  id: string
  name: string
  slug: string
  is_active: boolean
}

type TagRow = {
  id: string
  name: string
  slug: string
}

type IngredientRow = {
  id: string
  recipe_id: string
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
  updated_at,
  recipe_tag_links (
    tag_id
  )
`

export function useAdminRecipes() {
  async function listCategories() {
    const supabase = requireSupabase()

    const { data, error } = await supabase
      .from('recipe_categories')
      .select('id, name, slug, is_active')
      .order('sort_order', { ascending: true })

    if (error) throw error

    return (data ?? []).map((row) => mapCategoryRow(row as CategoryRow))
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

    const { error: deleteError } = await supabase
      .from('recipe_ingredients')
      .delete()
      .eq('recipe_id', recipeId)

    if (deleteError) throw deleteError

    const rows = ingredients
      .map((ingredient, index) => normalizeIngredientInput(ingredient, index))
      .filter((ingredient) => ingredient.name.trim())
      .map((ingredient) => ({
        recipe_id: recipeId,
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

    if (rows.length === 0) return

    const { error: insertError } = await supabase
      .from('recipe_ingredients')
      .insert(rows)

    if (insertError) throw insertError
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

    const { error: deleteError } = await supabase
      .from('recipe_steps')
      .delete()
      .eq('recipe_id', recipeId)

    if (deleteError) throw deleteError

    const rows = steps
      .map((step, index) => ({
        recipe_id: recipeId,
        step_number: index + 1,
        instruction: step.instruction.trim(),
      }))
      .filter((step) => step.instruction)

    if (rows.length === 0) return

    const { error: insertError } = await supabase
      .from('recipe_steps')
      .insert(rows)

    if (insertError) throw insertError
  }

  async function replaceRecipeTags(recipeId: string, tagIds: string[]) {
    const supabase = requireSupabase()

    const { error: deleteError } = await supabase
      .from('recipe_tag_links')
      .delete()
      .eq('recipe_id', recipeId)

    if (deleteError) throw deleteError

    if (tagIds.length === 0) return

    const { error: insertError } = await supabase
      .from('recipe_tag_links')
      .insert(tagIds.map((tagId) => ({ recipe_id: recipeId, tag_id: tagId })))

    if (insertError) throw insertError
  }

  return {
    listCategories,
    listTags,
    listRecipes,
    getRecipe,
    createRecipe,
    updateRecipe,
    updateRecipeStatus,
    uploadRecipeImage,
    updateRecipeImagePath,
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
    isActive: row.is_active,
  }
}

function mapTagRow(row: TagRow): AdminTag {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
  }
}

function mapRecipeRow(row: RecipeRow): AdminRecipe {
  return {
    id: row.id,
    categoryId: row.category_id,
    name: row.name,
    slug: row.slug,
    type: row.type,
    status: row.status,
    imagePath: row.image_path,
    shortDescription: row.short_description,
    baseRawWeightG: Number(row.base_raw_weight_g),
    baseReadyWeightG: Number(row.base_ready_weight_g),
    baseYieldNote: row.base_yield_note,
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
    base_ready_weight_g: input.baseReadyWeightG,
    base_yield_note: input.baseYieldNote,
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
  }
}

function toNullableNumber(value: number | null): number | null {
  return value === null ? null : Number(value)
}

function mapIngredientRow(row: IngredientRow): AdminRecipeIngredient {
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
