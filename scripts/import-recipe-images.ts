import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
} from 'node:fs'
import path from 'node:path'

const BUCKET_NAME = 'recipe-images'
const DEFAULT_SOURCE_DIR = 'fotos_pratos'
const DEFAULT_PUBLIC_DIR = path.join('public', 'recipe-images')
const SUPPORTED_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif'])

type RecipeRow = {
  id: string
  name: string
  slug: string
  image_path: string | null
}

type ImageCandidate = {
  fileName: string
  filePath: string
  slug: string
  extension: string
}

type SupabaseContext = {
  client: SupabaseClient
  canWrite: boolean
  authMode: 'service-role' | 'admin-session' | 'anon'
}

type LinkedImage = {
  recipeName: string
  recipeSlug: string
  fileName: string
  imagePath: string
  target: 'storage' | 'public' | 'dry-run'
}

type IgnoredImage = {
  fileName: string
  reason: string
}

type ImportWarning = {
  label: string
  detail: string
}

type TargetMode = 'auto' | 'storage' | 'public'

loadDotEnv()

const dryRun = process.argv.includes('--dry-run')
const targetMode = getTargetMode()
const sourceDir = path.resolve(
  process.env.RECIPE_IMAGES_SOURCE_DIR ?? DEFAULT_SOURCE_DIR,
)
const publicDir = path.resolve(
  process.env.RECIPE_IMAGES_PUBLIC_DIR ?? DEFAULT_PUBLIC_DIR,
)

main().catch((error: unknown) => {
  console.error('\nErro ao importar imagens de receitas.')
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})

export function normalizeNameToSlug(value: string): string {
  return removeFileExtension(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

async function main() {
  const warnings: ImportWarning[] = []

  if (!existsSync(sourceDir)) {
    throw new Error(`Pasta de imagens não encontrada: ${sourceDir}`)
  }

  const supabaseContext = await createSupabaseContext(warnings)

  if (!supabaseContext) {
    throw new Error(
      'Supabase não configurado. Informe NUXT_PUBLIC_SUPABASE_URL e uma chave em SUPABASE_SERVICE_ROLE_KEY, NUXT_SUPABASE_SERVICE_ROLE_KEY ou NUXT_PUBLIC_SUPABASE_ANON_KEY.',
    )
  }

  const [recipes, images] = await Promise.all([
    listRecipes(supabaseContext.client),
    listImages(sourceDir),
  ])
  const { imageBySlug, ignoredImages } = indexImages(images)
  const linkedImages: LinkedImage[] = []
  const usedImageSlugs = new Set<string>()
  const recipesWithoutImage: RecipeRow[] = []

  for (const recipe of recipes) {
    const matchedImage = findMatchingImage(recipe, imageBySlug)

    if (!matchedImage) {
      if (!recipe.image_path) recipesWithoutImage.push(recipe)
      continue
    }

    usedImageSlugs.add(matchedImage.slug)

    const linkedImage = await linkImageToRecipe({
      recipe,
      image: matchedImage,
      supabaseContext,
      targetMode,
      publicDir,
      dryRun,
      warnings,
    })

    if (linkedImage) linkedImages.push(linkedImage)
  }

  for (const image of images) {
    if (!usedImageSlugs.has(image.slug)) {
      ignoredImages.push({
        fileName: image.fileName,
        reason: 'sem receita correspondente',
      })
    }
  }

  printReport({
    sourceDir,
    targetMode,
    authMode: supabaseContext.authMode,
    dryRun,
    recipes,
    images,
    linkedImages,
    ignoredImages,
    recipesWithoutImage,
    warnings,
  })
}

async function createSupabaseContext(
  warnings: ImportWarning[],
): Promise<SupabaseContext | null> {
  const supabaseUrl = process.env.NUXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL
  const serviceRoleKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NUXT_SUPABASE_SERVICE_ROLE_KEY
  const anonKey =
    process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY
  const key = serviceRoleKey ?? anonKey

  if (!supabaseUrl || !key) return null

  const client = createClient(supabaseUrl, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })

  if (serviceRoleKey) {
    return { client, canWrite: true, authMode: 'service-role' }
  }

  const adminEmail = process.env.SUPABASE_AUTH_EMAIL
  const adminPassword = process.env.SUPABASE_AUTH_PASSWORD

  if (adminEmail && adminPassword) {
    const { error } = await client.auth.signInWithPassword({
      email: adminEmail,
      password: adminPassword,
    })

    if (!error) {
      return { client, canWrite: true, authMode: 'admin-session' }
    }

    warnings.push({
      label: 'Login admin falhou',
      detail: error.message,
    })
  }

  warnings.push({
    label: 'Sem credencial de escrita',
    detail:
      'O script vai conseguir ler receitas públicas, mas não conseguirá atualizar image_path nem enviar para Storage sem SUPABASE_SERVICE_ROLE_KEY ou SUPABASE_AUTH_EMAIL/SUPABASE_AUTH_PASSWORD.',
  })

  return { client, canWrite: false, authMode: 'anon' }
}

async function listRecipes(client: SupabaseClient): Promise<RecipeRow[]> {
  const { data, error } = await client
    .from('recipes')
    .select('id, name, slug, image_path')
    .order('name', { ascending: true })

  if (error) throw error

  return (data ?? []) as RecipeRow[]
}

async function listImages(directory: string): Promise<ImageCandidate[]> {
  return readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => {
      const extension = path.extname(entry.name).toLowerCase()

      return {
        fileName: entry.name,
        filePath: path.join(directory, entry.name),
        slug: normalizeNameToSlug(entry.name),
        extension,
      }
    })
    .filter((image) => SUPPORTED_EXTENSIONS.has(image.extension))
}

