<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { navigateTo, useRoute } from '#imports'
import StudentShell from '../components/layout/StudentShell.vue'
import PlanningActionBar from '../components/planner/PlanningActionBar.vue'
import PlanningFlowShell from '../components/planner/PlanningFlowShell.vue'
import PlanningTypeSelector from '../components/planner/PlanningTypeSelector.vue'
import ProteinPortionDistributionStep from '../components/planner/ProteinPortionDistributionStep.vue'
import ProteinPortionSingleRecipeStep from '../components/planner/ProteinPortionSingleRecipeStep.vue'
import ProteinRecipeCard from '../components/planner/ProteinRecipeCard.vue'
import ProteinReviewStep from '../components/planner/ProteinReviewStep.vue'
import StepperControl from '../components/planner/StepperControl.vue'
import {
  getPlanningGroup,
  getPlanningGroupItemName,
  getPlanningGroupName,
  getPlanningGroupSingularName,
  normalizePlanningGroupSlug,
  planningGroups,
} from '../data/planningGroups'
import { usePlannerState } from '../composables/usePlannerState'
import { useRecipes } from '../composables/useRecipes'
import {
  calculateGroupTotalPortions,
  generatePlanningResult,
} from '../services/planningCalculator'
import type {
  PlanningGroupPlan,
  PlanningGroupSlug,
  PlanningGroupWithData,
  PlanningLine,
  PlanningRecipe,
  PlanningRecipeWithData,
} from '../types/planner'
import type { Recipe } from '../types/recipe'

type PlannerStep = 'planning-type' | 'total-portions' | 'recipes' | 'distribution' | 'weights' | 'review'
type FilterId = string

const filtersByGroup: Record<PlanningGroupSlug, Array<{ id: FilterId; label: string }>> = {
  proteinas: [
    { id: 'todos', label: 'Todos' },
    { id: 'frango', label: 'Frango' },
    { id: 'carne', label: 'Carne' },
    { id: 'suino', label: 'Suíno' },
    { id: 'peixe', label: 'Peixe' },
    { id: 'outros', label: 'Outros' },
  ],
  carboidratos: [
    { id: 'todos', label: 'Todos' },
    { id: 'arroz', label: 'Arroz' },
    { id: 'batata', label: 'Batata' },
    { id: 'massa', label: 'Macarrão' },
    { id: 'mandioca', label: 'Mandioca' },
    { id: 'outros', label: 'Outros' },
  ],
  saladas: [
    { id: 'todos', label: 'Todos' },
    { id: 'folhas', label: 'Folhas' },
    { id: 'legumes', label: 'Legumes' },
    { id: 'mix', label: 'Mix' },
    { id: 'outros', label: 'Outros' },
  ],
  frutas: [
    { id: 'todos', label: 'Todos' },
    { id: 'rua', label: 'Frutas de Rua' },
    { id: 'casa', label: 'Frutas de Casa' },
  ],
}

const route = useRoute()
const activeStep = ref<PlannerStep>('planning-type')
const activeGroupIndex = ref(0)
const activeWeightIndex = ref(0)
const search = ref('')
const activeFilter = ref<FilterId>('todos')
const selectedGroupIds = ref<PlanningGroupSlug[]>([])
const moduleMessage = ref<string | null>(null)
const groupSelectionError = ref<string | null>(null)
const totalPortionsError = ref<string | null>(null)
const selectionError = ref<string | null>(null)
const distributionValidationMessage = ref<string | null>(null)
const weightValidationMessage = ref<string | null>(null)

const { recipes, pending, error, loadRecipes } = useRecipes()
const {
  planning,
  loadPlanning,
  setSelectedGroups,
  setGroupTotalPortionsGoal,
  setGroupSelectedRecipes,
  setGeneratedResult,
} = usePlannerState()

onMounted(async () => {
  loadPlanning()
  selectedGroupIds.value = [...planning.value.selectedGroupSlugs]

  await loadRecipes()

  if (route.query.editar === '1' && planning.value.selectedGroupSlugs.length > 0) {
    activeStep.value = getAllPlanningErrors().length === 0 ? 'review' : 'weights'
    activeGroupIndex.value = Math.max(0, planning.value.selectedGroupSlugs.length - 1)
  }
})

