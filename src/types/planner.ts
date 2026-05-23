import type { Recipe, RecipeIngredient } from './recipe'

export type PlanningLine = {
  weightReadyG: number | null
  portions: number | null
}

export type PlanningRecipe = {
  recipeId: string
  lines: PlanningLine[]
}

export type PlanningGroupSlug = 'proteinas' | 'carboidratos' | 'saladas' | 'frutas'

export type PlanningGroupStatus = 'available' | 'coming_soon'

export type PlanningGroup = {
  id: string
  name: string
  slug: PlanningGroupSlug | string
  status: PlanningGroupStatus
  description: string
  icon: string
  categorySlug: string
  categoryAliases?: string[]
}

export type PlanningGroupPlan = {
  groupSlug: PlanningGroupSlug
  totalPortionsGoal: number | null
  selectedRecipes: PlanningRecipe[]
}

export type CurrentPlanning = {
  selectedGroupSlugs: PlanningGroupSlug[]
  groups: Partial<Record<PlanningGroupSlug, PlanningGroupPlan>>
  generatedResult?: PlanningResult
  generatedAt?: string
  updatedAt?: string
}

export type ScaledIngredient = {
  ingredient: RecipeIngredient
  quantity: number | null
  displayQuantity: number | null
  unit: string | null
}

export type ShoppingListItem = {
  key: string
  name: string
  displayName: string
  shoppingCategory: string
  ingredientRole: RecipeIngredient['ingredientRole']
  quantity: number | null
  unit: string | null
  isCritical: boolean
  isFreeSeasoning: boolean
  notes: string | null
  requiredQuantity?: number | null
  packageCount?: number | null
  packageSizeG?: number | null
  packageLabel?: string | null
}

export type ShoppingListCategory = {
  category: string
  items: ShoppingListItem[]
}

export type PlanningRecipeWithData = PlanningRecipe & {
  recipe: Recipe
}

export type PlanningGroupWithData = {
  groupSlug: PlanningGroupSlug
  groupName: string
  totalPortionsGoal: number
  recipes: PlanningRecipeWithData[]
}

export type PreparationRecipeResult = {
  recipeId: string
  groupSlug: PlanningGroupSlug
  groupName: string
  recipeName: string
  readyWeightG: number
  rawNeededG: number
  text: string
}

export type PlanningResultRecipe = {
  recipeId: string
  recipeName: string
  recipeSlug: string
  imagePath: string | null
  imageUrl?: string | null
  lines: Array<{
    weightReadyG: number
    portions: number
  }>
  readyWeightG: number
}

export type PlanningResultGroup = {
  groupSlug: PlanningGroupSlug
  groupName: string
  totalPortions: number
  recipes: PlanningResultRecipe[]
}

export type PlanningResult = {
  generatedAt: string
  totalPortions: number
  groups: PlanningResultGroup[]
  summaryText: string
  shoppingList: ShoppingListCategory[]
  shoppingText: string
  preparationText: string
  preparationRecipes: PreparationRecipeResult[]
  portioningText: string
}
