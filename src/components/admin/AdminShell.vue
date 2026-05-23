<script setup lang="ts">
import { navigateTo } from '#imports'
import { useAdminAuth } from '../../composables/useAdminAuth'

const { signOut } = useAdminAuth()

async function handleSignOut() {
  await signOut()
  navigateTo('/admin/login')
}
</script>

<template>
  <div class="admin-shell">
    <aside class="admin-sidebar">
      <NuxtLink class="admin-brand" to="/admin">
        <span class="brand-mark__symbol" aria-hidden="true">A</span>
        <span>
          <span class="brand-mark__eyebrow">Admin</span>
          <span class="brand-mark__title">Planejador</span>
        </span>
      </NuxtLink>

      <nav class="admin-nav" aria-label="Admin">
        <NuxtLink to="/admin">Início</NuxtLink>
        <NuxtLink to="/admin/receitas">Receitas</NuxtLink>
      </nav>

      <button class="secondary-button" type="button" @click="handleSignOut">
        Sair
      </button>
    </aside>

    <main class="admin-main">
      <slot />
    </main>
  </div>
</template>
