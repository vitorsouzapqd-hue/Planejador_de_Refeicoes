# AI_PLANNER - Auditoria tecnica inicial

Data da auditoria: 2026-05-24

## Estado Atual

O projeto e uma aplicacao Nuxt 4 com TypeScript, Vue 3, Supabase e CSS custom global. A estrutura principal ja separa aluno e admin em rotas e componentes diferentes, mas a camada de estilos esta concentrada em um unico arquivo global grande.

Stack real detectada:

- Nuxt 4.4.5
- Vue 3.5.34
- TypeScript
- Supabase via `@supabase/supabase-js`
- Nitro/Vercel
- CSS custom global
- Sem Pinia detectado
- Sem Tailwind detectado
- Sem lint/test configurados

Comandos disponiveis:

- `npm run dev`
- `npm run build`
- `npm run generate`
- `npm run preview`
- `npm run typecheck`
- `npm run import:recipe-images`
- `npm run import:shopping-catalog`
- `npm run sync:photo-recipes`

## Principais Gargalos

O maior gargalo e `src/assets/css/main.css`, com aproximadamente 9,5k linhas e 190 KB. Ele mistura base global, aluno, compras, resultado, planner e admin. Existem camadas historicas de admin proximas das linhas 1769, 6823 e 7647, o que aumenta o risco de cascata inesperada.

Classes globais sensiveis atravessam dominios:

- `.field`
- `.primary-button`
- `.secondary-button`
- `.danger-button`
- `.icon-button`
- `.empty-state`
- `.pill-button`
- `.notice`

Outros gargalos:

- `src/pages/planejar.vue`: arquivo muito grande, com logica de fluxo, filtros, validacoes, navegacao entre etapas e template no mesmo lugar.
- `src/composables/useAdminRecipes.ts`: concentra tipos, selects, CRUD, upload de imagem, mapeamentos e helpers.
- `src/services/planningCalculator.ts`: servico grande e critico; mexer sem testes e arriscado.
- `src/providers/recipes/supabaseRecipesProvider.ts`: provider extenso, com mapeamento Supabase e resolucao de imagem.
- Formularios admin como `AdminRecipeForm.vue`, `AdminMasterIngredientForm.vue` e `AdminIngredientEditor.vue`: muitos campos e padroes repetidos.
- `src/components/shopping/ShoppingCatalogSheet.vue`: sheet grande com busca, abas, formulario customizado e selecao.

## Dados, Mocks E Providers

Fluxo de receitas detectado:

```txt
UI -> useRecipes() -> createRecipesProvider() -> Supabase ou provider estatico
```

Nao foi encontrado componente importando mock diretamente. Os mocks aparecem atras dos providers, como esperado.

Fluxo Supabase detectado:

- `src/composables/useSupabaseClient.ts`
- `src/providers/recipes/supabaseRecipesProvider.ts`
- `src/providers/shoppingCatalog/supabaseShoppingCatalogProvider.ts`
- composables admin usando Supabase diretamente para CRUD

Supabase possui migrations `0001` a `0011`, seed, RLS, policies, bucket `recipe-images` e scripts de importacao.

## Componentes Recomendados

Base:

- `BaseButton`
- `BaseCard`
- `BaseInput`
- `BaseBadge`
- `BaseTabs`
- `BaseNotice`

Aluno:

- `MobileTopBar`
- `MobileBottomNav`
- `BottomActionBar`
- `RecipeFilters`
- `PlannerStepHeader`
- `PortionInputCard`
- `ResultTabs`

Admin:

- `AdminPageHeader`
- `AdminSummaryCard`
- `AdminTable`
- `AdminTableState`
- `AdminFilters`
- `AdminFormSection`
- `AdminDrawer`

Prioridade: comecar por componentes admin repetidos e filtros de receitas, pois reduzem duplicacao sem tocar em calculo.

## CSS Que Deve Ser Separado

Etapa futura recomendada: separar `src/assets/css/main.css` em arquivos por dominio sem alterar seletores nem ordem efetiva de cascata.

Ordem sugerida:

1. `base/tokens.css`
2. `base/reset.css`
3. `student/shell.css`
4. `student/planner.css`
5. `student/recipes.css`
6. `student/result.css`
7. `student/shopping.css`
8. `admin/tokens.css`
9. `admin/shell.css`
10. `admin/components.css`
11. `admin/forms.css`

Na primeira separacao, nao renomear classes e nao redesenhar telas. A meta e reduzir risco de manutencao, nao mudar visual.

## Ordem Recomendada De Refatoracao

1. Criar documentacao persistente para LLMs e registrar estado atual.
2. Separar CSS por dominio mantendo seletores e ordem de importacao.
3. Extrair componentes admin repetidos: `AdminPageHeader`, `AdminSummaryCard`, `AdminTableState`, `AdminFilters`.
4. Extrair `RecipeFilters` e partes pequenas do fluxo de `src/pages/planejar.vue`.
5. Criar testes para `src/services/planningCalculator.ts`.
6. So depois revisar duplicacoes em providers/composables admin.

## Primeira Etapa Segura Executada

A primeira etapa segura e apenas documental:

- criar `AGENTS.md`;
- criar `docs/AI_PLANNER.md`;
- criar `docs/AI_WORKLOG.md`;
- criar `docs/AI_DECISIONS.md`.

Nao alterar:

- runtime;
- CSS;
- componentes;
- rotas;
- Supabase;
- migrations;
- providers;
- regras de calculo.

Esta escolha evita quebrar visual ou comportamento enquanto o projeto ganha um contrato operacional para Codex e Claude Code.

## Verificacao Da Auditoria

Comandos auditados:

- `npm run typecheck`: passou.
- `npm run build`: passou.
- `npm run lint`: nao existe.
- `npm run test`: nao existe.

Avisos do build:

- sourcemap possivelmente incorreto em `nuxt:module-preload-polyfill`;
- `DEP0155` em dependencia `@vue/shared`.

Observacao de ambiente: `git status --short` retornou `fatal: not a git repository`, entao este diretorio nao esta exposto como repositorio Git na sessao atual.
