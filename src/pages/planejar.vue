<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { navigateTo, useRoute } from '#imports'
import StudentShell from '../components/layout/StudentShell.vue'
import PlanningActionBar from '../components/planner/PlanningActionBar.vue'
import PlanningFlowShell from '../components/planner/PlanningFlowShell.vue'
import PlanningTypeSelector from '../components/planner/PlanningTypeSelector.vue'
import ProteinPortionDistributionStep from '../components/planner/ProteinPortionDistributionStep.vue'
import ProteinPortionWeightsStep from '../components/planner/ProteinPortionWeightsStep.vue'
import ProteinRecipeCard from '../components/planner/ProteinRecipeCard.vue'
import ProteinReviewStep from '../components/planner/ProteinReviewStep.vue'
import StepperControl from '../components/planner/StepperControl.vue'
import {
  availablePlanningGroupSlugs,
  getPlanningGroup,
  getPlanningGroupName,
  getPlanningGroupSingularName,
  normalizePlanningGroupSlug,
  planningGroups,
} from '../data/planningGroups'
import { DEFAULT_TOTAL_PORTIONS_GOAL, usePlannerState } from '../composables/usePlannerState'
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
  clearRevision,
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

  if (route.query.adicionar === '1') {
    activeStep.value = 'planning-type'
    return
  }

  if (route.query.editar === '1' && planning.value.selectedGroupSlugs.length > 0) {
    activeStep.value = getAllPlanningErrors().length === 0 ? 'review' : 'weights'
    activeGroupIndex.value = Math.max(0, planning.value.selectedGroupSlugs.length - 1)
  }
})

watch(clearRevision, () => {
  resetPlanningFlow()
})

function resetPlanningFlow() {
  activeStep.value = 'planning-type'
  activeGroupIndex.value = 0
  search.value = ''
  activeFilter.value = 'todos'
  selectedGroupIds.value = []
  moduleMessage.value = null
  groupSelectionError.value = null
  totalPortionsError.value = null
  selectionError.value = null
  distributionValidationMessage.value = null
  weightValidationMessage.value = null
}

const selectedFunctionalGroups = computed(() => planning.value.selectedGroupSlugs)
const totalFlowSteps = computed(() => 4 + Math.max(selectedFunctionalGroups.value.length, 1) * 2)
const currentGroupSlug = computed(() => selectedFunctionalGroups.value[activeGroupIndex.value] ?? null)
const currentGroup = computed(() => getPlanningGroup(currentGroupSlug.value))
const currentGroupPlan = computed(() => currentGroupSlug.value ? getGroupPlan(currentGroupSlug.value) : null)
const currentGroupName = computed(() => getPlanningGroupName(currentGroupSlug.value))
const currentGroupSingularName = computed(() => getPlanningGroupSingularName(currentGroupSlug.value))
const currentFilters = computed(() => currentGroupSlug.value ? filtersByGroup[currentGroupSlug.value] : filtersByGroup.proteinas)
const currentTotalPortionsGoal = computed(() => currentGroupPlan.value?.totalPortionsGoal ?? DEFAULT_TOTAL_PORTIONS_GOAL)
const totalPortionGroupCards = computed(() =>
  selectedFunctionalGroups.value.map((groupSlug) => {
    const groupPlan = getGroupPlan(groupSlug)

    return {
      groupSlug,
      groupName: getPlanningGroupName(groupSlug),
      groupSingularName: getPlanningGroupSingularName(groupSlug),
      totalPortionsGoal: groupPlan.totalPortionsGoal ?? DEFAULT_TOTAL_PORTIONS_GOAL,
    }
  }),
)
const selectedTotalPortions = computed(() =>
  totalPortionGroupCards.value.reduce((total, group) => total + group.totalPortionsGoal, 0),
)
const totalPortionsReady = computed(() =>
  totalPortionGroupCards.value.length > 0 &&
  totalPortionGroupCards.value.every((group) => group.totalPortionsGoal >= 1),
)
const currentGroupSelectedRecipeIds = computed(() => currentGroupPlan.value?.selectedRecipes.map((recipe) => recipe.recipeId) ?? [])
const plannedGroupSummaries = computed(() =>
  availablePlanningGroupSlugs
    .map((groupSlug) => {
      const groupPlan = planning.value.groups[groupSlug]
      if (!groupPlan || groupPlan.selectedRecipes.length === 0) return null

      return {
        groupSlug,
        groupName: getPlanningGroupName(groupSlug),
        totalPortions: calculatePlannedPortions(groupPlan),
        recipeCount: groupPlan.selectedRecipes.length,
      }
    })
    .filter((group): group is {
      groupSlug: PlanningGroupSlug
      groupName: string
      totalPortions: number
      recipeCount: number
    } => Boolean(group)),
)
const availableGroupSummaries = computed(() =>
  availablePlanningGroupSlugs
    .filter((groupSlug) => !selectedGroupIds.value.includes(groupSlug))
    .map((groupSlug) => getPlanningGroupName(groupSlug)),
)

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

