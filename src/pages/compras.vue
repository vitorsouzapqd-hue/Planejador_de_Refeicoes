<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import StudentShell from '../components/layout/StudentShell.vue'
import PlanningFlowShell from '../components/planner/PlanningFlowShell.vue'
import { usePlannerState } from '../composables/usePlannerState'
import { marketItems, type MarketItem } from '../data/marketItems'
import type { ShoppingListItem } from '../types/planner'
import BaseIcon from '../components/ui/BaseIcon.vue'

const { planning } = usePlannerState()
const checkedItems = ref<Set<string>>(new Set())
const copyMessage = ref<string | null>(null)
const manualStorageKey = 'meal_planner_manual_shopping_items'
const manualShoppingItems = ref<ShoppingListItem[]>([])
const isMarketModalOpen = ref(false)
const itemSearch = ref('')
const selectedMarketItemId = ref(marketItems[0]?.id ?? '')
const manualQuantity = ref<number | null>(marketItems[0]?.defaultQuantity ?? 1)
const manualUnit = ref<MarketItem['defaultUnit'] | ''>(marketItems[0]?.defaultUnit ?? 'g')
const activeMarketCategory = ref(marketItems[0]?.shoppingCategory ?? '')

const result = computed(() => planning.value.generatedResult)
const storageKey = computed(() => `meal_planner_shopping_checked:${result.value?.generatedAt ?? 'empty'}`)
const selectedMarketItem = computed(() => marketItems.find((item) => item.id === selectedMarketItemId.value) ?? null)
const marketCategories = computed(() =>
  Array.from(new Set(marketItems.map((item) => item.shoppingCategory)))
    .sort((a, b) => getShoppingCategoryOrder(a) - getShoppingCategoryOrder(b)),
)
const filteredMarketItems = computed(() => {
  const query = normalize(itemSearch.value)
  const items = marketItems.filter((item) => {
    const matchesCategory = item.shoppingCategory === activeMarketCategory.value
    const matchesSearch = !query || normalize(item.name).includes(query) || normalize(item.shoppingCategory).includes(query)

    return matchesCategory && matchesSearch
  })

  return items
})
const plannedShoppingItems = computed(() =>
  result.value?.shoppingList
    .map((category) => ({
      ...category,
      items: category.items.filter((item) => !item.isFreeSeasoning),
    }))
    .filter((category) => category.items.length > 0) ?? [],
)
const manualShoppingCategory = computed(() =>
  groupShoppingItemsByCategory(manualShoppingItems.value),
)
const visibleShoppingCategories = computed(() => plannedShoppingItems.value)
const allShoppingCategories = computed(() =>
  [...visibleShoppingCategories.value, ...manualShoppingCategory.value],
)
const hasShoppingItems = computed(() => allShoppingCategories.value.some((category) => category.items.length > 0))
const totalShoppingItems = computed(() =>
  allShoppingCategories.value.reduce((total, category) => total + category.items.length, 0),
)
const checkedShoppingCount = computed(() =>
  allShoppingCategories.value.reduce(
    (total, category) => total + category.items.filter((item) => isChecked(item.key)).length,
    0,
  ),
)
const remainingShoppingCount = computed(() => Math.max(totalShoppingItems.value - checkedShoppingCount.value, 0))
const shoppingCopyText = computed(() => generateShoppingText(allShoppingCategories.value))

onMounted(() => {
  loadCheckedItems()
  loadManualShoppingItems()
})

watch(storageKey, () => {
  loadCheckedItems()
})

watch(selectedMarketItem, (item) => {
  if (!item) return

  manualQuantity.value = item.defaultQuantity
  manualUnit.value = item.defaultUnit
})

watch(marketCategories, (categories) => {
  if (!categories.includes(activeMarketCategory.value)) {
    activeMarketCategory.value = categories[0] ?? ''
  }
})

function openMarketModal() {
  copyMessage.value = null
  itemSearch.value = ''
  isMarketModalOpen.value = true
}

function closeMarketModal() {
  isMarketModalOpen.value = false
}

function setMarketCategory(category: string) {
  activeMarketCategory.value = category
  const firstCategoryItem = marketItems.find((item) => item.shoppingCategory === category)
  if (firstCategoryItem) selectMarketItem(firstCategoryItem)
}

function selectMarketItem(item: MarketItem) {
  selectedMarketItemId.value = item.id
}

