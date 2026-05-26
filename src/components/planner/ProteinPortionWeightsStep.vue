<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { PlanningGroupSlug, PlanningGroupWithData, PlanningRecipeWithData } from '../../types/planner'
import { resolveRecipeImage } from '../../utils/recipeImages'
import BaseIcon from '../ui/BaseIcon.vue'
import StepperControl from './StepperControl.vue'

const props = defineProps<{
  groups: PlanningGroupWithData[]
}>()

const emit = defineEmits<{
  updateWeight: [groupSlug: PlanningGroupSlug, recipeId: string, value: number | null]
}>()

const failedImageIds = ref<Set<string>>(new Set())
const quickWeightsG = [80, 100, 120, 150, 170, 200, 250]
const maxWeightReadyG = 500

const totalRecipes = computed(() =>
  props.groups.reduce((total, group) => total + group.recipes.length, 0),
)

const completedRecipes = computed(() =>
  props.groups.reduce((total, group) => {
    return total + group.recipes.filter((recipe) => !getRecipeWeightError(recipe)).length
  }, 0),
)

const totalReadyWeight = computed(() =>
  props.groups.reduce((groupTotal, group) => {
    return groupTotal + group.recipes.reduce((recipeTotal, planningRecipe) => {
      const weightReadyG = getRecipeWeightReadyG(planningRecipe)
      if (!weightReadyG) return recipeTotal

      return recipeTotal + weightReadyG * getRecipePortions(planningRecipe)
    }, 0)
  }, 0),
)

watch(
  () => props.groups.flatMap((group) => group.recipes.map((recipe) => recipe.recipe.imageUrl)).join('|'),
  () => { failedImageIds.value = new Set() },
)

function getRecipePortions(planningRecipe: PlanningRecipeWithData) {
  return planningRecipe.lines.reduce((total, line) => total + (line.portions ?? 0), 0)
}

function getRecipeWeightReadyG(planningRecipe: PlanningRecipeWithData) {
  return planningRecipe.lines[0]?.weightReadyG ?? null
}

function getRecipeWeightError(planningRecipe: PlanningRecipeWithData) {
  const line = planningRecipe.lines[0]
  if (!line?.portions) return 'Distribua as porções antes de informar o peso pronto.'
  if (!line.weightReadyG) return 'Informe o peso pronto desta preparação.'
  if (!Number.isInteger(line.weightReadyG)) return 'O peso precisa ser um número inteiro.'
  if (line.weightReadyG % 5 !== 0) return 'O peso precisa ser múltiplo de 5g.'

  return null
}

function getImageSrc(planningRecipe: PlanningRecipeWithData) {
  if (failedImageIds.value.has(planningRecipe.recipe.id)) return null
  return resolveRecipeImage(planningRecipe.recipe)
}

function markImageFailed(recipeId: string) {
  failedImageIds.value = new Set([...failedImageIds.value, recipeId])
}

function updateWeightRange(groupSlug: PlanningGroupSlug, recipeId: string, event: Event) {
  const value = Number((event.target as HTMLInputElement).value)
  emit('updateWeight', groupSlug, recipeId, value > 0 ? value : null)
}

function setQuickWeight(groupSlug: PlanningGroupSlug, recipeId: string, weightReadyG: number) {
  emit('updateWeight', groupSlug, recipeId, weightReadyG)
}
</script>

