import { computed, onMounted, ref, watch, type Ref } from 'vue'
import { getCatalogDisplayName, getShoppingCategoryOrder } from './useShoppingCatalog'
import type { ShoppingCatalogItem } from '../types/shoppingCatalog'
import type {
  CatalogShoppingItemInput,
  CustomShoppingItemInput,
  ShoppingListGroup,
  ShoppingListUiItem,
} from '../types/shoppingList'
import type {
  PlanningResult,
  ShoppingListCategory as PlannerShoppingListCategory,
  ShoppingListItem as PlannerShoppingListItem,
} from '../types/planner'

type StoredExtraItem = ShoppingListUiItem

const extrasStorageKey = 'meal_planner_shopping_extras_v1'
const legacyManualStorageKey = 'meal_planner_manual_shopping_items'

export function useShoppingList(result: Ref<PlanningResult | undefined>) {
  const checkedAutomaticItems = ref<Set<string>>(new Set())
  const extraItems = ref<StoredExtraItem[]>([])

  const automaticStorageKey = computed(() =>
    `meal_planner_shopping_checked:${result.value?.generatedAt ?? 'empty'}`,
  )
  const automaticItems = computed(() =>
    normalizeAutomaticShoppingItems(result.value?.shoppingList ?? [], checkedAutomaticItems.value),
  )
  const allItems = computed<ShoppingListUiItem[]>(() => [
    ...automaticItems.value,
    ...extraItems.value,
  ])
  const totalItems = computed(() => allItems.value.length)
  const checkedItems = computed(() => allItems.value.filter((item) => item.checked).length)
  const pendingItems = computed(() => Math.max(totalItems.value - checkedItems.value, 0))
  const hasItems = computed(() => totalItems.value > 0)
  const isDone = computed(() => hasItems.value && checkedItems.value === totalItems.value)

  onMounted(() => {
    loadAutomaticChecks()
    loadExtraItems()
  })

  watch(automaticStorageKey, () => {
    loadAutomaticChecks()
  })

  function toggleItem(id: string) {
    const extraItem = extraItems.value.find((item) => item.id === id)

    if (extraItem) {
      extraItem.checked = !extraItem.checked
      persistExtraItems()
      return
    }

    const nextCheckedItems = new Set(checkedAutomaticItems.value)
    if (nextCheckedItems.has(id)) {
      nextCheckedItems.delete(id)
    } else {
      nextCheckedItems.add(id)
    }

    checkedAutomaticItems.value = nextCheckedItems
    persistAutomaticChecks()
  }

  function addCatalogItem(catalogItem: ShoppingCatalogItem, input: CatalogShoppingItemInput = {}) {
    if (isCatalogItemAdded(catalogItem.id)) return false

    const quantityText = input.quantityText?.trim() || catalogItem.defaultQuantityText?.trim() || '1 item'

    extraItems.value = [
      ...extraItems.value,
      {
        id: `catalog|${catalogItem.id}`,
        source: 'catalog',
        catalogItemId: catalogItem.id,
        ingredientId: catalogItem.ingredientId,
        category: catalogItem.shoppingCategory,
        subcategory: catalogItem.shoppingSubcategory,
        name: getCatalogDisplayName(catalogItem),
        quantityText,
        noteType: 'catalog',
        noteText: 'Adicionado da Lista de Compras.',
        checked: false,
        createdAt: new Date().toISOString(),
        isRemovable: true,
      },
    ]

    persistExtraItems()
    return true
  }

  function addCustomItem(input: CustomShoppingItemInput) {
    const name = input.name.trim()
    if (!name) return false

    extraItems.value = [
      ...extraItems.value,
      {
        id: `custom|${Date.now()}|${Math.random().toString(16).slice(2)}`,
        source: 'custom',
        category: input.category,
        subcategory: input.subcategory ?? null,
        name,
        quantityText: input.quantityText?.trim() || '1 item',
        noteType: 'manual',
        noteText: input.noteText?.trim() || 'Adicionado manualmente.',
        checked: false,
        createdAt: new Date().toISOString(),
        isRemovable: true,
      },
    ]

    persistExtraItems()
    return true
  }

  function removeItem(id: string) {
    extraItems.value = extraItems.value.filter((item) => item.id !== id)
    persistExtraItems()
  }

  function clearCheckedItems() {
    checkedAutomaticItems.value = new Set()
    extraItems.value = extraItems.value.map((item) => ({ ...item, checked: false }))
    persistAutomaticChecks()
    persistExtraItems()
  }

  function isCatalogItemAdded(catalogItemId: string) {
    return extraItems.value.some((item) => item.source === 'catalog' && item.catalogItemId === catalogItemId)
  }

  function getGroups(items: ShoppingListUiItem[] = allItems.value): ShoppingListGroup[] {
    return groupShoppingItems(items)
  }

  function getCopyText() {
    return generateShoppingCopyText(getGroups())
  }

  function loadAutomaticChecks() {
    if (typeof window === 'undefined') return

    const storedItems = window.localStorage.getItem(automaticStorageKey.value)
    try {
      checkedAutomaticItems.value = new Set(storedItems ? JSON.parse(storedItems) as string[] : [])
    } catch {
      checkedAutomaticItems.value = new Set()
      window.localStorage.removeItem(automaticStorageKey.value)
    }
  }

  function loadExtraItems() {
    if (typeof window === 'undefined') return

    const storedExtras = window.localStorage.getItem(extrasStorageKey)
    if (storedExtras) {
      try {
        extraItems.value = sanitizeStoredExtras(JSON.parse(storedExtras) as StoredExtraItem[])
        return
      } catch {
        window.localStorage.removeItem(extrasStorageKey)
      }
    }

    const legacyItems = window.localStorage.getItem(legacyManualStorageKey)
    if (!legacyItems) return

    try {
      extraItems.value = migrateLegacyManualItems(JSON.parse(legacyItems) as PlannerShoppingListItem[])
      persistExtraItems()
    } catch {
      window.localStorage.removeItem(legacyManualStorageKey)
    }
  }

  function persistAutomaticChecks() {
    if (typeof window === 'undefined') return

    window.localStorage.setItem(automaticStorageKey.value, JSON.stringify(Array.from(checkedAutomaticItems.value)))
  }

  function persistExtraItems() {
    if (typeof window === 'undefined') return

    window.localStorage.setItem(extrasStorageKey, JSON.stringify(extraItems.value))
  }

  return {
    addCatalogItem,
    addCustomItem,
    allItems,
    checkedItems,
    clearCheckedItems,
    extraItems,
    getCopyText,
    getGroups,
    hasItems,
    isCatalogItemAdded,
    isDone,
    pendingItems,
    removeItem,
    toggleItem,
    totalItems,
  }
}

