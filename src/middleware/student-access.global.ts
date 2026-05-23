import { navigateTo } from '#imports'
import { STUDENT_ACCESS_STORAGE_KEY } from '../composables/useStudentAccess'

export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server) return
  if (to.path.startsWith('/admin')) return

  const isAccessRoute = to.path === '/acesso'
  const hasAccess = window.localStorage.getItem(STUDENT_ACCESS_STORAGE_KEY) === 'true'

  if (!hasAccess && !isAccessRoute) {
    return navigateTo('/acesso')
  }

  if (hasAccess && (isAccessRoute || to.path === '/')) {
    return navigateTo('/planejar')
  }
})
