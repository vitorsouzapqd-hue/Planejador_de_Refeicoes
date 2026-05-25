import type { Recipe } from '../../types/recipe'
import { normalizeNameToSlug } from '../../utils/recipeImages'
import type { RecipeListFilters, RecipesProvider } from './recipesProvider'

let sortedDossierRecipesPromise: Promise<Recipe[]> | null = null

export const dossierRecipesProvider: RecipesProvider = {
  async listPublishedRecipes(filters = {}) {
    const sortedDossierRecipes = await getSortedDossierRecipes()

    return sortedDossierRecipes.filter((recipe) => matchesFilters(recipe, filters))
  },

  async getPublishedRecipeBySlug(slug) {
    const sortedDossierRecipes = await getSortedDossierRecipes()

    return sortedDossierRecipes.find((recipe) => recipe.slug === slug) ?? null
  },
}

async function getSortedDossierRecipes() {
  sortedDossierRecipesPromise ??= import('../../data/dossierRecipeCatalog').then((module) =>
    [...module.dossierRecipeCatalog].sort(sortRecipes),
  )

  return sortedDossierRecipesPromise
}

function matchesFilters(recipe: Recipe, filters: RecipeListFilters) {
  const matchesSearch =
    !filters.search ||
    normalizeNameToSlug(recipe.name).includes(normalizeNameToSlug(filters.search)) ||
    normalizeNameToSlug(recipe.slug).includes(normalizeNameToSlug(filters.search))
  const matchesCategory = !filters.categorySlug || recipe.category?.slug === filters.categorySlug
  const matchesType = !filters.type || recipe.type === filters.type
  const recipeTagSlugs = new Set(recipe.tags.map((tag) => tag.slug))
  const matchesTags =
    !filters.tagSlugs?.length ||
    filters.tagSlugs.every((tagSlug) => recipeTagSlugs.has(tagSlug))

  return matchesSearch && matchesCategory && matchesType && matchesTags
}

function sortRecipes(a: Recipe, b: Recipe) {
  const categoryOrder = (a.category?.sortOrder ?? 99) - (b.category?.sortOrder ?? 99)
  if (categoryOrder !== 0) return categoryOrder

  const sortOrder = a.sortOrder - b.sortOrder
  if (sortOrder !== 0) return sortOrder

  return a.name.localeCompare(b.name, 'pt-BR')
}
