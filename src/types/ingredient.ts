import type { RoundingMode } from './recipe'

export type IngredientShoppingCategory =
  | 'Proteínas'
  | 'Carboidratos'
  | 'Vegetais'
  | 'Frutas'
  | 'Laticínios'
  | 'Congelados'
  | 'Temperos e Condimentos'
  | 'Despensa'
  | 'Bebidas'
  | 'Utilidades'
  | 'Outros'

export type IngredientNutrition = {
  kcalPer100g: number | null
  proteinGPer100g: number | null
  carbsGPer100g: number | null
  fatGPer100g: number | null
  fiberGPer100g: number | null
  sodiumMgPer100g: number | null
  nutritionSource: string | null
  nutritionNotes: string | null
}

export type IngredientPurchaseRules = {
  defaultRoundingMode: RoundingMode
  defaultRoundingStep: number | null
  buyInWholePackages: boolean
  packageSizeG: number | null
  packageLabel: string | null
  purchaseIncrementG: number | null
}

export type IngredientCorrectionFactors = {
  defaultCorrectionFactor: number | null
  ediblePortionPercent: number | null
  correctionNotes: string | null
}

export type IngredientHouseholdMeasure = {
  id: string
  ingredientId: string
  measureName: string
  gramsEquivalent: number | null
  mlEquivalent: number | null
  isDefault: boolean
  notes: string | null
  sortOrder: number
}

export type Ingredient = {
  id: string
  name: string
  slug: string
  displayName: string | null
  aliases: string[]
  shoppingCategory: IngredientShoppingCategory | string
  defaultUnit: string
  isActive: boolean
  nutrition: IngredientNutrition
  purchaseRules: IngredientPurchaseRules
  correctionFactors: IngredientCorrectionFactors
  notes: string | null
  sortOrder: number
  householdMeasures?: IngredientHouseholdMeasure[]
}
