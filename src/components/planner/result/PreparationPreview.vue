<script setup lang="ts">
import type { PreparationRecipeResult } from '../../../types/planner'
import type { Recipe } from '../../../types/recipe'
import { resolveRecipeImage } from '../../../utils/recipeImages'
import BaseIcon from '../../ui/BaseIcon.vue'
import ResultSectionHeader from './ResultSectionHeader.vue'
import YieldTransform from './YieldTransform.vue'

defineProps<{
  recipes: PreparationRecipeResult[]
}>()

function imageForRecipe(recipe: { imagePath: string | null; imageUrl?: string | null; recipeName: string; recipeSlug: string }) {
  return resolveRecipeImage({
    imagePath: recipe.imagePath,
    imageUrl: recipe.imageUrl,
    name: recipe.recipeName,
    slug: recipe.recipeSlug,
  } as Pick<Recipe, 'imagePath' | 'imageUrl' | 'name' | 'slug'>)
}

function formatLines(lines: Array<{ portions: number; weightReadyG: number }>) {
  return lines
    .map((line) => `${line.portions} porções de ${line.weightReadyG}g`)
    .join(' + ')
}

function referenceVideoLabel(recipe: PreparationRecipeResult) {
  return recipe.referenceVideoTitle || 'Ver preparo em vídeo'
}
</script>

<template>
  <section id="preparo" class="result-section" aria-labelledby="preparation-preview-title">
    <ResultSectionHeader
      kicker="Preparo"
      title="Preparo e rendimento"
      text="Confira quanto comprar cru e quanto deve render pronto."
    />

    <div class="preparation-preview-scroll">
      <div class="preparation-preview-list">
        <article
          v-for="recipe in recipes.slice(0, 2)"
          :key="`${recipe.groupSlug}-${recipe.recipeId}`"
          class="preparation-preview-card"
        >
          <span class="preparation-preview-card__media">
            <img
              v-if="imageForRecipe(recipe)"
              :src="imageForRecipe(recipe) ?? undefined"
              :alt="recipe.recipeName"
              loading="lazy"
            >
            <span v-else aria-hidden="true">{{ recipe.recipeName.slice(0, 1) }}</span>
          </span>

          <div class="preparation-preview-card__body">
            <small>{{ recipe.groupName }}</small>
            <h3>{{ recipe.recipeName }}</h3>
            <p>{{ formatLines(recipe.lines) }}</p>

            <YieldTransform :stages="recipe.transformationStages" />

            <div class="preparation-preview-card__actions">
              <a
                v-if="recipe.referenceVideoUrl"
                class="secondary-button secondary-button--compact"
                :href="recipe.referenceVideoUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ referenceVideoLabel(recipe) }}
              </a>
              <details class="result-disclosure">
                <summary>
                  Ver preparo
                  <BaseIcon name="arrow-right" />
                </summary>
                <p>{{ recipe.yieldNote }}</p>
                <pre>{{ recipe.text }}</pre>
              </details>
            </div>
          </div>
        </article>
      </div>
    </div>

    <details v-if="recipes.length > 2" class="result-disclosure result-disclosure--full">
      <summary>
        Ver todas as preparações
        <span>{{ recipes.length - 2 }} restante{{ recipes.length - 2 === 1 ? '' : 's' }}</span>
      </summary>

      <div class="preparation-mini-list">
        <article
          v-for="recipe in recipes.slice(2)"
          :key="`extra-${recipe.groupSlug}-${recipe.recipeId}`"
        >
          <div>
            <small>{{ recipe.groupName }}</small>
            <strong>{{ recipe.recipeName }}</strong>
            <span>{{ formatLines(recipe.lines) }}</span>
          </div>
          <YieldTransform :stages="recipe.transformationStages" />
        </article>
      </div>
    </details>

    <p class="result-support-note">
      Rendimento estimado com base na receita cadastrada. O rendimento pode variar. Depois de pronto, pese antes de separar.
    </p>
  </section>
</template>
