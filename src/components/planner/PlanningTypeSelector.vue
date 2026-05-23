<script setup lang="ts">
import { planningGroups } from '../../data/planningGroups'
import PlanningTypeCard from './PlanningTypeCard.vue'

defineProps<{
  selectedIds: string[]
}>()

const emit = defineEmits<{
  toggle: [typeId: string]
}>()
</script>

<template>
  <div class="planning-type-grid">
    <PlanningTypeCard
      v-for="type in planningGroups"
      :key="type.id"
      :title="type.name"
      :description="type.description"
      :status="type.status"
      :icon="type.icon"
      :selected="selectedIds.includes(type.id)"
      @select="emit('toggle', type.id)"
    />
  </div>
</template>
