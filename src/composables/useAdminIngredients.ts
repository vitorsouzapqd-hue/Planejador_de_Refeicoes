import { useSupabaseClient } from './useSupabaseClient'
import type {
  Ingredient,
  IngredientHouseholdMeasure,
  IngredientShoppingCategory,
} from '../types/ingredient'
import type { RoundingMode } from '../types/recipe'

export const ingredientShoppingCategories: IngredientShoppingCategory[] = [
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
]

export const roundingModes: RoundingMode[] = ['up', 'nearest', 'manual', 'none']

export type AdminIngredientInput = {
  name: string
  slug: string
  displayName: string | null
  aliases: string[]
  shoppingCategory: IngredientShoppingCategory | string
  defaultUnit: string
  isActive: boolean
  kcalPer100g: number | null
  proteinGPer100g: number | null
  carbsGPer100g: number | null
  fatGPer100g: number | null
  fiberGPer100g: number | null
  sodiumMgPer100g: number | null
  nutritionSource: string | null
  nutritionNotes: string | null
  defaultRoundingMode: RoundingMode
  defaultRoundingStep: number | null
  buyInWholePackages: boolean
  packageSizeG: number | null
  packageLabel: string | null
  purchaseIncrementG: number | null
  defaultCorrectionFactor: number | null
  ediblePortionPercent: number | null
  correctionNotes: string | null
  notes: string | null
  sortOrder: number
}

export type AdminIngredientMeasureInput = Omit<
  IngredientHouseholdMeasure,
  'id' | 'ingredientId'
>

type IngredientRow = {
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
  ingredient_household_measures?: MeasureRow[]
}

type MeasureRow = {
  id: string
  ingredient_id: string
  measure_name: string
  grams_equivalent: number | null
  ml_equivalent: number | null
  is_default: boolean
  notes: string | null
  sort_order: number
}

const ingredientSelect = `
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
  sort_order,
  ingredient_household_measures (
    id,
    ingredient_id,
    measure_name,
    grams_equivalent,
    ml_equivalent,
    is_default,
    notes,
    sort_order
  )
`

export function useAdminIngredients() {
  async function listIngredients() {
    const supabase = requireSupabase()

    const { data, error } = await supabase
      .from('ingredients')
      .select(ingredientSelect)
      .order('sort_order', { ascending: true })
      .order('name', { ascending: true })

    if (error) throw error

    return (data ?? []).map((row) => mapIngredientRow(row as unknown as IngredientRow))
  }

  async function getIngredient(id: string) {
    const supabase = requireSupabase()

    const { data, error } = await supabase
      .from('ingredients')
      .select(ingredientSelect)
      .eq('id', id)
      .maybeSingle()

    if (error) throw error
    if (!data) return null

    return mapIngredientRow(data as unknown as IngredientRow)
  }

  async function createIngredient(
    input: AdminIngredientInput,
    measures: AdminIngredientMeasureInput[],
  ) {
    const supabase = requireSupabase()

    const { data, error } = await supabase
      .from('ingredients')
      .insert(mapIngredientInput(input))
      .select('id')
      .single()

    if (error) throw error

    const ingredientId = data.id as string
    await replaceMeasures(ingredientId, measures)

    return ingredientId
  }

  async function updateIngredient(
    id: string,
    input: AdminIngredientInput,
    measures: AdminIngredientMeasureInput[],
  ) {
    const supabase = requireSupabase()

    const { error } = await supabase
      .from('ingredients')
      .update(mapIngredientInput(input))
      .eq('id', id)

    if (error) throw error

    await replaceMeasures(id, measures)
  }

  async function setIngredientActive(id: string, isActive: boolean) {
    const supabase = requireSupabase()

    const { error } = await supabase
      .from('ingredients')
      .update({ is_active: isActive })
      .eq('id', id)

    if (error) throw error
  }

  async function getIngredientUsageCounts(id: string) {
    const supabase = requireSupabase()

    const [recipeResult, catalogResult] = await Promise.all([
      supabase
        .from('recipe_ingredients')
        .select('id', { count: 'exact', head: true })
        .eq('ingredient_id', id),
      supabase
        .from('shopping_catalog_items')
        .select('id', { count: 'exact', head: true })
        .eq('ingredient_id', id),
    ])

    if (recipeResult.error) throw recipeResult.error
    if (catalogResult.error) throw catalogResult.error

    return {
      recipes: recipeResult.count ?? 0,
      catalogItems: catalogResult.count ?? 0,
    }
  }

  async function deleteIngredientIfUnused(id: string) {
    const usage = await getIngredientUsageCounts(id)
    if (usage.recipes > 0 || usage.catalogItems > 0) {
      throw new Error('Ingrediente vinculado a receitas ou itens da Lista de Compras. Desative em vez de excluir.')
    }

    const supabase = requireSupabase()

    const { error } = await supabase
      .from('ingredients')
      .delete()
      .eq('id', id)

    if (error) throw error
  }

  async function isIngredientSlugAvailable(slug: string, currentId?: string) {
    const supabase = requireSupabase()

    let query = supabase
      .from('ingredients')
      .select('id')
      .eq('slug', slug)
      .limit(1)

    if (currentId) query = query.neq('id', currentId)

    const { data, error } = await query

    if (error) throw error

    return (data ?? []).length === 0
  }

  async function replaceMeasures(
    ingredientId: string,
    measures: AdminIngredientMeasureInput[],
  ) {
    const supabase = requireSupabase()

    const rows = measures
      .map((measure, index) => ({
        measure_name: measure.measureName.trim(),
        grams_equivalent: normalizeOptionalNumber(measure.gramsEquivalent),
        ml_equivalent: normalizeOptionalNumber(measure.mlEquivalent),
        is_default: measure.isDefault,
        notes: cleanOptionalText(measure.notes),
      }))
      .filter((measure) => measure.measure_name)

    const { error } = await supabase.rpc('replace_ingredient_household_measures', {
      p_ingredient_id: ingredientId,
      p_measures: rows,
    })

    if (error) throw error
  }

  return {
    createIngredient,
    deleteIngredientIfUnused,
    getIngredient,
    getIngredientUsageCounts,
    isIngredientSlugAvailable,
    listIngredients,
    setIngredientActive,
    updateIngredient,
  }
}

