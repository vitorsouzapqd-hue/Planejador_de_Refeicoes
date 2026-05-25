import type { SupabaseClient } from '@supabase/supabase-js'
import type { Recipe } from '../../types/recipe'
import type { RecipeListFilters, RecipesProvider } from './recipesProvider'
import { dossierRecipesProvider } from './dossierRecipesProvider'
import { mockRecipesProvider } from './mockRecipesProvider'
import { photoCatalogRecipesProvider } from './photoCatalogRecipesProvider'
import { createSupabaseRecipesProvider } from './supabaseRecipesProvider'

export type RecipesProviderConfig = {
  dataProvider?: 'supabase' | 'mock'
  supabaseClient?: SupabaseClient | null
  supabaseUrl?: string
  supabaseAnonKey?: string
}

export function createRecipesProvider(config: RecipesProviderConfig): RecipesProvider {
  const dataProvider = config.dataProvider ?? 'supabase'
  const staticCatalogProvider = createHybridRecipesProvider(
    dossierRecipesProvider,
    createHybridRecipesProvider(mockRecipesProvider, photoCatalogRecipesProvider),
  )

  if (dataProvider === 'mock') {
    return staticCatalogProvider
  }

  if (!config.supabaseClient && (!config.supabaseUrl || !config.supabaseAnonKey)) {
    return staticCatalogProvider
  }

  return createSupabaseRecipesProvider({
    supabaseClient: config.supabaseClient,
    supabaseUrl: config.supabaseUrl ?? '',
    supabaseAnonKey: config.supabaseAnonKey ?? '',
  })
}

export type { RecipeListFilters, RecipesProvider } from './recipesProvider'

function createHybridRecipesProvider(
  primaryProvider: RecipesProvider,
  fallbackProvider: RecipesProvider,
): RecipesProvider {
  return {
    async listPublishedRecipes(filters = {}) {
      const [primaryRecipes, fallbackRecipes] = await Promise.all([
        safeListPublishedRecipes(primaryProvider, filters),
        fallbackProvider.listPublishedRecipes(filters),
      ])

      return mergeRecipesBySlug(primaryRecipes, fallbackRecipes)
    },

    async getPublishedRecipeBySlug(slug) {
      return (await safeGetPublishedRecipeBySlug(primaryProvider, slug)) ?? fallbackProvider.getPublishedRecipeBySlug(slug)
    },
  }
}

async function safeListPublishedRecipes(provider: RecipesProvider, filters: RecipeListFilters) {
  try {
    return await provider.listPublishedRecipes(filters)
  } catch {
    return []
  }
}

async function safeGetPublishedRecipeBySlug(provider: RecipesProvider, slug: string) {
  try {
    return await provider.getPublishedRecipeBySlug(slug)
  } catch {
    return null
  }
}

function mergeRecipesBySlug(primaryRecipes: Recipe[], fallbackRecipes: Recipe[]) {
  const recipesBySlug = new Map<string, Recipe>()

  for (const recipe of fallbackRecipes) {
    recipesBySlug.set(recipe.slug, recipe)
  }

  for (const recipe of primaryRecipes) {
    recipesBySlug.set(recipe.slug, recipe)
  }

  return Array.from(recipesBySlug.values()).sort(sortRecipes)
}

function sortRecipes(a: Recipe, b: Recipe) {
  const categoryOrder = (a.category?.sortOrder ?? 99) - (b.category?.sortOrder ?? 99)
  if (categoryOrder !== 0) return categoryOrder

  const sortOrder = a.sortOrder - b.sortOrder
  if (sortOrder !== 0) return sortOrder

  return a.name.localeCompare(b.name, 'pt-BR')
}
