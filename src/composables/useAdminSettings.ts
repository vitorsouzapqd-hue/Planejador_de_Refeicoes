import { useSupabaseClient } from './useSupabaseClient'

export type AdminSetting = {
  id: string
  key: string
  value: string | null
  createdAt: string | null
  updatedAt: string | null
}

export type AdminSettingInput = {
  key: string
  value: string | null
}

type SettingRow = {
  id: string
  key: string
  value: string | null
  created_at: string | null
  updated_at: string | null
}

export function useAdminSettings() {
  async function listSettings() {
    const supabase = requireSupabase()

    const { data, error } = await supabase
      .from('app_settings')
      .select('id, key, value, created_at, updated_at')
      .order('key', { ascending: true })

    if (error) throw error

    return (data ?? []).map((row) => mapSettingRow(row as SettingRow))
  }

  async function createSetting(input: AdminSettingInput) {
    const supabase = requireSupabase()

    const { data, error } = await supabase
      .from('app_settings')
      .insert(mapSettingInput(input))
      .select('id')
      .single()

    if (error) throw error

    return data.id as string
  }

  async function updateSetting(id: string, input: AdminSettingInput) {
    const supabase = requireSupabase()

    const { error } = await supabase
      .from('app_settings')
      .update(mapSettingInput(input))
      .eq('id', id)

    if (error) throw error
  }

  async function deleteSetting(id: string) {
    const supabase = requireSupabase()

    const { error } = await supabase
      .from('app_settings')
      .delete()
      .eq('id', id)

    if (error) throw error
  }

  async function isSettingKeyAvailable(key: string, currentId?: string) {
    const supabase = requireSupabase()

    let query = supabase
      .from('app_settings')
      .select('id')
      .eq('key', key)
      .limit(1)

    if (currentId) query = query.neq('id', currentId)

    const { data, error } = await query

    if (error) throw error

    return (data ?? []).length === 0
  }

  return {
    createSetting,
    deleteSetting,
    isSettingKeyAvailable,
    listSettings,
    updateSetting,
  }
}

function requireSupabase() {
  const supabase = useSupabaseClient()

  if (!supabase) {
    throw new Error('Supabase não configurado.')
  }

  return supabase
}

function mapSettingRow(row: SettingRow): AdminSetting {
  return {
    id: row.id,
    key: row.key,
    value: row.value,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }
}

function mapSettingInput(input: AdminSettingInput) {
  return {
    key: input.key.trim(),
    value: input.value?.trim() || null,
  }
}
