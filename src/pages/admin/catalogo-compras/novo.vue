<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { navigateTo } from '#imports'
import AdminShell from '../../../components/admin/AdminShell.vue'
import ShoppingCatalogForm from '../../../components/admin/ShoppingCatalogForm.vue'
import { useAdminIngredients } from '../../../composables/useAdminIngredients'
import { useShoppingCatalog, type ShoppingCatalogInput } from '../../../composables/useShoppingCatalog'
import type { Ingredient } from '../../../types/ingredient'

definePageMeta({
  middleware: 'admin-auth',
})

const catalog = useShoppingCatalog()
const { listIngredients } = useAdminIngredients()
const ingredients = ref<Ingredient[]>([])
const pending = ref(false)
const errorMessage = ref<string | null>(null)

onMounted(loadIngredients)

async function loadIngredients() {
  try {
    ingredients.value = await listIngredients()
  } catch {
    ingredients.value = []
  }
}

async function submitItem(input: ShoppingCatalogInput) {
  pending.value = true
  errorMessage.value = null

  try {
    const slugIsAvailable = await catalog.isSlugAvailable(input.slug)
    if (!slugIsAvailable) {
      errorMessage.value = 'Esse slug já está em uso. Ajuste o slug antes de salvar.'
      return
    }

    const id = await catalog.createItem(input)
    navigateTo(`/admin/catalogo-compras/${id}`)
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível criar o item da Lista de Compras.')
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
        <p class="admin-page-header__kicker">Novo item</p>
        <h1 class="admin-page-header__title">Criar item da Lista de Compras</h1>
        <p class="admin-page-header__sub">Cadastre um item de mercado sem precisar criar ficha nutricional.</p>
      </div>

      <NuxtLink class="secondary-button" to="/admin/catalogo-compras">
        <BaseIcon name="arrow-left" />
        Voltar
      </NuxtLink>
    </section>

    <section class="admin-card admin-editor-card">
      <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>
      <ShoppingCatalogForm
        :ingredients="ingredients"
        submit-label="Criar item"
        :pending="pending"
        @submit="submitItem"
      />
    </section>
  </AdminShell>
</template>
