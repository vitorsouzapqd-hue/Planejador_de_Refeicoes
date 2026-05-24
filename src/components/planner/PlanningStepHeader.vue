<script setup lang="ts">
defineProps<{
  kicker?: string
  title: string
  text?: string
  heroStyle?: boolean
}>()
</script>

<template>
  <header class="flow-step-header" :class="{ 'flow-step-header--hero': heroStyle }">
    <p v-if="kicker" class="flow-step-header__kicker">{{ kicker }}</p>
    <h1>{{ title }}</h1>
    <p v-if="text">{{ text }}</p>
    <slot />
  </header>
</template>
