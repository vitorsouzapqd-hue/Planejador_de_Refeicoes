<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type {
  AdminRecipeIngredient,
  AdminRecipeIngredientInput,
} from '../../composables/useAdminRecipes'
import type { IngredientRole, RoundingMode } from '../../types/recipe'

type EditableIngredient = AdminRecipeIngredientInput & {
  localId: string
}

const props = defineProps<{
  ingredients: AdminRecipeIngredient[]
  pending?: boolean
}>()

const emit = defineEmits<{
  save: [ingredients: AdminRecipeIngredientInput[]]
}>()

const validationMessage = ref<string | null>(null)
const items = ref<EditableIngredient[]>([])

const shoppingCategories = ['Proteínas', 'Hortifruti', 'Outros', 'Temperos à gosto']
const ingredientRoles: Array<{ value: IngredientRole; label: string }> = [
  { value: 'main', label: 'main' },
  { value: 'complement', label: 'complement' },
  { value: 'critical', label: 'critical' },
  { value: 'seasoning', label: 'seasoning' },
]
const roundingModes: Array<{ value: RoundingMode; label: string }> = [
  { value: 'up', label: 'up' },
  { value: 'nearest', label: 'nearest' },
  { value: 'manual', label: 'manual' },
  { value: 'none', label: 'none' },
]

const canSave = computed(() => getValidationError() === null)

watch(
  () => props.ingredients,
  (nextIngredients) => {
    items.value = nextIngredients.map((ingredient) => ({
      localId: ingredient.id,
      name: ingredient.name,
      shoppingCategory: ingredient.shoppingCategory,
      ingredientRole: ingredient.ingredientRole,
      baseQuantity: ingredient.baseQuantity,
      unit: ingredient.unit,
      isCritical: ingredient.isCritical,
      isFreeSeasoning: ingredient.isFreeSeasoning,
      includeInShoppingList: ingredient.includeInShoppingList,
      roundingStep: ingredient.roundingStep,
      roundingMode: ingredient.roundingMode,
      displayName: ingredient.displayName,
      notes: ingredient.notes,
      sortOrder: ingredient.sortOrder,
    }))
  },
  { immediate: true },
)

function addIngredient() {
  items.value.push({
    localId: `new-${Date.now()}-${items.value.length}`,
    name: '',
    shoppingCategory: 'Outros',
    ingredientRole: 'complement',
    baseQuantity: null,
    unit: 'g',
    isCritical: false,
    isFreeSeasoning: false,
    includeInShoppingList: true,
    roundingStep: null,
    roundingMode: 'up',
    displayName: '',
    notes: '',
    sortOrder: items.value.length,
  })
}

function removeIngredient(index: number) {
  items.value.splice(index, 1)
}

function moveIngredient(index: number, direction: -1 | 1) {
  const targetIndex = index + direction
  if (targetIndex < 0 || targetIndex >= items.value.length) return

  const nextItems = [...items.value]
  const [item] = nextItems.splice(index, 1)
  if (!item) return

  nextItems.splice(targetIndex, 0, item)
  items.value = nextItems
}

function applyRoleDefaults(ingredient: EditableIngredient) {
  if (ingredient.ingredientRole === 'main') {
    ingredient.shoppingCategory = 'Proteínas'
    ingredient.includeInShoppingList = true
  }

  if (ingredient.ingredientRole === 'critical') {
    ingredient.isCritical = true
  }

  if (ingredient.ingredientRole === 'seasoning') {
    ingredient.shoppingCategory = 'Temperos à gosto'
    ingredient.isFreeSeasoning = true
    ingredient.baseQuantity = null
    ingredient.roundingStep = null
    ingredient.roundingMode = 'none'
  }
}

function submitIngredients() {
  const error = getValidationError()
  validationMessage.value = error

  if (error) return

  emit('save', normalizeItems())
}

function normalizeItems(): AdminRecipeIngredientInput[] {
  return items.value.map((ingredient, index) => {
    const isFreeSeasoning =
      ingredient.isFreeSeasoning || ingredient.ingredientRole === 'seasoning'
    const isCritical = ingredient.isCritical || ingredient.ingredientRole === 'critical'

    return {
      name: ingredient.name.trim(),
      shoppingCategory: ingredient.shoppingCategory.trim() || 'Outros',
      ingredientRole: ingredient.ingredientRole,
      baseQuantity: isFreeSeasoning ? null : normalizeNumber(ingredient.baseQuantity),
      unit: cleanOptionalText(ingredient.unit),
      isCritical,
      isFreeSeasoning,
      includeInShoppingList: ingredient.includeInShoppingList,
      roundingStep: isFreeSeasoning ? null : normalizeNumber(ingredient.roundingStep),
      roundingMode: isFreeSeasoning ? 'none' : ingredient.roundingMode,
      displayName: cleanOptionalText(ingredient.displayName),
      notes: cleanOptionalText(ingredient.notes),
      sortOrder: index,
    }
  })
}

function getValidationError() {
  if (items.value.length === 0) return null

  const namedItems = items.value.filter((ingredient) => ingredient.name.trim())

  if (namedItems.length !== items.value.length) return 'Remova ou preencha ingredientes sem nome.'

  if (!namedItems.some((ingredient) => ingredient.ingredientRole === 'main')) {
    return 'Marque um ingrediente como main para o cálculo da compra crua.'
  }

  for (const ingredient of namedItems) {
    const isFreeSeasoning =
      ingredient.isFreeSeasoning || ingredient.ingredientRole === 'seasoning'

    if (!ingredient.shoppingCategory.trim()) return 'Informe a categoria de compra.'
    if (!ingredient.unit?.trim() && !isFreeSeasoning) return 'Informe a unit do ingrediente.'
    if (!isFreeSeasoning && normalizeNumber(ingredient.baseQuantity) === null) {
      return 'Informe base_quantity dos ingredientes calculados.'
    }
  }

  return null
}

