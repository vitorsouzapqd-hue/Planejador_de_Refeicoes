<script setup lang="ts">
import { ref } from 'vue'
import { navigateTo } from '#imports'
import AdminShell from '../../../components/admin/AdminShell.vue'
import AdminMasterIngredientForm from '../../../components/admin/AdminMasterIngredientForm.vue'
import {
  useAdminIngredients,
  type AdminIngredientInput,
  type AdminIngredientMeasureInput,
} from '../../../composables/useAdminIngredients'

definePageMeta({
  middleware: 'admin-auth',
})

const pending = ref(false)
const errorMessage = ref<string | null>(null)

const { createIngredient, isIngredientSlugAvailable } = useAdminIngredients()

async function submitIngredient(
  input: AdminIngredientInput,
  measures: AdminIngredientMeasureInput[],
) {
  pending.value = true
  errorMessage.value = null

  try {
    const slugIsAvailable = await isIngredientSlugAvailable(input.slug)
    if (!slugIsAvailable) {
      errorMessage.value = 'Esse slug já está em uso. Ajuste o slug antes de salvar.'
      return
    }

    const id = await createIngredient(input, measures)
    navigateTo(`/admin/ingredientes/${id}`)
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível criar o ingrediente.')
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
        <p class="admin-page-header__kicker">Novo ingrediente</p>
        <h1 class="admin-page-header__title">Criar ingrediente</h1>
        <p class="admin-page-header__sub">Cadastre o ingrediente mestre antes de vinculá-lo às receitas.</p>
      </div>

      <NuxtLink class="secondary-button" to="/admin/ingredientes">
        <BaseIcon name="arrow-left" />
        Voltar
      </NuxtLink>
    </section>

    <section class="admin-card admin-editor-card">
      <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>

      <AdminMasterIngredientForm
        submit-label="Criar ingrediente"
        :pending="pending"
        @submit="submitIngredient"
      />
    </section>
  </AdminShell>
</template>
