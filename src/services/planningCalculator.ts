import type {
  PlanningGroupWithData,
  PlanningLine,
  PlanningRecipeWithData,
  PlanningResult,
  PreparationRecipeResult,
  ScaledIngredient,
  ShoppingListCategory,
  ShoppingListItem,
} from '../types/planner'
import type { RecipeIngredient, RoundingMode } from '../types/recipe'
import { expandShoppingIngredient } from './shoppingIngredientIdentity'

type CompletePlanningLine = {
  weightReadyG: number
  portions: number
}

type ShoppingAccumulator = ShoppingListItem & {
  rawQuantity: number | null
  roundingStep: number | null
  roundingMode: RoundingMode
  packageSizeG: number | null
  packageLabel: string | null
  buyInWholePackages: boolean
}

type WholePackageConfig = {
  packageSizeG: number
  packageLabel: string
}

export function calculateReadyWeight(lines: PlanningLine[]): number {
  return getCompleteLines(lines).reduce((total, line) => {
    return total + line.weightReadyG * line.portions
  }, 0)
}

export function calculateTotalPortions(planningRecipes: PlanningRecipeWithData[]): number {
  return planningRecipes.reduce((total, planningRecipe) => {
    return total + getCompleteLines(planningRecipe.lines).reduce((lineTotal, line) => {
      return lineTotal + line.portions
    }, 0)
  }, 0)
}

export function calculateGroupTotalPortions(planningGroup: PlanningGroupWithData): number {
  return calculateTotalPortions(planningGroup.recipes)
}

export function calculateRawNeeded(
  readyWeight: number,
  baseRawWeight: number,
  baseReadyWeight: number,
): number {
  if (readyWeight <= 0) return 0
  if (baseRawWeight <= 0 || baseReadyWeight <= 0) {
    throw new Error('Base raw and ready weights must be greater than zero.')
  }

  return (readyWeight / baseReadyWeight) * baseRawWeight
}

export function roundUp(value: number, step: number): number {
  if (value <= 0) return 0
  if (step <= 0) return value

  return Math.ceil(value / step) * step
}

export function scaleIngredient(
  ingredient: RecipeIngredient,
  scale: number,
): ScaledIngredient {
  if (ingredient.baseQuantity === null || ingredient.isFreeSeasoning) {
    return {
      ingredient,
      quantity: null,
      displayQuantity: null,
      unit: ingredient.unit,
    }
  }

  const quantity = ingredient.baseQuantity * scale

  return {
    ingredient,
    quantity,
    displayQuantity: applyRounding(quantity, ingredient.roundingStep, ingredient.roundingMode),
    unit: ingredient.unit,
  }
}

