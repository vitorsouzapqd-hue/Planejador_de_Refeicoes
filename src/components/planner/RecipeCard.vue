<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Recipe } from '../../types/recipe'
import BaseIcon from '../ui/BaseIcon.vue'
import RecipeAttributeBars from './RecipeAttributeBars.vue'

const props = defineProps<{
  recipe: Recipe
  selected: boolean
}>()

defineEmits<{
  toggle: [recipeId: string]
}>()

const imageFailed = ref(false)

watch(
  () => props.recipe.imageUrl,
  () => {
    imageFailed.value = false
  },
)

function formatType(type: string | null) {
  if (!type) return 'Proteína'

  const labels: Record<string, string> = {
    frango: 'Frango',
    carne: 'Carne',
    suino: 'Suíno',
  }

  return labels[type] ?? type
}
</script>

<template>
  <article class="recipe-card" :class="{ 'recipe-card--selected': selected }">
    <button class="recipe-card__button" type="button" @click="$emit('toggle', recipe.id)">
      <span class="recipe-card__image-wrap">
        <img
          v-if="recipe.imageUrl && !imageFailed"
          class="recipe-card__image"
          :src="recipe.imageUrl ?? undefined"
          :alt="recipe.name"
          loading="lazy"
          @error="imageFailed = true"
        >
        <span v-else class="recipe-card__image-placeholder" aria-hidden="true">
          {{ recipe.name.slice(0, 1) }}
        </span>
        <span class="recipe-card__selected-mark" aria-hidden="true">
          <BaseIcon :name="selected ? 'check-circle' : 'plus'" />
        </span>
      </span>

      <span class="recipe-card__content">
        <span class="recipe-card__meta">{{ formatType(recipe.type) }}</span>
        <span class="recipe-card__title">{{ recipe.name }}</span>

        <span class="recipe-card__attributes">
          <RecipeAttributeBars label="Custo" :value="recipe.costLevel" tone="lower" />
          <RecipeAttributeBars label="Tempo de Preparo" :value="recipe.timeLevel" tone="lower" />
          <RecipeAttributeBars label="Dificuldade" :value="recipe.workLevel" tone="lower" />
          <RecipeAttributeBars label="Versatilidade" :value="recipe.practicalityLevel ?? recipe.versatilityLevel" />
        </span>
      </span>
    </button>
  </article>
</template>
