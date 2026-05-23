<script setup lang="ts">
import { ref } from 'vue'
import { navigateTo } from '#imports'
import { useStudentAccess } from '../composables/useStudentAccess'

const password = ref('')
const { accessError, verifyPassword } = useStudentAccess()

function submitAccess() {
  const isValid = verifyPassword(password.value)

  if (isValid) {
    navigateTo('/planejar')
  }
}
</script>

<template>
  <main class="app-frame">
    <section class="access-page">
      <div class="page-stack">
        <div class="hero-panel">
          <div>
            <p class="hero-panel__kicker">Acesso do aluno</p>
            <h1 class="hero-panel__title">Planejador de Proteínas</h1>
          </div>

          <p class="hero-panel__text">
            Monte suas porções a partir do que aparece na sua dieta.
            Sem cozinhar no olho. Sem torcer para dar.
          </p>

          <div class="notice">
            Todos os pesos informados são de alimento pronto. A lista de compras calcula os ingredientes crus necessários.
          </div>

          <form class="access-form" @submit.prevent="submitAccess">
            <div class="field">
              <label for="student-password">Senha de acesso</label>
              <input
                id="student-password"
                v-model="password"
                type="password"
                autocomplete="current-password"
                inputmode="numeric"
                placeholder="Digite a senha"
              >
            </div>

            <p v-if="accessError" class="form-error">
              {{ accessError }}
            </p>

            <button class="primary-button" type="submit">
              Entrar no planejador
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>