export function consolidateShoppingList(
  planningRecipes: PlanningRecipeWithData[],
): ShoppingListCategory[] {
  const items = new Map<string, ShoppingAccumulator>()

  for (const planningRecipe of planningRecipes) {
    const { recipe, lines } = planningRecipe
    const readyWeight = calculateReadyWeight(lines)
    const rawNeeded = calculateRawNeeded(readyWeight, recipe.baseRawWeightG, recipe.baseReadyWeightG)
    const recipeScale = rawNeeded / recipe.baseRawWeightG

    for (const sourceIngredient of recipe.ingredients) {
      const ingredientFragments = expandShoppingIngredient(sourceIngredient)

      for (const { ingredient, quantityShare } of ingredientFragments) {
        if (!ingredient.includeInShoppingList) continue

        const scaled =
          ingredient.ingredientRole === 'main'
            ? {
                ingredient,
                quantity: rawNeeded * getMainIngredientQuantityShare(
                  ingredient,
                  recipe.baseRawWeightG,
                  quantityShare,
                ),
                displayQuantity: null,
                unit: ingredient.unit,
              }
            : scaleIngredient(ingredient, recipeScale)

        const displayName = ingredient.displayName ?? ingredient.name
        const shoppingCategory = normalizeShoppingCategory(ingredient.shoppingCategory, ingredient)
        const key = buildShoppingKey(ingredient, shoppingCategory, displayName)

        const existing = items.get(key)

        if (existing) {
          existing.rawQuantity =
            existing.rawQuantity === null || scaled.quantity === null
              ? null
              : existing.rawQuantity + scaled.quantity
          existing.quantity = existing.rawQuantity
          existing.isCritical = existing.isCritical || ingredient.isCritical
          continue
        }

        const packageConfig = getWholePackageConfig(ingredient)

        items.set(key, {
          key,
          ingredientId: ingredient.ingredientId,
          name: ingredient.name,
          displayName,
          shoppingCategory,
          ingredientRole: ingredient.ingredientRole,
          quantity: scaled.quantity,
          rawQuantity: scaled.quantity,
          unit: scaled.unit,
          isCritical: ingredient.isCritical,
          isFreeSeasoning: ingredient.isFreeSeasoning,
          notes: ingredient.notes,
          roundingStep: ingredient.roundingStep,
          roundingMode: ingredient.roundingMode,
          packageSizeG: packageConfig?.packageSizeG ?? null,
          packageLabel: packageConfig?.packageLabel ?? null,
          buyInWholePackages: Boolean(packageConfig),
        })
      }
    }
  }

  const categories = new Map<string, ShoppingListItem[]>()

  for (const item of items.values()) {
    const packageConfig =
      item.buyInWholePackages && item.packageSizeG && item.packageLabel
        ? { packageSizeG: item.packageSizeG, packageLabel: item.packageLabel }
        : null
    const roundedPurchase = applyPurchaseRounding(
      item.rawQuantity,
      item.unit,
      item.roundingStep,
      item.roundingMode,
      packageConfig,
    )

    const finalItem: ShoppingListItem = {
      key: item.key,
      ingredientId: item.ingredientId,
      name: item.name,
      displayName: item.displayName,
      shoppingCategory: item.shoppingCategory,
      ingredientRole: item.ingredientRole,
      quantity: roundedPurchase.quantity,
      unit: item.unit,
      isCritical: item.isCritical,
      isFreeSeasoning: item.isFreeSeasoning,
      notes: item.notes,
      requiredQuantity: item.rawQuantity,
      packageCount: roundedPurchase.packageCount,
      packageSizeG: packageConfig?.packageSizeG ?? null,
      packageLabel: packageConfig?.packageLabel ?? null,
    }

    const categoryItems = categories.get(finalItem.shoppingCategory) ?? []
    categoryItems.push(finalItem)
    categories.set(finalItem.shoppingCategory, categoryItems)
  }

  return Array.from(categories.entries())
    .map(([category, categoryItems]) => ({
      category,
      items: categoryItems,
    }))
    .sort((a, b) => getShoppingCategoryOrder(a.category) - getShoppingCategoryOrder(b.category))
}

export function generatePlanningResult(planningGroups: PlanningGroupWithData[]): PlanningResult {
  const planningRecipes = flattenPlanningGroups(planningGroups)
  const shoppingList = consolidateShoppingList(planningRecipes)
  const preparationRecipes = generatePreparationRecipes(planningGroups)

  return {
    generatedAt: new Date().toISOString(),
    totalPortions: planningGroups.reduce((total, group) => total + calculateGroupTotalPortions(group), 0),
    groups: planningGroups.map((group) => ({
      groupSlug: group.groupSlug,
      groupName: group.groupName,
      totalPortions: calculateGroupTotalPortions(group),
      recipes: group.recipes.map((planningRecipe) => ({
        recipeId: planningRecipe.recipeId,
        recipeName: planningRecipe.recipe.name,
        recipeSlug: planningRecipe.recipe.slug,
        imagePath: planningRecipe.recipe.imagePath,
        imageUrl: planningRecipe.recipe.imageUrl,
        lines: getCompleteLines(planningRecipe.lines),
        readyWeightG: calculateReadyWeight(planningRecipe.lines),
      })),
    })),
    summaryText: generateSummaryText(planningGroups),
    shoppingList,
    shoppingText: generateShoppingText(shoppingList),
    preparationText: generatePreparationText(preparationRecipes),
    preparationRecipes,
    portioningText: generatePortioningText(planningGroups),
  }
}