const currentSelectedCount = computed(() => currentGroupSelectedRecipeIds.value.length)
const distributedPortions = computed(() =>
  calculateDistributedPortions(currentPlanningRecipesWithData.value),
)
const reviewTotalPortions = computed(() =>
  planningGroupsWithData.value.reduce((total, group) => total + calculateGroupTotalPortions(group), 0),
)

const reviewTotalRecipes = computed(() =>
  planningGroupsWithData.value.reduce((total, group) => total + group.recipes.length, 0),
)

const weightTotalRecipes = computed(() =>
  planningGroupsWithData.value.reduce((total, group) => total + group.recipes.length, 0),
)

const weightReadyCount = computed(() =>
  planningGroupsWithData.value.reduce((total, group) => {
    return total + group.recipes.filter((planningRecipe) =>
      getRecipeWeightErrors(group.groupSlug, planningRecipe.recipeId).length === 0,
    ).length
  }, 0),
)

const allWeightsReady = computed(() =>
  weightTotalRecipes.value > 0 &&
  weightReadyCount.value === weightTotalRecipes.value &&
  selectedFunctionalGroups.value.every((groupSlug) => !getDistributionError(groupSlug)),
)

const currentStepNumber = computed(() => {
  if (activeStep.value === 'planning-type') return 1
  if (activeStep.value === 'total-portions') return 2
  if (activeStep.value === 'weights') return totalFlowSteps.value - 1
  if (activeStep.value === 'review') return totalFlowSteps.value

  const offsets: Record<Exclude<PlannerStep, 'planning-type' | 'total-portions' | 'weights' | 'review'>, number> = {
    recipes: 1,
    distribution: 2,
  }

  return 2 + activeGroupIndex.value * 2 + offsets[activeStep.value]
})

const distributionMessage = computed(() => {
  const diff = currentTotalPortionsGoal.value - distributedPortions.value

  if (diff > 0) return `Ainda faltam ${diff} porções para distribuir.`
  if (diff < 0) return `Você distribuiu ${Math.abs(diff)} porções a mais.`

  const hasZeroPortionRecipe = currentGroupPlan.value?.selectedRecipes.some(
    (planningRecipe) => calculateRecipePortions(planningRecipe) < 1,
  ) ?? false

  if (hasZeroPortionRecipe) return 'Cada preparação precisa receber pelo menos 1 porção.'

  return 'Total distribuído.'
})

const distributionReady = computed(() =>
  currentSelectedCount.value > 0 &&
  currentTotalPortionsGoal.value > 0 &&
  distributedPortions.value === currentTotalPortionsGoal.value &&
  (currentGroupPlan.value?.selectedRecipes.every((planningRecipe) => calculateRecipePortions(planningRecipe) > 0) ?? false),
)

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
  activeGroupIndex.value = getNextGroupIndexToPlan(selectedGroupIds.value)
  activeFilter.value = 'todos'
  search.value = ''
  activeStep.value = 'total-portions'
}

