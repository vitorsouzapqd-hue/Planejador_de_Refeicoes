<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import AdminShell from '../../components/admin/AdminShell.vue'
import {
  useAdminRecipes,
  type AdminCategory,
  type AdminCategoryInput,
  type AdminTag,
  type AdminTagInput,
} from '../../composables/useAdminRecipes'

definePageMeta({
  middleware: 'admin-auth',
})

const {
  createCategory,
  createTag,
  deleteCategoryIfUnused,
  deleteTagIfUnused,
  getCategoryUsageCount,
  getTagUsageCount,
  isCategorySlugAvailable,
  isTagSlugAvailable,
  listCategories,
  listTags,
  updateCategory,
  updateTag,
} = useAdminRecipes()

const categories = ref<AdminCategory[]>([])
const tags = ref<AdminTag[]>([])
const categoryUsage = ref<Record<string, number>>({})
const tagUsage = ref<Record<string, number>>({})
const loading = ref(true)
const pending = ref(false)
const errorMessage = ref<string | null>(null)
const savedMessage = ref<string | null>(null)
const editingCategoryId = ref<string | null>(null)
const editingTagId = ref<string | null>(null)

const categoryForm = reactive<AdminCategoryInput>({
  name: '',
  slug: '',
  description: '',
  isActive: true,
  sortOrder: 0,
})
const tagForm = reactive<AdminTagInput>({
  name: '',
  slug: '',
})

const categorySubmitLabel = computed(() => editingCategoryId.value ? 'Salvar categoria' : 'Criar categoria')
const tagSubmitLabel = computed(() => editingTagId.value ? 'Salvar tag' : 'Criar tag')

onMounted(loadMetadata)

async function loadMetadata() {
  loading.value = true
  errorMessage.value = null

  try {
    const [categoryList, tagList] = await Promise.all([listCategories(), listTags()])
    categories.value = categoryList
    tags.value = tagList
    await loadUsageCounts(categoryList, tagList)
  } catch {
    errorMessage.value = 'Não foi possível carregar os metadados.'
  } finally {
    loading.value = false
  }
}

async function loadUsageCounts(categoryList: AdminCategory[], tagList: AdminTag[]) {
  const categoryEntries = await Promise.all(
    categoryList.map(async (category) => [category.id, await getCategoryUsageCount(category.id)] as const),
  )
  const tagEntries = await Promise.all(
    tagList.map(async (tag) => [tag.id, await getTagUsageCount(tag.id)] as const),
  )

  categoryUsage.value = Object.fromEntries(categoryEntries)
  tagUsage.value = Object.fromEntries(tagEntries)
}

async function submitCategory() {
  const error = getCategoryValidationError()
  if (error) {
    errorMessage.value = error
    return
  }

  pending.value = true
  errorMessage.value = null
  savedMessage.value = null

  try {
    const slugIsAvailable = await isCategorySlugAvailable(categoryForm.slug, editingCategoryId.value ?? undefined)
    if (!slugIsAvailable) {
      errorMessage.value = 'Esse slug de categoria já está em uso.'
      return
    }

    if (editingCategoryId.value) {
      await updateCategory(editingCategoryId.value, categoryForm)
      savedMessage.value = 'Categoria salva.'
    } else {
      await createCategory(categoryForm)
      savedMessage.value = 'Categoria criada.'
    }

    resetCategoryForm()
    await loadMetadata()
  } catch {
    errorMessage.value = 'Não foi possível salvar a categoria.'
  } finally {
    pending.value = false
  }
}

async function submitTag() {
  const error = getTagValidationError()
  if (error) {
    errorMessage.value = error
    return
  }

  pending.value = true
  errorMessage.value = null
  savedMessage.value = null

  try {
    const slugIsAvailable = await isTagSlugAvailable(tagForm.slug, editingTagId.value ?? undefined)
    if (!slugIsAvailable) {
      errorMessage.value = 'Esse slug de tag já está em uso.'
      return
    }

    if (editingTagId.value) {
      await updateTag(editingTagId.value, tagForm)
      savedMessage.value = 'Tag salva.'
    } else {
      await createTag(tagForm)
      savedMessage.value = 'Tag criada.'
    }

    resetTagForm()
    await loadMetadata()
  } catch {
    errorMessage.value = 'Não foi possível salvar a tag.'
  } finally {
    pending.value = false
  }
}

