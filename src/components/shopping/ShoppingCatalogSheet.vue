<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import {
  getSubcategoriesForItems,
  searchCatalogItems,
  shoppingCategoryOrder,
  type ShoppingCatalogItem,
} from '../../composables/useShoppingCatalog'
import type { CatalogShoppingItemInput, CustomShoppingItemInput } from '../../types/shoppingList'
import BaseIcon from '../ui/BaseIcon.vue'

const props = defineProps<{
  open: boolean
  items: ShoppingCatalogItem[]
  pending?: boolean
  errorMessage?: string | null
  addedCatalogIds: string[]
}>()

const emit = defineEmits<{
  close: []
  addCatalog: [item: ShoppingCatalogItem, input: CatalogShoppingItemInput]
  addCustom: [input: CustomShoppingItemInput]
}>()

type SelectedCatalogConfig = {
  quantity: string
  unit: string
}

const catalogQuantityUnits = [
  { value: 'kg', label: 'kg' },
  { value: 'g', label: 'g' },
  { value: 'unidades', label: 'unidades' },
  { value: 'pacotes', label: 'pacotes' },
  { value: 'latas', label: 'latas' },
  { value: 'caixas', label: 'caixas' },
  { value: 'garrafas', label: 'garrafas' },
  { value: 'vidros', label: 'vidros' },
  { value: 'potes', label: 'potes' },
  { value: 'maços', label: 'maços' },
  { value: 'bandejas', label: 'bandejas' },
  { value: 'litros', label: 'litros' },
  { value: 'ml', label: 'ml' },
  { value: 'cabeças', label: 'cabeças' },
  { value: 'rolos', label: 'rolos' },
  { value: 'itens', label: 'itens' },
]

const search = ref('')
const activeCategory = ref('Todos')
const activeSubcategory = ref('Todos')
const showCustomForm = ref(false)
const selectedCatalogIds = ref<Set<string>>(new Set())
const selectedCatalogConfig = ref<Record<string, SelectedCatalogConfig>>({})
const customForm = reactive({
  name: '',
  quantityText: '',
  category: 'Outros',
  noteText: '',
})

const categoryTabs = computed(() => ['Todos', ...shoppingCategoryOrder])
const subcategoryTabs = computed(() => {
  if (activeCategory.value === 'Todos') return []

  return ['Todos', ...getSubcategoriesForItems(props.items, activeCategory.value)]
})
const filteredItems = computed(() =>
  searchCatalogItems(
    props.items,
    search.value,
    activeCategory.value,
    activeSubcategory.value,
  ),
)
const groupedItems = computed(() => {
  const groups = new Map<string, ShoppingCatalogItem[]>()

  for (const item of filteredItems.value) {
    const categoryItems = groups.get(item.shoppingCategory) ?? []
    categoryItems.push(item)
    groups.set(item.shoppingCategory, categoryItems)
  }

  return Array.from(groups.entries()).map(([category, items]) => ({ category, items }))
})
const selectedItems = computed(() =>
  props.items.filter((item) => selectedCatalogIds.value.has(item.id) && !isAdded(item)),
)
const selectedCount = computed(() => selectedItems.value.length)

watch(
  () => props.open,
  (isOpen) => {
    if (!isOpen) return
    search.value = ''
    activeCategory.value = 'Todos'
    activeSubcategory.value = 'Todos'
    showCustomForm.value = false
    selectedCatalogIds.value = new Set()
    selectedCatalogConfig.value = {}
  },
)

watch(activeCategory, () => {
  activeSubcategory.value = 'Todos'
})

function isAdded(item: ShoppingCatalogItem) {
  return props.addedCatalogIds.includes(item.id)
}

function isSelected(item: ShoppingCatalogItem) {
  return selectedCatalogIds.value.has(item.id)
}

