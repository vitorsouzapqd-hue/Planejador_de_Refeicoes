<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from '#imports'
import AdminShell from '../../../components/admin/AdminShell.vue'
import { ingredientShoppingCategories, useAdminIngredients } from '../../../composables/useAdminIngredients'
import { useShoppingCatalog } from '../../../composables/useShoppingCatalog'
import type { Ingredient } from '../../../types/ingredient'
import type { ShoppingCatalogItem } from '../../../types/shoppingCatalog'

definePageMeta({
  middleware: 'admin-auth',
})

const route = useRoute()
const ingredients = ref<Ingredient[]>([])
const catalogItems = ref<ShoppingCatalogItem[]>([])
const pending = ref(true)
const actionPendingId = ref<string | null>(null)
const errorMessage = ref<string | null>(null)
const feedbackMessage = ref<string | null>(null)
const search = ref('')
const categoryFilter = ref('todos')
const activeFilter = ref(String(route.query.ativo ?? 'todos'))
const qualityFilter = ref(String(route.query.qualidade ?? 'todos'))
const tabFilter = ref('todos')

const { listIngredients, setIngredientActive } = useAdminIngredients()
const catalog = useShoppingCatalog()

const summary = computed(() => ({
  total: ingredients.value.length,
  active: ingredients.value.filter((ingredient) => ingredient.isActive).length,
  missingNutrition: ingredients.value.filter((ingredient) => !hasNutrition(ingredient)).length,
  missingMeasure: ingredients.value.filter((ingredient) => !hasHouseholdMeasure(ingredient)).length,
}))

const tabs = computed(() => [
  { value: 'todos', label: 'Todos', count: summary.value.total },
  { value: 'ativos', label: 'Ativos', count: summary.value.active },
  { value: 'lista-mae', label: 'Lista mãe', count: ingredients.value.filter(hasCatalogLink).length },
  { value: 'pendencias', label: 'Pendências', count: ingredients.value.filter(hasQualityIssue).length },
  { value: 'inativos', label: 'Inativos', count: ingredients.value.filter((ingredient) => !ingredient.isActive).length },
])

const filteredIngredients = computed(() => {
  const query = normalize(search.value)

  return ingredients.value.filter((ingredient) => {
    const aliases = ingredient.aliases.map(normalize).join(' ')
    const matchesSearch =
      !query ||
      normalize(ingredient.name).includes(query) ||
      normalize(ingredient.displayName ?? '').includes(query) ||
      aliases.includes(query)
    const matchesCategory =
      categoryFilter.value === 'todos' ||
      ingredient.shoppingCategory === categoryFilter.value
    const matchesActive =
      activeFilter.value === 'todos' ||
      (activeFilter.value === 'ativos' && ingredient.isActive) ||
      (activeFilter.value === 'inativos' && !ingredient.isActive)
    const matchesQuality =
      qualityFilter.value === 'todos' ||
      (qualityFilter.value === 'completos' && !hasQualityIssue(ingredient)) ||
      (qualityFilter.value === 'pendencias' && hasQualityIssue(ingredient)) ||
      (qualityFilter.value === 'sem-nutricao' && !hasNutrition(ingredient)) ||
      (qualityFilter.value === 'sem-medida' && !hasHouseholdMeasure(ingredient)) ||
      (qualityFilter.value === 'sem-compra' && !hasCatalogLink(ingredient))
    const matchesTab =
      tabFilter.value === 'todos' ||
      (tabFilter.value === 'ativos' && ingredient.isActive) ||
      (tabFilter.value === 'lista-mae' && hasCatalogLink(ingredient)) ||
      (tabFilter.value === 'pendencias' && hasQualityIssue(ingredient)) ||
      (tabFilter.value === 'inativos' && !ingredient.isActive)

    return matchesSearch && matchesCategory && matchesActive && matchesQuality && matchesTab
  })
})

onMounted(loadIngredients)

