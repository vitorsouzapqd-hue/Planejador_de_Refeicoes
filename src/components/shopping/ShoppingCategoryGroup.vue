<script setup lang="ts">
import { computed } from 'vue'
import type { ShoppingListGroup } from '../../types/shoppingList'
import BaseIcon from '../ui/BaseIcon.vue'
import ShoppingChecklistItem from './ShoppingChecklistItem.vue'

const props = defineProps<{
  group: ShoppingListGroup
}>()

defineEmits<{
  toggle: [id: string]
  remove: [id: string]
}>()

const checkedCount = computed(() => props.group.items.filter((item) => item.checked).length)

function iconForCategory(category: string) {
  const normalized = category
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')

  if (normalized.includes('prote')) return 'beef'
  if (normalized.includes('carbo')) return 'wheat'
  if (normalized.includes('fruta')) return 'apple'
  if (normalized.includes('veget')) return 'leaf'
  if (normalized.includes('bebida')) return 'bottle'
  if (normalized.includes('tempero') || normalized.includes('condimento')) return 'sparkle'
  if (normalized.includes('despensa') || normalized.includes('mercearia')) return 'shopping-bag'
  if (normalized.includes('latic')) return 'milk'
  if (normalized.includes('congel')) return 'snowflake'
  if (normalized.includes('util')) return 'tool'

  return 'box'
}
</script>

<template>
  <section class="shopping-group">
    <header class="shopping-group__header">
      <h2>
        <span aria-hidden="true">
          <BaseIcon :name="iconForCategory(group.category)" />
        </span>
        {{ group.category }}
      </h2>
      <strong>{{ checkedCount }}/{{ group.items.length }}</strong>
    </header>

    <div class="shopping-group__items">
      <ShoppingChecklistItem
        v-for="item in group.items"
        :key="item.id"
        :item="item"
        @toggle="$emit('toggle', $event)"
        @remove="$emit('remove', $event)"
      />
    </div>
  </section>
</template>
