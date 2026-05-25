<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { PlanningRecipe } from '../../types/planner'
import type { Recipe } from '../../types/recipe'
import { resolveRecipeImage } from '../../utils/recipeImages'
import BaseIcon from '../ui/BaseIcon.vue'
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

const totalWeight = computed(() =>
  weightReadyG.value ? totalPortions.value * weightReadyG.value : null,
)

const presets = [25, 50, 100, 150]
const maxWeightReadyG = 1000

watch(
  () => props.recipe.id,
  () => {
    imageFailed.value = false
  },
)

function setPreset(value: number) {
  emit('updateWeight', props.recipe.id, value)
}

function updateWeightRange(event: Event) {
  const value = Number((event.target as HTMLInputElement).value)
  emit('updateWeight', props.recipe.id, value > 0 ? value : null)
}
</script>

<template>
  <div class="weight-step">
    <div class="weight-step-head">
      <span class="weight-step-head__index">Preparação {{ recipeIndex + 1 }} de {{ totalRecipes }}</span>
      <div class="weight-step-head__row">
        <span class="weight-step-head__label">Preencha o peso</span>
        <span class="weight-step-head__sub">porção pronta</span>
      </div>
    </div>

    <article class="weight-recipe-card">
      <div class="weight-recipe-card__media">
        <img
          v-if="imageSrc"
          :src="imageSrc"
          :alt="recipe.name"
          loading="lazy"
          @error="imageFailed = true"
        >
        <span v-else aria-hidden="true">{{ recipe.name.slice(0, 1) }}</span>
      </div>
      <div class="weight-recipe-card__info">
        <span class="weight-recipe-card__badge">Peso pronto</span>
        <h2>{{ recipe.name }}</h2>
        <p>{{ totalPortions }} porções distribuídas para este preparo.</p>
      </div>
    </article>

    <div class="weight-control">
      <div class="weight-control__head">
        <span class="weight-control__label">Peso de cada porção pronta</span>
        <span class="weight-control__unit">gramas</span>
      </div>
      <p class="weight-control__help">Use o peso que aparece no app de dieta para este alimento.</p>

      <StepperControl
        :value="weightReadyG"
        :min="0"
        :max="1000"
        :step="5"
        suffix="g"
        input-label="peso em gramas"
        @update="emit('updateWeight', recipe.id, $event)"
      />

      <input
        class="weight-control__range"
        type="range"
        min="0"
        :max="maxWeightReadyG"
        step="5"
        :value="weightReadyG ?? 0"
        aria-label="Ajustar peso pronto em gramas"
        @input="updateWeightRange"
      >

      <div class="weight-presets">
        <button
          v-for="preset in presets"
          :key="preset"
          class="weight-preset-btn"
          :class="{ 'weight-preset-btn--active': weightReadyG === preset }"
          type="button"
          @click="setPreset(preset)"
        >
          {{ preset }}g
        </button>
      </div>
    </div>

    <div class="weight-warning">
      <BaseIcon name="alert" />
      <div>
        <strong>Use sempre o peso pronto.</strong>
        <span>Já cozido, assado, grelhado ou refogado. Não use o peso cru da compra nesta etapa.</span>
      </div>
    </div>

    <div v-if="weightReadyG" class="weight-preview">
      <div class="weight-preview__item">
        <strong>{{ weightReadyG }}g</strong>
        <span>Por porção</span>
      </div>
      <div class="weight-preview__item weight-preview__item--highlight">
        <strong>{{ totalWeight }}g</strong>
        <span>Total pronto</span>
      </div>
    </div>

    <div class="weight-info">
      <BaseIcon name="clipboard-check" />
      <div>
        <strong>Por que isso importa?</strong>
        <p>O planejamento transforma o peso da sua dieta em quantidade total de preparo. Assim você sabe quanto cozinhar e quanto separar depois.</p>
      </div>
    </div>

    <p v-if="validationMessage" class="flow-inline-message">
      {{ validationMessage }}
    </p>
  </div>
</template>
