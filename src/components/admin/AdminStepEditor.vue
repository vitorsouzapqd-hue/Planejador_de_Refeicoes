<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type {
  AdminRecipeStep,
  AdminRecipeStepInput,
} from '../../composables/useAdminRecipes'

type EditableStep = AdminRecipeStepInput & {
  localId: string
}

const props = defineProps<{
  steps: AdminRecipeStep[]
  pending?: boolean
}>()

const emit = defineEmits<{
  save: [steps: AdminRecipeStepInput[]]
}>()

const validationMessage = ref<string | null>(null)
const items = ref<EditableStep[]>([])

const canSave = computed(() => getValidationError() === null)

watch(
  () => props.steps,
  (nextSteps) => {
    items.value = nextSteps.map((step, index) => ({
      localId: step.id,
      stepNumber: step.stepNumber || index + 1,
      instruction: step.instruction,
    }))
  },
  { immediate: true },
)

function addStep() {
  items.value.push({
    localId: `new-${Date.now()}-${items.value.length}`,
    stepNumber: items.value.length + 1,
    instruction: '',
  })
}

function removeStep(index: number) {
  items.value.splice(index, 1)
  renumberSteps()
}

function moveStep(index: number, direction: -1 | 1) {
  const targetIndex = index + direction
  if (targetIndex < 0 || targetIndex >= items.value.length) return

  const nextItems = [...items.value]
  const [item] = nextItems.splice(index, 1)
  if (!item) return

  nextItems.splice(targetIndex, 0, item)
  items.value = nextItems
  renumberSteps()
}

function submitSteps() {
  const error = getValidationError()
  validationMessage.value = error

  if (error) return

  emit(
    'save',
    items.value.map((step, index) => ({
      stepNumber: index + 1,
      instruction: step.instruction.trim(),
    })),
  )
}

function renumberSteps() {
  items.value = items.value.map((step, index) => ({
    ...step,
    stepNumber: index + 1,
  }))
}

function getValidationError() {
  if (items.value.length === 0) return null

  if (items.value.some((step) => !step.instruction.trim())) {
    return 'Remova ou preencha passos sem instrução.'
  }

  return null
}
</script>

<template>
  <section class="admin-form-section">
    <div class="admin-editor-header">
      <div>
        <p class="section-kicker">Passos de preparo</p>
        <p class="admin-helper-text">
          Os passos serão salvos na ordem exibida.
        </p>
      </div>

      <button class="secondary-button" type="button" @click="addStep">
        Adicionar passo
      </button>
    </div>

    <div v-if="items.length === 0" class="empty-state">
      <p>Nenhum passo cadastrado ainda.</p>
    </div>

    <article v-for="(step, index) in items" :key="step.localId" class="admin-nested-card">
      <div class="admin-nested-card__top">
        <strong>Passo {{ index + 1 }}</strong>
        <div class="admin-row-actions">
          <button
            class="secondary-button"
            type="button"
            :disabled="index === 0"
            @click="moveStep(index, -1)"
          >
            Subir
          </button>
          <button
            class="secondary-button"
            type="button"
            :disabled="index === items.length - 1"
            @click="moveStep(index, 1)"
          >
            Descer
          </button>
          <button class="secondary-button" type="button" @click="removeStep(index)">
            Remover
          </button>
        </div>
      </div>

      <div class="field">
        <label :for="`step-instruction-${step.localId}`">instruction</label>
        <textarea :id="`step-instruction-${step.localId}`" v-model="step.instruction" rows="3" />
      </div>
    </article>

    <p v-if="validationMessage" class="form-error">{{ validationMessage }}</p>

    <button class="primary-button" type="button" :disabled="pending || !canSave" @click="submitSteps">
      {{ pending ? 'Salvando...' : 'Salvar passos' }}
    </button>
  </section>
</template>
