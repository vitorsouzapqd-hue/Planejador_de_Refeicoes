<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import StudentShell from '../components/layout/StudentShell.vue'
import RecipeAttributeBars from '../components/planner/RecipeAttributeBars.vue'
import BaseIcon from '../components/ui/BaseIcon.vue'
import { useRecipes } from '../composables/useRecipes'
import { useStudentTheme } from '../composables/useStudentTheme'
import type { IngredientHouseholdMeasure } from '../types/ingredient'
import type { Recipe, RecipeIngredient } from '../types/recipe'
import { resolveRecipeImage } from '../utils/recipeImages'

type FilterId =
  | 'todos'
  | 'proteinas'
  | 'carboidratos'
  | 'saladas'
  | 'frutas'

const filters: Array<{ id: FilterId; label: string }> = [
  { id: 'todos', label: 'Todas' },
  { id: 'proteinas', label: 'Proteínas' },
  { id: 'carboidratos', label: 'Carboidratos' },
  { id: 'saladas', label: 'Saladas' },
  { id: 'frutas', label: 'Frutas' },
]

const search = ref('')
const activeFilter = ref<FilterId>('todos')
const activeRecipeId = ref<string | null>(null)
const failedImageIds = ref<Set<string>>(new Set())

const PAGE_SIZE = 10
const currentPage = ref(1)

const { recipes, pending, error, loadRecipes } = useRecipes()
const { isDarkMode, themeButtonLabel, toggleTheme } = useStudentTheme()

onMounted(async () => {
  if (typeof window !== 'undefined') window.addEventListener('keydown', handleKeydown)
  await loadRecipes()
})

const filteredRecipes = computed(() => {
  const query = normalize(search.value)

  return recipes.value.filter((recipe) => {
    const matchesSearch = !query || normalize(recipe.name).includes(query)
    const matchesFilter = matchRecipeFilter(recipe, activeFilter.value)

    return matchesSearch && matchesFilter
  })
})

const displayedRecipes = computed(() => filteredRecipes.value.slice(0, currentPage.value * PAGE_SIZE))
const hasMore = computed(() => displayedRecipes.value.length < filteredRecipes.value.length)

function loadMore() {
  currentPage.value++
}

watch([search, activeFilter], () => {
  currentPage.value = 1
})

const recipeStats = computed(() => ({
  total: recipes.value.length,
  groups: new Set(recipes.value.map((r) => r.category?.slug).filter(Boolean)).size,
  types: new Set(recipes.value.map((r) => r.type).filter(Boolean)).size,
}))

const activeRecipe = computed(() => {
  return filteredRecipes.value.find((recipe) => recipe.id === activeRecipeId.value) ?? null
})

watch(filteredRecipes, (nextRecipes) => {
  if (activeRecipeId.value && !nextRecipes.some((recipe) => recipe.id === activeRecipeId.value)) {
    activeRecipeId.value = null
  }
})

watch(activeRecipe, (recipe) => {
  if (typeof document === 'undefined') return

  document.body.style.overflow = recipe ? 'hidden' : ''
})

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') document.body.style.overflow = ''
  if (typeof window !== 'undefined') window.removeEventListener('keydown', handleKeydown)
})

type CardScheme = { bg: string; blobs: [string, string, string]; accent: string }

const CARD_SCHEMES: Record<string, CardScheme> = {
  frango:   { bg: '#c8874a', blobs: ['#e8c090', '#a86535', '#d4a870'], accent: '#e05020' },
  carne:    { bg: '#26100a', blobs: ['#4a2012', '#7a381a', '#321810'], accent: '#e06028' },
  suino:    { bg: '#c86858', blobs: ['#e89082', '#a8483a', '#d47060'], accent: '#e0a020' },
  peixe:    { bg: '#386880', blobs: ['#60a0b8', '#285870', '#80c0d8'], accent: '#e0c030' },
  arroz:    { bg: '#b09040', blobs: ['#d0b870', '#90782a', '#e0d080'], accent: '#e05020' },
  batata:   { bg: '#b08030', blobs: ['#d0a850', '#90681a', '#e0c060'], accent: '#e05020' },
  massa:    { bg: '#c09858', blobs: ['#dcc880', '#a07842', '#e8d8a0'], accent: '#e05020' },
  feijao:   { bg: '#6a3820', blobs: ['#8a5038', '#b0684a', '#503020'], accent: '#e05020' },
  mandioca: { bg: '#c0a858', blobs: ['#d8c078', '#a0883a', '#e8d498'], accent: '#e05020' },
  pure:     { bg: '#d0c080', blobs: ['#e8d8a0', '#b0a062', '#f0e8b8'], accent: '#e05020' },
  legumes:  { bg: '#1e3826', blobs: ['#2e5840', '#3a6848', '#182e20'], accent: '#e05020' },
  crua:     { bg: '#1e3826', blobs: ['#2e5840', '#3a6848', '#182e20'], accent: '#e05020' },
  cozida:   { bg: '#1e3826', blobs: ['#2e5840', '#3a6848', '#182e20'], accent: '#e05020' },
  salada:   { bg: '#1e3826', blobs: ['#2e5840', '#3a6848', '#182e20'], accent: '#e05020' },
  vegetais: { bg: '#1e3826', blobs: ['#2e5840', '#3a6848', '#182e20'], accent: '#e05020' },
}

