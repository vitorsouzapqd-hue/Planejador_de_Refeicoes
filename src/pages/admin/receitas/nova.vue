<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { navigateTo } from '#imports'
import AdminShell from '../../../components/admin/AdminShell.vue'
import AdminRecipeForm from '../../../components/admin/AdminRecipeForm.vue'
import {
  useAdminRecipes,
  type AdminCategory,
  type AdminRecipeInput,
  type AdminTag,
} from '../../../composables/useAdminRecipes'

definePageMeta({
  middleware: 'admin-auth',
})

const pending = ref(false)
const loadingMeta = ref(true)
const errorMessage = ref<string | null>(null)
const categories = ref<AdminCategory[]>([])
const tags = ref<AdminTag[]>([])

const { createRecipe, isRecipeSlugAvailable, listCategories, listTags } = useAdminRecipes()

onMounted(loadMeta)

async function loadMeta() {
  loadingMeta.value = true
  errorMessage.value = null

  try {
    const [categoryList, tagList] = await Promise.all([listCategories(), listTags()])
    categories.value = categoryList
    tags.value = tagList
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Nao foi possivel carregar categorias e tags.')
  } finally {
    loadingMeta.value = false
  }
}

async function submitRecipe(input: AdminRecipeInput) {
  pending.value = true
  errorMessage.value = null

  try {
    const slugIsAvailable = await isRecipeSlugAvailable(input.slug)
    if (!slugIsAvailable) {
      errorMessage.value = 'Esse slug ja esta em uso. Ajuste o slug antes de salvar.'
      return
    }

    const id = await createRecipe(input)
    navigateTo(`/admin/receitas/${id}`)
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Nao foi possivel criar a receita.')
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
        <p class="admin-page-header__kicker">Nova receita</p>
        <h1 class="admin-page-header__title">Criar receita</h1>
        <p class="admin-page-header__sub">
          Cadastre a base da receita; depois complete imagem, ingredientes e modo de preparo.
        </p>
      </div>
      <NuxtLink class="secondary-button" to="/admin/receitas">
        <BaseIcon name="arrow-left" />
        Voltar
      </NuxtLink>
    </section>

    <section class="admin-card admin-editor-card">
      <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>
      <div v-if="loadingMeta" class="admin-loading-state">
        <div class="admin-spinner" aria-hidden="true" />
        <p>Carregando categorias e tags...</p>
      </div>
      <AdminRecipeForm
        v-else
        submit-label="Criar receita"
        :pending="pending"
        :categories="categories"
        :tags="tags"
        @submit="submitRecipe"
      />
    </section>
  </AdminShell>
</template>
