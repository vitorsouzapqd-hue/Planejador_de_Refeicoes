# AI_WORKLOG

## 2026-05-24 - Triagem de receitas copiadas do Instagram

### LLM usada

Codex

### Objetivo

Analisar o arquivo `Receitas v1.md`, com legendas copiadas do Instagram, para avaliar o que pode ser aproveitado no cadastro de receitas do Planejador de Refeicoes.

### Arquivos alterados

- `docs/AI_WORKLOG.md`

### O que foi feito

- Lidos `AGENTS.md`, `docs/AI_PLANNER.md`, `docs/AI_WORKLOG.md` e `docs/AI_DECISIONS.md`.
- Lido o arquivo externo `c:\Users\Vítor Velame\Documents\Valts do Obsidian\Obsidian Vault 20 MAR\Sem título\Receitas v1.md`.
- Identificadas 9 receitas candidatas, com ingredientes parcialmente estruturados e muito texto promocional de legenda.
- Separadas receitas com melhor potencial de cadastro das receitas que exigem curadoria antes de entrar no app.
- Nenhum dado foi gravado no Supabase. Nenhuma migration, RLS, seed, provider, mock, rota, CSS ou regra de calculo foi alterada.

### Comandos rodados

- `Get-Content -LiteralPath AGENTS.md`
- `Get-Content -LiteralPath docs/AI_PLANNER.md`
- `Get-Content -LiteralPath docs/AI_WORKLOG.md`
- `Get-Content -LiteralPath docs/AI_DECISIONS.md`
- `Get-Content -LiteralPath "c:\Users\Vítor Velame\Documents\Valts do Obsidian\Obsidian Vault 20 MAR\Sem título\Receitas v1.md"`

### Erros encontrados

- O markdown externo esta com acentuacao corrompida por mojibake, exigindo normalizacao antes de qualquer importacao.

### Riscos

- Varias receitas usam medidas como unidade, colher, "a gosto" e instrucoes por item individual; isso precisa ser convertido com cuidado para peso pronto, preparo e porcionamento.
- Algumas legendas trazem sugestoes de consumo, macros e linguagem de emagrecimento que nao devem virar foco da interface do aluno.

### Proximos passos

- Criar uma versao curada em formato estruturado antes de cadastrar.
- Definir peso pronto total estimado, ingredientes de lista de compras e modo de preparo operacional para cada receita aprovada.
- Cadastrar primeiro as receitas com pesos mais claros e preparo menos ambiguo.

## 2026-05-24 - Remocao do acesso do aluno

### LLM usada

Codex

### Objetivo

Remover a tela de acesso do aluno e liberar entrada direta nas rotas do app do aluno.

### Arquivos alterados

- `src/middleware/student-access.global.ts`
- `src/pages/acesso.vue`
- `src/composables/useStudentAccess.ts`
- `nuxt.config.ts`
- `.env` (local, nao commitado)
- `.env.example`
- `docs/AI_WORKLOG.md`
- `docs/AI_DECISIONS.md`

### O que foi feito

- Removido o middleware global que redirecionava rotas do aluno para `/acesso`.
- Removida a pagina `/acesso`.
- Removido o composable `useStudentAccess`, incluindo chave em localStorage e validacao de senha.
- Removida a config publica `studentAccessPassword` do Nuxt.
- Removida a variavel `NUXT_STUDENT_ACCESS_PASSWORD` dos arquivos de ambiente do projeto.
- Mantido o acesso admin separado sem alteracoes.
- Confirmado que nao restaram referencias ao fluxo antigo de acesso do aluno em `src`, `nuxt.config.ts` ou `.env.example`.
- Nenhuma migration, RLS, provider, mock, regra de lista de compras, preparo ou porcionamento foi alterada.

### Comandos rodados

- `rg` para localizar referencias ao fluxo de acesso do aluno.
- `npm run typecheck`: passou.
- `npm run build`: passou.

### Erros encontrados

- Nenhum erro novo encontrado.

### Avisos encontrados

- Build manteve aviso de sourcemap possivelmente incorreto em `nuxt:module-preload-polyfill`.
- Build manteve `DEP0155` relacionado a export mapping com barra final em dependencia `@vue/shared`.

### Riscos

- A area do aluno deixa de ter barreira por chave e passa a ficar acessivel diretamente.
- O admin continua protegido pelo fluxo proprio.

### Proximos passos

- Validar visualmente no navegador que `/` segue redirecionando para `/planejar` e que `/planejar`, `/receitas`, `/compras` e `/resultado` nao passam mais por `/acesso`.

## 2026-05-24 - Ajuste da chave de acesso do aluno

### LLM usada

Codex

### Objetivo

Corrigir o acesso do aluno em `/acesso`, definir a chave como `1234567` e melhorar a microcopy da tela.

### Arquivos alterados

- `src/composables/useStudentAccess.ts`
- `src/pages/acesso.vue`
- `nuxt.config.ts`
- `.env`
- `.env.example`
- `docs/AI_WORKLOG.md`
- `docs/AI_DECISIONS.md`

### O que foi feito

- Definida a chave padrao de acesso do aluno como `1234567`.
- Atualizado `nuxt.config.ts` para usar `1234567` como fallback quando `NUXT_STUDENT_ACCESS_PASSWORD` nao estiver definida.
- Atualizado `.env` e `.env.example` para `NUXT_STUDENT_ACCESS_PASSWORD=1234567`.
- Ajustada a tela `/acesso` para falar em `Chave de acesso`, com texto focado em peso pronto, lista de compras, preparo e porcionamento.
- Melhorada a mensagem de erro quando a chave digitada nao libera o acesso.
- Nenhuma rota, Supabase, migration, provider ou regra de calculo foi alterada.

### Comandos rodados

- `rg` para localizar fluxo de acesso e senha.
- `rg` para confirmar ocorrencias de `1234567` e microcopy nova.
- `npm run typecheck`: passou.
- `npm run build`: passou.

### Erros encontrados

- Nenhum erro novo encontrado.

### Avisos encontrados

- Build manteve aviso de sourcemap possivelmente incorreto em `nuxt:module-preload-polyfill`.
- Build manteve `DEP0155` relacionado a export mapping com barra final em dependencia `@vue/shared`.

### Riscos

- A chave de acesso do aluno e publica no runtime client-side; ela serve como barreira simples de produto, nao como autenticacao forte.

### Proximos passos

- Se o acesso do aluno precisar virar autenticacao real, migrar para fluxo autenticado em vez de chave publica no frontend.

## 2026-05-24 - Medidas caseiras nos ingredientes e remocao de linguagem de bloqueio

### LLM usada

Codex

### Objetivo

Substituir observacoes pouco uteis de ingredientes por medidas caseiras praticas e remover da interface a linguagem de bloqueio da receita.

### Arquivos alterados

- `src/pages/receitas.vue`
- `src/components/admin/AdminRecipeForm.vue`
- `src/providers/recipes/mockRecipesProvider.ts`
- `src/data/photoRecipeCatalog.ts`
- `src/services/planningCalculator.ts`
- `scripts/sync-household-measures.ts`
- `package.json`
- `supabase/seed.sql`
- `docs/AI_WORKLOG.md`
- `docs/AI_DECISIONS.md`

### O que foi feito

- Criado script `scripts/sync-household-measures.ts` para sincronizar medidas caseiras no Supabase.
- Adicionado script npm `sync:household-measures`.
- Sincronizadas medidas caseiras aproximadas para 70 ingredientes ativos, incluindo cebola pequena/media/grande, farelo de aveia por colher, arroz por colher/colher de servir/escumadeira e feijao por concha.
- Alterada a tela `src/pages/receitas.vue` para mostrar medidas caseiras dos ingredientes quando existirem, em vez de usar categoria de compra como pseudo-observacao.
- Removido o rotulo visual de bloqueio da receita.
- Removido o badge restritivo ao lado de `Base da receita`.
- Ajustada a copia da biblioteca de receitas para orientar uso por peso pronto e ajuste proporcional do preparo.
- Renomeado no admin o campo de aviso restritivo para `Orientação de preparo`.
- Trocados textos padrao/restritivos de mocks, catalogo fotografico, seed e preparo gerado por orientacoes operacionais.
- Textos restritivos de ingrediente sensivel foram substituidos por `medir com atenção`.
- Confirmado no Supabase que nao ha ocorrencias antigas em avisos de receita ou observacoes de ingredientes para os padroes buscados.
- Nenhuma migration, RLS, schema, provider ou regra de calculo foi alterada.

