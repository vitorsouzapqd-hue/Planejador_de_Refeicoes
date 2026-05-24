<script setup lang="ts">
import type { ShoppingCatalogItem } from '../../types/shoppingCatalog'

defineProps<{
  items: ShoppingCatalogItem[]
  pending?: boolean
}>()

defineEmits<{
  activate: [item: ShoppingCatalogItem]
  deactivate: [item: ShoppingCatalogItem]
}>()
</script>

<template>
  <section v-if="pending" class="admin-card">
    <div class="admin-loading-state">
      <div class="admin-spinner" aria-hidden="true" />
      <p>Carregando Lista de Compras...</p>
    </div>
  </section>

  <section v-else-if="items.length === 0" class="admin-card">
    <div class="admin-empty-state">
      <BaseIcon name="shopping-cart" />
      <p>Nenhum item encontrado com esses filtros.</p>
      <NuxtLink class="primary-button" to="/admin/catalogo-compras/novo">
        <BaseIcon name="plus" />
        Criar item
      </NuxtLink>
    </div>
  </section>

  <section v-else class="admin-table-card">
    <div class="admin-table-head admin-table-head--catalog">
      <div>Item</div>
      <div>Status</div>
      <div>Tipo</div>
      <div>Vinculo</div>
      <div>Acoes</div>
    </div>

    <article
      v-for="item in items"
      :key="item.id"
      class="admin-ingredient-row"
    >
      <div class="admin-ingredient-row__info">
        <h2>{{ item.displayName ?? item.name }}</h2>
        <p>
          {{ item.shoppingCategory }}
          <template v-if="item.shoppingSubcategory"> - {{ item.shoppingSubcategory }}</template>
          - {{ item.defaultQuantityText ?? '1 item' }}
        </p>
      </div>

      <div class="admin-row-flags">
        <span :class="item.isActive ? 'admin-flag--ok' : 'admin-flag--inactive'">
          {{ item.isActive ? 'Ativo' : 'Inativo' }}
        </span>
      </div>

      <div class="admin-row-flags">
        <span>{{ item.isFood ? 'Alimento' : 'Utilidade' }}</span>
      </div>

      <div class="admin-row-flags">
        <span :class="item.ingredientId ? 'admin-flag--ok' : ''">
          {{ item.ingredientId ? 'Com ingrediente' : 'Sem ingrediente' }}
        </span>
      </div>

      <div class="admin-row-actions">
        <NuxtLink class="icon-button" :to="`/admin/catalogo-compras/${item.id}`" :aria-label="`Editar ${item.displayName ?? item.name}`">
          <BaseIcon name="edit" />
        </NuxtLink>
        <button
          v-if="item.isActive"
          class="icon-button"
          type="button"
          :aria-label="`Desativar ${item.displayName ?? item.name}`"
          @click="$emit('deactivate', item)"
        >
          <BaseIcon name="archive" />
        </button>
        <button
          v-else
          class="icon-button"
          type="button"
          :aria-label="`Ativar ${item.displayName ?? item.name}`"
          @click="$emit('activate', item)"
        >
          <BaseIcon name="check" />
        </button>
      </div>
    </article>
  </section>
</template>
