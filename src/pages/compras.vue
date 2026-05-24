<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import StudentShell from '../components/layout/StudentShell.vue'
import BaseIcon from '../components/ui/BaseIcon.vue'
import ShoppingCatalogSheet from '../components/shopping/ShoppingCatalogSheet.vue'
import ShoppingCategoryGroup from '../components/shopping/ShoppingCategoryGroup.vue'
import ShoppingDoneState from '../components/shopping/ShoppingDoneState.vue'
import ShoppingEmptyState from '../components/shopping/ShoppingEmptyState.vue'
import ShoppingToast from '../components/shopping/ShoppingToast.vue'
import { usePlannerState } from '../composables/usePlannerState'
import { useShoppingCatalog } from '../composables/useShoppingCatalog'
import { useShoppingList } from '../composables/useShoppingList'

type ShoppingFilter = 'all' | 'pending' | 'checked'

const { planning } = usePlannerState()
const result = computed(() => planning.value.generatedResult)
const shoppingList = useShoppingList(result)
const catalog = useShoppingCatalog()

const activeFilter = ref<ShoppingFilter>('all')
const isCatalogOpen = ref(false)
const toastMessage = ref<string | null>(null)
let toastTimer: ReturnType<typeof setTimeout> | null = null

const progressPercent = computed(() => {
  if (shoppingList.totalItems.value === 0) return 0

  return Math.round((shoppingList.checkedItems.value / shoppingList.totalItems.value) * 100)
})
const filteredItems = computed(() => {
  if (activeFilter.value === 'pending') return shoppingList.allItems.value.filter((item) => !item.checked)
  if (activeFilter.value === 'checked') return shoppingList.allItems.value.filter((item) => item.checked)

  return shoppingList.allItems.value
})
const visibleGroups = computed(() => shoppingList.getGroups(filteredItems.value))
const hasVisibleItems = computed(() => visibleGroups.value.some((group) => group.items.length > 0))
const addedCatalogIds = computed(() =>
  shoppingList.extraItems.value
    .filter((item) => item.source === 'catalog' && item.catalogItemId)
    .map((item) => item.catalogItemId as string),
)
const filterOptions = computed(() => [
  { id: 'all' as const, label: 'Todos', count: shoppingList.totalItems.value, disabled: false },
  { id: 'pending' as const, label: 'Pendentes', count: shoppingList.pendingItems.value, disabled: false },
  {
    id: 'checked' as const,
    label: 'Marcados',
    count: shoppingList.checkedItems.value,
    disabled: shoppingList.checkedItems.value === 0,
  },
])
const emptyFilterTitle = computed(() => {
  if (activeFilter.value === 'checked') return 'Nenhum item marcado ainda.'
  if (activeFilter.value === 'pending') return 'Nenhum item pendente.'

  return 'Nenhum item encontrado.'
})
const emptyFilterText = computed(() => {
  if (activeFilter.value === 'checked') return 'Troque o filtro para Todos ou marque algum item.'
  if (activeFilter.value === 'pending') return 'Todos os itens visíveis já foram marcados.'

  return 'Troque o filtro para ver a lista completa.'
})

onMounted(() => {
  catalog.loadActiveItems()
})

watch(
  () => shoppingList.checkedItems.value,
  () => {
    if (activeFilter.value === 'checked' && shoppingList.checkedItems.value === 0) {
      activeFilter.value = 'all'
    }
  },
)

function openCatalog() {
  isCatalogOpen.value = true
  if (catalog.items.value.length === 0 && !catalog.pending.value) {
    catalog.loadActiveItems()
  }
}

function toggleItem(id: string) {
  shoppingList.toggleItem(id)
}

function removeItem(id: string) {
  shoppingList.removeItem(id)
  showToast('Item removido.')
}

function addCatalogItem(
  item: Parameters<typeof shoppingList.addCatalogItem>[0],
  input: Parameters<typeof shoppingList.addCatalogItem>[1],
) {
  const added = shoppingList.addCatalogItem(item, input)
  showToast(added ? 'Item adicionado.' : 'Item já está na lista.')
}

function addCustomItem(input: Parameters<typeof shoppingList.addCustomItem>[0]) {
  const added = shoppingList.addCustomItem(input)
  if (added) showToast('Item adicionado.')
}