### Comandos rodados

- `npm run sync:household-measures -- --dry-run`: passou, cobrindo 70 ingredientes e 0 slugs faltantes.
- `npm run sync:household-measures`: passou apos ajuste de autenticacao, gravando medidas caseiras no Supabase.
- Consulta Supabase de limpeza de textos antigos: retornou 0 alteracoes necessarias.
- Consulta Supabase de validacao: retornou 0 ocorrencias para os padroes antigos de bloqueio, restricao, detalhe tecnico de dossie e quantidade original.
- Consulta Supabase de amostra: confirmou medidas para `cebola`, `farelo-de-aveia`, `arroz-branco` e `feijao-carioca`.
- `rg` para textos proibidos em `src`, `scripts`, `supabase`, `docs` e `package.json`: sem ocorrencias.
- `npm run typecheck`: passou.
- `npm run audit:recipe-shopping`: passou.
- `npm run build`: passou.

### Erros encontrados

- A primeira execucao real de `npm run sync:household-measures` falhou por RLS em `ingredient_household_measures`.
- O script foi ajustado para autenticar com service role ou `SUPABASE_AUTH_EMAIL`/`SUPABASE_AUTH_PASSWORD`, seguindo o padrao dos importadores que ja gravam no Supabase.

### Avisos encontrados

- Build manteve aviso de sourcemap possivelmente incorreto em `nuxt:module-preload-polyfill`.
- Build manteve `DEP0155` relacionado a export mapping com barra final em dependencia `@vue/shared`.

### Riscos

- Medidas caseiras sao aproximadas e podem variar por tamanho real do alimento, corte, marca e utensilio.
- A tela mostra ate 4 medidas por ingrediente para manter legibilidade no modal de receita.
- O campo tecnico `locked_recipe_warning` continua existindo no schema por compatibilidade, mas a linguagem visivel foi trocada para orientacao de preparo.

### Proximos passos

- Revisar visualmente o modal de receitas em mobile para garantir que linhas com medidas longas nao fiquem pesadas.
- Refinar medidas caseiras com fonte propria/curadoria nutricional se houver uma tabela oficial do projeto.
- Expandir medidas especificas para ingredientes novos sempre que novos dossies forem importados.

## 2026-05-24 - Importacao do dossie de carboidratos e limpeza de textos ao cliente

### LLM usada

Codex

### Objetivo

Integrar o dossie `carboidratos-engenharia-hibrida.md` ao sistema e corrigir textos importados que apareciam para o cliente com informacoes tecnicas ou restritivas demais.

### Arquivos alterados

- `scripts/import-carb-dossier.ts`
- `scripts/import-recipe-dossier.ts`
- `package.json`
- `docs/AI_WORKLOG.md`
- `docs/AI_DECISIONS.md`

### O que foi feito

- Criado importador idempotente `scripts/import-carb-dossier.ts`.
- Adicionado script npm `import:carb-dossier`.
- O importador le o markdown do dossie de carboidratos, extrai 24 receitas, peso pronto total, ingredientes medidos, nutricao por ingrediente, nutricao por 100g e modo de preparo.
- Executado dry run antes da escrita real: 17 receitas seriam atualizadas e 7 seriam inseridas.
- Executada importacao real no Supabase: 17 receitas existentes atualizadas e 7 receitas novas inseridas.
- Receitas novas inseridas: `arroz-com-talo-de-couve`, `arroz-com-brocolis`, `pure-de-batata-doce`, `inhame-cozido`, `mandioca-assada`, `macarrao-integral` e `feijao`.
- Apos a escrita, dry run passou a indicar 24 receitas a atualizar e 0 novas, confirmando idempotencia operacional.
- Criados/atualizados 24 ingredientes mestre medidos a partir do dossie.
- Reprocessado o dossie de proteinas para remover observacoes tecnicas dos ingredientes ja importados.
- Ajustada a mensagem de orientacao da receita para permitir ajuste proporcional do preparo conforme o peso pronto informado pelo aluno.
- Ingredientes de receita passaram a ser importados sem notas tecnicas como `Dossie: ... | quantidade original: ...`.
- Nenhuma migration, RLS, seed, provider, rota, componente visual ou regra de calculo foi alterada.

### Comandos rodados

- `npm run import:carb-dossier -- --dry-run --file="c:\Users\Vítor Velame\Downloads\carboidratos-engenharia-hibrida.md"`: passou antes da importacao, apontando 17 atualizacoes e 7 insercoes.
- `npm run import:recipe-dossier -- --dry-run --file="c:\Users\Vítor Velame\Downloads\cardapio-engenharia-hibrida.md"`: passou antes da reimportacao das proteinas, apontando 15 atualizacoes e 0 insercoes.
- `npm run import:recipe-dossier -- --file="c:\Users\Vítor Velame\Downloads\cardapio-engenharia-hibrida.md"`: passou, removendo observacoes tecnicas e atualizando orientacao das receitas de proteina.
- `npm run import:carb-dossier -- --file="c:\Users\Vítor Velame\Downloads\carboidratos-engenharia-hibrida.md"`: passou, gravando dados no Supabase.
- `npm run import:carb-dossier -- --dry-run --file="c:\Users\Vítor Velame\Downloads\carboidratos-engenharia-hibrida.md"`: passou apos a importacao, apontando 24 atualizacoes e 0 insercoes.
- `npm run audit:recipe-shopping`: passou.
- `npm run typecheck`: passou.
- Consulta Supabase para notas tecnicas e orientacoes antigas: retornou 0 ocorrencias.
- `npm run build`: passou.

### Erros encontrados

- Nenhum erro novo encontrado durante importacao, auditoria, typecheck ou build.

### Avisos encontrados

- Build manteve aviso de sourcemap possivelmente incorreto em `nuxt:module-preload-polyfill`.
- Build manteve `DEP0155` relacionado a export mapping com barra final em dependencia `@vue/shared`.

### Riscos

- As receitas novas de carboidratos foram publicadas sem imagens especificas; podem receber imagens depois pelo fluxo administrativo.
- `feijao` foi importado como receita propria, sem mapear para `feijao-preto`, porque o dossie descreve feijao carioca.
- Como a importacao substitui ingredientes e passos das receitas importadas, edicoes manuais futuras nessas mesmas receitas podem ser sobrescritas se o script for reexecutado.

### Proximos passos

- Revisar no admin as receitas novas sem imagem e completar midia quando houver ativos.
- Avaliar se vale criar um relatorio seco para o dossie de carboidratos, semelhante ao relatorio do primeiro dossie.
- Manter futuras observacoes de ingredientes apenas para informacoes realmente uteis ao cliente.

## 2026-05-24 - Importacao completa do dossie de receitas no Supabase

### LLM usada

Codex

### Objetivo

Executar a integracao completa do dossie `cardapio-engenharia-hibrida.md` ao sistema, com importacao real para Supabase, preservando regras de lista de compras, preparo e porcionamento.

### Arquivos alterados

- `scripts/import-recipe-dossier.ts`
- `package.json`
- `docs/AI_WORKLOG.md`
- `docs/AI_DECISIONS.md`

### O que foi feito