function requireSupabase() {
  const supabase = useSupabaseClient()

  if (!supabase) {
    throw new Error('Supabase não configurado.')
  }

  return supabase
}

function mapIngredientRow(row: IngredientRow): Ingredient {
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
    householdMeasures: [...(row.ingredient_household_measures ?? [])]
      .sort((a, b) => a.sort_order - b.sort_order)
      .map(mapMeasureRow),
  }
}

function mapMeasureRow(row: MeasureRow): IngredientHouseholdMeasure {
  return {
    id: row.id,
    ingredientId: row.ingredient_id,
    measureName: row.measure_name,
    gramsEquivalent: toNullableNumber(row.grams_equivalent),
    mlEquivalent: toNullableNumber(row.ml_equivalent),
    isDefault: row.is_default,
    notes: row.notes,
    sortOrder: row.sort_order,
  }
}

function mapIngredientInput(input: AdminIngredientInput) {
  return {
    name: input.name.trim(),
    slug: input.slug.trim(),
    display_name: cleanOptionalText(input.displayName),
    aliases: input.aliases.map((alias) => alias.trim()).filter(Boolean),
    shopping_category: input.shoppingCategory,
    default_unit: input.defaultUnit.trim(),
    is_active: input.isActive,
    kcal_per_100g: normalizeOptionalNumber(input.kcalPer100g),
    protein_g_per_100g: normalizeOptionalNumber(input.proteinGPer100g),
    carbs_g_per_100g: normalizeOptionalNumber(input.carbsGPer100g),
    fat_g_per_100g: normalizeOptionalNumber(input.fatGPer100g),
    fiber_g_per_100g: normalizeOptionalNumber(input.fiberGPer100g),
    sodium_mg_per_100g: normalizeOptionalNumber(input.sodiumMgPer100g),
    nutrition_source: cleanOptionalText(input.nutritionSource),
    nutrition_notes: cleanOptionalText(input.nutritionNotes),
    default_rounding_mode: input.defaultRoundingMode,
    default_rounding_step: normalizeOptionalNumber(input.defaultRoundingStep),
    buy_in_whole_packages: input.buyInWholePackages,
    package_size_g: input.buyInWholePackages
      ? normalizeOptionalNumber(input.packageSizeG)
      : null,
    package_label: cleanOptionalText(input.packageLabel),
    purchase_increment_g: normalizeOptionalNumber(input.purchaseIncrementG),
    default_correction_factor: normalizeOptionalNumber(input.defaultCorrectionFactor),
    edible_portion_percent: normalizeOptionalNumber(input.ediblePortionPercent),
    correction_notes: cleanOptionalText(input.correctionNotes),
    notes: cleanOptionalText(input.notes),
    sort_order: Number(input.sortOrder) || 0,
  }
}

function toNullableNumber(value: number | null): number | null {
  return value === null ? null : Number(value)
}

function cleanOptionalText(value: string | null) {
  return value?.trim() || null
}

function normalizeOptionalNumber(value: unknown) {
  if (value === null || value === '') return null

  const numericValue = Number(value)

  return Number.isNaN(numericValue) ? null : numericValue
}
