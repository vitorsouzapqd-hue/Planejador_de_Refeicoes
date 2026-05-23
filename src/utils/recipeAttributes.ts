import type { Recipe } from '../types/recipe'

type RecipeAttributeSource = Pick<
  Recipe,
  'slug' | 'name' | 'type' | 'timeLevel' | 'workLevel' | 'freezesWell'
> & {
  categorySlug?: string | null
}

const recipeAttributeOverrides: Record<string, { prepTimeMinutes?: number; versatilityLevel?: number; practicalityLevel?: number }> = {
  'frango-desfiado': { prepTimeMinutes: 35, versatilityLevel: 4, practicalityLevel: 4 },
  'frango-moido': { prepTimeMinutes: 20, versatilityLevel: 4, practicalityLevel: 4 },
  'patinho-moido': { prepTimeMinutes: 20, versatilityLevel: 4, practicalityLevel: 4 },
  'patinho-moido-refogado': { prepTimeMinutes: 20, versatilityLevel: 4, practicalityLevel: 4 },
  'lombo-suino-desfiado': { prepTimeMinutes: 45, versatilityLevel: 4, practicalityLevel: 3 },
  'almondegas-carne': { prepTimeMinutes: 35, versatilityLevel: 3, practicalityLevel: 3 },
  'almondegas-frango': { prepTimeMinutes: 35, versatilityLevel: 3, practicalityLevel: 3 },
  'strogonoff-frango': { prepTimeMinutes: 30, versatilityLevel: 1, practicalityLevel: 2 },
  'frango-creme-milho': { prepTimeMinutes: 30, versatilityLevel: 1, practicalityLevel: 2 },
  'lombo-barbecue': { prepTimeMinutes: 40, versatilityLevel: 1, practicalityLevel: 2 },
  'tilapia-grelhada': { prepTimeMinutes: 15, versatilityLevel: 2, practicalityLevel: 3 },
  'arroz-branco-cozido': { prepTimeMinutes: 25, versatilityLevel: 4, practicalityLevel: 4 },
  'macarrao-cozido': { prepTimeMinutes: 15, versatilityLevel: 3, practicalityLevel: 4 },
  'feijao-preto': { prepTimeMinutes: 60, versatilityLevel: 3, practicalityLevel: 2 },
  'pure-batata-inglesa': { prepTimeMinutes: 35, versatilityLevel: 2, practicalityLevel: 2 },
  'pure-inhame': { prepTimeMinutes: 35, versatilityLevel: 2, practicalityLevel: 2 },
  'pure-mandioca': { prepTimeMinutes: 40, versatilityLevel: 2, practicalityLevel: 2 },
}

export function getRecipePrepTimeMinutes(recipe: RecipeAttributeSource): number {
  const override = recipeAttributeOverrides[recipe.slug]?.prepTimeMinutes
  if (override) return override

  const timeLevel = normalizeLevel(recipe.timeLevel, 2)
  const workLevel = normalizeLevel(recipe.workLevel, 2)
  const categorySlug = recipe.categorySlug

  if (categorySlug === 'frutas') return 5
  if (categorySlug === 'saladas') return timeLevel <= 1 ? 10 : 20

  return Math.round((10 + timeLevel * 8 + workLevel * 5) / 5) * 5
}

export function getRecipePracticalityLevel(recipe: RecipeAttributeSource): number {
  const override = recipeAttributeOverrides[recipe.slug]?.practicalityLevel
  if (override) return override

  const timeLevel = normalizeLevel(recipe.timeLevel, 2)
  const workLevel = normalizeLevel(recipe.workLevel, 2)
  const convenienceBonus = recipe.freezesWell ? 1 : 0
  const level = 5 - Math.ceil((timeLevel + workLevel) / 2) + convenienceBonus

  return clampLevel(level)
}

export function getRecipeVersatilityLevel(recipe: RecipeAttributeSource): number {
  const override = recipeAttributeOverrides[recipe.slug]?.versatilityLevel
  if (override) return override

  const categorySlug = recipe.categorySlug
  const name = normalize(recipe.name)
  const type = normalize(recipe.type ?? '')

  if (categorySlug === 'frutas') return 2
  if (categorySlug === 'saladas') return name.includes('crua') ? 2 : 3
  if (name.includes('strogonoff') || name.includes('barbecue') || name.includes('lasanha') || name.includes('creme')) {
    return 1
  }
  if (name.includes('desfiado') || name.includes('moido') || type === 'arroz') return 4
  if (name.includes('almondega') || name.includes('pure') || name.includes('batata')) return 3

  return recipe.freezesWell ? 3 : 2
}

export function formatPrepTime(minutes: number | null): string {
  if (!minutes) return 'Tempo não informado'
  if (minutes < 60) return `${minutes} min`

  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  return remainingMinutes ? `${hours}h ${remainingMinutes}min` : `${hours}h`
}

export function formatAttributeLevel(value: number | null, labels: [string, string, string, string]): string {
  return labels[clampLevel(value ?? 0) - 1] ?? labels[0]
}

function normalizeLevel(value: number | null, fallback: number) {
  return clampLevel(value ?? fallback)
}

function clampLevel(value: number) {
  return Math.max(1, Math.min(4, Math.round(value)))
}

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .trim()
}
