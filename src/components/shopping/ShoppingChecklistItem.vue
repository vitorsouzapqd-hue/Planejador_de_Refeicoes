<script setup lang="ts">
import type { ShoppingListUiItem } from '../../types/shoppingList'
import BaseIcon from '../ui/BaseIcon.vue'

defineProps<{
  item: ShoppingListUiItem
}>()

defineEmits<{
  toggle: [id: string]
  remove: [id: string]
}>()
</script>

<template>
  <div
    class="shopping-item"
    :class="{ 'shopping-item--checked': item.checked }"
  >
    <button class="shopping-item__main" type="button" @click="$emit('toggle', item.id)">
      <span class="shopping-item__checkbox" aria-hidden="true">
        <BaseIcon v-if="item.checked" name="check" />
      </span>
      <span class="shopping-item__content">
        <strong>{{ item.quantityText ? `${item.quantityText} de ${item.name}` : item.name }}</strong>
        <small v-if="item.noteText">{{ item.noteText }}</small>
      </span>
    </button>

    <button
      v-if="item.isRemovable"
      class="shopping-item__remove"
      type="button"
      aria-label="Remover item"
      @click="$emit('remove', item.id)"
    >
      <BaseIcon name="x" />
    </button>
  </div>
</template>
