<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import AdminShell from '../../components/admin/AdminShell.vue'
import { useAdminIngredients } from '../../composables/useAdminIngredients'
import { useAdminRecipes, type AdminRecipe } from '../../composables/useAdminRecipes'
import { useShoppingCatalog } from '../../composables/useShoppingCatalog'
import type { Ingredient } from '../../types/ingredient'
import type { ShoppingCatalogItem } from '../../types/shoppingCatalog'

definePageMeta({
  middleware: 'admin-auth',
})

const recipes = ref<AdminRecipe[]>([])
const ingredients = ref<Ingredient[]>([])
const catalogItems = ref<ShoppingCatalogItem[]>([])
const loadingCounters = ref(true)
const errorMessage = ref<string | null>(null)

const recipeAdmin = useAdminRecipes()
const ingredientAdmin = useAdminIngredients()
const catalog = useShoppingCatalog()

const publishedRecipes = computed(() => recipes.value.filter((recipe) => recipe.status === 'published'))
const draftRecipes = computed(() => recipes.value.filter((recipe) => recipe.status === 'draft'))
const recipesWithoutImage = computed(() => recipes.value.filter((recipe) => !recipe.imagePath))
const recipesWithoutMainIngredient = computed(() => recipes.value.filter((recipe) => !recipe.hasMainIngredient))
const recipesWithoutSteps = computed(() => recipes.value.filter((recipe) => !recipe.hasSteps))
const ingredientsWithoutNutrition = computed(() => ingredients.value.filter((ingredient) => !hasNutrition(ingredient)))
const activeCatalogItems = computed(() => catalogItems.value.filter((item) => item.isActive))
const recipesReadyToPublish = computed(() =>
  recipes.value.filter((recipe) =>
    recipe.status !== 'published' &&
    recipe.imagePath &&
    recipe.hasMainIngredient &&
    recipe.hasSteps &&
    recipe.baseRawWeightG > 0 &&
    recipe.baseReadyWeightG > 0,
  ),
)

const counters = computed(() => [
  {
    label: 'receitas publicadas',
    value: publishedRecipes.value.length,
    icon: 'file-text',
    color: 'accent',
  },
  {
    label: 'receitas em rascunho',
    value: draftRecipes.value.length,
    icon: 'edit',
    color: 'neutral',
  },
  {
    label: 'ingredientes ativos',
    value: ingredients.value.filter((ingredient) => ingredient.isActive).length,
    icon: 'grain',
    color: 'green',
  },
  {
    label: 'itens ativos na lista',
    value: activeCatalogItems.value.length,
    icon: 'shopping-cart',
    color: 'blue',
  },
])

const healthItems = computed(() => [
  {
    label: 'Receitas sem imagem',
    description: 'Afeta cartões, revisão e tela de receita.',
    value: recipesWithoutImage.value.length,
    to: '/admin/receitas?tab=pendencias',
    severity: recipesWithoutImage.value.length ? 'danger' : 'ok',
    icon: 'image',
  },
  {
    label: 'Sem ingrediente principal',
    description: 'Impede cálculo de compra e rendimento.',
    value: recipesWithoutMainIngredient.value.length,
    to: '/admin/receitas?tab=pendencias',
    severity: recipesWithoutMainIngredient.value.length ? 'danger' : 'ok',
    icon: 'grain',
  },
  {
    label: 'Receitas sem passos',
    description: 'Fica ruim para o aluno executar.',
    value: recipesWithoutSteps.value.length,
    to: '/admin/receitas?tab=pendencias',
    severity: recipesWithoutSteps.value.length ? 'warn' : 'ok',
    icon: 'list-check',
  },
  {
    label: 'Ingredientes sem nutrição',
    description: 'Prejudica conferência e confiança.',
    value: ingredientsWithoutNutrition.value.length,
    to: '/admin/ingredientes?qualidade=sem-nutricao',
    severity: ingredientsWithoutNutrition.value.length ? 'warn' : 'ok',
    icon: 'alert',
  },
  {
    label: 'Itens de compra ativos',
    description: 'Lista mãe pronta para seleção.',
    value: activeCatalogItems.value.length,
    to: '/admin/catalogo-compras?ativo=ativos',
    severity: 'ok',
    icon: 'shopping-cart',
  },
  {
    label: 'Receitas prontas para publicar',
    description: 'Podem entrar na biblioteca do aluno.',
    value: recipesReadyToPublish.value.length,
    to: '/admin/receitas?tab=prontas',
    severity: 'ok',
    icon: 'check-circle',
  },
])

const modules = [
  {
    to: '/admin/receitas',
    label: 'Receitas',
    description: 'Imagem, preparo, rendimento, nutrição, vídeo e publicação.',
    icon: 'file-text',
  },
  {
    to: '/admin/ingredientes',
    label: 'Ingredientes',
    description: 'Tabela nutricional, unidades, fatores de correção e medidas.',
    icon: 'grain',
  },
  {
    to: '/admin/catalogo-compras',
    label: 'Lista mãe',
    description: 'Itens selecionáveis por categoria para compras do aluno.',
    icon: 'shopping-cart',
  },
  {
    to: '/admin/metadados',
    label: 'Metadados',
    description: 'Categorias e tags usadas nos filtros das receitas.',
    icon: 'tags',
  },
]

