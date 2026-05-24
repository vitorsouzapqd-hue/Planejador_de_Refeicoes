# AGENTS.md - Instrucoes para LLMs neste projeto

## Produto

Este projeto e o Planejador de Refeicoes.

E uma PWA mobile-first para alunos, com painel admin separado. O objetivo e transformar pesos e opcoes ja prescritos no app de dieta em planejamento pratico de compra, preparo e porcionamento.

O app nao prescreve dieta. O app nao calcula equivalencia nutricional para o aluno. O aluno informa os pesos que ja aparecem no app de dieta. Todos os pesos informados sao pesos de alimento pronto. A lista de compras converte para ingredientes crus.

## Linguagem Obrigatoria

Usar:

- porcoes
- peso pronto
- lista de compras
- preparo
- porcionamento

Evitar:

- potes
- unidades, quando estiver falando do porcionamento
- marmitas no MVP
- calorias/macros como foco da interface
- linguagem clinica desnecessaria

## Stack Detectada

- Nuxt 4.4.5
- Vue 3.5.34
- TypeScript
- Supabase via `@supabase/supabase-js`
- Nitro/Vercel como alvo natural de deploy
- CSS custom global em `src/assets/css/main.css`
- Sem Pinia detectado no `package.json`
- Sem Tailwind detectado
- Sem scripts de lint ou testes detectados

## Como Rodar

Instalar dependencias:

```bash
npm install
```

Rodar localmente:

```bash
npm run dev
```

Build de producao:

```bash
npm run build
```

Gerar site estatico, se aplicavel:

```bash
npm run generate
```

Preview do build:

```bash
npm run preview
```

Typecheck:

```bash
npm run typecheck
```

Scripts auxiliares:

```bash
npm run import:recipe-images
npm run import:shopping-catalog
npm run sync:photo-recipes
```

Nao existem scripts `npm run lint` nem `npm run test` no momento desta auditoria.

## Estrutura Detectada

- `src/pages`: rotas Nuxt do aluno e do admin.
- `src/components`: componentes separados por `admin`, `layout`, `planner`, `shopping` e `ui`.
- `src/composables`: estado, acesso a dados e operacoes de admin/aluno.
- `src/providers`: providers de receitas e catalogo de compras.
- `src/services`: servicos puros, incluindo calculo do planejamento.
- `src/data`: dados estaticos e mocks atras de provider.
- `src/types`: tipos de dominio.
- `src/assets/css/main.css`: CSS global principal.
- `supabase`: migrations e seed.
- `scripts`: scripts de importacao/sincronizacao.
- `docs`: handoff, auditoria e registros para LLMs.
- `public/recipe-images`: imagens publicas de receitas.

## Arquitetura Desejada

Fluxo correto de dados:

```txt
UI -> composable/store -> provider -> Supabase
```

Componentes nao devem importar mocks diretamente.

Errado:

```txt
components/RecipeCard.vue -> mockRecipes.ts
```

Correto:

```txt
components/RecipeCard.vue -> useRecipes() -> recipesProvider
```

Como Pinia nao esta instalado, use os composables existentes e `useState` do Nuxt quando precisar manter padrao local.

## Area Do Aluno

A area do aluno e mobile-first.

Deve priorizar:

- clareza;
- poucos cliques;
- botoes grandes;
- bottom action fixa nas etapas;
- cards tocaveis;
- filtros em pills;
- linguagem operacional.

Nao deve parecer dashboard tecnico.

Mudancas na area do aluno nao devem quebrar o admin.

## Area Admin

A area admin pode ser desktop-first.

Deve priorizar:

- tabelas/listagens;
- filtros;
- formularios claros;
- status de cadastro;
- pendencias;
- edicao segura de receitas, ingredientes e itens da lista de compras.

Mudancas no admin nao devem afetar a area do aluno.

## CSS

O CSS global esta concentrado em `src/assets/css/main.css` e e o maior gargalo estrutural atual.

Evitar novas classes globais genericas perigosas:

```css
.card {}
.btn {}
.section {}
.row {}
.title {}
```

Preferir classes escopadas por dominio ou componentes:

```css
.student-recipe-card {}
.admin-table-row {}
.planner-bottom-action {}
```

Classes globais sensiveis ja existentes exigem cuidado:

- `.field`
- `.primary-button`
- `.secondary-button`
- `.danger-button`
- `.icon-button`
- `.empty-state`
- `.pill-button`
- `.notice`

Nao alterar o visual atual salvo quando a tarefa pedir mudanca visual. Quando separar CSS, manter os seletores e a ordem de cascata para preservar comportamento.

## Componentes

Preferir componentes reutilizaveis a duplicacao de blocos. Nao extrair componentes durante tarefas pequenas se a extracao aumentar o risco.

Componentes base recomendados:

- `BaseButton`
- `BaseCard`
- `BaseInput`
- `BaseBadge`
- `BaseTabs`
- `BaseNotice`

