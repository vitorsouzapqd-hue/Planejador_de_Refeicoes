<script setup lang="ts">
import type { RecipeStatus } from '../../types/recipe'

defineProps<{
  status: RecipeStatus
}>()

const labels: Record<RecipeStatus, string> = {
  draft: 'Rascunho',
  published: 'Publicada',
  archived: 'Arquivada',
}
</script>

<template>
  <span class="admin-status" :class="`admin-status--${status}`">
    {{ labels[status] }}
  </span>
</template>
