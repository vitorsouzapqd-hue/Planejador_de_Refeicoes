<script setup lang="ts">
import BaseIcon from '../ui/BaseIcon.vue'

defineEmits<{
  openCatalog: []
}>()
</script>

<template>
  <section class="shopping-empty-state">
    <span class="shopping-empty-state__icon" aria-hidden="true">
      <BaseIcon name="shopping-cart" />
    </span>
    <h2>Lista de compras vazia</h2>
    <p>Gere um planejamento ou adicione itens da Lista de Compras para montar sua lista.</p>
    <div class="shopping-empty-state__actions">
      <NuxtLink class="shopping-button shopping-button--primary" to="/planejar">
        Começar planejamento
      </NuxtLink>
      <button class="shopping-button shopping-button--secondary" type="button" @click="$emit('openCatalog')">
        Adicionar da Lista de Compras
      </button>
    </div>
  </section>
</template>
