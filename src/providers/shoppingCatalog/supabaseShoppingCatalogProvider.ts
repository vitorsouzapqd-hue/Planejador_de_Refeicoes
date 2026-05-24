import type { SupabaseClient } from '@supabase/supabase-js'
import { useSupabaseClient } from '../../composables/useSupabaseClient'
import type {
  ShoppingCatalogFilters,
  ShoppingCatalogInput,
  ShoppingCatalogItem,
} from '../../types/shoppingCatalog'
import type { ShoppingCatalogProvider } from './shoppingCatalogProvider'

type ShoppingCatalogRow = {
  id: string
  name: string
  slug: string
  display_name: string | null
  aliases: string[] | null
  shopping_category: string
  shopping_subcategory?: string | null
  default_quantity_text: string | null
  default_unit: string | null
  notes: string | null
  is_active: boolean
  is_food: boolean
  ingredient_id: string | null
  sort_order: number
  created_at?: string
  updated_at?: string
}

const shoppingCatalogSelect = `
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
`

export function createSupabaseShoppingCatalogProvider(client?: SupabaseClient | null): ShoppingCatalogProvider {
  function requireClient() {
    const supabase = client ?? useSupabaseClient()

    if (!supabase) {
      throw new Error('Supabase não configurado.')
    }

    return supabase
  }

  async function listActiveItems(filters: ShoppingCatalogFilters = {}) {
    return listItems({ ...filters, active: true })
  }

  async function listItems(filters: ShoppingCatalogFilters = {}) {
    const supabase = requireClient()
    const queryText = normalizeSearch(filters.search ?? '')

    const buildQuery = (selectFields: string, includeSubcategory: boolean) => {
      let query = supabase
      .from('shopping_catalog_items')
      .select(selectFields)
      .order('sort_order', { ascending: true })
      .order('name', { ascending: true })

      if (filters.active !== null && filters.active !== undefined) {
        query = query.eq('is_active', filters.active)
      }

      if (filters.category) {
        query = query.eq('shopping_category', filters.category)
      }

      if (includeSubcategory && filters.subcategory) {
        query = query.eq('shopping_subcategory', filters.subcategory)
      }

      if (filters.isFood !== null && filters.isFood !== undefined) {
        query = query.eq('is_food', filters.isFood)
      }

      if (queryText) {
        query = query.or(
          `name.ilike.%${escapeSearch(queryText)}%,display_name.ilike.%${escapeSearch(queryText)}%,aliases.cs.{${escapeArrayTerm(queryText)}}`,
        )
      }

      return query
    }

    const { data, error } = await buildQuery(shoppingCatalogSelect, true) as {
      data: unknown[] | null
      error: unknown
    }

    if (error) throw normalizeSupabaseError(error)

    return (data ?? []).map((row) => mapShoppingCatalogRow(row as ShoppingCatalogRow))
  }

  async function getItem(id: string) {
    const supabase = requireClient()
    const { data, error } = await supabase
      .from('shopping_catalog_items')
      .select(shoppingCatalogSelect)
      .eq('id', id)
      .maybeSingle() as {
        data: unknown | null
        error: unknown
      }

    if (error) throw normalizeSupabaseError(error)
    if (!data) return null

    return mapShoppingCatalogRow(data as ShoppingCatalogRow)
  }

  async function createItem(input: ShoppingCatalogInput) {
    const supabase = requireClient()
    const { data, error } = await supabase
      .from('shopping_catalog_items')
      .insert(mapShoppingCatalogInput(input))
      .select('id')
      .single()

    if (error) throw normalizeSupabaseError(error)

    return data.id as string
  }

  async function updateItem(id: string, input: ShoppingCatalogInput) {
    const supabase = requireClient()
    const { error } = await supabase
      .from('shopping_catalog_items')
      .update(mapShoppingCatalogInput(input))
      .eq('id', id)

    if (error) throw normalizeSupabaseError(error)
  }

  async function setItemActive(id: string, isActive: boolean) {
    const supabase = requireClient()
    const { error } = await supabase
      .from('shopping_catalog_items')
      .update({ is_active: isActive })
      .eq('id', id)

    if (error) throw normalizeSupabaseError(error)
  }

  async function getItemUsageCounts(id: string) {
    const item = await getItem(id)

    return {
      ingredientLinks: item?.ingredientId ? 1 : 0,
    }
  }

  async function deleteItemIfUnused(id: string) {
    const usage = await getItemUsageCounts(id)
    if (usage.ingredientLinks > 0) {
      throw new Error('Item vinculado a um ingrediente. Remova o vínculo antes de excluir.')
    }

    const supabase = requireClient()
    const { error } = await supabase
      .from('shopping_catalog_items')
      .delete()
      .eq('id', id)

    if (error) throw normalizeSupabaseError(error)
  }

  async function isSlugAvailable(slug: string, currentId?: string) {
    const supabase = requireClient()
    let query = supabase
      .from('shopping_catalog_items')
      .select('id')
      .eq('slug', slug)
      .limit(1)

    if (currentId) query = query.neq('id', currentId)

    const { data, error } = await query

    if (error) throw normalizeSupabaseError(error)

    return (data ?? []).length === 0
  }

  return {
    createItem,
    deleteItemIfUnused,
    getItem,
    getItemUsageCounts,
    isSlugAvailable,
    listActiveItems,
    listItems,
    setItemActive,
    updateItem,
  }
}

function mapShoppingCatalogRow(row: ShoppingCatalogRow): ShoppingCatalogItem {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    displayName: row.display_name,
    aliases: row.aliases ?? [],
    shoppingCategory: row.shopping_category,
    shoppingSubcategory: row.shopping_subcategory ?? null,
    defaultQuantityText: row.default_quantity_text,
    defaultUnit: row.default_unit,
    notes: row.notes,
    isActive: row.is_active,
    isFood: row.is_food,
    ingredientId: row.ingredient_id,
    sortOrder: row.sort_order,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }
}

function mapShoppingCatalogInput(input: ShoppingCatalogInput) {
  return {
    name: input.name.trim(),
    slug: input.slug.trim(),
    display_name: cleanOptionalText(input.displayName),
    aliases: input.aliases.map((alias) => alias.trim()).filter(Boolean),
    shopping_category: input.shoppingCategory,
    default_quantity_text: cleanOptionalText(input.defaultQuantityText),
    default_unit: cleanOptionalText(input.defaultUnit),
    notes: cleanOptionalText(input.notes),
    is_active: input.isActive,
    is_food: input.isFood,
    ingredient_id: cleanOptionalText(input.ingredientId),
    sort_order: Number(input.sortOrder) || 0,
    shopping_subcategory: cleanOptionalText(input.shoppingSubcategory),
  }
}

function normalizeSupabaseError(error: unknown) {
  if (!error || typeof error !== 'object') return error

  const message = 'message' in error ? String(error.message) : ''
  if (message.toLocaleLowerCase('pt-BR').includes('invalid api key')) {
    return new Error('Chave pública do Supabase inválida. Atualize NUXT_PUBLIC_SUPABASE_ANON_KEY no .env.')
  }

  return error
}

function cleanOptionalText(value: string | null | undefined) {
  return value?.trim() || null
}

function normalizeSearch(value: string) {
  return value.trim()
}

function escapeSearch(value: string) {
  return value.replace(/[%_,]/g, '')
}

function escapeArrayTerm(value: string) {
  return value.replace(/[{}"]/g, '')
}
