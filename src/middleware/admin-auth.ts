import { navigateTo } from '#imports'
import { useSupabaseClient } from '../composables/useSupabaseClient'

export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return
  if (to.path === '/admin/login') return

  const supabase = useSupabaseClient()

  if (!supabase) {
    return navigateTo('/admin/login')
  }

  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    return navigateTo('/admin/login')
  }
})