async function deleteCategory(category: AdminCategory) {
  const usageCount = categoryUsage.value[category.id] ?? 0
  if (usageCount > 0) {
    errorMessage.value = 'Categoria vinculada a receitas. Mova as receitas antes de excluir.'
    return
  }

  if (!confirm(`Excluir a categoria "${category.name}"? Essa ação não pode ser desfeita.`)) return

  pending.value = true
  errorMessage.value = null
  savedMessage.value = null

  try {
    await deleteCategoryIfUnused(category.id)
    if (editingCategoryId.value === category.id) resetCategoryForm()
    await loadMetadata()
    savedMessage.value = 'Categoria excluída.'
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível excluir a categoria.')
  } finally {
    pending.value = false
  }
}

async function deleteTag(tag: AdminTag) {
  const usageCount = tagUsage.value[tag.id] ?? 0
  if (usageCount > 0) {
    errorMessage.value = 'Tag vinculada a receitas. Remova a tag das receitas antes de excluir.'
    return
  }

  if (!confirm(`Excluir a tag "${tag.name}"? Essa ação não pode ser desfeita.`)) return

  pending.value = true
  errorMessage.value = null
  savedMessage.value = null

  try {
    await deleteTagIfUnused(tag.id)
    if (editingTagId.value === tag.id) resetTagForm()
    await loadMetadata()
    savedMessage.value = 'Tag excluída.'
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível excluir a tag.')
  } finally {
    pending.value = false
  }
}

function editCategory(category: AdminCategory) {
  editingCategoryId.value = category.id
  categoryForm.name = category.name
  categoryForm.slug = category.slug
  categoryForm.description = category.description
  categoryForm.isActive = category.isActive
  categoryForm.sortOrder = category.sortOrder
}

function editTag(tag: AdminTag) {
  editingTagId.value = tag.id
  tagForm.name = tag.name
  tagForm.slug = tag.slug
}

function resetCategoryForm() {
  editingCategoryId.value = null
  categoryForm.name = ''
  categoryForm.slug = ''
  categoryForm.description = ''
  categoryForm.isActive = true
  categoryForm.sortOrder = 0
}

function resetTagForm() {
  editingTagId.value = null
  tagForm.name = ''
  tagForm.slug = ''
}

function fillCategorySlug() {
  if (!categoryForm.slug) categoryForm.slug = slugify(categoryForm.name)
}

function fillTagSlug() {
  if (!tagForm.slug) tagForm.slug = slugify(tagForm.name)
}

function getCategoryValidationError() {
  if (!categoryForm.name.trim()) return 'Informe o nome da categoria.'
  if (!categoryForm.slug.trim()) return 'Informe o slug da categoria.'
  if (Number(categoryForm.sortOrder) < 0) return 'A ordem precisa ser maior ou igual a zero.'

  return null
}

