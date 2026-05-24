<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import {
  shoppingCategoryOrder,
  shoppingSubcategoryOrder,
  type ShoppingCatalogInput,
  type ShoppingCatalogItem,
} from '../../composables/useShoppingCatalog'
import type { Ingredient } from '../../types/ingredient'

const props = defineProps<{
  initialItem?: ShoppingCatalogItem | null
  ingredients: Ingredient[]
  pending?: boolean
  submitLabel: string
}>()

const emit = defineEmits<{
  submit: [input: ShoppingCatalogInput]
}>()

const aliasesText = ref('')
const validationMessage = ref<string | null>(null)
const form = reactive<ShoppingCatalogInput>({
  name: '',
  slug: '',
  displayName: '',
  aliases: [],
  shoppingCategory: 'Outros',
  shoppingSubcategory: '',
  defaultQuantityText: '',
  defaultUnit: '',
  notes: '',
  isActive: true,
  isFood: true,
  ingredientId: null,
  sortOrder: 0,
})

const activeIngredients = computed(() =>
  props.ingredients.filter((ingredient) => ingredient.isActive),
)
const knownSubcategories = computed(() =>
  shoppingSubcategoryOrder[form.shoppingCategory as keyof typeof shoppingSubcategoryOrder] ?? [],
)
const canSubmit = computed(() => getValidationError() === null)

watch(
  () => props.initialItem,
  (item) => {
    if (!item) return

    form.name = item.name
    form.slug = item.slug
    form.displayName = item.displayName
    aliasesText.value = item.aliases.join(', ')
    form.shoppingCategory = item.shoppingCategory
    form.shoppingSubcategory = item.shoppingSubcategory
    form.defaultQuantityText = item.defaultQuantityText
    form.defaultUnit = item.defaultUnit
    form.notes = item.notes
    form.isActive = item.isActive
    form.isFood = item.isFood
    form.ingredientId = item.ingredientId
    form.sortOrder = item.sortOrder
  },
  { immediate: true },
)

function updateSlugFromName() {
  if (form.slug) return
  form.slug = slugify(form.name)
}

function submitForm() {
  const error = getValidationError()
  validationMessage.value = error

  if (error) return

  emit('submit', {
    ...form,
    name: form.name.trim(),
    slug: form.slug.trim(),
    displayName: cleanOptionalText(form.displayName),
    aliases: aliasesText.value.split(',').map((alias) => alias.trim()).filter(Boolean),
    shoppingSubcategory: cleanOptionalText(form.shoppingSubcategory),
    defaultQuantityText: cleanOptionalText(form.defaultQuantityText),
    defaultUnit: cleanOptionalText(form.defaultUnit),
    notes: cleanOptionalText(form.notes),
    ingredientId: cleanOptionalText(form.ingredientId),
    sortOrder: Number(form.sortOrder) || 0,
  })
}

function getValidationError() {
  if (!form.name.trim()) return 'Informe o nome do item.'
  if (!form.slug.trim()) return 'Informe o slug.'
  if (!form.shoppingCategory) return 'Escolha a categoria de compra.'
  if (Number(form.sortOrder) < 0) return 'A ordem precisa ser maior ou igual a zero.'

  return null
}

function cleanOptionalText(value: string | null) {
  return value?.trim() || null
}

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
</script>

<template>
  <form class="admin-form" @submit.prevent="submitForm">
    <section class="admin-form-section">
      <p class="section-kicker">Item de mercado</p>

      <div class="admin-form-grid">
        <div class="field">
          <label for="catalog-name">Nome</label>
          <input id="catalog-name" v-model="form.name" type="text" required @blur="updateSlugFromName">
        </div>

        <div class="field">
          <label for="catalog-slug">Slug</label>
          <input id="catalog-slug" v-model="form.slug" type="text" required>
        </div>

        <div class="field">
          <label for="catalog-display-name">Nome de exibição</label>
          <input id="catalog-display-name" v-model="form.displayName" type="text">
        </div>

        <div class="field">
          <label for="catalog-category">Categoria de compra</label>
          <select id="catalog-category" v-model="form.shoppingCategory" required>
            <option v-for="category in shoppingCategoryOrder" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>

        <div class="field">
          <label for="catalog-subcategory">Subcategoria</label>
          <input
            id="catalog-subcategory"
            v-model="form.shoppingSubcategory"
            type="text"
            list="catalog-subcategory-options"
            placeholder="Opcional"
          >
          <datalist id="catalog-subcategory-options">
            <option v-for="subcategory in knownSubcategories" :key="subcategory" :value="subcategory" />
          </datalist>
        </div>

        <div class="field">
          <label for="catalog-quantity">Quantidade padrão</label>
          <input id="catalog-quantity" v-model="form.defaultQuantityText" type="text" placeholder="1 unidade">
        </div>

        <div class="field">
          <label for="catalog-unit">Unidade padrão</label>
          <input id="catalog-unit" v-model="form.defaultUnit" type="text" placeholder="unidade">
        </div>

        <div class="field">
          <label for="catalog-order">Ordem</label>
          <input id="catalog-order" v-model.number="form.sortOrder" type="number" min="0" step="1">
        </div>

        <div class="field">
          <label for="catalog-ingredient">Ingrediente vinculado</label>
          <select id="catalog-ingredient" v-model="form.ingredientId">
            <option :value="null">Sem vínculo</option>
            <option v-for="ingredient in activeIngredients" :key="ingredient.id" :value="ingredient.id">
              {{ ingredient.displayName ?? ingredient.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="field">
        <label for="catalog-aliases">Aliases/sinônimos</label>
        <input id="catalog-aliases" v-model="aliasesText" type="text" placeholder="separe por vírgulas">
      </div>

      <div class="field">
        <label for="catalog-notes">Observações</label>
        <textarea id="catalog-notes" v-model="form.notes" rows="3" />
      </div>

      <div class="admin-boolean-grid">
        <label class="checkbox-field checkbox-field--aligned">
          <input v-model="form.isFood" type="checkbox">
          É alimento
        </label>

        <label class="checkbox-field checkbox-field--aligned">
          <input v-model="form.isActive" type="checkbox">
          Ativo
        </label>
      </div>
    </section>

    <p v-if="validationMessage" class="form-error">{{ validationMessage }}</p>

    <button class="primary-button" type="submit" :disabled="pending || !canSubmit">
      {{ pending ? 'Salvando...' : submitLabel }}
    </button>
  </form>
</template>
