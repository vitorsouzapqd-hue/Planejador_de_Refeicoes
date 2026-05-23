<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { PlanningRecipeWithData } from '../../types/planner'
import { resolveRecipeImage } from '../../utils/recipeImages'
import BaseIcon from '../ui/BaseIcon.vue'
import StepperControl from './StepperControl.vue'

const props = defineProps<{
  recipes: PlanningRecipeWithData[]
  totalPortions: number
  distributedPortions: number
  groupLabel: string
}>()

const emit = defineEmits<{
  updatePortions: [recipeId: string, value: number | null]
}>()

const failedImageIds = ref<Set<string>>(new Set())

const remainingPortions = computed(() => props.totalPortions - props.distributedPortions)

watch(
  () => props.recipes.map((planningRecipe) => planningRecipe.recipe.imageUrl).join('|'),
  () => {
    failedImageIds.value = new Set()
  },
)

function getRecipePortions(planningRecipe: PlanningRecipeWithData) {
  return planningRecipe.lines.reduce((total, line) => total + (line.portions ?? 0), 0)
}

function getImageSrc(planningRecipe: PlanningRecipeWithData) {
  if (failedImageIds.value.has(planningRecipe.recipe.id)) return null

  return resolveRecipeImage(planningRecipe.recipe)
}

function markImageFailed(recipeId: string) {
  failedImageIds.value = new Set([...failedImageIds.value, recipeId])
}
</script>

<template>
  <section class="distribution-step" aria-label="Distribuição de porções">
    <div class="distribution-counter" :class="{ 'distribution-counter--done': remainingPortions === 0 }">
      <BaseIcon :name="remainingPortions === 0 ? 'check-circle' : 'list-check'" />
      <span>
        <strong>{{ distributedPortions }} de {{ totalPortions }} porções distribuídas</strong>
        <small v-if="remainingPortions > 0">Ainda faltam {{ remainingPortions }} porções para distribuir.</small>
        <small v-else-if="remainingPortions < 0">Você distribuiu {{ Math.abs(remainingPortions) }} porções a mais.</small>
        <small v-else>Distribuição fechada.</small>
      </span>
    </div>

    <div class="distribution-list">
      <article
        v-for="planningRecipe in recipes"
        :key="planningRecipe.recipeId"
        class="distribution-card distribution-card--stepper"
      >
        <span class="distribution-card__media">
          <img
            v-if="getImageSrc(planningRecipe)"
            :src="getImageSrc(planningRecipe) ?? undefined"
            :alt="planningRecipe.recipe.name"
            loading="lazy"
            @error="markImageFailed(planningRecipe.recipe.id)"
          >
          <span v-else aria-hidden="true">{{ planningRecipe.recipe.name.slice(0, 1) }}</span>
        </span>

        <span class="distribution-card__body">
          <strong>{{ planningRecipe.recipe.name }}</strong>
          <label>Porções de {{ groupLabel }}</label>
        </span>

        <StepperControl
          :value="getRecipePortions(planningRecipe) || null"
          :min="0"
          :max="30"
          :step="1"
          input-label="porções"
          @update="emit('updatePortions', planningRecipe.recipeId, $event)"
        />
      </article>
    </div>
  </section>
</template>
