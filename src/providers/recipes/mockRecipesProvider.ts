import type { Recipe } from '../../types/recipe'
import type { RecipeListFilters, RecipesProvider } from './recipesProvider'

const lockedRecipeWarning =
  'Siga a receita como está. Não adicione óleo, azeite, creme, requeijão, queijo, molhos ou ingredientes extras fora da receita.'

const mockRecipes: Recipe[] = [
  {
    id: 'mock-frango-desfiado',
    categoryId: 'mock-proteinas',
    category: {
      id: 'mock-proteinas',
      name: 'Proteínas',
      slug: 'proteinas',
      description: 'Preparo de proteínas para porções planejadas.',
      isActive: true,
      sortOrder: 1,
    },
    name: 'Frango Desfiado',
    slug: 'frango-desfiado',
    shortDescription: 'Frango úmido, temperado e fácil de porcionar.',
    type: 'frango',
    status: 'published',
    imagePath: '/recipe-images/frango-desfiado.png',
    imageUrl: '/recipe-images/frango-desfiado.png',
    baseRawWeightG: 1000,
    baseReadyWeightG: 750,
    baseYieldNote: '1kg de peito de frango cru rende cerca de 750g pronto.',
    prepTimeMinutes: 35,
    costLevel: 2,
    timeLevel: 2,
    workLevel: 2,
    practicalityLevel: 4,
    versatilityLevel: 4,
    freezesWell: true,
    storageInstructions: 'Manter refrigerado por até 3 dias ou congelar em porções.',
    reheatInstructions: 'Reaquecer em panela ou micro-ondas até ficar bem quente.',
    lockedRecipeWarning,
    nutrition: {
      kcalPer100g: 160,
      proteinGPer100g: 24,
      carbsGPer100g: 2,
      fatGPer100g: 6,
      fiberGPer100g: null,
      sodiumMgPer100g: null,
      nutritionNotes: 'Valores aproximados para a preparação pronta.',
    },
    sortOrder: 1,
    tags: [
      { id: 'mock-tag-frango', name: 'Frango', slug: 'frango' },
    ],
    ingredients: [
      createIngredient('mock-frango-desfiado', 'Peito de frango cru', 'Proteínas', 'main', 1000, 'g', 100, false, false, 1),
      createIngredient('mock-frango-desfiado', 'Tomate médio', 'Hortifruti', 'complement', 2, 'un', 1, false, false, 2, 'tomates médios'),
      createIngredient('mock-frango-desfiado', 'Cebola média', 'Hortifruti', 'complement', 1, 'un', 1, false, false, 3, 'cebolas médias'),
      createIngredient('mock-frango-desfiado', 'Óleo', 'Outros', 'critical', 1, 'colher de sopa', 1, true, false, 4),
      createIngredient('mock-frango-desfiado', 'Sal, pimenta e páprica', 'Temperos', 'seasoning', null, null, null, false, true, 5),
    ],
    steps: [
      createStep('mock-frango-desfiado', 1, 'Cozinhe o frango com os temperos e vegetais da receita.'),
      createStep('mock-frango-desfiado', 2, 'Desfie bem depois de cozido.'),
      createStep('mock-frango-desfiado', 3, 'Reduza o caldo até ficar úmido, sem excesso de líquido.'),
      createStep('mock-frango-desfiado', 4, 'Pese a preparação pronta antes de separar as porções.'),
    ],
  },
  {
    id: 'mock-patinho-refogado',
    categoryId: 'mock-proteinas',
    category: {
      id: 'mock-proteinas',
      name: 'Proteínas',
      slug: 'proteinas',
      description: 'Preparo de proteínas para porções planejadas.',
      isActive: true,
      sortOrder: 1,
    },
    name: 'Patinho Moído Refogado',
    slug: 'patinho-moido-refogado',
    shortDescription: 'Patinho moído simples para uma base prática da semana.',
    type: 'carne',
    status: 'published',
    imagePath: '/recipe-images/patinho-moido-refogado.png',
    imageUrl: '/recipe-images/patinho-moido-refogado.png',
    baseRawWeightG: 1000,
    baseReadyWeightG: 700,
    baseYieldNote: '1kg de patinho cru rende cerca de 700g pronto.',
    prepTimeMinutes: 20,
    costLevel: 3,
    timeLevel: 1,
    workLevel: 1,
    practicalityLevel: 4,
    versatilityLevel: 4,
    freezesWell: true,
    storageInstructions: 'Manter refrigerado por até 3 dias ou congelar.',
    reheatInstructions: 'Reaquecer em panela, mexendo para manter úmido.',
    lockedRecipeWarning,
    nutrition: {
      kcalPer100g: 190,
      proteinGPer100g: 27,
      carbsGPer100g: 1,
      fatGPer100g: 9,
      fiberGPer100g: null,
      sodiumMgPer100g: null,
      nutritionNotes: 'Valores aproximados para a preparação pronta.',
    },
    sortOrder: 2,
    tags: [
      { id: 'mock-tag-carne', name: 'Carne', slug: 'carne' },
    ],
    ingredients: [
      createIngredient('mock-patinho-refogado', 'Patinho moído cru', 'Proteínas', 'main', 1000, 'g', 100, false, false, 1),
      createIngredient('mock-patinho-refogado', 'Cebola média', 'Hortifruti', 'complement', 1, 'un', 1, false, false, 2, 'cebolas médias'),
      createIngredient('mock-patinho-refogado', 'Alho', 'Hortifruti', 'complement', 2, 'dentes', 1, false, false, 3),
      createIngredient('mock-patinho-refogado', 'Óleo', 'Outros', 'critical', 1, 'colher de sopa', 1, true, false, 4),
      createIngredient('mock-patinho-refogado', 'Sal, pimenta e cheiro-verde', 'Temperos', 'seasoning', null, null, null, false, true, 5),
    ],
    steps: [
      createStep('mock-patinho-refogado', 1, 'Refogue a cebola e o alho com o óleo da receita.'),
      createStep('mock-patinho-refogado', 2, 'Adicione o patinho moído e cozinhe até ficar bem soltinho.'),
      createStep('mock-patinho-refogado', 3, 'Ajuste os temperos da receita e reduza o líquido.'),
      createStep('mock-patinho-refogado', 4, 'Pese a preparação pronta antes de separar as porções.'),
    ],
  },
  {
    id: 'mock-lombo-desfiado',
    categoryId: 'mock-proteinas',
    category: {
      id: 'mock-proteinas',
      name: 'Proteínas',
      slug: 'proteinas',
      description: 'Preparo de proteínas para porções planejadas.',
      isActive: true,
      sortOrder: 1,
    },
    name: 'Lombo Suíno Desfiado',
    slug: 'lombo-suino-desfiado',
    shortDescription: 'Lombo cozido e desfiado para variar as proteínas.',
    type: 'suino',
    status: 'published',
    imagePath: '/recipe-images/lombo-suino-desfiado.png',
    imageUrl: '/recipe-images/lombo-suino-desfiado.png',
    baseRawWeightG: 1000,
    baseReadyWeightG: 680,
    baseYieldNote: '1kg de lombo suíno cru rende cerca de 680g pronto.',
    prepTimeMinutes: 45,
    costLevel: 3,
    timeLevel: 3,
    workLevel: 2,
    practicalityLevel: 3,
    versatilityLevel: 4,
    freezesWell: true,
    storageInstructions: 'Manter refrigerado por até 3 dias ou congelar.',
    reheatInstructions: 'Reaquecer com um pouco do caldo do preparo.',
    lockedRecipeWarning,
    nutrition: {
      kcalPer100g: 210,
      proteinGPer100g: 26,
      carbsGPer100g: 2,
      fatGPer100g: 11,
      fiberGPer100g: null,
      sodiumMgPer100g: null,
      nutritionNotes: 'Valores aproximados para a preparação pronta.',
    },
    sortOrder: 3,
    tags: [
      { id: 'mock-tag-suino', name: 'Suíno', slug: 'suino' },
    ],
    ingredients: [
      createIngredient('mock-lombo-desfiado', 'Lombo suíno cru', 'Proteínas', 'main', 1000, 'g', 100, false, false, 1),
      createIngredient('mock-lombo-desfiado', 'Cebola média', 'Hortifruti', 'complement', 1, 'un', 1, false, false, 2, 'cebolas médias'),
      createIngredient('mock-lombo-desfiado', 'Molho de tomate', 'Outros', 'critical', 1, 'sachê', 1, true, false, 3),
      createIngredient('mock-lombo-desfiado', 'Sal, pimenta e louro', 'Temperos', 'seasoning', null, null, null, false, true, 4),
    ],
    steps: [
      createStep('mock-lombo-desfiado', 1, 'Cozinhe o lombo com os temperos e ingredientes da receita.'),
      createStep('mock-lombo-desfiado', 2, 'Desfie a carne depois de macia.'),
      createStep('mock-lombo-desfiado', 3, 'Misture ao molho e reduza até ficar úmido.'),
      createStep('mock-lombo-desfiado', 4, 'Pese a preparação pronta antes de separar as porções.'),
    ],
  },
]

