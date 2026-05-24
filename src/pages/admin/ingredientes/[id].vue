<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { navigateTo, useRoute } from '#imports'
import AdminShell from '../../../components/admin/AdminShell.vue'
import AdminMasterIngredientForm from '../../../components/admin/AdminMasterIngredientForm.vue'
import {
  useAdminIngredients,
  type AdminIngredientInput,
  type AdminIngredientMeasureInput,
} from '../../../composables/useAdminIngredients'
import type { Ingredient } from '../../../types/ingredient'

definePageMeta({
  middleware: 'admin-auth',
})

const route = useRoute()
const ingredient = ref<Ingredient | null>(null)
const loading = ref(true)
const pending = ref(false)
const errorMessage = ref<string | null>(null)
const savedMessage = ref<string | null>(null)

const {
  deleteIngredientIfUnused,
  getIngredient,
  isIngredientSlugAvailable,
  updateIngredient,
} = useAdminIngredients()

onMounted(loadIngredient)

async function loadIngredient() {
  loading.value = true
  errorMessage.value = null

  try {
    ingredient.value = await getIngredient(String(route.params.id))
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível carregar o ingrediente.')
  } finally {
    loading.value = false
  }
}

async function submitIngredient(
  input: AdminIngredientInput,
  measures: AdminIngredientMeasureInput[],
) {
  if (!ingredient.value) return

  pending.value = true
  errorMessage.value = null
  savedMessage.value = null

  try {
    const slugIsAvailable = await isIngredientSlugAvailable(input.slug, ingredient.value.id)
    if (!slugIsAvailable) {
      errorMessage.value = 'Esse slug já está em uso. Ajuste o slug antes de salvar.'
      return
    }

    await updateIngredient(ingredient.value.id, input, measures)
    await loadIngredient()
    savedMessage.value = 'Ingrediente salvo.'
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível salvar o ingrediente.')
  } finally {
    pending.value = false
  }
}

async function deleteCurrentIngredient() {
  if (!ingredient.value) return

  if (!confirm(`Excluir o ingrediente "${ingredient.value.displayName ?? ingredient.value.name}"? Essa ação só funciona quando não há vínculos com receitas ou Lista de Compras.`)) return

  pending.value = true
  errorMessage.value = null
  savedMessage.value = null

  try {
    await deleteIngredientIfUnused(ingredient.value.id)
    await navigateTo('/admin/ingredientes')
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível excluir o ingrediente.')
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
        <p class="admin-page-header__kicker">Editar ingrediente</p>
        <h1 class="admin-page-header__title">{{ ingredient?.displayName ?? ingredient?.name ?? 'Ingrediente' }}</h1>
        <p class="admin-page-header__sub">Atualize a fonte mestre usada pelas receitas.</p>
      </div>

      <NuxtLink class="secondary-button" to="/admin/ingredientes">
        <BaseIcon name="arrow-left" />
        Voltar
      </NuxtLink>
    </section>

    <section v-if="loading" class="admin-card">
      <div class="admin-loading-state">
        <div class="admin-spinner" aria-hidden="true" />
        <p>Carregando ingrediente...</p>
      </div>
    </section>

    <section v-else-if="!ingredient" class="admin-card">
      <div class="admin-empty-state">
        <BaseIcon name="alert" />
        <p>{{ errorMessage ?? 'Ingrediente não encontrado.' }}</p>
        <NuxtLink class="secondary-button" to="/admin/ingredientes">
          Voltar para ingredientes
        </NuxtLink>
      </div>
    </section>

    <section v-else class="admin-card admin-editor-card">
      <div class="admin-row-actions admin-row-actions--top">
        <button class="danger-button" type="button" :disabled="pending" @click="deleteCurrentIngredient">
          <BaseIcon name="trash" />
          Excluir ingrediente
        </button>
      </div>

      <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>
      <p v-if="savedMessage" class="admin-success-message">{{ savedMessage }}</p>

      <AdminMasterIngredientForm
        :initial-ingredient="ingredient"
        submit-label="Salvar ingrediente"
        :pending="pending"
        @submit="submitIngredient"
      />
    </section>
  </AdminShell>
</template>