function addManualItem() {
  const item = selectedMarketItem.value
  if (!item || !manualQuantity.value || manualQuantity.value <= 0 || !manualUnit.value) return

  const shoppingItem: ShoppingListItem = {
    key: `manual|${item.id}|${Date.now()}`,
    name: item.name,
    displayName: item.name,
    shoppingCategory: item.shoppingCategory,
    ingredientRole: 'complement',
    quantity: manualQuantity.value,
    unit: manualUnit.value,
    isCritical: false,
    isFreeSeasoning: false,
    notes: null,
  }

  manualShoppingItems.value = [...manualShoppingItems.value, shoppingItem]
  saveManualShoppingItems()
  closeMarketModal()
  copyMessage.value = 'Item adicionado à lista.'
}

function removeManualItem(itemKey: string) {
  manualShoppingItems.value = manualShoppingItems.value.filter((item) => item.key !== itemKey)
  checkedItems.value.delete(itemKey)
  checkedItems.value = new Set(checkedItems.value)
  saveManualShoppingItems()
  saveCheckedItems()
}

function isManualItem(item: ShoppingListItem) {
  return item.key.startsWith('manual|')
}

function toggleItem(itemKey: string) {
  const nextItems = new Set(checkedItems.value)

  if (nextItems.has(itemKey)) {
    nextItems.delete(itemKey)
  } else {
    nextItems.add(itemKey)
  }

  checkedItems.value = nextItems
  saveCheckedItems()
}

function isChecked(itemKey: string) {
  return checkedItems.value.has(itemKey)
}

function loadCheckedItems() {
  if (typeof window === 'undefined') return

  const storedItems = window.localStorage.getItem(storageKey.value)
  try {
    checkedItems.value = new Set(storedItems ? JSON.parse(storedItems) as string[] : [])
  } catch {
    checkedItems.value = new Set()
    window.localStorage.removeItem(storageKey.value)
  }
}

function loadManualShoppingItems() {
  if (typeof window === 'undefined') return

  const storedItems = window.localStorage.getItem(manualStorageKey)
  try {
    manualShoppingItems.value = storedItems ? JSON.parse(storedItems) as ShoppingListItem[] : []
  } catch {
    manualShoppingItems.value = []
    window.localStorage.removeItem(manualStorageKey)
  }
}

function saveCheckedItems() {
  if (typeof window === 'undefined') return

  window.localStorage.setItem(storageKey.value, JSON.stringify(Array.from(checkedItems.value)))
}

function saveManualShoppingItems() {
  if (typeof window === 'undefined') return

  window.localStorage.setItem(manualStorageKey, JSON.stringify(manualShoppingItems.value))
}

function clearCheckedItems() {
  checkedItems.value = new Set()
  saveCheckedItems()
}

async function copyShoppingList() {
  if (!shoppingCopyText.value) return

  copyMessage.value = null

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(shoppingCopyText.value)
    } else {
      copyWithFallback(shoppingCopyText.value)
    }

    copyMessage.value = 'Lista de compras copiada.'
  } catch {
    copyWithFallback(shoppingCopyText.value)
    copyMessage.value = 'Lista de compras copiada.'
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

function formatShoppingItem(item: ShoppingListItem) {
  if (item.quantity === null) return item.displayName

  const suffix = item.isCritical ? ' (não aumentar)' : ''

  if (item.packageCount && item.packageSizeG && item.packageLabel && item.unit === 'g') {
    return `${formatQuantity(item.quantity, item.unit)} de ${item.displayName} (${item.packageCount} ${pluralizePackageLabel(item.packageLabel, item.packageCount)} de ${formatQuantity(item.packageSizeG, 'g')})${suffix}`
  }

  return `${formatQuantity(item.quantity, item.unit)} de ${item.displayName}${suffix}`
}

function formatQuantity(quantity: number, unit: string | null) {
  if (unit === 'g' && quantity >= 1000) return `${formatDecimal(quantity / 1000)}kg`
  if (unit === 'g') return `${formatDecimal(quantity)}g`
  if (!unit) return formatDecimal(quantity)

  return `${formatDecimal(quantity)} ${unit}`
}

function formatDecimal(value: number) {
  if (Number.isInteger(value)) return String(value)

  return new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 1,
  }).format(value)
}

function pluralizePackageLabel(label: string, count: number) {
  if (count === 1) return label
  if (label.endsWith('s')) return label

  return `${label}s`
}

function generateShoppingText(categories: Array<{ category: string; items: ShoppingListItem[] }>) {
  const lines: string[] = ['Lista de compras', '']

  for (const category of categories) {
    if (category.items.length === 0) continue

    lines.push(`${category.category}:`)
    for (const item of category.items) {
      lines.push(`- ${formatShoppingItem(item)}`)
    }
    lines.push('')
  }

  return lines.join('\n').trim()
}

