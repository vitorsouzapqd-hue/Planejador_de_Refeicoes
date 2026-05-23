import { computed, onMounted, useRuntimeConfig, useState } from '#imports'

export const STUDENT_ACCESS_STORAGE_KEY = 'meal_planner_student_access'

type RuntimeConfigWithStudentAccess = {
  studentAccessPassword?: string
  public: {
    studentAccessPassword?: string
  }
}

export function useStudentAccess() {
  const runtimeConfig = useRuntimeConfig() as RuntimeConfigWithStudentAccess
  const hasAccess = useState<boolean>('student-access:granted', () => false)
  const accessError = useState<string | null>('student-access:error', () => null)

  const isAuthenticated = computed(() => hasAccess.value)

  onMounted(() => {
    hasAccess.value = readStoredAccess()
  })

  function verifyPassword(password: string) {
    accessError.value = null

    const expectedPassword =
      runtimeConfig.public.studentAccessPassword ?? runtimeConfig.studentAccessPassword

    if (!expectedPassword) {
      accessError.value = 'Senha de acesso não configurada.'
      return false
    }

    const isValid = password === expectedPassword
    hasAccess.value = isValid

    if (typeof window !== 'undefined') {
      if (isValid) {
        window.localStorage.setItem(STUDENT_ACCESS_STORAGE_KEY, 'true')
      } else {
        window.localStorage.removeItem(STUDENT_ACCESS_STORAGE_KEY)
      }
    }

    if (!isValid) {
      accessError.value = 'Senha de acesso inválida.'
    }

    return isValid
  }

  function revokeAccess() {
    hasAccess.value = false

    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(STUDENT_ACCESS_STORAGE_KEY)
    }
  }

  return {
    hasAccess,
    isAuthenticated,
    accessError,
    verifyPassword,
    revokeAccess,
  }
}

function readStoredAccess() {
  if (typeof window === 'undefined') return false

  return window.localStorage.getItem(STUDENT_ACCESS_STORAGE_KEY) === 'true'
}
