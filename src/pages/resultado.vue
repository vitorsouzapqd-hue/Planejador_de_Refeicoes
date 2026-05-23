<script setup lang="ts">
import { computed, ref } from 'vue'
import StudentShell from '../components/layout/StudentShell.vue'
import PlanningFlowShell from '../components/planner/PlanningFlowShell.vue'
import PlanningResultTabs from '../components/planner/PlanningResultTabs.vue'
import { usePlannerState } from '../composables/usePlannerState'
import { resolveRecipeImage } from '../utils/recipeImages'
import type { ShoppingListItem } from '../types/planner'
import type { Recipe } from '../types/recipe'
import BaseIcon from '../components/ui/BaseIcon.vue'

type ResultTab = 'summary' | 'shopping' | 'preparation' | 'portioning'

const tabs: Array<{ id: ResultTab; label: string }> = [
  { id: 'summary', label: 'Resumo' },
  { id: 'shopping', label: 'Compras' },
  { id: 'preparation', label: 'Preparo' },
  { id: 'portioning', label: 'Porcionamento' },
]

const activeTab = ref<ResultTab>('summary')
const copyMessage = ref<string | null>(null)
const { planning } = usePlannerState()

const result = computed(() => planning.value.generatedResult)

function selectTab(tab: ResultTab) {
  activeTab.value = tab
  copyMessage.value = null
}

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

  copyText(result.value.portioningText, 'Planejamento copiado.')
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

function imageForRecipe(recipe: { imagePath: string | null; imageUrl?: string | null; recipeName: string; recipeSlug: string }) {
  return resolveRecipeImage({
    imagePath: recipe.imagePath,
    imageUrl: recipe.imageUrl,
    name: recipe.recipeName,
    slug: recipe.recipeSlug,
  } as Pick<Recipe, 'imagePath' | 'imageUrl' | 'name' | 'slug'>)
}

function formatShoppingItem(item: ShoppingListItem) {
  if (item.quantity === null) return item.displayName

  const suffix = item.isCritical ? ' (não aumentar)' : ''

  if (item.packageCount && item.packageSizeG && item.packageLabel && item.unit === 'g') {
    return `${formatQuantity(item.quantity, item.unit)} de ${item.displayName} (${item.packageCount} ${pluralizePackageLabel(item.packageLabel, item.packageCount)} de ${formatQuantity(item.packageSizeG, 'g')})${suffix}`
  }

  return `${formatQuantity(item.quantity, item.unit)} de ${item.displayName}${suffix}`
}

function formatQuantity(quantity: number, unit: string | null) {
  if (unit === 'g' && quantity >= 1000) return `${formatDecimal(quantity / 1000)}kg`
  if (unit === 'g') return `${formatDecimal(quantity)}g`
  if (!unit) return formatDecimal(quantity)

  return `${formatDecimal(quantity)} ${unit}`
}

function formatDecimal(value: number) {
  if (Number.isInteger(value)) return String(value)

  return new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 1,
  }).format(value)
}

function pluralizePackageLabel(label: string, count: number) {
  if (count === 1) return label
  if (label.endsWith('s')) return label

  return `${label}s`
}

function iconForShoppingCategory(category: string) {
  const normalizedCategory = category
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')

  if (normalizedCategory.includes('prote')) return 'beef'
  if (normalizedCategory.includes('carbo')) return 'grain'
  if (normalizedCategory.includes('fruta')) return 'apple'
  if (normalizedCategory.includes('veget')) return 'leaf'
  if (normalizedCategory.includes('bebida')) return 'bottle'
  if (normalizedCategory.includes('tempero')) return 'seasoning'

  return 'package'
}
</script>

