import type { ShoppingCatalogCategory } from './shoppingCatalog'

export type ShoppingListSource = 'automatic' | 'catalog' | 'custom'

export type ShoppingNoteType =
  | 'gross_weight'
  | 'whole_package'
  | 'rounded_up'
  | 'household_measure'
  | 'free_seasoning'
  | 'critical'
  | 'catalog'
  | 'manual'

export type ShoppingListUiItem = {
  id: string
  source: ShoppingListSource
  catalogItemId?: string | null
  ingredientId?: string | null
  category: ShoppingCatalogCategory | string
  subcategory?: string | null
  name: string
  quantityText: string
  noteType?: ShoppingNoteType | null
  noteText?: string | null
  checked: boolean
  createdAt: string
  isRemovable: boolean
}

export type ShoppingListGroup = {
  category: ShoppingCatalogCategory | string
  items: ShoppingListUiItem[]
}

export type CustomShoppingItemInput = {
  name: string
  quantityText: string | null
  category: ShoppingCatalogCategory | string
  subcategory?: string | null
  noteText?: string | null
}

export type CatalogShoppingItemInput = {
  quantityText?: string | null
}
