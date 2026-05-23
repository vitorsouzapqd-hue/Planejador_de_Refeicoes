<script setup lang="ts">
defineProps<{
  kicker?: string
  title: string
  text?: string
}>()
</script>

<template>
  <header class="flow-step-header">
    <p v-if="kicker" class="flow-step-header__kicker">{{ kicker }}</p>
    <h1>{{ title }}</h1>
    <p v-if="text">{{ text }}</p>
  </header>
</template>
