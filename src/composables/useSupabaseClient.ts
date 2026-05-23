import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { useRuntimeConfig, useNuxtApp } from '#imports'

type PublicRuntimeConfig = {
  supabaseUrl?: string
  supabaseAnonKey?: string
}

export function useSupabaseClient(): SupabaseClient | null {
  const runtimeConfig = useRuntimeConfig()
  const publicConfig = runtimeConfig.public as PublicRuntimeConfig

  if (!publicConfig.supabaseUrl || !publicConfig.supabaseAnonKey) return null

  const nuxtApp = useNuxtApp()
  const nuxtAppAny = nuxtApp as any

  if (!nuxtAppAny._supabaseClient) {
    nuxtAppAny._supabaseClient = createClient(publicConfig.supabaseUrl, publicConfig.supabaseAnonKey)
  }

  return nuxtAppAny._supabaseClient
}

