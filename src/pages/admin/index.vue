<script setup lang="ts">
import AdminShell from '../../components/admin/AdminShell.vue'

definePageMeta({
  middleware: 'admin-auth',
})
</script>

<template>
  <AdminShell>
    <section class="admin-page-header">
      <p class="hero-panel__kicker">Painel</p>
      <h1>Admin</h1>
      <p>Base administrativa para gerenciar receitas do Planejador de Proteínas.</p>
    </section>

    <section class="admin-card">
      <h2>Receitas</h2>
      <p>Crie, publique, edite ou arquive receitas. Ingredientes e preparo avançado ficam para a próxima etapa.</p>
      <NuxtLink class="primary-button" to="/admin/receitas">Gerenciar receitas</NuxtLink>
    </section>
  </AdminShell>
</template>
