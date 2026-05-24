import { useSupabaseClient } from './useSupabaseClient'

type AdminExportPayload = {
  schemaVersion: 1
  exportedAt: string
  source: 'planejador-admin'
  data: {
    recipeCategories: AnyRow[]
    recipeTags: AnyRow[]
    recipes: AnyRow[]
    recipeTagLinks: AnyRow[]
    recipeIngredients: AnyRow[]
    recipeSteps: AnyRow[]
    ingredients: AnyRow[]
    ingredientHouseholdMeasures: AnyRow[]
    shoppingCatalogItems: AnyRow[]
    appSettings: AnyRow[]
  }
}

type AnyRow = Record<string, any>

const exportSelects = {
  recipeCategories: 'id, name, slug, description, is_active, sort_order, created_at, updated_at',
  recipeTags: 'id, name, slug, created_at',
  recipes: `
    id,
    category_id,
    name,
    slug,
    short_description,
    type,
    status,
    image_path,
    reference_video_url,
    reference_video_title,
    reference_video_source,
    reference_video_notes,
    base_raw_weight_g,
    base_clean_weight_g,
    base_ready_weight_g,
    cooking_method,
    correction_factor,
    cooking_factor,
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
    created_at,
    updated_at
  `,
  recipeTagLinks: 'recipe_id, tag_id',
  recipeIngredients: `
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
    sort_order,
    package_size_g,
    purchase_increment_g,
    purchase_unit,
    package_label,
    buy_in_whole_packages,
    created_at,
    updated_at
  `,
  recipeSteps: 'id, recipe_id, step_number, instruction, created_at, updated_at',
  ingredients: `
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
    created_at,
    updated_at
  `,
  ingredientHouseholdMeasures: `
    id,
    ingredient_id,
    measure_name,
    grams_equivalent,
    ml_equivalent,
    is_default,
    notes,
    sort_order,
    created_at,
    updated_at
  `,
  shoppingCatalogItems: `
    id,
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
    sort_order,
    created_at,
    updated_at
  `,
  appSettings: 'id, key, value, created_at, updated_at',
}