const selectedFunctionalGroups = computed(() => planning.value.selectedGroupSlugs)
const totalFlowSteps = computed(() => 1 + Math.max(selectedFunctionalGroups.value.length, 1) * 4 + 1)
const currentGroupSlug = computed(() => selectedFunctionalGroups.value[activeGroupIndex.value] ?? null)
const currentGroup = computed(() => getPlanningGroup(currentGroupSlug.value))
const currentGroupPlan = computed(() => currentGroupSlug.value ? getGroupPlan(currentGroupSlug.value) : null)
const currentGroupName = computed(() => getPlanningGroupName(currentGroupSlug.value))
const currentGroupSingularName = computed(() => getPlanningGroupSingularName(currentGroupSlug.value))
const currentGroupItemName = computed(() => getPlanningGroupItemName(currentGroupSlug.value))
const currentFilters = computed(() => currentGroupSlug.value ? filtersByGroup[currentGroupSlug.value] : filtersByGroup.proteinas)
const currentTotalPortionsGoal = computed(() => currentGroupPlan.value?.totalPortionsGoal ?? 1)
const currentGroupSelectedRecipeIds = computed(() => currentGroupPlan.value?.selectedRecipes.map((recipe) => recipe.recipeId) ?? [])

const currentGroupRecipes = computed(() => {
  const group = currentGroup.value
  const query = normalize(search.value)

  return recipes.value.filter((recipe) => {
    const matchesGroup = !group || matchesRecipeGroup(recipe, group.categorySlug, group.categoryAliases)
    const matchesSearch = !query || normalize(recipe.name).includes(query)
    const matchesFilter = matchRecipeFilter(recipe, activeFilter.value)

    return matchesGroup && matchesSearch && matchesFilter
  })
})

const currentSelectedRecipes = computed(() =>
  currentGroupSelectedRecipeIds.value
    .map((recipeId) => recipes.value.find((recipe) => recipe.id === recipeId))
    .filter((recipe): recipe is Recipe => Boolean(recipe)),
)

const currentPlanningRecipesWithData = computed<PlanningRecipeWithData[]>(() => {
  if (!currentGroupPlan.value) return []

  return currentGroupPlan.value.selectedRecipes
    .map((planningRecipe) => {
      const recipe = recipes.value.find((currentRecipe) => currentRecipe.id === planningRecipe.recipeId)
      if (!recipe) return null

      return {
        ...planningRecipe,
        recipe,
      }
    })
    .filter((planningRecipe): planningRecipe is PlanningRecipeWithData => Boolean(planningRecipe))
})

const planningGroupsWithData = computed<PlanningGroupWithData[]>(() =>
  selectedFunctionalGroups.value
    .map((groupSlug) => {
      const groupPlan = planning.value.groups[groupSlug]
      const group = getPlanningGroup(groupSlug)
      if (!groupPlan || !group) return null

      const groupRecipes = groupPlan.selectedRecipes
        .map((planningRecipe) => {
          const recipe = recipes.value.find((currentRecipe) => currentRecipe.id === planningRecipe.recipeId)
          if (!recipe) return null

          return {
            ...planningRecipe,
            recipe,
          }
        })
        .filter((planningRecipe): planningRecipe is PlanningRecipeWithData => Boolean(planningRecipe))

      return {
        groupSlug,
        groupName: group.name,
        totalPortionsGoal: groupPlan.totalPortionsGoal ?? 0,
        recipes: groupRecipes,
      }
    })
    .filter((group): group is PlanningGroupWithData => Boolean(group)),
)

