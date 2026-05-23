import type { Recipe } from '../types/recipe'
import {
  getRecipePracticalityLevel,
  getRecipePrepTimeMinutes,
  getRecipeVersatilityLevel,
} from '../utils/recipeAttributes'
import { normalizeNameToSlug } from '../utils/recipeImages'

type PhotoCatalogItem = {
  fileSlug: string
  name: string
  module: 'proteinas' | 'carboidratos' | 'saladas' | 'frutas'
  type: string
  shoppingCategory: string
  ingredientName?: string
  baseRawWeightG?: number
  baseReadyWeightG?: number
  prepTimeMinutes?: number
  costLevel?: number
  timeLevel?: number
  workLevel?: number
  practicalityLevel?: number
  versatilityLevel?: number
  freezesWell?: boolean
}

const moduleLabels = {
  proteinas: 'Proteínas',
  carboidratos: 'Carboidratos',
  saladas: 'Saladas',
  frutas: 'Frutas',
}

const photoCatalogItems: PhotoCatalogItem[] = [
  createProtein('almondegas-carne', 'Almôndegas de Carne', 'carne', 'Carne bovina crua', 1000, 720, 3, 3, 3),
  createProtein('almondegas-frango', 'Almôndegas de Frango', 'frango', 'Peito de frango cru', 1000, 760, 2, 3, 3),
  createProtein('carne-panela', 'Carne de Panela', 'carne', 'Carne bovina crua', 1000, 700, 3, 3, 2),
  createProtein('file-mignon-suino', 'Filé Mignon Suíno', 'suino', 'Filé mignon suíno cru', 1000, 780, 3, 2, 2),
  createProtein('frango-creme-milho', 'Frango com Creme de Milho', 'frango', 'Peito de frango cru', 1000, 820, 3, 3, 3),
  createProtein('frango-desfiado', 'Frango Desfiado', 'frango', 'Peito de frango cru', 1000, 750, 2, 2, 2),
  createProtein('frango-moido', 'Frango Moído', 'frango', 'Peito de frango cru', 1000, 760, 2, 2, 2),
  createProtein('lombo-barbecue', 'Lombo Barbecue', 'suino', 'Lombo suíno cru', 1000, 720, 3, 3, 3),
  createProtein('patinho-moido', 'Patinho Moído', 'carne', 'Patinho moído cru', 1000, 700, 3, 2, 1),
  createProtein('sobrecoxa-assada', 'Sobrecoxa Assada', 'frango', 'Sobrecoxa de frango crua', 1000, 720, 2, 3, 2),
  createProtein('strogonoff-frango', 'Strogonoff de Frango', 'frango', 'Peito de frango cru', 1000, 850, 3, 3, 2),
  createProtein('tilapia-grelhada', 'Tilápia Grelhada', 'peixe', 'Tilápia crua', 1000, 850, 4, 1, 1, false),

  createCarb('abobora-cozida', 'Abóbora Cozida', 'legumes', 'Abóbora crua', 1000, 900, 1, 2, 1),
  createCarb('arroz-acafrao', 'Arroz com Açafrão', 'arroz', 'Arroz cru', 1000, 2500, 1, 2, 1),
  createCarb('arroz-branco-cenoura', 'Arroz Branco com Cenoura', 'arroz', 'Arroz cru', 1000, 2500, 1, 2, 1),
  createCarb('arroz-branco-cozido', 'Arroz Branco Cozido', 'arroz', 'Arroz cru', 1000, 2500, 1, 2, 1),
  createCarb('arroz-branco-grega', 'Arroz à Grega', 'arroz', 'Arroz cru', 1000, 2500, 2, 2, 2),
  createCarb('arroz-branco-lentilha', 'Arroz com Lentilha', 'arroz', 'Arroz cru', 1000, 2500, 2, 2, 2),
  createCarb('arroz-branco-milho', 'Arroz Branco com Milho', 'arroz', 'Arroz cru', 1000, 2500, 1, 2, 1),
  createCarb('arroz-integral', 'Arroz Integral', 'arroz', 'Arroz integral cru', 1000, 2400, 2, 3, 1),
  createCarb('batata-doce-assada', 'Batata Doce Assada', 'batata', 'Batata doce crua', 1000, 850, 2, 3, 1),
  createCarb('batata-doce-cozida', 'Batata Doce Cozida', 'batata', 'Batata doce crua', 1000, 900, 2, 2, 1),
  createCarb('batata-inglesa-assada', 'Batata Inglesa Assada', 'batata', 'Batata inglesa crua', 1000, 850, 1, 3, 1),
  createCarb('batata-inglesa-cozida', 'Batata Inglesa Cozida', 'batata', 'Batata inglesa crua', 1000, 900, 1, 2, 1),
  createCarb('feijao-preto', 'Feijão Preto', 'feijao', 'Feijão preto cru', 1000, 2600, 1, 4, 2),
  createCarb('macarrao-cozido', 'Macarrão Cozido', 'massa', 'Macarrão cru', 1000, 2300, 1, 2, 1),
  createCarb('mandioca-cozida', 'Mandioca Cozida', 'mandioca', 'Mandioca crua', 1000, 900, 2, 3, 2),
  createCarb('pure-batata-inglesa', 'Purê de Batata Inglesa', 'pure', 'Batata inglesa crua', 1000, 950, 2, 3, 2),
  createCarb('pure-inhame', 'Purê de Inhame', 'pure', 'Inhame cru', 1000, 950, 2, 3, 2),
  createCarb('pure-mandioca', 'Purê de Mandioca', 'pure', 'Mandioca crua', 1000, 950, 2, 3, 2),

  createSalad('salada-cozida-beterraba-cenoura', 'Salada Cozida de Beterraba e Cenoura', 'cozida', 'Beterraba e cenoura cruas'),
  createSalad('salada-cozida-brocolis-couveflor', 'Salada Cozida de Brócolis e Couve-flor', 'cozida', 'Brócolis e couve-flor crus'),
  createSalad('salada-cozida-cenoura-brocolis', 'Salada Cozida de Cenoura e Brócolis', 'cozida', 'Cenoura e brócolis crus'),
  createSalad('salada-cozida-cenoura-shoyu', 'Salada Cozida de Cenoura com Shoyu', 'cozida', 'Cenoura crua'),
  createSalad('salada-cozida-repolhoverde-repolhoroxo', 'Salada Cozida de Repolho Verde e Roxo', 'cozida', 'Repolho verde e roxo crus'),
  createSalad('salada-crua-agriao-pepino-manga', 'Salada Crua de Agrião, Pepino e Manga', 'crua', 'Agrião, pepino e manga'),
  createSalad('salada-crua-alface-pepino-tomate', 'Salada Crua de Alface, Pepino e Tomate', 'crua', 'Alface, pepino e tomate'),
  createSalad('salada-crua-alface-tomate-cebolaroxa', 'Salada Crua de Alface, Tomate e Cebola Roxa', 'crua', 'Alface, tomate e cebola roxa'),
  createSalad('salada-crua-beterraba-cenoura', 'Salada Crua de Beterraba e Cenoura', 'crua', 'Beterraba e cenoura cruas'),
  createSalad('salada-crua-couve-tomate', 'Salada Crua de Couve e Tomate', 'crua', 'Couve e tomate'),
  createSalad('salada-crua-repolho-cenoura', 'Salada Crua de Repolho e Cenoura', 'crua', 'Repolho e cenoura crus'),

  createFruit('fruta-abacaxi', 'Abacaxi', 'abacaxi'),
  createFruit('fruta-banana', 'Banana', 'banana'),
  createFruit('fruta-caqui', 'Caqui', 'caqui'),
  createFruit('fruta-goiaba', 'Goiaba', 'goiaba'),
  createFruit('fruta-laranja', 'Laranja', 'laranja'),
  createFruit('fruta-maca', 'Maçã', 'maca'),
  createFruit('fruta-mamao', 'Mamão', 'mamao'),
  createFruit('fruta-manga', 'Manga', 'manga'),
  createFruit('fruta-melancia', 'Melancia', 'melancia'),
  createFruit('fruta-melao', 'Melão', 'melao'),
  createFruit('fruta-morango', 'Morango', 'morango'),
  createFruit('fruta-pera', 'Pera', 'pera'),
  createFruit('fruta-pitaya', 'Pitaya', 'pitaya'),
  createFruit('fruta-tangerina', 'Tangerina', 'tangerina'),
  createFruit('fruta-uvaroxa', 'Uva Roxa', 'uva'),
  createFruit('fruta-uvaverde', 'Uva Verde', 'uva'),
]

