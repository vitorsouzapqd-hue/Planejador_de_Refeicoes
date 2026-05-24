<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { navigateTo } from '#imports'
import { useAdminAuth } from '../../composables/useAdminAuth'

const email = ref('')
const password = ref('')
const {
  authPending,
  authError,
  confirmationSent,
  loadAdminSession,
  resendConfirmation,
  signIn,
} = useAdminAuth()

onMounted(async () => {
  const session = await loadAdminSession()
  if (session) navigateTo('/admin')
})

async function submitLogin() {
  const success = await signIn(email.value, password.value)
  if (success) navigateTo('/admin')
}

async function submitResendConfirmation() {
  await resendConfirmation(email.value)
}
</script>

<template>
  <main class="admin-login">
    <section class="admin-login__panel">
      <div>
        <p class="hero-panel__kicker">Painel</p>
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
        <p v-if="confirmationSent" class="admin-success-message">
          E-mail de confirmação reenviado. Abra sua caixa de entrada e confirme o acesso antes de entrar.
        </p>

        <button class="primary-button" type="submit" :disabled="authPending">
          {{ authPending ? 'Entrando...' : 'Entrar' }}
        </button>

        <button
          class="secondary-button"
          type="button"
          :disabled="authPending || !email"
          @click="submitResendConfirmation"
        >
          Reenviar confirmação
        </button>
      </form>
    </section>
  </main>
</template>