const currentWeightRecipe = computed(() => currentSelectedRecipes.value[activeWeightIndex.value] ?? null)
const currentPlanningRecipe = computed(() => {
  if (!currentWeightRecipe.value || !currentGroupPlan.value) return null

  return getPlanningRecipe(currentGroupPlan.value, currentWeightRecipe.value.id)
})
const currentSelectedCount = computed(() => currentGroupSelectedRecipeIds.value.length)
const distributedPortions = computed(() =>
  currentGroupPlan.value ? calculateDistributedPortions(currentGroupPlan.value.selectedRecipes) : 0,
)
const reviewTotalPortions = computed(() =>
  planningGroupsWithData.value.reduce((total, group) => total + calculateGroupTotalPortions(group), 0),
)

const currentStepNumber = computed(() => {
  if (activeStep.value === 'planning-type') return 1
  if (activeStep.value === 'review') return totalFlowSteps.value

  const offsets: Record<Exclude<PlannerStep, 'planning-type' | 'review'>, number> = {
    'total-portions': 1,
    recipes: 2,
    distribution: 3,
    weights: 4,
  }

  return 1 + activeGroupIndex.value * 4 + offsets[activeStep.value]
})

const distributionMessage = computed(() => {
  const diff = currentTotalPortionsGoal.value - distributedPortions.value

  if (diff > 0) return `Ainda faltam ${diff} porções para distribuir.`
  if (diff < 0) return `Você distribuiu ${Math.abs(diff)} porções a mais.`

  return 'Total distribuído.'
})

const distributionReady = computed(() =>
  currentSelectedCount.value > 0 &&
  currentTotalPortionsGoal.value > 0 &&
  distributedPortions.value === currentTotalPortionsGoal.value &&
  (currentGroupPlan.value?.selectedRecipes.every((planningRecipe) => calculateRecipePortions(planningRecipe) > 0) ?? false),
)

const currentWeightReady = computed(() => {
  if (!currentWeightRecipe.value || !currentGroupSlug.value) return false

  return getRecipeWeightErrors(currentGroupSlug.value, currentWeightRecipe.value.id).length === 0
})

function togglePlanningGroup(typeId: string) {
  moduleMessage.value = null
  groupSelectionError.value = null

  const planningGroup = planningGroups.find((group) => group.id === typeId)
  if (!planningGroup) return

  if (planningGroup.status === 'coming_soon') {
    moduleMessage.value = 'Esse módulo ainda está em desenvolvimento.'
    return
  }

  const groupSlug = normalizePlanningGroupSlug(typeId)
  if (!groupSlug) return

  selectedGroupIds.value = selectedGroupIds.value.includes(groupSlug)
    ? selectedGroupIds.value.filter((selectedGroupId) => selectedGroupId !== groupSlug)
    : [...selectedGroupIds.value, groupSlug]

  setSelectedGroups(selectedGroupIds.value)
}

function continueGroupSelection() {
  if (selectedGroupIds.value.length === 0) {
    groupSelectionError.value = 'Escolha pelo menos um grupo funcional para continuar.'
    return
  }

  setSelectedGroups(selectedGroupIds.value)
  activeGroupIndex.value = 0
  activeFilter.value = 'todos'
  search.value = ''
  activeStep.value = 'total-portions'
}

function updateTotalPortions(value: number | null) {
  if (!currentGroupSlug.value) return

  const total = value ?? 1
  setGroupTotalPortionsGoal(currentGroupSlug.value, total)
  totalPortionsError.value = null
}

function continueTotalPortions() {
  if (!currentGroupSlug.value || !currentGroupPlan.value) return

  const total = currentGroupPlan.value.totalPortionsGoal

  if (!Number.isInteger(total) || !total || total < 1 || total > 30) {
    totalPortionsError.value = 'Escolha um total entre 1 e 30 porções.'
    return
  }

  distributionValidationMessage.value = null
  activeFilter.value = 'todos'
  search.value = ''
  activeStep.value = 'recipes'
}

function setActiveFilter(filter: FilterId) {
  activeFilter.value = filter
}

