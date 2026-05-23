<script setup lang="ts">
type ResultTab = 'summary' | 'shopping' | 'preparation' | 'portioning'

defineProps<{
  tabs: Array<{ id: ResultTab; label: string }>
  activeTab: ResultTab
}>()

defineEmits<{
  select: [tab: ResultTab]
}>()
</script>

<template>
  <nav class="result-tabs result-tabs--guided" aria-label="Abas do resultado">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      class="pill-button"
      :class="{ 'pill-button--active': activeTab === tab.id }"
      type="button"
      @click="$emit('select', tab.id)"
    >
      {{ tab.label }}
    </button>
  </nav>
</template>
