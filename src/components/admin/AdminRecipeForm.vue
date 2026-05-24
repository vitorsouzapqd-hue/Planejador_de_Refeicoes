<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import type {
  AdminCategory,
  AdminRecipe,
  AdminRecipeInput,
  AdminTag,
} from '../../composables/useAdminRecipes'

const props = defineProps<{
  initialRecipe?: AdminRecipe | null
  categories: AdminCategory[]
  tags: AdminTag[]
  pending?: boolean
  submitLabel: string
}>()

const emit = defineEmits<{
  submit: [input: AdminRecipeInput]
}>()

const validationMessage = ref<string | null>(null)
const typeSuggestions = ['frango', 'carne', 'suino', 'peixe', 'ovos', 'arroz', 'batata', 'legumes', 'fruta']

const form = reactive<AdminRecipeInput>({
  categoryId: null,
  name: '',
  slug: '',
  type: 'frango',
  status: 'draft',
  imagePath: '',
  shortDescription: '',
  baseRawWeightG: 1000,
  baseCleanWeightG: null,
  baseReadyWeightG: 700,
  cookingMethod: '',
  correctionFactor: null,
  cookingFactor: null,
  baseYieldNote: '',
  referenceVideoUrl: '',
  referenceVideoTitle: '',
  referenceVideoSource: '',
  referenceVideoNotes: '',
  costLevel: 2,
  timeLevel: 2,
  workLevel: 2,
  practicalityLevel: 3,
  freezesWell: true,
  storageInstructions: '',
  reheatInstructions: '',
  lockedRecipeWarning:
    'Siga a receita como está. Não adicione óleo, azeite, creme, requeijão, queijo, molhos ou ingredientes extras fora da receita.',
  kcalPer100g: null,
  proteinGPer100g: null,
  carbsGPer100g: null,
  fatGPer100g: null,
  fiberGPer100g: null,
  sodiumMgPer100g: null,
  nutritionNotes: '',
  tagIds: [],
  sortOrder: 0,
})

const defaultCategoryId = computed(() => {
  return props.categories.find((category) => category.slug === 'proteinas')?.id ?? props.categories[0]?.id ?? null
})

watch(
  () => props.categories,
  () => {
    if (!form.categoryId) {
      form.categoryId = defaultCategoryId.value
    }
  },
  { immediate: true },
)

watch(
  () => props.initialRecipe,
  (recipe) => {
    if (!recipe) {
      form.categoryId = defaultCategoryId.value
      return
    }

    form.categoryId = recipe.categoryId
    form.name = recipe.name
    form.slug = recipe.slug
    form.type = recipe.type
    form.status = recipe.status
    form.imagePath = recipe.imagePath
    form.shortDescription = recipe.shortDescription
    form.baseRawWeightG = recipe.baseRawWeightG
    form.baseCleanWeightG = recipe.baseCleanWeightG
    form.baseReadyWeightG = recipe.baseReadyWeightG
    form.cookingMethod = recipe.cookingMethod
    form.correctionFactor = recipe.correctionFactor
    form.cookingFactor = recipe.cookingFactor
    form.baseYieldNote = recipe.baseYieldNote
    form.referenceVideoUrl = recipe.referenceVideoUrl
    form.referenceVideoTitle = recipe.referenceVideoTitle
    form.referenceVideoSource = recipe.referenceVideoSource
    form.referenceVideoNotes = recipe.referenceVideoNotes
    form.costLevel = recipe.costLevel
    form.timeLevel = recipe.timeLevel
    form.workLevel = recipe.workLevel
    form.practicalityLevel = recipe.practicalityLevel
    form.freezesWell = recipe.freezesWell
    form.storageInstructions = recipe.storageInstructions
    form.reheatInstructions = recipe.reheatInstructions
    form.lockedRecipeWarning = recipe.lockedRecipeWarning
    form.kcalPer100g = recipe.kcalPer100g
    form.proteinGPer100g = recipe.proteinGPer100g
    form.carbsGPer100g = recipe.carbsGPer100g
    form.fatGPer100g = recipe.fatGPer100g
    form.fiberGPer100g = recipe.fiberGPer100g
    form.sodiumMgPer100g = recipe.sodiumMgPer100g
    form.nutritionNotes = recipe.nutritionNotes
    form.tagIds = [...recipe.tagIds]
    form.sortOrder = recipe.sortOrder
  },
  { immediate: true },
)

const canSubmit = computed(() => {
  return getValidationError() === null
})