function indexImages(images: ImageCandidate[]) {
  const imageBySlug = new Map<string, ImageCandidate>()
  const ignoredImages: IgnoredImage[] = []

  for (const image of images) {
    if (imageBySlug.has(image.slug)) {
      ignoredImages.push({
        fileName: image.fileName,
        reason: `duplicada para slug "${image.slug}"`,
      })
      continue
    }

    imageBySlug.set(image.slug, image)
  }

  return { imageBySlug, ignoredImages }
}

function findMatchingImage(
  recipe: RecipeRow,
  imageBySlug: Map<string, ImageCandidate>,
): ImageCandidate | null {
  const recipeSlug = normalizeNameToSlug(recipe.slug)
  const recipeNameSlug = normalizeNameToSlug(recipe.name)
  const exactMatch = imageBySlug.get(recipeSlug) ?? imageBySlug.get(recipeNameSlug)

  if (exactMatch) return exactMatch

  const relaxedMatches = Array.from(imageBySlug.values()).filter((image) => {
    if (image.slug.length < 6) return false

    return recipeSlug.includes(image.slug) || recipeNameSlug.includes(image.slug)
  })

  return relaxedMatches.length === 1 ? relaxedMatches[0] ?? null : null
}

async function linkImageToRecipe(params: {
  recipe: RecipeRow
  image: ImageCandidate
  supabaseContext: SupabaseContext
  targetMode: TargetMode
  publicDir: string
  dryRun: boolean
  warnings: ImportWarning[]
}): Promise<LinkedImage | null> {
  const {
    recipe,
    image,
    supabaseContext,
    targetMode,
    publicDir,
    dryRun,
    warnings,
  } = params

  if (dryRun) {
    return {
      recipeName: recipe.name,
      recipeSlug: recipe.slug,
      fileName: image.fileName,
      imagePath: buildStoragePath(recipe, image),
      target: 'dry-run',
    }
  }

  if (targetMode !== 'public' && supabaseContext.canWrite) {
    try {
      const imagePath = await uploadImageToStorage(
        supabaseContext.client,
        recipe,
        image,
      )

      await updateRecipeImagePath(supabaseContext.client, recipe.id, imagePath)

      return {
        recipeName: recipe.name,
        recipeSlug: recipe.slug,
        fileName: image.fileName,
        imagePath,
        target: 'storage',
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)

      warnings.push({
        label: `Storage falhou para ${recipe.slug}`,
        detail: message,
      })

      if (targetMode === 'storage') return null
    }
  }

  const publicImagePath = copyImageToPublic(recipe, image, publicDir)

  if (supabaseContext.canWrite) {
    await updateRecipeImagePath(supabaseContext.client, recipe.id, publicImagePath)
  } else {
    warnings.push({
      label: `image_path não atualizado para ${recipe.slug}`,
      detail: `Imagem copiada para ${publicImagePath}, mas faltou credencial de escrita no Supabase.`,
    })
  }

  return {
    recipeName: recipe.name,
    recipeSlug: recipe.slug,
    fileName: image.fileName,
    imagePath: publicImagePath,
    target: 'public',
  }
}

