<script setup lang="ts">
import { computed } from 'vue'
import type { PlanningResultGroup } from '../../../types/planner'
import BaseIcon from '../../ui/BaseIcon.vue'

const props = defineProps<{
  groups: PlanningResultGroup[]
}>()

const totalPortions = computed(() =>
  props.groups.reduce((total, group) => total + group.totalPortions, 0),
)

function groupRecipeNames(group: PlanningResultGroup) {
  return group.recipes.map((recipe) => recipe.recipeName).join(', ')
}

function iconForGroup(groupSlug: string) {
  if (groupSlug === 'proteinas') return 'beef'
  if (groupSlug === 'carboidratos') return 'grain'
  if (groupSlug === 'saladas') return 'leaf'
  if (groupSlug === 'frutas') return 'apple'

  return 'package'
}
</script>

<template>
  <section class="result-section" aria-labelledby="planned-summary-title">
    <header class="result-section-heading result-section-heading--flex">
      <div>
        <p class="section-kicker">Resumo</p>
        <h2 id="planned-summary-title">O que foi planejado</h2>
      </div>
      <span class="result-summary-badge">{{ totalPortions }} porções</span>
    </header>

    <div class="planned-groups-summary">
      <article
        v-for="group in groups"
        :key="group.groupSlug"
        class="planned-group-card"
      >
        <span class="planned-group-card__icon" aria-hidden="true">
          <BaseIcon :name="iconForGroup(group.groupSlug)" />
        </span>
        <div>
          <header>
            <h3>{{ group.groupName }}</h3>
            <strong>{{ group.totalPortions }} porções</strong>
          </header>
          <p>{{ groupRecipeNames(group) }}</p>
        </div>
      </article>
    </div>

    <div class="planned-summary-actions">
      <NuxtLink class="secondary-button" to="/planejar?editar=1">
        Editar planejamento
        <BaseIcon name="edit" />
      </NuxtLink>
      <NuxtLink class="secondary-button" to="/planejar?adicionar=1">
        Adicionar grupo
        <BaseIcon name="plus" />
      </NuxtLink>
    </div>
  </section>
</template>