- Criado importador idempotente `scripts/import-recipe-dossier.ts`.
- Adicionado script npm `import:recipe-dossier`.
- O importador le o markdown do dossie, extrai 15 receitas, ingredientes, quantidades em gramas, nutricao por ingrediente, nutricao por 100g de preparo pronto e modo de preparo.
- Executado dry run antes da escrita real: 12 receitas seriam atualizadas e 3 seriam inseridas.
- Executada importacao real no Supabase: 12 receitas existentes atualizadas e 3 receitas novas inseridas.
- Receitas novas inseridas: `strogonoff-de-carne`, `iscas-de-carne-aceboladas-com-pimentao-e-tomate`, `iscas-de-frango-aceboladas-com-pimentao-e-tomate`.
- Apos a escrita, dry run passou a indicar 15 receitas a atualizar e 0 novas, confirmando idempotencia operacional.
- Criados/atualizados 24 ingredientes mestre medidos a partir do dossie.
- Ingredientes de receita foram substituidos via RPC `replace_recipe_ingredients`; passos via `replace_recipe_steps`; tags via `replace_recipe_tags`.
- Preservados imagem, status e links de video existentes das receitas ja cadastradas.
- Ingredientes com alternativa textual, como `Coxao mole (ou patinho)`, foram normalizados para compra como `Coxao mole`, com `Patinho` como alias.
- Nenhuma migration, RLS, seed, provider, rota, componente ou regra de calculo foi alterada.

### Comandos rodados

- `npm run import:recipe-dossier -- --dry-run --file="c:\Users\Vítor Velame\Downloads\cardapio-engenharia-hibrida.md"`: passou antes da importacao, apontando 12 atualizacoes e 3 insercoes.
- `npm run import:recipe-dossier -- --file="c:\Users\Vítor Velame\Downloads\cardapio-engenharia-hibrida.md"`: passou, gravando dados no Supabase.
- `npm run import:recipe-dossier -- --dry-run --file="c:\Users\Vítor Velame\Downloads\cardapio-engenharia-hibrida.md"`: passou apos a importacao, apontando 15 atualizacoes e 0 insercoes.
- `npm run audit:recipe-shopping`: passou.
- `npm run typecheck`: passou.
- `npm run build`: passou.

### Erros encontrados

- Nenhum erro novo encontrado na importacao real, auditoria, typecheck ou build.

### Avisos encontrados

- Build manteve aviso de sourcemap possivelmente incorreto em `nuxt:module-preload-polyfill`.
- Build manteve `DEP0155` relacionado a export mapping com barra final em dependencia `@vue/shared`.

### Riscos

- As 3 receitas novas foram publicadas sem imagens especificas; a experiencia funcional esta completa, mas a biblioteca pode usar fallback visual ate imagens serem adicionadas.
- A normalizacao de alternativas (`Coxao mole` com alias `Patinho`) evita item composto na lista de compras, mas a escolha do corte principal pode ser ajustada depois no admin se houver preferencia editorial.
- Como o app usa Supabase como fonte real, o catalogo local/fallback continua simplificado ate uma eventual etapa de sincronizacao do fallback estatico.

### Proximos passos

- Validar visualmente no app as receitas novas e uma lista de compras gerada com strogonoff/iscas.
- Adicionar imagens para as 3 receitas novas se quiser evitar fallback visual.

## 2026-05-24 - Auditoria seca do dossie de receitas

### LLM usada

Codex

### Objetivo

Ler o dossie `cardapio-engenharia-hibrida.md` e gerar uma analise automatizada de como seus dados podem entrar no sistema, sem executar importacao real nem alterar Supabase.

### Arquivos alterados

- `scripts/audit-recipe-dossier.ts`
- `package.json`
- `docs/AI_RECIPE_DOSSIER_IMPORT_REPORT.md`
- `docs/AI_WORKLOG.md`
- `docs/AI_DECISIONS.md`

### O que foi feito

- Criado script de auditoria seca do dossie com suporte a `--file` e `--out`.
- O script extrai 15 receitas do markdown, incluindo proteina principal, metodo, peso pronto estimado, ingredientes, quantidades em gramas, nutricao por 100g e modo de preparo.
- O script compara as receitas extraidas com `listPhotoCatalogRecipes()` para separar receitas existentes de receitas novas.
- Registradas correspondencias de slugs historicos, como `almondegas-de-carne` -> `almondegas-carne`, `frango-com-creme-de-milho` -> `frango-creme-milho` e `strogonoff-de-frango` -> `strogonoff-frango`.
- Gerado relatorio em `docs/AI_RECIPE_DOSSIER_IMPORT_REPORT.md`.
- Adicionado script npm `audit:recipe-dossier`.
- Nenhum dado foi gravado no Supabase. Nenhuma migration, RLS, seed, provider ou regra de calculo foi alterada.

### Comandos rodados

- `npm run audit:recipe-dossier -- --file="c:\Users\Vítor Velame\Downloads\cardapio-engenharia-hibrida.md"`: passou.
- `npm run typecheck`: passou.
- `npm run build`: passou.

### Erros encontrados

- A primeira versao do pareamento por slug foi conservadora demais e marcou 7 receitas como novas; ajustado com tabela explicita de slugs historicos. Resultado final: 12 receitas existentes para enriquecer e 3 receitas novas candidatas.

### Avisos encontrados

- Build manteve aviso de sourcemap possivelmente incorreto em `nuxt:module-preload-polyfill`.
- Build manteve `DEP0155` relacionado a export mapping com barra final em dependencia `@vue/shared`.

### Riscos

- O dossie contem ingredientes com alternativa de compra, como `Coxao mole (ou patinho)` e `Coxao mole ou patinho (iscas)`, que precisam de decisao antes de virar item de lista de compras.
- A importacao real deve preservar imagem, status e links existentes das receitas ja publicadas.
- Nutricional deve ser tratado como dado da receita/admin, sem mudar o foco da interface do aluno para calorias/macros.

### Proximos passos

- Revisar o relatorio gerado.
- Criar importador idempotente com `--dry-run`.
- Executar escrita no Supabase somente apos autorizacao explicita.

## 2026-05-24 - Blindagem estrutural da Lista de Compras por ingrediente individual

### LLM usada

Codex

### Objetivo

Resolver de forma estrutural o erro em que receitas com mais de um ingrediente principal podiam gerar um item composto na lista de compras, como `800g de Cenoura e Beterraba`, em vez de itens individuais.

### Arquivos alterados

- `src/services/shoppingIngredientIdentity.ts`
- `src/services/planningCalculator.ts`
- `src/data/photoRecipeCatalog.ts`
- `src/components/admin/AdminIngredientEditor.vue`
- `src/components/admin/AdminMasterIngredientForm.vue`
- `src/components/admin/ShoppingCatalogForm.vue`
- `scripts/check-planning-calculator.ts`
- `scripts/audit-recipe-shopping-integrity.ts`
- `scripts/sync-photo-catalog-recipes.ts`
- `package.json`
- `docs/AI_WORKLOG.md`
- `docs/AI_DECISIONS.md`

### O que foi feito

- Criado servico compartilhado para identificar e expandir ingredientes compostos de compra em itens individuais.
- Ajustado o calculo da lista de compras para somar cada ingrediente principal pela sua fracao real no peso cru da receita.
- Ajustado o texto de preparo para listar compras principais separadas quando houver mais de um ingrediente principal.
- Atualizado o catalogo fotografico local para saladas mistas nascerem com varios ingredientes principais individuais.
- Adicionadas validacoes no admin para impedir ingrediente de receita, ingrediente mestre e item de catalogo de compras com nome composto.
- Adicionada exigencia no editor de ingredientes da receita: item que entra na lista de compras precisa ter ingrediente mestre selecionado.
- Criada auditoria `npm run audit:recipe-shopping` para detectar ingredientes compostos e ingredientes de compra sem ingrediente mestre no Supabase.
- Ajustado o sync do catalogo fotografico para vincular ingredientes mestre por nome/alias quando inserir detalhes novos.
- Adicionada opcao operacional `REPAIR_PHOTO_RECIPE_INGREDIENTS=true` no sync para substituir ingredientes existentes do catalogo fotografico pela fonte local atual.
- Apos autorizacao do usuario, executada a limpeza operacional no Supabase: as 57 receitas do catalogo fotografico foram ressincronizadas, ingredientes compostos foram separados e os ingredientes mestre faltantes foram criados/vinculados.

### Comandos rodados

