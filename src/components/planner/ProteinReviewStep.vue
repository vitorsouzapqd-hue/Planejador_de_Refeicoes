<script setup lang="ts">
import type { PlanningGroupWithData, PlanningRecipeWithData } from '../../types/planner'
import { calculateGroupTotalPortions, calculateReadyWeight } from '../../services/planningCalculator'
import { getPlanningGroup } from '../../data/planningGroups'
import { resolveRecipeImage } from '../../utils/recipeImages'
import BaseIcon from '../ui/BaseIcon.vue'

defineProps<{
  groups: PlanningGroupWithData[]
  totalPortions: number
}>()

const emit = defineEmits<{
  editDistribution: [groupSlug: string]
  editWeight: [groupSlug: string, recipeId: string]
}>()

function getRecipePortions(recipe: PlanningRecipeWithData) {
  return recipe.lines.reduce((total, line) => total + (line.portions ?? 0), 0)
}

function getRecipeWeight(recipe: PlanningRecipeWithData) {
  return recipe.lines[0]?.weightReadyG ?? null
}

function getImageSrc(recipe: PlanningRecipeWithData) {
  return resolveRecipeImage(recipe.recipe)
}

function formatTotalWeight(grams: number): string {
  if (grams >= 1000) {
    const kg = grams / 1000
    return Number.isInteger(kg) ? `${kg}kg` : `${kg.toFixed(1)}kg`
  }

  return `${grams}g`
}
</script>

<template>
  <div class="rv-screen">
    <section class="rv-section">
      <div class="rv-section-head">
        <div>
          <p class="rv-eyebrow">Resumo</p>
          <h2 class="rv-section-title">O que será gerado</h2>
        </div>
      </div>

      <div class="rv-group-stack">
        <article
          v-for="group in groups"
          :key="group.groupSlug"
          class="rv-group-block"
        >
          <div class="rv-group-head">
            <div class="rv-group-title">
              <div class="rv-group-icon" aria-hidden="true">
                <BaseIcon :name="getPlanningGroup(group.groupSlug)?.icon ?? 'list-check'" />
              </div>
              <div class="rv-group-name">
                <strong>{{ group.groupName }}</strong>
                <span>{{ group.recipes.length }} preparo{{ group.recipes.length === 1 ? '' : 's' }} selecionado{{ group.recipes.length === 1 ? '' : 's' }}</span>
              </div>
            </div>
            <button
              class="rv-group-total"
              type="button"
              :aria-label="`Editar distribuição de ${group.groupName}`"
              @click="emit('editDistribution', group.groupSlug)"
            >
              {{ calculateGroupTotalPortions(group) }} porções
              <BaseIcon name="edit" />
            </button>
          </div>

          <div class="rv-recipe-list">
            <div
              v-for="planningRecipe in group.recipes"
              :key="planningRecipe.recipeId"
              class="rv-recipe-row"
            >
              <div class="rv-recipe-img">
                <img
                  v-if="getImageSrc(planningRecipe)"
                  :src="getImageSrc(planningRecipe) ?? undefined"
                  :alt="planningRecipe.recipe.name"
                  loading="lazy"
                >
                <span v-else class="rv-recipe-img-placeholder" aria-hidden="true">
                  {{ planningRecipe.recipe.name.slice(0, 1) }}
                </span>
              </div>
              <div class="rv-recipe-info">
                <strong>{{ planningRecipe.recipe.name }}</strong>
                <span>{{ getRecipePortions(planningRecipe) }} porções de {{ getRecipeWeight(planningRecipe) }}g</span>
                <em>Total pronto: {{ formatTotalWeight(calculateReadyWeight(planningRecipe.lines)) }}</em>
              </div>
              <button
                class="rv-recipe-edit"
                type="button"
                :aria-label="`Editar peso pronto de ${planningRecipe.recipe.name}`"
                @click="emit('editWeight', group.groupSlug, planningRecipe.recipeId)"
              >
                <BaseIcon name="edit" />
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>

    <div class="rv-warning">
      <div class="rv-warning-icon" aria-hidden="true">
        <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 9v4M12 17h.01" stroke-width="2.5" />
          <path d="M10.3 4.3 2.6 18a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 4.3a2 2 0 0 0-3.4 0Z" stroke-width="2" />
        </svg>
      </div>
      <div>
        <strong>Siga as receitas como estão.</strong>
        <span>Alterar óleo, creme, queijo, molhos ou ingredientes extras muda compras, preparo e porcionamento.</span>
      </div>
    </div>
  </div>
</template>
