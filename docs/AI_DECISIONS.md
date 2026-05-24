# AI_DECISIONS

## 2026-05-24 - Area do aluno sem tela de acesso

Decisao: remover a tela `/acesso`, o middleware global de acesso do aluno e a chave `NUXT_STUDENT_ACCESS_PASSWORD`.

Motivo: o usuario solicitou explicitamente remover a tela de login/acesso porque ela estava bloqueando o uso. Para o MVP, a area do aluno deve abrir direto no fluxo de planejamento, enquanto o admin permanece com autenticacao propria.

Decisao complementar: manter o redirecionamento da raiz `/` para `/planejar`.

Motivo: sem a barreira de acesso, a entrada mais direta para o aluno e o planejamento por peso pronto, com lista de compras, preparo e porcionamento depois.

## 2026-05-24 - Chave simples de acesso do aluno

Decisao: definir a chave padrao de acesso do aluno como `1234567`, com suporte a sobrescrita por `NUXT_STUDENT_ACCESS_PASSWORD`.

Motivo: o acesso atual do aluno e uma barreira simples para liberar o planejador, nao uma autenticacao completa. O fallback evita tela quebrada quando a variavel de ambiente nao estiver configurada.

Decisao complementar: a tela `/acesso` deve falar em `Chave de acesso`, nao em login tecnico.

Motivo: o aluno precisa entender que esta entrando no planejador para transformar peso pronto em lista de compras, preparo e porcionamento. A microcopy deve ser operacional e alinhada ao produto.

## 2026-05-24 - Observacoes de ingredientes precisam ter utilidade pratica

Decisao: nao usar categoria de compra como observacao visivel do ingrediente no detalhe da receita.

Motivo: dizer `Cebola, Vegetais` nao ajuda o aluno a comprar, preparar ou porcionar. A observacao deve reduzir atrito pratico, nao apenas preencher a interface.

Decisao complementar: medidas caseiras devem ser cadastradas na tabela propria `ingredient_household_measures` e exibidas no detalhe da receita quando existirem.

Motivo: o sistema ja possui modelagem especifica para medidas caseiras. Usar essa estrutura permite cadastrar referencias como `1 unidade media`, `1 colher de sopa`, `1 concha pequena` ou `1 escumadeira`, sem misturar esse dado com notas tecnicas de importacao.

Decisao complementar: medidas caseiras exibidas ao cliente devem ser tratadas como aproximadas.

Motivo: tamanho de alimento, corte, marca e utensilio variam. A interface deve ajudar na cozinha sem fingir precisao absoluta.

## 2026-05-24 - Remover linguagem de bloqueio da receita

Decisao: remover textos visiveis que tratam a receita como bloqueada, fixa ou proibida de ajustar, tanto da experiencia do aluno quanto dos textos padrao.

Motivo: a proposta do app e permitir que o aluno use o peso pronto prescrito para adaptar porcoes e preparo proporcionalmente. Linguagem de bloqueio conflita com essa proposta e passa uma sensacao errada de proibicao.

Decisao complementar: manter o campo legado `locked_recipe_warning` no codigo/schema, mas tratar seu conteudo como orientacao de preparo.

Motivo: remover/renomear coluna exigiria migration e aumentaria risco desnecessario. A mudanca necessaria neste momento e de produto e linguagem, nao de schema.

## 2026-05-24 - Textos importados nao devem expor detalhes tecnicos ao cliente

Decisao: ingredientes de receitas importadas nao devem receber observacoes tecnicas como `Dossie: ... | quantidade original: ...`.

Motivo: esse texto e util apenas para auditoria de importacao e nao ajuda o cliente no preparo, porcionamento ou lista de compras. Informacoes internas devem ficar em scripts, relatorios ou logs, nao em campos que podem aparecer na interface.

Decisao complementar: a orientacao da receita deve dizer que o aluno usa o peso pronto da dieta para definir as porcoes e pode ajustar o preparo mantendo quantidades proporcionais.

Motivo: a proposta do app e transformar a dieta prescrita em planejamento pratico. O texto anterior, que orientava a nao alterar a receita, conflita com o uso esperado do produto.

## 2026-05-24 - Importacao do dossie de carboidratos

Decisao: importar `carboidratos-engenharia-hibrida.md` por um script proprio e idempotente, `scripts/import-carb-dossier.ts`, mantendo o mesmo padrao do importador de proteinas.

Motivo: o dossie de carboidratos possui estrutura recorrente, com peso pronto total, tabela nutricional da receita, tabela por ingrediente e modo de preparo. Um script especifico reduz importacao manual, preserva rastreabilidade e permite dry run antes da escrita real.