export function listPhotoCatalogRecipes(filters: { search?: string; categorySlug?: string; type?: string; tagSlugs?: string[] } = {}) {
  return photoCatalogItems
    .map(mapPhotoCatalogItem)
    .filter((recipe) => {
      const matchesSearch = !filters.search || normalizeNameToSlug(recipe.name).includes(normalizeNameToSlug(filters.search))
      const matchesCategory = !filters.categorySlug || recipe.category?.slug === filters.categorySlug
      const matchesType = !filters.type || recipe.type === filters.type
      const recipeTagSlugs = new Set(recipe.tags.map((tag) => tag.slug))
      const matchesTags =
        !filters.tagSlugs?.length ||
        filters.tagSlugs.every((tagSlug) => recipeTagSlugs.has(tagSlug))

      return matchesSearch && matchesCategory && matchesType && matchesTags
    })
}

export function getPhotoCatalogRecipeBySlug(slug: string) {
  return listPhotoCatalogRecipes().find((recipe) => recipe.slug === slug) ?? null
}

function mapPhotoCatalogItem(item: PhotoCatalogItem): Recipe {
  const categoryLabel = moduleLabels[item.module]
  const rawWeight = item.baseRawWeightG ?? 1000
  const readyWeight = item.baseReadyWeightG ?? 1000
  const attributeSource = {
    slug: item.fileSlug,
    name: item.name,
    type: item.type,
    timeLevel: item.timeLevel ?? 2,
    workLevel: item.workLevel ?? 2,
    freezesWell: item.freezesWell ?? item.module !== 'saladas',
    categorySlug: item.module,
  }

  return {
    id: `photo-${item.fileSlug}`,
    categoryId: `photo-${item.module}`,
    category: {
      id: `photo-${item.module}`,
      name: categoryLabel,
      slug: item.module,
      description: null,
      isActive: true,
      sortOrder: getModuleSortOrder(item.module),
    },
    name: item.name,
    slug: item.fileSlug,
    shortDescription: `Opção de ${categoryLabel.toLowerCase()} para planejar porções.`,
    type: item.type,
    status: 'published',
    imagePath: `/recipe-images/${item.fileSlug}.png`,
    imageUrl: `/recipe-images/${item.fileSlug}.png`,
    baseRawWeightG: rawWeight,
    baseReadyWeightG: readyWeight,
    baseYieldNote: `${formatKg(rawWeight)} cru rende cerca de ${formatKg(readyWeight)} pronto.`,
    prepTimeMinutes: item.prepTimeMinutes ?? getRecipePrepTimeMinutes(attributeSource),
    costLevel: item.costLevel ?? 2,
    timeLevel: item.timeLevel ?? 2,
    workLevel: item.workLevel ?? 2,
    practicalityLevel: item.practicalityLevel ?? getRecipePracticalityLevel(attributeSource),
    versatilityLevel: item.versatilityLevel ?? getRecipeVersatilityLevel(attributeSource),
    freezesWell: item.freezesWell ?? item.module !== 'saladas',
    storageInstructions: item.module === 'saladas'
      ? 'Manter refrigerada em recipiente fechado.'
      : 'Manter refrigerado e separar conforme o planejamento.',
    reheatInstructions: item.module === 'saladas'
      ? 'Consumir fria.'
      : 'Reaquecer se fizer sentido para a preparação.',
    lockedRecipeWarning: 'Use essa preparação como aparece na sua dieta. Não use o app para substituir ou montar dieta.',
    nutrition: {
      kcalPer100g: null,
      proteinGPer100g: null,
      carbsGPer100g: null,
      fatGPer100g: null,
      fiberGPer100g: null,
      sodiumMgPer100g: null,
      nutritionNotes: null,
    },
    sortOrder: getModuleSortOrder(item.module) * 100 + photoCatalogItems.indexOf(item),
    tags: [
      {
        id: `photo-tag-${item.module}`,
        name: categoryLabel,
        slug: item.module,
      },
      {
        id: `photo-tag-${item.type}`,
        name: formatTagLabel(item.type),
        slug: item.type,
      },
    ],
    ingredients: [
      {
        id: `photo-${item.fileSlug}-ingredient-main`,
        recipeId: `photo-${item.fileSlug}`,
        name: item.ingredientName ?? item.name,
        shoppingCategory: item.shoppingCategory,
        ingredientRole: 'main',
        baseQuantity: rawWeight,
        unit: 'g',
        isCritical: false,
        isFreeSeasoning: false,
        includeInShoppingList: true,
        roundingStep: item.module === 'saladas' ? 50 : 100,
        roundingMode: 'up',
        displayName: item.ingredientName ?? item.name,
        notes: null,
        sortOrder: 1,
      },
    ],
    steps: [
      {
        id: `photo-${item.fileSlug}-step-1`,
        recipeId: `photo-${item.fileSlug}`,
        stepNumber: 1,
        instruction: 'Prepare a opção conforme sua rotina e a orientação que você já segue fora do app.',
      },
      {
        id: `photo-${item.fileSlug}-step-2`,
        recipeId: `photo-${item.fileSlug}`,
        stepNumber: 2,
        instruction: 'Depois de pronta, pese a preparação antes de separar as porções planejadas.',
      },
    ],
  }
}