const workQueue = computed(() =>
  healthItems.value
    .filter((item) => item.severity !== 'ok' && item.value > 0)
    .slice(0, 4),
)

onMounted(loadCounters)

async function loadCounters() {
  loadingCounters.value = true
  errorMessage.value = null

  try {
    const [recipeList, ingredientList] = await Promise.all([
      recipeAdmin.listRecipes(),
      ingredientAdmin.listIngredients(),
      catalog.loadItems().then(() => catalog.items.value),
    ])

    recipes.value = recipeList
    ingredients.value = ingredientList
    catalogItems.value = catalog.items.value
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível carregar os dados do painel.')
  } finally {
    loadingCounters.value = false
  }
}

function hasNutrition(ingredient: Ingredient) {
  return Boolean(
    ingredient.nutrition.kcalPer100g !== null ||
      ingredient.nutrition.proteinGPer100g !== null ||
      ingredient.nutrition.carbsGPer100g !== null ||
      ingredient.nutrition.fatGPer100g !== null ||
      ingredient.nutrition.fiberGPer100g !== null ||
      ingredient.nutrition.sodiumMgPer100g !== null,
  )
}

function getErrorMessage(error: unknown, fallback: string) {
  if (error instanceof Error && error.message.trim()) return error.message
  return fallback
}
</script>

<template>
  <AdminShell>
    <section class="admin-page-header">
      <div>
        <p class="admin-page-header__kicker">Painel</p>
        <h1 class="admin-page-header__title">Painel admin</h1>
        <p class="admin-page-header__sub">
          Controle receitas, ingredientes, lista de compras e dados que alimentam o planejador do aluno.
        </p>
      </div>

      <NuxtLink class="primary-button" to="/admin/receitas/nova">
        <BaseIcon name="plus" />
        Nova receita
      </NuxtLink>
    </section>

    <section class="admin-hero-panel">
      <div>
        <p class="admin-page-header__kicker">Central de conteúdo</p>
        <strong>O app só fica bom se o banco estiver limpo.</strong>
        <p>Priorize receitas completas, ingredientes conectados e itens de compra revisados.</p>
      </div>
      <NuxtLink class="secondary-button" to="/admin/receitas?tab=pendencias">
        Ver pendências
      </NuxtLink>
    </section>

    <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>

    <section class="admin-stat-grid" aria-label="Resumo do conteúdo">
      <article
        v-for="counter in counters"
        :key="counter.label"
        class="admin-stat-card"
        :class="`admin-stat-card--${counter.color}`"
      >
        <div class="admin-stat-card__icon" aria-hidden="true">
          <BaseIcon :name="counter.icon" />
        </div>
        <strong class="admin-stat-card__value">{{ loadingCounters ? '-' : counter.value }}</strong>
        <span class="admin-stat-card__label">{{ counter.label }}</span>
      </article>
    </section>

    <div class="admin-dashboard-layout">
      <section class="admin-card">
        <div class="admin-card__header">
          <p class="admin-section-kicker">Saúde do conteúdo</p>
          <h2 class="admin-card__title">Pendências que afetam o app</h2>
          <p>O objetivo aqui é mostrar o que impede uma receita ou item de funcionar bem no planejamento.</p>
        </div>

        <div class="admin-health-grid">
          <NuxtLink
            v-for="item in healthItems"
            :key="item.label"
            class="admin-health-item"
            :class="`admin-health-item--${item.severity}`"
            :to="item.to"
          >
            <span class="admin-health-item__icon" aria-hidden="true">
              <BaseIcon :name="item.icon" />
            </span>
            <span>
              <strong>{{ item.label }}</strong>
              <small>{{ item.description }}</small>
            </span>
            <b>{{ loadingCounters ? '-' : item.value }}</b>
          </NuxtLink>
        </div>
      </section>

      <aside class="admin-card">
        <div class="admin-card__header">
          <p class="admin-section-kicker">Agora</p>
          <h2 class="admin-card__title">Fila de trabalho</h2>
          <p>Próximas ações recomendadas.</p>
        </div>

        <div v-if="workQueue.length" class="admin-activity-list">
          <NuxtLink v-for="item in workQueue" :key="item.label" :to="item.to" class="admin-activity">
            <span aria-hidden="true"><BaseIcon :name="item.icon" /></span>
            <span>
              <strong>{{ item.label }}</strong>
              <small>{{ item.value }} itens precisam de revisão.</small>
            </span>
          </NuxtLink>
        </div>
        <div v-else class="admin-empty-state admin-empty-state--compact">
          <BaseIcon name="check-circle" />
          <p>Nenhuma pendência crítica agora.</p>
        </div>
      </aside>
    </div>

    <section class="admin-home-grid" aria-label="Seções do admin">
      <NuxtLink
        v-for="module in modules"
        :key="module.to"
        class="admin-home-link"
        :to="module.to"
      >
        <div class="admin-home-link__icon" aria-hidden="true">
          <BaseIcon :name="module.icon" />
        </div>
        <div class="admin-home-link__body">
          <h2>{{ module.label }}</h2>
          <p>{{ module.description }}</p>
        </div>
        <BaseIcon class="admin-home-link__arrow" name="arrow-right" />
      </NuxtLink>
    </section>
  </AdminShell>
</template>