function groupShoppingItemsByCategory(items: ShoppingListItem[]) {
  const categories = new Map<string, ShoppingListItem[]>()

  for (const item of items) {
    const categoryItems = categories.get(item.shoppingCategory) ?? []
    categoryItems.push(item)
    categories.set(item.shoppingCategory, categoryItems)
  }

  return Array.from(categories.entries())
    .map(([category, categoryItems]) => ({
      category,
      items: categoryItems,
    }))
    .sort((a, b) => getShoppingCategoryOrder(a.category) - getShoppingCategoryOrder(b.category))
}

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .trim()
}

function getShoppingCategoryOrder(category: string) {
  const order = ['Proteínas', 'Carboidratos', 'Frutas', 'Vegetais', 'Laticínios', 'Padaria', 'Temperos', 'Despensa', 'Bebidas', 'Outros', 'Adicionados Manualmente']
  const index = order.indexOf(category)

  return index === -1 ? order.length : index
}

function iconForShoppingCategory(category: string) {
  const normalizedCategory = normalize(category)

  if (normalizedCategory.includes('prote')) return 'beef'
  if (normalizedCategory.includes('carbo')) return 'grain'
  if (normalizedCategory.includes('fruta')) return 'apple'
  if (normalizedCategory.includes('veget')) return 'leaf'
  if (normalizedCategory.includes('bebida')) return 'bottle'
  if (normalizedCategory.includes('tempero')) return 'seasoning'
  if (normalizedCategory.includes('manual')) return 'plus'

  return 'package'
}
</script>

