<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  current: number
  total: number
}>()

const progress = computed(() =>
  Math.min(100, Math.max(0, (props.current / props.total) * 100)),
)
</script>

<template>
  <div class="flow-progress" aria-label="Progresso do planejamento">
    <div class="flow-progress__label">Etapa {{ current }} de {{ total }}</div>
    <div class="flow-progress__track" aria-hidden="true">
      <span class="flow-progress__bar" :style="{ width: `${progress}%` }" />
    </div>
  </div>
</template>
