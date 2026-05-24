import { computed, ref } from 'vue'
import { createSupabaseShoppingCatalogProvider } from '../providers/shoppingCatalog/supabaseShoppingCatalogProvider'
import {
  shoppingCatalogCategories,
  shoppingCatalogSubcategories,
  type ShoppingCatalogCategory,
  type ShoppingCatalogFilters,
  type ShoppingCatalogInput,
  type ShoppingCatalogItem,
} from '../types/shoppingCatalog'

export const shoppingCategoryOrder = shoppingCatalogCategories
export const shoppingSubcategoryOrder = shoppingCatalogSubcategories

export function useShoppingCatalog() {
  const provider = createSupabaseShoppingCatalogProvider()
  const items = ref<ShoppingCatalogItem[]>([])
  const pending = ref(false)
  const errorMessage = ref<string | null>(null)

  const activeItems = computed(() => items.value.filter((item) => item.isActive))

  async function loadActiveItems(filters: ShoppingCatalogFilters = {}) {
    pending.value = true
    errorMessage.value = null

    try {
      items.value = sortCatalogItems(await provider.listActiveItems(filters))
    } catch (error) {
      console.error('[shopping-list] failed to load active items', error)
      errorMessage.value = getShoppingListErrorMessage(error)
      items.value = []
    } finally {
      pending.value = false
    }
  }

  async function loadItems(filters: ShoppingCatalogFilters = {}) {
    pending.value = true
    errorMessage.value = null

    try {
      items.value = sortCatalogItems(await provider.listItems(filters))
    } catch (error) {
      console.error('[shopping-list] failed to load items', error)
      errorMessage.value = getShoppingListErrorMessage(error)
      items.value = []
    } finally {
      pending.value = false
    }
  }

  return {
    activeItems,
    categories: shoppingCatalogCategories,
    subcategories: shoppingCatalogSubcategories,
    createItem: provider.createItem,
    deleteItemIfUnused: provider.deleteItemIfUnused,
    errorMessage,
    getItem: provider.getItem,
    getItemUsageCounts: provider.getItemUsageCounts,
    isSlugAvailable: provider.isSlugAvailable,
    items,
    loadActiveItems,
    loadItems,
    pending,
    setItemActive: provider.setItemActive,
    updateItem: provider.updateItem,
  }
}

export function sortCatalogItems(items: ShoppingCatalogItem[]) {
  return [...items].sort((a, b) => {
    const categoryDiff = getShoppingCategoryOrder(a.shoppingCategory) - getShoppingCategoryOrder(b.shoppingCategory)
    if (categoryDiff !== 0) return categoryDiff
    const subcategoryDiff =
      getShoppingSubcategoryOrder(a.shoppingCategory, a.shoppingSubcategory) -
      getShoppingSubcategoryOrder(b.shoppingCategory, b.shoppingSubcategory)
    if (subcategoryDiff !== 0) return subcategoryDiff
    const sortDiff = a.sortOrder - b.sortOrder
    if (sortDiff !== 0) return sortDiff

    return getCatalogDisplayName(a).localeCompare(getCatalogDisplayName(b), 'pt-BR')
  })
}

export function getCatalogDisplayName(item: ShoppingCatalogItem) {
  return item.displayName?.trim() || item.name
}

export function getShoppingCategoryOrder(category: string) {
  const index = shoppingCatalogCategories.indexOf(category as ShoppingCatalogCategory)

  return index === -1 ? shoppingCatalogCategories.length : index
}

export function getShoppingSubcategoryOrder(category: string, subcategory: string | null) {
  if (!subcategory) return 0

  const subcategories = shoppingCatalogSubcategories[category as ShoppingCatalogCategory] ?? []
  const index = subcategories.indexOf(subcategory)

  return index === -1 ? subcategories.length + 1 : index + 1
}

export function getSubcategoriesForItems(items: ShoppingCatalogItem[], category: string) {
  const fromCatalog = items
    .filter((item) => item.shoppingCategory === category && item.shoppingSubcategory)
    .map((item) => item.shoppingSubcategory as string)
  const fromBase = shoppingCatalogSubcategories[category as ShoppingCatalogCategory] ?? []

  return Array.from(new Set([...fromBase, ...fromCatalog]))
}

export function searchCatalogItems(
  items: ShoppingCatalogItem[],
  search: string,
  category: string,
  subcategory = 'Todos',
) {
  const query = normalize(search)

  return sortCatalogItems(items).filter((item) => {
    const matchesCategory = category === 'Todos' || item.shoppingCategory === category
    const matchesSubcategory =
      subcategory === 'Todos' || item.shoppingSubcategory === subcategory
    const searchable = [
      item.name,
      item.displayName ?? '',
      item.shoppingCategory,
      item.shoppingSubcategory ?? '',
      ...item.aliases,
    ].map(normalize).join(' ')

    return matchesCategory && matchesSubcategory && (!query || searchable.includes(query))
  })
}

export function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .trim()
}

function getShoppingListErrorMessage(error: unknown) {
  if (error instanceof Error && error.message.trim()) return error.message
  if (error && typeof error === 'object' && 'message' in error) {
    const message = String(error.message).trim()
    if (message) return message
  }

  return 'Não foi possível carregar a Lista de Compras.'
}

export type {
  ShoppingCatalogCategory,
  ShoppingCatalogInput,
  ShoppingCatalogItem,
}
