<script setup lang="ts">
defineProps<{
  totalPortions: number
  totalGroups: number
  totalShoppingItems: number
  totalPreps: number
}>()
</script>

<template>
  <div class="result-metric-chips" aria-label="Indicadores do planejamento">
    <span><strong>{{ totalPortions }}</strong> porções</span>
    <span><strong>{{ totalGroups }}</strong> grupo{{ totalGroups === 1 ? '' : 's' }}</span>
    <span><strong>{{ totalPreps }}</strong> preparo{{ totalPreps === 1 ? '' : 's' }}</span>
    <span><strong>{{ totalShoppingItems }}</strong> gerados</span>
  </div>
</template>
