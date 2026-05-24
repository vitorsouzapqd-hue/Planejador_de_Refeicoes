<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import type { Ingredient, IngredientHouseholdMeasure } from '../../types/ingredient'
import type {
  AdminIngredientInput,
  AdminIngredientMeasureInput,
} from '../../composables/useAdminIngredients'
import {
  ingredientShoppingCategories,
  roundingModes,
} from '../../composables/useAdminIngredients'

type EditableMeasure = AdminIngredientMeasureInput & {
  localId: string
}

const props = defineProps<{
  initialIngredient?: Ingredient | null
  pending?: boolean
  submitLabel: string
}>()

const emit = defineEmits<{
  submit: [input: AdminIngredientInput, measures: AdminIngredientMeasureInput[]]
}>()

const aliasesText = ref('')
const validationMessage = ref<string | null>(null)
const measures = ref<EditableMeasure[]>([])

const form = reactive<AdminIngredientInput>({
  name: '',
  slug: '',
  displayName: '',
  aliases: [],
  shoppingCategory: 'Outros',
  defaultUnit: 'g',
  isActive: true,
  kcalPer100g: null,
  proteinGPer100g: null,
  carbsGPer100g: null,
  fatGPer100g: null,
  fiberGPer100g: null,
  sodiumMgPer100g: null,
  nutritionSource: '',
  nutritionNotes: '',
  defaultRoundingMode: 'up',
  defaultRoundingStep: null,
  buyInWholePackages: false,
  packageSizeG: null,
  packageLabel: '',
  purchaseIncrementG: null,
  defaultCorrectionFactor: null,
  ediblePortionPercent: null,
  correctionNotes: '',
  notes: '',
  sortOrder: 0,
})

const canSubmit = computed(() => getValidationError() === null)

watch(
  () => props.initialIngredient,
  (ingredient) => {
    if (!ingredient) return

    form.name = ingredient.name
    form.slug = ingredient.slug
    form.displayName = ingredient.displayName
    aliasesText.value = ingredient.aliases.join(', ')
    form.shoppingCategory = ingredient.shoppingCategory
    form.defaultUnit = ingredient.defaultUnit
    form.isActive = ingredient.isActive
    form.kcalPer100g = ingredient.nutrition.kcalPer100g
    form.proteinGPer100g = ingredient.nutrition.proteinGPer100g
    form.carbsGPer100g = ingredient.nutrition.carbsGPer100g
    form.fatGPer100g = ingredient.nutrition.fatGPer100g
    form.fiberGPer100g = ingredient.nutrition.fiberGPer100g
    form.sodiumMgPer100g = ingredient.nutrition.sodiumMgPer100g
    form.nutritionSource = ingredient.nutrition.nutritionSource
    form.nutritionNotes = ingredient.nutrition.nutritionNotes
    form.defaultRoundingMode = ingredient.purchaseRules.defaultRoundingMode
    form.defaultRoundingStep = ingredient.purchaseRules.defaultRoundingStep
    form.buyInWholePackages = ingredient.purchaseRules.buyInWholePackages
    form.packageSizeG = ingredient.purchaseRules.packageSizeG
    form.packageLabel = ingredient.purchaseRules.packageLabel
    form.purchaseIncrementG = ingredient.purchaseRules.purchaseIncrementG
    form.defaultCorrectionFactor =
      ingredient.correctionFactors.defaultCorrectionFactor
    form.ediblePortionPercent =
      ingredient.correctionFactors.ediblePortionPercent
    form.correctionNotes = ingredient.correctionFactors.correctionNotes
    form.notes = ingredient.notes
    form.sortOrder = ingredient.sortOrder
    measures.value = (ingredient.householdMeasures ?? []).map(mapMeasureToEditable)
  },
  { immediate: true },
)