function updateGroupTotalPortions(groupSlug: PlanningGroupSlug, value: number | null) {
  const total = value ?? DEFAULT_TOTAL_PORTIONS_GOAL
  setGroupTotalPortionsGoal(groupSlug, total)
  totalPortionsError.value = null
}

function continueTotalPortions() {
  if (selectedFunctionalGroups.value.length === 0) {
    activeStep.value = 'planning-type'
    return
  }

  const invalidGroupSlug = selectedFunctionalGroups.value.find((groupSlug) => {
    const total = getGroupPlan(groupSlug).totalPortionsGoal

    return !Number.isInteger(total) || !total || total < 1 || total > 30
  })

  if (invalidGroupSlug) {
    activeGroupIndex.value = selectedFunctionalGroups.value.indexOf(invalidGroupSlug)
    totalPortionsError.value = `Escolha um total entre 1 e 30 porções para ${getPlanningGroupName(invalidGroupSlug)}.`
    return
  }

  distributionValidationMessage.value = null
  activeFilter.value = 'todos'
  search.value = ''
  goToFirstPendingGroupAfterTotals()
}

function goToFirstPendingGroupAfterTotals() {
  const groupIndex = selectedFunctionalGroups.value.findIndex((groupSlug) => {
    const error = getFirstGroupSetupError(groupSlug)

    return error && error !== 'total'
  })

  activeGroupIndex.value = groupIndex >= 0 ? groupIndex : 0

  const groupSlug = selectedFunctionalGroups.value[activeGroupIndex.value]
  const firstError = groupSlug ? getFirstGroupSetupError(groupSlug) : null

  if (firstError === 'distribution') {
    activeStep.value = 'distribution'
    return
  }

  if (!firstError) {
    activeStep.value = getAllWeightErrors().length > 0 ? 'weights' : 'review'
    return
  }

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
  const nextGroupIndex = selectedFunctionalGroups.value.findIndex((groupSlug, index) =>
    index > activeGroupIndex.value && Boolean(getFirstGroupSetupError(groupSlug)),
  )

  if (nextGroupIndex >= 0) {
    const nextGroupSlug = selectedFunctionalGroups.value[nextGroupIndex]
    if (!nextGroupSlug) return

    activeGroupIndex.value = nextGroupIndex
    activeFilter.value = 'todos'
    search.value = ''
    activeStep.value = getFirstGroupSetupError(nextGroupSlug) === 'distribution'
      ? 'distribution'
      : 'recipes'
    return
  }

  activeStep.value = 'weights'
}

