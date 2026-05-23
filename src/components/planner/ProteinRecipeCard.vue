<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { Recipe } from '../../types/recipe'
import { resolveRecipeImage } from '../../utils/recipeImages'
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

const imageSrc = computed(() => {
  if (imageFailed.value) return null

  return resolveRecipeImage(props.recipe)
})

const ingredientsPreview = computed(() => {
  const names = props.recipe.ingredients
    .filter((ingredient) => ingredient.ingredientRole === 'main' || ingredient.ingredientRole === 'complement')
    .slice(0, 3)
    .map((ingredient) => ingredient.displayName ?? ingredient.name)

  return names.length ? names.join(', ') : null
})

const planningHint = computed(() => {
  if (props.recipe.baseYieldNote) return props.recipe.baseYieldNote
  if (ingredientsPreview.value) return `Base: ${ingredientsPreview.value}.`

  return null
})

watch(
  () => props.recipe.id,
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
    peixe: 'Peixe',
    outros: 'Outros',
    arroz: 'Arroz',
    batata: 'Batata',
    pure: 'Purê',
    massa: 'Massa',
    feijao: 'Feijão',
    mandioca: 'Mandioca',
    legumes: 'Legumes',
    crua: 'Crua',
    cozida: 'Cozida',
  }

  return labels[type] ?? type
}
</script>

<template>
  <article class="protein-recipe-card" :class="{ 'protein-recipe-card--selected': selected }">
    <button
      class="protein-recipe-card__button"
      type="button"
      :aria-pressed="selected"
      @click="$emit('toggle', recipe.id)"
    >
      <span class="protein-recipe-card__image-wrap">
        <img
          v-if="imageSrc"
          class="protein-recipe-card__image"
          :src="imageSrc"
          :alt="recipe.name"
          loading="lazy"
          @error="imageFailed = true"
        >
        <span v-else class="protein-recipe-card__image-placeholder" aria-hidden="true">
          {{ recipe.name.slice(0, 1) }}
        </span>
        <span class="protein-recipe-card__meta">{{ formatType(recipe.type) }}</span>
        <span class="protein-recipe-card__check" aria-hidden="true">
          <BaseIcon :name="selected ? 'check-circle' : 'plus'" />
        </span>
      </span>

      <span class="protein-recipe-card__content">
        <span v-if="selected" class="protein-recipe-card__selected-copy">
          Selecionada
        </span>
        <span class="protein-recipe-card__title">{{ recipe.name }}</span>
        <span v-if="planningHint" class="protein-recipe-card__teaser">
          {{ planningHint }}
        </span>

        <span class="protein-recipe-card__status" aria-label="Atributos da preparação">
          <RecipeAttributeBars label="Custo" :value="recipe.costLevel" tone="lower" />
          <RecipeAttributeBars label="Tempo" :value="recipe.timeLevel" tone="lower" />
          <RecipeAttributeBars label="Trabalho" :value="recipe.workLevel" tone="lower" />
          <RecipeAttributeBars label="Praticidade" :value="recipe.practicalityLevel ?? recipe.versatilityLevel" />
        </span>
      </span>
    </button>

    <details class="protein-recipe-card__details">
      <summary>Ingredientes e observações</summary>
      <div class="protein-recipe-card__extra">
        <p v-if="ingredientsPreview">
          Ingredientes principais: {{ ingredientsPreview }}.
        </p>
        <p v-if="recipe.shortDescription">
          {{ recipe.shortDescription }}
        </p>
        <p v-if="recipe.baseYieldNote">
          {{ recipe.baseYieldNote }}
        </p>
        <p v-if="recipe.storageInstructions">
          {{ recipe.storageInstructions }}
        </p>
        <p v-if="recipe.nutrition.nutritionNotes">
          {{ recipe.nutrition.nutritionNotes }}
        </p>
      </div>
    </details>
  </article>
</template>