function addMeasure() {
  measures.value.push({
    localId: `new-${Date.now()}-${measures.value.length}`,
    measureName: '',
    gramsEquivalent: null,
    mlEquivalent: null,
    isDefault: measures.value.length === 0,
    notes: '',
    sortOrder: measures.value.length,
  })
}

function removeMeasure(index: number) {
  measures.value.splice(index, 1)
}

function moveMeasure(index: number, direction: -1 | 1) {
  const targetIndex = index + direction
  if (targetIndex < 0 || targetIndex >= measures.value.length) return

  const nextMeasures = [...measures.value]
  const [measure] = nextMeasures.splice(index, 1)
  if (!measure) return

  nextMeasures.splice(targetIndex, 0, measure)
  measures.value = nextMeasures
}

function updateSlugFromName() {
  if (form.slug) return
  form.slug = slugify(form.name)
}

function submitForm() {
  const error = getValidationError()
  validationMessage.value = error

  if (error) return

  emit('submit', normalizeForm(), normalizeMeasures())
}

function normalizeForm(): AdminIngredientInput {
  return {
    ...form,
    name: form.name.trim(),
    slug: form.slug.trim(),
    displayName: cleanOptionalText(form.displayName),
    aliases: aliasesText.value
      .split(',')
      .map((alias) => alias.trim())
      .filter(Boolean),
    defaultUnit: form.defaultUnit.trim(),
    nutritionSource: cleanOptionalText(form.nutritionSource),
    nutritionNotes: cleanOptionalText(form.nutritionNotes),
    packageLabel: cleanOptionalText(form.packageLabel),
    correctionNotes: cleanOptionalText(form.correctionNotes),
    notes: cleanOptionalText(form.notes),
    sortOrder: cleanOptionalNumber(form.sortOrder) ?? 0,
    kcalPer100g: cleanOptionalNumber(form.kcalPer100g),
    proteinGPer100g: cleanOptionalNumber(form.proteinGPer100g),
    carbsGPer100g: cleanOptionalNumber(form.carbsGPer100g),
    fatGPer100g: cleanOptionalNumber(form.fatGPer100g),
    fiberGPer100g: cleanOptionalNumber(form.fiberGPer100g),
    sodiumMgPer100g: cleanOptionalNumber(form.sodiumMgPer100g),
    defaultRoundingStep: cleanOptionalNumber(form.defaultRoundingStep),
    packageSizeG: form.buyInWholePackages
      ? cleanOptionalNumber(form.packageSizeG)
      : null,
    purchaseIncrementG: cleanOptionalNumber(form.purchaseIncrementG),
    defaultCorrectionFactor: cleanOptionalNumber(form.defaultCorrectionFactor),
    ediblePortionPercent: cleanOptionalNumber(form.ediblePortionPercent),
  }
}

function normalizeMeasures(): AdminIngredientMeasureInput[] {
  return measures.value.map((measure, index) => ({
    measureName: measure.measureName.trim(),
    gramsEquivalent: cleanOptionalNumber(measure.gramsEquivalent),
    mlEquivalent: cleanOptionalNumber(measure.mlEquivalent),
    isDefault: measure.isDefault,
    notes: cleanOptionalText(measure.notes),
    sortOrder: index,
  }))
}