- `npx vite-node --script scripts/check-planning-calculator.ts`: passou.
- `npx vite-node --script scripts/audit-recipe-shopping-integrity.ts`: falhou de forma esperada, apontando dados atuais do Supabase com ingredientes compostos e linhas sem ingrediente mestre.
- `REPAIR_PHOTO_RECIPE_INGREDIENTS=true npm run sync:photo-recipes`: passou, atualizou 57 receitas existentes no Supabase.
- `npm run audit:recipe-shopping`: passou apos a limpeza operacional.
- `npm run typecheck`: passou.
- `npm run build`: passou.

### Erros encontrados

- A auditoria confirmou que hoje existem receitas publicadas no Supabase com ingredientes compostos de salada, como `Beterraba e cenoura cruas`, e muitos ingredientes de compra sem `ingredient_id`.
- Durante a refatoracao, ingredientes individuais sem `ingredientId` chegaram a ser expandidos para lista vazia; corrigido em `shoppingIngredientIdentity.ts` antes da validacao final.

### Riscos

- O runtime se defende contra dados compostos antigos e a auditoria do Supabase passou apos a limpeza operacional autorizada.
- Receitas antigas editadas no admin podem exigir vinculacao de ingrediente mestre antes de salvar, o que e intencional para impedir recorrencia.

### Proximos passos

- Manter `npm run audit:recipe-shopping` como check antes de publicar novas importacoes de receitas.
- Revisar visualmente uma lista de compras real no app para confirmar a experiencia final do aluno.

## 2026-05-24 - Painel admin: UX por clique (P2 — pills e ícones)

### LLM usada

Claude Opus 4.7

### Objetivo

Atender o pedido original "experiência de cadastro priorizando clique em vez de digitação" sem refazer visual. Continuação da auditoria anterior, executando os itens P2 do relatório (U3, U4, U5).

### O que foi feito

- **U4 — Pills 1-4 para níveis** ([src/components/admin/AdminRecipeForm.vue](src/components/admin/AdminRecipeForm.vue)):
  - Substituídos os 4 `<input type="number">` de Custo, Tempo, Dificuldade e Versatilidade por grupos de 4 botões (`.admin-tabs` + `.admin-tab` reutilizadas do mesmo padrão de tabs já usado nas listagens).
  - Cada grupo é `role="radiogroup"` com `role="radio"` e `aria-checked`/`aria-label` nos botões.
  - Função `setLevel()` faz a atribuição reativa em `form.{costLevel,timeLevel,workLevel,practicalityLevel}`.
  - Nenhuma mudança de validação ou payload — segue `1 <= level <= 4`.

- **U5 — Pills de papel do ingrediente** ([src/components/admin/AdminIngredientEditor.vue](src/components/admin/AdminIngredientEditor.vue)):
  - Substituído o `<select>` de "Função na receita" por 4 botões pill (Principal/Complemento/Sensível/Tempero).
  - Função `setIngredientRole()` chama `applyRoleDefaults` no clique (mesmo comportamento que o select tinha no `@change`).
  - `aria-label` específico por ingrediente (`Função do ingrediente N`).

- **U3 — Subir/Descer e Remover como ícones** em 3 editores:
  - [AdminIngredientEditor.vue](src/components/admin/AdminIngredientEditor.vue): botões textuais "Subir"/"Descer"/"Remover" trocados por `.icon-button` com `chevron-up`/`chevron-down`/`trash`. Aria-label específico por linha.
  - [AdminStepEditor.vue](src/components/admin/AdminStepEditor.vue): mesma mudança aplicada aos passos.
  - [AdminMasterIngredientForm.vue](src/components/admin/AdminMasterIngredientForm.vue): mesma mudança aplicada às medidas caseiras.
  - O botão Remover usa `.icon-button--danger` (classe já existente em `runtime-overrides.css`, usada em metadados).

- **Ícones novos** ([src/components/ui/BaseIcon.vue](src/components/ui/BaseIcon.vue)):
  - Adicionados `chevron-up` e `chevron-down` ao switch de ícones.

### Arquivos alterados

- `src/components/ui/BaseIcon.vue` (2 ícones novos)
- `src/components/admin/AdminRecipeForm.vue` (pills de nível)
- `src/components/admin/AdminIngredientEditor.vue` (pills de papel + ícones de reordenação)
- `src/components/admin/AdminStepEditor.vue` (ícones de reordenação)
- `src/components/admin/AdminMasterIngredientForm.vue` (ícones de reordenação)
- `docs/AI_WORKLOG.md` (este registro)

### Migrations criadas

Nenhuma. Tudo reutilizou classes CSS globais existentes (`.admin-tabs`, `.admin-tab`, `.admin-tab--active`, `.icon-button`, `.icon-button--danger`). Sem CSS novo.

### Comandos rodados

- `npm run typecheck`: passou (exit 0).
- `npm run build`: passou (exit 0, 3.76MB / 864KB gzip — mesmo tamanho de antes, dentro da margem).

### Pendências reais que continuam abertas

- **U2** (P3): "Tipo" da receita como `<select>` fechado com opção "Outro". Não executado — atual `<input>+<datalist>` funciona e tipos arbitrários ainda são suportados intencionalmente.
- **U6** (P3): substituir `confirm()` nativo por dialog Vue custom em ~8 lugares destrutivos. Não executado — funciona, é melhoria estética sem urgência.
- **Validação manual dos 4 fluxos do PRD**: ainda requer sessão interativa com o usuário (ver entrada anterior).

### Próximo passo recomendado

1. Sessão de validação manual com `npm run dev` (4 fluxos do PRD).
2. Se quiser, U6 (dialog custom) como melhoria standalone.

---

## 2026-05-24 - Auditoria completa do painel admin e correções P0+P1

### LLM usada

Claude Opus 4.7

### Objetivo

Auditar de ponta a ponta o painel administrativo, validar o fluxo Admin → Supabase → Aluno, corrigir bugs reais e UX problemática, sem refatoração desnecessária. Seguir AGENTS.md à risca (sem ESLint/Vitest/Pinia/Tailwind, sem mexer em RLS/migrations).

### O que foi auditado

Páginas admin (13): `index`, `receitas/{index,nova,[id]}`, `ingredientes/{index,novo,[id]}`, `catalogo-compras/{index,novo,[id]}`, `metadados`, `configuracoes`, `login`.
Componentes admin (9): `AdminShell`, `AdminRecipeForm`, `AdminIngredientEditor`, `AdminStepEditor`, `AdminRecipeImageUploader`, `AdminMasterIngredientForm`, `ShoppingCatalogForm`, `ShoppingCatalogTable`, `AdminStatusBadge`.
Composables admin (6): `useAdminRecipes` (1102 linhas), `useAdminIngredients`, `useShoppingCatalog`, `useAdminSettings`, `useAdminDataTransfer`, `useAdminAuth`.
Provider do aluno: `supabaseRecipesProvider`.
RLS: migrations 0001, 0004, 0006, 0011.

### Diagnóstico inicial

Contrário à expectativa inicial ("muitos botões fake, mocks soltos, telas desconectadas"), o admin já estava 100% ligado ao Supabase em todas as rotas, com:
- RPCs atômicas `replace_recipe_tags`, `replace_recipe_ingredients`, `replace_recipe_steps`, `replace_ingredient_household_measures` em uso.
- RLS bem configurada: aluno (anon) só vê `status='published'`, admin (auth) gerencia tudo.
- Filtro `status='published'` confirmado em `supabaseRecipesProvider.listPublishedRecipes` e `getPublishedRecipeBySlug` — rascunho/arquivada não vazam.
- Validações, slug uniqueness, prevenção de publicar receita inválida.
- aria-label, loading state, error/success messages, empty states em todos lugares.
- Zero TODO/FIXME, zero `console.log`, zero `alert()`, zero botão sem handler.

### O que estava quebrado (bugs reais)