export function groupShoppingItems(items: ShoppingListUiItem[]): ShoppingListGroup[] {
  const categories = new Map<string, ShoppingListUiItem[]>()

  for (const item of items) {
    const categoryItems = categories.get(item.category) ?? []
    categoryItems.push(item)
    categories.set(item.category, categoryItems)
  }

  return Array.from(categories.entries())
    .map(([category, categoryItems]) => ({
      category,
      items: categoryItems,
    }))
    .sort((a, b) => getShoppingCategoryOrder(a.category) - getShoppingCategoryOrder(b.category))
}

export function generateShoppingCopyText(groups: ShoppingListGroup[]) {
  const lines: string[] = ['Lista de compras', '']

  for (const group of groups) {
    const validItems = group.items.filter((item) => item.name.trim())
    if (validItems.length === 0) continue

    lines.push(group.category)

    const subgroups = groupItemsBySubcategory(validItems)

    for (const subgroup of subgroups) {
      if (subgroup.subcategory) lines.push(subgroup.subcategory)

      for (const item of subgroup.items) {
        const note = shouldCopyNote(item.noteType) && item.noteText ? ` (${item.noteText})` : ''
        lines.push(`- ${formatShoppingLine(item)}${note}`)
      }
    }

    lines.push('')
  }

  return lines.join('\n').trim()
}

export function formatShoppingLine(item: ShoppingListUiItem) {
  if (!item.quantityText.trim()) return item.name

  return `${item.quantityText} de ${item.name}`
}

function normalizeAutomaticShoppingItems(
  categories: PlannerShoppingListCategory[],
  checkedItems: Set<string>,
): ShoppingListUiItem[] {
  return categories.flatMap((category) =>
    category.items.map((item) => ({
      id: item.key,
      source: 'automatic' as const,
      ingredientId: item.ingredientId,
      category: normalizeShoppingCategory(category.category),
      subcategory: null,
      name: normalizeDisplayName(item.displayName),
      quantityText: getAutomaticQuantityText(item),
      noteType: getAutomaticNoteType(item),
      noteText: getAutomaticNoteText(item),
      checked: checkedItems.has(item.key),
      createdAt: item.key,
      isRemovable: false,
    })),
  )
}

function getAutomaticQuantityText(item: PlannerShoppingListItem) {
  if (item.isFreeSeasoning || item.quantity === null) return ''

  return formatQuantity(item.quantity, item.unit)
}

function getAutomaticNoteType(item: PlannerShoppingListItem) {
  if (item.isCritical) return 'critical'
  if (item.isFreeSeasoning) return 'free_seasoning'
  if (item.packageCount && item.packageSizeG && item.packageLabel) return 'whole_package'
  if (item.requiredQuantity && item.quantity && item.quantity > item.requiredQuantity) return 'rounded_up'
  if (item.ingredientRole === 'main' && item.unit === 'g') return 'gross_weight'
  if (item.unit && !['g', 'kg', 'ml', 'l'].includes(item.unit)) return 'household_measure'

  return null
}