function toggleRecipe(recipeId: string) {
  if (!currentGroupSlug.value || !currentGroupPlan.value) return

  selectionError.value = null
  const selectedRecipeIds = currentGroupSelectedRecipeIds.value.includes(recipeId)
    ? currentGroupSelectedRecipeIds.value.filter((selectedRecipeId) => selectedRecipeId !== recipeId)
    : [...currentGroupSelectedRecipeIds.value, recipeId]

  persistSelectedRecipes(currentGroupSlug.value, selectedRecipeIds)
}

function continueSelection() {
  if (currentSelectedCount.value === 0) {
    selectionError.value = `Escolha pelo menos uma opção de ${currentGroupSingularName.value} antes de continuar.`
    return
  }

  activeStep.value = 'distribution'
}

function updateRecipeDistribution(recipeId: string, portions: number | null) {
  if (!currentGroupSlug.value || !currentGroupPlan.value) return

  const nextPlanningRecipes = currentGroupPlan.value.selectedRecipes.map((planningRecipe) => {
    if (planningRecipe.recipeId !== recipeId) return planningRecipe

    const existingLine = planningRecipe.lines[0] ?? createEmptyLine()

    return {
      ...planningRecipe,
      lines: [
        {
          ...existingLine,
          portions: portions && portions > 0 ? portions : null,
        },
      ],
    }
  })

  setGroupSelectedRecipes(currentGroupSlug.value, nextPlanningRecipes)
  distributionValidationMessage.value = null
}

function continueDistribution() {
  const error = currentGroupSlug.value ? getDistributionError(currentGroupSlug.value) : null

  if (error) {
    distributionValidationMessage.value = error
    return
  }

  distributionValidationMessage.value = null
  activeWeightIndex.value = 0
  activeStep.value = 'weights'
}

function updateWeight(recipeId: string, weightReadyG: number | null) {
  if (!currentGroupSlug.value || !currentGroupPlan.value) return

  const nextPlanningRecipes = currentGroupPlan.value.selectedRecipes.map((planningRecipe) => {
    if (planningRecipe.recipeId !== recipeId) return planningRecipe

    const existingLine = planningRecipe.lines[0] ?? createEmptyLine()

    return {
      ...planningRecipe,
      lines: [
        {
          ...existingLine,
          weightReadyG: weightReadyG && weightReadyG > 0 ? weightReadyG : null,
        },
      ],
    }
  })

  setGroupSelectedRecipes(currentGroupSlug.value, nextPlanningRecipes)
  weightValidationMessage.value = null
}

function previousStep() {
  moduleMessage.value = null
  groupSelectionError.value = null
  totalPortionsError.value = null
  selectionError.value = null
  distributionValidationMessage.value = null
  weightValidationMessage.value = null

  if (activeStep.value === 'total-portions') {
    if (activeGroupIndex.value > 0) {
      activeGroupIndex.value -= 1
      activeWeightIndex.value = 0
      activeStep.value = 'weights'
      return
    }

    activeStep.value = 'planning-type'
    return
  }

  if (activeStep.value === 'recipes') activeStep.value = 'total-portions'
  else if (activeStep.value === 'distribution') activeStep.value = 'recipes'
  else if (activeStep.value === 'review') {
    activeGroupIndex.value = Math.max(0, selectedFunctionalGroups.value.length - 1)
    activeWeightIndex.value = 0
    activeStep.value = 'weights'
  }
}

function previousWeightStep() {
  weightValidationMessage.value = null

  if (activeWeightIndex.value > 0) {
    activeWeightIndex.value -= 1
    return
  }

  activeStep.value = 'distribution'
}

function nextWeightStep() {
  if (!currentWeightRecipe.value || !currentGroupSlug.value) return

  const errors = getRecipeWeightErrors(currentGroupSlug.value, currentWeightRecipe.value.id)

  if (errors.length > 0) {
    weightValidationMessage.value = errors[0] ?? 'Revise os pesos antes de continuar.'
    return
  }

  const distributionError = getDistributionError(currentGroupSlug.value)

  if (distributionError) {
    activeStep.value = 'distribution'
    distributionValidationMessage.value = distributionError
    return
  }

  weightValidationMessage.value = null

  if (activeWeightIndex.value < currentSelectedRecipes.value.length - 1) {
    activeWeightIndex.value += 1
    return
  }

  if (activeGroupIndex.value < selectedFunctionalGroups.value.length - 1) {
    activeGroupIndex.value += 1
    activeWeightIndex.value = 0
    activeFilter.value = 'todos'
    search.value = ''
    activeStep.value = 'total-portions'
    return
  }

  prepareReview()
}

