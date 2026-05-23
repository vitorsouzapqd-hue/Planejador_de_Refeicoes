<script setup lang="ts">
import BaseIcon from '../ui/BaseIcon.vue'

const props = withDefaults(defineProps<{
  value: number | null
  min?: number
  max?: number
  step?: number
  suffix?: string
  inputLabel: string
}>(), {
  min: 0,
  max: 999,
  step: 1,
  suffix: '',
})

const emit = defineEmits<{
  update: [value: number | null]
}>()

function clamp(value: number) {
  return Math.min(props.max, Math.max(props.min, value))
}

function change(delta: number) {
  emit('update', clamp((props.value ?? props.min) + delta))
}

function updateFromInput(value: string) {
  const sanitizedValue = value.replace(/\D/g, '')
  if (!sanitizedValue) {
    emit('update', null)
    return
  }

  const numericValue = Number(sanitizedValue)
  const steppedValue = Math.round(numericValue / props.step) * props.step

  emit('update', clamp(steppedValue))
}
</script>

<template>
  <div class="stepper-control">
    <button
      class="stepper-control__button"
      type="button"
      :disabled="(value ?? min) <= min"
      :aria-label="`Reduzir ${inputLabel}`"
      @click="change(-step)"
    >
      <BaseIcon name="minus" />
    </button>

    <label class="stepper-control__value">
      <span class="sr-only">{{ inputLabel }}</span>
      <input
        :value="value ?? ''"
        type="text"
        inputmode="numeric"
        autocomplete="off"
        placeholder="0"
        @input="updateFromInput(($event.target as HTMLInputElement).value)"
      >
      <span v-if="suffix">{{ suffix }}</span>
    </label>

    <button
      class="stepper-control__button"
      type="button"
      :disabled="(value ?? min) >= max"
      :aria-label="`Aumentar ${inputLabel}`"
      @click="change(step)"
    >
      <BaseIcon name="plus" />
    </button>
  </div>
</template>
