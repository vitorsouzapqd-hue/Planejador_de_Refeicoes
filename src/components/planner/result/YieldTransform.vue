<script setup lang="ts">
defineProps<{
  stages: Array<{
    label: string
    quantityG: number
  }>
}>()

function formatQuantity(quantity: number) {
  if (quantity >= 1000) return `${formatDecimal(quantity / 1000)}kg`

  return `${formatDecimal(quantity)}g`
}

function formatDecimal(value: number) {
  if (Number.isInteger(value)) return String(value)

  return new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 1,
  }).format(value)
}
</script>

<template>
  <div class="yield-transform" aria-label="Compra e rendimento estimados">
    <template v-for="(stage, index) in stages" :key="stage.label">
      <span class="yield-transform__stage">
        <strong>{{ formatQuantity(stage.quantityG) }}</strong>
        <small>{{ stage.label }}</small>
      </span>
      <i v-if="index < stages.length - 1" aria-hidden="true">→</i>
    </template>
  </div>
</template>
