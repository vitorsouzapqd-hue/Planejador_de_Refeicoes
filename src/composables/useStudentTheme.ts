import { computed, useState } from '#imports'

export const STUDENT_THEME_STORAGE_KEY = 'meal_planner_theme'

export function useStudentTheme() {
  const isDarkMode = useState<boolean>('student-theme:dark', () => false)

  const themeButtonLabel = computed(() => (isDarkMode.value ? 'Claro' : 'Escuro'))

  function loadTheme() {
    if (typeof window === 'undefined') return

    isDarkMode.value = window.localStorage.getItem(STUDENT_THEME_STORAGE_KEY) === 'dark'
    applyTheme()
  }

  function toggleTheme() {
    setDarkMode(!isDarkMode.value)
  }

  function setDarkMode(nextTheme: boolean) {
    isDarkMode.value = nextTheme
    applyTheme()

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STUDENT_THEME_STORAGE_KEY, nextTheme ? 'dark' : 'light')
    }
  }

  function applyTheme() {
    if (typeof document === 'undefined') return

    document.documentElement.classList.toggle('theme-dark', isDarkMode.value)
    document.documentElement.style.colorScheme = isDarkMode.value ? 'dark' : 'light'
  }

  return {
    isDarkMode,
    themeButtonLabel,
    loadTheme,
    toggleTheme,
    setDarkMode,
    applyTheme,
  }
}
