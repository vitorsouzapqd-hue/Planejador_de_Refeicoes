<script setup lang="ts">
import BaseIcon from '../../ui/BaseIcon.vue'

const steps = [
  {
    title: 'Comprar',
    text: 'Use o checklist no mercado.',
    icon: 'shopping-cart',
  },
  {
    title: 'Preparar',
    text: 'Confira o rendimento estimado.',
    icon: 'chef-hat',
  },
  {
    title: 'Separar',
    text: 'Pese antes de porcionar.',
    icon: 'clipboard-check',
  },
]
</script>

<template>
  <section class="result-section result-section--tight" aria-labelledby="next-steps-title">
    <header class="result-section-heading">
      <p class="section-kicker">Direção</p>
      <h2 id="next-steps-title">O que fazer agora</h2>
    </header>

    <ol class="next-steps-compact">
      <li v-for="(step, index) in steps" :key="step.title">
        <span class="next-steps-compact__number">{{ index + 1 }}</span>
        <span class="next-steps-compact__icon" aria-hidden="true">
          <BaseIcon :name="step.icon" />
        </span>
        <span>
          <strong>{{ step.title }}</strong>
          <small>{{ step.text }}</small>
        </span>
      </li>
    </ol>
  </section>
</template>