function updateSlugFromName() {
  if (form.slug) return

  form.slug = slugify(form.name)
}

function toggleTag(tagId: string) {
  form.tagIds = form.tagIds.includes(tagId)
    ? form.tagIds.filter((currentTagId) => currentTagId !== tagId)
    : [...form.tagIds, tagId]
}

function submitForm() {
  const error = getValidationError()
  validationMessage.value = error

  if (error) return

  emit('submit', {
    ...form,
    categoryId: form.categoryId,
    name: form.name.trim(),
    slug: form.slug.trim(),
    imagePath: cleanOptionalText(form.imagePath),
    shortDescription: cleanOptionalText(form.shortDescription),
    referenceVideoUrl: cleanOptionalText(form.referenceVideoUrl),
    referenceVideoTitle: cleanOptionalText(form.referenceVideoTitle),
    referenceVideoSource: cleanOptionalText(form.referenceVideoSource),
    referenceVideoNotes: cleanOptionalText(form.referenceVideoNotes),
    baseYieldNote: cleanOptionalText(form.baseYieldNote),
    baseCleanWeightG: cleanOptionalNumber(form.baseCleanWeightG),
    cookingMethod: cleanOptionalText(form.cookingMethod),
    correctionFactor: cleanOptionalNumber(form.correctionFactor),
    cookingFactor: cleanOptionalNumber(form.cookingFactor),
    storageInstructions: cleanOptionalText(form.storageInstructions),
    reheatInstructions: cleanOptionalText(form.reheatInstructions),
    lockedRecipeWarning: cleanOptionalText(form.lockedRecipeWarning),
    kcalPer100g: cleanOptionalNumber(form.kcalPer100g),
    proteinGPer100g: cleanOptionalNumber(form.proteinGPer100g),
    carbsGPer100g: cleanOptionalNumber(form.carbsGPer100g),
    fatGPer100g: cleanOptionalNumber(form.fatGPer100g),
    fiberGPer100g: cleanOptionalNumber(form.fiberGPer100g),
    sodiumMgPer100g: cleanOptionalNumber(form.sodiumMgPer100g),
    nutritionNotes: cleanOptionalText(form.nutritionNotes),
    type: cleanOptionalText(form.type),
    tagIds: [...form.tagIds],
    sortOrder: cleanOptionalNumber(form.sortOrder) ?? 0,
  })
}

function getValidationError() {
  if (!form.name.trim()) return 'Informe o nome da receita.'
  if (!form.slug.trim()) return 'Informe o slug da receita.'
  if (!form.categoryId) return 'Escolha uma categoria.'
  if (!form.status) return 'Escolha o status.'
  if (!form.baseRawWeightG || form.baseRawWeightG <= 0) return 'Informe o rendimento base cru.'
  if (!form.baseReadyWeightG || form.baseReadyWeightG <= 0) return 'Informe o rendimento pronto estimado.'
  if (!isOptionalPositive(form.baseCleanWeightG)) return 'Peso limpo precisa ser maior ou igual a zero.'
  if (!isOptionalPositive(form.correctionFactor)) return 'Fator de correcao precisa ser maior ou igual a zero.'
  if (!isOptionalPositive(form.cookingFactor)) return 'Fator de coccao precisa ser maior ou igual a zero.'
  if (!isLevelValid(form.costLevel)) return 'Custo precisa estar entre 1 e 4.'
  if (!isLevelValid(form.timeLevel)) return 'Tempo de Preparo precisa estar entre 1 e 4.'
  if (!isLevelValid(form.workLevel)) return 'Dificuldade precisa estar entre 1 e 4.'
  if (!isLevelValid(form.practicalityLevel)) return 'Versatilidade precisa estar entre 1 e 4.'
  if (!isOptionalPositive(form.kcalPer100g)) return 'Kcal por 100g precisa ser maior ou igual a zero.'
  if (!isOptionalPositive(form.proteinGPer100g)) return 'Proteína por 100g precisa ser maior ou igual a zero.'
  if (!isOptionalPositive(form.carbsGPer100g)) return 'Carboidratos por 100g precisa ser maior ou igual a zero.'
  if (!isOptionalPositive(form.fatGPer100g)) return 'Gorduras por 100g precisa ser maior ou igual a zero.'
  if (!isOptionalPositive(form.fiberGPer100g)) return 'Fibras por 100g precisa ser maior ou igual a zero.'
  if (!isOptionalPositive(form.sodiumMgPer100g)) return 'Sódio por 100g precisa ser maior ou igual a zero.'
  if (!isOptionalUrl(form.referenceVideoUrl)) return 'Informe uma URL válida para o vídeo de referência.'

  return null
}

