<script setup lang="ts">
import type { ShoppingListCategory } from '../../../types/planner'
import BaseIcon from '../../ui/BaseIcon.vue'

defineProps<{
  categories: ShoppingListCategory[]
  totalItems: number
}>()

function iconForShoppingCategory(category: string) {
  const normalizedCategory = normalize(category)

  if (normalizedCategory.includes('prote')) return 'beef'
  if (normalizedCategory.includes('carbo')) return 'grain'
  if (normalizedCategory.includes('fruta')) return 'apple'
  if (normalizedCategory.includes('veget')) return 'leaf'
  if (normalizedCategory.includes('bebida')) return 'bottle'
  if (normalizedCategory.includes('tempero')) return 'seasoning'

  return 'package'
}

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .trim()
}
</script>

<template>
  <section class="result-section result-preview-panel" aria-labelledby="shopping-preview-title">
    <header class="result-preview-panel__header">
      <div>
        <p class="section-kicker">Compras</p>
        <h2 id="shopping-preview-title">Lista de compras</h2>
        <p>{{ totalItems }} item{{ totalItems === 1 ? '' : 's' }} organizado{{ totalItems === 1 ? '' : 's' }}</p>
      </div>

      <NuxtLink class="secondary-button" to="/compras">
        Abrir checklist
        <BaseIcon name="shopping-cart" />
      </NuxtLink>
    </header>

    <div class="shopping-preview-list">
      <article
        v-for="category in categories"
        :key="category.category"
        class="shopping-preview-row"
      >
        <span aria-hidden="true">
          <BaseIcon :name="iconForShoppingCategory(category.category)" />
        </span>
        <strong>{{ category.category }}</strong>
        <small>{{ category.items.length }} item{{ category.items.length === 1 ? '' : 's' }}</small>
      </article>
    </div>
  </section>
</template>
