<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { navigateTo, useRoute } from '#imports'
import AdminShell from '../../../components/admin/AdminShell.vue'
import ShoppingCatalogForm from '../../../components/admin/ShoppingCatalogForm.vue'
import { useAdminIngredients } from '../../../composables/useAdminIngredients'
import {
  useShoppingCatalog,
  type ShoppingCatalogInput,
  type ShoppingCatalogItem,
} from '../../../composables/useShoppingCatalog'
import type { Ingredient } from '../../../types/ingredient'

definePageMeta({
  middleware: 'admin-auth',
})

const route = useRoute()
const catalog = useShoppingCatalog()
const { listIngredients } = useAdminIngredients()
const item = ref<ShoppingCatalogItem | null>(null)
const ingredients = ref<Ingredient[]>([])
const loading = ref(true)
const pending = ref(false)
const errorMessage = ref<string | null>(null)
const savedMessage = ref<string | null>(null)

onMounted(async () => {
  await Promise.all([loadItem(), loadIngredients()])
})

async function loadItem() {
  loading.value = true
  errorMessage.value = null

  try {
    item.value = await catalog.getItem(String(route.params.id))
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível carregar o item da Lista de Compras.')
  } finally {
    loading.value = false
  }
}

async function loadIngredients() {
  try {
    ingredients.value = await listIngredients()
  } catch {
    ingredients.value = []
  }
}

async function submitItem(input: ShoppingCatalogInput) {
  if (!item.value) return

  pending.value = true
  errorMessage.value = null
  savedMessage.value = null

  try {
    const slugIsAvailable = await catalog.isSlugAvailable(input.slug, item.value.id)
    if (!slugIsAvailable) {
      errorMessage.value = 'Esse slug já está em uso. Ajuste o slug antes de salvar.'
      return
    }

    await catalog.updateItem(item.value.id, input)
    await loadItem()
    savedMessage.value = 'Item salvo.'
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível salvar o item da Lista de Compras.')
  } finally {
    pending.value = false
  }
}

async function deleteCurrentItem() {
  if (!item.value) return

  if (!confirm(`Excluir o item "${item.value.displayName ?? item.value.name}"? Essa ação só funciona quando ele não está vinculado a ingrediente.`)) return

  pending.value = true
  errorMessage.value = null
  savedMessage.value = null

  try {
    await catalog.deleteItemIfUnused(item.value.id)
    await navigateTo('/admin/catalogo-compras')
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível excluir o item da Lista de Compras.')
  } finally {
    pending.value = false
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
        <p class="admin-page-header__kicker">Editar Lista de Compras</p>
        <h1 class="admin-page-header__title">{{ item?.displayName ?? item?.name ?? 'Item da Lista de Compras' }}</h1>
        <p class="admin-page-header__sub">Atualize categoria, quantidade padrão, situação e vínculo opcional.</p>
      </div>

      <NuxtLink class="secondary-button" to="/admin/catalogo-compras">
        <BaseIcon name="arrow-left" />
        Voltar
      </NuxtLink>
    </section>

    <section v-if="loading" class="admin-card">
      <div class="admin-loading-state">
        <div class="admin-spinner" aria-hidden="true" />
        <p>Carregando item...</p>
      </div>
    </section>

    <section v-else-if="!item" class="admin-card">
      <div class="admin-empty-state">
        <BaseIcon name="alert" />
        <p>{{ errorMessage ?? 'Item não encontrado.' }}</p>
      </div>
    </section>

    <section v-else class="admin-card admin-editor-card">
      <div class="admin-row-actions admin-row-actions--top">
        <button class="danger-button" type="button" :disabled="pending" @click="deleteCurrentItem">
          <BaseIcon name="trash" />
          Excluir item
        </button>
      </div>

      <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>
      <p v-if="savedMessage" class="admin-success-message">{{ savedMessage }}</p>
      <ShoppingCatalogForm
        :initial-item="item"
        :ingredients="ingredients"
        submit-label="Salvar item"
        :pending="pending"
        @submit="submitItem"
      />
    </section>
  </AdminShell>
</template>