function getTagValidationError() {
  if (!tagForm.name.trim()) return 'Informe o nome da tag.'
  if (!tagForm.slug.trim()) return 'Informe o slug da tag.'

  return null
}

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
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
        <p class="admin-page-header__kicker">Metadados</p>
        <h1 class="admin-page-header__title">Categorias e tags</h1>
        <p class="admin-page-header__sub">Organize os filtros usados nas receitas.</p>
      </div>
    </section>

    <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>
    <p v-if="savedMessage" class="admin-success-message">{{ savedMessage }}</p>

    <section class="admin-card">
      <div class="admin-editor-header">
        <div>
          <p class="section-kicker">Categorias</p>
          <h2>{{ editingCategoryId ? 'Editar categoria' : 'Criar categoria' }}</h2>
        </div>
        <button v-if="editingCategoryId" class="secondary-button" type="button" @click="resetCategoryForm">
          Nova categoria
        </button>
      </div>

      <form class="admin-form" @submit.prevent="submitCategory">
        <div class="admin-form-grid">
          <div class="field">
            <label for="category-name">Nome</label>
            <input id="category-name" v-model="categoryForm.name" type="text" required @blur="fillCategorySlug">
          </div>

          <div class="field">
            <label for="category-slug">Slug</label>
            <input id="category-slug" v-model="categoryForm.slug" type="text" required>
          </div>

          <div class="field">
            <label for="category-order">Ordem</label>
            <input id="category-order" v-model.number="categoryForm.sortOrder" type="number" min="0" step="1">
          </div>

          <label class="checkbox-field checkbox-field--aligned">
            <input v-model="categoryForm.isActive" type="checkbox">
            Ativa
          </label>
        </div>

        <div class="field">
          <label for="category-description">Descrição</label>
          <textarea id="category-description" v-model="categoryForm.description" rows="2" />
        </div>

        <button class="primary-button" type="submit" :disabled="pending">
          {{ pending ? 'Salvando...' : categorySubmitLabel }}
        </button>
      </form>

      <section v-if="loading" class="empty-state">
        <p>Carregando categorias...</p>
      </section>

      <section v-else-if="categories.length === 0" class="empty-state">
        <p>Nenhuma categoria cadastrada. Crie a primeira categoria acima.</p>
      </section>

      <article v-for="category in categories" v-else :key="category.id" class="admin-ingredient-row admin-meta-row">
        <div>
          <h2>{{ category.name }}</h2>
          <p>{{ category.slug }} - ordem {{ category.sortOrder }}</p>
        </div>

        <div class="admin-row-flags">
          <span>{{ category.isActive ? 'Ativa' : 'Inativa' }}</span>
          <span>{{ categoryUsage[category.id] ?? 0 }} receitas</span>
        </div>

        <div class="admin-row-actions">
          <button class="secondary-button" type="button" @click="editCategory(category)">Editar</button>
          <button
            v-if="(categoryUsage[category.id] ?? 0) === 0"
            class="danger-button"
            type="button"
            :disabled="pending"
            @click="deleteCategory(category)"
          >
            Excluir
          </button>
        </div>
      </article>
    </section>

    <section class="admin-card">
      <div class="admin-editor-header">
        <div>
          <p class="section-kicker">Tags</p>
          <h2>{{ editingTagId ? 'Editar tag' : 'Criar tag' }}</h2>
        </div>
        <button v-if="editingTagId" class="secondary-button" type="button" @click="resetTagForm">
          Nova tag
        </button>
      </div>

      <form class="admin-form" @submit.prevent="submitTag">
        <div class="admin-form-grid">
          <div class="field">
            <label for="tag-name">Nome</label>
            <input id="tag-name" v-model="tagForm.name" type="text" required @blur="fillTagSlug">
          </div>

          <div class="field">
            <label for="tag-slug">Slug</label>
            <input id="tag-slug" v-model="tagForm.slug" type="text" required>
          </div>
        </div>

        <button class="primary-button" type="submit" :disabled="pending">
          {{ pending ? 'Salvando...' : tagSubmitLabel }}
        </button>
      </form>

      <section v-if="loading" class="empty-state">
        <p>Carregando tags...</p>
      </section>

      <section v-else-if="tags.length === 0" class="empty-state">
        <p>Nenhuma tag cadastrada. Crie a primeira tag acima.</p>
      </section>

      <article v-for="tag in tags" v-else :key="tag.id" class="admin-ingredient-row admin-meta-row">
        <div>
          <h2>{{ tag.name }}</h2>
          <p>{{ tag.slug }}</p>
        </div>

        <div class="admin-row-flags">
          <span>{{ tagUsage[tag.id] ?? 0 }} receitas</span>
        </div>

        <div class="admin-row-actions">
          <button class="secondary-button" type="button" @click="editTag(tag)">Editar</button>
          <button
            v-if="(tagUsage[tag.id] ?? 0) === 0"
            class="danger-button"
            type="button"
            :disabled="pending"
            @click="deleteTag(tag)"
          >
            Excluir
          </button>
        </div>
      </article>
    </section>
  </AdminShell>
</template>