function getValidationError() {
  if (!form.name.trim()) return 'Informe o nome do ingrediente.'
  if (!form.slug.trim()) return 'Informe o slug do ingrediente.'
  if (!form.shoppingCategory) return 'Escolha a categoria de compra.'
  if (!form.defaultUnit.trim()) return 'Informe a unidade padrão.'
  if (Number(form.sortOrder) < 0) return 'A ordem precisa ser maior ou igual a zero.'
  if (form.buyInWholePackages && !cleanOptionalNumber(form.packageSizeG)) {
    return 'Informe o tamanho do pacote quando a compra em pacote fechado estiver ativada.'
  }

  if (!isOptionalPositive(form.kcalPer100g)) return 'Kcal por 100g precisa ser maior ou igual a zero.'
  if (!isOptionalPositive(form.proteinGPer100g)) return 'Proteína por 100g precisa ser maior ou igual a zero.'
  if (!isOptionalPositive(form.carbsGPer100g)) return 'Carboidratos por 100g precisa ser maior ou igual a zero.'
  if (!isOptionalPositive(form.fatGPer100g)) return 'Gorduras por 100g precisa ser maior ou igual a zero.'
  if (!isOptionalPositive(form.fiberGPer100g)) return 'Fibras por 100g precisa ser maior ou igual a zero.'
  if (!isOptionalPositive(form.sodiumMgPer100g)) return 'Sódio por 100g precisa ser maior ou igual a zero.'
  if (!isOptionalPositive(form.defaultRoundingStep)) return 'Passo de arredondamento precisa ser maior ou igual a zero.'
  if (!isOptionalPositive(form.packageSizeG)) return 'Tamanho do pacote precisa ser maior ou igual a zero.'
  if (!isOptionalPositive(form.purchaseIncrementG)) return 'Incremento de compra precisa ser maior ou igual a zero.'
  if (!isOptionalPositive(form.defaultCorrectionFactor)) return 'Fator de correção precisa ser maior ou igual a zero.'
  if (!isOptionalPositive(form.ediblePortionPercent)) return 'Parte comestível precisa ser maior ou igual a zero.'

  const filledMeasures = measures.value.filter((measure) => measure.measureName.trim())
  if (filledMeasures.length !== measures.value.length) return 'Remova ou preencha medidas caseiras sem nome.'

  for (const measure of filledMeasures) {
    const grams = cleanOptionalNumber(measure.gramsEquivalent)
    const ml = cleanOptionalNumber(measure.mlEquivalent)

    if (grams === null && ml === null) return 'Informe gramas ou ml em cada medida caseira.'
    if (grams !== null && grams < 0) return 'Equivalente em gramas precisa ser maior ou igual a zero.'
    if (ml !== null && ml < 0) return 'Equivalente em ml precisa ser maior ou igual a zero.'
  }

  return null
}

function mapMeasureToEditable(measure: IngredientHouseholdMeasure): EditableMeasure {
  return {
    localId: measure.id,
    measureName: measure.measureName,
    gramsEquivalent: measure.gramsEquivalent,
    mlEquivalent: measure.mlEquivalent,
    isDefault: measure.isDefault,
    notes: measure.notes,
    sortOrder: measure.sortOrder,
  }
}

function cleanOptionalText(value: string | null) {
  return value?.trim() || null
}

function cleanOptionalNumber(value: unknown) {
  if (value === null || value === '') return null

  const numericValue = Number(value)

  return Number.isNaN(numericValue) ? null : numericValue
}

