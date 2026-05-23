<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import StudentShell from '../components/layout/StudentShell.vue'
import RecipeAttributeBars from '../components/planner/RecipeAttributeBars.vue'
import BaseIcon from '../components/ui/BaseIcon.vue'
import { useRecipes } from '../composables/useRecipes'
import type { Recipe, RecipeIngredient } from '../types/recipe'
import { resolveRecipeImage } from '../utils/recipeImages'

type FilterId =
  | 'todos'
  | 'proteinas'
  | 'carboidratos'
  | 'saladas'
  | 'frutas'
  | 'frango'
  | 'carne'
  | 'suino'
  | 'peixe'
  | 'outros'

const filters: Array<{ id: FilterId; label: string }> = [
  { id: 'todos', label: 'Todos' },
  { id: 'proteinas', label: 'Proteínas' },
  { id: 'carboidratos', label: 'Carboidratos' },
  { id: 'saladas', label: 'Saladas' },
  { id: 'frutas', label: 'Frutas' },
  { id: 'frango', label: 'Frango' },
  { id: 'carne', label: 'Carne' },
  { id: 'suino', label: 'Suíno' },
  { id: 'peixe', label: 'Peixe' },
  { id: 'outros', label: 'Outros' },
]

const search = ref('')
const activeFilter = ref<FilterId>('todos')
const activeRecipeId = ref<string | null>(null)
const failedImageIds = ref<Set<string>>(new Set())

const { recipes, pending, error, loadRecipes } = useRecipes()

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
  const criticalSuffix = ingredient.isCritical ? ' (não aumentar)' : ''

  if (ingredient.isFreeSeasoning || ingredient.baseQuantity === null) {
    return `${displayName} à gosto${criticalSuffix}`
  }

  return `${formatQuantity(ingredient.baseQuantity, ingredient.unit)} de ${displayName}${criticalSuffix}`
}

