<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from '#imports'
import AdminShell from '../../../components/admin/AdminShell.vue'
import ShoppingCatalogTable from '../../../components/admin/ShoppingCatalogTable.vue'
import { normalize, shoppingCategoryOrder, useShoppingCatalog } from '../../../composables/useShoppingCatalog'
import type { ShoppingCatalogItem } from '../../../types/shoppingCatalog'

definePageMeta({
  middleware: 'admin-auth',
})

const route = useRoute()
const catalog = useShoppingCatalog()
const search = ref('')
const categoryFilter = ref(String(route.query.categoria ?? 'todos'))
const subcategoryFilter = ref('todos')
const activeFilter = ref(String(route.query.ativo ?? 'todos'))
const foodFilter = ref('todos')
const feedbackMessage = ref<string | null>(null)
const errorMessage = ref<string | null>(null)

const summary = computed(() => ({
  total: catalog.items.value.length,
  active: catalog.items.value.filter((item) => item.isActive).length,
  food: catalog.items.value.filter((item) => item.isFood).length,
  linked: catalog.items.value.filter((item) => item.ingredientId).length,
}))

const subcategoryOptions = computed(() => {
  if (categoryFilter.value === 'todos') return []

  return Array.from(
    new Set(
      catalog.items.value
        .filter((item) => item.shoppingCategory === categoryFilter.value && item.shoppingSubcategory)
        .map((item) => item.shoppingSubcategory as string),
    ),
  ).sort((a, b) => a.localeCompare(b, 'pt-BR'))
})

const filteredItems = computed(() => {
  const query = normalize(search.value)

  return catalog.items.value.filter((item) => {
    const searchable = [
      item.name,
      item.displayName ?? '',
      item.shoppingCategory,
      item.shoppingSubcategory ?? '',
      ...item.aliases,
    ].map(normalize).join(' ')
    const matchesSearch = !query || searchable.includes(query)
    const matchesCategory = categoryFilter.value === 'todos' || item.shoppingCategory === categoryFilter.value
    const matchesSubcategory =
      subcategoryFilter.value === 'todos' || item.shoppingSubcategory === subcategoryFilter.value
    const matchesActive =
      activeFilter.value === 'todos' ||
      (activeFilter.value === 'ativos' && item.isActive) ||
      (activeFilter.value === 'inativos' && !item.isActive)
    const matchesFood =
      foodFilter.value === 'todos' ||
      (foodFilter.value === 'alimentos' && item.isFood) ||
      (foodFilter.value === 'utilidades' && !item.isFood)

    return matchesSearch && matchesCategory && matchesSubcategory && matchesActive && matchesFood
  })
})

onMounted(() => {
  catalog.loadItems()
})

watch(categoryFilter, () => {
  subcategoryFilter.value = 'todos'
})

async function setActive(item: ShoppingCatalogItem, isActive: boolean) {
  feedbackMessage.value = null
  errorMessage.value = null

  try {
    await catalog.setItemActive(item.id, isActive)
    await catalog.loadItems()
    feedbackMessage.value = isActive ? 'Item ativado.' : 'Item desativado.'
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível atualizar o item.')
  }
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
        <p class="admin-page-header__kicker">Lista de Compras</p>
        <h1 class="admin-page-header__title">Gerenciar Lista de Compras</h1>
        <p class="admin-page-header__sub">Edite os itens de mercado usados na aba Compras.</p>
      </div>

      <NuxtLink class="primary-button" to="/admin/catalogo-compras/novo">
        <BaseIcon name="plus" />
        Criar item
      </NuxtLink>
    </section>

    <section class="admin-summary-row" aria-label="Resumo da lista de compras">
      <article class="admin-summary-card"><strong>{{ summary.total }}</strong><span>itens cadastrados</span></article>
      <article class="admin-summary-card"><strong>{{ summary.active }}</strong><span>ativos</span></article>
      <article class="admin-summary-card"><strong>{{ summary.food }}</strong><span>alimentos</span></article>
      <article class="admin-summary-card"><strong>{{ summary.linked }}</strong><span>com ingrediente</span></article>
    </section>

    <section class="admin-card">
      <div class="admin-filters">
        <div class="field">
          <label for="catalog-search">Busca</label>
          <div class="admin-input-shell">
            <BaseIcon name="search" />
            <input id="catalog-search" v-model="search" type="search" placeholder="Nome ou sinônimo">
          </div>
        </div>

        <div class="field">
          <label for="catalog-category-filter">Categoria</label>
          <select id="catalog-category-filter" v-model="categoryFilter">
            <option value="todos">Todas</option>
            <option v-for="category in shoppingCategoryOrder" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>

        <div class="field">
          <label for="catalog-active-filter">Ativo/inativo</label>
          <select id="catalog-active-filter" v-model="activeFilter">
            <option value="todos">Todos</option>
            <option value="ativos">Ativos</option>
            <option value="inativos">Inativos</option>
          </select>
        </div>

        <div class="field">
          <label for="catalog-subcategory-filter">Subcategoria</label>
          <select
            id="catalog-subcategory-filter"
            v-model="subcategoryFilter"
            :disabled="subcategoryOptions.length === 0"
          >
            <option value="todos">Todas</option>
            <option v-for="subcategory in subcategoryOptions" :key="subcategory" :value="subcategory">
              {{ subcategory }}
            </option>
          </select>
        </div>

        <div class="field">
          <label for="catalog-food-filter">Alimento/utilidade</label>
          <select id="catalog-food-filter" v-model="foodFilter">
            <option value="todos">Todos</option>
            <option value="alimentos">Alimentos</option>
            <option value="utilidades">Utilidades</option>
          </select>
        </div>
      </div>
    </section>

    <p v-if="feedbackMessage" class="admin-success-message">{{ feedbackMessage }}</p>
    <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>
    <p v-if="catalog.errorMessage.value" class="form-error">{{ catalog.errorMessage.value }}</p>

    <ShoppingCatalogTable
      :items="filteredItems"
      :pending="catalog.pending.value"
      @activate="setActive($event, true)"
      @deactivate="setActive($event, false)"
    />
  </AdminShell>
</template>