const DEFAULT_CARD_SCHEME: CardScheme = {
  bg: '#c0a870',
  blobs: ['#d8c090', '#a08852', '#e8d0a0'],
  accent: '#e05020',
}

function getCardScheme(recipe: Recipe): CardScheme {
  const key = recipe.type ?? recipe.category?.slug ?? ''
  return CARD_SCHEMES[key] ?? DEFAULT_CARD_SCHEME
}

function openRecipe(recipeId: string) {
  activeRecipeId.value = recipeId
}

function closeRecipe() {
  activeRecipeId.value = null
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeRecipe()
}

function shouldShowImage(recipe: Recipe) {
  return Boolean(resolveRecipeImage(recipe)) && !failedImageIds.value.has(recipe.id)
}

function getImageSrc(recipe: Recipe) {
  if (failedImageIds.value.has(recipe.id)) return null

  return resolveRecipeImage(recipe)
}

function markImageFailed(recipeId: string) {
  failedImageIds.value = new Set([...failedImageIds.value, recipeId])
}

function formatType(recipe: Recipe) {
  const type = recipe.type
  if (!type) return 'Proteína'

  const labels: Record<string, string> = {
    frango: 'Frango',
    carne: 'Carne',
    suino: 'Suíno',
    peixe: 'Peixe',
    arroz: 'Arroz',
    batata: 'Batata',
    massa: 'Macarrão',
    feijao: 'Feijão',
    mandioca: 'Mandioca',
    pure: 'Purê',
    legumes: 'Legumes',
    crua: 'Crua',
    cozida: 'Cozida',
  }

  return labels[type] ?? recipe.category?.name ?? type
}

function formatIngredient(ingredient: RecipeIngredient) {
  const displayName = ingredient.displayName ?? ingredient.name
  const criticalSuffix = ingredient.isCritical ? ' (medir com atenção)' : ''

  if (ingredient.isFreeSeasoning || ingredient.baseQuantity === null) {
    return `${displayName} à gosto${criticalSuffix}`
  }

  return `${formatQuantity(ingredient.baseQuantity, ingredient.unit)} de ${displayName}${criticalSuffix}`
}

function ingredientDisplayName(ingredient: RecipeIngredient) {
  return ingredient.displayName ?? ingredient.name
}

function ingredientMeta(ingredient: RecipeIngredient) {
  if (ingredient.isFreeSeasoning || ingredient.ingredientRole === 'seasoning') return 'temperos livres'
  if (ingredient.notes) return ingredient.notes

  const householdMeasures = formatHouseholdMeasures(ingredient.ingredient?.householdMeasures ?? [])
  if (householdMeasures) return householdMeasures

  if (ingredient.isCritical) return 'medir com atenção'
  if (ingredient.ingredientRole === 'main') return 'base de compra e preparo'
  if (ingredient.ingredientRole === 'complement') return 'complemento do preparo'

  return null
}

function ingredientQuantity(ingredient: RecipeIngredient) {
  if (ingredient.isFreeSeasoning || ingredient.baseQuantity === null) return 'à gosto'

  return formatQuantity(ingredient.baseQuantity, ingredient.unit)
}

function ingredientRowClass(ingredient: RecipeIngredient) {
  return {
    'recipe-premium-ingredient-row--critical': ingredient.isCritical,
  }
}

