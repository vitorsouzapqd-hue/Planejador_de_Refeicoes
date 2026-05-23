import { useState } from '#imports'
import type { User } from '@supabase/supabase-js'
import { useSupabaseClient } from './useSupabaseClient'

export function useAdminAuth() {
  const adminUser = useState<User | null>('admin:user', () => null)
  const authPending = useState<boolean>('admin:auth-pending', () => false)
  const authError = useState<string | null>('admin:auth-error', () => null)

  async function loadAdminSession() {
    const supabase = useSupabaseClient()
    if (!supabase) return null

    const { data } = await supabase.auth.getSession()
    adminUser.value = data.session?.user ?? null

    return data.session
  }

  async function signIn(email: string, password: string) {
    const supabase = useSupabaseClient()
    authError.value = null

    if (!supabase) {
      authError.value = 'Supabase não configurado.'
      return false
    }

    authPending.value = true

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        authError.value = 'Não foi possível entrar. Confira e-mail e senha.'
        return false
      }

      adminUser.value = data.user
      return true
    } finally {
      authPending.value = false
    }
  }

  async function signOut() {
    const supabase = useSupabaseClient()
    if (!supabase) return

    await supabase.auth.signOut()
    adminUser.value = null
  }

  return {
    adminUser,
    authPending,
    authError,
    loadAdminSession,
    signIn,
    signOut,
  }
}