function getAutomaticNoteText(item: PlannerShoppingListItem) {
  const noteType = getAutomaticNoteType(item)

  if (noteType === 'critical') return 'Siga a quantidade da receita.'
  if (noteType === 'free_seasoning') return 'À gosto.'
  if (noteType === 'whole_package' && item.packageCount && item.packageLabel && item.packageSizeG) {
    return `Compra arredondada: ${formatPackageCount(item.packageCount, item.packageLabel, item.packageSizeG)}.`
  }
  if (noteType === 'rounded_up') return 'Arredondado para não faltar.'
  if (noteType === 'gross_weight') return 'Compre nesse peso antes de limpar.'
  if (noteType === 'household_measure') return 'Medida caseira.'

  return null
}

function shouldCopyNote(noteType?: string | null) {
  return noteType === 'whole_package' || noteType === 'gross_weight' || noteType === 'critical'
}

function normalizeShoppingCategory(category: string) {
  const normalizedCategory = normalizeKey(category)

  if (normalizedCategory.includes('prote')) return 'Proteínas'
  if (normalizedCategory.includes('carbo') || normalizedCategory.includes('cereal')) return 'Carboidratos'
  if (normalizedCategory.includes('fruta')) return 'Frutas'
  if (
    normalizedCategory.includes('veget') ||
    normalizedCategory.includes('horti') ||
    normalizedCategory.includes('salada')
  ) {
    return 'Vegetais'
  }
  if (normalizedCategory.includes('bebida')) return 'Bebidas'
  if (normalizedCategory.includes('tempero') || normalizedCategory.includes('condimento')) return 'Temperos e Condimentos'
  if (normalizedCategory.includes('mercearia') || normalizedCategory.includes('despensa')) return 'Despensa'
  if (normalizedCategory.includes('latic')) return 'Laticínios'
  if (normalizedCategory.includes('congel')) return 'Congelados'
  if (normalizedCategory.includes('util')) return 'Utilidades'

  return 'Outros'
}

function groupItemsBySubcategory(items: ShoppingListUiItem[]) {
  const groups = new Map<string, ShoppingListUiItem[]>()

  for (const item of items) {
    const key = item.subcategory ?? ''
    const groupItems = groups.get(key) ?? []
    groupItems.push(item)
    groups.set(key, groupItems)
  }

  return Array.from(groups.entries()).map(([subcategory, groupItems]) => ({
    subcategory: subcategory || null,
    items: groupItems,
  }))
}

function normalizeDisplayName(value: string) {
  return value.charAt(0).toLocaleUpperCase('pt-BR') + value.slice(1)
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

function formatPackageCount(count: number, label: string, packageSizeG: number) {
  const pluralLabel = pluralizePackageLabel(label, count)
  const normalizedLabel = normalizeKey(label)

  if (normalizedLabel.includes('kg') || normalizedLabel.includes('g')) {
    return `${count} ${pluralLabel}`
  }

  return `${count} ${pluralLabel} de ${formatQuantity(packageSizeG, 'g')}`
}

function pluralizePackageLabel(label: string, count: number) {
  if (count === 1) return label
  if (label.startsWith('pacote de ')) return label.replace(/^pacote de /, 'pacotes de ')
  if (label.startsWith('unidade de ')) return label.replace(/^unidade de /, 'unidades de ')
  if (label.endsWith('s')) return label

  return `${label}s`
}

function sanitizeStoredExtras(items: StoredExtraItem[]) {
  return items
    .filter((item) => item.id && item.name)
    .map((item) => ({
      ...item,
      subcategory: item.subcategory ?? null,
      checked: Boolean(item.checked),
      isRemovable: item.source !== 'automatic',
      quantityText: item.quantityText || '1 item',
      noteText: item.noteText ?? (item.source === 'catalog' ? 'Adicionado da Lista de Compras.' : 'Adicionado manualmente.'),
    }))
}

function migrateLegacyManualItems(items: PlannerShoppingListItem[]): StoredExtraItem[] {
  return items.map((item) => ({
    id: item.key.startsWith('manual|') ? item.key.replace(/^manual\|/, 'custom|') : `custom|${item.key}`,
    source: 'custom',
    ingredientId: item.ingredientId,
    category: normalizeShoppingCategory(item.shoppingCategory),
    subcategory: null,
    name: normalizeDisplayName(item.displayName),
    quantityText: getAutomaticQuantityText(item) || '1 item',
    noteType: 'manual',
    noteText: 'Adicionado manualmente.',
    checked: false,
    createdAt: new Date().toISOString(),
    isRemovable: true,
  }))
}

function normalizeKey(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .trim()
}