<template>
  <StudentShell>
    <PlanningFlowShell
      :current-step="result ? 1 : undefined"
      :total-steps="result ? 1 : undefined"
      kicker="Resultado"
      title="Seu planejamento está pronto."
      text="O resultado representa todos os grupos planejados no mesmo fluxo."
    >
      <template v-if="result">
        <PlanningResultTabs
          :tabs="tabs"
          :active-tab="activeTab"
          @select="selectTab"
        />

        <section v-if="activeTab === 'summary'" class="guided-result-panel">
          <header class="guided-result-panel__header">
            <div>
              <p class="section-kicker">Resumo</p>
              <h2>Planejamento completo</h2>
            </div>
            <div class="button-row">
              <NuxtLink class="secondary-button" to="/compras">
                <BaseIcon name="shopping-cart" />
                Ver compras
              </NuxtLink>
              <NuxtLink class="secondary-button" to="/planejar?editar=1">
                <BaseIcon name="arrow-left" />
                Editar
              </NuxtLink>
            </div>
          </header>

          <p class="guided-result-total">Total: {{ result.totalPortions }} porções</p>

          <div class="result-group-list">
            <section
              v-for="group in result.groups"
              :key="group.groupSlug"
              class="result-group"
            >
              <header class="result-group__header">
                <h3>{{ group.groupName }}</h3>
                <span>{{ group.totalPortions }} porções</span>
              </header>

              <article
                v-for="recipe in group.recipes"
                :key="recipe.recipeId"
                class="review-item"
              >
                <span class="review-item__media">
                  <img
                    v-if="imageForRecipe(recipe)"
                    :src="imageForRecipe(recipe) ?? undefined"
                    :alt="recipe.recipeName"
                    loading="lazy"
                  >
                  <span v-else aria-hidden="true">{{ recipe.recipeName.slice(0, 1) }}</span>
                </span>

                <span class="review-item__body">
                  <strong>{{ recipe.recipeName }}</strong>
                  <span
                    v-for="(line, index) in recipe.lines"
                    :key="index"
                  >
                    {{ line.portions }} porções de {{ line.weightReadyG }}g
                  </span>
                  <small>Total pronto: {{ recipe.readyWeightG }}g</small>
                </span>
              </article>
            </section>
          </div>
        </section>

        <section v-else-if="activeTab === 'preparation'" class="guided-result-panel">
          <header class="guided-result-panel__header">
            <div>
              <p class="section-kicker">Preparo</p>
              <h2>Receitas escaladas</h2>
            </div>
          </header>

          <div class="guided-accordion-list">
            <details
              v-for="(recipe, index) in result.preparationRecipes"
              :key="`${recipe.groupSlug}-${recipe.recipeId}`"
              class="guided-accordion"
              :open="index === 0"
            >
              <summary>
                <span>{{ recipe.groupName }} · {{ recipe.recipeName }}</span>
                <small>{{ recipe.readyWeightG }}g pronto necessário</small>
              </summary>
              <pre class="result-text result-text--clean">{{ recipe.text }}</pre>
            </details>
          </div>
        </section>

        <section v-else-if="activeTab === 'shopping'" class="guided-result-panel">
          <header class="guided-result-panel__header">
            <div>
              <p class="section-kicker">Compras</p>
              <h2>Lista consolidada</h2>
            </div>
            <NuxtLink class="primary-button" to="/compras">
              Usar checklist
              <BaseIcon name="shopping-cart" />
            </NuxtLink>
          </header>

          <p class="result-section__intro">
            Marque os itens conforme for comprando na aba Compras.
          </p>

          <div class="result-shopping-preview">
            <section
              v-for="category in result.shoppingList"
              :key="category.category"
              v-show="category.items.some((shoppingItem) => !shoppingItem.isFreeSeasoning)"
              class="result-shopping-preview__group"
            >
              <h3>
                <BaseIcon :name="iconForShoppingCategory(category.category)" />
                {{ category.category }}
              </h3>
              <ul>
                <li
                  v-for="item in category.items.filter((shoppingItem) => !shoppingItem.isFreeSeasoning)"
                  :key="item.key"
                >
                  {{ formatShoppingItem(item) }}
                </li>
              </ul>
            </section>
          </div>
        </section>

        <section v-else class="guided-result-panel guided-result-panel--important">
          <header class="guided-result-panel__header">
            <div>
              <p class="section-kicker">Porcionamento</p>
              <h2>Ao final do preparo, separe:</h2>
            </div>
            <button class="primary-button" type="button" @click="copyPortioning">
              Copiar planejamento
              <BaseIcon name="clipboard-check" />
            </button>
          </header>

          <pre class="result-text result-text--clean">{{ result.portioningText }}</pre>
        </section>

        <p v-if="copyMessage" class="copy-feedback">
          {{ copyMessage }}
        </p>
      </template>

      <section v-else class="empty-state empty-state--soft empty-state--icon">
        <BaseIcon name="clipboard-check" />
        <p>Nenhum resultado gerado ainda.</p>
        <NuxtLink class="primary-button" to="/planejar">Voltar para planejar</NuxtLink>
      </section>
    </PlanningFlowShell>
  </StudentShell>
</template>