function formatQuantity(quantity: number, unit: string | null) {
  const formattedQuantity = Number.isInteger(quantity)
    ? String(quantity)
    : new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(quantity)

  if (!unit) return formattedQuantity
  if (unit === 'g') return `${formattedQuantity}g`

  return `${formattedQuantity} ${unit}`
}

function formatHouseholdMeasures(measures: IngredientHouseholdMeasure[]) {
  const visibleMeasures = measures
    .filter((measure) => measure.gramsEquivalent !== null || measure.mlEquivalent !== null)
    .slice(0, 4)

  if (!visibleMeasures.length) return null

  return visibleMeasures.map(formatHouseholdMeasure).join('; ')
}

function formatHouseholdMeasure(measure: IngredientHouseholdMeasure) {
  const equivalents: string[] = []

  if (measure.gramsEquivalent !== null) equivalents.push(formatQuantity(measure.gramsEquivalent, 'g'))
  if (measure.mlEquivalent !== null) equivalents.push(formatQuantity(measure.mlEquivalent, 'ml'))

  return `${measure.measureName}: aprox. ${equivalents.join(' / ')}`
}

function hasNutritionInfo(recipe: Recipe) {
  return Boolean(
    recipe.nutrition.kcalPer100g !== null ||
      recipe.nutrition.proteinGPer100g !== null ||
      recipe.nutrition.carbsGPer100g !== null ||
      recipe.nutrition.fatGPer100g !== null ||
      recipe.nutrition.fiberGPer100g !== null ||
      recipe.nutrition.sodiumMgPer100g !== null ||
      recipe.nutrition.nutritionNotes,
  )
}

function hasReferenceVideo(recipe: Recipe) {
  return Boolean(recipe.referenceVideoUrl)
}

function getTransformationStages(recipe: Recipe) {
  return [
    { label: 'cru', quantity: recipe.baseRawWeightG },
    { label: 'limpo', quantity: recipe.baseCleanWeightG },
    { label: 'pronto', quantity: recipe.baseReadyWeightG },
  ].filter((stage): stage is { label: string; quantity: number } => stage.quantity !== null && stage.quantity !== undefined)
}

function formatNutritionValue(value: number | null, suffix: string) {
  if (value === null) return null

  const formattedValue = Number.isInteger(value)
    ? String(value)
    : new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(value)

  return `${formattedValue}${suffix}`
}

function formatNutritionNumber(value: number | null) {
  if (value === null) return null

  return Number.isInteger(value)
    ? String(value)
    : new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(value)
}

function openReferenceVideo(recipe: Recipe) {
  if (typeof window === 'undefined' || !recipe.referenceVideoUrl) return

  window.open(recipe.referenceVideoUrl, '_blank', 'noopener,noreferrer')
}

function matchRecipeFilter(recipe: Recipe, filter: FilterId) {
  const tagSlugs = recipe.tags.map((tag) => tag.slug)

  if (filter === 'todos') return true

  return recipe.category?.slug === filter || tagSlugs.includes(filter)
}

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLocaleLowerCase('pt-BR')
    .trim()
}
</script>