export function useAdminDataTransfer() {
  async function exportAdminData(): Promise<AdminExportPayload> {
    const supabase = requireSupabase()

    const [
      recipeCategories,
      recipeTags,
      recipes,
      recipeTagLinks,
      recipeIngredients,
      recipeSteps,
      ingredients,
      ingredientHouseholdMeasures,
      shoppingCatalogItems,
      appSettings,
    ] = await Promise.all([
      selectAll(supabase, 'recipe_categories', exportSelects.recipeCategories, 'sort_order'),
      selectAll(supabase, 'recipe_tags', exportSelects.recipeTags, 'name'),
      selectAll(supabase, 'recipes', exportSelects.recipes, 'sort_order'),
      selectAll(supabase, 'recipe_tag_links', exportSelects.recipeTagLinks, 'recipe_id'),
      selectAll(supabase, 'recipe_ingredients', exportSelects.recipeIngredients, 'sort_order'),
      selectAll(supabase, 'recipe_steps', exportSelects.recipeSteps, 'step_number'),
      selectAll(supabase, 'ingredients', exportSelects.ingredients, 'sort_order'),
      selectAll(supabase, 'ingredient_household_measures', exportSelects.ingredientHouseholdMeasures, 'sort_order'),
      selectAll(supabase, 'shopping_catalog_items', exportSelects.shoppingCatalogItems, 'sort_order'),
      selectAll(supabase, 'app_settings', exportSelects.appSettings, 'key'),
    ])

    return {
      schemaVersion: 1,
      exportedAt: new Date().toISOString(),
      source: 'planejador-admin',
      data: {
        recipeCategories,
        recipeTags,
        recipes,
        recipeTagLinks,
        recipeIngredients,
        recipeSteps,
        ingredients,
        ingredientHouseholdMeasures,
        shoppingCatalogItems,
        appSettings,
      },
    }
  }

  async function importAdminData(payload: unknown) {
    const supabase = requireSupabase()
    const normalizedPayload = validatePayload(payload)
    const data = normalizedPayload.data

    const categoryIdMap = await upsertByKey(supabase, {
      table: 'recipe_categories',
      key: 'slug',
      rows: data.recipeCategories,
      omit: ['id', 'created_at', 'updated_at'],
    })
    const tagIdMap = await upsertByKey(supabase, {
      table: 'recipe_tags',
      key: 'slug',
      rows: data.recipeTags,
      omit: ['id', 'created_at'],
    })
    const ingredientIdMap = await upsertByKey(supabase, {
      table: 'ingredients',
      key: 'slug',
      rows: data.ingredients,
      omit: ['id', 'created_at', 'updated_at'],
    })

    const recipeRows = data.recipes.map((row) => ({
      ...omitColumns(row, ['id', 'created_at', 'updated_at']),
      category_id: row.category_id ? categoryIdMap.get(row.category_id) ?? null : null,
    }))
    const recipeIdMap = await upsertByKey(supabase, {
      table: 'recipes',
      key: 'slug',
      sourceRows: data.recipes,
      rows: recipeRows,
      omit: [],
    })

    await replaceRecipeDetails(supabase, data, recipeIdMap, tagIdMap, ingredientIdMap)
    await replaceIngredientMeasures(supabase, data.ingredientHouseholdMeasures, ingredientIdMap)

    const catalogRows = data.shoppingCatalogItems.map((row) => ({
      ...omitColumns(row, ['id', 'created_at', 'updated_at']),
      ingredient_id: row.ingredient_id ? ingredientIdMap.get(row.ingredient_id) ?? null : null,
    }))
    await upsertByKey(supabase, {
      table: 'shopping_catalog_items',
      key: 'slug',
      sourceRows: data.shoppingCatalogItems,
      rows: catalogRows,
      omit: [],
    })

    await upsertByKey(supabase, {
      table: 'app_settings',
      key: 'key',
      rows: data.appSettings,
      omit: ['id', 'created_at', 'updated_at'],
    })

    return {
      recipeCount: data.recipes.length,
      ingredientCount: data.ingredients.length,
      catalogCount: data.shoppingCatalogItems.length,
      settingCount: data.appSettings.length,
    }
  }

  function downloadPayload(payload: AdminExportPayload) {
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: 'application/json;charset=utf-8',
    })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    const date = new Date().toISOString().slice(0, 10)

    anchor.href = url
    anchor.download = `planejador-admin-${date}.json`
    anchor.click()
    URL.revokeObjectURL(url)
  }

  return {
    downloadPayload,
    exportAdminData,
    importAdminData,
  }
}

async function selectAll(
  supabase: ReturnType<typeof requireSupabase>,
  table: string,
  select: string,
  orderColumn: string,
) {
  const { data, error } = await supabase
    .from(table)
    .select(select)
    .order(orderColumn, { ascending: true })

  if (error) throw error

  return data ?? []
}

async function upsertByKey(
  supabase: ReturnType<typeof requireSupabase>,
  options: {
    table: string
    key: string
    rows: AnyRow[]
    sourceRows?: AnyRow[]
    omit: string[]
  },
) {
  if (options.rows.length) {
    const rows = options.omit.length
      ? options.rows.map((row) => omitColumns(row, options.omit))
      : options.rows
    const { error } = await supabase
      .from(options.table)
      .upsert(rows, { onConflict: options.key })

    if (error) throw error
  }

  const sourceRows = options.sourceRows ?? options.rows
  const keys = sourceRows.map((row) => row[options.key]).filter(Boolean)
  const idByKey = await fetchIdByKey(supabase, options.table, options.key, keys)

  return new Map(
    sourceRows
      .filter((row) => row.id && row[options.key] && idByKey.has(row[options.key]))
      .map((row) => [row.id, idByKey.get(row[options.key]) as string]),
  )
}