<template>
  <StudentShell>
    <PlanningFlowShell
      kicker="Compras"
      title="Lista de compras"
      text="Marque os itens conforme for comprando."
    >
      <section v-if="hasShoppingItems" class="shopping-summary" aria-label="Resumo da lista">
        <div class="shopping-summary__item">
          <span>Total</span>
          <strong>{{ totalShoppingItems }}</strong>
        </div>
        <div class="shopping-summary__item">
          <span>Pendentes</span>
          <strong>{{ remainingShoppingCount }}</strong>
        </div>
        <div class="shopping-summary__item">
          <span>Marcados</span>
          <strong>{{ checkedShoppingCount }}</strong>
        </div>
      </section>

      <section class="shopping-add-card" aria-label="Adicionar item manualmente">
        <div>
          <div>
            <p class="section-kicker">Itens avulsos</p>
            <h2>Adicionar manualmente</h2>
          </div>
          <p>Inclua algo extra que você também vai comprar.</p>
        </div>

        <button class="primary-button" type="button" @click="openMarketModal">
          Adicionar item
          <BaseIcon name="plus" />
        </button>
      </section>

      <section v-if="!hasShoppingItems" class="empty-state empty-state--soft empty-state--icon">
        <BaseIcon name="shopping-cart" />
        <p>Nenhum planejamento gerado ainda.</p>
        <NuxtLink class="primary-button" to="/planejar">Planejar refeições</NuxtLink>
      </section>

      <section v-else class="shopping-checklist" aria-label="Checklist de compras">
        <header class="shopping-checklist__toolbar">
          <div>
            <p class="section-kicker">Checklist</p>
            <h2>Comprar por categoria</h2>
          </div>
          <span>{{ remainingShoppingCount }} pendente{{ remainingShoppingCount === 1 ? '' : 's' }}</span>
        </header>

        <div class="shopping-checklist__actions">
          <button class="primary-button" type="button" @click="copyShoppingList">
            Copiar lista
            <BaseIcon name="clipboard-check" />
          </button>
          <button class="secondary-button" type="button" @click="clearCheckedItems">
            Desmarcar todos
          </button>
        </div>

        <div v-if="visibleShoppingCategories.length" class="shopping-checklist__groups">
          <div
            v-for="category in visibleShoppingCategories"
            :key="category.category"
            class="shopping-checklist__category"
          >
            <header class="shopping-checklist__category-header">
              <h2>
                <BaseIcon :name="iconForShoppingCategory(category.category)" />
                {{ category.category }}
              </h2>
              <span>{{ category.items.length }} item{{ category.items.length === 1 ? '' : 's' }}</span>
            </header>

            <div
              v-for="item in category.items"
              :key="item.key"
              class="shopping-checklist__item"
              :class="{ 'shopping-checklist__item--checked': isChecked(item.key) }"
            >
              <label class="shopping-checklist__check">
                <input
                  type="checkbox"
                  :checked="isChecked(item.key)"
                  @change="toggleItem(item.key)"
                >
                <span>{{ formatShoppingItem(item) }}</span>
              </label>
              <button
                v-if="isManualItem(item)"
                class="shopping-checklist__remove"
                type="button"
                aria-label="Remover item avulso"
                @click="removeManualItem(item.key)"
              >
                <BaseIcon name="x" />
              </button>
            </div>
          </div>
        </div>

        <div
          v-for="category in manualShoppingCategory"
          :key="category.category"
          class="shopping-checklist__category shopping-checklist__category--manual"
        >
          <header class="shopping-checklist__category-header">
            <h2>
              <BaseIcon :name="iconForShoppingCategory(category.category)" />
              {{ category.category }}
            </h2>
            <span>{{ category.items.length }} item{{ category.items.length === 1 ? '' : 's' }}</span>
          </header>

          <div
            v-for="item in category.items"
            :key="item.key"
            class="shopping-checklist__item"
            :class="{ 'shopping-checklist__item--checked': isChecked(item.key) }"
          >
            <label class="shopping-checklist__check">
              <input
                type="checkbox"
                :checked="isChecked(item.key)"
                @change="toggleItem(item.key)"
              >
              <span>{{ formatShoppingItem(item) }}</span>
            </label>
            <button
              class="shopping-checklist__remove"
              type="button"
              aria-label="Remover item manual"
              @click="removeManualItem(item.key)"
            >
              <BaseIcon name="x" />
            </button>
          </div>
        </div>
      </section>

      <Teleport to="body">
        <div
          v-if="isMarketModalOpen"
          class="market-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Adicionar item de mercado"
          @click.self="closeMarketModal"
        >
          <article class="market-modal__panel">
            <header class="market-modal__header">
              <div>
                <p class="section-kicker">Banco de mercado</p>
                <h2>Adicionar item</h2>
              </div>
              <button class="market-modal__close" type="button" aria-label="Fechar" @click="closeMarketModal">
                <BaseIcon name="x" />
              </button>
            </header>

            <div class="field">
              <label for="market-search">Buscar item</label>
              <input
                id="market-search"
                v-model="itemSearch"
                type="search"
                placeholder="Ex.: banana, arroz, ovos..."
                autocomplete="off"
              >
            </div>

            <div class="market-category-tabs" aria-label="Categorias de mercado">
              <button
                v-for="category in marketCategories"
                :key="category"
                class="pill-button"
                :class="{ 'pill-button--active': activeMarketCategory === category }"
                type="button"
                @click="setMarketCategory(category)"
              >
                {{ category }}
              </button>
            </div>

            <div v-if="filteredMarketItems.length" class="market-modal__items" aria-label="Itens encontrados">
              <button
                v-for="item in filteredMarketItems"
                :key="item.id"
                class="market-option"
                :class="{ 'market-option--active': selectedMarketItemId === item.id }"
                type="button"
                @click="selectMarketItem(item)"
              >
                <span class="market-option__name">{{ item.name }}</span>
                <span class="market-option__meta">
                  {{ formatQuantity(item.defaultQuantity, item.defaultUnit) }}
                </span>
              </button>
            </div>
            <p v-else class="market-modal__empty">Nenhum item encontrado nessa categoria.</p>

            <div class="market-modal__form">
              <div v-if="selectedMarketItem" class="market-modal__selected">
                <span>Selecionado</span>
                <strong>{{ selectedMarketItem.name }}</strong>
              </div>

              <div class="field">
                <label for="manual-quantity">Quantidade</label>
                <input
                  id="manual-quantity"
                  v-model.number="manualQuantity"
                  type="number"
                  min="0"
                  step="0.1"
                >
              </div>

              <div class="field">
                <label for="manual-unit">Medida</label>
                <select id="manual-unit" v-model="manualUnit">
                  <option value="g">g</option>
                  <option value="un">un</option>
                  <option value="ml">ml</option>
                  <option value="pacote">pacote</option>
                  <option value="caixa">caixa</option>
                </select>
              </div>

              <button class="primary-button" type="button" :disabled="!selectedMarketItem" @click="addManualItem">
                Adicionar à lista
                <BaseIcon name="plus" />
              </button>
            </div>
          </article>
        </div>
      </Teleport>

      <p v-if="copyMessage" class="copy-feedback">
        {{ copyMessage }}
      </p>
    </PlanningFlowShell>
  </StudentShell>
</template>
