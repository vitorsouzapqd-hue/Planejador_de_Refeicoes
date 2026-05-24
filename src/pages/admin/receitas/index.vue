<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { navigateTo, useRoute } from '#imports'
import AdminShell from '../../../components/admin/AdminShell.vue'
import AdminStatusBadge from '../../../components/admin/AdminStatusBadge.vue'
import {
  useAdminRecipes,
  type AdminCategory,
  type AdminRecipe,
} from '../../../composables/useAdminRecipes'
import type { RecipeStatus } from '../../../types/recipe'

definePageMeta({
  middleware: 'admin-auth',
})

const route = useRoute()
const recipes = ref<AdminRecipe[]>([])
const categories = ref<AdminCategory[]>([])
const pending = ref(true)
const actionPendingId = ref<string | null>(null)
const errorMessage = ref<string | null>(null)
const feedbackMessage = ref<string | null>(null)
const search = ref('')
const categoryFilter = ref(String(route.query.categoria ?? 'todos'))
const statusFilter = ref(String(route.query.status ?? 'todos'))
const typeFilter = ref(String(route.query.tipo ?? 'todos'))
const tabFilter = ref(String(route.query.tab ?? 'todas'))

const {
  duplicateRecipe,
  getRecipeImagePublicUrl,
  listCategories,
  listRecipes,
  updateRecipeStatus,
} = useAdminRecipes()

const typeOptions = computed(() => {
  return [...new Set(recipes.value.map((recipe) => recipe.type).filter((type): type is string => Boolean(type)))]
    .sort((a, b) => a.localeCompare(b, 'pt-BR'))
})

const summary = computed(() => ({
  total: recipes.value.length,
  published: recipes.value.filter((recipe) => recipe.status === 'published').length,
  draft: recipes.value.filter((recipe) => recipe.status === 'draft').length,
  issues: recipes.value.filter((recipe) => getPublicationIssues(recipe).length > 0).length,
  ready: recipes.value.filter((recipe) => isReadyToPublish(recipe)).length,
}))

const tabs = computed(() => [
  { value: 'todas', label: 'Todas', count: summary.value.total },
  { value: 'publicadas', label: 'Publicadas', count: summary.value.published },
  { value: 'rascunhos', label: 'Rascunhos', count: summary.value.draft },
  { value: 'pendencias', label: 'Pendências', count: summary.value.issues },
  { value: 'prontas', label: 'Prontas', count: summary.value.ready },
])

const filteredRecipes = computed(() => {
  const query = normalize(search.value)

  return recipes.value.filter((recipe) => {
    const matchesSearch =
      !query ||
      normalize(recipe.name).includes(query) ||
      normalize(recipe.categoryName ?? '').includes(query) ||
      normalize(recipe.type ?? '').includes(query)
    const matchesCategory = categoryFilter.value === 'todos' || recipe.categoryId === categoryFilter.value
    const matchesStatus = statusFilter.value === 'todos' || recipe.status === statusFilter.value
    const matchesType = typeFilter.value === 'todos' || recipe.type === typeFilter.value
    const matchesTab =
      tabFilter.value === 'todas' ||
      (tabFilter.value === 'publicadas' && recipe.status === 'published') ||
      (tabFilter.value === 'rascunhos' && recipe.status === 'draft') ||
      (tabFilter.value === 'pendencias' && getPublicationIssues(recipe).length > 0) ||
      (tabFilter.value === 'prontas' && isReadyToPublish(recipe))

    return matchesSearch && matchesCategory && matchesStatus && matchesType && matchesTab
  })
})

onMounted(loadRecipes)

async function loadRecipes() {
  pending.value = true
  errorMessage.value = null

  try {
    const [recipeList, categoryList] = await Promise.all([
      listRecipes(),
      listCategories(),
    ])
    recipes.value = recipeList
    categories.value = categoryList
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível carregar as receitas.')
    recipes.value = []
    categories.value = []
  } finally {
    pending.value = false
  }
}

