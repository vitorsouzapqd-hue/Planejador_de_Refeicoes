import type { Recipe } from '../types/recipe'

const localRecipeImages = [
  'abobora-cozida.png',
  'almondegas-carne.png',
  'almondegas-frango.png',
  'arroz-acafrao.png',
  'arroz-branco-cenoura.png',
  'arroz-branco-cozido.png',
  'arroz-branco-grega.png',
  'arroz-branco-lentilha.png',
  'arroz-branco-milho.png',
  'arroz-integral.png',
  'batata-doce-assada.png',
  'batata-doce-cozida.png',
  'batata-inglesa-assada.png',
  'batata-inglesa-cozida.png',
  'carne-panela.png',
  'feijao-preto.png',
  'file-mignon-suino.png',
  'frango-creme-milho.png',
  'frango-desfiado.png',
  'frango-moido.png',
  'fruta-abacaxi.png',
  'fruta-banana.png',
  'fruta-caqui.png',
  'fruta-goiaba.png',
  'fruta-laranja.png',
  'fruta-maca.png',
  'fruta-mamao.png',
  'fruta-manga.png',
  'fruta-melancia.png',
  'fruta-melao.png',
  'fruta-morango.png',
  'fruta-pera.png',
  'fruta-pitaya.png',
  'fruta-tangerina.png',
  'fruta-uvaroxa.png',
  'fruta-uvaverde.png',
  'lombo-barbecue.png',
  'lombo-suino-desfiado.png',
  'macarrao-cozido.png',
  'mandioca-cozida.png',
  'patinho-moido-refogado.png',
  'patinho-moido.png',
  'pure-batata-inglesa.png',
  'pure-inhame.png',
  'pure-mandioca.png',
  'salada-cozida-beterraba-cenoura.png',
  'salada-cozida-brocolis-couveflor.png',
  'salada-cozida-cenoura-brocolis.png',
  'salada-cozida-cenoura-shoyu.png',
  'salada-cozida-repolhoverde-repolhoroxo.png',
  'salada-crua-agriao-pepino-manga.png',
  'salada-crua-alface-pepino-tomate.png',
  'salada-crua-alface-tomate-cebolaroxa.png',
  'salada-crua-beterraba-cenoura.png',
  'salada-crua-couve-tomate.png',
  'salada-crua-repolho-cenoura.png',
  'sobrecoxa-assada.png',
  'strogonoff-frango.png',
  'tilapia-grelhada.png',
]

const localRecipeImageBySlug = new Map(
  localRecipeImages.map((fileName) => [removeExtension(fileName), `/recipe-images/${fileName}`]),
)

export function resolveRecipeImage(recipe: Pick<Recipe, 'imagePath' | 'imageUrl' | 'name' | 'slug'>): string | null {
  if (recipe.imageUrl) return recipe.imageUrl

  if (recipe.imagePath) {
    if (recipe.imagePath.startsWith('/')) return recipe.imagePath
    if (recipe.imagePath.startsWith('http://') || recipe.imagePath.startsWith('https://')) {
      return recipe.imagePath
    }
  }

  const recipeSlug = normalizeNameToSlug(recipe.slug)
  const recipeNameSlug = normalizeNameToSlug(recipe.name)
  const exactMatch = localRecipeImageBySlug.get(recipeSlug) ?? localRecipeImageBySlug.get(recipeNameSlug)

  if (exactMatch) return exactMatch

  const relaxedMatches = Array.from(localRecipeImageBySlug.entries()).filter(([imageSlug]) => {
    if (imageSlug.length < 6) return false

    return recipeSlug.includes(imageSlug) || recipeNameSlug.includes(imageSlug)
  })

  return relaxedMatches.length === 1 ? relaxedMatches[0]?.[1] ?? null : null
}

export function normalizeNameToSlug(value: string): string {
  return removeExtension(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function removeExtension(value: string) {
  return value.replace(/\.[^.]+$/, '')
}
