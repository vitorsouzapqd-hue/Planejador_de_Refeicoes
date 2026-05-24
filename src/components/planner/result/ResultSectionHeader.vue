<script setup lang="ts">
defineProps<{
  kicker: string
  title: string
  text?: string
}>()
</script>

<template>
  <header class="result-section-heading">
    <p class="section-kicker">{{ kicker }}</p>
    <h2>{{ title }}</h2>
    <p v-if="text">{{ text }}</p>
  </header>
</template>
