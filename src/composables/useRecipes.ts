import { useRuntimeConfig, useState } from '#imports'
import type { Recipe } from '../types/recipe'
import type { RecipeListFilters, RecipesProvider } from '../providers/recipes'
import { createRecipesProvider } from '../providers/recipes'
import { useSupabaseClient } from './useSupabaseClient'

type PublicRuntimeConfig = {
  dataProvider?: 'supabase' | 'mock'
  supabaseUrl?: string
  supabaseAnonKey?: string
}

export function useRecipes() {
  const provider = useRecipesProvider()
  const recipes = useState<Recipe[]>('recipes:published', () => [])
  const pending = useState<boolean>('recipes:pending', () => false)
  const error = useState<unknown | null>('recipes:error', () => null)

  async function loadRecipes(filters: RecipeListFilters = {}) {
    pending.value = true
    error.value = null

    try {
      recipes.value = await provider.listPublishedRecipes(filters)
      return recipes.value
    } catch (err: any) {
      error.value = err instanceof Error 
        ? { message: err.message, name: err.name } 
        : (err && typeof err === 'object' && 'message' in err)
          ? { message: err.message }
          : String(err)
      throw err
    } finally {
      pending.value = false
    }
  }

  async function getRecipeBySlug(slug: string) {
    return provider.getPublishedRecipeBySlug(slug)
  }

  return {
    recipes,
    pending,
    error,
    loadRecipes,
    getRecipeBySlug,
  }
}

function useRecipesProvider(): RecipesProvider {
  const runtimeConfig = useRuntimeConfig()
  const publicConfig = runtimeConfig.public as PublicRuntimeConfig
  const supabaseClient = useSupabaseClient()

  return createRecipesProvider({
    dataProvider: publicConfig.dataProvider ?? 'supabase',
    supabaseClient,
    supabaseUrl: publicConfig.supabaseUrl,
    supabaseAnonKey: publicConfig.supabaseAnonKey,
  })
}