<template>
  <section class="all-weights-step" aria-label="Pesos prontos das preparações">
    <div class="all-weights-summary">
      <div class="all-weights-summary__item">
        <strong>{{ completedRecipes }}/{{ totalRecipes }}</strong>
        <span>pesos informados</span>
      </div>
      <div class="all-weights-summary__item">
        <strong>{{ totalReadyWeight ? `${totalReadyWeight}g` : '—' }}</strong>
        <span>total pronto</span>
      </div>
    </div>

    <div class="weight-warning weight-warning--compact">
      <BaseIcon name="alert" />
      <div>
        <strong>Use sempre o peso pronto.</strong>
        <span>Já cozido, assado, grelhado ou refogado. Não use o peso cru da compra nesta etapa.</span>
      </div>
    </div>

    <div class="all-weights-groups">
      <section
        v-for="group in groups"
        :key="group.groupSlug"
        class="all-weights-group"
        :aria-labelledby="`weights-${group.groupSlug}`"
      >
        <header class="all-weights-group__header">
          <div>
            <p class="section-kicker">Grupo</p>
            <h2 :id="`weights-${group.groupSlug}`">{{ group.groupName }}</h2>
          </div>
          <span>{{ group.recipes.length }} preparo{{ group.recipes.length === 1 ? '' : 's' }}</span>
        </header>

        <div class="all-weights-list">
          <article
            v-for="planningRecipe in group.recipes"
            :key="planningRecipe.recipeId"
            class="all-weight-card"
            :class="{ 'all-weight-card--done': !getRecipeWeightError(planningRecipe) }"
          >
            <div class="all-weight-card__top">
              <span class="all-weight-card__media">
                <img
                  v-if="getImageSrc(planningRecipe)"
                  :src="getImageSrc(planningRecipe) ?? undefined"
                  :alt="planningRecipe.recipe.name"
                  loading="lazy"
                  @error="markImageFailed(planningRecipe.recipe.id)"
                >
                <span v-else aria-hidden="true">{{ planningRecipe.recipe.name.slice(0, 1) }}</span>
              </span>

              <span class="all-weight-card__body">
                <strong>{{ planningRecipe.recipe.name }}</strong>
                <small>{{ getRecipePortions(planningRecipe) }} porções</small>
              </span>

              <span class="all-weight-card__badge">
                {{ getRecipeWeightReadyG(planningRecipe) ? `${getRecipeWeightReadyG(planningRecipe)}g` : 'pendente' }}
              </span>
            </div>

            <div class="all-weight-card__control">
              <div class="weight-control__head">
                <span class="weight-control__label">Peso pronto por porção</span>
                <span class="weight-control__unit">gramas</span>
              </div>

              <StepperControl
                :value="getRecipeWeightReadyG(planningRecipe)"
                :min="0"
                :max="maxWeightReadyG"
                :step="5"
                suffix="g"
                :input-label="`peso pronto de ${planningRecipe.recipe.name}`"
                @update="emit('updateWeight', group.groupSlug, planningRecipe.recipeId, $event)"
              />

              <div class="all-weight-card__quick" aria-label="Pesos rapidos por porcao">
                <button
                  v-for="weight in quickWeightsG"
                  :key="weight"
                  class="all-weight-card__quick-button"
                  :class="{ 'all-weight-card__quick-button--active': getRecipeWeightReadyG(planningRecipe) === weight }"
                  type="button"
                  :aria-pressed="getRecipeWeightReadyG(planningRecipe) === weight"
                  @click="setQuickWeight(group.groupSlug, planningRecipe.recipeId, weight)"
                >
                  {{ weight }}g
                </button>
              </div>

              <input
                class="weight-control__range"
                type="range"
                min="0"
                :max="maxWeightReadyG"
                step="5"
                :value="getRecipeWeightReadyG(planningRecipe) ?? 0"
                :aria-label="`Ajustar peso pronto de ${planningRecipe.recipe.name}`"
                @input="updateWeightRange(group.groupSlug, planningRecipe.recipeId, $event)"
              >
            </div>

            <p
              v-if="getRecipeWeightError(planningRecipe)"
              class="all-weight-card__message"
            >
              {{ getRecipeWeightError(planningRecipe) }}
            </p>

            <p v-else class="all-weight-card__total">
              Total pronto: <strong>{{ (getRecipeWeightReadyG(planningRecipe) ?? 0) * getRecipePortions(planningRecipe) }}g</strong>
            </p>
          </article>
        </div>
      </section>
    </div>
  </section>
</template>