function cleanOptionalText(value: string | null) {
  return value?.trim() || null
}

function normalizeNumber(value: unknown) {
  if (value === null || value === '') return null

  const numericValue = Number(value)

  return Number.isNaN(numericValue) ? null : numericValue
}
</script>

<template>
  <section class="admin-form-section">
    <div class="admin-editor-header">
      <div>
        <p class="section-kicker">Ingredientes</p>
        <p class="admin-helper-text">
          Use main para o ingrediente principal. Temperos à gosto ficam sem quantidade calculada.
        </p>
      </div>

      <button class="secondary-button" type="button" @click="addIngredient">
        Adicionar ingrediente
      </button>
    </div>

    <div v-if="items.length === 0" class="empty-state">
      <p>Nenhum ingrediente cadastrado ainda.</p>
    </div>

    <article
      v-for="(ingredient, index) in items"
      :key="ingredient.localId"
      class="admin-nested-card"
    >
      <div class="admin-nested-card__top">
        <strong>Ingrediente {{ index + 1 }}</strong>
        <div class="admin-row-actions">
          <button
            class="secondary-button"
            type="button"
            :disabled="index === 0"
            @click="moveIngredient(index, -1)"
          >
            Subir
          </button>
          <button
            class="secondary-button"
            type="button"
            :disabled="index === items.length - 1"
            @click="moveIngredient(index, 1)"
          >
            Descer
          </button>
          <button class="secondary-button" type="button" @click="removeIngredient(index)">
            Remover
          </button>
        </div>
      </div>

      <div class="admin-form-grid">
        <div class="field">
          <label :for="`ingredient-name-${ingredient.localId}`">nome</label>
          <input :id="`ingredient-name-${ingredient.localId}`" v-model="ingredient.name" type="text">
        </div>

        <div class="field">
          <label :for="`ingredient-display-${ingredient.localId}`">display_name</label>
          <input :id="`ingredient-display-${ingredient.localId}`" v-model="ingredient.displayName" type="text">
        </div>

        <div class="field">
          <label :for="`ingredient-category-${ingredient.localId}`">categoria de compra</label>
          <select :id="`ingredient-category-${ingredient.localId}`" v-model="ingredient.shoppingCategory">
            <option v-for="category in shoppingCategories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>

        <div class="field">
          <label :for="`ingredient-role-${ingredient.localId}`">ingredient_role</label>
          <select
            :id="`ingredient-role-${ingredient.localId}`"
            v-model="ingredient.ingredientRole"
            @change="applyRoleDefaults(ingredient)"
          >
            <option v-for="role in ingredientRoles" :key="role.value" :value="role.value">
              {{ role.label }}
            </option>
          </select>
        </div>

        <div class="field">
          <label :for="`ingredient-base-${ingredient.localId}`">base_quantity</label>
          <input
            :id="`ingredient-base-${ingredient.localId}`"
            v-model.number="ingredient.baseQuantity"
            type="number"
            min="0"
            step="0.1"
            :disabled="ingredient.isFreeSeasoning || ingredient.ingredientRole === 'seasoning'"
          >
        </div>

        <div class="field">
          <label :for="`ingredient-unit-${ingredient.localId}`">unit</label>
          <input
            :id="`ingredient-unit-${ingredient.localId}`"
            v-model="ingredient.unit"
            type="text"
            placeholder="g, ml, colher"
            :disabled="ingredient.isFreeSeasoning || ingredient.ingredientRole === 'seasoning'"
          >
        </div>

        <div class="field">
          <label :for="`ingredient-rounding-step-${ingredient.localId}`">rounding_step</label>
          <input
            :id="`ingredient-rounding-step-${ingredient.localId}`"
            v-model.number="ingredient.roundingStep"
            type="number"
            min="0"
            step="0.1"
            :disabled="ingredient.isFreeSeasoning || ingredient.ingredientRole === 'seasoning'"
          >
        </div>

        <div class="field">
          <label :for="`ingredient-rounding-mode-${ingredient.localId}`">rounding_mode</label>
          <select
            :id="`ingredient-rounding-mode-${ingredient.localId}`"
            v-model="ingredient.roundingMode"
            :disabled="ingredient.isFreeSeasoning || ingredient.ingredientRole === 'seasoning'"
          >
            <option v-for="mode in roundingModes" :key="mode.value" :value="mode.value">
              {{ mode.label }}
            </option>
          </select>
        </div>
      </div>

      <div class="admin-boolean-grid">
        <label class="checkbox-field">
          <input v-model="ingredient.isCritical" type="checkbox">
          is_critical
        </label>

        <label class="checkbox-field">
          <input
            v-model="ingredient.isFreeSeasoning"
            type="checkbox"
            @change="applyRoleDefaults(ingredient)"
          >
          is_free_seasoning
        </label>

        <label class="checkbox-field">
          <input v-model="ingredient.includeInShoppingList" type="checkbox">
          include_in_shopping_list
        </label>
      </div>

      <div class="field">
        <label :for="`ingredient-notes-${ingredient.localId}`">notes</label>
        <textarea :id="`ingredient-notes-${ingredient.localId}`" v-model="ingredient.notes" rows="2" />
      </div>
    </article>

    <p v-if="validationMessage" class="form-error">{{ validationMessage }}</p>

    <button class="primary-button" type="button" :disabled="pending || !canSave" @click="submitIngredients">
      {{ pending ? 'Salvando...' : 'Salvar ingredientes' }}
    </button>
  </section>
</template>
