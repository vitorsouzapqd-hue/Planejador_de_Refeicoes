import { onMounted, useState, watch } from '#imports'
import { normalizePlanningGroupSlug } from '../data/planningGroups'
import type {
  CurrentPlanning,
  PlanningGroupPlan,
  PlanningGroupSlug,
  PlanningRecipe,
  PlanningResult,
} from '../types/planner'

export const PLANNER_STORAGE_KEY = 'meal_planner_current_plan'
export const DEFAULT_TOTAL_PORTIONS_GOAL = 14

const emptyPlanning = (): CurrentPlanning => ({
  selectedGroupSlugs: [],
  groups: {},
})

const emptyGroupPlan = (groupSlug: PlanningGroupSlug): PlanningGroupPlan => ({
  groupSlug,
  totalPortionsGoal: DEFAULT_TOTAL_PORTIONS_GOAL,
  selectedRecipes: [],
})

export function usePlannerState() {
  const planning = useState<CurrentPlanning>('planner:current', emptyPlanning)
  const hasLoadedStorage = useState<boolean>('planner:storage-loaded', () => false)

  onMounted(() => {
    loadPlanning()
    hasLoadedStorage.value = true
  })

  watch(
    planning,
    () => {
      if (!hasLoadedStorage.value) return
      savePlanning()
    },
    { deep: true },
  )

  function setPlanning(nextPlanning: CurrentPlanning) {
    planning.value = {
      ...nextPlanning,
      updatedAt: new Date().toISOString(),
    }
  }

  function setSelectedRecipes(selectedRecipes: PlanningRecipe[]) {
    const groupSlug = planning.value.selectedGroupSlugs[0]
    if (!groupSlug) return

    setGroupSelectedRecipes(groupSlug, selectedRecipes)
  }

  function setTotalPortionsGoal(totalPortionsGoal: number | null) {
    const groupSlug = planning.value.selectedGroupSlugs[0]
    if (!groupSlug) return

    setGroupTotalPortionsGoal(groupSlug, totalPortionsGoal)
  }

  function setPlanningModule(planningModule: PlanningGroupSlug | null) {
    setSelectedGroups(planningModule ? [planningModule] : [])
  }

  function setSelectedGroups(selectedGroupSlugs: PlanningGroupSlug[]) {
    const uniqueSlugs = Array.from(new Set(selectedGroupSlugs))
    const nextGroups: Partial<Record<PlanningGroupSlug, PlanningGroupPlan>> = {}

    for (const groupSlug of uniqueSlugs) {
      nextGroups[groupSlug] = planning.value.groups[groupSlug] ?? emptyGroupPlan(groupSlug)
    }

    setPlanning({
      ...planning.value,
      selectedGroupSlugs: uniqueSlugs,
      groups: nextGroups,
      generatedResult: undefined,
      generatedAt: undefined,
    })
  }

  function setGroupPlan(groupSlug: PlanningGroupSlug, groupPlan: PlanningGroupPlan) {
    setPlanning({
      ...planning.value,
      groups: {
        ...planning.value.groups,
        [groupSlug]: groupPlan,
      },
      generatedResult: undefined,
      generatedAt: undefined,
    })
  }

  function setGroupTotalPortionsGoal(groupSlug: PlanningGroupSlug, totalPortionsGoal: number | null) {
    const currentGroup = planning.value.groups[groupSlug] ?? emptyGroupPlan(groupSlug)

    setGroupPlan(groupSlug, {
      ...currentGroup,
      totalPortionsGoal,
    })
  }

  function setGroupSelectedRecipes(groupSlug: PlanningGroupSlug, selectedRecipes: PlanningRecipe[]) {
    const currentGroup = planning.value.groups[groupSlug] ?? emptyGroupPlan(groupSlug)

    setGroupPlan(groupSlug, {
      ...currentGroup,
      selectedRecipes,
    })
  }

  function setGeneratedResult(generatedResult: PlanningResult) {
    setPlanning({
      ...planning.value,
      generatedAt: generatedResult.generatedAt,
      generatedResult,
    })
  }

  function loadPlanning() {
    if (typeof window === 'undefined') return planning.value

    const storedPlanning = window.localStorage.getItem(PLANNER_STORAGE_KEY)
    if (!storedPlanning) return planning.value

    try {
      planning.value = {
        ...emptyPlanning(),
        ...normalizeStoredPlanning(JSON.parse(storedPlanning) as Partial<CurrentPlanning> & Record<string, any>),
      }
    } catch {
      window.localStorage.removeItem(PLANNER_STORAGE_KEY)
      planning.value = emptyPlanning()
    }

    return planning.value
  }

  function savePlanning() {
    if (typeof window === 'undefined') return

    window.localStorage.setItem(PLANNER_STORAGE_KEY, JSON.stringify(planning.value))
  }

  function clearPlanning() {
    planning.value = emptyPlanning()

    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(PLANNER_STORAGE_KEY)
    }
  }

  return {
    planning,
    setPlanning,
    setPlanningModule,
    setSelectedGroups,
    setGroupPlan,
    setGroupTotalPortionsGoal,
    setGroupSelectedRecipes,
    setSelectedRecipes,
    setTotalPortionsGoal,
    setGeneratedResult,
    loadPlanning,
    savePlanning,
    clearPlanning,
  }
}

function normalizeStoredPlanning(storedPlanning: Partial<CurrentPlanning> & Record<string, any>): CurrentPlanning {
  if (Array.isArray(storedPlanning.selectedGroupSlugs) && storedPlanning.groups) {
    const selectedGroupSlugs = storedPlanning.selectedGroupSlugs
      .map((slug: string) => normalizePlanningGroupSlug(slug))
      .filter((slug: PlanningGroupSlug | null): slug is PlanningGroupSlug => Boolean(slug))
    const groups: Partial<Record<PlanningGroupSlug, PlanningGroupPlan>> = {}

    for (const groupSlug of selectedGroupSlugs) {
      const storedGroups = storedPlanning.groups as Record<string, PlanningGroupPlan | undefined>
      const storedGroup = storedGroups[groupSlug] ?? storedGroups[groupSlug === 'saladas' ? 'salada' : groupSlug]
      groups[groupSlug] = {
        ...emptyGroupPlan(groupSlug),
        ...(storedGroup ?? {}),
        groupSlug,
        totalPortionsGoal: storedGroup?.totalPortionsGoal ?? DEFAULT_TOTAL_PORTIONS_GOAL,
      }
    }

    return {
      ...emptyPlanning(),
      ...storedPlanning,
      selectedGroupSlugs,
      groups,
    }
  }

  const oldModule = normalizePlanningGroupSlug(storedPlanning.planningModule)

  if (!oldModule) return emptyPlanning()

  return {
    selectedGroupSlugs: [oldModule],
    groups: {
      [oldModule]: {
        groupSlug: oldModule,
        totalPortionsGoal: storedPlanning.totalPortionsGoal ?? DEFAULT_TOTAL_PORTIONS_GOAL,
        selectedRecipes: storedPlanning.selectedRecipes ?? [],
      },
    },
    generatedResult: storedPlanning.generatedResult,
    generatedAt: storedPlanning.generatedAt,
    updatedAt: storedPlanning.updatedAt,
  }
}