function isOptionalPositive(value: unknown) {
  const numericValue = cleanOptionalNumber(value)

  return numericValue === null || numericValue >= 0
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
      <p class="section-kicker">Informações básicas</p>

      <div class="admin-form-grid">
        <div class="field">
          <label for="ingredient-name">Nome</label>
          <input id="ingredient-name" v-model="form.name" type="text" required @blur="updateSlugFromName">
        </div>

        <div class="field">
          <label for="ingredient-slug">Slug</label>
          <input id="ingredient-slug" v-model="form.slug" type="text" required>
        </div>

        <div class="field">
          <label for="ingredient-display-name">Nome de exibição</label>
          <input id="ingredient-display-name" v-model="form.displayName" type="text">
        </div>

        <div class="field">
          <label for="ingredient-category">Categoria de compra</label>
          <select id="ingredient-category" v-model="form.shoppingCategory" required>
            <option
              v-for="category in ingredientShoppingCategories"
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>
          </select>
        </div>

        <div class="field">
          <label for="ingredient-default-unit">Unidade padrão</label>
          <input id="ingredient-default-unit" v-model="form.defaultUnit" type="text" required>
        </div>

        <label class="checkbox-field checkbox-field--aligned">
          <input v-model="form.isActive" type="checkbox">
          Ativo
        </label>

        <div class="field">
          <label for="ingredient-sort-order">Ordem</label>
          <input id="ingredient-sort-order" v-model.number="form.sortOrder" type="number" min="0" step="1">
        </div>
      </div>

      <div class="field">
        <label for="ingredient-aliases">Aliases/sinônimos</label>
        <input id="ingredient-aliases" v-model="aliasesText" type="text" placeholder="separe por vírgulas">
      </div>

      <div class="field">
        <label for="ingredient-notes">Observações</label>
        <textarea id="ingredient-notes" v-model="form.notes" rows="3" />
      </div>
    </section>

    <section class="admin-form-section">
      <p class="section-kicker">Tabela nutricional por 100g</p>

      <div class="admin-form-grid">
        <div class="field">
          <label for="ingredient-kcal">Kcal por 100g</label>
          <input id="ingredient-kcal" v-model.number="form.kcalPer100g" type="number" min="0" step="0.1">
        </div>

        <div class="field">
          <label for="ingredient-protein">Proteína por 100g</label>
          <input id="ingredient-protein" v-model.number="form.proteinGPer100g" type="number" min="0" step="0.1">
        </div>

        <div class="field">
          <label for="ingredient-carbs">Carboidratos por 100g</label>
          <input id="ingredient-carbs" v-model.number="form.carbsGPer100g" type="number" min="0" step="0.1">
        </div>

        <div class="field">
          <label for="ingredient-fat">Gorduras por 100g</label>
          <input id="ingredient-fat" v-model.number="form.fatGPer100g" type="number" min="0" step="0.1">
        </div>

        <div class="field">
          <label for="ingredient-fiber">Fibras por 100g</label>
          <input id="ingredient-fiber" v-model.number="form.fiberGPer100g" type="number" min="0" step="0.1">
        </div>

        <div class="field">
          <label for="ingredient-sodium">Sódio por 100g</label>
          <input id="ingredient-sodium" v-model.number="form.sodiumMgPer100g" type="number" min="0" step="0.1">
        </div>
      </div>

      <div class="admin-form-grid">
        <div class="field">
          <label for="ingredient-nutrition-source">Fonte da informação</label>
          <input id="ingredient-nutrition-source" v-model="form.nutritionSource" type="text">
        </div>

        <div class="field">
          <label for="ingredient-nutrition-notes">Observações nutricionais</label>
          <textarea id="ingredient-nutrition-notes" v-model="form.nutritionNotes" rows="2" />
        </div>
      </div>
    </section>

    <section class="admin-form-section">
      <div class="admin-editor-header">
        <div>
          <p class="section-kicker">Medidas caseiras</p>
          <p class="admin-helper-text">Cadastre colheres, xícaras, unidades ou outras referências usadas na cozinha.</p>
        </div>

        <button class="secondary-button" type="button" @click="addMeasure">
          Adicionar medida
        </button>
      </div>

      <div v-if="measures.length === 0" class="empty-state">
        <p>Nenhuma medida caseira cadastrada.</p>
      </div>

      <article
        v-for="(measure, index) in measures"
        :key="measure.localId"
        class="admin-nested-card"
      >
        <div class="admin-nested-card__top">
          <strong>Medida {{ index + 1 }}</strong>
          <div class="admin-row-actions">
            <button class="secondary-button" type="button" :disabled="index === 0" @click="moveMeasure(index, -1)">
              Subir
            </button>
            <button class="secondary-button" type="button" :disabled="index === measures.length - 1" @click="moveMeasure(index, 1)">
              Descer
            </button>
            <button class="secondary-button" type="button" @click="removeMeasure(index)">
              Remover
            </button>
          </div>
        </div>

        <div class="admin-form-grid">
          <div class="field">
            <label :for="`measure-name-${measure.localId}`">Nome da medida</label>
            <input :id="`measure-name-${measure.localId}`" v-model="measure.measureName" type="text">
          </div>

          <div class="field">
            <label :for="`measure-grams-${measure.localId}`">Equivalente em gramas</label>
            <input :id="`measure-grams-${measure.localId}`" v-model.number="measure.gramsEquivalent" type="number" min="0" step="0.1">
          </div>

          <div class="field">
            <label :for="`measure-ml-${measure.localId}`">Equivalente em ml</label>
            <input :id="`measure-ml-${measure.localId}`" v-model.number="measure.mlEquivalent" type="number" min="0" step="0.1">
          </div>

          <label class="checkbox-field checkbox-field--aligned">
            <input v-model="measure.isDefault" type="checkbox">
            Medida padrão
          </label>
        </div>

        <div class="field">
          <label :for="`measure-notes-${measure.localId}`">Observação</label>
          <textarea :id="`measure-notes-${measure.localId}`" v-model="measure.notes" rows="2" />
        </div>
      </article>
    </section>

    <section class="admin-form-section">
      <p class="section-kicker">Compra e arredondamento</p>

      <div class="admin-form-grid">
        <div class="field">
          <label for="ingredient-rounding-mode">Modo de arredondamento padrão</label>
          <select id="ingredient-rounding-mode" v-model="form.defaultRoundingMode">
            <option v-for="mode in roundingModes" :key="mode" :value="mode">
              {{ mode }}
            </option>
          </select>
        </div>

        <div class="field">
          <label for="ingredient-rounding-step">Passo de arredondamento</label>
          <input id="ingredient-rounding-step" v-model.number="form.defaultRoundingStep" type="number" min="0" step="0.1">
        </div>

        <label class="checkbox-field checkbox-field--aligned">
          <input v-model="form.buyInWholePackages" type="checkbox">
          Compra em pacote fechado
        </label>

        <div class="field">
          <label for="ingredient-package-size">Tamanho do pacote em gramas</label>
          <input
            id="ingredient-package-size"
            v-model.number="form.packageSizeG"
            type="number"
            min="0"
            step="0.1"
            :required="form.buyInWholePackages"
          >
        </div>

        <div class="field">
          <label for="ingredient-package-label">Rótulo do pacote</label>
          <input id="ingredient-package-label" v-model="form.packageLabel" type="text" placeholder="pacote de 1kg">
        </div>

        <div class="field">
          <label for="ingredient-purchase-increment">Incremento de compra em gramas</label>
          <input id="ingredient-purchase-increment" v-model.number="form.purchaseIncrementG" type="number" min="0" step="0.1">
        </div>
      </div>

      <div class="field">
        <label for="ingredient-buy-notes">Observações de compra</label>
        <textarea id="ingredient-buy-notes" v-model="form.notes" rows="2" />
      </div>
    </section>

    <section class="admin-form-section">
      <p class="section-kicker">Fator de correção</p>

      <div class="admin-form-grid">
        <div class="field">
          <label for="ingredient-correction-factor">Fator de correção padrão</label>
          <input id="ingredient-correction-factor" v-model.number="form.defaultCorrectionFactor" type="number" min="0" step="0.01">
        </div>

        <div class="field">
          <label for="ingredient-edible-percent">Percentual de parte comestível</label>
          <input id="ingredient-edible-percent" v-model.number="form.ediblePortionPercent" type="number" min="0" max="100" step="0.1">
        </div>
      </div>

      <div class="field">
        <label for="ingredient-correction-notes">Observações de correção</label>
        <textarea id="ingredient-correction-notes" v-model="form.correctionNotes" rows="3" />
      </div>
    </section>

    <p v-if="validationMessage" class="form-error">{{ validationMessage }}</p>

    <button class="primary-button" type="submit" :disabled="pending || !canSubmit">
      {{ pending ? 'Salvando...' : submitLabel }}
    </button>
  </form>
</template>