export function generateSummaryText(planningGroups: PlanningGroupWithData[]): string {
  const lines: string[] = ['Seu planejamento', '']

  for (const group of planningGroups) {
    lines.push(group.groupName)

    for (const planningRecipe of group.recipes) {
      lines.push(planningRecipe.recipe.name)

      for (const line of getCompleteLines(planningRecipe.lines)) {
        lines.push(`- ${line.portions} porções de ${line.weightReadyG}g`)
      }
    }

    lines.push('')
  }

  lines.push(`Total: ${planningGroups.reduce((total, group) => total + calculateGroupTotalPortions(group), 0)} porções`)

  return lines.join('\n').trim()
}

export function generateShoppingText(shoppingList: ShoppingListCategory[]): string {
  const lines: string[] = ['Lista de compras', '']
  const freeSeasonings: string[] = []

  for (const category of shoppingList) {
    const measuredItems = category.items.filter((item) => !item.isFreeSeasoning)

    if (measuredItems.length > 0) {
      lines.push(`${category.category}:`)
      for (const item of measuredItems) {
        lines.push(`- ${formatShoppingItem(item)}`)
      }
      lines.push('')
    }

    freeSeasonings.push(
      ...category.items
        .filter((item) => item.isFreeSeasoning)
        .map((item) => item.displayName),
    )
  }

  if (freeSeasonings.length > 0) {
    lines.push(`Temperos à gosto: ${joinHumanList(unique(freeSeasonings))}.`)
  }

  return lines.join('\n').trim()
}