async function replaceRecipeDetails(
  supabase: ReturnType<typeof requireSupabase>,
  data: AdminExportPayload['data'],
  recipeIdMap: Map<string, string>,
  tagIdMap: Map<string, string>,
  ingredientIdMap: Map<string, string>,
) {
  const recipeIds = Array.from(new Set([...recipeIdMap.values()]))

  if (recipeIds.length) {
    await deleteByIds(supabase, 'recipe_tag_links', 'recipe_id', recipeIds)
    await deleteByIds(supabase, 'recipe_ingredients', 'recipe_id', recipeIds)
    await deleteByIds(supabase, 'recipe_steps', 'recipe_id', recipeIds)
  }

  const tagLinks = data.recipeTagLinks.flatMap((row) => {
    const recipeId = recipeIdMap.get(row.recipe_id)
    const tagId = tagIdMap.get(row.tag_id)

    return recipeId && tagId ? [{ recipe_id: recipeId, tag_id: tagId }] : []
  })
  await insertRows(supabase, 'recipe_tag_links', tagLinks)

  const recipeIngredients = data.recipeIngredients.flatMap((row) => {
    const recipeId = recipeIdMap.get(row.recipe_id)
    if (!recipeId) return []

    return [{
      ...omitColumns(row, ['id', 'created_at', 'updated_at']),
      recipe_id: recipeId,
      ingredient_id: row.ingredient_id ? ingredientIdMap.get(row.ingredient_id) ?? null : null,
    }]
  })
  await insertRows(supabase, 'recipe_ingredients', recipeIngredients)

  const recipeSteps = data.recipeSteps.flatMap((row) => {
    const recipeId = recipeIdMap.get(row.recipe_id)
    if (!recipeId) return []

    return [{
      ...omitColumns(row, ['id', 'created_at', 'updated_at']),
      recipe_id: recipeId,
    }]
  })
  await insertRows(supabase, 'recipe_steps', recipeSteps)
}

async function replaceIngredientMeasures(
  supabase: ReturnType<typeof requireSupabase>,
  measures: AnyRow[],
  ingredientIdMap: Map<string, string>,
) {
  const ingredientIds = Array.from(new Set([...ingredientIdMap.values()]))
  if (ingredientIds.length) {
    await deleteByIds(supabase, 'ingredient_household_measures', 'ingredient_id', ingredientIds)
  }

  const rows = measures.flatMap((row) => {
    const ingredientId = ingredientIdMap.get(row.ingredient_id)
    if (!ingredientId) return []

    return [{
      ...omitColumns(row, ['id', 'created_at', 'updated_at']),
      ingredient_id: ingredientId,
    }]
  })
  await insertRows(supabase, 'ingredient_household_measures', rows)
}

async function insertRows(
  supabase: ReturnType<typeof requireSupabase>,
  table: string,
  rows: AnyRow[],
) {
  if (!rows.length) return

  const { error } = await supabase.from(table).insert(rows)
  if (error) throw error
}

async function deleteByIds(
  supabase: ReturnType<typeof requireSupabase>,
  table: string,
  column: string,
  ids: string[],
) {
  const { error } = await supabase.from(table).delete().in(column, ids)
  if (error) throw error
}

async function fetchIdByKey(
  supabase: ReturnType<typeof requireSupabase>,
  table: string,
  key: string,
  values: string[],
) {
  if (!values.length) return new Map<string, string>()

  const { data, error } = await supabase
    .from(table)
    .select(`id, ${key}`)
    .in(key, values)

  if (error) throw error

  return new Map((data ?? []).map((row: AnyRow) => [row[key], row.id]))
}

function validatePayload(payload: unknown): AdminExportPayload {
  if (!payload || typeof payload !== 'object') {
    throw new Error('Arquivo inválido. Importe um JSON exportado pelo painel admin.')
  }

  const candidate = payload as Partial<AdminExportPayload>
  if (candidate.source !== 'planejador-admin' || candidate.schemaVersion !== 1 || !candidate.data) {
    throw new Error('Arquivo incompatível. Exporte novamente pelo painel admin atual.')
  }

  for (const key of Object.keys(exportSelects)) {
    if (!Array.isArray((candidate.data as Record<string, unknown>)[key])) {
      throw new Error(`Arquivo sem a seção obrigatória "${key}".`)
    }
  }

  return candidate as AdminExportPayload
}

function omitColumns(row: AnyRow, columns: string[]) {
  const nextRow = { ...row }

  for (const column of columns) {
    delete nextRow[column]
  }

  return nextRow
}

function requireSupabase() {
  const supabase = useSupabaseClient()

  if (!supabase) {
    throw new Error('Supabase não configurado.')
  }

  return supabase
}
