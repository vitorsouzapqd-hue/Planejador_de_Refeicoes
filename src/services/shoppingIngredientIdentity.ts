import type { RecipeIngredient } from '../types/recipe'

export type IngredientShoppingFragment = {
  ingredient: RecipeIngredient
  quantityShare: number
}

const knownCompoundShoppingSplits: Record<string, string[]> = {
  'beterraba e cenoura': ['Beterraba', 'Cenoura'],
  'beterraba e cenoura cruas': ['Beterraba', 'Cenoura'],
  'beterraba com cenoura': ['Beterraba', 'Cenoura'],
  'beterraba com cenoura cozida': ['Beterraba', 'Cenoura'],
  'cenoura e beterraba': ['Cenoura', 'Beterraba'],
  'cenoura e beterraba cozida': ['Cenoura', 'Beterraba'],
  'cenoura com beterraba': ['Cenoura', 'Beterraba'],
  'cenoura com beterraba cozida': ['Cenoura', 'Beterraba'],
  'brocolis e couve-flor': ['Brócolis', 'Couve-flor'],
  'brocolis e couve-flor crus': ['Brócolis', 'Couve-flor'],
  'cenoura e brocolis': ['Cenoura', 'Brócolis'],
  'cenoura e brocolis crus': ['Cenoura', 'Brócolis'],
  'repolho verde e roxo': ['Repolho verde', 'Repolho roxo'],
  'repolho verde e roxo crus': ['Repolho verde', 'Repolho roxo'],
  'agriao, pepino e manga': ['Agrião', 'Pepino', 'Manga'],
  'alface, pepino e tomate': ['Alface', 'Pepino', 'Tomate'],
  'alface, tomate e cebola roxa': ['Alface', 'Tomate', 'Cebola roxa'],
  'couve e tomate': ['Couve', 'Tomate'],
  'repolho e cenoura': ['Repolho', 'Cenoura'],
  'repolho e cenoura crus': ['Repolho', 'Cenoura'],
}

export function expandShoppingIngredient(ingredient: RecipeIngredient): IngredientShoppingFragment[] {
  const splitNames = getCompoundShoppingNames(ingredient)

  if (!splitNames?.length) return [{ ingredient, quantityShare: 1 }]

  const quantityShare = 1 / splitNames.length

  return splitNames.map((name, index) => ({
    ingredient: {
      ...ingredient,
      id: `${ingredient.id}:split-${index + 1}`,
      ingredientId: null,
      name,
      displayName: name,
      baseQuantity: ingredient.baseQuantity === null ? null : ingredient.baseQuantity * quantityShare,
      notes: ingredient.notes,
      sortOrder: ingredient.sortOrder + index,
    },
    quantityShare,
  }))
}

export function getCompoundShoppingNames(ingredient: RecipeIngredient): string[] | null {
  if (ingredient.ingredientId || ingredient.isFreeSeasoning || !ingredient.includeInShoppingList) return null

  const splitNames = splitCompoundShoppingName(ingredient.displayName ?? ingredient.name)

  return splitNames.length ? splitNames : null
}

export function hasCompoundShoppingName(name: string | null | undefined) {
  return Boolean(splitCompoundShoppingName(name).length)
}

export function splitCompoundShoppingName(name: string | null | undefined): string[] {
  if (!name?.trim()) return []

  const knownSplit = knownCompoundShoppingSplits[normalizeCompoundName(name)]
  if (knownSplit?.length) return knownSplit

  return splitGenericCompoundIngredientName(name)
}

function normalizeCompoundName(value: string): string {
  return value
    .trim()
    .toLocaleLowerCase('pt-BR')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/\s+/g, ' ')
}

function splitGenericCompoundIngredientName(value: string): string[] {
  const cleanedValue = stripIngredientStateSuffix(stripParentheticalDescriptors(value))
  if (!/(\s+e\s+|\s+com\s+|,)/i.test(cleanedValue)) return []

  const parts = cleanedValue
    .split(/\s*(?:,|\s+e\s+|\s+com\s+)\s*/i)
    .map((part) => formatIngredientPartName(stripIngredientStateSuffix(stripParentheticalDescriptors(part))))
    .filter((part) => part.length > 0)

  return parts.length > 1 ? parts : []
}

function stripParentheticalDescriptors(value: string): string {
  return value.replace(/\s*\(.+?\)\s*/g, ' ').replace(/\s+/g, ' ').trim()
}

function stripIngredientStateSuffix(value: string): string {
  return value
    .trim()
    .replace(/\s+(cru|crua|crus|cruas|cozido|cozida|cozidos|cozidas|assado|assada|assados|assadas|refogado|refogada|refogados|refogadas|grelhado|grelhada|grelhados|grelhadas)$/i, '')
    .trim()
}

function formatIngredientPartName(value: string): string {
  const cleanedValue = value.trim().replace(/\s+/g, ' ').toLocaleLowerCase('pt-BR')
  if (!cleanedValue) return ''

  return `${cleanedValue[0]?.toLocaleUpperCase('pt-BR') ?? ''}${cleanedValue.slice(1)}`
}
