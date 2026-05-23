<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <svg
    class="svg-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-if="name === 'beef'">
      <path d="M16.6 13.8c2.6-2.6 3.1-6.5 1-8.5s-5.9-1.6-8.5 1l-3.9 3.9c-1.9 1.9-2 4.8-.3 6.5s4.6 1.6 6.5-.3Z" />
      <path d="M8.1 12.7 4.7 16.1" />
      <path d="M5.8 18.6c-1 .8-2.5.8-3.2 0s-.7-2.2.2-3.1" />
      <path d="M13.5 7.3c.6-.6 1.6-.6 2.2 0s.6 1.6 0 2.2" />
    </template>
    <template v-else-if="name === 'grain'">
      <path d="M12 22V3" />
      <path d="M7 7c0 2.8 2.2 5 5 5" />
      <path d="M17 7c0 2.8-2.2 5-5 5" />
      <path d="M7 13c0 2.8 2.2 5 5 5" />
      <path d="M17 13c0 2.8-2.2 5-5 5" />
    </template>
    <template v-else-if="name === 'salad'">
      <path d="M5 12h14" />
      <path d="M7 12a5 5 0 0 1 10 0" />
      <path d="M6 12l1.6 7h8.8L18 12" />
      <path d="M9 9c0-2.2 1.8-4 4-4" />
      <path d="M13 9c0-2.2 1.8-4 4-4" />
    </template>
    <template v-else-if="name === 'fruit'">
      <path d="M12 7c1.4-2.4 3.1-3 5-3" />
      <path d="M12 7c-1.4-1-3.8-1.4-5.5.3-2.4 2.5-1.8 8.5 1.1 11.7 1.4 1.5 3.2.7 4.4.7s3 .8 4.4-.7c2.9-3.2 3.5-9.2 1.1-11.7C15.8 5.6 13.4 6 12 7Z" />
      <path d="M12 7c0-2-1-3-2-4" />
    </template>
    <template v-else-if="name === 'meal-box'">
      <path d="M4 8h16" />
      <path d="M6 8l1 12h10l1-12" />
      <path d="M9 8V5h6v3" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
    </template>
    <template v-else-if="name === 'snack'">
      <path d="M4 11h16" />
      <path d="M5 15h14" />
      <path d="M6 19h12" />
      <path d="M5 11c1.1-3.8 3.5-6 7-6s5.9 2.2 7 6" />
    </template>
    <template v-else-if="name === 'dessert'">
      <path d="M5 11h14l-1.2 9H6.2Z" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      <path d="M9 5c0-1 .8-2 3-2s3 1 3 2" />
      <path d="M8 15h8" />
    </template>
    <template v-else-if="name === 'drumstick'">
      <path d="M15.7 7.2c1.9 1.9 2.2 4.7.6 6.3s-4.4 1.3-6.3-.6-2.2-4.7-.6-6.3 4.4-1.3 6.3.6Z" />
      <path d="m10.3 12.7-4.6 4.6" />
      <path d="M5.8 17.2c-1-.8-2.4-.7-3.1.1-.7.8-.4 2 .8 2.6 1.1.6 2.5.2 3.1-.8" />
    </template>
    <template v-else-if="name === 'utensils'">
      <path d="M4 3v7" />
      <path d="M8 3v7" />
      <path d="M6 3v19" />
      <path d="M14 3v8a4 4 0 0 0 4 4h1v7" />
    </template>
    <template v-else-if="name === 'wheat'">
      <path d="M12 22V2" />
      <path d="M7 7c0 2.8 2.2 5 5 5" />
      <path d="M17 7c0 2.8-2.2 5-5 5" />
      <path d="M7 13c0 2.8 2.2 5 5 5" />
      <path d="M17 13c0 2.8-2.2 5-5 5" />
    </template>
    <template v-else-if="name === 'leaf'">
      <path d="M20 4c-8 0-14 4.5-14 11a5 5 0 0 0 5 5c6.5 0 9-8 9-16Z" />
      <path d="M6 18c3-5 7-8 12-10" />
    </template>
    <template v-else-if="name === 'apple'">
      <path d="M12 7c1.5-2.5 3.2-3 5-3" />
      <path d="M12 7c-1.4-1-3.8-1.4-5.5.3-2.4 2.5-1.8 8.5 1.1 11.7 1.4 1.5 3.2.7 4.4.7s3 .8 4.4-.7c2.9-3.2 3.5-9.2 1.1-11.7C15.8 5.6 13.4 6 12 7Z" />
      <path d="M12 7c0-2-1-3-2-4" />
    </template>
    <template v-else-if="name === 'package'">
      <path d="m3 7 9 5 9-5" />
      <path d="m3 7 9-5 9 5v10l-9 5-9-5Z" />
      <path d="M12 12v10" />
    </template>
    <template v-else-if="name === 'sandwich'">
      <path d="M4 11h16" />
      <path d="M5 15h14" />
      <path d="M6 19h12" />
      <path d="M4 11c1-4 4-6 8-6s7 2 8 6" />
    </template>
    <template v-else-if="name === 'cake'">
      <path d="M4 11h16v8H4Z" />
      <path d="M7 11V8" />
      <path d="M12 11V8" />
      <path d="M17 11V8" />
      <path d="M7 5v1" />
      <path d="M12 5v1" />
      <path d="M17 5v1" />
    </template>
    <template v-else-if="name === 'shopping-cart'">
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
      <path d="M2 3h3l2.4 12.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L21 7H6" />
    </template>
    <template v-else-if="name === 'wallet'">
      <path d="M19 7V6a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6" />
      <path d="M16 12h.01" />
    </template>
    <template v-else-if="name === 'clock'">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </template>
    <template v-else-if="name === 'gauge'">
      <path d="M4 14a8 8 0 0 1 16 0" />
      <path d="M12 14l4-5" />
      <path d="M6.4 19a9 9 0 0 1 11.2 0" />
    </template>
    <template v-else-if="name === 'chef-hat'">
      <path d="M6 13.9A4 4 0 0 1 8 6a4 4 0 0 1 7.9 0A4 4 0 0 1 18 13.9V20H6Z" />
      <path d="M6 16h12" />
    </template>
    <template v-else-if="name === 'sparkle'">
      <path d="M12 3l1.4 4.3L18 9l-4.6 1.7L12 15l-1.4-4.3L6 9l4.6-1.7Z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z" />
    </template>
    <template v-else-if="name === 'check-circle'">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </template>
    <template v-else-if="name === 'bottle'">
      <path d="M10 2h4" />
      <path d="M11 2v4l-2 3v11a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9l-2-3V2" />
      <path d="M9 13h6" />
    </template>
    <template v-else-if="name === 'seasoning'">
      <path d="M8 3h8" />
      <path d="M9 7h6l1 13H8Z" />
      <path d="M10 11h4" />
      <path d="M11 15h2" />
    </template>
    <template v-else-if="name === 'list-check'">
      <path d="m3 6 1.5 1.5L8 4" />
      <path d="M11 6h10" />
      <path d="m3 12 1.5 1.5L8 10" />
      <path d="M11 12h10" />
      <path d="M4 18h4" />
      <path d="M11 18h10" />
    </template>
    <template v-else-if="name === 'book-open'">
      <path d="M12 7v14" />
      <path d="M3 5a8 8 0 0 1 9 2 8 8 0 0 1 9-2v14a8 8 0 0 0-9 2 8 8 0 0 0-9-2Z" />
    </template>
    <template v-else-if="name === 'clipboard-check'">
      <path d="M9 5h6" />
      <path d="M9 3h6v4H9Z" />
      <path d="M9 14l2 2 4-4" />
      <path d="M5 5h2v2h10V5h2v16H5Z" />
    </template>
    <template v-else-if="name === 'arrow-left'">
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </template>
    <template v-else-if="name === 'arrow-right'">
      <path d="m12 5 7 7-7 7" />
      <path d="M5 12h14" />
    </template>
    <template v-else-if="name === 'plus'">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </template>
    <template v-else-if="name === 'minus'">
      <path d="M5 12h14" />
    </template>
    <template v-else-if="name === 'x'">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </template>
    <template v-else-if="name === 'alert'">
      <path d="m12 3 10 18H2Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </template>
    <template v-else-if="name === 'trash'">
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <path d="M19 6 18 20H6L5 6" />
    </template>
    <template v-else>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </template>
  </svg>
</template>