function toggleSelection(item: ShoppingCatalogItem) {
  if (isAdded(item)) return

  const nextSelectedIds = new Set(selectedCatalogIds.value)
  const nextConfig = { ...selectedCatalogConfig.value }
  if (nextSelectedIds.has(item.id)) {
    nextSelectedIds.delete(item.id)
    delete nextConfig[item.id]
  } else {
    nextSelectedIds.add(item.id)
    nextConfig[item.id] = createSelectedCatalogConfig(item)
  }

  selectedCatalogIds.value = nextSelectedIds
  selectedCatalogConfig.value = nextConfig
}

function addSelectedItems() {
  for (const item of selectedItems.value) {
    emit('addCatalog', item, {
      quantityText: formatSelectedCatalogQuantity(item),
    })
  }

  selectedCatalogIds.value = new Set()
  selectedCatalogConfig.value = {}
}

function createSelectedCatalogConfig(item: ShoppingCatalogItem): SelectedCatalogConfig {
  const parsedQuantity = parseQuantityText(item.defaultQuantityText)

  return {
    quantity: parsedQuantity.quantity,
    unit: normalizeCatalogUnit(parsedQuantity.unit || item.defaultUnit || 'itens'),
  }
}

function getSelectedConfig(item: ShoppingCatalogItem) {
  return selectedCatalogConfig.value[item.id] ?? createSelectedCatalogConfig(item)
}

function getCatalogUnitOptions(item: ShoppingCatalogItem) {
  const unit = getSelectedConfig(item).unit
  if (catalogQuantityUnits.some((option) => option.value === unit)) return catalogQuantityUnits

  return [
    ...catalogQuantityUnits,
    { value: unit, label: unit },
  ]
}

function updateSelectedQuantity(item: ShoppingCatalogItem, quantity: string) {
  selectedCatalogConfig.value = {
    ...selectedCatalogConfig.value,
    [item.id]: {
      ...getSelectedConfig(item),
      quantity,
    },
  }
}

function updateSelectedUnit(item: ShoppingCatalogItem, unit: string) {
  selectedCatalogConfig.value = {
    ...selectedCatalogConfig.value,
    [item.id]: {
      ...getSelectedConfig(item),
      unit,
    },
  }
}

function formatSelectedCatalogQuantity(item: ShoppingCatalogItem) {
  const config = getSelectedConfig(item)
  const quantity = config.quantity.trim()
  const unit = config.unit.trim()

  if (!quantity) return item.defaultQuantityText?.trim() || '1 item'
  if (!unit) return quantity

  const formattedQuantity = quantity.replace('.', ',')
  if (['kg', 'g', 'ml'].includes(unit)) return `${formattedQuantity}${unit}`

  return `${formattedQuantity} ${pluralizeUnit(unit, parseQuantityNumber(quantity))}`
}

function parseQuantityText(value: string | null) {
  const fallback = { quantity: '1', unit: 'itens' }
  if (!value) return fallback

  const match = value.trim().match(/^(\d+(?:[,.]\d+)?)\s*(.*)$/)
  if (!match) return fallback

  return {
    quantity: match[1] ?? '1',
    unit: match[2]?.trim() || 'itens',
  }
}

function normalizeCatalogUnit(value: string) {
  const normalized = normalizeUnitKey(value)

  if (['kg', 'g', 'ml'].includes(normalized)) return normalized
  if (['l', 'litro', 'litros'].includes(normalized)) return 'litros'
  if (['und', 'un', 'unidade', 'unidades'].includes(normalized)) return 'unidades'
  if (['item', 'itens'].includes(normalized)) return 'itens'
  if (['pacote', 'pacotes'].includes(normalized)) return 'pacotes'
  if (['lata', 'latas'].includes(normalized)) return 'latas'
  if (['caixa', 'caixas'].includes(normalized)) return 'caixas'
  if (['garrafa', 'garrafas'].includes(normalized)) return 'garrafas'
  if (['vidro', 'vidros'].includes(normalized)) return 'vidros'
  if (['pote', 'potes'].includes(normalized)) return 'potes'
  if (['maco', 'macos'].includes(normalized)) return 'maços'
  if (['bandeja', 'bandejas'].includes(normalized)) return 'bandejas'
  if (['cabeca', 'cabecas'].includes(normalized)) return 'cabeças'
  if (['rolo', 'rolos'].includes(normalized)) return 'rolos'

  return value.trim() || 'itens'
}

