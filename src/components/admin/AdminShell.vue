<script setup lang="ts">
import { navigateTo, useRoute } from '#imports'
import { useAdminAuth } from '../../composables/useAdminAuth'

const { signOut } = useAdminAuth()
const route = useRoute()

const navLinks = [
  { to: '/admin', label: 'Início', exact: true, icon: 'home' },
  { to: '/admin/receitas', label: 'Receitas', exact: false, icon: 'file-text' },
  { to: '/admin/ingredientes', label: 'Ingredientes', exact: false, icon: 'grain' },
  { to: '/admin/catalogo-compras', label: 'Lista de Compras', exact: false, icon: 'shopping-cart' },
  { to: '/admin/metadados', label: 'Metadados', exact: false, icon: 'tags' },
  { to: '/admin/configuracoes', label: 'Configurações', exact: false, icon: 'settings' },
]

function isActive(link: typeof navLinks[number]) {
  if (link.exact) return route.path === link.to
  return route.path === link.to || route.path.startsWith(link.to + '/')
}

async function handleSignOut() {
  await signOut()
  navigateTo('/admin/login')
}
</script>

<template>
  <div class="admin-shell">
    <aside class="admin-sidebar">
      <div class="admin-sidebar__content">
        <NuxtLink class="admin-brand" to="/admin">
          <div class="admin-brand__mark">
            <span aria-hidden="true">A</span>
          </div>
          <div class="admin-brand__text">
            <span class="admin-brand__eyebrow">Painel</span>
            <span class="admin-brand__title">Planejador</span>
          </div>
        </NuxtLink>

        <nav class="admin-nav" aria-label="Painel administrativo">
          <span class="admin-nav__label">Principal</span>
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="admin-nav__link"
            :class="{ 'admin-nav__link--active': isActive(link) }"
          >
            <span class="admin-nav__icon" aria-hidden="true">
              <BaseIcon :name="link.icon" />
            </span>
            <span>{{ link.label }}</span>
          </NuxtLink>
        </nav>

        <div class="admin-sidebar__footer">
          <NuxtLink class="admin-sidebar__site-link" to="/" target="_blank">
            <BaseIcon name="globe" />
            Ver site
          </NuxtLink>

          <button class="admin-sidebar__signout" type="button" @click="handleSignOut">
            <BaseIcon name="log-out" />
            Sair
          </button>
        </div>
      </div>
    </aside>

    <main class="admin-main">
      <slot />
    </main>
  </div>
</template>
