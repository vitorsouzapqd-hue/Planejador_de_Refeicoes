<script setup lang="ts">
import { computed } from 'vue'
import BaseIcon from '../ui/BaseIcon.vue'

type Props = {
  label: string
  value: number | null
  tone?: 'lower' | 'higher'
}

const props = withDefaults(defineProps<Props>(), {
  tone: 'higher',
})

const normalizedValue = computed(() => Math.max(0, Math.min(4, props.value ?? 0)))
const iconName = computed(() => {
  const normalizedLabel = props.label
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')

  if (normalizedLabel.includes('custo')) return 'wallet'
  if (normalizedLabel.includes('tempo') || normalizedLabel.includes('velocidade')) return 'clock'
  if (normalizedLabel.includes('trabalho') || normalizedLabel.includes('dificuldade')) return 'chef-hat'
  if (normalizedLabel.includes('praticidade') || normalizedLabel.includes('versatilidade')) return 'sparkle'

  return 'gauge'
})

const accessibleLabel = computed(() => {
  if (!normalizedValue.value) return `${props.label}: sem informação`

  return `${props.label}: ${normalizedValue.value} de 4`
})
</script>

<template>
  <div class="attribute-bars" :aria-label="accessibleLabel">
    <span class="attribute-bars__icon" aria-hidden="true">
      <BaseIcon :name="iconName" />
    </span>
    <span class="attribute-bars__label">{{ label }}</span>
    <span class="attribute-bars__track" aria-hidden="true">
      <span
        v-for="index in 4"
        :key="index"
        class="attribute-bars__bar"
        :class="{
          'attribute-bars__bar--active': index <= normalizedValue,
          'attribute-bars__bar--lower': tone === 'lower' && index <= normalizedValue,
        }"
      />
    </span>
  </div>
</template>