- **B1 [médio]**: `AdminMasterIngredientForm.vue` tinha dois `<textarea v-model="form.notes">` (linhas 332 "Observações" + 497 "Observações de compra"). Editar um sobrescrevia o outro.
- **B2 [menor]**: `ingredientes/index.vue` e `catalogo-compras/index.vue` liam query string via `URLSearchParams(window.location.search)` em `onMounted`, enquanto `receitas/index.vue` usava `useRoute().query`. Inconsistência (não quebrava nada porque o middleware admin-auth força client-side).
- **U1 [UX médio — armadilha]**: botão "Salvar como rascunho" em `receitas/[id].vue` na verdade só chamava `setStatus('draft')` sem salvar o formulário. Nome enganoso, podia fazer o nutricionista perder edições.

### O que foi corrigido

- **B1**: removido o `<textarea>` duplicado de "Observações de compra" em [src/components/admin/AdminMasterIngredientForm.vue](src/components/admin/AdminMasterIngredientForm.vue). O campo "Observações" da seção Informações básicas continua sendo a única origem de `form.notes`. Decidido com o usuário: era pra ser o mesmo campo, sem migration nova.
- **B2**: padronizado uso de `useRoute().query` para ler `?ativo`, `?qualidade`, `?categoria` em [src/pages/admin/ingredientes/index.vue](src/pages/admin/ingredientes/index.vue) e [src/pages/admin/catalogo-compras/index.vue](src/pages/admin/catalogo-compras/index.vue). Removido bloco `URLSearchParams` no `onMounted`.
- **U1**: renomeado o botão de "Salvar como rascunho" para "Voltar para rascunho" em [src/pages/admin/receitas/[id].vue](src/pages/admin/receitas/[id].vue#L284). Não houve mudança de comportamento — apenas alinhar o texto com o que o botão realmente faz.
- **L1 (limpeza)**: deletado `src/data/mockAdminData.ts` (297 linhas de código morto — confirmado via Grep que nenhum arquivo importava).

### Arquivos alterados

- `src/components/admin/AdminMasterIngredientForm.vue` (removido `<textarea>` duplicado)
- `src/pages/admin/receitas/[id].vue` (renomeado botão)
- `src/pages/admin/ingredientes/index.vue` (query string via useRoute)
- `src/pages/admin/catalogo-compras/index.vue` (query string via useRoute)
- `src/data/mockAdminData.ts` (DELETADO)
- `docs/AI_WORKLOG.md` (este registro)

### Migrations criadas

Nenhuma. Verificado que toda RPC necessária já existia em `0011_admin_crud_hardening.sql` (`replace_recipe_tags`, `replace_recipe_ingredients`, `replace_recipe_steps`, `replace_ingredient_household_measures`). Verificado que `shopping_catalog_items`, `ingredients`, `ingredient_household_measures` já têm RLS.

### Conexões validadas

- Admin escreve em todas as tabelas via Supabase real (composables auditados linha a linha).
- Aluno lê via `supabaseRecipesProvider.listPublishedRecipes` com `.eq('status', 'published')` — receita draft/archived não vaza.
- Storage bucket `recipe-images`: leitura pública, gerenciamento auth. Upload funcional via `AdminRecipeImageUploader`.
- Joins funcionando: `recipes → recipe_ingredients → ingredients (master) → ingredient_household_measures` e `recipes → recipe_steps`.
- Filtros `?tab=pendencias`, `?qualidade=sem-nutricao`, `?ativo=ativos` do dashboard chegam corretamente nas telas alvo (validado após correção do B2).

### Comandos rodados

- `npm run typecheck`: passou (exit 0).
- `npm run build`: passou (exit 0, build completo ~3.75MB / 864KB gzip).
- Nota AGENTS.md: não há scripts `lint` nem `test` no `package.json`. Esta tarefa não introduziu nenhum.

### Pendências reais (não executadas a pedido do usuário, para registro)

Itens P2 (UX médio valor) e P3 (nice-to-have) ficaram fora do escopo desta entrega, mas foram identificados:

- **U3**: reordenação "Subir/Descer" nos editores (`AdminIngredientEditor`, `AdminStepEditor`, `AdminMasterIngredientForm`) usa botões com texto. Trocar por ícones chevron-up/down economizaria espaço.
- **U4**: Cost/Time/Work/Practicality em `AdminRecipeForm.vue` são `<input type="number">` 1-4. Pills clicáveis (1/2/3/4) atendem melhor o pedido original de "clique em vez de digitação".
- **U5**: Papel do ingrediente em `AdminIngredientEditor.vue` é select. Pills clicáveis (Principal/Complemento/Sensível/Tempero) atendem melhor o pedido.
- **U6**: `confirm()` nativo em ~8 lugares destrutivos. Substituir por dialog Vue custom melhora a sensação premium, sem urgência.
- **U2**: "Tipo" da receita é `<input type="text">` + datalist. Tecnicamente combobox, mas pode permitir tipos inconsistentes. Migrar para select fechado com opção "Outro".

### Validação manual pendente com o usuário

Os 4 fluxos do prompt original requerem execução interativa do app, que não pode ser feita sem o usuário no loop. Quando o usuário tiver tempo, executar com `npm run dev`:

- **Fluxo 1 — Receita nova**: criar rascunho → conferir admin → conferir que aluno não vê → publicar → conferir que aluno vê → arquivar → conferir que sumiu.
- **Fluxo 2 — Ingrediente e compra**: criar/editar ingrediente → vincular em receita → alterar rendimento/quantidade → planejar no aluno → conferir lista de compras.
- **Fluxo 3 — Modo de preparo**: editar etapas → salvar → conferir aba Preparo do aluno.
- **Fluxo 4 — Ações da tabela**: clicar em cada ícone de cada linha de cada tabela admin, confirmar ação certa.

### Próximo passo recomendado

1. Sessão de validação manual com o usuário (4 fluxos acima).
2. Se quiser, executar P2 (U3+U4+U5 — chips/ícones nos editores).
3. Considerar `confirm()` → dialog Vue (U6) como melhoria standalone futura.

---

## 2026-05-24 - Correção de ingredientes compostos na lista de compras

### LLM usada

Codex

### Objetivo

Corrigir o caso em que uma salada mista, como cenoura com beterraba, gerava um item unico agregado na lista de compras em vez de itens individuais.

### Arquivos alterados

- `src/services/planningCalculator.ts`
- `src/data/photoRecipeCatalog.ts`
- `src/components/admin/AdminIngredientEditor.vue`
- `scripts/check-planning-calculator.ts`
- `docs/AI_WORKLOG.md`
- `docs/AI_DECISIONS.md`

### O que foi feito

- Ajustada a consolidacao da lista de compras para ingredientes principais usarem a fracao cadastrada no peso cru da receita.
- Adicionada defesa para dados antigos com ingredientes compostos textuais, separando nomes conhecidos e compostos genericos em itens individuais.
- Atualizado o catalogo fotografico para cadastrar saladas mistas com varios ingredientes principais, em vez de um nome composto.
- Bloqueado no editor admin o cadastro de ingrediente calculado com nome composto quando ele entra na lista de compras, para forcar linhas individuais em receitas futuras.
- Criado check especifico que valida 800g de cenoura com beterraba gerando 400g de `Cenoura` e 400g de `Beterraba`, e um composto generico novo gerando itens separados.

### Comandos rodados

- `rg` e `Get-Content` para rastrear receitas, catalogo fotografico e calculo da lista de compras.
- `npx vite-node --script scripts/check-planning-calculator.ts`: passou.
- `npm run typecheck`: passou.
- `npm run build`: passou.

### Erros encontrados

- `node --experimental-strip-types scripts/check-planning-calculator.ts` nao resolve imports TS extensionless em cadeia; o check foi rodado com `vite-node`, que ja e usado pelo projeto no script `sync:photo-recipes`.

### Avisos encontrados

- Build manteve aviso de sourcemap possivelmente incorreto em `nuxt:module-preload-polyfill`.
- Build manteve `DEP0155` relacionado a export mapping com barra final em dependencia `@vue/shared`.

### Riscos

- Planejamentos ja gerados e salvos antes desta correcao podem precisar ser gerados novamente para atualizar a lista de compras salva.
- A defesa cobre os compostos conhecidos do catalogo fotografico atual. O ideal de longo prazo e cadastrar sempre cada ingrediente individualmente no admin.

### Proximos passos

- Revisar no painel admin receitas antigas que ainda tenham ingrediente textual composto e substituir por linhas individuais.

## 2026-05-24 - Redesign do modal de receitas

### LLM usada

Codex

### Objetivo

Redesenhar a experiencia de detalhe de receita em `/receitas`: ao clicar em uma receita da lista, abrir um popup ocupando aproximadamente 95% da tela, visualmente alinhado ao prototipo enviado, mantendo tudo funcional e conectado aos dados reais.

### Arquivos alterados

- `src/pages/receitas.vue`
- `src/composables/useStudentTheme.ts`
- `src/components/layout/StudentShell.vue`
- `src/components/ui/BaseIcon.vue`
- `src/assets/css/main.css`
- `src/assets/css/student/recipe-premium.css`
- `docs/AI_WORKLOG.md`
- `docs/AI_DECISIONS.md`

### O que foi feito

- Mantido o fluxo `UI -> useRecipes() -> provider -> Supabase/mock`, sem importar mocks direto na UI.
- Reaproveitado o modal existente de `activeRecipe`, trocando a estrutura visual para o layout premium do prototipo.
- Adicionado popup com header interno, hero com imagem real da receita ou arte fallback, botao de voltar, botao de video quando houver URL, rendimento, ingredientes, modo de preparo, armazenamento, reaquecimento, nutricao quando cadastrada e acoes fixas.
- Criados helpers apenas de apresentacao para nome/meta/quantidade dos ingredientes e valores de nutricao.
- Adicionado o icone `play` ao `BaseIcon`.
- Corrigido o botao `Escuro` do modal para alternar tema de verdade, usando o mesmo estado do shell do aluno e persistindo em `meal_planner_theme`.
- Criada camada CSS escopada em `src/assets/css/student/recipe-premium.css`.
- Nenhuma migration, RLS, seed, schema, provider Supabase ou regra de calculo foi alterada.

### Comandos rodados

- `rg` e `Get-Content` para mapear `/receitas`, tipos, composables, providers e CSS relacionados.
- `npm run typecheck`: passou.
- `npm run build`: passou.
- Microsoft Edge headless via CDP em `/receitas`: simulou acesso do aluno, clicou na primeira receita e confirmou modal aberto, largura/altura em torno de 95% da viewport, seções renderizadas, scroll do fundo bloqueado, sem overflow horizontal e fechamento limpando `body.style.overflow`.
- Microsoft Edge headless via CDP em `/receitas`: revalidou com acesso do aluno definido antes da hidratacao, testou alternancia de tema no modal, persistencia em `meal_planner_theme`, fechamento limpo e ausencia de erros de console.

### Erros encontrados

- A ferramenta de navegador do plugin nao expos o `node_repl js` nesta sessao; foi usado fallback com Microsoft Edge headless via CDP.
- `npm run lint`: continua inexistente no `package.json`.
- `npm run test`: continua inexistente no `package.json`.

### Avisos encontrados

- Build manteve aviso de sourcemap possivelmente incorreto em `nuxt:module-preload-polyfill`.
- Build manteve `DEP0155` relacionado a export mapping com barra final em dependencia `@vue/shared`.

### Riscos

- A camada nova sobrescreve o modal de receita por CSS importado no fim de `main.css`; se a ordem de imports mudar, o visual deve ser conferido.
- O botao `Ver video` fica desabilitado quando a receita nao possui `referenceVideoUrl`, preservando funcionalidade sem inventar link.
- A informacao nutricional continua aparecendo somente quando existe dado cadastrado.

### Proximos passos

- Fazer uma validacao visual manual em aparelho real para pequenos ajustes finos de espaçamento.
- Considerar extrair o modal premium para componente proprio se a tela de receitas crescer mais.

## 2026-05-24 - Redesign da tela de planejamento pronto

### LLM usada

Codex

### Objetivo

Aproximar a tela `/resultado` do prototipo visual enviado, mantendo compras, preparo e porcionamento funcionais.

### Arquivos alterados

- `src/pages/resultado.vue`
- `src/components/layout/StudentShell.vue`
- `src/components/planner/result/ResultHero.vue`
- `src/components/planner/result/ResultActionStack.vue`
- `src/components/planner/result/ResultMetricChips.vue`
- `src/components/planner/result/PreparationPreview.vue`
- `src/components/planner/result/PortioningPreview.vue`
- `src/assets/css/main.css`
- `src/assets/css/student/result-ready-redesign.css`

### O que foi feito

- Criado painel visual para o heroi e a proxima acao da tela de resultado.
- Ajustadas microcopies para lista de compras, preparo e porcionamento.
- Adicionada classe de rota `app-frame--result` no shell do aluno para limitar ajustes visuais a `/resultado`.
- Criada camada CSS escopada para o redesign de resultado.
- Nenhuma regra de compra, rendimento, porcionamento, arredondamento, Supabase ou provider foi alterado.

### Comandos rodados

- `npm run typecheck`: passou.
- `npm run build`: passou.
- Tentativas de verificacao visual via Edge headless/CDP.

### Erros encontrados

- A verificacao visual automatizada de `/resultado` nao foi concluida com sucesso antes da mudanca de prioridade para `/receitas`; houve tentativa que abriu alvo interno do Edge e tentativa de screenshot que excedeu timeout.

### Avisos encontrados

- Build manteve aviso de sourcemap possivelmente incorreto em `nuxt:module-preload-polyfill`.
- Build manteve `DEP0155` relacionado a export mapping com barra final em dependencia `@vue/shared`.

### Riscos

- A tela `/resultado` passou por validacao de typecheck/build, mas ainda precisa de checagem visual manual completa com planejamento real salvo.

### Proximos passos

- Revisitar `/resultado` em navegador com um planejamento real gerado pelo fluxo `/planejar`.

## 2026-05-24 - Correcao do overflow horizontal em Compras

### LLM usada

Codex

### Objetivo

Corrigir o overflow horizontal pequeno detectado em `/compras` no mobile, sem alterar comportamento, rotas, Supabase, providers, migrations, mocks ou calculos.

### Arquivos alterados

- `src/assets/css/student/shopping.css`
- `docs/AI_WORKLOG.md`

### O que foi feito

- Lidos `AGENTS.md`, `docs/AI_PLANNER.md`, `docs/AI_WORKLOG.md` e `docs/AI_DECISIONS.md`.
- Investigada a causa do overflow com Microsoft Edge headless via CDP.
- Confirmado que `.shopping-page` usava `margin: -20px`, enquanto `.student-shell__main` aplicava padding lateral de `16px` no viewport mobile testado.
- Alterado apenas o CSS de `/compras`: margem vertical preservada em `margin-block: calc(var(--space-5) * -1)` e margem horizontal ajustada para acompanhar o padding lateral do shell com `margin-inline: calc(clamp(1rem, 3vw, 1.35rem) * -1)`.
- Revalidado em `/compras` com viewport mobile: `scrollWidth` passou de `394` para `390`, igual ao `clientWidth`.

### Comandos rodados

- `rg` para localizar seletores e arquivos relacionados a `/compras`.
- Script Node + Microsoft Edge CDP para medir elementos com overflow: identificou `.shopping-page` saindo de `left -4` ate `right 394`.
- Script Node + Microsoft Edge CDP apos a correcao: confirmou `scrollWidth: 390` e `clientWidth: 390`.
- `npm run typecheck`: passou.
- `npm run build`: passou.

### Erros encontrados

- Nenhum erro novo encontrado.
- `npm run lint`: continua inexistente no `package.json`.
- `npm run test`: continua inexistente no `package.json`.

### Avisos encontrados

- Build manteve aviso de sourcemap possivelmente incorreto em `nuxt:module-preload-polyfill`.
- Build manteve `DEP0155` relacionado a export mapping com barra final em dependencia `@vue/shared`.

### Riscos

- A mudanca altera poucos pixels de largura util da tela `/compras`, de forma intencional para remover rolagem horizontal.
- O ajuste depende do padding lateral atual de `.student-shell__main`; se esse padding mudar, a margem full-bleed de `/compras` deve ser revisada junto.
- Nenhuma tela admin foi alterada.

### Proximos passos

- Investigar warnings de hydration mismatch em redirects client-side.
- Investigar warnings de `BaseIcon`/componente anonimo no SSR de rotas admin protegidas.
- Comecar uma extracao pequena de componentes admin repetidos, se a prioridade for organizacao estrutural.

## 2026-05-24 - Checagem visual curta apos separacao do CSS

### LLM usada

Codex

### Objetivo

Verificar rapidamente as rotas principais de aluno e admin depois da separacao de `src/assets/css/main.css`, sem alterar codigo de app, CSS, Supabase, providers, migrations, rotas ou calculos.

### Arquivos alterados

- `docs/AI_WORKLOG.md`

### O que foi feito

- Lidos `AGENTS.md`, `docs/AI_PLANNER.md` e `docs/AI_WORKLOG.md`.
- Identificado que ja havia um Nuxt dev server ativo em `http://[::1]:3000` / `http://localhost:3000`, PID `40420`; nenhum processo foi encerrado.
- Como a ferramenta de navegador do plugin nao expos o `node_repl js` nesta sessao e `agent-browser` nao estava disponivel no PATH, foi usado fallback com Microsoft Edge headless via CDP.
- Capturadas telas mobile de aluno em `/acesso`, `/planejar`, `/receitas`, `/compras` e `/resultado`.
- Capturadas telas desktop de admin em `/admin/login` e redirects de `/admin` e `/admin/receitas`.
- Para rotas do aluno protegidas, foi usado perfil temporario do Edge e `localStorage` apenas nesse perfil para simular acesso ja liberado.
- Nao foi enviado formulario nem alterado dado remoto.

### Resultado visual

- `/acesso`: tela de acesso renderiza conteudo; medicao DOM nao indicou overflow horizontal.
- `/planejar`: etapa 1 renderiza com cards, bottom action e bottom nav visiveis.
- `/receitas`: biblioteca renderiza com resumo, busca, filtros e cards com imagem.
- `/compras`: tela vazia renderiza; foi detectado overflow horizontal pequeno (`scrollWidth` 394 contra `clientWidth` 390).
- `/resultado`: estado vazio renderiza com CTA e bottom nav.
- `/admin/login`: login renderiza centralizado em desktop, sem overlay e sem overflow horizontal.
- `/admin` e `/admin/receitas`: redirecionam para `/admin/login` sem tela branca.

### Comandos rodados

- `rg --files src/pages`: mapeou rotas principais.
- `Get-Content -Raw AGENTS.md`: leitura obrigatoria.
- `Get-Content -Raw docs/AI_PLANNER.md`: leitura obrigatoria.
- `Get-Content -Raw docs/AI_WORKLOG.md`: leitura obrigatoria.
- `Get-Command agent-browser`: nao encontrado.
- `Test-NetConnection 127.0.0.1 -Port 3000`: nao conectou em IPv4.
- `Invoke-WebRequest http://localhost:3000/`: passou com HTTP 200.
- `Invoke-WebRequest http://[::1]:3000/`: passou com HTTP 200.
- Script Node + Edge CDP para screenshots e checagens DOM: passou.
- Microsoft Edge headless para captura isolada de `/acesso`: passou.

### Erros encontrados

- Tentativa de iniciar novo `npm run dev` apontou que ja havia outro Nuxt dev server rodando no mesmo projeto, PID `40420`.
- Primeira tentativa do script CDP falhou por formato de modulo Node (`require` com top-level await); rerodado em ESM com sucesso.
- `agent-browser` nao estava disponivel no PATH.
- `node_repl js` nao foi exposto via descoberta de ferramenta nesta sessao.

### Avisos encontrados

- Console registrou hydration mismatch em redirecionamentos client-side: `/acesso` com acesso ja ativo redirecionando para `/planejar`; `/admin` e `/admin/receitas` redirecionando para `/admin/login`.
- Console registrou warnings de `BaseIcon`/componente anonimo durante SSR de rotas admin protegidas antes do redirect para login.
- Edge headless registrou avisos internos do navegador; sem impacto observado na pagina.

### Riscos

- A checagem admin sem sessao valida login e redirects, mas nao valida visual interno das tabelas autenticadas.
- O overflow de 4px em `/compras` deve ser investigado em etapa visual propria, com cuidado para nao mexer em cascata global sem necessidade.
- Os warnings de hidratacao parecem ligados a redirects client-side, nao diretamente a separacao do CSS, mas merecem tarefa tecnica separada.

### Proximos passos

- Corrigir ou reduzir o overflow horizontal pequeno em `/compras`, se confirmado em aparelho/navegador real.
- Fazer checagem visual autenticada do admin quando houver sessao/credenciais apropriadas.
- Investigar warnings de hydration mismatch em redirects e warnings de `BaseIcon` no SSR admin.

## 2026-05-24 - Etapa 2: separacao do CSS global por dominio

### LLM usada

Codex

### Objetivo

Separar `src/assets/css/main.css` por dominio sem alterar seletores, ordem efetiva de cascata, visual, comportamento, rotas, Supabase, providers ou calculos.

### Arquivos alterados

- `src/assets/css/main.css`
- `src/assets/css/base/tokens.css`
- `src/assets/css/base/reset.css`
- `src/assets/css/student/shell.css`
- `src/assets/css/student/planner-core.css`
- `src/assets/css/student/recipes.css`
- `src/assets/css/student/planning-flow.css`
- `src/assets/css/admin/legacy.css`
- `src/assets/css/shared/responsive.css`
- `src/assets/css/student/compact.css`
- `src/assets/css/student/ux-refresh.css`
- `src/assets/css/student/flow-polish.css`
- `src/assets/css/student/result.css`
- `src/assets/css/student/shopping.css`
- `src/assets/css/admin/panel-redesign.css`
- `src/assets/css/admin/runtime-overrides.css`
- `src/assets/css/student/planner-steps.css`
- `src/assets/css/student/catalog.css`
- `docs/AI_WORKLOG.md`

### O que foi feito

- Lidos `AGENTS.md`, `docs/AI_PLANNER.md` e `docs/AI_WORKLOG.md` antes da edicao.
- Transformado `src/assets/css/main.css` em arquivo de imports, mantendo o `@import` da fonte e a ordem original dos blocos CSS.
- Separado o CSS em arquivos por dominio aproximado: `base`, `student`, `admin` e `shared`.
- Mantidos seletores, declaracoes e ordem de cascata sem renomear classes nem reescrever regras.
- Validada mecanicamente a reconstrucao dos blocos: 9495 linhas de payload CSS original foram recompostas pelos chunks, com correspondencia linha a linha.
- Nenhum componente, rota, provider, migration, seed, client Supabase, mock ou regra de calculo foi alterado.

### Comandos rodados

- `Get-Content -Raw AGENTS.md`: leitura obrigatoria.
- `Get-Content -Raw docs/AI_PLANNER.md`: leitura obrigatoria.
- `Get-Content -Raw docs/AI_WORKLOG.md`: leitura obrigatoria.
- Script PowerShell de separacao e validacao do CSS: passou, com `Chunk content matches original style payload: True`.
- `rg --files src/assets/css`: confirmou os novos arquivos CSS.
- `npm run typecheck`: passou.
- `npm run build`: passou.

### Erros encontrados

- `npm run lint`: nao existe no `package.json`.
- `npm run test`: nao existe no `package.json`.
- Nenhum erro novo encontrado em `typecheck` ou `build`.

### Avisos encontrados

- Build manteve aviso de sourcemap possivelmente incorreto em `nuxt:module-preload-polyfill`.
- Build manteve `DEP0155` relacionado a export mapping com barra final em dependencia `@vue/shared`.

### Riscos

- A separacao preserva a cascata por imports; mudar a ordem de `src/assets/css/main.css` pode alterar visual.
- Alguns arquivos ainda sao camadas historicas grandes, especialmente `student/compact.css`, `student/ux-refresh.css` e `admin/runtime-overrides.css`.
- A classificacao por dominio e aproximada porque o CSS original ja misturava aluno, admin e overrides em camadas sucessivas.
- Nao foi feito teste visual em navegador nesta etapa; a verificacao ficou em equivalencia mecanica, typecheck e build.

### Proximos passos

- Fazer uma checagem visual curta nas rotas principais de aluno e admin.
- Atualizar `AGENTS.md`/`docs/AI_PLANNER.md` em uma proxima etapa para refletir a nova estrutura de CSS, se desejado.
- Extrair componentes admin repetidos de baixo risco, como `AdminPageHeader`, `AdminSummaryCard`, `AdminTableState` e `AdminFilters`.
- Criar testes para `planningCalculator.ts` antes de qualquer mudanca em compra, rendimento, porcionamento ou arredondamento.

## 2026-05-24 - Estabilizacao inicial documental

### LLM usada

Codex

### Objetivo

Criar base persistente para futuras LLMs trabalharem com seguranca no Planejador de Refeicoes, sem alterar comportamento funcional, visual, Supabase, providers, migrations ou calculos.

### Arquivos alterados

- `AGENTS.md`
- `docs/AI_PLANNER.md`
- `docs/AI_WORKLOG.md`
- `docs/AI_DECISIONS.md`

### O que foi feito

- Auditada a estrutura do projeto.
- Identificada stack real: Nuxt 4.4.5, Vue 3.5.34, TypeScript, Supabase, Nitro/Vercel e CSS custom global.
- Registrado que nao ha Pinia, Tailwind, lint ou testes configurados.
- Documentado o gargalo principal em `src/assets/css/main.css`, com multiplas camadas aluno/admin e classes globais sensiveis.
- Registrados arquivos grandes e ordem segura de refatoracao.
- Criado contrato operacional para futuras LLMs em `AGENTS.md`.
- Nenhum arquivo de runtime foi alterado.

### Comandos rodados

- `npm run`: listou scripts disponiveis.
- `npm run typecheck`: passou.
- `npm run build`: passou.
- `git status --short`: falhou porque o diretorio atual nao e um repositorio Git.

### Erros encontrados

- `npm run lint`: nao existe no `package.json`.
- `npm run test`: nao existe no `package.json`.
- `git status --short`: `fatal: not a git repository (or any of the parent directories): .git`.

### Avisos encontrados

- Build avisou que sourcemap pode estar incorreto em `nuxt:module-preload-polyfill`.
- Build emitiu `DEP0155` relacionado a export mapping com barra final em dependencia `@vue/shared`.

### Riscos

- `src/assets/css/main.css` e grande e possui camadas sobrepostas; mudancas visuais pequenas podem ter efeito colateral.
- `src/pages/planejar.vue` concentra muita logica de fluxo e template, aumentando risco em alteracoes simples.
- `src/services/planningCalculator.ts` e critico e ainda nao possui testes automatizados detectados.
- Composables admin concentram CRUD e mapeamentos Supabase em arquivos grandes.

### Proximos passos

- Separar CSS por dominio sem mudar seletores nem visual.
- Extrair componentes admin repetidos de baixo risco.
- Criar testes para `planningCalculator.ts` antes de alterar qualquer regra de calculo.
- Depois reduzir gradualmente tamanho de `planejar.vue`.
## 2026-05-24 - Investigacao de deploy Vercel desatualizado

### LLM usada

Codex

### Objetivo

Investigar por que o deploy da Vercel parecia extremamente desatualizado.

### Arquivos alterados

- `docs/AI_WORKLOG.md`

### O que foi feito

- Verificado que a raiz do projeto nao e um repositorio Git normal.
- Identificado que o Git usado para publicacao esta separado em `_publish-gitdir-20260523-0128`, apontando para `.publish-worktree-20260523-0128`.
- Confirmado que `origin/main` no GitHub esta no commit `98b8e06 Remove tela de acesso do aluno`.
- Comparada a raiz atual com `.publish-worktree-20260523-0128` e encontrados diversos arquivos locais novos que nao estao no historico publicado.
- Verificado que a CLI `vercel` nao esta disponivel no PATH local.

### Comandos rodados

- `git --git-dir='_publish-gitdir-20260523-0128' --work-tree='.publish-worktree-20260523-0128' status --short --branch`
- `git --git-dir='_publish-gitdir-20260523-0128' --work-tree='.publish-worktree-20260523-0128' log --oneline --decorate -n 12`
- `git --git-dir='_publish-gitdir-20260523-0128' ls-remote origin refs/heads/main`
- `git --git-dir='_publish-gitdir-20260523-0128' --work-tree='.' status --short --branch`
- `vercel ls`

### Erros encontrados

- `vercel ls`: falhou porque `vercel` nao esta instalado ou nao esta no PATH.
- Tentativas de usar `git -C .publish-worktree-20260523-0128` falharam porque a pasta nao contem `.git`; o gitdir esta separado.

### Riscos

- A Vercel provavelmente esta deployando o GitHub `main`, que contem apenas o commit `98b8e06`, enquanto a versao atual do app esta em alteracoes locais nao publicadas.
- A raiz atual contem muitas alteracoes locais, incluindo arquivos de Supabase e regras de calculo; publicar tudo sem revisar pode enviar mudancas sensiveis.
- O worktree `.publish-worktree-20260523-0128` tem `package.json` mais antigo que a raiz atual.

### Proximos passos

- Revisar o diff local com cuidado.
- Separar o que deve entrar em deploy agora.
- Criar commit a partir da raiz correta ou corrigir o worktree de publicacao.
- Enviar para `origin/main` e disparar novo deploy na Vercel.

## 2026-05-24 - Publicacao da raiz atual no GitHub

### LLM usada

Codex

### Objetivo

Resolver o deploy desatualizado publicando no GitHub a versao atual da raiz do projeto, que estava fora do historico usado pela Vercel.

### Arquivos alterados

- `docs/AI_DECISIONS.md`
- `docs/AI_WORKLOG.md`
- Arquivos versionaveis de projeto em `src`, `scripts`, `supabase`, `docs`, `public` e configuracoes raiz.

### O que foi feito

- Confirmado que `origin/main` estava no commit antigo `98b8e06`.
- Rodado `npm run typecheck` com sucesso.
- Rodado `npm run build` com sucesso.
- Preparado commit a partir da raiz atual usando o gitdir de publicacao existente.
- Mantidos fora do commit `.env`, logs, caches, builds locais, `node_modules`, worktrees temporarios e `fotos_pratos`.

### Comandos rodados

- `npm run typecheck`
- `npm run build`
- `git --git-dir='_publish-gitdir-20260523-0128' --work-tree='.' add -A -- .gitignore .env.example package.json package-lock.json nuxt.config.ts tsconfig.json README.md prd_planejador_de_refeicoes.md AGENTS.md docs scripts src supabase public`
- `git --git-dir='_publish-gitdir-20260523-0128' --work-tree='.' diff --cached --stat`
- `git --git-dir='_publish-gitdir-20260523-0128' --work-tree='.' status --short --branch`

### Erros encontrados

- Nenhum erro em typecheck ou build.

### Avisos encontrados

- Build manteve aviso de sourcemap possivelmente incorreto em `nuxt:module-preload-polyfill`.
- Build manteve `DEP0155` relacionado a export mapping com barra final em dependencia `@vue/shared`.
- Git avisou que alguns arquivos podem trocar LF por CRLF no Windows.

### Riscos

- O commit e grande porque consolida mudancas locais acumuladas que ainda nao tinham sido publicadas.
- A publicacao inclui migrations e seed ja existentes localmente; revisar ambiente Supabase de producao continua sendo responsabilidade operacional separada.

### Proximos passos

- Fazer push para `origin/main`.
- Confirmar que o remoto aponta para o novo commit.
- Aguardar ou verificar novo deploy na Vercel pelo painel, ja que a CLI `vercel` nao esta disponivel localmente.
