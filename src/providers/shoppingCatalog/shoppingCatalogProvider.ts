import type {
  ShoppingCatalogFilters,
  ShoppingCatalogInput,
  ShoppingCatalogItem,
} from '../../types/shoppingCatalog'

export type ShoppingCatalogProvider = {
  createItem(input: ShoppingCatalogInput): Promise<string>
  deleteItemIfUnused(id: string): Promise<void>
  getItem(id: string): Promise<ShoppingCatalogItem | null>
  getItemUsageCounts(id: string): Promise<{ ingredientLinks: number }>
  isSlugAvailable(slug: string, currentId?: string): Promise<boolean>
  listActiveItems(filters?: ShoppingCatalogFilters): Promise<ShoppingCatalogItem[]>
  listItems(filters?: ShoppingCatalogFilters): Promise<ShoppingCatalogItem[]>
  setItemActive(id: string, isActive: boolean): Promise<void>
  updateItem(id: string, input: ShoppingCatalogInput): Promise<void>
}
