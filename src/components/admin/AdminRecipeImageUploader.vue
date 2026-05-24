<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useAdminRecipes } from '../../composables/useAdminRecipes'

const props = defineProps<{
  recipeId: string
  recipeName: string
  imagePath: string | null
}>()

const emit = defineEmits<{
  changed: [imagePath: string | null]
}>()

const { getRecipeImagePublicUrl, removeRecipeImage, uploadRecipeImage } = useAdminRecipes()

const selectedFile = ref<File | null>(null)
const localPreviewUrl = ref<string | null>(null)
const imageFailed = ref(false)
const uploading = ref(false)
const removing = ref(false)
const errorMessage = ref<string | null>(null)

const currentImageUrl = computed(() => localPreviewUrl.value ?? getRecipeImagePublicUrl(props.imagePath))
const canUpload = computed(() => Boolean(selectedFile.value) && !uploading.value && !removing.value)
const canRemove = computed(() => Boolean(props.imagePath) && !uploading.value && !removing.value)

watch(
  () => props.imagePath,
  () => {
    imageFailed.value = false
  },
)

onBeforeUnmount(revokeLocalPreview)

function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0] ?? null

  errorMessage.value = null
  selectedFile.value = null
  revokeLocalPreview()

  if (!file) return

  if (!file.type.startsWith('image/')) {
    errorMessage.value = 'Escolha um arquivo de imagem.'
    input.value = ''
    return
  }

  selectedFile.value = file
  localPreviewUrl.value = URL.createObjectURL(file)
  imageFailed.value = false
}

async function submitUpload() {
  if (!selectedFile.value) return

  uploading.value = true
  errorMessage.value = null

  try {
    const imagePath = await uploadRecipeImage(props.recipeId, selectedFile.value)
    selectedFile.value = null
    revokeLocalPreview()
    emit('changed', imagePath)
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível enviar a imagem.')
  } finally {
    uploading.value = false
  }
}

async function submitRemove() {
  if (!props.imagePath) return
  if (!confirm(`Remover a imagem de "${props.recipeName}"?`)) return

  removing.value = true
  errorMessage.value = null

  try {
    await removeRecipeImage(props.recipeId, props.imagePath)
    selectedFile.value = null
    revokeLocalPreview()
    emit('changed', null)
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Não foi possível remover a imagem.')
  } finally {
    removing.value = false
  }
}

function revokeLocalPreview() {
  if (!localPreviewUrl.value) return

  URL.revokeObjectURL(localPreviewUrl.value)
  localPreviewUrl.value = null
}

function getErrorMessage(error: unknown, fallback: string) {
  if (error instanceof Error && error.message.trim()) return error.message
  return fallback
}
</script>

<template>
  <section class="admin-form-section">
    <div class="admin-editor-header">
      <div>
        <p class="section-kicker">Imagem da receita</p>
        <p class="admin-helper-text">
          Envie, substitua ou remova a foto principal exibida para o aluno.
        </p>
      </div>
    </div>

    <div class="admin-image-uploader">
      <div class="admin-image-preview">
        <img
          v-if="currentImageUrl && !imageFailed"
          :src="currentImageUrl"
          :alt="recipeName"
          @error="imageFailed = true"
        >
        <span v-else class="admin-image-placeholder" aria-hidden="true">
          {{ recipeName.slice(0, 1) }}
        </span>
      </div>

      <div class="admin-image-controls">
        <div class="field">
          <label for="recipe-image-file">Arquivo da imagem</label>
          <input
            id="recipe-image-file"
            type="file"
            accept="image/*"
            @change="handleFileChange"
          >
        </div>

        <p v-if="imagePath" class="admin-helper-text">
          Caminho salvo: {{ imagePath }}
        </p>

        <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>

        <div class="admin-row-actions admin-row-actions--inline">
          <button class="primary-button" type="button" :disabled="!canUpload" @click="submitUpload">
            <BaseIcon name="upload" />
            {{ uploading ? 'Enviando...' : imagePath ? 'Substituir imagem' : 'Enviar imagem' }}
          </button>
          <button class="danger-button" type="button" :disabled="!canRemove" @click="submitRemove">
            <BaseIcon name="trash" />
            Remover imagem
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