function createProtein(
  fileSlug: string,
  name: string,
  type: string,
  ingredientName: string,
  baseRawWeightG: number,
  baseReadyWeightG: number,
  costLevel: number,
  timeLevel: number,
  workLevel: number,
  freezesWell = true,
): PhotoCatalogItem {
  return {
    fileSlug,
    name,
    module: 'proteinas',
    type,
    shoppingCategory: 'Proteínas',
    ingredientName,
    baseRawWeightG,
    baseReadyWeightG,
    costLevel,
    timeLevel,
    workLevel,
    practicalityLevel: freezesWell ? 4 : 3,
    freezesWell,
  }
}

function createCarb(
  fileSlug: string,
  name: string,
  type: string,
  ingredientName: string,
  baseRawWeightG: number,
  baseReadyWeightG: number,
  costLevel: number,
  timeLevel: number,
  workLevel: number,
): PhotoCatalogItem {
  return {
    fileSlug,
    name,
    module: 'carboidratos',
    type,
    shoppingCategory: 'Carboidratos',
    ingredientName,
    baseRawWeightG,
    baseReadyWeightG,
    costLevel,
    timeLevel,
    workLevel,
    practicalityLevel: 3,
    freezesWell: true,
  }
}

function createSalad(
  fileSlug: string,
  name: string,
  type: 'crua' | 'cozida',
  ingredientName: string,
): PhotoCatalogItem {
  return {
    fileSlug,
    name,
    module: 'saladas',
    type,
    shoppingCategory: 'Vegetais',
    ingredientName,
    baseRawWeightG: 1000,
    baseReadyWeightG: type === 'crua' ? 1000 : 900,
    costLevel: 2,
    timeLevel: type === 'crua' ? 1 : 2,
    workLevel: type === 'crua' ? 1 : 2,
    practicalityLevel: 3,
    freezesWell: false,
  }
}