async function loadIngredients() {
  pending.value = true
  errorMessage.value = null

  try {
    const [ingredientList] = await Promise.all([
      listIngredients(),
      catalog.loadItems().then(() => catalog.items.value),
    ])
    ingredients.value = ingredientList
    catalogItems.value = catalog.items.value
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível carregar os ingredientes.')
    ingredients.value = []
    catalogItems.value = []
  } finally {
    pending.value = false
  }
}

async function setActive(ingredient: Ingredient, isActive: boolean) {
  actionPendingId.value = ingredient.id
  errorMessage.value = null
  feedbackMessage.value = null

  try {
    await setIngredientActive(ingredient.id, isActive)
    await loadIngredients()
    feedbackMessage.value = isActive ? 'Ingrediente ativado.' : 'Ingrediente desativado.'
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível atualizar o ingrediente.')
  } finally {
    actionPendingId.value = null
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

function hasHouseholdMeasure(ingredient: Ingredient) {
  return Boolean(ingredient.householdMeasures?.length)
}

function hasCatalogLink(ingredient: Ingredient) {
  return catalogItems.value.some((item) => item.ingredientId === ingredient.id)
}

function hasQualityIssue(ingredient: Ingredient) {
  return !hasNutrition(ingredient) || !hasHouseholdMeasure(ingredient) || !hasCatalogLink(ingredient)
}

function catalogLabel(ingredient: Ingredient) {
  const item = catalogItems.value.find((catalogItem) => catalogItem.ingredientId === ingredient.id)
  return item ? (item.displayName ?? item.name) : null
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
        <p class="admin-page-header__kicker">Ingredientes</p>
        <h1 class="admin-page-header__title">Gerenciar ingredientes</h1>
        <p class="admin-page-header__sub">
          Edite a base mestre usada pelas receitas, pelo cálculo de compra e pela lista mãe.
        </p>
      </div>

      <NuxtLink class="primary-button" to="/admin/ingredientes/novo">
        <BaseIcon name="plus" />
        Criar ingrediente
      </NuxtLink>
    </section>

    <section class="admin-summary-row" aria-label="Resumo dos ingredientes">
      <article class="admin-summary-card"><strong>{{ summary.total }}</strong><span>ingredientes na base</span></article>
      <article class="admin-summary-card"><strong>{{ summary.active }}</strong><span>ativos para uso</span></article>
      <article class="admin-summary-card"><strong>{{ summary.missingNutrition }}</strong><span>sem nutrição</span></article>
      <article class="admin-summary-card"><strong>{{ summary.missingMeasure }}</strong><span>sem medida caseira</span></article>
    </section>

    <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>
    <p v-if="feedbackMessage" class="admin-success-message">{{ feedbackMessage }}</p>

    <section class="admin-card">
      <div class="admin-notice">
        <BaseIcon name="grain" />
        <div>
          <strong>Ingrediente é o centro do sistema.</strong>
          <span>Ele alimenta receitas, compra, nutrição, medidas caseiras e fatores de rendimento.</span>
        </div>
      </div>

      <div class="admin-filters">
        <div class="field">
          <label for="ingredient-search">Busca</label>
          <div class="admin-input-shell">
            <BaseIcon name="search" />
            <input id="ingredient-search" v-model="search" type="search" placeholder="Nome, sinônimo ou item">
          </div>
        </div>

        <div class="field">
          <label for="ingredient-category-filter">Categoria</label>
          <select id="ingredient-category-filter" v-model="categoryFilter">
            <option value="todos">Todas</option>
            <option v-for="category in ingredientShoppingCategories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>

        <div class="field">
          <label for="ingredient-active-filter">Ativo/inativo</label>
          <select id="ingredient-active-filter" v-model="activeFilter">
            <option value="todos">Todos</option>
            <option value="ativos">Ativos</option>
            <option value="inativos">Inativos</option>
          </select>
        </div>

        <div class="field">
          <label for="ingredient-quality-filter">Qualidade</label>
          <select id="ingredient-quality-filter" v-model="qualityFilter">
            <option value="todos">Todos</option>
            <option value="completos">Completos</option>
            <option value="pendencias">Com pendência</option>
            <option value="sem-nutricao">Sem nutrição</option>
            <option value="sem-medida">Sem medida caseira</option>
            <option value="sem-compra">Sem item de compra</option>
          </select>
        </div>
      </div>

      <div class="admin-toolbar">
        <div class="admin-tabs" role="tablist" aria-label="Qualidade dos ingredientes">
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
        <p>Carregando ingredientes...</p>
      </div>
    </section>

    <section v-else-if="filteredIngredients.length === 0" class="admin-card">
      <div class="admin-empty-state">
        <BaseIcon name="grain" />
        <p>Nenhum ingrediente encontrado com esses filtros.</p>
        <NuxtLink class="primary-button" to="/admin/ingredientes/novo">
          <BaseIcon name="plus" />
          Criar ingrediente
        </NuxtLink>
      </div>
    </section>

    <section v-else class="admin-table-card">
      <div class="admin-table-head admin-table-head--ingredients">
        <div>Ingrediente</div>
        <div>Situação</div>
        <div>Qualidade</div>
        <div>Vínculos</div>
        <div>Ações</div>
      </div>

      <article
        v-for="ingredient in filteredIngredients"
        :key="ingredient.id"
        class="admin-ingredient-row"
      >
        <div class="admin-ingredient-row__info">
          <h2>{{ ingredient.displayName ?? ingredient.name }}</h2>
          <p>{{ ingredient.shoppingCategory }} - {{ ingredient.defaultUnit }}</p>
        </div>

        <div class="admin-row-flags">
          <span :class="ingredient.isActive ? 'admin-flag--ok' : 'admin-flag--inactive'">
            {{ ingredient.isActive ? 'Ativo' : 'Inativo' }}
          </span>
        </div>

        <div class="admin-row-flags" aria-label="Qualidade do ingrediente">
          <span :class="hasNutrition(ingredient) ? 'admin-flag--ok' : 'admin-flag--warn'">
            {{ hasNutrition(ingredient) ? 'Com nutrição' : 'Sem nutrição' }}
          </span>
          <span :class="hasHouseholdMeasure(ingredient) ? 'admin-flag--ok' : 'admin-flag--warn'">
            {{ hasHouseholdMeasure(ingredient) ? 'Com medida' : 'Sem medida' }}
          </span>
          <span :class="hasCatalogLink(ingredient) ? 'admin-flag--ok' : 'admin-flag--warn'">
            {{ hasCatalogLink(ingredient) ? 'Na lista mãe' : 'Sem lista mãe' }}
          </span>
        </div>

        <div class="admin-row-flags">
          <span>{{ catalogLabel(ingredient) ?? 'Sem item de compra' }}</span>
          <span>{{ ingredient.purchaseRules.buyInWholePackages ? 'Pacote fechado' : 'Compra fracionada' }}</span>
        </div>

        <div class="admin-row-actions">
          <NuxtLink
            class="icon-button"
            :to="`/admin/ingredientes/${ingredient.id}`"
            :aria-label="`Editar ${ingredient.displayName ?? ingredient.name}`"
            title="Editar"
          >
            <BaseIcon name="edit" />
          </NuxtLink>
          <button
            v-if="ingredient.isActive"
            class="icon-button"
            type="button"
            :disabled="actionPendingId === ingredient.id"
            :aria-label="`Desativar ${ingredient.displayName ?? ingredient.name}`"
            title="Desativar"
            @click="setActive(ingredient, false)"
          >
            <BaseIcon name="archive" />
          </button>
          <button
            v-else
            class="icon-button"
            type="button"
            :disabled="actionPendingId === ingredient.id"
            :aria-label="`Ativar ${ingredient.displayName ?? ingredient.name}`"
            title="Ativar"
            @click="setActive(ingredient, true)"
          >
            <BaseIcon name="check" />
          </button>
        </div>
      </article>
    </section>
  </AdminShell>
</template>
