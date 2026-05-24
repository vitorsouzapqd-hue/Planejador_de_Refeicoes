<script setup lang="ts">
import BaseIcon from '../../ui/BaseIcon.vue'

defineProps<{
  title: string
  text?: string
  icon: string
  to?: string
  href?: string
}>()
</script>

<template>
  <NuxtLink v-if="to" class="result-shortcut-card" :to="to">
    <span class="result-shortcut-card__icon" aria-hidden="true">
      <BaseIcon :name="icon" />
    </span>
    <span class="result-shortcut-card__content">
      <strong>{{ title }}</strong>
      <small v-if="text">{{ text }}</small>
    </span>
    <BaseIcon name="arrow-right" />
  </NuxtLink>

  <a v-else class="result-shortcut-card" :href="href">
    <span class="result-shortcut-card__icon" aria-hidden="true">
      <BaseIcon :name="icon" />
    </span>
    <span class="result-shortcut-card__content">
      <strong>{{ title }}</strong>
      <small v-if="text">{{ text }}</small>
    </span>
    <BaseIcon name="arrow-right" />
  </a>
</template>
