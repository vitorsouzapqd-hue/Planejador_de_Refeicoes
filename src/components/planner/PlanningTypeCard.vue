<script setup lang="ts">
import BaseIcon from '../ui/BaseIcon.vue'

defineProps<{
  title: string
  description: string
  status: 'available' | 'coming_soon'
  icon: string
  selected?: boolean
}>()

defineEmits<{
  select: []
}>()
</script>

<template>
  <button
    class="planning-type-card"
    :class="{
      'planning-type-card--soon': status === 'coming_soon',
      'planning-type-card--selected': selected,
    }"
    type="button"
    :aria-pressed="selected"
    @click="$emit('select')"
  >
    <span class="planning-type-card__symbol" aria-hidden="true">
      <BaseIcon :name="icon" />
    </span>
    <span class="planning-type-card__body">
      <span class="planning-type-card__title">{{ title }}</span>
      <span class="planning-type-card__description">{{ description }}</span>
    </span>
    <span class="planning-type-card__status">
      {{ status === 'available' ? (selected ? 'selecionado' : 'escolher') : 'em breve' }}
    </span>
  </button>
</template>
