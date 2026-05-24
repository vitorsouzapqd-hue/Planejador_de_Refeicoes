<script setup lang="ts">
import type { PlanningResultGroup } from '../../../types/planner'
import BaseIcon from '../../ui/BaseIcon.vue'

defineProps<{
  groups: PlanningResultGroup[]
  totalPortions: number
  copied?: boolean
}>()

defineEmits<{
  copy: []
}>()

function formatLines(lines: Array<{ portions: number; weightReadyG: number }>) {
  return lines
    .map((line) => `${line.portions} porções de ${line.weightReadyG}g`)
    .join(' + ')
}
</script>

<template>
  <section id="porcionamento" class="result-section portioning-preview" aria-labelledby="portioning-preview-title">
    <header class="result-preview-panel__header result-preview-panel__header--inline">
      <div>
        <p class="section-kicker">Porcionamento final</p>
        <h2 id="portioning-preview-title">Separe exatamente assim</h2>
        <p>Ao final do preparo, separe exatamente estas porções.</p>
      </div>

      <button class="secondary-button secondary-button--compact" type="button" @click="$emit('copy')">
        {{ copied ? 'Copiado' : 'Copiar' }}
        <BaseIcon name="clipboard-check" />
      </button>
    </header>

    <div class="portioning-group-list">
      <article
        v-for="group in groups"
        :key="group.groupSlug"
        class="portioning-group-card"
      >
        <header>
          <h3>{{ group.groupName }}</h3>
          <span>{{ group.totalPortions }} porções</span>
        </header>

        <ul>
          <li
            v-for="recipe in group.recipes"
            :key="recipe.recipeId"
          >
            <strong>{{ recipe.recipeName }}</strong>
            <span>{{ formatLines(recipe.lines) }}</span>
          </li>
        </ul>
      </article>
    </div>

    <footer class="portioning-total">
      <span>Total final</span>
      <strong>{{ totalPortions }} porções</strong>
    </footer>

    <details class="result-disclosure result-disclosure--quiet">
      <summary>Cuidados importantes</summary>
      <p>Se render menos do que o esperado, não reduza o peso das porções para fazer render. Separe as porções no peso planejado.</p>
    </details>
  </section>
</template>