function prepareReview() {
  const errors = getAllPlanningErrors()

  if (errors.length > 0) {
    activeStep.value = errors[0]?.includes('distribuir') || errors[0]?.includes('porções a mais')
      ? 'distribution'
      : 'weights'
    weightValidationMessage.value = errors[0] ?? 'Revise o planejamento antes de continuar.'
    return
  }

  weightValidationMessage.value = null
  activeStep.value = 'review'
}

function editWeights() {
  activeGroupIndex.value = 0
  activeWeightIndex.value = 0
  activeStep.value = 'weights'
}

function generatePlan() {
  const errors = getAllPlanningErrors()

  if (errors.length > 0) {
    activeStep.value = 'weights'
    weightValidationMessage.value = errors[0] ?? 'Revise o planejamento antes de continuar.'
    return
  }

  const result = generatePlanningResult(planningGroupsWithData.value)
  setGeneratedResult(result)
  navigateTo('/resultado')
}

function persistSelectedRecipes(groupSlug: PlanningGroupSlug, selectedRecipeIds: string[]) {
  const groupPlan = getGroupPlan(groupSlug)
  const previousRecipes = new Map(
    groupPlan.selectedRecipes.map((planningRecipe) => [
      planningRecipe.recipeId,
      planningRecipe,
    ]),
  )

  setGroupSelectedRecipes(
    groupSlug,
    selectedRecipeIds.map((recipeId) => {
      const previousLines = previousRecipes.get(recipeId)?.lines ?? []

      return {
        recipeId,
        lines: previousLines.length > 0 ? previousLines : [createEmptyLine()],
      }
    }),
  )
}

function getGroupPlan(groupSlug: PlanningGroupSlug): PlanningGroupPlan {
  return planning.value.groups[groupSlug] ?? {
    groupSlug,
    totalPortionsGoal: 1,
    selectedRecipes: [],
  }
}

function getPlanningRecipe(groupPlan: PlanningGroupPlan, recipeId: string): PlanningRecipe {
  return (
    groupPlan.selectedRecipes.find((planningRecipe) => planningRecipe.recipeId === recipeId) ?? {
      recipeId,
      lines: [createEmptyLine()],
    }
  )
}

function getLineError(line: PlanningLine) {
  if (!line.portions) return 'Informe quantas porções essa preparação vai receber.'
  if (!Number.isInteger(line.portions) || line.portions < 1) {
    return 'A quantidade de porções precisa ser um número inteiro maior que 0.'
  }
  if (!line.weightReadyG) return 'Informe o peso pronto que aparece na dieta.'
  if (!Number.isInteger(line.weightReadyG)) return 'O peso precisa ser um número inteiro.'
  if (line.weightReadyG % 5 !== 0) return 'O peso precisa ser múltiplo de 5g.'

  return null
}

function getRecipeWeightErrors(groupSlug: PlanningGroupSlug, recipeId: string) {
  const planningRecipe = getPlanningRecipe(getGroupPlan(groupSlug), recipeId)
  const errors: string[] = []
  const line = planningRecipe.lines[0] ?? createEmptyLine()
  const error = getLineError(line)

  if (error) errors.push(error)

  return errors
}

function getDistributionError(groupSlug: PlanningGroupSlug) {
  const groupPlan = getGroupPlan(groupSlug)
  if (groupPlan.selectedRecipes.length === 0) return `Escolha pelo menos uma opção de ${getPlanningGroupSingularName(groupSlug)} para distribuir.`

  const totalPortionsGoal = groupPlan.totalPortionsGoal ?? 0
  const distributed = calculateDistributedPortions(groupPlan.selectedRecipes)
  const diff = totalPortionsGoal - distributed

  if (groupPlan.selectedRecipes.some((planningRecipe) => calculateRecipePortions(planningRecipe) < 1)) {
    return 'Cada preparação selecionada precisa receber pelo menos 1 porção.'
  }
  if (diff > 0) return `Ainda faltam ${diff} porções para distribuir.`
  if (diff < 0) return `Você distribuiu ${Math.abs(diff)} porções a mais.`

  return null
}