function formatQuantity(quantity: number, unit: string | null) {
  const formattedQuantity = Number.isInteger(quantity)
    ? String(quantity)
    : new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(quantity)

  if (!unit) return formattedQuantity
  if (unit === 'g') return `${formattedQuantity}g`

  return `${formattedQuantity} ${unit}`
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

function formatNutritionValue(value: number | null, suffix: string) {
  if (value === null) return null

  const formattedValue = Number.isInteger(value)
    ? String(value)
    : new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(value)

  return `${formattedValue}${suffix}`
}

function matchRecipeFilter(recipe: Recipe, filter: FilterId) {
  const tagSlugs = recipe.tags.map((tag) => tag.slug)

  if (filter === 'todos') return true
  if (filter === 'proteinas' || filter === 'carboidratos' || filter === 'saladas' || filter === 'frutas') {
    return recipe.category?.slug === filter || tagSlugs.includes(filter)
  }
  if (filter === 'frango' || filter === 'carne' || filter === 'suino' || filter === 'peixe') {
    return recipe.type === filter || tagSlugs.includes(filter)
  }
  if (filter === 'outros') {
    return !['frango', 'carne', 'suino', 'peixe'].includes(recipe.type ?? '')
  }

  return true
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
  <StudentShell>
    <div class="recipes-page">
      <section class="hero-panel">
        <div>
          <p class="hero-panel__kicker">Biblioteca</p>
          <h1 class="page-title page-title--compact">Receitas</h1>
        </div>

        <p class="hero-panel__text">
          Abra uma preparação para ver ingredientes, preparo, armazenamento e como reaquecer.
        </p>
      </section>

      <section class="planner-controls" aria-label="Busca e filtros de receitas">
        <div class="field">
          <label for="library-search">Buscar receita</label>
          <input
            id="library-search"
            v-model="search"
            type="search"
            placeholder="Buscar receita pelo nome"
            autocomplete="off"
          >
        </div>

        <div class="filter-row" aria-label="Filtros">
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
      </section>

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
        <section class="library-list" aria-label="Receitas encontradas">
          <article
            v-for="recipe in filteredRecipes"
            :key="recipe.id"
            class="library-card"
            :class="{ 'library-card--active': recipe.id === activeRecipe?.id }"
          >
            <button class="library-card__button" type="button" @click="openRecipe(recipe.id)">
              <span class="library-card__image-wrap">
                <img
                  v-if="shouldShowImage(recipe)"
                  class="library-card__image"
                  :src="getImageSrc(recipe) ?? undefined"
                  :alt="recipe.name"
                  loading="lazy"
                  @error="markImageFailed(recipe.id)"
                >
                <span v-else class="library-card__image-placeholder" aria-hidden="true">
                  {{ recipe.name.slice(0, 1) }}
                </span>
              </span>

              <span class="library-card__content">
                <span class="recipe-card__meta">{{ formatType(recipe) }}</span>
                <span class="library-card__title">{{ recipe.name }}</span>
                <span v-if="recipe.shortDescription" class="library-card__description">
                  {{ recipe.shortDescription }}
                </span>
                <span class="library-card__attributes" aria-label="Atributos rápidos">
                  <RecipeAttributeBars label="Custo" :value="recipe.costLevel" tone="lower" />
                  <RecipeAttributeBars label="Tempo" :value="recipe.timeLevel" tone="lower" />
                  <RecipeAttributeBars label="Trabalho" :value="recipe.workLevel" tone="lower" />
                  <RecipeAttributeBars label="Praticidade" :value="recipe.practicalityLevel ?? recipe.versatilityLevel" />
                </span>
              </span>
            </button>
          </article>
        </section>

        <Teleport to="body">
          <div
            v-if="activeRecipe"
            class="recipe-modal"
            role="dialog"
            aria-modal="true"
            :aria-label="`Receita: ${activeRecipe.name}`"
            @click.self="closeRecipe"
          >
            <article class="recipe-detail recipe-detail--modal">
              <button class="recipe-modal__close" type="button" aria-label="Fechar receita" @click="closeRecipe">
                <BaseIcon name="x" />
              </button>
          <header class="recipe-detail__hero">
            <div class="recipe-detail__media">
              <img
                v-if="shouldShowImage(activeRecipe)"
                class="recipe-detail__image"
                :src="getImageSrc(activeRecipe) ?? undefined"
                :alt="activeRecipe.name"
                loading="lazy"
                @error="markImageFailed(activeRecipe.id)"
              >
              <span v-else class="recipe-detail__image-placeholder" aria-hidden="true">
                {{ activeRecipe.name.slice(0, 1) }}
              </span>
            </div>

            <div class="recipe-detail__intro">
              <p class="hero-panel__kicker">{{ formatType(activeRecipe) }}</p>
              <h2>{{ activeRecipe.name }}</h2>
              <p v-if="activeRecipe.shortDescription">
                {{ activeRecipe.shortDescription }}
              </p>

            </div>
          </header>

          <section class="recipe-detail__quick-grid" aria-label="Resumo rápido">
            <div class="recipe-detail__quick-item">
              <BaseIcon name="clock" />
              <span>Tempo</span>
              <strong>{{ activeRecipe.prepTimeMinutes ? `${activeRecipe.prepTimeMinutes} min` : 'Ver preparo' }}</strong>
            </div>
            <div class="recipe-detail__quick-item">
              <BaseIcon name="package" />
              <span>Rendimento base</span>
              <strong>{{ formatQuantity(activeRecipe.baseRawWeightG, 'g') }} cru</strong>
            </div>
            <div class="recipe-detail__quick-item">
              <BaseIcon :name="activeRecipe.freezesWell ? 'check-circle' : 'leaf'" />
              <span>Uso depois</span>
              <strong>{{ activeRecipe.freezesWell ? 'Congela bem' : 'Consumir fresco' }}</strong>
            </div>
          </section>

          <section class="detail-section">
            <p class="section-kicker">Atributos</p>
            <div class="recipe-detail__attributes">
              <RecipeAttributeBars label="Custo" :value="activeRecipe.costLevel" tone="lower" />
              <RecipeAttributeBars label="Tempo" :value="activeRecipe.timeLevel" tone="lower" />
              <RecipeAttributeBars label="Trabalho" :value="activeRecipe.workLevel" tone="lower" />
              <RecipeAttributeBars label="Praticidade" :value="activeRecipe.practicalityLevel ?? activeRecipe.versatilityLevel" />
            </div>
          </section>

          <section class="detail-section">
            <p class="section-kicker">Receita base</p>
            <p>
              {{ formatQuantity(activeRecipe.baseRawWeightG, 'g') }} cru rende cerca de
              {{ formatQuantity(activeRecipe.baseReadyWeightG, 'g') }} pronto.
            </p>
            <p v-if="activeRecipe.baseYieldNote" class="detail-note">
              {{ activeRecipe.baseYieldNote }}
            </p>
          </section>

          <section class="detail-section">
            <p class="section-kicker">Ingredientes</p>
            <ul class="detail-list">
              <li v-for="ingredient in activeRecipe.ingredients" :key="ingredient.id">
                {{ formatIngredient(ingredient) }}
              </li>
            </ul>
          </section>

          <section class="detail-section">
            <p class="section-kicker">Modo de preparo</p>
            <ol class="detail-list detail-list--ordered">
              <li v-for="step in activeRecipe.steps" :key="step.id">
                {{ step.instruction }}
              </li>
            </ol>
          </section>

          <section class="detail-section">
            <p class="section-kicker">Armazenamento</p>
            <p>{{ activeRecipe.storageInstructions ?? 'Armazene refrigerada em recipiente fechado.' }}</p>
          </section>

          <section class="detail-section">
            <p class="section-kicker">Como reaquecer</p>
            <p>{{ activeRecipe.reheatInstructions ?? 'Reaqueça até ficar bem quente antes de consumir.' }}</p>
          </section>

          <section v-if="hasNutritionInfo(activeRecipe)" class="detail-section detail-section--secondary">
            <p class="section-kicker">Informação nutricional aproximada</p>
            <p class="detail-note">Por 100g pronto:</p>

            <ul class="detail-list detail-list--compact">
              <li v-if="formatNutritionValue(activeRecipe.nutrition.kcalPer100g, ' kcal')">
                {{ formatNutritionValue(activeRecipe.nutrition.kcalPer100g, ' kcal') }}
              </li>
              <li v-if="formatNutritionValue(activeRecipe.nutrition.proteinGPer100g, 'g proteína')">
                {{ formatNutritionValue(activeRecipe.nutrition.proteinGPer100g, 'g proteína') }}
              </li>
              <li v-if="formatNutritionValue(activeRecipe.nutrition.carbsGPer100g, 'g carboidratos')">
                {{ formatNutritionValue(activeRecipe.nutrition.carbsGPer100g, 'g carboidratos') }}
              </li>
              <li v-if="formatNutritionValue(activeRecipe.nutrition.fatGPer100g, 'g gorduras')">
                {{ formatNutritionValue(activeRecipe.nutrition.fatGPer100g, 'g gorduras') }}
              </li>
              <li v-if="formatNutritionValue(activeRecipe.nutrition.fiberGPer100g, 'g fibras')">
                {{ formatNutritionValue(activeRecipe.nutrition.fiberGPer100g, 'g fibras') }}
              </li>
              <li v-if="formatNutritionValue(activeRecipe.nutrition.sodiumMgPer100g, 'mg sódio')">
                {{ formatNutritionValue(activeRecipe.nutrition.sodiumMgPer100g, 'mg sódio') }}
              </li>
            </ul>

            <p v-if="activeRecipe.nutrition.nutritionNotes" class="detail-note">
              {{ activeRecipe.nutrition.nutritionNotes }}
            </p>
          </section>

          <section class="notice">
            {{ activeRecipe.lockedRecipeWarning ?? 'Siga a receita como está. Não adicione óleo, azeite, creme, requeijão, queijo, molhos ou ingredientes extras fora da receita.' }}
          </section>
            </article>
          </div>
        </Teleport>
      </template>
    </div>
  </StudentShell>
</template>
