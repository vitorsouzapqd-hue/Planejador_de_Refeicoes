import { listPhotoCatalogRecipes } from '../src/data/photoRecipeCatalog'
import { consolidateShoppingList } from '../src/services/planningCalculator'
import type { PlanningRecipeWithData } from '../src/types/planner'
import type { Recipe } from '../src/types/recipe'

const compoundRecipe = createRecipe({
  name: 'Cenoura com Beterraba Cozida',
  ingredients: [
    {
      id: 'compound-main',
      recipeId: 'compound-salad',
      ingredientId: null,
      name: 'Cenoura e Beterraba',
      shoppingCategory: 'Vegetais',
      ingredientRole: 'main',
      baseQuantity: 1000,
      unit: 'g',
      isCritical: false,
      isFreeSeasoning: false,
      includeInShoppingList: true,
      roundingStep: 50,
      roundingMode: 'up',
      displayName: 'Cenoura e Beterraba',
      notes: null,
      sortOrder: 1,
    },
  ],
})

const shoppingList = consolidateShoppingList([
  {
    recipeId: compoundRecipe.id,
    recipe: compoundRecipe,
    lines: [{ weightReadyG: 800, portions: 1 }],
  },
])

const vegetableItems = shoppingList.find((category) => category.category === 'Vegetais')?.items ?? []
assertShoppingItem(vegetableItems, 'Cenoura', 400)
assertShoppingItem(vegetableItems, 'Beterraba', 400)

const photoSalad = listPhotoCatalogRecipes().find((recipe) => recipe.slug === 'salada-crua-beterraba-cenoura')
if (!photoSalad) throw new Error('Receita fotografica de salada nao encontrada.')

const photoIngredientNames = photoSalad.ingredients.map((ingredient) => ingredient.displayName ?? ingredient.name)
if (photoIngredientNames.join('|') !== 'Beterraba|Cenoura') {
  throw new Error(`Ingredientes fotograficos deveriam ser individuais. Recebido: ${photoIngredientNames.join(', ')}`)
}

const photoShoppingList = consolidateShoppingList([
  {
    recipeId: photoSalad.id,
    recipe: photoSalad,
    lines: [{ weightReadyG: 800, portions: 1 }],
  },
])
const photoVegetableItems = photoShoppingList.find((category) => category.category === 'Vegetais')?.items ?? []
assertShoppingItem(photoVegetableItems, 'Beterraba', 400)
assertShoppingItem(photoVegetableItems, 'Cenoura', 400)

const watermelon = listPhotoCatalogRecipes().find((recipe) => recipe.slug === 'fruta-melancia')
if (!watermelon) throw new Error('Receita fotografica de melancia nao encontrada.')
if (watermelon.baseRawWeightG <= watermelon.baseReadyWeightG) {
  throw new Error(
    `Melancia deveria considerar fator de correcao. Compra base: ${watermelon.baseRawWeightG}g, peso pronto: ${watermelon.baseReadyWeightG}g.`,
  )
}

const watermelonShoppingList = consolidateShoppingList([
  {
    recipeId: watermelon.id,
    recipe: watermelon,
    lines: [{ weightReadyG: 1000, portions: 1 }],
  },
])
const fruitItems = watermelonShoppingList.find((category) => category.category === 'Frutas')?.items ?? []
assertShoppingItem(fruitItems, 'Melancia', 2000)

const genericCompoundRecipe = createRecipe({
  name: 'Mix de legumes',
  ingredients: [
    {
      id: 'generic-compound-main',
      recipeId: 'generic-compound',
      ingredientId: null,
      name: 'Abobrinha, berinjela e tomate crus',
      shoppingCategory: 'Vegetais',
      ingredientRole: 'main',
      baseQuantity: 900,
      unit: 'g',
      isCritical: false,
      isFreeSeasoning: false,
      includeInShoppingList: true,
      roundingStep: 50,
      roundingMode: 'up',
      displayName: 'Abobrinha, berinjela e tomate crus',
      notes: null,
      sortOrder: 1,
    },
  ],
  baseRawWeightG: 900,
  baseReadyWeightG: 900,
})

const genericShoppingList = consolidateShoppingList([
  {
    recipeId: genericCompoundRecipe.id,
    recipe: genericCompoundRecipe,
    lines: [{ weightReadyG: 900, portions: 1 }],
  },
])
const genericVegetableItems = genericShoppingList.find((category) => category.category === 'Vegetais')?.items ?? []
assertShoppingItem(genericVegetableItems, 'Abobrinha', 300)
assertShoppingItem(genericVegetableItems, 'Berinjela', 300)
assertShoppingItem(genericVegetableItems, 'Tomate', 300)

console.log('planning calculator shopping split check passed')

function assertShoppingItem(
  items: NonNullable<ReturnType<typeof consolidateShoppingList>[number]>['items'],
  displayName: string,
  quantity: number,
) {
  const item = items.find((candidate) => candidate.displayName === displayName)
  if (!item) throw new Error(`Item nao encontrado: ${displayName}`)
  if (item.quantity !== quantity) {
    throw new Error(`${displayName}: esperado ${quantity}g, recebido ${item.quantity ?? 'null'}${item.unit ?? ''}`)
  }
}

function createRecipe(
  input: Pick<Recipe, 'name' | 'ingredients'> & Partial<Pick<Recipe, 'baseRawWeightG' | 'baseReadyWeightG'>>,
): Recipe {
  return {
    id: 'compound-salad',
    categoryId: 'saladas',
    category: {
      id: 'saladas',
      name: 'Saladas',
      slug: 'saladas',
      description: null,
      isActive: true,
      sortOrder: 1,
    },
    name: input.name,
    slug: 'compound-salad',
    shortDescription: null,
    type: 'cozida',
    status: 'published',
    imagePath: null,
    baseRawWeightG: input.baseRawWeightG ?? 1000,
    baseReadyWeightG: input.baseReadyWeightG ?? 1000,
    baseYieldNote: null,
    prepTimeMinutes: null,
    costLevel: null,
    timeLevel: null,
    workLevel: null,
    practicalityLevel: null,
    versatilityLevel: null,
    freezesWell: false,
    storageInstructions: null,
    reheatInstructions: null,
    lockedRecipeWarning: null,
    nutrition: {
      kcalPer100g: null,
      proteinGPer100g: null,
      carbsGPer100g: null,
      fatGPer100g: null,
      fiberGPer100g: null,
      sodiumMgPer100g: null,
      nutritionNotes: null,
    },
    sortOrder: 1,
    tags: [],
    ingredients: input.ingredients,
    steps: [],
  }
}