async function uploadImageToStorage(
  client: SupabaseClient,
  recipe: RecipeRow,
  image: ImageCandidate,
) {
  const storagePath = buildStoragePath(recipe, image)
  const fileBuffer = readFileSync(image.filePath)

  const { error } = await client.storage
    .from(BUCKET_NAME)
    .upload(storagePath, fileBuffer, {
      cacheControl: '31536000',
      contentType: getContentType(image.extension),
      upsert: true,
    })

  if (error) throw error

  return storagePath
}

async function updateRecipeImagePath(
  client: SupabaseClient,
  recipeId: string,
  imagePath: string,
) {
  const { error } = await client
    .from('recipes')
    .update({ image_path: imagePath })
    .eq('id', recipeId)

  if (error) throw error
}

function copyImageToPublic(
  recipe: RecipeRow,
  image: ImageCandidate,
  publicDirectory: string,
) {
  mkdirSync(publicDirectory, { recursive: true })

  const publicFileName = `${normalizeNameToSlug(recipe.slug)}${image.extension}`
  const publicFilePath = path.join(publicDirectory, publicFileName)

  copyFileSync(image.filePath, publicFilePath)

  return `/recipe-images/${publicFileName}`
}

function buildStoragePath(recipe: RecipeRow, image: ImageCandidate) {
  return `recipes/${normalizeNameToSlug(recipe.slug)}/${normalizeNameToSlug(
    image.fileName,
  )}${image.extension}`
}

function getContentType(extension: string) {
  const contentTypes: Record<string, string> = {
    '.avif': 'image/avif',
    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
  }

  return contentTypes[extension] ?? 'application/octet-stream'
}

function printReport(params: {
  sourceDir: string
  targetMode: TargetMode
  authMode: SupabaseContext['authMode']
  dryRun: boolean
  recipes: RecipeRow[]
  images: ImageCandidate[]
  linkedImages: LinkedImage[]
  ignoredImages: IgnoredImage[]
  recipesWithoutImage: RecipeRow[]
  warnings: ImportWarning[]
}) {
  console.log('\nImportação de imagens de receitas')
  console.log(`Fonte local: ${params.sourceDir}`)
  console.log(`Destino solicitado: ${params.targetMode}`)
  console.log(`Modo de autenticação: ${params.authMode}`)
  console.log(`Dry run: ${params.dryRun ? 'sim' : 'não'}`)
  console.log(`Receitas lidas: ${params.recipes.length}`)
  console.log(`Imagens encontradas: ${params.images.length}`)

  console.log('\nImagens vinculadas:')
  if (params.linkedImages.length === 0) {
    console.log('- nenhuma')
  } else {
    for (const item of params.linkedImages) {
      console.log(
        `- ${item.recipeName} (${item.recipeSlug}) <- ${item.fileName} => ${item.imagePath} [${item.target}]`,
      )
    }
  }

  console.log('\nImagens ignoradas:')
  if (params.ignoredImages.length === 0) {
    console.log('- nenhuma')
  } else {
    for (const item of params.ignoredImages) {
      console.log(`- ${item.fileName}: ${item.reason}`)
    }
  }

  console.log('\nReceitas sem imagem:')
  if (params.recipesWithoutImage.length === 0) {
    console.log('- nenhuma')
  } else {
    for (const recipe of params.recipesWithoutImage) {
      console.log(`- ${recipe.name} (${recipe.slug})`)
    }
  }

  if (params.warnings.length > 0) {
    console.log('\nAvisos:')
    for (const warning of params.warnings) {
      console.log(`- ${warning.label}: ${warning.detail}`)
    }
  }
}

function loadDotEnv() {
  const envPath = path.resolve('.env')
  if (!existsSync(envPath)) return

  const lines = readFileSync(envPath, 'utf8').split(/\r?\n/)

  for (const line of lines) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/)
    if (!match) continue

    const [, key, rawValue] = match
    if (!key || process.env[key] !== undefined) continue

    process.env[key] = stripEnvQuotes(rawValue ?? '')
  }
}

function stripEnvQuotes(value: string) {
  const trimmed = value.trim()

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1)
  }

  return trimmed
}

function getTargetMode(): TargetMode {
  const targetArg = process.argv.find((arg) => arg.startsWith('--target='))
  const target = (targetArg?.split('=')[1] ?? process.env.RECIPE_IMAGES_TARGET ?? 'auto') as TargetMode

  if (target === 'auto' || target === 'storage' || target === 'public') return target

  throw new Error('Destino inválido. Use --target=auto, --target=storage ou --target=public.')
}

function removeFileExtension(value: string) {
  return value.replace(/\.[^.]+$/, '')
}
