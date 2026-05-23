import type { PlanningGroup, PlanningGroupSlug } from '../types/planner'

export const availablePlanningGroupSlugs: PlanningGroupSlug[] = [
  'proteinas',
  'carboidratos',
  'saladas',
  'frutas',
]

export const planningGroups: PlanningGroup[] = [
  {
    id: 'proteinas',
    name: 'Proteínas',
    slug: 'proteinas',
    status: 'available',
    description: 'Frango, carne, suíno, peixe e outras preparações.',
    icon: 'beef',
    categorySlug: 'proteinas',
  },
  {
    id: 'carboidratos',
    name: 'Carboidratos',
    slug: 'carboidratos',
    status: 'available',
    description: 'Arroz, batatas, macarrão, mandioca e outros.',
    icon: 'grain',
    categorySlug: 'carboidratos',
  },
  {
    id: 'saladas',
    name: 'Saladas',
    slug: 'saladas',
    status: 'available',
    description: 'Folhas, legumes, saladas cozidas e mixes.',
    icon: 'salad',
    categorySlug: 'saladas',
    categoryAliases: ['salada'],
  },
  {
    id: 'frutas',
    name: 'Frutas',
    slug: 'frutas',
    status: 'available',
    description: 'Frutas de casa e frutas de rua em gramas.',
    icon: 'fruit',
    categorySlug: 'frutas',
  },
  {
    id: 'marmitas',
    name: 'Marmitas',
    slug: 'marmitas',
    status: 'coming_soon',
    description: 'Montagem completa em desenvolvimento.',
    icon: 'meal-box',
    categorySlug: 'marmitas',
  },
  {
    id: 'lanches',
    name: 'Lanches',
    slug: 'lanches',
    status: 'coming_soon',
    description: 'Planejamento de lanches em desenvolvimento.',
    icon: 'snack',
    categorySlug: 'lanches',
  },
  {
    id: 'sobremesas',
    name: 'Sobremesas',
    slug: 'sobremesas',
    status: 'coming_soon',
    description: 'Sobremesas planejadas entram depois.',
    icon: 'dessert',
    categorySlug: 'sobremesas',
  },
]

export function getPlanningGroup(slug: PlanningGroupSlug | string | null | undefined) {
  if (!slug) return null

  const normalizedSlug = slug === 'salada' ? 'saladas' : slug

  return planningGroups.find((group) => group.slug === normalizedSlug) ?? null
}

export function normalizePlanningGroupSlug(slug: string | null | undefined): PlanningGroupSlug | null {
  if (!slug) return null
  if (slug === 'salada') return 'saladas'
  if (availablePlanningGroupSlugs.includes(slug as PlanningGroupSlug)) return slug as PlanningGroupSlug

  return null
}

export function getPlanningGroupName(slug: PlanningGroupSlug | string | null | undefined) {
  return getPlanningGroup(slug)?.name ?? 'Grupo'
}

export function getPlanningGroupSingularName(slug: PlanningGroupSlug | string | null | undefined) {
  const labels: Record<PlanningGroupSlug, string> = {
    proteinas: 'proteína',
    carboidratos: 'carboidrato',
    saladas: 'salada',
    frutas: 'fruta',
  }
  const normalizedSlug = normalizePlanningGroupSlug(String(slug ?? ''))

  return normalizedSlug ? labels[normalizedSlug] : 'item'
}

export function getPlanningGroupItemName(slug: PlanningGroupSlug | string | null | undefined) {
  const labels: Record<PlanningGroupSlug, string> = {
    proteinas: 'preparações',
    carboidratos: 'preparações',
    saladas: 'saladas',
    frutas: 'frutas',
  }
  const normalizedSlug = normalizePlanningGroupSlug(String(slug ?? ''))

  return normalizedSlug ? labels[normalizedSlug] : 'opções'
}
