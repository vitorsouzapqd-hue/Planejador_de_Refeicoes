<script setup lang="ts">
import type { RecipeStatus } from '../../types/recipe'

defineProps<{
  status: RecipeStatus
}>()

const labels: Record<RecipeStatus, string> = {
  draft: 'draft',
  published: 'published',
  archived: 'archived',
}
</script>

<template>
  <span class="admin-status" :class="`admin-status--${status}`">
    {{ labels[status] }}
  </span>
</template>
