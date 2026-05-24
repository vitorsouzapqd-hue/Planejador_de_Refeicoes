<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import BaseIcon from './BaseIcon.vue'
import { getYouTubeVideoId } from '../../utils/video'

const props = defineProps<{
  videoUrl: string | null
}>()

const emit = defineEmits<{
  close: []
}>()

const videoId = computed(() => getYouTubeVideoId(props.videoUrl))

const embedUrl = computed(() => {
  if (!videoId.value) return null
  return `https://www.youtube.com/embed/${videoId.value}?autoplay=1&rel=0`
})

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div v-if="videoUrl" class="recipe-video-modal-backdrop" @click.self="$emit('close')">
      <div class="recipe-video-modal-container" role="dialog" aria-modal="true" aria-label="Vídeo de Referência">
        <button class="recipe-video-modal-close" aria-label="Fechar vídeo" @click="$emit('close')">
          <BaseIcon name="x" />
        </button>

        <div v-if="embedUrl" class="recipe-video-modal-aspect-ratio">
          <iframe 
            :src="embedUrl" 
            title="Vídeo de Referência da Receita" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
        <div v-else class="recipe-video-modal-error">
          <p>URL de vídeo inválida.</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.recipe-video-modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5vh 2.5vw;
}

.recipe-video-modal-container {
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 95vh;
  max-width: calc(95vh * (9 / 16));
  background-color: var(--color-bg);
  border-radius: var(--radius-md);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.recipe-video-modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 10;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.recipe-video-modal-close:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

.recipe-video-modal-aspect-ratio {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #000;
}

.recipe-video-modal-aspect-ratio iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.recipe-video-modal-error {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: var(--space-5);
  text-align: center;
  color: var(--color-text);
  background-color: var(--color-panel);
}
</style>
