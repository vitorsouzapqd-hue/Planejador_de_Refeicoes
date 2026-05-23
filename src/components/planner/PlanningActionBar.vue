<script setup lang="ts">
import BaseIcon from '../ui/BaseIcon.vue'

defineProps<{
  primaryLabel: string
  primaryDisabled?: boolean
  secondaryLabel?: string
  hint?: string | null
  meta?: string | null
  ready?: boolean
}>()

defineEmits<{
  primary: []
  secondary: []
}>()
</script>

<template>
  <div class="flow-action-bar">
    <div class="flow-action-bar__inner">
      <div class="flow-action-bar__copy">
        <p v-if="meta">{{ meta }}</p>
        <span v-if="hint" :class="{ 'flow-action-bar__hint--error': primaryDisabled }">
          {{ hint }}
        </span>
      </div>

      <div class="flow-action-bar__buttons">
        <button
          v-if="secondaryLabel"
          class="secondary-button"
          type="button"
          @click="$emit('secondary')"
        >
          <BaseIcon name="arrow-left" />
          {{ secondaryLabel }}
        </button>

        <button
          class="primary-button"
          type="button"
          :class="{ 'primary-button--ready': ready }"
          :disabled="primaryDisabled"
          @click="$emit('primary')"
        >
          {{ primaryLabel }}
          <BaseIcon name="arrow-right" />
        </button>
      </div>
    </div>
  </div>
</template>
