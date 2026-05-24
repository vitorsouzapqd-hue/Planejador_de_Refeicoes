<script setup lang="ts">
defineProps<{
  message: string | null
}>()
</script>

<template>
  <Transition name="shopping-toast">
    <p v-if="message" class="shopping-toast" role="status">
      {{ message }}
    </p>
  </Transition>
</template>