function isLevelValid(level: number | null) {
  return level === null || (Number.isInteger(level) && level >= 1 && level <= 4)
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

function isOptionalUrl(value: string | null) {
  const cleanedValue = cleanOptionalText(value)
  if (!cleanedValue) return true

  try {
    const url = new URL(cleanedValue)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
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
          <label for="recipe-name">Nome</label>
          <input id="recipe-name" v-model="form.name" type="text" required @blur="updateSlugFromName">
        </div>

        <div class="field">
          <label for="recipe-slug">Slug</label>
          <input id="recipe-slug" v-model="form.slug" type="text" required>
        </div>

        <div class="field">
          <label for="recipe-category">Categoria</label>
          <select id="recipe-category" v-model="form.categoryId" required>
            <option :value="null" disabled>Escolha uma categoria</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}{{ category.isActive ? '' : ' (inativa)' }}
            </option>
          </select>
        </div>

        <div class="field">
          <label for="recipe-type">Tipo</label>
          <input id="recipe-type" v-model="form.type" type="text" list="recipe-type-options" placeholder="frango, carne, peixe">
          <datalist id="recipe-type-options">
            <option v-for="type in typeSuggestions" :key="type" :value="type" />
          </datalist>
        </div>

        <div class="field">
          <label for="recipe-status">Status</label>
          <select id="recipe-status" v-model="form.status" required>
            <option value="draft">draft</option>
            <option value="published">published</option>
            <option value="archived">archived</option>
          </select>
        </div>

        <div class="field">
          <label for="recipe-image">Foto principal</label>
          <input id="recipe-image" v-model="form.imagePath" type="text" placeholder="URL ou caminho no bucket">
        </div>

        <div class="field">
          <label for="recipe-sort-order">Ordem de exibição</label>
          <input id="recipe-sort-order" v-model.number="form.sortOrder" type="number" step="1">
        </div>
      </div>

      <div class="field">
        <label for="recipe-description">Descrição curta</label>
        <textarea id="recipe-description" v-model="form.shortDescription" rows="3" />
      </div>
    </section>

    <section class="admin-form-section">
      <p class="section-kicker">Rendimento e preparo</p>

      <div class="admin-form-grid">
        <div class="field">
          <label for="base-raw">Peso cru base (g)</label>
          <input id="base-raw" v-model.number="form.baseRawWeightG" type="number" min="1" required>
        </div>

        <div class="field">
          <label for="base-clean">Peso limpo base (g), opcional</label>
          <input id="base-clean" v-model.number="form.baseCleanWeightG" type="number" min="0" step="0.1">
        </div>

        <div class="field">
          <label for="base-ready">Peso pronto base (g)</label>
          <input id="base-ready" v-model.number="form.baseReadyWeightG" type="number" min="1" required>
        </div>

        <div class="field">
          <label for="cooking-method">Método de preparo</label>
          <input id="cooking-method" v-model="form.cookingMethod" type="text">
        </div>

        <div class="field">
          <label for="correction-factor">Fator de correção, opcional</label>
          <input id="correction-factor" v-model.number="form.correctionFactor" type="number" min="0" step="0.01">
        </div>

        <div class="field">
          <label for="cooking-factor">Fator de cocção, opcional</label>
          <input id="cooking-factor" v-model.number="form.cookingFactor" type="number" min="0" step="0.01">
        </div>
      </div>

      <div class="field">
        <label for="base-yield-note">Observação de rendimento</label>
        <textarea id="base-yield-note" v-model="form.baseYieldNote" rows="2" />
      </div>
    </section>

    <section class="admin-form-section">
      <p class="section-kicker">Vídeo de referência</p>
      <p class="admin-helper-text">
        Use o vídeo apenas como referência visual. Siga as quantidades cadastradas nesta receita.
      </p>

      <div class="admin-form-grid">
        <div class="field">
          <label for="reference-video-url">URL do vídeo</label>
          <input id="reference-video-url" v-model="form.referenceVideoUrl" type="url" placeholder="https://">
        </div>

        <div class="field">
          <label for="reference-video-title">Título do vídeo</label>
          <input id="reference-video-title" v-model="form.referenceVideoTitle" type="text">
        </div>

        <div class="field">
          <label for="reference-video-source">Fonte do vídeo</label>
          <input id="reference-video-source" v-model="form.referenceVideoSource" type="text">
        </div>
      </div>

      <div class="field">
        <label for="reference-video-notes">Observações do vídeo</label>
        <textarea id="reference-video-notes" v-model="form.referenceVideoNotes" rows="2" />
      </div>
    </section>

    <section class="admin-form-section">
      <p class="section-kicker">Atributos da receita</p>

      <div class="admin-form-grid admin-form-grid--four">
        <div class="field">
          <label for="cost">Custo</label>
          <input id="cost" v-model.number="form.costLevel" type="number" min="1" max="4">
        </div>

        <div class="field">
          <label for="time">Tempo de Preparo</label>
          <input id="time" v-model.number="form.timeLevel" type="number" min="1" max="4">
        </div>

        <div class="field">
          <label for="work">Dificuldade</label>
          <input id="work" v-model.number="form.workLevel" type="number" min="1" max="4">
        </div>

        <div class="field">
          <label for="practicality">Versatilidade</label>
          <input id="practicality" v-model.number="form.practicalityLevel" type="number" min="1" max="4">
        </div>
      </div>

      <label class="checkbox-field">
        <input v-model="form.freezesWell" type="checkbox">
        Congela bem
      </label>
    </section>

    <section class="admin-form-section">
      <p class="section-kicker">Armazenamento e reaquecimento</p>

      <div class="field">
        <label for="storage">Instruções de armazenamento</label>
        <textarea id="storage" v-model="form.storageInstructions" rows="3" />
      </div>

      <div class="field">
        <label for="reheat">Instruções de reaquecimento</label>
        <textarea id="reheat" v-model="form.reheatInstructions" rows="3" />
      </div>

      <div class="field">
        <label for="locked-warning">Aviso de receita fixa</label>
        <textarea id="locked-warning" v-model="form.lockedRecipeWarning" rows="3" />
      </div>
    </section>

    <section class="admin-form-section">
      <p class="section-kicker">Informação nutricional</p>
      <p class="admin-helper-text">
        Dados aproximados por 100g pronto. Informação de ficha técnica, sem cálculo de equivalência para o aluno.
      </p>

      <div class="admin-form-grid">
        <div class="field">
          <label for="nutrition-kcal">kcal por 100g pronto</label>
          <input id="nutrition-kcal" v-model.number="form.kcalPer100g" type="number" min="0" step="0.1">
        </div>

        <div class="field">
          <label for="nutrition-protein">proteína por 100g pronto</label>
          <input id="nutrition-protein" v-model.number="form.proteinGPer100g" type="number" min="0" step="0.1">
        </div>

        <div class="field">
          <label for="nutrition-carbs">carboidratos por 100g pronto</label>
          <input id="nutrition-carbs" v-model.number="form.carbsGPer100g" type="number" min="0" step="0.1">
        </div>

        <div class="field">
          <label for="nutrition-fat">gorduras por 100g pronto</label>
          <input id="nutrition-fat" v-model.number="form.fatGPer100g" type="number" min="0" step="0.1">
        </div>

        <div class="field">
          <label for="nutrition-fiber">fibras por 100g pronto, opcional</label>
          <input id="nutrition-fiber" v-model.number="form.fiberGPer100g" type="number" min="0" step="0.1">
        </div>

        <div class="field">
          <label for="nutrition-sodium">sódio por 100g pronto, opcional</label>
          <input id="nutrition-sodium" v-model.number="form.sodiumMgPer100g" type="number" min="0" step="0.1">
        </div>
      </div>

      <div class="field">
        <label for="nutrition-notes">observações nutricionais, opcional</label>
        <textarea id="nutrition-notes" v-model="form.nutritionNotes" rows="3" />
      </div>
    </section>

    <section class="admin-form-section">
      <p class="section-kicker">Tags</p>

      <div class="admin-tag-grid">
        <label v-for="tag in tags" :key="tag.id" class="tag-checkbox">
          <input
            type="checkbox"
            :checked="form.tagIds.includes(tag.id)"
            @change="toggleTag(tag.id)"
          >
          {{ tag.name }}
        </label>
      </div>
    </section>

    <p v-if="validationMessage" class="form-error">{{ validationMessage }}</p>

    <button class="primary-button" type="submit" :disabled="pending || !canSubmit">
      {{ pending ? 'Salvando...' : submitLabel }}
    </button>
  </form>
</template>