function updateGroupRecipeWeight(groupSlug: PlanningGroupSlug, recipeId: string, weightReadyG: number | null) {
  const groupPlan = getGroupPlan(groupSlug)

  const nextPlanningRecipes = groupPlan.selectedRecipes.map((planningRecipe) => {
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

  setGroupSelectedRecipes(groupSlug, nextPlanningRecipes)
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
    activeStep.value = 'planning-type'
    return
  }

  if (activeStep.value === 'recipes') activeStep.value = 'total-portions'
  else if (activeStep.value === 'distribution') activeStep.value = 'recipes'
  else if (activeStep.value === 'weights') {
    activeGroupIndex.value = Math.max(0, selectedFunctionalGroups.value.length - 1)
    activeStep.value = 'distribution'
  }
  else if (activeStep.value === 'review') {
    activeGroupIndex.value = Math.max(0, selectedFunctionalGroups.value.length - 1)
    activeStep.value = 'weights'
  }
}

function continueWeights() {
  const errors = getAllWeightErrors()

  if (errors.length > 0) {
    weightValidationMessage.value = errors[0] ?? 'Revise os pesos antes de continuar.'
    return
  }

  const distributionGroupSlug = selectedFunctionalGroups.value.find((groupSlug) => Boolean(getDistributionError(groupSlug)))

  if (distributionGroupSlug) {
    activeGroupIndex.value = selectedFunctionalGroups.value.indexOf(distributionGroupSlug)
    activeStep.value = 'distribution'
    distributionValidationMessage.value = getDistributionError(distributionGroupSlug)
    return
  }

  weightValidationMessage.value = null
  prepareReview()
}

function prepareReview() {
  const errors = getAllPlanningErrors()

  if (errors.length > 0) {
    const isDistributionError = errors[0]?.includes('distribuir') ||
      errors[0]?.includes('porções a mais') ||
      errors[0]?.includes('pelo menos 1 porção')
    if (isDistributionError) {
      const groupIndex = selectedFunctionalGroups.value.findIndex((groupSlug) => Boolean(getDistributionError(groupSlug)))
      if (groupIndex >= 0) activeGroupIndex.value = groupIndex
    }
    activeStep.value = isDistributionError ? 'distribution' : 'weights'
    weightValidationMessage.value = errors[0] ?? 'Revise o planejamento antes de continuar.'
    return
  }

  weightValidationMessage.value = null
  activeStep.value = 'review'
}

function editWeights() {
  activeGroupIndex.value = 0
  activeStep.value = 'weights'
}

function goToEditDistribution(groupSlug: string) {
  const idx = selectedFunctionalGroups.value.indexOf(groupSlug as PlanningGroupSlug)
  if (idx >= 0) activeGroupIndex.value = idx
  distributionValidationMessage.value = null
  weightValidationMessage.value = null
  activeStep.value = 'distribution'
}

function goToEditWeight(groupSlug: string, _recipeId: string) {
  const groupIdx = selectedFunctionalGroups.value.indexOf(groupSlug as PlanningGroupSlug)
  if (groupIdx >= 0) activeGroupIndex.value = groupIdx
  distributionValidationMessage.value = null
  weightValidationMessage.value = null
  activeStep.value = 'weights'
}

function addAnotherGroup() {
  selectedGroupIds.value = [...planning.value.selectedGroupSlugs]
  moduleMessage.value = null
  groupSelectionError.value = null
  activeStep.value = 'planning-type'
}

function generatePlan() {
  const errors = getAllPlanningErrors()

  if (errors.length > 0) {
    const isDistributionError = errors[0]?.includes('distribuir') ||
      errors[0]?.includes('porções a mais') ||
      errors[0]?.includes('pelo menos 1 porção')
    if (isDistributionError) {
      const groupIndex = selectedFunctionalGroups.value.findIndex((groupSlug) => Boolean(getDistributionError(groupSlug)))
      if (groupIndex >= 0) activeGroupIndex.value = groupIndex
    }
    activeStep.value = isDistributionError ? 'distribution' : 'weights'
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
    totalPortionsGoal: DEFAULT_TOTAL_PORTIONS_GOAL,
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

function getAllWeightErrors() {
  const errors: string[] = []

  for (const groupSlug of selectedFunctionalGroups.value) {
    const groupPlan = getGroupPlan(groupSlug)

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

function calculatePlannedPortions(groupPlan: PlanningGroupPlan) {
  return groupPlan.selectedRecipes.reduce((total, planningRecipe) => {
    return total + calculateRecipePortions(planningRecipe)
  }, 0)
}

function getNextGroupIndexToPlan(groupSlugs: PlanningGroupSlug[]) {
  const incompleteIndex = groupSlugs.findIndex((groupSlug) => Boolean(getFirstGroupError(groupSlug)))

  return incompleteIndex >= 0 ? incompleteIndex : Math.max(0, groupSlugs.length - 1)
}

function getFirstGroupError(groupSlug: PlanningGroupSlug) {
  const groupPlan = getGroupPlan(groupSlug)

  if (!groupPlan.totalPortionsGoal || groupPlan.totalPortionsGoal < 1) return 'total'
  if (groupPlan.selectedRecipes.length === 0) return 'recipes'
  if (getDistributionError(groupSlug)) return 'distribution'

  for (const planningRecipe of groupPlan.selectedRecipes) {
    if (getRecipeWeightErrors(groupSlug, planningRecipe.recipeId).length > 0) return 'weights'
  }

  return null
}

function getFirstGroupSetupError(groupSlug: PlanningGroupSlug) {
  const groupPlan = getGroupPlan(groupSlug)

  if (!groupPlan.totalPortionsGoal || groupPlan.totalPortionsGoal < 1) return 'total'
  if (groupPlan.selectedRecipes.length === 0) return 'recipes'
  if (getDistributionError(groupSlug)) return 'distribution'

  return null
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

      <section
        v-if="plannedGroupSummaries.length || availableGroupSummaries.length"
        class="planning-group-status"
        aria-label="Estado dos grupos do planejamento"
      >
        <div v-if="plannedGroupSummaries.length">
          <p class="section-kicker">Já planejados</p>
          <div class="planning-group-status__chips">
            <span
              v-for="group in plannedGroupSummaries"
              :key="group.groupSlug"
              class="planning-group-chip planning-group-chip--done"
            >
              {{ group.groupName }} · {{ group.totalPortions || group.recipeCount }} {{ group.totalPortions ? 'porções' : 'item selecionado' }}
            </span>
          </div>
        </div>

        <div v-if="availableGroupSummaries.length">
          <p class="section-kicker">Ainda podem entrar</p>
          <p class="planning-group-status__text">
            {{ availableGroupSummaries.join(', ') }}
          </p>
        </div>
      </section>

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
      :kicker="`${selectedFunctionalGroups.length} grupo${selectedFunctionalGroups.length === 1 ? '' : 's'} selecionado${selectedFunctionalGroups.length === 1 ? '' : 's'}`"
      title="Quantas porções você quer planejar?"
      text="Ajuste todos os grupos desta vez. Almoço e jantar por 7 dias = 14 porções."
    >
      <section class="total-portions-list" aria-label="Porções por grupo selecionado">
        <article
          v-for="group in totalPortionGroupCards"
          :key="group.groupSlug"
          class="total-portions-card total-portions-card--interactive total-portions-card--group"
        >
          <div class="total-portions-card__header">
            <p class="section-kicker">{{ group.groupName }}</p>
            <span>{{ group.totalPortionsGoal }} porções</span>
          </div>

          <p class="total-portions-card__value">
            {{ group.totalPortionsGoal }}
            <span>porções de {{ group.groupSingularName }}</span>
          </p>

          <input
            class="portion-slider"
            :value="group.totalPortionsGoal"
            type="range"
            min="1"
            max="30"
            step="1"
            :aria-label="`Total de porções de ${group.groupSingularName}`"
            @input="updateGroupTotalPortions(group.groupSlug, Number(($event.target as HTMLInputElement).value))"
          >

          <StepperControl
            :value="group.totalPortionsGoal"
            :min="1"
            :max="30"
            :step="1"
            suffix="porções"
            :input-label="`total de porções de ${group.groupSingularName}`"
            @update="updateGroupTotalPortions(group.groupSlug, $event)"
          />
        </article>
      </section>

      <PlanningActionBar
        primary-label="Escolher opções"
        secondary-label="Voltar"
        :meta="`${selectedTotalPortions} porções em ${selectedFunctionalGroups.length} grupo${selectedFunctionalGroups.length === 1 ? '' : 's'}`"
        :hint="totalPortionsError"
        :ready="totalPortionsReady"
        @primary="continueTotalPortions"
        @secondary="previousStep"
      />
    </PlanningFlowShell>

    <PlanningFlowShell
      v-else-if="activeStep === 'recipes'"
      :current-step="currentStepNumber"
      :total-steps="totalFlowSteps"
      kicker="Peso pronto"
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
      <template #header-extras>
        <div class="distribution-metrics">
          <div class="distribution-metric">
            <strong>{{ distributedPortions }}</strong>
            <span>Distribuídas</span>
          </div>
          <div class="distribution-metric">
            <strong>{{ Math.max(0, currentTotalPortionsGoal - distributedPortions) }}</strong>
            <span>Faltando</span>
          </div>
          <div class="distribution-metric">
            <strong>{{ currentSelectedCount }}</strong>
            <span>Preparos</span>
          </div>
        </div>
      </template>

      <ProteinPortionDistributionStep
        :recipes="currentPlanningRecipesWithData"
        :total-portions="currentTotalPortionsGoal"
        :group-label="currentGroupSingularName"
        @update-portions="updateRecipeDistribution"
      />

      <PlanningActionBar
        primary-label="Informar pesos"
        secondary-label="Voltar"
        :meta="`${distributedPortions} de ${currentTotalPortionsGoal} porções distribuídas`"
        :hint="distributionValidationMessage ?? distributionMessage"
        :ready="distributionReady"
        @primary="continueDistribution"
        @secondary="previousStep"
      />
    </PlanningFlowShell>

    <PlanningFlowShell
      v-else-if="activeStep === 'weights'"
      :current-step="currentStepNumber"
      :total-steps="totalFlowSteps"
      kicker="Peso pronto"
      title="Informe o peso pronto da sua dieta"
      text="Preencha todos os preparos selecionados nesta mesma tela."
    >
      <template #header-extras>
        <div class="distribution-metrics">
          <div class="distribution-metric">
            <strong>{{ weightReadyCount }}/{{ weightTotalRecipes }}</strong>
            <span>Pesos</span>
          </div>
          <div class="distribution-metric">
            <strong>{{ reviewTotalPortions }}</strong>
            <span>Porções</span>
          </div>
          <div class="distribution-metric">
            <strong>{{ selectedFunctionalGroups.length }}</strong>
            <span>Grupos</span>
          </div>
        </div>
      </template>

      <section v-if="weightTotalRecipes === 0" class="empty-state empty-state--soft">
        <p>Nenhuma opção selecionada ainda.</p>
        <button class="primary-button" type="button" @click="goToFirstPendingGroupAfterTotals">
          Escolher opções
        </button>
      </section>

      <ProteinPortionWeightsStep
        v-else
        :groups="planningGroupsWithData"
        @update-weight="updateGroupRecipeWeight"
      />

      <p v-if="weightValidationMessage" class="flow-inline-message">
        {{ weightValidationMessage }}
      </p>

      <PlanningActionBar
        primary-label="Revisar tudo"
        secondary-label="Voltar"
        :meta="`${weightReadyCount} de ${weightTotalRecipes} pesos informados`"
        :hint="weightValidationMessage"
        :ready="allWeightsReady"
        @primary="continueWeights"
        @secondary="previousStep"
      />
    </PlanningFlowShell>

    <PlanningFlowShell
      v-else
      :current-step="currentStepNumber"
      :total-steps="totalFlowSteps"
      kicker="Tudo pronto"
      title="Revise seu planejamento"
      text="Confira grupos, preparações, porções e pesos antes de gerar o plano final."
      :hero-style="true"
    >
      <template #header-extras>
        <div class="review-hero-pills">
          <div class="review-hero-pill">
            <strong>{{ reviewTotalPortions }}</strong>
            <span>porções</span>
          </div>
          <div class="review-hero-pill">
            <strong>{{ selectedFunctionalGroups.length }}</strong>
            <span>grupos</span>
          </div>
          <div class="review-hero-pill">
            <strong>{{ reviewTotalRecipes }}</strong>
            <span>preparos</span>
          </div>
        </div>

        <div class="review-status-panel">
          <div class="review-status-panel__icon" aria-hidden="true">
            <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <strong>Planejamento pronto para gerar.</strong>
            <span>Depois disso, o app monta compras, preparo e porcionamento final.</span>
          </div>
        </div>
      </template>

      <ProteinReviewStep
        :groups="planningGroupsWithData"
        :total-portions="reviewTotalPortions"
        @edit-distribution="goToEditDistribution"
        @edit-weight="goToEditWeight"
      />

      <button class="review-add-btn" type="button" @click="addAnotherGroup">
        <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 5v14M5 12h14" />
        </svg>
        Planejar mais itens
      </button>

      <PlanningActionBar
        primary-label="Gerar plano"
        secondary-label="Voltar"
        meta="Pronto para gerar"
        hint="Compras, preparo e porcionamento"
        ready
        @primary="generatePlan"
        @secondary="editWeights"
      />
    </PlanningFlowShell>
  </StudentShell>
</template>
