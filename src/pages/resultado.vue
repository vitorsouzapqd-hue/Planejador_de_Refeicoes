<script setup lang="ts">
import { computed, ref } from 'vue'
import StudentShell from '../components/layout/StudentShell.vue'
import BaseIcon from '../components/ui/BaseIcon.vue'
import PlannedGroupsSummary from '../components/planner/result/PlannedGroupsSummary.vue'
import PortioningPreview from '../components/planner/result/PortioningPreview.vue'
import PreparationPreview from '../components/planner/result/PreparationPreview.vue'
import ResultActionStack from '../components/planner/result/ResultActionStack.vue'
import ResultHero from '../components/planner/result/ResultHero.vue'
import { usePlannerState } from '../composables/usePlannerState'

const copyMessage = ref<string | null>(null)
const { planning } = usePlannerState()

const result = computed(() => planning.value.generatedResult)
const plannedGroups = computed(() => result.value?.groups ?? [])
const preparationCards = computed(() => result.value?.preparationRecipes ?? [])
const visibleShoppingCategories = computed(() =>
  result.value?.shoppingList
    .filter((category) => category.items.length > 0) ?? [],
)
const totalShoppingItems = computed(() =>
  visibleShoppingCategories.value.reduce((total, category) => total + category.items.length, 0),
)
const totalGroups = computed(() => plannedGroups.value.length)
const totalPreps = computed(() => preparationCards.value.length)

async function copyText(text: string, successMessage: string) {
  copyMessage.value = null

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
    } else {
      copyWithFallback(text)
    }

    copyMessage.value = successMessage
  } catch {
    copyWithFallback(text)
    copyMessage.value = successMessage
  }
}

function copyPortioning() {
  if (!result.value) return

  copyText(result.value.portioningText, 'Porcionamento copiado.')
}

function copyWithFallback(text: string) {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', 'true')
  textarea.style.position = 'fixed'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}
</script>

<template>
  <StudentShell>
    <div v-if="result" class="result-page result-execution-center">
      <div class="result-ready-panel">
        <ResultHero
          :total-portions="result.totalPortions"
          :total-groups="totalGroups"
          :total-shopping-items="totalShoppingItems"
          :total-preps="totalPreps"
        />

        <ResultActionStack
          :categories="visibleShoppingCategories"
          :total-items="totalShoppingItems"
        />
      </div>

      <PlannedGroupsSummary :groups="plannedGroups" />

      <PreparationPreview :recipes="preparationCards" />

      <PortioningPreview
        :groups="plannedGroups"
        :total-portions="result.totalPortions"
        :copied="copyMessage === 'Porcionamento copiado.'"
        @copy="copyPortioning"
      />

      <p v-if="copyMessage" class="copy-feedback">
        {{ copyMessage }}
      </p>
    </div>

    <section v-else class="result-empty">
      <BaseIcon name="clipboard-check" />
      <p class="section-kicker">Resultado</p>
      <h1>Nenhum planejamento pronto</h1>
      <p>Crie um planejamento para ver compras, preparo e porcionamento em uma só tela.</p>
      <NuxtLink class="primary-button" to="/planejar">
        Criar planejamento
      </NuxtLink>
    </section>
  </StudentShell>
</template>