Decisao complementar: `feijao` foi importado como nova receita, sem reaproveitar slug de `feijao-preto`.

Motivo: o dossie descreve feijao carioca. Mapear para feijao preto misturaria receitas com ingredientes e preparo diferentes, afetando lista de compras e preparo.

Decisao complementar: em receitas de carboidratos, `base_raw_weight_g` foi calculado pela soma dos ingredientes medidos do dossie.

Motivo: varias receitas incluem complementos como cenoura, milho, couve, leite ou azeite. Somar os itens medidos preserva melhor a proporcao usada para lista de compras e preparo do que usar apenas o ingrediente principal.

## 2026-05-24 - Dossie de receitas entra por auditoria seca antes de importacao

Decisao: tratar o dossie `cardapio-engenharia-hibrida.md` primeiro com um script de auditoria seca, gerando relatorio em `docs/AI_RECIPE_DOSSIER_IMPORT_REPORT.md`, antes de criar qualquer importacao real.

Motivo: o dossie altera dados operacionais sensiveis de receitas: peso pronto, ingredientes de lista de compras, preparo, porcionamento indireto e nutricao. A etapa seca permite revisar pareamentos de slugs, receitas novas, alternativas de compra e ingredientes medidos sem tocar em Supabase, migrations, RLS, seeds ou regras de calculo.

Decisao complementar: a importacao real, quando autorizada, deve ser idempotente e preservar imagem, status e links existentes das receitas ja publicadas.

Motivo: varias receitas do dossie ja existem no catalogo fotografico com slugs historicos diferentes. Sobrescrever detalhes sem preservar metadados pode quebrar experiencia do aluno ou apagar trabalho administrativo.

## 2026-05-24 - Importacao real do dossie via script idempotente

Decisao: executar a importacao real do dossie no Supabase por meio de `scripts/import-recipe-dossier.ts`, com dry run antes da escrita e reexecucao idempotente apos a escrita.

Motivo: a importacao altera dados publicados de receitas e ingredientes. O script centraliza parsing, pareamento de slugs, upsert de ingredientes mestre, preservacao de imagem/status/video existentes e substituicao segura de ingredientes/passos pelas RPCs ja existentes.

Decisao complementar: ingredientes com alternativa textual de compra, como `Coxao mole (ou patinho)` e `Coxao mole ou patinho (iscas)`, foram normalizados para compra como `Coxao mole`, com `Patinho` como alias.

Motivo: a lista de compras nao deve gerar item composto ou alternativa ambigua. O alias preserva busca/vinculo administrativo, enquanto a compra e o porcionamento continuam com um item individual.

Decisao complementar: as 3 receitas novas do dossie foram inseridas como `published`.

Motivo: o pedido foi executar a integracao completa do dossie. As receitas novas possuem ingredientes, peso pronto, preparo e nutricao suficientes para o fluxo do aluno; imagens podem ser adicionadas depois sem bloquear compra, preparo e porcionamento.

## 2026-05-24 - Manter stack atual

Decisao: manter Nuxt 4, Vue 3, TypeScript, Supabase e CSS custom global.

Motivo: a tarefa e estabilizacao inicial, nao reconstrucao. Nao ha pedido para trocar stack, instalar Tailwind, adicionar Pinia ou redesenhar telas.

## 2026-05-24 - Preservar Supabase e calculos

Decisao: nao alterar migrations, seeds, RLS, providers Supabase ou `src/services/planningCalculator.ts` nesta etapa.

Motivo: Supabase e calculo sao areas de alto risco funcional. Qualquer mudanca em compra, rendimento, porcionamento ou arredondamento deve ter testes.

## 2026-05-24 - Primeira etapa apenas documental

Decisao: executar somente a criacao de documentacao operacional: `AGENTS.md`, `docs/AI_PLANNER.md`, `docs/AI_WORKLOG.md` e `docs/AI_DECISIONS.md`.

Motivo: o projeto precisa de contrato persistente para Codex e Claude Code antes de refatoracoes.

## 2026-05-24 - Adiar split de CSS para etapa 2

Decisao: nao separar `src/assets/css/main.css` nesta primeira etapa.

Motivo: o CSS possui multiplas camadas aluno/admin e classes globais compartilhadas. A separacao deve ser feita em uma tarefa propria, mantendo seletores e ordem de importacao para preservar o visual.

## 2026-05-24 - Redesign visual sem alterar dados reais

Decisao: implementar os redesigns das telas do aluno como camadas visuais escopadas, mantendo composables, providers, Supabase, mocks atras de provider e regras de calculo intactos.

