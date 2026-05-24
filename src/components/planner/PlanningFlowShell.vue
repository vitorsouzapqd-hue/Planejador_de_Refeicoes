<script setup lang="ts">
import PlanningStepHeader from './PlanningStepHeader.vue'
import PlanningStepProgress from './PlanningStepProgress.vue'

defineProps<{
  currentStep?: number
  totalSteps?: number
  kicker?: string
  title: string
  text?: string
  heroStyle?: boolean
}>()
</script>

<template>
  <section class="flow-screen">
    <PlanningStepProgress
      v-if="currentStep && totalSteps"
      :current="currentStep"
      :total="totalSteps"
    />

    <PlanningStepHeader
      :kicker="kicker"
      :title="title"
      :text="text"
      :hero-style="heroStyle"
    >
      <slot name="header-extras" />
    </PlanningStepHeader>

    <slot />
  </section>
</template>