function pluralizeUnit(unit: string, quantity: number | null) {
  if (quantity !== 1) return unit

  const singularByUnit: Record<string, string> = {
    unidades: 'unidade',
    pacotes: 'pacote',
    latas: 'lata',
    caixas: 'caixa',
    garrafas: 'garrafa',
    vidros: 'vidro',
    potes: 'pote',
    maços: 'maço',
    bandejas: 'bandeja',
    litros: 'litro',
    cabeças: 'cabeça',
    rolos: 'rolo',
    itens: 'item',
  }

  return singularByUnit[unit] ?? unit
}

function parseQuantityNumber(value: string) {
  const parsed = Number(value.replace(',', '.'))

  return Number.isFinite(parsed) ? parsed : null
}

function normalizeUnitKey(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .trim()
}

function submitCustomItem() {
  const name = customForm.name.trim()
  if (!name) return

  emit('addCustom', {
    name,
    quantityText: customForm.quantityText.trim() || null,
    category: customForm.category,
    noteText: customForm.noteText.trim() || null,
  })

  customForm.name = ''
  customForm.quantityText = ''
  customForm.category = 'Outros'
  customForm.noteText = ''
  showCustomForm.value = false
}
</script>

<template>
  <Teleport to="body">
    <Transition name="shopping-sheet-backdrop">
      <div v-if="open" class="shopping-sheet-backdrop" @click.self="$emit('close')" />
    </Transition>

    <Transition name="shopping-sheet">
      <aside
        v-if="open"
        class="shopping-sheet"
        role="dialog"
        aria-modal="true"
        aria-label="Adicionar da Lista de Compras"
      >
        <header class="shopping-sheet__header">
          <div>
            <h2>Adicionar da Lista de Compras</h2>
            <p>Escolha itens extras para completar sua compra.</p>
          </div>
          <button class="shopping-icon-button" type="button" aria-label="Fechar" @click="$emit('close')">
            <BaseIcon name="x" />
          </button>
        </header>

        <label class="shopping-search">
          <BaseIcon name="search" />
          <input v-model="search" type="search" placeholder="Buscar item…" autocomplete="off">
        </label>

        <div class="shopping-category-tabs" aria-label="Categorias da Lista de Compras">
          <button
            v-for="category in categoryTabs"
            :key="category"
            class="shopping-filter-chip"
            :class="{ 'shopping-filter-chip--active': activeCategory === category }"
            type="button"
            @click="activeCategory = category"
          >
            {{ category }}
          </button>
        </div>

        <div v-if="subcategoryTabs.length > 1" class="shopping-subcategory-tabs" aria-label="Subcategorias da Lista de Compras">
          <button
            v-for="subcategory in subcategoryTabs"
            :key="subcategory"
            class="shopping-filter-chip shopping-filter-chip--subtle"
            :class="{ 'shopping-filter-chip--active': activeSubcategory === subcategory }"
            type="button"
            @click="activeSubcategory = subcategory"
          >
            {{ subcategory }}
          </button>
        </div>

        <section v-if="showCustomForm" class="shopping-custom-form">
          <div class="field">
            <label for="custom-shopping-name">Nome do item</label>
            <input id="custom-shopping-name" v-model="customForm.name" type="text" placeholder="Ex.: carvão">
          </div>
          <div class="shopping-custom-form__grid">
            <div class="field">
              <label for="custom-shopping-quantity">Quantidade</label>
              <input id="custom-shopping-quantity" v-model="customForm.quantityText" type="text" placeholder="1 item">
            </div>
            <div class="field">
              <label for="custom-shopping-category">Categoria</label>
              <select id="custom-shopping-category" v-model="customForm.category">
                <option v-for="category in shoppingCategoryOrder" :key="category" :value="category">
                  {{ category }}
                </option>
              </select>
            </div>
          </div>
          <div class="field">
            <label for="custom-shopping-note">Observação</label>
            <input id="custom-shopping-note" v-model="customForm.noteText" type="text" placeholder="Opcional">
          </div>
          <div class="shopping-custom-form__actions">
            <button class="shopping-button shopping-button--secondary" type="button" @click="showCustomForm = false">
              Cancelar
            </button>
            <button class="shopping-button shopping-button--primary" type="button" @click="submitCustomItem">
              Adicionar
            </button>
          </div>
        </section>

        <section v-else class="shopping-catalog-list">
          <p v-if="pending" class="shopping-sheet__empty">Carregando Lista de Compras...</p>
          <p v-else-if="errorMessage" class="shopping-sheet__empty">{{ errorMessage }}</p>
          <p v-else-if="filteredItems.length === 0" class="shopping-sheet__empty">
            Nenhum item encontrado nesse filtro.
          </p>

          <div v-else>
            <article v-for="group in groupedItems" :key="group.category" class="shopping-catalog-group">
              <h3>{{ group.category }}</h3>

              <article
                v-for="item in group.items"
                :key="item.id"
                class="shopping-catalog-item"
                :class="{
                  'shopping-catalog-item--added': isAdded(item),
                  'shopping-catalog-item--selected': isSelected(item),
                }"
              >
                <button
                  class="shopping-catalog-item__select"
                  type="button"
                  :disabled="isAdded(item)"
                  @click="toggleSelection(item)"
                >
                  <span class="shopping-catalog-item__add" aria-hidden="true">
                    <BaseIcon :name="isAdded(item) || isSelected(item) ? 'check' : 'plus'" />
                  </span>
                  <span class="shopping-catalog-item__body">
                    <strong>{{ item.displayName ?? item.name }}</strong>
                    <small v-if="item.shoppingSubcategory">{{ item.shoppingSubcategory }}</small>
                    <small>{{ item.defaultQuantityText || '1 item' }}</small>
                  </span>
                  <span class="shopping-catalog-item__badge">
                    {{ isAdded(item) ? 'adicionado' : isSelected(item) ? 'selecionado' : 'selecionar' }}
                  </span>
                </button>

                <div v-if="isSelected(item)" class="shopping-catalog-item__quantity">
                  <label>
                    <span>Quantidade</span>
                    <input
                      :value="getSelectedConfig(item).quantity"
                      type="text"
                      inputmode="decimal"
                      autocomplete="off"
                      placeholder="1"
                      @input="updateSelectedQuantity(item, ($event.target as HTMLInputElement).value)"
                    >
                  </label>
                  <label>
                    <span>Unidade</span>
                    <select
                      :value="getSelectedConfig(item).unit"
                      @change="updateSelectedUnit(item, ($event.target as HTMLSelectElement).value)"
                    >
                      <option
                        v-for="unit in getCatalogUnitOptions(item)"
                        :key="unit.value"
                        :value="unit.value"
                      >
                        {{ unit.label }}
                      </option>
                    </select>
                  </label>
                </div>
              </article>
            </article>
          </div>

          <button class="shopping-sheet__custom-link" type="button" @click="showCustomForm = true">
            Não encontrou? Criar item personalizado
          </button>
        </section>

        <footer v-if="!showCustomForm" class="shopping-sheet__footer">
          <span>{{ selectedCount }} selecionado{{ selectedCount === 1 ? '' : 's' }}</span>
          <button
            class="shopping-button shopping-button--primary"
            type="button"
            :disabled="selectedCount === 0"
            @click="addSelectedItems"
          >
            Adicionar à lista
          </button>
        </footer>
      </aside>
    </Transition>
  </Teleport>
</template>