function getAllPlanningErrors() {
  const errors: string[] = []

  for (const groupSlug of selectedFunctionalGroups.value) {
    const groupPlan = getGroupPlan(groupSlug)

    if (!groupPlan.totalPortionsGoal || groupPlan.totalPortionsGoal < 1) {
      errors.push(`Informe o total de porções de ${getPlanningGroupSingularName(groupSlug)}.`)
    }

    const distributionError = getDistributionError(groupSlug)
    if (distributionError) errors.push(distributionError)

    for (const planningRecipe of groupPlan.selectedRecipes) {
      errors.push(...getRecipeWeightErrors(groupSlug, planningRecipe.recipeId))
    }
  }

  return errors
}

function isSelected(recipeId: string) {
  return currentGroupSelectedRecipeIds.value.includes(recipeId)
}

function matchesRecipeGroup(recipe: Recipe, categorySlug: string, categoryAliases: string[] = []) {
  const acceptedSlugs = new Set([categorySlug, ...categoryAliases])
  const recipeTagSlugs = recipe.tags.map((tag) => tag.slug)

  return Boolean(
    (recipe.category?.slug && acceptedSlugs.has(recipe.category.slug)) ||
      recipeTagSlugs.some((tagSlug) => acceptedSlugs.has(tagSlug)),
  )
}

function matchRecipeFilter(recipe: Recipe, filter: FilterId): boolean {
  const tagSlugs = recipe.tags.map((tag) => tag.slug)
  const type = normalize(recipe.type ?? '')
  const name = normalize(recipe.name)

  if (filter === 'todos') return true
  if (filter === 'outros' && currentGroupSlug.value) {
    const explicitFilters = filtersByGroup[currentGroupSlug.value]
      .map((currentFilter) => currentFilter.id)
      .filter((filterId) => filterId !== 'todos' && filterId !== 'outros')

    return !explicitFilters.some((filterId: string) => matchRecipeFilter(recipe, filterId))
  }
  if (filter === 'massa') return type === 'massa' || type === 'macarrao' || name.includes('macarrao')
  if (filter === 'folhas') return name.includes('alface') || name.includes('agriao') || name.includes('couve')
  if (filter === 'legumes') return name.includes('cenoura') || name.includes('beterraba') || name.includes('brocolis')
  if (filter === 'mix') return name.includes(' e ') || name.includes('mix')
  if (filter === 'rua') return ['banana', 'maca', 'goiaba', 'pera', 'laranja', 'tangerina'].includes(type)
  if (filter === 'casa') return ['abacaxi', 'mamao', 'manga', 'melancia', 'melao', 'morango', 'uva', 'pitaya'].includes(type)

  return type === filter || tagSlugs.includes(filter) || name.includes(filter)
}

function calculateDistributedPortions(planningRecipes: PlanningRecipe[]) {
  return planningRecipes.reduce((total, planningRecipe) => {
    return total + calculateRecipePortions(planningRecipe)
  }, 0)
}

function calculateRecipePortions(planningRecipe: PlanningRecipe) {
  return planningRecipe.lines.reduce((total, line) => total + (line.portions ?? 0), 0)
}

function createEmptyLine(): PlanningLine {
  return {
    weightReadyG: null,
    portions: null,
  }
}

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .trim()
}
</script>