function clearCheckedItems() {
  shoppingList.clearCheckedItems()
  showToast('Todos os itens foram desmarcados.')
}

async function copyShoppingList() {
  const text = shoppingList.getCopyText()
  if (!text) return

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
    } else {
      copyWithFallback(text)
    }

    showToast('Lista copiada.')
  } catch {
    copyWithFallback(text)
    showToast('Lista copiada.')
  }
}

function copyWithFallback(text: string) {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', 'true')
  textarea.style.position = 'fixed'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

function setFilter(filter: ShoppingFilter) {
  const option = filterOptions.value.find((item) => item.id === filter)
  if (option?.disabled) return

  activeFilter.value = filter
}

function showToast(message: string) {
  toastMessage.value = message

  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    toastMessage.value = null
  }, 2200)
}
</script>

<template>
  <StudentShell>
    <section class="shopping-page">
      <section class="shopping-hero">
        <div class="shopping-hero__top">
          <div>
            <p class="shopping-kicker">Compras</p>
            <h1>Lista de compras</h1>
            <p>Marque os itens conforme for comprando.</p>
          </div>
          <span class="shopping-hero__icon" aria-hidden="true">
            <BaseIcon name="shopping-cart" />
          </span>
        </div>

        <div class="shopping-meta-row" aria-label="Resumo da compra">
          <span>{{ shoppingList.totalItems.value }} itens</span>
          <span>{{ shoppingList.pendingItems.value }} pendentes</span>
          <span>{{ shoppingList.checkedItems.value }} comprados</span>
        </div>

        <div class="shopping-progress">
          <div class="shopping-progress__label">
            <strong>{{ shoppingList.checkedItems.value }} de {{ shoppingList.totalItems.value }} comprados</strong>
            <span>{{ progressPercent }}%</span>
          </div>
          <div class="shopping-progress__track" aria-hidden="true">
            <span :style="{ width: `${progressPercent}%` }" />
          </div>
        </div>
      </section>

      <ShoppingDoneState v-if="shoppingList.isDone.value" />

      <section class="shopping-actions" aria-label="Ações de compras">
        <button
          class="shopping-button shopping-button--primary"
          type="button"
          :disabled="!shoppingList.hasItems.value"
          @click="copyShoppingList"
        >
          <BaseIcon name="clipboard-check" />
          Copiar lista
        </button>
        <button class="shopping-button shopping-button--secondary" type="button" @click="openCatalog">
          <BaseIcon name="shopping-bag" />
          Adicionar da Lista de Compras
        </button>
        <button
          v-if="shoppingList.checkedItems.value > 0"
          class="shopping-clear-button"
          type="button"
          @click="clearCheckedItems"
        >
          Desmarcar todos
        </button>
      </section>

      <div v-if="shoppingList.hasItems.value" class="shopping-filters" aria-label="Filtros da lista">
        <button
          v-for="filter in filterOptions"
          :key="filter.id"
          class="shopping-filter-chip"
          :class="{ 'shopping-filter-chip--active': activeFilter === filter.id }"
          type="button"
          :disabled="filter.disabled"
          @click="setFilter(filter.id)"
        >
          {{ filter.label }}
          <span>{{ filter.count }}</span>
        </button>
      </div>

      <ShoppingEmptyState
        v-if="!shoppingList.hasItems.value"
        @open-catalog="openCatalog"
      />

      <section v-else-if="hasVisibleItems" class="shopping-groups" aria-label="Itens de compra">
        <ShoppingCategoryGroup
          v-for="group in visibleGroups"
          :key="group.category"
          :group="group"
          @toggle="toggleItem"
          @remove="removeItem"
        />
      </section>

      <section v-else class="shopping-filter-empty">
        <h2>{{ emptyFilterTitle }}</h2>
        <p>{{ emptyFilterText }}</p>
      </section>
    </section>

    <ShoppingCatalogSheet
      :open="isCatalogOpen"
      :items="catalog.activeItems.value"
      :pending="catalog.pending.value"
      :error-message="catalog.errorMessage.value"
      :added-catalog-ids="addedCatalogIds"
      @close="isCatalogOpen = false"
      @add-catalog="addCatalogItem"
      @add-custom="addCustomItem"
    />

    <ShoppingToast :message="toastMessage" />
  </StudentShell>
</template>
