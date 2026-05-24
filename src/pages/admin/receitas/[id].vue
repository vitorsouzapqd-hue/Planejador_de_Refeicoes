<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { navigateTo, useRoute } from '#imports'
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
import type { Ingredient } from '../../../types/ingredient'
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
const masterIngredients = ref<Ingredient[]>([])
const pending = ref(false)
const pendingIngredients = ref(false)
const pendingSteps = ref(false)
const loading = ref(true)
const errorMessage = ref<string | null>(null)
const savedMessage = ref<string | null>(null)

const {
  deleteRecipe,
  getRecipe,
  isRecipeSlugAvailable,
  listCategories,
  listIngredients,
  listRecipeIngredients,
  listRecipeSteps,
  listTags,
  saveRecipeIngredients,
  saveRecipeSteps,
  updateRecipe,
  updateRecipeStatus,
} = useAdminRecipes()

const publicationPendingItems = computed(() => {
  if (!recipe.value) return []

  const items: string[] = []
  if (!recipe.value.name.trim()) items.push('nome')
  if (!recipe.value.categoryId) items.push('categoria')
  if (!recipe.value.imagePath) items.push('imagem')
  if (!recipe.value.baseRawWeightG || recipe.value.baseRawWeightG <= 0) items.push('peso cru base')
  if (!recipe.value.baseReadyWeightG || recipe.value.baseReadyWeightG <= 0) items.push('peso pronto base')
  if (!ingredients.value.some((ingredient) => ingredient.ingredientRole === 'main')) {
    items.push('ingrediente principal')
  }
  if (steps.value.length === 0) items.push('modo de preparo')

  return items
})

onMounted(loadRecipe)

async function loadRecipe() {
  loading.value = true
  errorMessage.value = null

  try {
    const [loadedRecipe, categoryList, tagList, ingredientList] = await Promise.all([
      getRecipe(String(route.params.id)),
      listCategories(),
      listTags(),
      listIngredients(),
    ])

    recipe.value = loadedRecipe
    categories.value = categoryList
    tags.value = tagList
    masterIngredients.value = ingredientList

    if (loadedRecipe) {
      const [recipeIngredients, recipeSteps] = await Promise.all([
        listRecipeIngredients(loadedRecipe.id),
        listRecipeSteps(loadedRecipe.id),
      ])

      ingredients.value = recipeIngredients
      steps.value = recipeSteps
    }
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível carregar a receita.')
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
    const slugIsAvailable = await isRecipeSlugAvailable(input.slug, recipe.value.id)
    if (!slugIsAvailable) {
      errorMessage.value = 'Esse slug já está em uso. Ajuste o slug antes de salvar.'
      return
    }

    await updateRecipe(recipe.value.id, input)
    await loadRecipe()
    savedMessage.value = 'Receita salva.'
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível salvar a receita.')
  } finally {
    pending.value = false
  }
}

async function setStatus(status: RecipeStatus) {
  if (!recipe.value) return

  errorMessage.value = null
  savedMessage.value = null

  if (status === 'published' && publicationPendingItems.value.length > 0) {
    errorMessage.value = `Resolva antes de publicar: ${publicationPendingItems.value.join(', ')}.`
    return
  }

  pending.value = true

  try {
    await updateRecipeStatus(recipe.value.id, status)
    await loadRecipe()
    savedMessage.value = status === 'published'
      ? 'Receita publicada.'
      : status === 'archived'
        ? 'Receita arquivada.'
        : 'Receita voltou para rascunho.'
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível atualizar a situação.')
  } finally {
    pending.value = false
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
    await refreshRecipeOnly()
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível salvar os ingredientes.')
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
    await refreshRecipeOnly()
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível salvar os passos.')
  } finally {
    pendingSteps.value = false
  }
}

async function handleImageChanged() {
  await refreshRecipeOnly()
  savedMessage.value = 'Imagem atualizada.'
}

async function refreshRecipeOnly() {
  if (!recipe.value) return
  recipe.value = await getRecipe(recipe.value.id)
}

async function deleteCurrentRecipe() {
  if (!recipe.value) return

  const confirmation =
    recipe.value.status === 'published'
      ? `Excluir a receita publicada "${recipe.value.name}"? Ela sairá do app do aluno.`
      : `Excluir a receita "${recipe.value.name}"? Ingredientes, passos e tags vinculadas serão removidos.`

  if (!confirm(confirmation)) return

  pending.value = true
  errorMessage.value = null
  savedMessage.value = null

  try {
    await deleteRecipe(recipe.value.id)
    await navigateTo('/admin/receitas')
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível excluir a receita.')
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
        <p class="admin-page-header__kicker">Editar receita</p>
        <h1 class="admin-page-header__title">{{ recipe?.name ?? 'Receita' }}</h1>
        <p class="admin-page-header__sub">Edite a receita, ingredientes, imagem e modo de preparo.</p>
      </div>

      <div class="admin-row-actions admin-row-actions--inline">
        <AdminStatusBadge v-if="recipe" :status="recipe.status" />
        <NuxtLink class="secondary-button" to="/admin/receitas">
          <BaseIcon name="arrow-left" />
          Voltar
        </NuxtLink>
      </div>
    </section>

    <section v-if="loading" class="admin-card">
      <div class="admin-loading-state">
        <div class="admin-spinner" aria-hidden="true" />
        <p>Carregando receita...</p>
      </div>
    </section>

    <section v-else-if="!recipe" class="admin-card">
      <div class="admin-empty-state">
        <BaseIcon name="alert" />
        <p>{{ errorMessage ?? 'Receita não encontrada.' }}</p>
        <NuxtLink class="secondary-button" to="/admin/receitas">Voltar</NuxtLink>
      </div>
    </section>

    <section v-else class="admin-card admin-editor-card">
      <div class="admin-row-actions admin-row-actions--top">
        <button class="secondary-button" type="button" :disabled="pending" @click="setStatus('published')">
          <BaseIcon name="check" />
          Publicar
        </button>
        <button class="secondary-button" type="button" :disabled="pending" @click="setStatus('archived')">
          <BaseIcon name="archive" />
          Arquivar
        </button>
        <button class="secondary-button" type="button" :disabled="pending" @click="setStatus('draft')">
          <BaseIcon name="edit" />
          Voltar para rascunho
        </button>
        <button class="danger-button" type="button" :disabled="pending" @click="deleteCurrentRecipe">
          <BaseIcon name="trash" />
          Excluir receita
        </button>
      </div>

      <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>
      <p v-if="savedMessage" class="admin-success-message">{{ savedMessage }}</p>

      <section v-if="publicationPendingItems.length" class="admin-warning-message">
        <strong>Pendências para publicar</strong>
        <p>{{ publicationPendingItems.join(', ') }}</p>
      </section>

      <AdminRecipeImageUploader
        :recipe-id="recipe.id"
        :recipe-name="recipe.name"
        :image-path="recipe.imagePath"
        @changed="handleImageChanged"
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
        :master-ingredients="masterIngredients"
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
