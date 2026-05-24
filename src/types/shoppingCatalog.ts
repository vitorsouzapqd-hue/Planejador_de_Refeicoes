export const shoppingCatalogCategories = [
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
] as const

export type ShoppingCatalogCategory = typeof shoppingCatalogCategories[number]

export const shoppingCatalogSubcategories: Partial<Record<ShoppingCatalogCategory, string[]>> = {
  Proteínas: [
    'Aves',
    'Bovinos',
    'Suínos',
    'Peixes',
    'Proteínas em Conserva e Ovos',
    'Frios',
  ],
  Carboidratos: [
    'Carboidratos de Base',
    'Carboidratos Práticos',
    'Doces e Açúcares',
  ],
  Vegetais: [
    'Verduras',
    'Legumes',
    'Oleaginosas, Sementes e Fibras',
  ],
  Frutas: [
    'Frutas de Casa',
    'Frutas de Rua',
  ],
  'Temperos e Condimentos': [
    'Temperos Secos',
    'Ervas Desidratadas',
    'Condimentos e Óleos',
  ],
}

export type ShoppingCatalogItem = {
  id: string
  name: string
  slug: string
  displayName: string | null
  aliases: string[]
  shoppingCategory: ShoppingCatalogCategory | string
  shoppingSubcategory: string | null
  defaultQuantityText: string | null
  defaultUnit: string | null
  notes: string | null
  isActive: boolean
  isFood: boolean
  ingredientId: string | null
  sortOrder: number
  createdAt?: string
  updatedAt?: string
}

export type ShoppingCatalogFilters = {
  search?: string
  category?: ShoppingCatalogCategory | string | null
  subcategory?: string | null
  active?: boolean | null
  isFood?: boolean | null
}

export type ShoppingCatalogInput = {
  name: string
  slug: string
  displayName: string | null
  aliases: string[]
  shoppingCategory: ShoppingCatalogCategory | string
  shoppingSubcategory: string | null
  defaultQuantityText: string | null
  defaultUnit: string | null
  notes: string | null
  isActive: boolean
  isFood: boolean
  ingredientId: string | null
  sortOrder: number
}
