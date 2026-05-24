<script setup lang="ts">
import BaseIcon from '../ui/BaseIcon.vue'
</script>

<template>
  <section class="shopping-done-state" aria-live="polite">
    <span aria-hidden="true">
      <BaseIcon name="check-circle" />
    </span>
    <div>
      <h2>Compras concluídas</h2>
      <p>Todos os itens da lista foram marcados.</p>
    </div>
  </section>
</template>