<template>
  <StudentShell>
    <div class="recipes-page">
      <section class="hero-panel">
        <div>
          <p class="hero-panel__kicker">Biblioteca</p>
          <h1 class="page-title page-title--compact">Receitas</h1>
        </div>

        <p class="hero-panel__text">
          Escolha uma preparação, confira o rendimento e ajuste as porções pelo peso pronto da sua dieta.
        </p>

        <div class="recipe-search">
          <BaseIcon name="search" />
          <input
            id="library-search"
            v-model="search"
            type="search"
            placeholder="Buscar receita, ingrediente ou grupo..."
            autocomplete="off"
            aria-label="Buscar receita"
          >
        </div>

        <div v-if="!pending && !error" class="catalog-stats">
          <div class="catalog-stat">
            <strong>{{ recipeStats.total }}</strong>
            <span>Receitas</span>
          </div>
          <div class="catalog-stat">
            <strong>{{ recipeStats.groups }}</strong>
            <span>Grupos</span>
          </div>
          <div class="catalog-stat catalog-stat--accent">
            <strong>{{ recipeStats.types }}</strong>
            <span>Tipos</span>
          </div>
        </div>
      </section>

      <div class="filter-row" aria-label="Filtros de receitas">
        <button
          v-for="filter in filters"
          :key="filter.id"
          class="pill-button"
          :class="{ 'pill-button--active': activeFilter === filter.id }"
          type="button"
          @click="activeFilter = filter.id"
        >
          {{ filter.label }}
        </button>
      </div>

      <section v-if="pending" class="empty-state">
        <p>Carregando receitas publicadas...</p>
      </section>

      <section v-else-if="error" class="empty-state">
        <p>Não foi possível carregar as receitas agora.</p>
        <p>Confira a conexão e tente novamente.</p>
      </section>

      <section v-else-if="filteredRecipes.length === 0" class="empty-state">
        <p>Nenhuma receita encontrada.</p>
        <p>Ajuste a busca ou escolha outro filtro.</p>
      </section>

      <template v-else>
        <div class="catalog-section-head">
          <div>
            <p class="catalog-section-kicker">Catálogo</p>
            <h2 class="catalog-section-title">Todas as receitas</h2>
          </div>
          <span class="catalog-count-badge">{{ filteredRecipes.length }} itens</span>
        </div>

        <section class="catalog-grid" aria-label="Receitas encontradas">
          <button
            v-for="recipe in displayedRecipes"
            :key="recipe.id"
            class="catalog-card"
            type="button"
            @click="openRecipe(recipe.id)"
          >
            <div
              class="catalog-card__media"
              :style="!shouldShowImage(recipe) ? { background: getCardScheme(recipe).bg } : {}"
            >
              <img
                v-if="shouldShowImage(recipe)"
                :src="getImageSrc(recipe) ?? undefined"
                :alt="recipe.name"
                loading="lazy"
                @error="markImageFailed(recipe.id)"
              >
              <svg
                v-else
                class="catalog-card__blobs"
                viewBox="0 0 160 120"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
              >
                <circle cx="108" cy="32" r="52" :fill="getCardScheme(recipe).blobs[0]" opacity="0.92" />
                <circle cx="140" cy="84" r="48" :fill="getCardScheme(recipe).blobs[1]" opacity="0.92" />
                <circle cx="80" cy="76" r="46" :fill="getCardScheme(recipe).blobs[2]" opacity="0.88" />
                <circle cx="98" cy="17" r="11" :fill="getCardScheme(recipe).accent" />
              </svg>
              <span class="catalog-card__type-badge">{{ formatType(recipe) }}</span>
            </div>

            <div class="catalog-card__body">
              <span class="catalog-card__name">{{ recipe.name }}</span>
              <div class="catalog-card__attrs" aria-label="Atributos rápidos">
                <RecipeAttributeBars label="Tempo de Preparo" :value="recipe.timeLevel" tone="lower" />
                <RecipeAttributeBars label="Custo" :value="recipe.costLevel" tone="lower" />
                <RecipeAttributeBars label="Dificuldade" :value="recipe.workLevel" tone="lower" />
                <RecipeAttributeBars label="Versatilidade" :value="recipe.practicalityLevel ?? recipe.versatilityLevel" />
              </div>
            </div>
          </button>
        </section>

        <button
          v-if="hasMore"
          class="load-more-button"
          type="button"
          @click="loadMore"
        >
          Carregar mais receitas
        </button>

        <Teleport to="body">
          <div
            v-if="activeRecipe"
            class="recipe-modal"
            role="dialog"
            aria-modal="true"
            :aria-label="`Receita: ${activeRecipe.name}`"
            @click.self="closeRecipe"
          >
            <article class="recipe-premium-dialog">
              <header class="recipe-premium-topbar">
                <div class="recipe-premium-brand">
                  <span class="recipe-premium-brand__symbol" aria-hidden="true">
                    <BaseIcon name="file-text" />
                  </span>
                  <span>
                    <small>Receita</small>
                    <strong>Planejador de Refeições</strong>
                  </span>
                </div>

                <div class="recipe-premium-topbar__actions">
                  <button
                    class="theme-toggle"
                    type="button"
                    :aria-pressed="isDarkMode"
                    :aria-label="`Ativar modo ${themeButtonLabel.toLowerCase()}`"
                    @click="toggleTheme"
                  >
                    {{ themeButtonLabel }}
                  </button>
                  <button class="icon-button" type="button" aria-label="Fechar receita" @click="closeRecipe">
                    <BaseIcon name="x" />
                  </button>
                </div>
              </header>

              <div class="recipe-premium-scroll">
                <section
                  class="recipe-premium-hero"
                  :style="!shouldShowImage(activeRecipe) ? { background: getCardScheme(activeRecipe).bg } : {}"
                >
                  <img
                    v-if="shouldShowImage(activeRecipe)"
                    class="recipe-premium-hero__image"
                    :src="getImageSrc(activeRecipe) ?? undefined"
                    :alt="activeRecipe.name"
                    loading="lazy"
                    @error="markImageFailed(activeRecipe.id)"
                  >
                  <svg
                    v-else
                    class="recipe-premium-hero__art"
                    viewBox="0 0 430 300"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <circle cx="142" cy="150" r="84" :fill="getCardScheme(activeRecipe).blobs[0]" opacity="0.9" />
                    <circle cx="270" cy="155" r="96" :fill="getCardScheme(activeRecipe).blobs[1]" opacity="0.88" />
                    <circle cx="345" cy="72" r="44" :fill="getCardScheme(activeRecipe).blobs[2]" opacity="0.92" />
                    <path d="M0 236 C105 178 235 270 430 196 L430 300 L0 300Z" fill="#0f0f0f" opacity=".42" />
                  </svg>

                  <button class="recipe-premium-hero__back" type="button" @click="closeRecipe">
                    <BaseIcon name="arrow-left" />
                    Voltar
                  </button>

                  <button
                    v-if="hasReferenceVideo(activeRecipe)"
                    class="recipe-premium-hero__video"
                    type="button"
                    @click="openReferenceVideo(activeRecipe)"
                  >
                    <BaseIcon name="play" />
                    Vídeo
                  </button>

                  <div class="recipe-premium-hero__content">
                    <span class="recipe-premium-kicker">
                      {{ formatType(activeRecipe) }}
                    </span>
                    <h2>{{ activeRecipe.name }}</h2>
                    <p>
                      {{ activeRecipe.shortDescription ?? 'Preparo base para render o peso pronto planejado. Ajuste as quantidades mantendo a proporção da receita.' }}
                    </p>

                    <div class="recipe-premium-meta-strip">
                      <span>
                        <strong>{{ formatQuantity(activeRecipe.baseRawWeightG, 'g') }}</strong>
                        <small>peso cru</small>
                      </span>
                      <span>
                        <strong>{{ formatQuantity(activeRecipe.baseReadyWeightG, 'g') }}</strong>
                        <small>peso pronto</small>
                      </span>
                      <span>
                        <strong>{{ activeRecipe.prepTimeMinutes ? `${activeRecipe.prepTimeMinutes}min` : 'preparo' }}</strong>
                        <small>tempo</small>
                      </span>
                    </div>
                  </div>
                </section>

                <section class="recipe-premium-section">
                  <header class="recipe-premium-section__head">
                    <div>
                      <p class="recipe-premium-eyebrow">Rendimento</p>
                      <h3>Quanto comprar e quanto rende</h3>
                    </div>
                  </header>

                  <div class="recipe-premium-yield-panel">
                    <span>
                      <strong>{{ formatQuantity(activeRecipe.baseRawWeightG, 'g') }} cru</strong>
                      <small>comprar</small>
                    </span>
                    <BaseIcon name="arrow-right" />
                    <span>
                      <strong>{{ formatQuantity(activeRecipe.baseReadyWeightG, 'g') }} pronto</strong>
                      <small>esperado</small>
                    </span>
                  </div>

                  <p v-if="activeRecipe.cookingMethod" class="recipe-premium-note">
                    {{ activeRecipe.cookingMethod }}
                  </p>
                  <p v-if="activeRecipe.baseYieldNote" class="recipe-premium-note">
                    {{ activeRecipe.baseYieldNote }}
                  </p>

                  <div class="recipe-premium-warning">
                    Se render menos, não reduza o peso das porções para fazer render. Se sobrar, guarde como porção extra.
                  </div>
                </section>

                <section class="recipe-premium-section">
                  <header class="recipe-premium-section__head">
                    <div>
                      <p class="recipe-premium-eyebrow">Ingredientes</p>
                      <h3>Base da receita</h3>
                    </div>
                  </header>

                  <div class="recipe-premium-ingredient-list">
                    <div
                      v-for="ingredient in activeRecipe.ingredients"
                      :key="ingredient.id"
                      class="recipe-premium-ingredient-row"
                      :class="ingredientRowClass(ingredient)"
                    >
                      <span>
                        <strong>{{ ingredientDisplayName(ingredient) }}</strong>
                        <em v-if="ingredientMeta(ingredient)">{{ ingredientMeta(ingredient) }}</em>
                      </span>
                      <b>{{ ingredientQuantity(ingredient) }}</b>
                    </div>
                  </div>

                  <div class="recipe-premium-warning">
                    {{ activeRecipe.lockedRecipeWarning ?? 'Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.' }}
                  </div>
                </section>

                <section class="recipe-premium-section">
                  <header class="recipe-premium-section__head">
                    <div>
                      <p class="recipe-premium-eyebrow">Modo de preparo</p>
                      <h3>Passo a passo</h3>
                    </div>
                    <small>{{ activeRecipe.steps.length }} passo{{ activeRecipe.steps.length === 1 ? '' : 's' }}</small>
                  </header>

                  <ol v-if="activeRecipe.steps.length" class="recipe-premium-timeline">
                    <li v-for="step in activeRecipe.steps" :key="step.id">
                      {{ step.instruction }}
                    </li>
                  </ol>
                  <p v-else class="recipe-premium-note">
                    Modo de preparo ainda não cadastrado para esta receita.
                  </p>
                </section>

                <section class="recipe-premium-section">
                  <header class="recipe-premium-section__head">
                    <div>
                      <p class="recipe-premium-eyebrow">Depois de pronto</p>
                      <h3>Guardar e reaquecer</h3>
                    </div>
                  </header>

                  <div class="recipe-premium-info-grid">
                    <article class="recipe-premium-info-block">
                      <span aria-hidden="true">
                        <BaseIcon name="package" />
                      </span>
                      <strong>Armazenamento</strong>
                      <p>{{ activeRecipe.storageInstructions ?? 'Manter refrigerado em recipiente fechado.' }}</p>
                    </article>
                    <article class="recipe-premium-info-block">
                      <span aria-hidden="true">
                        <BaseIcon name="chef-hat" />
                      </span>
                      <strong>Reaquecer</strong>
                      <p>{{ activeRecipe.reheatInstructions ?? 'Reaqueça até ficar bem quente antes de consumir.' }}</p>
                    </article>
                  </div>
                </section>

                <section v-if="hasNutritionInfo(activeRecipe)" class="recipe-premium-section recipe-premium-section--nutrition">
                  <header class="recipe-premium-section__head">
                    <div>
                      <p class="recipe-premium-eyebrow">Nutrição</p>
                      <h3>Informação aproximada</h3>
                    </div>
                    <small>por 100g pronto</small>
                  </header>

                  <div class="recipe-premium-nutrition-strip">
                    <span v-if="formatNutritionNumber(activeRecipe.nutrition.kcalPer100g)">
                      <strong>{{ formatNutritionNumber(activeRecipe.nutrition.kcalPer100g) }}</strong>
                      <small>kcal</small>
                    </span>
                    <span v-if="formatNutritionNumber(activeRecipe.nutrition.proteinGPer100g)">
                      <strong>{{ formatNutritionNumber(activeRecipe.nutrition.proteinGPer100g) }}g</strong>
                      <small>proteína</small>
                    </span>
                    <span v-if="formatNutritionNumber(activeRecipe.nutrition.carbsGPer100g)">
                      <strong>{{ formatNutritionNumber(activeRecipe.nutrition.carbsGPer100g) }}g</strong>
                      <small>carbo</small>
                    </span>
                    <span v-if="formatNutritionNumber(activeRecipe.nutrition.fatGPer100g)">
                      <strong>{{ formatNutritionNumber(activeRecipe.nutrition.fatGPer100g) }}g</strong>
                      <small>gordura</small>
                    </span>
                  </div>

                  <p v-if="activeRecipe.nutrition.nutritionNotes" class="recipe-premium-note">
                    {{ activeRecipe.nutrition.nutritionNotes }}
                  </p>
                </section>
              </div>

              <footer class="recipe-premium-actions">
                <button class="secondary-button" type="button" @click="closeRecipe">
                  Voltar
                </button>
                <button
                  class="primary-button"
                  type="button"
                  :disabled="!hasReferenceVideo(activeRecipe)"
                  @click="openReferenceVideo(activeRecipe)"
                >
                  Ver vídeo
                </button>
              </footer>
            </article>
          </div>
        </Teleport>
      </template>
    </div>
  </StudentShell>
</template>