function createFruit(
  fileSlug: string,
  name: string,
  type: string,
): PhotoCatalogItem {
  return {
    fileSlug,
    name,
    module: 'frutas',
    type,
    shoppingCategory: 'Frutas',
    ingredientName: name,
    baseRawWeightG: 1000,
    baseReadyWeightG: 1000,
    costLevel: 2,
    timeLevel: 1,
    workLevel: 1,
    practicalityLevel: 4,
    freezesWell: false,
  }
}

function getModuleSortOrder(module: PhotoCatalogItem['module']) {
  const order: Record<PhotoCatalogItem['module'], number> = {
    proteinas: 1,
    carboidratos: 2,
    saladas: 3,
    frutas: 4,
  }

  return order[module]
}

function formatTagLabel(value: string) {
  const labels: Record<string, string> = {
    frango: 'Frango',
    carne: 'Carne',
    suino: 'Suíno',
    peixe: 'Peixe',
    arroz: 'Arroz',
    batata: 'Batata',
    feijao: 'Feijão',
    massa: 'Massa',
    mandioca: 'Mandioca',
    pure: 'Purê',
    legumes: 'Legumes',
    crua: 'Crua',
    cozida: 'Cozida',
  }

  return labels[value] ?? value
}

function formatKg(value: number) {
  if (value >= 1000) return `${new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(value / 1000)}kg`

  return `${value}g`
}
