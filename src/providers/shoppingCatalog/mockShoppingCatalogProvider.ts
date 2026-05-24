import { mockShoppingCatalogItems } from '../../data/mockShoppingCatalogItems'
import type { ShoppingCatalogFilters, ShoppingCatalogItem } from '../../types/shoppingCatalog'
import type { ShoppingCatalogProvider } from './shoppingCatalogProvider'

export function createMockShoppingCatalogProvider(): ShoppingCatalogProvider {
  async function listActiveItems(filters: ShoppingCatalogFilters = {}) {
    return listItems({ ...filters, active: true })
  }

  async function listItems(filters: ShoppingCatalogFilters = {}) {
    return mockShoppingCatalogItems.filter((item) => matchesFilters(item, filters))
  }

  async function getItem(id: string) {
    return mockShoppingCatalogItems.find((item) => item.id === id) ?? null
  }

  async function getItemUsageCounts() {
    return { ingredientLinks: 0 }
  }

  async function isSlugAvailable(slug: string, currentId?: string) {
    return !mockShoppingCatalogItems.some((item) => item.slug === slug && item.id !== currentId)
  }

  async function rejectWriteOperation(): Promise<never> {
    throw new Error('Supabase não configurado. Edite a Lista de Compras pelo admin com Supabase ativo.')
  }

  return {
    createItem: rejectWriteOperation,
    deleteItemIfUnused: rejectWriteOperation,
    getItem,
    getItemUsageCounts,
    isSlugAvailable,
    listActiveItems,
    listItems,
    setItemActive: rejectWriteOperation,
    updateItem: rejectWriteOperation,
  }
}

function matchesFilters(item: ShoppingCatalogItem, filters: ShoppingCatalogFilters) {
  if (filters.active !== null && filters.active !== undefined && item.isActive !== filters.active) return false
  if (filters.category && item.shoppingCategory !== filters.category) return false
  if (filters.subcategory && item.shoppingSubcategory !== filters.subcategory) return false
  if (filters.isFood !== null && filters.isFood !== undefined && item.isFood !== filters.isFood) return false

  const query = normalize(filters.search ?? '')
  if (!query) return true

  const searchable = [
    item.name,
    item.displayName ?? '',
    item.shoppingCategory,
    item.shoppingSubcategory ?? '',
    ...item.aliases,
  ].map(normalize).join(' ')

  return searchable.includes(query)
}

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .trim()
}