export function generatePreparationRecipes(
  planningGroups: PlanningGroupWithData[],
): PreparationRecipeResult[] {
  return planningGroups.flatMap((group) =>
    group.recipes.map((planningRecipe) => {
      const completeLines = getCompleteLines(planningRecipe.lines)
      const readyWeightG = calculateReadyWeight(planningRecipe.lines)
      const rawNeededG = calculateRawNeeded(
        readyWeightG,
        planningRecipe.recipe.baseRawWeightG,
        planningRecipe.recipe.baseReadyWeightG,
      )
      const mainIngredient = getMainIngredient(planningRecipe.recipe.ingredients)
      const roundedRawNeededG = applyPurchaseRounding(
        rawNeededG,
        mainIngredient?.unit ?? 'g',
        mainIngredient?.roundingStep ?? 100,
        mainIngredient?.roundingMode ?? 'up',
        mainIngredient ? getWholePackageConfig(mainIngredient) : null,
      )
      const recipeScale = rawNeededG / planningRecipe.recipe.baseRawWeightG
      const mainIngredientName = getMainIngredientName(planningRecipe.recipe.ingredients)
      const yieldNote =
        planningRecipe.recipe.baseYieldNote ??
        'Rendimento estimado com base na receita cadastrada.'
      const transformationStages = [
        {
          label: 'cru',
          quantityG: rawNeededG,
        },
        ...(planningRecipe.recipe.baseCleanWeightG
          ? [
              {
                label: 'limpo',
                quantityG: planningRecipe.recipe.baseCleanWeightG * recipeScale,
              },
            ]
          : []),
        {
          label: 'pronto',
          quantityG: readyWeightG,
        },
      ]
      const scaledIngredients = planningRecipe.recipe.ingredients
        .filter((ingredient) => ingredient.includeInShoppingList)
        .flatMap((ingredient) => expandShoppingIngredient(ingredient))
        .map(({ ingredient, quantityShare }) => {
          if (ingredient.ingredientRole === 'main') {
            const mainIngredientShare = getMainIngredientQuantityShare(
              ingredient,
              planningRecipe.recipe.baseRawWeightG,
              quantityShare,
            )
            const roundedPurchase = applyPurchaseRounding(
              rawNeededG * mainIngredientShare,
              ingredient.unit,
              ingredient.roundingStep,
              ingredient.roundingMode,
              getWholePackageConfig(ingredient),
            )

            return {
              ingredient,
              quantity: rawNeededG * mainIngredientShare,
              displayQuantity: roundedPurchase.quantity,
              unit: ingredient.unit,
            }
          }

          return scaleIngredient(ingredient, recipeScale)
        })
      const mainScaledIngredients = scaledIngredients.filter((scaledIngredient) => {
        return scaledIngredient.ingredient.ingredientRole === 'main' && !scaledIngredient.ingredient.isFreeSeasoning
      })
      const mainPurchaseText = mainScaledIngredients.length
        ? mainScaledIngredients.map((scaledIngredient) => formatScaledIngredient(scaledIngredient)).join('; ')
        : formatMainPurchase(roundedRawNeededG, mainIngredientName ?? 'ingrediente principal cru')
      const rawPurchaseG = mainScaledIngredients.length
        ? mainScaledIngredients.reduce((total, scaledIngredient) => {
            return total + (scaledIngredient.displayQuantity ?? scaledIngredient.quantity ?? 0)
          }, 0)
        : roundedRawNeededG.quantity ?? rawNeededG

      const textLines: string[] = [
        planningRecipe.recipe.name,
        '',
        'Você vai preparar:',
        ...completeLines.map(
          (line) => `- ${line.portions} porções de ${line.weightReadyG}g`,
        ),
        '',
        `Total pronto necessário: ${formatQuantity(readyWeightG, 'g')}`,
        `Compre aproximadamente: ${mainPurchaseText}`,
        `Rendimento estimado: ${formatTransformationStages(transformationStages)}.`,
        yieldNote,
        '',
        'Ingredientes:',
        ...scaledIngredients.map((scaledIngredient) => `- ${formatScaledIngredient(scaledIngredient)}`),
        '',
        'Modo de preparo:',
        ...planningRecipe.recipe.steps.map((step) => `${step.stepNumber}. ${step.instruction}`),
        '',
        planningRecipe.recipe.lockedRecipeWarning ??
          'Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.',
        'Depois de pronto, pese a preparação antes de separar as porções.',
      ]

      return {
        recipeId: planningRecipe.recipeId,
        groupSlug: group.groupSlug,
        groupName: group.groupName,
        recipeName: planningRecipe.recipe.name,
        recipeSlug: planningRecipe.recipe.slug,
        imagePath: planningRecipe.recipe.imagePath,
        imageUrl: planningRecipe.recipe.imageUrl,
        referenceVideoUrl: planningRecipe.recipe.referenceVideoUrl,
        referenceVideoTitle: planningRecipe.recipe.referenceVideoTitle,
        referenceVideoSource: planningRecipe.recipe.referenceVideoSource,
        referenceVideoNotes: planningRecipe.recipe.referenceVideoNotes,
        lockedRecipeWarning: planningRecipe.recipe.lockedRecipeWarning,
        lines: completeLines,
        readyWeightG,
        rawNeededG,
        rawPurchaseG,
        mainIngredientName,
        baseRawWeightG: planningRecipe.recipe.baseRawWeightG,
        baseReadyWeightG: planningRecipe.recipe.baseReadyWeightG,
        baseYieldNote: planningRecipe.recipe.baseYieldNote,
        yieldNote,
        transformationStages,
        text: textLines.join('\n').trim(),
      }
    }),
  )
}

export function generatePreparationText(preparationRecipes: PreparationRecipeResult[]): string {
  return preparationRecipes.map((recipe) => recipe.text).join('\n\n---\n\n')
}

export function generatePortioningText(planningGroups: PlanningGroupWithData[]): string {
  const lines: string[] = ['Ao final do preparo, separe:', '']
  let totalPortions = 0

  for (const group of planningGroups) {
    lines.push(group.groupName)

    for (const planningRecipe of group.recipes) {
      lines.push(planningRecipe.recipe.name)

      for (const line of getCompleteLines(planningRecipe.lines)) {
        totalPortions += line.portions
        lines.push(`- ${line.portions} porções de ${line.weightReadyG}g`)
      }
    }

    lines.push('')
  }

  lines.push(`Total: ${totalPortions} porções`)
  lines.push('')
  lines.push('Se render menos do que o esperado, separe as porções no peso planejado.')
  lines.push('')
  lines.push('Se sobrar preparação pronta, guarde como porção extra e mantenha o peso planejado para cada porção.')

  return lines.join('\n').trim()
}