<template>
  <StudentShell>
    <PlanningFlowShell
      v-if="activeStep === 'planning-type'"
      :current-step="currentStepNumber"
      :total-steps="totalFlowSteps"
      kicker="Planejamento"
      title="O que você quer planejar?"
      text="Escolha os grupos que entram neste preparo."
    >
      <PlanningTypeSelector
        :selected-ids="selectedGroupIds"
        @toggle="togglePlanningGroup"
      />

      <p v-if="moduleMessage" class="flow-inline-message">
        {{ moduleMessage }}
      </p>

      <PlanningActionBar
        primary-label="Continuar"
        :meta="selectedGroupIds.length ? `${selectedGroupIds.length} grupo${selectedGroupIds.length === 1 ? '' : 's'} selecionado${selectedGroupIds.length === 1 ? '' : 's'}` : 'Escolha pelo menos um grupo'"
        :hint="groupSelectionError"
        :primary-disabled="selectedGroupIds.length === 0"
        :ready="selectedGroupIds.length > 0"
        @primary="continueGroupSelection"
      />
    </PlanningFlowShell>

    <PlanningFlowShell
      v-else-if="activeStep === 'total-portions'"
      :current-step="currentStepNumber"
      :total-steps="totalFlowSteps"
      :kicker="`${activeGroupIndex + 1} de ${selectedFunctionalGroups.length} grupos`"
      :title="`Quantas porções de ${currentGroupSingularName} você quer planejar?`"
      text="Escolha um número inteiro. Não precisa ser por dia nem por semana."
    >
      <section class="total-portions-card total-portions-card--interactive">
        <p class="total-portions-card__value">{{ currentTotalPortionsGoal }}</p>
        <input
          class="portion-slider"
          :value="currentTotalPortionsGoal"
          type="range"
          min="1"
          max="30"
          step="1"
          aria-label="Total de porções"
          @input="updateTotalPortions(Number(($event.target as HTMLInputElement).value))"
        >
        <StepperControl
          :value="currentTotalPortionsGoal"
          :min="1"
          :max="30"
          :step="1"
          suffix="porções"
          input-label="total de porções"
          @update="updateTotalPortions"
        />
      </section>

      <PlanningActionBar
        :primary-label="`Escolher ${currentGroupItemName}`"
        secondary-label="Voltar"
        :meta="`${currentGroupName}: ${currentTotalPortionsGoal} porções`"
        :hint="totalPortionsError"
        :ready="currentTotalPortionsGoal >= 1"
        @primary="continueTotalPortions"
        @secondary="previousStep"
      />
    </PlanningFlowShell>

    <PlanningFlowShell
      v-else-if="activeStep === 'recipes'"
      :current-step="currentStepNumber"
      :total-steps="totalFlowSteps"
      :kicker="currentGroupName"
      :title="`Escolha as opções de ${currentGroupSingularName}`"
    >
      <section class="guided-controls" aria-label="Busca e filtros">
        <div class="field field--quiet field--search">
          <label class="sr-only" for="recipe-search">Buscar opção</label>
          <input
            id="recipe-search"
            v-model="search"
            type="search"
            placeholder="Buscar opção"
            autocomplete="off"
          >
        </div>

        <div class="filter-row filter-row--quiet" aria-label="Filtros">
          <button
            v-for="filter in currentFilters"
            :key="filter.id"
            class="pill-button"
            :class="{ 'pill-button--active': activeFilter === filter.id }"
            type="button"
            @click="setActiveFilter(filter.id)"
          >
            {{ filter.label }}
          </button>
        </div>
      </section>

      <p v-if="selectionError" class="flow-inline-message">
        {{ selectionError }}
      </p>

      <section v-if="pending" class="empty-state empty-state--soft">
        <p>Carregando opções publicadas...</p>
      </section>

      <section v-else-if="error" class="empty-state empty-state--soft">
        <p>Não foi possível carregar as opções agora.</p>
        <p>Confira a conexão e tente novamente.</p>
      </section>

      <section v-else-if="currentGroupRecipes.length === 0" class="empty-state empty-state--soft">
        <p>Nenhuma opção encontrada para {{ currentGroupName }}.</p>
        <p>Ajuste a busca ou escolha outro filtro.</p>
      </section>

      <section v-else class="guided-recipe-grid" aria-label="Opções disponíveis">
        <ProteinRecipeCard
          v-for="recipe in currentGroupRecipes"
          :key="recipe.id"
          :recipe="recipe"
          :selected="isSelected(recipe.id)"
          @toggle="toggleRecipe"
        />
      </section>

      <PlanningActionBar
        primary-label="Distribuir porções"
        secondary-label="Voltar"
        :meta="`${currentSelectedCount} selecionada${currentSelectedCount === 1 ? '' : 's'}`"
        :hint="selectionError"
        :ready="currentSelectedCount > 0"
        @primary="continueSelection"
        @secondary="previousStep"
      />
    </PlanningFlowShell>

    <PlanningFlowShell
      v-else-if="activeStep === 'distribution'"
      :current-step="currentStepNumber"
      :total-steps="totalFlowSteps"
      kicker="Distribuição"
      :title="`Distribua suas ${currentTotalPortionsGoal} porções de ${currentGroupSingularName}`"
      text="Defina quantas porções cada preparação vai receber. A soma precisa fechar exatamente o total."
    >
      <ProteinPortionDistributionStep
        :recipes="currentPlanningRecipesWithData"
        :total-portions="currentTotalPortionsGoal"
        :distributed-portions="distributedPortions"
        :group-label="currentGroupSingularName"
        @update-portions="updateRecipeDistribution"
      />

      <PlanningActionBar
        primary-label="Informar pesos"
        secondary-label="Voltar"
        :meta="`${distributedPortions} de ${currentTotalPortionsGoal} porções distribuídas`"
        :hint="distributionValidationMessage ?? distributionMessage"
        :primary-disabled="!distributionReady"
        :ready="distributionReady"
        @primary="continueDistribution"
        @secondary="previousStep"
      />
    </PlanningFlowShell>

    <PlanningFlowShell
      v-else-if="activeStep === 'weights'"
      :current-step="currentStepNumber"
      :total-steps="totalFlowSteps"
      kicker="Pesos da dieta"
      :title="`Informe os pesos das ${currentGroupName.toLowerCase()}`"
      text="Preencha o peso pronto que aparece no seu app de dieta."
    >
      <section v-if="!currentWeightRecipe || !currentPlanningRecipe" class="empty-state empty-state--soft">
        <p>Nenhuma opção selecionada ainda.</p>
        <button class="primary-button" type="button" @click="activeStep = 'recipes'">
          Escolher opções
        </button>
      </section>

      <ProteinPortionSingleRecipeStep
        v-else
        :recipe="currentWeightRecipe"
        :planning-recipe="currentPlanningRecipe"
        :recipe-index="activeWeightIndex"
        :total-recipes="currentSelectedRecipes.length"
        :validation-message="weightValidationMessage"
        @update-weight="updateWeight"
      />

      <PlanningActionBar
        :primary-label="activeWeightIndex === currentSelectedRecipes.length - 1 ? (activeGroupIndex === selectedFunctionalGroups.length - 1 ? 'Revisar tudo' : 'Próximo grupo') : 'Próxima preparação'"
        secondary-label="Voltar"
        :meta="currentWeightRecipe ? `${currentGroupName}: ${activeWeightIndex + 1} de ${currentSelectedRecipes.length}` : null"
        :hint="weightValidationMessage"
        :ready="currentWeightReady"
        @primary="nextWeightStep"
        @secondary="previousWeightStep"
      />
    </PlanningFlowShell>

    <PlanningFlowShell
      v-else
      :current-step="currentStepNumber"
      :total-steps="totalFlowSteps"
      kicker="Revisão"
      title="Revise seu planejamento"
      text="Confira quantidades e pesos antes de gerar o plano."
    >
      <ProteinReviewStep
        :groups="planningGroupsWithData"
        :total-portions="reviewTotalPortions"
      />

      <PlanningActionBar
        primary-label="Gerar planejamento completo"
        secondary-label="Voltar"
        :meta="`Total planejado: ${reviewTotalPortions} porções`"
        ready
        @primary="generatePlan"
        @secondary="editWeights"
      />
    </PlanningFlowShell>
  </StudentShell>
</template>
