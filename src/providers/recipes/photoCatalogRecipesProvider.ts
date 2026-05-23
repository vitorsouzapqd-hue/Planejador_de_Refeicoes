import { getPhotoCatalogRecipeBySlug, listPhotoCatalogRecipes } from '../../data/photoRecipeCatalog'
import type { RecipesProvider } from './recipesProvider'

export const photoCatalogRecipesProvider: RecipesProvider = {
  async listPublishedRecipes(filters = {}) {
    return listPhotoCatalogRecipes(filters)
  },

  async getPublishedRecipeBySlug(slug) {
    return getPhotoCatalogRecipeBySlug(slug)
  },
}