function flattenPlanningGroups(planningGroups: PlanningGroupWithData[]): PlanningRecipeWithData[] {
  return planningGroups.flatMap((group) => group.recipes)
}

function applyRounding(value: number, step: number | null, mode: RoundingMode): number {
  if (!step || step <= 0 || mode === 'none' || mode === 'manual') return value
  if (mode === 'up') return roundUp(value, step)
  if (mode === 'nearest') return Math.round(value / step) * step

  return value
}

function applyPurchaseRounding(
  value: number | null,
  unit: string | null,
  step: number | null,
  mode: RoundingMode,
  packageConfig: WholePackageConfig | null,
) {
  if (value === null) {
    return {
      quantity: null,
      packageCount: null,
      packageSizeG: null,
      packageLabel: null,
    }
  }

  if (packageConfig && unit === 'g') {
    const packageCount = Math.ceil(value / packageConfig.packageSizeG)

    return {
      quantity: packageCount * packageConfig.packageSizeG,
      packageCount,
      packageSizeG: packageConfig.packageSizeG,
      packageLabel: packageConfig.packageLabel,
    }
  }

  return {
    quantity: applyRounding(value, step, mode),
    packageCount: null,
    packageSizeG: null,
    packageLabel: null,
  }
}

function formatShoppingItem(item: ShoppingListItem): string {
  if (item.isFreeSeasoning) return `${item.displayName} à gosto`
  if (item.quantity === null) return item.displayName

  if (item.packageCount && item.packageSizeG && item.packageLabel && item.unit === 'g') {
    const suffix = item.isCritical ? ' (medir com atenção)' : ''

    return `${formatQuantity(item.quantity, item.unit)} de ${item.displayName} (${formatPackageCount(item.packageCount, item.packageLabel, item.packageSizeG)})${suffix}`
  }

  const quantity = formatQuantity(item.quantity, item.unit)
  const suffix = item.isCritical ? ' (medir com atenção)' : ''

  return `${quantity} de ${item.displayName}${suffix}`
}

function formatScaledIngredient(scaledIngredient: ScaledIngredient): string {
  const { ingredient, displayQuantity, unit } = scaledIngredient
  const displayName = ingredient.displayName ?? ingredient.name

  if (ingredient.isFreeSeasoning || displayQuantity === null) return `${displayName} à gosto`

  const suffix = ingredient.isCritical ? ' (medir com atenção)' : ''

  return `${formatQuantity(displayQuantity, unit)} de ${displayName}${suffix}`
}

function formatQuantity(quantity: number, unit: string | null): string {
  if (unit === 'g' && quantity >= 1000) return `${formatDecimal(quantity / 1000)}kg`
  if (unit === 'g') return `${formatDecimal(quantity)}g`
  if (!unit) return formatDecimal(quantity)

  return `${formatDecimal(quantity)} ${unit}`
}

function formatTransformationStages(stages: Array<{ label: string; quantityG: number }>): string {
  return stages
    .map((stage) => `${formatQuantity(stage.quantityG, 'g')} ${stage.label}`)
    .join(' -> ')
}

function formatDecimal(value: number): string {
  if (Number.isInteger(value)) return String(value)

  return new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 1,
  }).format(value)
}

function joinHumanList(items: string[]): string {
  if (items.length <= 1) return items.join('')
  if (items.length === 2) return items.join(' e ')

  return `${items.slice(0, -1).join(', ')} e ${items[items.length - 1]}`
}

function normalizeKey(value: string): string {
  return value.trim().toLocaleLowerCase('pt-BR')
}

function unique(items: string[]): string[] {
  return Array.from(new Set(items))
}

function getCompleteLines(lines: PlanningLine[]): CompletePlanningLine[] {
  return lines.filter((line): line is CompletePlanningLine => {
    return Boolean(line.weightReadyG && line.portions)
  })
}

function getMainIngredientName(ingredients: RecipeIngredient[]): string | null {
  const mainIngredient = getMainIngredient(ingredients)

  return mainIngredient?.displayName ?? mainIngredient?.name ?? null
}

