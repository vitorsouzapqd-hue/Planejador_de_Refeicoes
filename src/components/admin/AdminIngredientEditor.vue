<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type {
  AdminRecipeIngredient,
  AdminRecipeIngredientInput,
} from '../../composables/useAdminRecipes'
import { hasCompoundShoppingName } from '../../services/shoppingIngredientIdentity'
import type { Ingredient } from '../../types/ingredient'
import type { IngredientRole, RoundingMode } from '../../types/recipe'

type EditableIngredient = AdminRecipeIngredientInput & {
  localId: string
}

const props = defineProps<{
  ingredients: AdminRecipeIngredient[]
  masterIngredients?: Ingredient[]
  pending?: boolean
}>()

const emit = defineEmits<{
  save: [ingredients: AdminRecipeIngredientInput[]]
}>()

const validationMessage = ref<string | null>(null)
const items = ref<EditableIngredient[]>([])

const shoppingCategories = [
  'Proteínas',
  'Carboidratos',
  'Vegetais',
  'Frutas',
  'Laticínios',
  'Congelados',
  'Temperos e Condimentos',
  'Despensa',
  'Bebidas',
  'Utilidades',
  'Outros',
]
const ingredientRoles: Array<{ value: IngredientRole; label: string }> = [
  { value: 'main', label: 'Principal' },
  { value: 'complement', label: 'Complemento' },
  { value: 'critical', label: 'Sensível' },
  { value: 'seasoning', label: 'Tempero' },
]
const roundingModes: Array<{ value: RoundingMode; label: string }> = [
  { value: 'up', label: 'Arredondar para cima' },
  { value: 'nearest', label: 'Mais próximo' },
  { value: 'manual', label: 'Manual' },
  { value: 'none', label: 'Sem arredondamento' },
]

const canSave = computed(() => getValidationError() === null)