Componentes aluno recomendados:

- `MobileTopBar`
- `MobileBottomNav`
- `BottomActionBar`
- `RecipeCard`
- `RecipeFilters`
- `PlannerStepHeader`
- `PortionInputCard`
- `ResultTabs`

Componentes admin recomendados:

- `AdminSidebar`
- `AdminPageHeader`
- `AdminSummaryCard`
- `AdminTable`
- `AdminTableState`
- `AdminFilters`
- `AdminDrawer`
- `AdminFormSection`
- `AdminStatusBadge`

Nunca misturar logica de aluno e admin no mesmo componente sem justificativa explicita.

## Supabase

Supabase e a fonte real de dados.

Detectado:

- migrations em `supabase/migrations`;
- seed em `supabase/seed.sql`;
- client em `src/composables/useSupabaseClient.ts`;
- providers em `src/providers`;
- bucket `recipe-images`;
- RLS e policies nas migrations;
- env vars `NUXT_PUBLIC_SUPABASE_URL`, `NUXT_PUBLIC_SUPABASE_ANON_KEY`, `NUXT_PUBLIC_DATA_PROVIDER`.

Nao alterar migrations sem autorizacao. Nao alterar RLS sem autorizacao. Nao alterar nomes de tabelas sem autorizacao. Nao remover providers sem autorizacao.

Se Supabase estiver indisponivel, os fallbacks/mock devem continuar atras do provider.

## Mocks

Mocks existem para fallback/localidade, mas nao devem ser importados diretamente por componentes.

Regra:

```txt
UI -> composable -> provider -> mock ou Supabase
```

Nunca:

```txt
Componente -> mockRecipesProvider.ts
Componente -> mockAdminData.ts
```

## LocalStorage

O planejamento atual pode ser salvo localmente.

Chaves conhecidas:

- `meal_planner_current_plan`
- `meal_planner_student_access`
- `meal_planner_shopping_extras_v1`
- `meal_planner_shopping_checked:<generatedAt>`
- `meal_planner_manual_shopping_items` como chave legada

Nao salvar dados pessoais sensiveis. Ao alterar formato salvo, manter migracao/normalizacao para dados antigos.

## Calculos

Regras de calculo devem ficar em servico puro.

Arquivo atual:

```txt
src/services/planningCalculator.ts
```

Responsabilidades esperadas:

- calcular peso pronto total;
- converter para peso cru;
- arredondar compra;
- escalar ingredientes;
- consolidar lista de compras;
- gerar texto de compras;
- gerar texto de preparo;
- gerar texto de porcionamento.

Nunca alterar regra de calculo sem criar ou atualizar testes. Nao colocar calculo dentro de componente visual.

## O Que Nao Pode Ser Alterado Sem Autorizacao

- Supabase, migrations, RLS, seeds e schemas.
- Regras de compra, rendimento, porcionamento e arredondamento.
- Stack do projeto.
- Rotas principais do aluno/admin.
- Visual global ou redesign completo.
- Fluxo de dados para importar mock direto na UI.
- Nomes e semantica de linguagem do produto.

## Fluxo Obrigatorio Para Qualquer LLM

1. Ler este `AGENTS.md`.
2. Ler `docs/AI_PLANNER.md`, se existir.
3. Ler `docs/AI_WORKLOG.md`, se existir.
4. Entender o escopo exato da tarefa.
5. Mapear arquivos afetados.
6. Confirmar internamente:
   - Esta mudanca altera comportamento?
   - Esta mudanca altera regra de calculo?
   - Esta mudanca altera Supabase?
   - Esta mudanca quebra alguma rota?
   - Esta mudanca altera visual alem do necessario?
   - Esta mudanca e pequena o suficiente para revisao?
7. Fazer mudancas pequenas e focadas.
8. Rodar comandos de verificacao disponiveis.
9. Atualizar `docs/AI_WORKLOG.md`.
10. Registrar decisoes relevantes em `docs/AI_DECISIONS.md`.

## Checklist Antes De Finalizar

- Build continua funcionando?
- TypeScript continua funcionando?
- Nenhum mock foi importado direto em componente?
- Nenhum calculo foi alterado sem teste?
- Nenhuma migration foi alterada sem pedido?
- Visual principal foi preservado?
- Aluno e admin continuam separados?
- Worklog foi atualizado?
- Erros e avisos foram registrados?

## Worklog Obrigatorio

Ao fim de cada tarefa, atualizar:

```txt
docs/AI_WORKLOG.md
```

Formato:

```md
## YYYY-MM-DD - Nome da tarefa

### LLM usada
Codex ou Claude Code

### Objetivo
...

### Arquivos alterados
- ...

### O que foi feito
- ...

### Comandos rodados
- ...

### Erros encontrados
- ...

### Riscos
- ...

### Proximos passos
- ...
```
