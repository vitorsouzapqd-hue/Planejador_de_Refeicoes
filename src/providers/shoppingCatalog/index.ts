import type { SupabaseClient } from '@supabase/supabase-js'
import { createMockShoppingCatalogProvider } from './mockShoppingCatalogProvider'
import { createSupabaseShoppingCatalogProvider } from './supabaseShoppingCatalogProvider'
import type { ShoppingCatalogProvider } from './shoppingCatalogProvider'

export type ShoppingCatalogProviderConfig = {
  dataProvider?: 'supabase' | 'mock'
  supabaseClient?: SupabaseClient | null
  supabaseUrl?: string
  supabaseAnonKey?: string
}

export function createShoppingCatalogProvider(config: ShoppingCatalogProviderConfig): ShoppingCatalogProvider {
  const dataProvider = config.dataProvider ?? 'supabase'

  if (dataProvider === 'mock') {
    return createMockShoppingCatalogProvider()
  }

  if (!config.supabaseClient && (!config.supabaseUrl || !config.supabaseAnonKey)) {
    return createMockShoppingCatalogProvider()
  }

  return createSupabaseShoppingCatalogProvider(config.supabaseClient)
}

export type { ShoppingCatalogProvider }