function getMainIngredient(ingredients: RecipeIngredient[]): RecipeIngredient | null {
  return ingredients.find((ingredient) => ingredient.ingredientRole === 'main') ?? null
}

function getMainIngredientQuantityShare(
  ingredient: RecipeIngredient,
  baseRawWeightG: number,
  fallbackShare: number,
) {
  if (ingredient.baseQuantity !== null && ingredient.baseQuantity > 0 && baseRawWeightG > 0) {
    return ingredient.baseQuantity / baseRawWeightG
  }

  return fallbackShare
}

function getWholePackageConfig(ingredient: RecipeIngredient): WholePackageConfig | null {
  if (ingredient.buyInWholePackages && ingredient.packageSizeG && ingredient.packageSizeG > 0) {
    return {
      packageSizeG: ingredient.packageSizeG,
      packageLabel: ingredient.packageLabel ?? ingredient.purchaseUnit ?? 'pacote',
    }
  }

  return null
}

function formatMainPurchase(
  purchase: {
    quantity: number | null
    packageCount: number | null
    packageSizeG?: number | null
    packageLabel?: string | null
  },
  ingredientName: string,
) {
  if (purchase.quantity === null) return ingredientName
  if (purchase.packageCount && purchase.packageSizeG && purchase.packageLabel) {
    return `${formatQuantity(purchase.quantity, 'g')} de ${ingredientName} (${formatPackageCount(purchase.packageCount, purchase.packageLabel, purchase.packageSizeG)})`
  }

  return `${formatQuantity(purchase.quantity, 'g')} de ${ingredientName}`
}

function pluralizePackageLabel(label: string, count: number) {
  if (count === 1) return label
  if (label.startsWith('pacote de ')) return label.replace(/^pacote de /, 'pacotes de ')
  if (label.startsWith('unidade de ')) return label.replace(/^unidade de /, 'unidades de ')
  if (label.endsWith('s')) return label

  return `${label}s`
}

function formatPackageCount(count: number, label: string, packageSizeG: number) {
  const pluralLabel = pluralizePackageLabel(label, count)
  const normalizedLabel = normalizeKey(label)

  if (normalizedLabel.includes('kg') || normalizedLabel.includes('g')) {
    return `${count} ${pluralLabel}`
  }

  return `${count} ${pluralLabel} de ${formatQuantity(packageSizeG, 'g')}`
}

function buildShoppingKey(
  ingredient: RecipeIngredient,
  shoppingCategory: string,
  displayName: string,
) {
  const quantityMode = ingredient.isFreeSeasoning ? 'free-seasoning' : 'measured'
  const unit = ingredient.isFreeSeasoning ? 'free' : ingredient.unit ?? ''

  if (ingredient.ingredientId) {
    return ['ingredient', ingredient.ingredientId, unit, quantityMode].join('|')
  }

  return [
    'fallback',
    normalizeKey(displayName),
    normalizeKey(shoppingCategory),
    unit,
    quantityMode,
  ].join('|')
}

function normalizeShoppingCategory(category: string, ingredient: RecipeIngredient): string {
  const normalizedCategory = normalizeKey(category)

  if (normalizedCategory.includes('prote')) return 'Proteínas'
  if (normalizedCategory.includes('carbo') || normalizedCategory.includes('cereal')) return 'Carboidratos'
  if (normalizedCategory.includes('fruta')) return 'Frutas'
  if (
    normalizedCategory.includes('veget') ||
    normalizedCategory.includes('horti') ||
    normalizedCategory.includes('salada')
  ) {
    return 'Vegetais'
  }
  if (normalizedCategory.includes('bebida')) return 'Bebidas'
  if (normalizedCategory.includes('tempero')) return 'Temperos'
  if (ingredient.ingredientRole === 'seasoning') return 'Temperos'

  return 'Outros'
}

function getShoppingCategoryOrder(category: string) {
  const order = ['Proteínas', 'Carboidratos', 'Frutas', 'Vegetais', 'Bebidas', 'Temperos', 'Outros']
  const index = order.indexOf(category)

  return index === -1 ? order.length : index
}
