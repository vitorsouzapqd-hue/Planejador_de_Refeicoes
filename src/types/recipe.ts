import type { Ingredient } from './ingredient'

export type RecipeStatus = 'draft' | 'published' | 'archived'

export type IngredientRole = 'main' | 'complement' | 'critical' | 'seasoning'

export type RoundingMode = 'up' | 'nearest' | 'manual' | 'none'

export type RecipeCategory = {
  id: string
  name: string
  slug: string
  description: string | null
  isActive: boolean
  sortOrder: number
}

export type RecipeTag = {
  id: string
  name: string
  slug: string
}

export type RecipeIngredient = {
  id: string
  recipeId: string
  ingredientId?: string | null
  ingredient?: Ingredient | null
  name: string
  shoppingCategory: string
  ingredientRole: IngredientRole
  role?: IngredientRole
  baseQuantity: number | null
  quantidade?: number | null
  unit: string | null
  unidade?: string | null
  isCritical: boolean
  critical?: boolean
  isFreeSeasoning: boolean
  seasoning?: boolean
  includeInShoppingList: boolean
  roundingStep: number | null
  roundingMode: RoundingMode
  displayName: string | null
  notes: string | null
  sortOrder: number
  packageSizeG?: number | null
  purchaseIncrementG?: number | null
  purchaseUnit?: string | null
  packageLabel?: string | null
  buyInWholePackages?: boolean | null
}

export type RecipeStep = {
  id: string
  recipeId: string
  stepNumber: number
  instruction: string
}

export type RecipeNutrition = {
  kcalPer100g: number | null
  proteinGPer100g: number | null
  carbsGPer100g: number | null
  fatGPer100g: number | null
  fiberGPer100g: number | null
  sodiumMgPer100g: number | null
  nutritionNotes: string | null
}

export type Recipe = {
  id: string
  categoryId: string | null
  category?: RecipeCategory | null
  name: string
  slug: string
  shortDescription: string | null
  type: string | null
  status: RecipeStatus
  imagePath: string | null
  imageUrl?: string | null
  referenceVideoUrl?: string | null
  referenceVideoTitle?: string | null
  referenceVideoSource?: string | null
  referenceVideoNotes?: string | null
  baseRawWeightG: number
  baseCleanWeightG?: number | null
  baseReadyWeightG: number
  cookingMethod?: string | null
  correctionFactor?: number | null
  cookingFactor?: number | null
  baseYieldNote: string | null
  prepTimeMinutes: number | null
  costLevel: number | null
  timeLevel: number | null
  workLevel: number | null
  practicalityLevel: number | null
  versatilityLevel: number | null
  freezesWell: boolean
  storageInstructions: string | null
  reheatInstructions: string | null
  lockedRecipeWarning: string | null
  nutrition: RecipeNutrition
  sortOrder: number
  tags: RecipeTag[]
  ingredients: RecipeIngredient[]
  steps: RecipeStep[]
}
