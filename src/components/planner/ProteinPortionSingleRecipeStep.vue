<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { PlanningRecipe } from '../../types/planner'
import type { Recipe } from '../../types/recipe'
import { resolveRecipeImage } from '../../utils/recipeImages'
import StepperControl from './StepperControl.vue'

const emit = defineEmits<{
  updateWeight: [recipeId: string, value: number | null]
}>()

const imageFailed = ref(false)

const imageSrc = computed(() => {
  if (imageFailed.value) return null

  return resolveRecipeImage(props.recipe)
})

const props = defineProps<{
  recipe: Recipe
  planningRecipe: PlanningRecipe
  recipeIndex: number
  totalRecipes: number
  validationMessage?: string | null
}>()

const totalPortions = computed(() =>
  props.planningRecipe.lines.reduce((total, line) => total + (line.portions ?? 0), 0),
)

const weightReadyG = computed(() => props.planningRecipe.lines[0]?.weightReadyG ?? null)

watch(
  () => props.recipe.id,
  () => {
    imageFailed.value = false
  },
)
</script>

<template>
  <div class="single-portion-step">
    <div class="single-portion-step__eyebrow">
      Preparação {{ recipeIndex + 1 }} de {{ totalRecipes }}
    </div>

    <article class="single-portion-card single-portion-card--visual">
      <span class="single-portion-card__media">
        <img
          v-if="imageSrc"
          :src="imageSrc"
          :alt="recipe.name"
          loading="lazy"
          @error="imageFailed = true"
        >
        <span v-else aria-hidden="true">{{ recipe.name.slice(0, 1) }}</span>
      </span>

      <header class="single-portion-card__header">
        <p class="section-kicker">Peso que aparece na dieta</p>
        <h2>{{ recipe.name }}</h2>
        <p>{{ totalPortions }} porções distribuídas</p>
      </header>

      <div class="portion-weight-control">
        <span>Preencha o peso pronto que aparece no seu app de dieta.</span>
        <StepperControl
          :value="weightReadyG"
          :min="0"
          :max="1000"
          :step="5"
          suffix="g"
          input-label="peso em gramas"
          @update="emit('updateWeight', recipe.id, $event)"
        />
      </div>

      <p v-if="validationMessage" class="flow-inline-message">
        {{ validationMessage }}
      </p>

      <p v-if="weightReadyG" class="portion-line__preview">
        {{ totalPortions }} porções de {{ weightReadyG }}g. Total pronto: {{ totalPortions * weightReadyG }}g.
      </p>
    </article>
  </div>
</template>