async function setStatus(recipe: AdminRecipe, status: RecipeStatus) {
  errorMessage.value = null
  feedbackMessage.value = null

  if (status === 'published') {
    const issues = getPublicationIssues(recipe)
    if (issues.length > 0) {
      errorMessage.value = `Resolva antes de publicar: ${issues.join(', ')}.`
      return
    }
  }

  actionPendingId.value = recipe.id

  try {
    await updateRecipeStatus(recipe.id, status)
    await loadRecipes()
    feedbackMessage.value = status === 'published'
      ? 'Receita publicada.'
      : status === 'archived'
        ? 'Receita arquivada.'
        : 'Receita voltou para rascunho.'
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível atualizar a situação da receita.')
  } finally {
    actionPendingId.value = null
  }
}

async function duplicate(recipe: AdminRecipe) {
  actionPendingId.value = recipe.id
  errorMessage.value = null
  feedbackMessage.value = null

  try {
    const newId = await duplicateRecipe(recipe.id)
    navigateTo(`/admin/receitas/${newId}`)
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível duplicar a receita.')
  } finally {
    actionPendingId.value = null
  }
}

function getImageUrl(recipe: AdminRecipe) {
  return getRecipeImagePublicUrl(recipe.imagePath)
}

function getPublicationIssues(recipe: AdminRecipe) {
  const issues: string[] = []
  if (!recipe.imagePath) issues.push('imagem')
  if (!recipe.hasMainIngredient) issues.push('ingrediente principal')
  if (!recipe.hasSteps) issues.push('modo de preparo')
  if (!recipe.categoryId) issues.push('categoria')
  if (!recipe.baseRawWeightG || recipe.baseRawWeightG <= 0) issues.push('peso cru base')
  if (!recipe.baseReadyWeightG || recipe.baseReadyWeightG <= 0) issues.push('peso pronto base')
  return issues
}

function isReadyToPublish(recipe: AdminRecipe) {
  return recipe.status !== 'published' && getPublicationIssues(recipe).length === 0
}