watch(
  () => props.ingredients,
  (nextIngredients) => {
    items.value = nextIngredients.map((ingredient) => ({
      localId: ingredient.id,
      ingredientId: ingredient.ingredientId,
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
    ingredientId: null,
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
    ingredient.shoppingCategory = 'Temperos e Condimentos'
    ingredient.isFreeSeasoning = true
    ingredient.baseQuantity = null
    ingredient.roundingStep = null
    ingredient.roundingMode = 'none'
  }
}

function setIngredientRole(ingredient: EditableIngredient, role: IngredientRole) {
  ingredient.ingredientRole = role
  applyRoleDefaults(ingredient)
}

function applyMasterIngredient(ingredient: EditableIngredient) {
  const masterIngredient = props.masterIngredients?.find((item) => item.id === ingredient.ingredientId)
  if (!masterIngredient) return

  ingredient.name = masterIngredient.name
  ingredient.displayName = masterIngredient.displayName ?? masterIngredient.name
  ingredient.shoppingCategory = masterIngredient.shoppingCategory
  ingredient.unit = masterIngredient.defaultUnit
  ingredient.roundingMode = masterIngredient.purchaseRules.defaultRoundingMode
  ingredient.roundingStep = masterIngredient.purchaseRules.defaultRoundingStep
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
      ingredientId: ingredient.ingredientId,
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
    return 'Marque um ingrediente como principal para o cálculo da compra crua.'
  }

  for (const ingredient of namedItems) {
    const isFreeSeasoning =
      ingredient.isFreeSeasoning || ingredient.ingredientRole === 'seasoning'

    if (!ingredient.shoppingCategory.trim()) return 'Informe a categoria de compra.'
    if (!ingredient.unit?.trim() && !isFreeSeasoning) return 'Informe a unidade do ingrediente.'
    if (
      ingredient.includeInShoppingList &&
      !isFreeSeasoning &&
      hasCompoundShoppingName(ingredient.displayName || ingredient.name)
    ) {
      return 'Ingredientes da Lista de Compras precisam ser individuais. Separe nomes compostos em linhas diferentes.'
    }
    if (ingredient.includeInShoppingList && !isFreeSeasoning && !ingredient.ingredientId) {
      return 'Selecione o ingrediente mestre para todo item que entra na Lista de Compras.'
    }
    if (!ingredient.ingredientId && findMasterIngredientByName(ingredient.name)) {
      return 'Selecione o ingrediente mestre quando ele já existir na base.'
    }
    if (!isFreeSeasoning && normalizeNumber(ingredient.baseQuantity) === null) {
      return 'Informe a quantidade base dos ingredientes calculados.'
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

function findMasterIngredientByName(name: string) {
  const normalizedName = normalize(name)

  return props.masterIngredients?.find((ingredient) => {
    const names = [
      ingredient.name,
      ingredient.displayName ?? '',
      ...ingredient.aliases,
    ].map(normalize)

    return names.includes(normalizedName)
  })
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
  <section class="admin-form-section">
    <div class="admin-editor-header">
      <div>
        <p class="section-kicker">Ingredientes</p>
        <p class="admin-helper-text">
          Use "principal" para o ingrediente principal. Temperos à gosto ficam sem quantidade calculada.
          Se o ingrediente ainda não existir, crie em
          <NuxtLink class="admin-inline-link" to="/admin/ingredientes/novo">Ingredientes</NuxtLink>.
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
            class="icon-button"
            type="button"
            :disabled="index === 0"
            :aria-label="`Subir ingrediente ${index + 1}`"
            title="Subir"
            @click="moveIngredient(index, -1)"
          >
            <BaseIcon name="chevron-up" />
          </button>
          <button
            class="icon-button"
            type="button"
            :disabled="index === items.length - 1"
            :aria-label="`Descer ingrediente ${index + 1}`"
            title="Descer"
            @click="moveIngredient(index, 1)"
          >
            <BaseIcon name="chevron-down" />
          </button>
          <button
            class="icon-button icon-button--danger"
            type="button"
            :aria-label="`Remover ingrediente ${index + 1}`"
            title="Remover"
            @click="removeIngredient(index)"
          >
            <BaseIcon name="trash" />
          </button>
        </div>
      </div>

      <div class="admin-form-grid">
        <div class="field">
          <label :for="`ingredient-master-${ingredient.localId}`">Ingrediente mestre</label>
          <select
            :id="`ingredient-master-${ingredient.localId}`"
            v-model="ingredient.ingredientId"
            @change="applyMasterIngredient(ingredient)"
          >
            <option :value="null">Sem vínculo</option>
            <option
              v-for="masterIngredient in masterIngredients"
              :key="masterIngredient.id"
              :value="masterIngredient.id"
            >
              {{ masterIngredient.displayName ?? masterIngredient.name }}
            </option>
          </select>
        </div>

        <div class="field">
          <label :for="`ingredient-name-${ingredient.localId}`">Nome</label>
          <input :id="`ingredient-name-${ingredient.localId}`" v-model="ingredient.name" type="text">
        </div>

        <div class="field">
          <label :for="`ingredient-display-${ingredient.localId}`">Nome de exibição</label>
          <input :id="`ingredient-display-${ingredient.localId}`" v-model="ingredient.displayName" type="text">
        </div>

        <div class="field">
          <label :for="`ingredient-category-${ingredient.localId}`">Categoria de compra</label>
          <select :id="`ingredient-category-${ingredient.localId}`" v-model="ingredient.shoppingCategory">
            <option v-for="category in shoppingCategories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>

        <div class="field">
          <label>Função na receita</label>
          <div class="admin-tabs" role="radiogroup" :aria-label="`Função do ingrediente ${index + 1}`">
            <button
              v-for="role in ingredientRoles"
              :key="role.value"
              class="admin-tab"
              :class="{ 'admin-tab--active': ingredient.ingredientRole === role.value }"
              type="button"
              role="radio"
              :aria-checked="ingredient.ingredientRole === role.value"
              @click="setIngredientRole(ingredient, role.value)"
            >
              {{ role.label }}
            </button>
          </div>
        </div>

        <div class="field">
          <label :for="`ingredient-base-${ingredient.localId}`">Quantidade base</label>
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
          <label :for="`ingredient-unit-${ingredient.localId}`">Unidade</label>
          <input
            :id="`ingredient-unit-${ingredient.localId}`"
            v-model="ingredient.unit"
            type="text"
            placeholder="g, ml, colher"
            :disabled="ingredient.isFreeSeasoning || ingredient.ingredientRole === 'seasoning'"
          >
        </div>

        <div class="field">
          <label :for="`ingredient-rounding-step-${ingredient.localId}`">Passo de arredondamento</label>
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
          <label :for="`ingredient-rounding-mode-${ingredient.localId}`">Modo de arredondamento</label>
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
          Ingrediente sensível
        </label>

        <label class="checkbox-field">
          <input
            v-model="ingredient.isFreeSeasoning"
            type="checkbox"
            @change="applyRoleDefaults(ingredient)"
          >
          Tempero livre
        </label>

        <label class="checkbox-field">
          <input v-model="ingredient.includeInShoppingList" type="checkbox">
          Entrar na Lista de Compras
        </label>
      </div>

      <div class="field">
        <label :for="`ingredient-notes-${ingredient.localId}`">Observações</label>
        <textarea :id="`ingredient-notes-${ingredient.localId}`" v-model="ingredient.notes" rows="2" />
      </div>
    </article>

    <p v-if="validationMessage" class="form-error">{{ validationMessage }}</p>

    <button class="primary-button" type="button" :disabled="pending || !canSave" @click="submitIngredients">
      {{ pending ? 'Salvando...' : 'Salvar ingredientes' }}
    </button>
  </section>
</template>
