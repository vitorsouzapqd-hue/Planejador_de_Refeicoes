<script setup lang="ts">
import type { PlanningGroupWithData } from '../../types/planner'
import { calculateGroupTotalPortions, calculateReadyWeight } from '../../services/planningCalculator'
import { resolveRecipeImage } from '../../utils/recipeImages'
import BaseIcon from '../ui/BaseIcon.vue'

defineProps<{
  groups: PlanningGroupWithData[]
  totalPortions: number
}>()
</script>

<template>
  <section class="guided-review guided-review--visual">
    <div
      v-for="group in groups"
      :key="group.groupSlug"
      class="review-group"
    >
      <header class="review-group__header">
        <h2>{{ group.groupName }}</h2>
        <span>{{ calculateGroupTotalPortions(group) }} porções</span>
      </header>

      <article
        v-for="planningRecipe in group.recipes"
        :key="planningRecipe.recipeId"
        class="review-item"
      >
        <span class="review-item__media">
          <img
            v-if="resolveRecipeImage(planningRecipe.recipe)"
            :src="resolveRecipeImage(planningRecipe.recipe) ?? undefined"
            :alt="planningRecipe.recipe.name"
            loading="lazy"
          >
          <span v-else aria-hidden="true">{{ planningRecipe.recipe.name.slice(0, 1) }}</span>
        </span>

        <span class="review-item__body">
          <strong>{{ planningRecipe.recipe.name }}</strong>
          <span
            v-for="(line, index) in planningRecipe.lines"
            :key="index"
          >
            {{ line.portions }} porções de {{ line.weightReadyG }}g
          </span>
          <small>Total pronto: {{ calculateReadyWeight(planningRecipe.lines) }}g</small>
        </span>
      </article>
    </div>

    <p class="guided-review__total">
      Total geral: {{ totalPortions }} porções planejadas
    </p>

    <p class="guided-review__notice">
      <BaseIcon name="alert" />
      <span>Siga as receitas como estão. Alterar óleo, creme, queijo, molhos ou ingredientes extras muda o resultado.</span>
    </p>
  </section>
</template>
