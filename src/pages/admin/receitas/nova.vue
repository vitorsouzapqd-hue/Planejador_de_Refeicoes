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

const { createRecipe, listCategories, listTags } = useAdminRecipes()

onMounted(loadMeta)

async function loadMeta() {
  loadingMeta.value = true

  try {
    const [categoryList, tagList] = await Promise.all([listCategories(), listTags()])
    categories.value = categoryList
    tags.value = tagList
  } catch {
    errorMessage.value = 'Não foi possível carregar categorias e tags.'
  } finally {
    loadingMeta.value = false
  }
}

async function submitRecipe(input: AdminRecipeInput) {
  pending.value = true
  errorMessage.value = null

  try {
    const id = await createRecipe(input)
    navigateTo(`/admin/receitas/${id}`)
  } catch {
    errorMessage.value = 'Não foi possível criar a receita.'
  } finally {
    pending.value = false
  }
}
</script>

<template>
  <AdminShell>
    <section class="admin-page-header">
      <div>
        <p class="hero-panel__kicker">Nova receita</p>
        <h1>Criar receita</h1>
        <p>Cadastre os dados principais da receita. Ingredientes e preparo avançado entram na próxima etapa.</p>
      </div>
    </section>

    <section class="admin-card">
      <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>
      <p v-if="loadingMeta">Carregando categorias e tags...</p>
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
