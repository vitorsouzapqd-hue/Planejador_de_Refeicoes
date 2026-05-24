import { useState } from '#imports'
import type { User } from '@supabase/supabase-js'
import { useSupabaseClient } from './useSupabaseClient'

export function useAdminAuth() {
  const adminUser = useState<User | null>('admin:user', () => null)
  const authPending = useState<boolean>('admin:auth-pending', () => false)
  const authError = useState<string | null>('admin:auth-error', () => null)
  const confirmationSent = useState<boolean>('admin:confirmation-sent', () => false)

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
    confirmationSent.value = false

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
        authError.value = getAuthErrorMessage(error.message)
        return false
      }

      adminUser.value = data.user
      return true
    } finally {
      authPending.value = false
    }
  }

  async function resendConfirmation(email: string) {
    const supabase = useSupabaseClient()
    authError.value = null
    confirmationSent.value = false

    if (!supabase) {
      authError.value = 'Supabase não configurado.'
      return false
    }

    const cleanedEmail = email.trim()
    if (!cleanedEmail) {
      authError.value = 'Informe o e-mail para reenviar a confirmação.'
      return false
    }

    authPending.value = true

    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: cleanedEmail,
      })

      if (error) {
        authError.value = getAuthErrorMessage(error.message)
        return false
      }

      confirmationSent.value = true
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
    confirmationSent,
    loadAdminSession,
    resendConfirmation,
    signIn,
    signOut,
  }
}

function getAuthErrorMessage(message: string) {
  const normalizedMessage = message.toLocaleLowerCase('pt-BR')

  if (normalizedMessage.includes('email not confirmed')) {
    return 'Esse e-mail ainda não foi confirmado. Confirme pelo link enviado pelo Supabase ou reenvie a confirmação.'
  }

  return 'Não foi possível entrar. Confira e-mail e senha.'
}
