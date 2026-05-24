<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { PlanningRecipeWithData } from '../../types/planner'
import { resolveRecipeImage } from '../../utils/recipeImages'
import BaseIcon from '../ui/BaseIcon.vue'

const props = defineProps<{
  recipes: PlanningRecipeWithData[]
  totalPortions: number
  groupLabel: string
}>()

const emit = defineEmits<{
  updatePortions: [recipeId: string, value: number | null]
}>()

const failedImageIds = ref<Set<string>>(new Set())

const distributedPortions = computed(() =>
  props.recipes.reduce((total, r) => total + getRecipePortions(r), 0),
)
const remainingPortions = computed(() => props.totalPortions - distributedPortions.value)

const statusTitle = computed(() => {
  if (remainingPortions.value === 0) return 'Distribuição fechada.'
  if (remainingPortions.value < 0) return 'Passou do total.'
  return 'Ainda falta distribuir.'
})

const statusText = computed(() => {
  const n = Math.abs(remainingPortions.value)
  const porcoes = n === 1 ? 'porção' : 'porções'
  if (remainingPortions.value === 0) return `Você já distribuiu todas as ${props.totalPortions} porções.`
  if (remainingPortions.value < 0) return `Reduza ${n} ${porcoes} para fechar.`
  return `Distribua mais ${n} ${porcoes} para fechar o total.`
})

watch(
  () => props.recipes.map((r) => r.recipe.imageUrl).join('|'),
  () => { failedImageIds.value = new Set() },
)

function getRecipePortions(planningRecipe: PlanningRecipeWithData) {
  return planningRecipe.lines.reduce((total, line) => total + (line.portions ?? 0), 0)
}

function getSharePercent(planningRecipe: PlanningRecipeWithData) {
  if (props.totalPortions === 0) return 0
  return Math.min(100, (getRecipePortions(planningRecipe) / props.totalPortions) * 100)
}

function getImageSrc(planningRecipe: PlanningRecipeWithData) {
  if (failedImageIds.value.has(planningRecipe.recipe.id)) return null
  return resolveRecipeImage(planningRecipe.recipe)
}

function markImageFailed(recipeId: string) {
  failedImageIds.value = new Set([...failedImageIds.value, recipeId])
}

function increment(recipeId: string, current: number) {
  emit('updatePortions', recipeId, current + 1)
}

function decrement(recipeId: string, current: number) {
  const newVal = current - 1
  emit('updatePortions', recipeId, newVal > 0 ? newVal : null)
}

function updateInput(recipeId: string, event: Event) {
  const raw = (event.target as HTMLInputElement).value.replace(/\D/g, '')
  if (!raw) {
    emit('updatePortions', recipeId, null)
    return
  }
  emit('updatePortions', recipeId, Math.min(props.totalPortions * 2, Math.max(1, Number(raw))))
}

function zerar(recipeId: string) {
  emit('updatePortions', recipeId, null)
}

function metade(recipeId: string) {
  emit('updatePortions', recipeId, Math.round(props.totalPortions / 2))
}

function tudo(recipeId: string) {
  const recipe = props.recipes.find((r) => r.recipeId === recipeId)
  const current = recipe ? getRecipePortions(recipe) : 0
  const newVal = current + Math.max(0, remainingPortions.value)
  emit('updatePortions', recipeId, newVal > 0 ? newVal : null)
}
</script>

<template>
  <section class="distribution-step" aria-label="Distribuição de porções">
    <div
      class="distribution-counter"
      :class="{
        'distribution-counter--done': remainingPortions === 0,
        'distribution-counter--over': remainingPortions < 0,
      }"
    >
      <span class="distribution-counter__icon" aria-hidden="true">
        <BaseIcon :name="remainingPortions === 0 ? 'check-circle' : 'list-check'" />
      </span>
      <span>
        <strong>{{ statusTitle }}</strong>
        <small>{{ statusText }}</small>
      </span>
    </div>

    <div class="distribution-section-head">
      <div>
        <p class="section-kicker">Preparações</p>
        <h2 class="distribution-section-title">Quantidade por receita</h2>
      </div>
      <p class="distribution-section-hint">use &minus; ou +</p>
    </div>

    <div class="distribution-list">
      <article
        v-for="planningRecipe in recipes"
        :key="planningRecipe.recipeId"
        class="distribution-card"
      >
        <div class="distribution-card__top">
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

          <span
            class="distribution-card__badge"
            :class="{ 'distribution-card__badge--active': getRecipePortions(planningRecipe) > 0 }"
            aria-label="Porções atribuídas"
          >
            {{ getRecipePortions(planningRecipe) || '—' }}
          </span>
        </div>

        <div class="distribution-card__control">
          <button
            class="distribution-card__step-btn"
            type="button"
            :disabled="getRecipePortions(planningRecipe) <= 0"
            :aria-label="`Reduzir porções de ${planningRecipe.recipe.name}`"
            @click="decrement(planningRecipe.recipeId, getRecipePortions(planningRecipe))"
          >
            <BaseIcon name="minus" />
          </button>

          <div class="distribution-card__amount">
            <input
              :value="getRecipePortions(planningRecipe) || ''"
              type="text"
              inputmode="numeric"
              autocomplete="off"
              placeholder="0"
              :aria-label="`Porções de ${planningRecipe.recipe.name}`"
              @input="updateInput(planningRecipe.recipeId, $event)"
            >
            <span>porções</span>
          </div>

          <button
            class="distribution-card__step-btn"
            type="button"
            :aria-label="`Aumentar porções de ${planningRecipe.recipe.name}`"
            @click="increment(planningRecipe.recipeId, getRecipePortions(planningRecipe))"
          >
            <BaseIcon name="plus" />
          </button>
        </div>

        <div class="distribution-card__bar" aria-hidden="true">
          <div
            class="distribution-card__bar-fill"
            :style="{ width: getSharePercent(planningRecipe) + '%' }"
          />
        </div>

        <div class="distribution-card__actions">
          <button
            class="distribution-card__action-btn"
            type="button"
            @click="zerar(planningRecipe.recipeId)"
          >
            zerar
          </button>
          <button
            class="distribution-card__action-btn"
            type="button"
            @click="metade(planningRecipe.recipeId)"
          >
            metade
          </button>
          <button
            class="distribution-card__action-btn"
            type="button"
            @click="tudo(planningRecipe.recipeId)"
          >
            tudo
          </button>
        </div>
      </article>
    </div>
  </section>
</template>
