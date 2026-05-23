import type { Recipe } from '../../types/recipe'

export type RecipeListFilters = {
  search?: string
  categorySlug?: string
  type?: string
  tagSlugs?: string[]
}

export type RecipesProvider = {
  listPublishedRecipes(filters?: RecipeListFilters): Promise<Recipe[]>
  getPublishedRecipeBySlug(slug: string): Promise<Recipe | null>
}
