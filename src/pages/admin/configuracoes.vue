<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import AdminShell from '../../components/admin/AdminShell.vue'
import {
  useAdminSettings,
  type AdminSetting,
  type AdminSettingInput,
} from '../../composables/useAdminSettings'

definePageMeta({
  middleware: 'admin-auth',
})

const {
  createSetting,
  deleteSetting,
  isSettingKeyAvailable,
  listSettings,
  updateSetting,
} = useAdminSettings()

const settings = ref<AdminSetting[]>([])
const loading = ref(true)
const pending = ref(false)
const errorMessage = ref<string | null>(null)
const savedMessage = ref<string | null>(null)
const editingSettingId = ref<string | null>(null)

const form = reactive<AdminSettingInput>({
  key: '',
  value: '',
})

const submitLabel = computed(() => editingSettingId.value ? 'Salvar configuração' : 'Criar configuração')

onMounted(loadSettings)

async function loadSettings() {
  loading.value = true
  errorMessage.value = null

  try {
    settings.value = await listSettings()
  } catch {
    errorMessage.value = 'Não foi possível carregar as configurações.'
  } finally {
    loading.value = false
  }
}

async function submitSetting() {
  const error = getValidationError()
  if (error) {
    errorMessage.value = error
    return
  }

  pending.value = true
  errorMessage.value = null
  savedMessage.value = null

  try {
    const keyIsAvailable = await isSettingKeyAvailable(form.key, editingSettingId.value ?? undefined)
    if (!keyIsAvailable) {
      errorMessage.value = 'Essa chave já está em uso.'
      return
    }

    if (editingSettingId.value) {
      await updateSetting(editingSettingId.value, form)
      savedMessage.value = 'Configuração salva.'
    } else {
      await createSetting(form)
      savedMessage.value = 'Configuração criada.'
    }

    resetForm()
    await loadSettings()
  } catch {
    errorMessage.value = 'Não foi possível salvar a configuração.'
  } finally {
    pending.value = false
  }
}

async function removeSetting(setting: AdminSetting) {
  if (!confirm(`Excluir a configuração "${setting.key}"? Essa ação não pode ser desfeita.`)) return

  pending.value = true
  errorMessage.value = null
  savedMessage.value = null

  try {
    await deleteSetting(setting.id)
    if (editingSettingId.value === setting.id) resetForm()
    await loadSettings()
    savedMessage.value = 'Configuração excluída.'
  } catch {
    errorMessage.value = 'Não foi possível excluir a configuração.'
  } finally {
    pending.value = false
  }
}

function editSetting(setting: AdminSetting) {
  editingSettingId.value = setting.id
  form.key = setting.key
  form.value = setting.value
}

function resetForm() {
  editingSettingId.value = null
  form.key = ''
  form.value = ''
}

function getValidationError() {
  if (!form.key.trim()) return 'Informe a chave da configuração.'
  if (form.key !== form.key.trim()) return 'A chave não pode começar ou terminar com espaço.'

  return null
}
</script>

<template>
  <AdminShell>
    <section class="admin-page-header">
      <div>
        <p class="admin-page-header__kicker">Configurações</p>
        <h1 class="admin-page-header__title">Configurações do app</h1>
        <p class="admin-page-header__sub">Edite pares de chave e valor usados pela aplicação.</p>
      </div>
    </section>

    <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>
    <p v-if="savedMessage" class="admin-success-message">{{ savedMessage }}</p>

    <section class="admin-card">
      <div class="admin-editor-header">
        <div>
          <p class="section-kicker">Chave e valor</p>
          <h2>{{ editingSettingId ? 'Editar configuração' : 'Criar configuração' }}</h2>
        </div>
        <button v-if="editingSettingId" class="secondary-button" type="button" @click="resetForm">
          Nova configuração
        </button>
      </div>

      <form class="admin-form" @submit.prevent="submitSetting">
        <div class="admin-form-grid">
          <div class="field">
            <label for="setting-key">Chave</label>
            <input id="setting-key" v-model="form.key" type="text" required>
          </div>

          <div class="field">
            <label for="setting-value">Valor</label>
            <input id="setting-value" v-model="form.value" type="text">
          </div>
        </div>

        <button class="primary-button" type="submit" :disabled="pending">
          {{ pending ? 'Salvando...' : submitLabel }}
        </button>
      </form>
    </section>

    <section v-if="loading" class="admin-card">
      <p>Carregando configurações...</p>
    </section>

    <section v-else-if="settings.length === 0" class="admin-card">
      <p>Nenhuma configuração cadastrada. Crie a primeira configuração acima.</p>
    </section>

    <section v-else class="admin-table-card">
      <article v-for="setting in settings" :key="setting.id" class="admin-ingredient-row admin-meta-row">
        <div>
          <h2>{{ setting.key }}</h2>
          <p>{{ setting.value ?? 'Sem valor' }}</p>
        </div>

        <div class="admin-row-flags">
          <span>{{ setting.updatedAt ? 'Atualizada' : 'Nova' }}</span>
        </div>

        <div class="admin-row-actions">
          <button class="secondary-button" type="button" @click="editSetting(setting)">Editar</button>
          <button class="danger-button" type="button" :disabled="pending" @click="removeSetting(setting)">
            Excluir
          </button>
        </div>
      </article>
    </section>
  </AdminShell>
</template>
