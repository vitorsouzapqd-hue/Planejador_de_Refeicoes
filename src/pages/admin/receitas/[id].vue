<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from '#imports'
import AdminShell from '../../../components/admin/AdminShell.vue'
import AdminIngredientEditor from '../../../components/admin/AdminIngredientEditor.vue'
import AdminRecipeImageUploader from '../../../components/admin/AdminRecipeImageUploader.vue'
import AdminRecipeForm from '../../../components/admin/AdminRecipeForm.vue'
import AdminStepEditor from '../../../components/admin/AdminStepEditor.vue'
import AdminStatusBadge from '../../../components/admin/AdminStatusBadge.vue'
import {
  useAdminRecipes,
  type AdminCategory,
  type AdminRecipe,
  type AdminRecipeIngredient,
  type AdminRecipeIngredientInput,
  type AdminRecipeInput,
  type AdminRecipeStep,
  type AdminRecipeStepInput,
  type AdminTag,
} from '../../../composables/useAdminRecipes'
import type { RecipeStatus } from '../../../types/recipe'

definePageMeta({
  middleware: 'admin-auth',
})

const route = useRoute()
const recipe = ref<AdminRecipe | null>(null)
const ingredients = ref<AdminRecipeIngredient[]>([])
const steps = ref<AdminRecipeStep[]>([])
const categories = ref<AdminCategory[]>([])
const tags = ref<AdminTag[]>([])
const pending = ref(false)
const pendingIngredients = ref(false)
const pendingSteps = ref(false)
const loading = ref(true)
const errorMessage = ref<string | null>(null)
const savedMessage = ref<string | null>(null)

const {
  getRecipe,
  listCategories,
  listRecipeIngredients,
  listRecipeSteps,
  listTags,
  saveRecipeIngredients,
  saveRecipeSteps,
  updateRecipe,
  updateRecipeStatus,
} = useAdminRecipes()

onMounted(loadRecipe)

async function loadRecipe() {
  loading.value = true
  errorMessage.value = null

  try {
    const [loadedRecipe, categoryList, tagList] = await Promise.all([
      getRecipe(String(route.params.id)),
      listCategories(),
      listTags(),
    ])

    recipe.value = loadedRecipe
    categories.value = categoryList
    tags.value = tagList

    if (loadedRecipe) {
      const [ingredientList, stepList] = await Promise.all([
        listRecipeIngredients(loadedRecipe.id),
        listRecipeSteps(loadedRecipe.id),
      ])

      ingredients.value = ingredientList
      steps.value = stepList
    }
  } catch {
    errorMessage.value = 'Não foi possível carregar a receita.'
  } finally {
    loading.value = false
  }
}

async function submitRecipe(input: AdminRecipeInput) {
  if (!recipe.value) return

  pending.value = true
  errorMessage.value = null
  savedMessage.value = null

  try {
    await updateRecipe(recipe.value.id, input)
    await loadRecipe()
    savedMessage.value = 'Receita salva.'
  } catch {
    errorMessage.value = 'Não foi possível salvar a receita.'
  } finally {
    pending.value = false
  }
}

async function setStatus(status: RecipeStatus) {
  if (!recipe.value) return

  errorMessage.value = null
  savedMessage.value = null

  try {
    await updateRecipeStatus(recipe.value.id, status)
    await loadRecipe()
    savedMessage.value = 'Status atualizado.'
  } catch {
    errorMessage.value = 'Não foi possível atualizar o status.'
  }
}

async function submitIngredients(input: AdminRecipeIngredientInput[]) {
  if (!recipe.value) return

  pendingIngredients.value = true
  errorMessage.value = null
  savedMessage.value = null

  try {
    await saveRecipeIngredients(recipe.value.id, input)
    ingredients.value = await listRecipeIngredients(recipe.value.id)
    savedMessage.value = 'Ingredientes salvos.'
  } catch {
    errorMessage.value = 'Não foi possível salvar os ingredientes.'
  } finally {
    pendingIngredients.value = false
  }
}

async function submitSteps(input: AdminRecipeStepInput[]) {
  if (!recipe.value) return

  pendingSteps.value = true
  errorMessage.value = null
  savedMessage.value = null

  try {
    await saveRecipeSteps(recipe.value.id, input)
    steps.value = await listRecipeSteps(recipe.value.id)
    savedMessage.value = 'Passos salvos.'
  } catch {
    errorMessage.value = 'Não foi possível salvar os passos.'
  } finally {
    pendingSteps.value = false
  }
}

async function handleImageUploaded() {
  await loadRecipe()
  savedMessage.value = 'Imagem atualizada.'
}
</script>

<template>
  <AdminShell>
    <section class="admin-page-header">
      <div>
        <p class="hero-panel__kicker">Editar receita</p>
        <h1>{{ recipe?.name ?? 'Receita' }}</h1>
        <p>Edite a receita, ingredientes e modo de preparo.</p>
      </div>

      <AdminStatusBadge v-if="recipe" :status="recipe.status" />
    </section>

    <section v-if="loading" class="admin-card">
      <p>Carregando receita...</p>
    </section>

    <section v-else-if="!recipe" class="admin-card">
      <p>{{ errorMessage ?? 'Receita não encontrada.' }}</p>
      <NuxtLink class="secondary-button" to="/admin/receitas">Voltar</NuxtLink>
    </section>

    <section v-else class="admin-card">
      <div class="admin-row-actions admin-row-actions--top">
        <button class="secondary-button" type="button" @click="setStatus('published')">Publicar</button>
        <button class="secondary-button" type="button" @click="setStatus('archived')">Arquivar</button>
        <button class="secondary-button" type="button" @click="setStatus('draft')">Salvar como draft</button>
      </div>

      <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>
      <p v-if="savedMessage" class="admin-success-message">{{ savedMessage }}</p>

      <AdminRecipeImageUploader
        :recipe-id="recipe.id"
        :recipe-name="recipe.name"
        :image-path="recipe.imagePath"
        @uploaded="handleImageUploaded"
      />

      <AdminRecipeForm
        :initial-recipe="recipe"
        submit-label="Salvar alterações"
        :pending="pending"
        :categories="categories"
        :tags="tags"
        @submit="submitRecipe"
      />

      <AdminIngredientEditor
        :ingredients="ingredients"
        :pending="pendingIngredients"
        @save="submitIngredients"
      />

      <AdminStepEditor
        :steps="steps"
        :pending="pendingSteps"
        @save="submitSteps"
      />
    </section>
  </AdminShell>
</template>