function completion(recipe: AdminRecipe) {
  const score = [
    Boolean(recipe.imagePath),
    recipe.hasMainIngredient,
    recipe.hasSteps,
    Boolean(recipe.referenceVideoUrl),
  ].filter(Boolean).length

  return Math.round((score / 4) * 100)
}

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .trim()
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
        <p class="admin-page-header__kicker">Receitas</p>
        <h1 class="admin-page-header__title">Gerenciar receitas</h1>
        <p class="admin-page-header__sub">
          Controle publicação, imagem, ingredientes, rendimento, preparo e tudo que aparece para o aluno.
        </p>
      </div>
      <NuxtLink class="primary-button" to="/admin/receitas/nova">
        <BaseIcon name="plus" />
        Criar nova receita
      </NuxtLink>
    </section>

    <section class="admin-summary-row" aria-label="Resumo das receitas">
      <article class="admin-summary-card"><strong>{{ summary.total }}</strong><span>receitas no catálogo</span></article>
      <article class="admin-summary-card"><strong>{{ summary.published }}</strong><span>publicadas</span></article>
      <article class="admin-summary-card"><strong>{{ summary.draft }}</strong><span>rascunhos</span></article>
      <article class="admin-summary-card"><strong>{{ summary.issues }}</strong><span>com pendência</span></article>
    </section>

    <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>
    <p v-if="feedbackMessage" class="admin-success-message">{{ feedbackMessage }}</p>

    <section class="admin-card">
      <div class="admin-filters">
        <div class="field">
          <label for="recipe-search">Busca</label>
          <div class="admin-input-shell">
            <BaseIcon name="search" />
            <input id="recipe-search" v-model="search" type="search" placeholder="Nome da receita">
          </div>
        </div>

        <div class="field">
          <label for="recipe-category-filter">Categoria</label>
          <select id="recipe-category-filter" v-model="categoryFilter">
            <option value="todos">Todas</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>

        <div class="field">
          <label for="recipe-status-filter">Situação</label>
          <select id="recipe-status-filter" v-model="statusFilter">
            <option value="todos">Todos</option>
            <option value="draft">Rascunho</option>
            <option value="published">Publicada</option>
            <option value="archived">Arquivada</option>
          </select>
        </div>

        <div class="field">
          <label for="recipe-type-filter">Tipo</label>
          <select id="recipe-type-filter" v-model="typeFilter">
            <option value="todos">Todos</option>
            <option v-for="type in typeOptions" :key="type" :value="type">
              {{ type }}
            </option>
          </select>
        </div>
      </div>

      <div class="admin-toolbar">
        <div class="admin-tabs" role="tablist" aria-label="Qualidade das receitas">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            class="admin-tab"
            :class="{ 'admin-tab--active': tabFilter === tab.value }"
            type="button"
            @click="tabFilter = tab.value"
          >
            {{ tab.label }} <b>{{ tab.count }}</b>
          </button>
        </div>
      </div>
    </section>

    <section v-if="pending" class="admin-card">
      <div class="admin-loading-state">
        <div class="admin-spinner" aria-hidden="true" />
        <p>Carregando receitas...</p>
      </div>
    </section>

    <section v-else-if="filteredRecipes.length === 0" class="admin-card">
      <div class="admin-empty-state">
        <BaseIcon name="file-text" />
        <p>Nenhuma receita encontrada com esses filtros.</p>
        <NuxtLink class="primary-button" to="/admin/receitas/nova">
          <BaseIcon name="plus" />
          Criar nova receita
        </NuxtLink>
      </div>
    </section>

    <section v-else class="admin-table-card">
      <div class="admin-table-head admin-table-head--recipes">
        <div>Receita</div>
        <div>Situação</div>
        <div>Categoria</div>
        <div>Completude</div>
        <div>Ações</div>
      </div>

      <article v-for="recipe in filteredRecipes" :key="recipe.id" class="admin-recipe-row">
        <div class="admin-recipe-row__main">
          <div class="admin-row-media">
            <img
              v-if="getImageUrl(recipe)"
              :src="getImageUrl(recipe) ?? undefined"
              :alt="recipe.name"
              loading="lazy"
            >
            <span v-else aria-hidden="true">{{ recipe.name.slice(0, 1).toUpperCase() }}</span>
          </div>

          <div class="admin-recipe-row__info">
            <h2>{{ recipe.name }}</h2>
            <p>{{ recipe.categoryName ?? 'Sem categoria' }} - {{ recipe.type ?? 'sem tipo' }} - {{ completion(recipe) }}% completo</p>
          </div>
        </div>

        <AdminStatusBadge :status="recipe.status" />

        <div class="admin-row-flags">
          <span>{{ recipe.categoryName ?? 'Sem categoria' }}</span>
        </div>

        <div class="admin-row-flags" aria-label="Resumo da receita">
          <span :class="recipe.imagePath ? 'admin-flag--ok' : 'admin-flag--warn'">
            {{ recipe.imagePath ? 'Com imagem' : 'Sem imagem' }}
          </span>
          <span :class="recipe.hasMainIngredient ? 'admin-flag--ok' : 'admin-flag--warn'">
            {{ recipe.hasMainIngredient ? 'Ingrediente' : 'Sem principal' }}
          </span>
          <span :class="recipe.hasSteps ? 'admin-flag--ok' : 'admin-flag--warn'">
            {{ recipe.hasSteps ? 'Com preparo' : 'Sem passos' }}
          </span>
          <span :class="recipe.referenceVideoUrl ? 'admin-flag--ok' : ''">
            {{ recipe.referenceVideoUrl ? 'Com vídeo' : 'Sem vídeo' }}
          </span>
        </div>

        <div class="admin-row-actions">
          <NuxtLink class="icon-button" :to="`/admin/receitas/${recipe.id}`" :aria-label="`Editar ${recipe.name}`" title="Editar">
            <BaseIcon name="edit" />
          </NuxtLink>
          <button
            v-if="recipe.status !== 'published'"
            class="icon-button"
            type="button"
            :disabled="actionPendingId === recipe.id"
            :aria-label="`Publicar ${recipe.name}`"
            title="Publicar"
            @click="setStatus(recipe, 'published')"
          >
            <BaseIcon name="check" />
          </button>
          <button
            v-if="recipe.status !== 'archived'"
            class="icon-button"
            type="button"
            :disabled="actionPendingId === recipe.id"
            :aria-label="`Arquivar ${recipe.name}`"
            title="Arquivar"
            @click="setStatus(recipe, 'archived')"
          >
            <BaseIcon name="archive" />
          </button>
          <button
            class="icon-button"
            type="button"
            :disabled="actionPendingId === recipe.id"
            :aria-label="`Duplicar ${recipe.name}`"
            title="Duplicar"
            @click="duplicate(recipe)"
          >
            <BaseIcon name="copy" />
          </button>
        </div>
      </article>
    </section>
  </AdminShell>
</template>