Motivo: as tarefas pediam mudanca estetica com funcionalidade preservada. A forma mais segura e reaproveitar os dados ja carregados por `usePlannerState()` e `useRecipes()` e trocar apenas template/CSS dos blocos visuais.

## 2026-05-24 - Receita premium continua sendo modal da biblioteca

Decisao: manter o clique no card de `/receitas` abrindo um modal conectado ao `activeRecipe` ja carregado pela biblioteca, em vez de criar rota ou consulta direta nova.

Motivo: o fluxo existente ja carrega receitas publicadas via `useRecipes() -> provider -> Supabase/mock`. Reaproveitar esse estado evita duplicar acesso a dados e preserva o fallback local atras do provider.

## 2026-05-24 - Tema do aluno centralizado em composable

Decisao: centralizar o estado claro/escuro do aluno em `useStudentTheme()`, usado pelo shell e pelo modal premium de receitas.

Motivo: o prototipo inclui controle de tema no topo do popup. Usar o mesmo estado e a mesma chave `meal_planner_theme` evita botoes visuais sem acao e mantem comportamento consistente entre telas.

## 2026-05-24 - Ingredientes compostos nao viram item unico de compra

Decisao: tratar ingredientes principais compostos como itens de compra individuais, usando a fracao cadastrada de cada ingrediente no peso cru da receita. No admin, bloquear novos ingredientes calculados com nome composto quando entram na lista de compras.

Motivo: a lista de compras precisa refletir itens reais de mercado. Uma receita como cenoura com beterraba deve gerar `Cenoura` e `Beterraba` separadamente, nunca um item agregado como `Cenoura e Beterraba`. O caminho correto para receitas futuras e cadastrar cada ingrediente em sua propria linha.

## 2026-05-24 - Lista de compras depende de identidade de ingrediente

Decisao: itens que entram na lista de compras devem ser individuais e, no admin, devem apontar para um ingrediente mestre sempre que forem salvos como ingrediente calculado.

Motivo: a lista de compras, o preparo, o porcionamento, o catalogo de compras e as receitas compartilham a mesma entidade operacional: o ingrediente comprado. Sem identidade individual, o sistema pode agregar nomes compostos, perder categoria/arredondamento e gerar compra errada. A regra agora tem tres camadas: defesa no calculo para dados antigos, validacao no admin para dados novos e auditoria para detectar dados remanescentes no Supabase.

## 2026-05-24 - Limpar Supabase apenas com autorizacao explicita

Decisao: executar alteracao remota para substituir `recipe_ingredients` existentes no Supabase somente apos autorizacao explicita do usuario.

Motivo: a auditoria mostrou dados publicados antigos com ingredientes compostos e sem `ingredient_id`, mas substituir detalhes de receitas no banco pode sobrescrever edicoes administrativas. O usuario autorizou a limpeza operacional; o sync do catalogo fotografico foi executado com `REPAIR_PHOTO_RECIPE_INGREDIENTS=true`, criou/vinculou ingredientes mestre faltantes e a auditoria passou.
## 2026-05-24 - Publicar a raiz atual como fonte de deploy

Decisao: usar a raiz atual do projeto como conteudo correto para `origin/main`, em vez do worktree antigo `.publish-worktree-20260523-0128`.

Motivo: o GitHub `main` estava parado no commit `98b8e06`, enquanto as mudancas atuais do app estavam locais e fora do historico publicado. Como a Vercel deploya a partir do GitHub, atualizar `origin/main` e o caminho mais direto para resolver o deploy desatualizado.

Decisao complementar: publicar apenas arquivos de projeto versionaveis, deixando fora `.env`, logs, caches, builds locais, `node_modules`, worktrees temporarios e fotos brutas fora de `public`.

Motivo: o objetivo e atualizar producao sem vazar segredo local nem enviar artefatos gerados pela maquina.

## 2026-05-24 - Lista de Compras tem fallback local de leitura

Decisao: a Lista de Compras do aluno deve usar um provider estatico de leitura quando Supabase nao estiver configurado ou quando `NUXT_PUBLIC_DATA_PROVIDER=mock`.

Motivo: o fluxo do aluno nao deve ficar vazio com a mensagem `Supabase nao configurado` quando o ambiente publico nao tiver as variaveis do Supabase. O fallback continua atras de `useShoppingCatalog() -> provider`, sem importacao direta de mock por componente.

Decisao complementar: operacoes administrativas de escrita no fallback devem falhar com mensagem clara.

Motivo: criar, editar, ativar ou excluir itens da Lista de Compras exige Supabase para persistencia real. Permitir escrita apenas em memoria poderia dar falsa confirmacao no admin.
