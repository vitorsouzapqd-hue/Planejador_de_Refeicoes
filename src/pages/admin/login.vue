<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { navigateTo } from '#imports'
import { useAdminAuth } from '../../composables/useAdminAuth'

const email = ref('')
const password = ref('')
const { authPending, authError, loadAdminSession, signIn } = useAdminAuth()

onMounted(async () => {
  const session = await loadAdminSession()
  if (session) navigateTo('/admin')
})

async function submitLogin() {
  const success = await signIn(email.value, password.value)
  if (success) navigateTo('/admin')
}
</script>

<template>
  <main class="admin-login">
    <section class="admin-login__panel">
      <div>
        <p class="hero-panel__kicker">Admin</p>
        <h1>Entrar no painel</h1>
        <p>Use seu acesso administrativo do Supabase Auth.</p>
      </div>

      <form class="access-form" @submit.prevent="submitLogin">
        <div class="field">
          <label for="admin-email">E-mail</label>
          <input id="admin-email" v-model="email" type="email" autocomplete="email" required>
        </div>

        <div class="field">
          <label for="admin-password">Senha</label>
          <input id="admin-password" v-model="password" type="password" autocomplete="current-password" required>
        </div>

        <p v-if="authError" class="form-error">{{ authError }}</p>

        <button class="primary-button" type="submit" :disabled="authPending">
          {{ authPending ? 'Entrando...' : 'Entrar' }}
        </button>
      </form>
    </section>
  </main>
</template>
