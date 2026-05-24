<script setup lang="ts">
import { computed } from 'vue'
import type { ShoppingListCategory, ShoppingListItem } from '../../../types/planner'
import BaseIcon from '../../ui/BaseIcon.vue'

const props = defineProps<{
  categories: ShoppingListCategory[]
  totalItems: number
}>()

const previewItems = computed<ShoppingListItem[]>(() => {
  const items: ShoppingListItem[] = []
  for (const category of props.categories) {
    for (const item of category.items) {
      if (items.length >= 2) return items
      items.push(item)
    }
  }
  return items
})

function formatItemQuantity(item: ShoppingListItem): string {
  if (item.packageLabel) return item.packageLabel
  if (item.quantity !== null && item.unit) {
    if (item.unit === 'g' && item.quantity >= 1000) {
      const kg = item.quantity / 1000
      return `${Number.isInteger(kg) ? kg : kg.toFixed(1)}kg`
    }
    return `${item.quantity}${item.unit}`
  }
  return '+'
}
</script>

<template>
  <section class="result-next-action" aria-label="Próxima ação">
    <div class="result-next-action__head">
      <p class="section-kicker">Próxima ação</p>
      <h2 class="result-next-action__title">Finalize sua lista de compras</h2>
      <p class="result-next-action__desc">
        O planejamento já colocou a base na lista. Agora adicione frutas, bebidas, temperos, utilidades e outros itens do mercado pelo catálogo.
      </p>
    </div>

    <ul v-if="previewItems.length" class="result-next-action__items" aria-label="Itens principais">
      <li
        v-for="item in previewItems"
        :key="item.key"
        class="result-next-action__item"
      >
        <span class="result-next-action__item-name">{{ item.displayName }}</span>
        <span class="result-next-action__item-qty">{{ formatItemQuantity(item) }}</span>
      </li>
    </ul>

    <NuxtLink
      class="result-next-action__extra"
      :class="{ 'result-next-action__extra--solo': !previewItems.length }"
      to="/compras"
    >
      <span>Adicionar extras do catálogo</span>
      <strong aria-hidden="true">+</strong>
    </NuxtLink>

    <NuxtLink class="primary-button result-next-action__cta" to="/compras">
      Abrir lista e adicionar extras
      <BaseIcon name="shopping-cart" />
    </NuxtLink>

    <div class="result-next-action__secondary">
      <a class="secondary-button" href="#preparo">
        Ver preparo
        <BaseIcon name="chef-hat" />
      </a>
      <a class="secondary-button" href="#porcionamento">
        Ver porcionamento
        <BaseIcon name="clipboard-check" />
      </a>
    </div>
  </section>
</template>