export const mockRecipesProvider: RecipesProvider = {
  async listPublishedRecipes(filters = {}) {
    return filterRecipes(mockRecipes, filters)
  },

  async getPublishedRecipeBySlug(slug) {
    return mockRecipes.find((recipe) => recipe.slug === slug && recipe.status === 'published') ?? null
  },
}

function filterRecipes(recipes: Recipe[], filters: RecipeListFilters): Recipe[] {
  return recipes.filter((recipe) => {
    const matchesSearch =
      !filters.search ||
      recipe.name.toLocaleLowerCase('pt-BR').includes(filters.search.toLocaleLowerCase('pt-BR'))
    const matchesCategory = !filters.categorySlug || recipe.category?.slug === filters.categorySlug
    const matchesType = !filters.type || recipe.type === filters.type
    const matchesTags =
      !filters.tagSlugs?.length ||
      filters.tagSlugs.every((tagSlug) => recipe.tags.some((tag) => tag.slug === tagSlug))

    return recipe.status === 'published' && matchesSearch && matchesCategory && matchesType && matchesTags
  })
}

function createIngredient(
  recipeId: string,
  name: string,
  shoppingCategory: string,
  ingredientRole: Recipe['ingredients'][number]['ingredientRole'],
  baseQuantity: number | null,
  unit: string | null,
  roundingStep: number | null,
  isCritical: boolean,
  isFreeSeasoning: boolean,
  sortOrder: number,
  displayName: string | null = null,
): Recipe['ingredients'][number] {
  return {
    id: `${recipeId}-ingredient-${sortOrder}`,
    recipeId,
    name,
    shoppingCategory,
    ingredientRole,
    baseQuantity,
    unit,
    isCritical,
    isFreeSeasoning,
    includeInShoppingList: true,
    roundingStep,
    roundingMode: roundingStep ? 'up' : 'none',
    displayName,
    notes: null,
    sortOrder,
  }
}

function createStep(recipeId: string, stepNumber: number, instruction: string): Recipe['steps'][number] {
  return {
    id: `${recipeId}-step-${stepNumber}`,
    recipeId,
    stepNumber,
    instruction,
  }
}
