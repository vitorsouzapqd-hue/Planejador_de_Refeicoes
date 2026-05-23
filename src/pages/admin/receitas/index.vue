<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AdminShell from '../../../components/admin/AdminShell.vue'
import AdminStatusBadge from '../../../components/admin/AdminStatusBadge.vue'
import { useAdminRecipes, type AdminRecipe } from '../../../composables/useAdminRecipes'
import type { RecipeStatus } from '../../../types/recipe'

definePageMeta({
  middleware: 'admin-auth',
})

const recipes = ref<AdminRecipe[]>([])
const pending = ref(true)
const errorMessage = ref<string | null>(null)

const { listRecipes, updateRecipeStatus } = useAdminRecipes()

onMounted(loadRecipes)

async function loadRecipes() {
  pending.value = true
  errorMessage.value = null

  try {
    recipes.value = await listRecipes()
  } catch {
    errorMessage.value = 'Não foi possível carregar as receitas.'
  } finally {
    pending.value = false
  }
}

async function setStatus(recipe: AdminRecipe, status: RecipeStatus) {
  await updateRecipeStatus(recipe.id, status)
  await loadRecipes()
}
</script>

<template>
  <AdminShell>
    <section class="admin-page-header">
      <div>
        <p class="hero-panel__kicker">Receitas</p>
        <h1>Gerenciar receitas</h1>
        <p>Controle publicação e edição das receitas do aluno.</p>
      </div>
      <NuxtLink class="primary-button" to="/admin/receitas/nova">Criar nova receita</NuxtLink>
    </section>

    <section v-if="pending" class="admin-card">
      <p>Carregando receitas...</p>
    </section>

    <section v-else-if="errorMessage" class="admin-card">
      <p>{{ errorMessage }}</p>
    </section>

    <section v-else class="admin-table-card">
      <article v-for="recipe in recipes" :key="recipe.id" class="admin-recipe-row">
        <div>
          <h2>{{ recipe.name }}</h2>
          <p>{{ recipe.slug }} · {{ recipe.type ?? 'sem tipo' }}</p>
        </div>

        <AdminStatusBadge :status="recipe.status" />

        <div class="admin-row-actions">
          <NuxtLink class="secondary-button" :to="`/admin/receitas/${recipe.id}`">Editar</NuxtLink>
          <button
            v-if="recipe.status !== 'published'"
            class="secondary-button"
            type="button"
            @click="setStatus(recipe, 'published')"
          >
            Publicar
          </button>
          <button
            v-if="recipe.status !== 'archived'"
            class="secondary-button"
            type="button"
            @click="setStatus(recipe, 'archived')"
          >
            Arquivar
          </button>
        </div>
      </article>
    </section>
  </AdminShell>
</template>
