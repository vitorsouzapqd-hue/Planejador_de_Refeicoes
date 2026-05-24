<script setup lang="ts">
import BaseIcon from '../../ui/BaseIcon.vue'
import ResultMetricChips from './ResultMetricChips.vue'

defineProps<{
  totalPortions: number
  totalGroups: number
  totalShoppingItems: number
  totalPreps: number
}>()
</script>

<template>
  <section class="result-hero" aria-labelledby="result-title">
    <div class="result-hero__mark" aria-hidden="true">
      <BaseIcon name="clipboard-check" />
    </div>

    <div class="result-hero__content">
      <p class="section-kicker">Resultado</p>
      <h1 id="result-title">Planejamento pronto</h1>
      <p>Sua semana já está organizada. Finalize a lista do mercado com a base que o planejamento gerou e os extras que você também vai comprar.</p>
    </div>

    <ResultMetricChips
      :total-portions="totalPortions"
      :total-groups="totalGroups"
      :total-shopping-items="totalShoppingItems"
      :total-preps="totalPreps"
    />
  </section>
</template>
