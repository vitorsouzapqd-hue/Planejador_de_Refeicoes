<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { usePlannerState } from '../../composables/usePlannerState'
import BaseIcon from '../ui/BaseIcon.vue'

const { planning, clearPlanning } = usePlannerState()
const themeStorageKey = 'meal_planner_theme'
const isDarkMode = ref(false)

const totalPortions = computed(() =>
  planning.value.selectedGroupSlugs.reduce((groupTotal, groupSlug) => {
    const group = planning.value.groups[groupSlug]
    if (!group) return groupTotal

    return groupTotal + group.selectedRecipes.reduce((recipeTotal, recipe) => {
      return recipeTotal + recipe.lines.reduce((lineTotal, line) => lineTotal + (line.portions ?? 0), 0)
    }, 0)
  }, 0),
)

const themeButtonLabel = computed(() => (isDarkMode.value ? 'Claro' : 'Escuro'))

onMounted(() => {
  isDarkMode.value = localStorage.getItem(themeStorageKey) === 'dark'
  applyTheme()
})

watch(isDarkMode, (nextTheme) => {
  applyTheme()
  localStorage.setItem(themeStorageKey, nextTheme ? 'dark' : 'light')
})

function toggleTheme() {
  isDarkMode.value = !isDarkMode.value
}

function applyTheme() {
  document.documentElement.classList.toggle('theme-dark', isDarkMode.value)
  document.documentElement.style.colorScheme = isDarkMode.value ? 'dark' : 'light'
}
</script>

<template>
  <div class="app-frame">
    <div class="student-shell">
      <header class="student-shell__topbar">
        <div class="student-shell__topbar-inner">
          <NuxtLink class="brand-mark" to="/planejar" aria-label="Ir para o planejador">
            <span class="brand-mark__symbol" aria-hidden="true">
              <BaseIcon name="utensils" />
            </span>
            <span class="brand-mark__text">
              <span class="brand-mark__eyebrow">Aluno</span>
              <span class="brand-mark__title">Planejador de Refeições</span>
            </span>
          </NuxtLink>

          <button
            class="theme-toggle"
            type="button"
            :aria-pressed="isDarkMode"
            :aria-label="`Ativar modo ${themeButtonLabel.toLowerCase()}`"
            @click="toggleTheme"
          >
            <span aria-hidden="true">{{ themeButtonLabel }}</span>
          </button>

          <button
            class="icon-button"
            type="button"
            title="Limpar planejamento"
            aria-label="Limpar planejamento"
            @click="clearPlanning"
          >
            <BaseIcon name="trash" />
          </button>
        </div>
      </header>

      <main class="student-shell__main">
        <slot :total-portions="totalPortions" />
      </main>

      <nav class="bottom-nav" aria-label="Navegação principal">
        <div class="bottom-nav__inner">
          <NuxtLink class="bottom-nav__link" to="/planejar">
            <BaseIcon name="list-check" />
            <span>Planejar</span>
          </NuxtLink>
          <NuxtLink class="bottom-nav__link" to="/receitas">
            <BaseIcon name="book-open" />
            <span>Receitas</span>
          </NuxtLink>
          <NuxtLink class="bottom-nav__link" to="/compras">
            <BaseIcon name="shopping-cart" />
            <span>Compras</span>
          </NuxtLink>
          <NuxtLink class="bottom-nav__link" to="/resultado">
            <BaseIcon name="clipboard-check" />
            <span>Resultado</span>
          </NuxtLink>
        </div>
      </nav>
    </div>
  </div>
</template>
