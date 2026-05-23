# PRD — Planejador de Refeições

## 1. Visão geral

O **Planejador de Refeições** é uma PWA fechada para alunos, criada para transformar as refeições já prescritas no aplicativo de dieta em um planejamento prático de preparo.

O produto **não prescreve dieta**, **não cadastra pacientes**, **não substitui o app de dieta** e **não calcula substituições nutricionais para o aluno**.

A função central é ajudar o aluno a responder:

> Com base nas opções e pesos que aparecem na minha dieta, o que eu preciso comprar, preparar e separar para cumprir minhas porções?

A primeira versão será focada apenas em **preparações proteicas**. A aplicação já deve nascer com arquitetura preparada para, no futuro, receber **carboidratos** e, em uma fase posterior, uma lógica de **montagem de marmitas** combinando proteína + carboidrato.

---

## 2. Contexto do problema

Hoje, o aluno recebe uma dieta em outro aplicativo. Nessa dieta, ele vê uma refeição com uma lista de substituições equivalentes.

Exemplo:

```text
Patinho Moído Refogado — 100g
Sobrecoxa Assada — 75g
Lombo Suíno Desfiado — 79g
Carne de Panela — 87g
Almôndegas de Carne — 91g
Frango Desfiado — 105g
```

A equivalência nutricional já está resolvida no app de dieta. O problema começa depois.

Na prática, o aluno costuma fazer algo como:

> Vou comprar 1kg de frango, preparar e ver se dá.

Só que ele não sabe:

- quantas porções precisa preparar;
- quantos gramas cada porção deve ter;
- quanto alimento cru precisa comprar;
- quanto aquele alimento perde no preparo;
- quantos ingredientes complementares serão necessários;
- se a comida preparada vai durar até o fim do período desejado;
- como separar as porções sem diluir a quantidade prescrita.

O erro mais comum é a comida acabar antes do previsto. Quando isso acontece, o aluno tenta “fazer render” reduzindo o peso das porções. Na prática, ele deixa de seguir a dieta mesmo achando que está seguindo.

O Planejador resolve essa ponte entre **dieta prescrita** e **execução real na cozinha**.

---

## 3. Objetivo do produto

Criar uma aplicação mobile-first, simples e objetiva, onde o aluno consiga:

1. escolher quais preparações deseja fazer;
2. informar o peso de cada preparação exatamente como aparece no app de dieta;
3. informar quantas porções quer preparar;
4. gerar automaticamente uma lista de compras consolidada;
5. visualizar o modo de preparo escalado;
6. visualizar o porcionamento final com clareza absoluta.

A promessa funcional do produto é:

> Pare de cozinhar no olho. Escolha suas preparações, informe os pesos da sua dieta e saiba exatamente o que comprar, preparar e separar.

---

## 4. Escopo do MVP

### 4.1 Incluído no MVP

- PWA mobile-first.
- Acesso fechado por senha única para alunos.
- Login/admin separado apenas para o nutricionista.
- Módulo inicial: **Planejador de Proteínas**.
- Biblioteca de receitas disponível para consulta.
- Cards de receitas com foto, busca, filtros e atributos visuais.
- Seleção de receitas.
- Preenchimento manual do peso que aparece na dieta.
- Preenchimento da quantidade de porções.
- Possibilidade de múltiplos pesos por receita.
- Revisão antes de gerar.
- Resultado com quatro abas: **Resumo**, **Compras**, **Preparo**, **Porcionamento**.
- Lista de compras consolidada.
- Modo de preparo escalado.
- Aviso de receita travada.
- Orientação para pesar a preparação pronta antes de separar porções.
- Orientação para não diluir porções se render menos.
- Botão para copiar lista de compras.
- Botão para copiar planejamento/porcionamento.
- Persistência local do planejamento atual via localStorage.
- Painel admin para cadastrar e editar receitas.
- Upload/troca de foto da receita.
- Informação nutricional aproximada por 100g pronto como ficha técnica da receita, para controle no admin e consulta secundária pelo aluno.
- Banco de dados em Supabase.
- Deploy na Vercel.

### 4.2 Fora do MVP

- Cadastro individual de alunos.
- Histórico em nuvem por aluno.
- Favoritos.
- Prescrição de dieta.
- Cálculo de dieta.
- Cálculo de equivalência nutricional para o aluno.
- Comunidade.
- Dashboard de acompanhamento nutricional.
- Integração com app de dieta externo.
- Combinações sugeridas automáticas.
- PDF.
- Montagem de marmitas.
- Planejamento de carboidratos visível ao aluno.

---

## 5. Princípios de produto

### 5.1 Clareza acima de sofisticação

O aluno precisa entender rapidamente o que fazer. O produto não deve parecer uma calculadora técnica, uma planilha ou um app clínico.

### 5.2 Mobile-first real

A experiência principal será no celular. Todos os botões, cards, inputs e abas precisam funcionar bem em tela pequena.

### 5.3 Poucos cliques

A jornada deve ser direta:

```text
Entrar → Escolher receitas → Informar peso e porções → Revisar → Gerar planejamento
```

### 5.4 Receita travada

O aluno pode escolher entre receitas, mas não deve alterar livremente a receita.

A receita cadastrada tem ficha técnica, rendimento, ingredientes e modo de preparo. Alterar óleo, creme, queijo, requeijão, molhos ou outros ingredientes calóricos muda o resultado da preparação.

### 5.5 Peso sempre pronto

Todos os pesos informados pelo aluno são pesos de **alimento pronto**, iguais aos que aparecem no app de dieta.

A lista de compras converte isso para ingredientes crus.

### 5.6 Porções, não potes

A linguagem do produto deve usar **porções**.

Evitar:

- pote;
- unidade;
- marmita, no MVP;
- porção pequena/grande;
- por dia;
- semana obrigatória.

O aluno pode planejar 4, 10, 13, 14, 28 ou qualquer quantidade de porções.

---

## 6. Público-alvo

Alunos de acompanhamento nutricional que já recebem dieta em um aplicativo externo e precisam transformar a prescrição em preparo semanal ou quinzenal.

Perfil comum:

- busca emagrecimento;
- tem dificuldade de organização alimentar;
- costuma cozinhar no improviso;
- não sabe calcular quanto alimento cru comprar;
- não entende rendimento pós-cocção;
- não sabe distribuir porções corretamente;
- precisa de uma ferramenta simples, visual e prática.

---

## 7. Jornada do aluno

## 7.1 Acesso

O aluno entra no link do app.

A primeira tela pede uma senha única.

Campos:

- senha de acesso;
- botão “Entrar no planejador”.

Regras:

- Não há cadastro individual de aluno.
- Não há login por e-mail para aluno.
- A senha única libera o acesso ao app.
- A senha deve ser configurável por variável de ambiente ou tabela de configurações no Supabase.

Texto sugerido:

```text
Planejador de Proteínas
Monte suas porções a partir do que aparece na sua dieta.
Sem cozinhar no olho. Sem torcer para dar.
```

---

## 7.2 Tela inicial

Após entrar, o aluno cai diretamente no **Planejador de Proteínas**.

Não deve existir uma tela perguntando qual módulo ele quer usar no MVP.

A tela inicial deve ter:

- título;
- explicação breve;
- aviso de peso pronto;
- botão para começar planejamento;
- botão secundário para acessar biblioteca de receitas.

Texto sugerido:

```text
Pare de cozinhar no olho.

Escolha as preparações, informe o peso que aparece na sua dieta e diga quantas porções quer preparar.

Todos os pesos informados são de alimento pronto.
A lista de compras calcula os ingredientes crus necessários.
```

Botões:

```text
Começar planejamento
Ver receitas
```

---

## 7.3 Etapa 1 — Escolher receitas

O primeiro passo real da jornada é escolher as receitas.

O aluno vê uma lista de cards com preparações proteicas.

Cada card deve conter:

- foto;
- nome da receita;
- tipo: frango, carne, suíno etc.;
- tags;
- atributos em barrinhas visuais;
- estado selecionado/não selecionado.

Atributos iniciais:

- custo;
- tempo;
- trabalho;
- praticidade.

Escala visual recomendada: 1 a 4 barrinhas.

Filtros/pills:

```text
Todos | Frango | Carne | Suíno | Fácil | Rápido | Barato | Congela bem
```

Busca:

```text
Buscar receita...
```

Aviso de variedade:

```text
Para facilitar sua semana, recomendamos escolher de 2 a 3 preparações.
```

Regras:

- 1 receita: permitido, mas mostrar aviso de que pode ficar repetitivo.
- 2 ou 3 receitas: faixa recomendada.
- 4 ou mais receitas: permitido, mas mostrar aviso de que pode deixar o preparo mais trabalhoso.
- Nenhum bloqueio por quantidade de receitas, exceto zero receitas.

Mensagens:

```text
Você escolheu apenas uma preparação. Pode funcionar, mas pode ficar repetitivo.
```

```text
Boa escolha. Duas ou três preparações costumam facilitar a semana.
```

```text
Você escolheu muitas preparações. Isso pode deixar o preparo mais trabalhoso.
```

---

## 7.4 Etapa 2 — Informar peso e quantidade de porções

Depois de escolher as receitas, o aluno deve preencher cada receita selecionada.

Para cada receita:

- peso pronto que aparece na dieta;
- quantidade de porções que deseja preparar.

Exemplo:

```text
Frango Desfiado

Peso que aparece na sua dieta:
105g

Quantas porções quer preparar?
5 porções
```

Regras:

- O campo de peso começa vazio.
- Não deve existir peso sugerido.
- O aluno preenche com o peso que aparece no app de dieta.
- Peso sempre em gramas.
- Peso sempre de alimento pronto.
- Sem decimal.
- O peso deve ser múltiplo de 5g.
- Quantidade de porções deve ser número inteiro maior ou igual a 1.

### 7.4.1 Múltiplos pesos por receita

A mesma receita pode ter mais de um peso no mesmo planejamento.

Exemplo:

```text
Frango Desfiado
- 5 porções de 105g
- 3 porções de 180g
```

Isso resolve casos em que almoço e jantar têm quantidades diferentes.

Deve existir botão:

```text
+ Adicionar outro peso para essa receita
```

---

## 7.5 Etapa 3 — Revisão

Antes de gerar o resultado, o app deve mostrar uma tela de revisão.

Exemplo:

```text
Revise seu planejamento

Frango Desfiado
- 5 porções de 105g
- 3 porções de 180g

Carne de Panela
- 4 porções de 90g

Almôndegas de Frango
- 6 porções de 95g

Total: 18 porções
```

Botões:

```text
Editar
Gerar planejamento
```

Aviso obrigatório nessa etapa:

```text
Siga as receitas como estão. Não adicione óleo, azeite, creme, requeijão, queijo, molhos ou ingredientes extras fora da receita.
```

---

## 7.6 Resultado

Após gerar, o app direciona o aluno para a tela de Resultado.

A tela deve ter quatro abas:

```text
Resumo | Compras | Preparo | Porcionamento
```

---

# 8. Abas do Resultado

## 8.1 Aba Resumo

Mostra o planejamento final em linguagem direta.

Exemplo:

```text
Seu planejamento

Frango Desfiado
- 5 porções de 105g
- 3 porções de 180g

Carne de Panela
- 4 porções de 90g

Almôndegas de Frango
- 6 porções de 95g

Total: 18 porções
```

Botão:

```text
Editar planejamento
```

---

## 8.2 Aba Compras

Mostra a lista de compras consolidada.

A lista deve somar todos os ingredientes de todas as receitas escolhidas.

Exemplo:

```text
Lista de compras

Proteínas:
- 2kg de peito de frango cru
- 1,2kg de patinho moído cru
- 800g de sobrecoxa crua

Hortifruti:
- 4 tomates médios
- 3 cebolas médias
- 1 cenoura média

Outros:
- 2 sachês de molho de tomate
- 1 caixa de creme de leite
- 3 colheres de sopa de óleo

Temperos à gosto:
sal, pimenta, páprica, alho em pó, cheiro-verde e ervas secas.
```

Regras:

- A lista é sempre consolidada.
- Não perguntar se o aluno quer lista por receita.
- Ingredientes principais devem ser arredondados para cima.
- Ingredientes principais em gramas devem ser mostrados em g ou kg.
- Ingredientes complementares devem preferir medida caseira quando possível.
- Temperos entram como “à gosto”.
- Ingredientes calóricos/sensíveis não são “à gosto”.

Botão obrigatório:

```text
Copiar lista de compras
```

---

## 8.3 Aba Preparo

Mostra cada receita selecionada com preparo escalado.

Para cada receita:

- nome;
- total pronto necessário;
- compra sugerida do ingrediente principal;
- ingredientes escalados;
- modo de preparo;
- aviso de receita travada;
- orientação para pesar depois de pronto.

Exemplo:

```text
Frango Desfiado

Você vai preparar:
- 5 porções de 105g
- 3 porções de 180g

Total pronto necessário: 1.065g
Compra sugerida: 1,5kg de peito de frango cru

Ingredientes:
- 1,5kg de peito de frango cru
- 3 tomates médios
- 1 cebola grande
- 1 cenoura média
- 1 colher de sopa de óleo
- temperos à gosto

Modo de preparo:
1. Cozinhe o frango com os temperos e vegetais da receita.
2. Desfie bem depois de cozido.
3. Reduza o caldo até ficar úmido, sem excesso de líquido.
4. Pese a preparação pronta antes de separar as porções.
```

Aviso obrigatório:

```text
Siga a receita como está.
Não adicione óleo, azeite, creme, requeijão, queijo, molhos ou ingredientes extras fora da receita.
Alterar esses itens muda o valor final da preparação.
```

Orientação obrigatória:

```text
Depois de pronto, pese a preparação antes de separar as porções.
```

---

## 8.4 Aba Porcionamento

Essa é a tela de conferência final.

Ela precisa dizer exatamente o que o aluno deve separar.

Exemplo:

```text
Ao final do preparo, separe:

Frango Desfiado
- 5 porções de 105g
- 3 porções de 180g

Carne de Panela
- 4 porções de 90g

Almôndegas de Frango
- 6 porções de 95g

Total: 18 porções
```

Regras de linguagem:

- Usar “porções”.
- Não usar “potes”.
- Não usar “unidades”.
- Não usar “marmitas”.

Avisos obrigatórios:

```text
Se render menos do que o esperado, não reduza o peso das porções para fazer render. Separe as porções no peso planejado.
```

```text
Se sobrar preparação pronta, guarde como porção extra. Não aumente o peso das porções planejadas.
```

Botão obrigatório:

```text
Copiar planejamento
```

---

# 9. Biblioteca de Receitas

Além do fluxo de planejamento, deve existir uma área chamada **Receitas**.

Objetivo: permitir que o aluno consulte modo de preparo e detalhes das receitas, mesmo quando não está montando um planejamento.

Cada receita deve ter uma página ou card expandido com:

- foto;
- nome;
- tipo;
- tags;
- custo;
- tempo;
- trabalho;
- praticidade;
- se congela bem;
- receita base;
- ingredientes;
- modo de preparo;
- armazenamento;
- forma de reaquecer;
- aviso de receita travada.

A biblioteca deve ter:

- busca por nome;
- busca por tipo/tag;
- visual mobile-first.

---

# 10. Regras de cálculo

## 10.1 Total pronto necessário

Para cada receita selecionada:

```text
Total pronto necessário = soma de (peso por porção × quantidade de porções)
```

Exemplo:

```text
Frango Desfiado
5 porções de 105g = 525g
3 porções de 180g = 540g
Total pronto necessário = 1.065g
```

---

## 10.2 Conversão para ingrediente cru

Cada receita deve ter um rendimento base.

Exemplo:

```text
1.000g de frango cru → 750g de frango pronto
```

Fórmula:

```text
Ingrediente cru necessário = (total pronto necessário / rendimento pronto base) × quantidade crua base
```

Exemplo:

```text
Total pronto necessário: 1.065g
Receita base: 1.000g cru → 750g pronto

Ingrediente cru necessário = (1.065 / 750) × 1.000
Ingrediente cru necessário = 1.420g
```

Depois aplicar arredondamento para cima.

---

## 10.3 Arredondamento de compra

Ingredientes principais devem arredondar para cima.

Regra inicial:

- carnes, frango, suíno: arredondar para cima de 100g em 100g;
- carboidratos futuros: arredondar para cima de 50g ou 100g, a definir na fase de carboidratos;
- ingredientes complementares em medida caseira: arredondar para cima para medida inteira prática;
- ingredientes críticos em gramas: arredondar com menor margem, de 5g em 5g quando necessário.

Exemplo:

```text
1.420g de frango cru → mostrar 1,5kg de frango cru
```

---

## 10.4 Ingredientes complementares

Ingredientes complementares devem ser escalados a partir da receita base.

Exemplo:

```text
Receita base:
1kg frango cru
2 tomates médios
1 cebola média
1 cenoura pequena

Escala: 1,5x
Resultado:
1,5kg frango cru
3 tomates médios
2 cebolas médias ou 1 cebola grande, conforme cadastro
1 cenoura média
```

O sistema deve evitar exibir medidas inúteis, como:

```text
1,37 tomate
0,42 cenoura
```

Quando possível, usar medidas caseiras cadastradas.

---

## 10.5 Ingredientes críticos

Ingredientes críticos são aqueles que não podem ser alterados livremente porque mudam o valor final da preparação.

Exemplos:

- óleo;
- azeite;
- manteiga;
- creme de leite;
- requeijão;
- queijo;
- leite de coco;
- molho barbecue;
- molhos calóricos;
- aveia;
- farinha;
- açúcar;
- mel.

Esses ingredientes devem aparecer com marcação visual:

```text
não aumentar
seguir receita
ingrediente sensível
```

---

## 10.6 Temperos à gosto

Temperos não calóricos ou de impacto desprezível entram como “à gosto”.

Exemplos:

- sal;
- pimenta;
- páprica;
- alho em pó;
- cheiro-verde;
- orégano;
- ervas secas;
- manjericão;
- louro.

Na lista de compras:

```text
Temperos à gosto: sal, pimenta, páprica, alho em pó, cheiro-verde e ervas secas.
```

---

# 11. Persistência local

Como o aluno não terá conta individual, o planejamento atual deve ser salvo via **localStorage**.

Funções:

- salvar automaticamente a cada etapa;
- continuar planejamento;
- editar planejamento;
- limpar planejamento;
- novo planejamento.

Mensagem sugerida:

```text
Este planejamento fica salvo apenas neste aparelho.
```

Regras:

- Não existe histórico em nuvem no MVP.
- O planejamento salvo localmente não precisa ser associado ao aluno.
- Se o aluno trocar de celular ou navegador, perde o planejamento local.

---

# 12. Autenticação e acesso

## 12.1 Aluno

- Acesso por senha única.
- Sem cadastro individual.
- Sem e-mail.
- Sem dados pessoais.

Implementação sugerida:

- variável de ambiente `PUBLIC_STUDENT_ACCESS_PASSWORD`, ou
- tabela `app_settings` no Supabase com senha/hash de acesso.

Para MVP, pode começar simples com senha configurada em ambiente.

## 12.2 Admin

- Apenas um usuário admin: o nutricionista.
- Login admin via Supabase Auth.
- Admin pode criar, editar, publicar, arquivar receitas e trocar imagens.

---

# 13. Painel Admin

O painel admin deve permitir cadastrar e editar receitas.

## 13.1 Campos da receita

Campos obrigatórios:

- nome;
- slug;
- categoria: inicialmente proteína;
- tipo: frango, carne, suíno etc.;
- status: rascunho, publicada, arquivada;
- foto principal;
- descrição curta;
- rendimento base cru;
- rendimento pronto estimado;
- ingredientes;
- modo de preparo;
- armazenamento;
- forma de reaquecer;
- custo;
- tempo;
- trabalho;
- praticidade;
- congela bem;
- informação nutricional aproximada por 100g pronto: kcal, proteína, carboidratos, gorduras, fibras, sódio e observações nutricionais;
- tags.

A informação nutricional não deve virar o centro da experiência do aluno, não prescreve dieta e não deve ser usada para calcular equivalência nutricional, porções, compras, preparo ou porcionamento.

## 13.2 Ingredientes da receita

Cada ingrediente deve ter:

- nome;
- categoria de compra: Proteínas, Hortifruti, Outros etc.;
- quantidade base;
- unidade;
- tipo: principal, complementar, crítico, tempero;
- se é crítico;
- se entra na lista de compras;
- regra de arredondamento;
- ordem de exibição.

## 13.3 Status da receita

- Rascunho: aparece apenas no admin.
- Publicada: aparece para o aluno.
- Arquivada: fica salva, mas não aparece para o aluno.

---

# 14. Modelo de dados sugerido — Supabase

## 14.1 Tabela `recipe_categories`

Uso: preparar arquitetura para proteínas, carboidratos e futuros grupos.

Campos:

```sql
id uuid primary key default gen_random_uuid(),
name text not null,
slug text unique not null,
description text,
is_active boolean default true,
sort_order integer default 0,
created_at timestamptz default now(),
updated_at timestamptz default now()
```

Registros iniciais:

```text
Proteínas
Carboidratos, futuro/inativo no MVP
```

---

## 14.2 Tabela `recipes`

Campos:

```sql
id uuid primary key default gen_random_uuid(),
category_id uuid references recipe_categories(id),
name text not null,
slug text unique not null,
short_description text,
type text,
status text not null default 'draft',
image_path text,
base_raw_weight_g numeric not null,
base_ready_weight_g numeric not null,
base_yield_note text,
cost_level integer check (cost_level between 1 and 4),
time_level integer check (time_level between 1 and 4),
work_level integer check (work_level between 1 and 4),
practicality_level integer check (practicality_level between 1 and 4),
freezes_well boolean default false,
storage_instructions text,
reheat_instructions text,
locked_recipe_warning text,
kcal_per_100g numeric,
protein_g_per_100g numeric,
carbs_g_per_100g numeric,
fat_g_per_100g numeric,
fiber_g_per_100g numeric,
sodium_mg_per_100g numeric,
nutrition_notes text,
sort_order integer default 0,
created_at timestamptz default now(),
updated_at timestamptz default now()
```

Status permitido:

```text
draft
published
archived
```

---

## 14.3 Tabela `recipe_tags`

Campos:

```sql
id uuid primary key default gen_random_uuid(),
name text not null,
slug text unique not null,
created_at timestamptz default now()
```

Exemplos:

```text
Frango
Carne
Suíno
Fácil
Rápido
Barato
Congela bem
Receita sensível
```

---

## 14.4 Tabela `recipe_tag_links`

Campos:

```sql
recipe_id uuid references recipes(id) on delete cascade,
tag_id uuid references recipe_tags(id) on delete cascade,
primary key (recipe_id, tag_id)
```

---

## 14.5 Tabela `recipe_ingredients`

Campos:

```sql
id uuid primary key default gen_random_uuid(),
recipe_id uuid references recipes(id) on delete cascade,
name text not null,
shopping_category text not null,
ingredient_role text not null,
base_quantity numeric,
unit text,
is_critical boolean default false,
is_free_seasoning boolean default false,
include_in_shopping_list boolean default true,
rounding_step numeric,
rounding_mode text default 'up',
display_name text,
notes text,
sort_order integer default 0,
created_at timestamptz default now(),
updated_at timestamptz default now()
```

`ingredient_role` permitido:

```text
main
complement
critical
seasoning
```

`rounding_mode` permitido:

```text
up
nearest
manual
none
```

---

## 14.6 Tabela `recipe_steps`

Campos:

```sql
id uuid primary key default gen_random_uuid(),
recipe_id uuid references recipes(id) on delete cascade,
step_number integer not null,
instruction text not null,
created_at timestamptz default now(),
updated_at timestamptz default now()
```

---

## 14.7 Tabela `app_settings`

Campos:

```sql
id uuid primary key default gen_random_uuid(),
key text unique not null,
value text,
created_at timestamptz default now(),
updated_at timestamptz default now()
```

Usos possíveis:

```text
student_access_password_hash
student_access_enabled
app_maintenance_mode
```

Para MVP, a senha também pode vir de variável de ambiente.

---

## 14.8 Storage

Bucket sugerido:

```text
recipe-images
```

Uso:

- armazenar fotos das receitas;
- permitir substituição da imagem no admin;
- exibir imagens publicamente ou via signed URL, dependendo da política escolhida.

Para simplificar MVP, imagens de receitas publicadas podem ser públicas.

---

# 15. RLS e segurança

## 15.1 Leitura do aluno

O aluno precisa conseguir ler apenas receitas publicadas.

Política sugerida:

- permitir leitura pública/anônima de `recipes` onde `status = 'published'`;
- permitir leitura pública/anônima de ingredientes, steps e tags vinculados a receitas publicadas.

Como o app é fechado por senha única, a barreira real do aluno está na interface. Ainda assim, a leitura pública deve ser limitada a receitas publicadas.

## 15.2 Admin

Somente usuário admin autenticado no Supabase pode:

- criar receitas;
- editar receitas;
- arquivar receitas;
- subir imagens;
- editar ingredientes;
- editar etapas de preparo;
- editar tags.

---

# 16. Estrutura de rotas sugerida

Exemplo em Nuxt:

```text
/
/acesso
/planejar
/receitas
/receitas/[slug]
/resultado
/admin/login
/admin
/admin/receitas
/admin/receitas/nova
/admin/receitas/[id]
/admin/configuracoes
```

Como o aluno usa senha única, as rotas públicas do aluno podem ser protegidas por um estado local de acesso.

---

# 17. Estrutura de componentes sugerida

```text
components/
  layout/
    AppShell.vue
    TopBar.vue
    BottomAction.vue
    MainTabs.vue

  planner/
    PlannerIntro.vue
    RecipeSelectionStep.vue
    RecipeCard.vue
    RecipeFilters.vue
    RecipeSearch.vue
    PortionInputStep.vue
    PortionRecipeForm.vue
    PortionLineInput.vue
    PlannerReview.vue
    ResultTabs.vue
    ResultSummary.vue
    ResultShoppingList.vue
    ResultPreparation.vue
    ResultPortioning.vue

  recipes/
    RecipeLibrary.vue
    RecipeDetail.vue
    RecipeAttributes.vue
    RecipeLockedWarning.vue

  admin/
    AdminRecipeForm.vue
    AdminIngredientEditor.vue
    AdminStepEditor.vue
    AdminImageUpload.vue
    AdminStatusBadge.vue
```

---

# 18. Estado local sugerido

O planejamento atual pode ser representado assim:

```ts
type PlanningLine = {
  weightReadyG: number
  portions: number
}

type PlanningRecipe = {
  recipeId: string
  lines: PlanningLine[]
}

type CurrentPlanning = {
  selectedRecipes: PlanningRecipe[]
  generatedAt?: string
}
```

Salvar em localStorage:

```text
meal_planner_current_plan
meal_planner_student_access
```

---

# 19. Serviços/funções de cálculo

Criar um serviço puro para cálculos.

Arquivo sugerido:

```text
src/services/planningCalculator.ts
```

Funções:

```ts
calculateReadyWeight(lines)
calculateRawNeeded(readyWeight, baseRawWeight, baseReadyWeight)
roundUp(value, step)
scaleIngredient(ingredient, scale)
consolidateShoppingList(planningRecipes)
generatePortioningText(planning)
generateShoppingText(shoppingList)
```

Essas funções devem ser testáveis, sem depender da UI.

---

# 20. Regras de validação

## 20.1 Seleção de receitas

- Não pode avançar sem selecionar ao menos uma receita.
- 1 receita: aviso, mas permite.
- 2 a 3 receitas: ideal.
- 4 ou mais: aviso, mas permite.

## 20.2 Peso

- Obrigatório.
- Número inteiro.
- Múltiplo de 5.
- Maior que zero.
- Sempre considerado alimento pronto.

## 20.3 Porções

- Obrigatório.
- Número inteiro.
- Maior ou igual a 1.

## 20.4 Receita

- Só receitas publicadas aparecem para aluno.
- Receita arquivada não aparece.
- Receita em rascunho não aparece.

---

# 21. UX/UI

## 21.1 Direção visual

A interface deve seguir estética escura, esportiva e editorial, com visual limpo e direto.

Paleta sugerida:

```text
Blood Red: #C01A1A
Red: #E8442A
Orange: #FF734A
Lilac: #D88CEE
Dark: #111111
Card: #202020
Text: #F6F1EA
Muted: #B7AEA4
```

## 21.2 Mobile-first

- Max-width no desktop simulando app mobile.
- Botões grandes.
- Inputs confortáveis.
- Cards tocáveis.
- Sticky bottom action nas etapas de fluxo.
- Abas horizontais roláveis no resultado.
- Filtros em pills.

## 21.3 Linguagem

A linguagem deve ser direta e operacional.

Preferir:

```text
Peso que aparece na sua dieta
Quantas porções quer preparar?
Ao final do preparo, separe:
Lista de compras consolidada
```

Evitar:

```text
calorias
macros
potes
unidades
marmitas
por dia
semana obrigatória
```

---

# 22. Conteúdos fixos importantes

## 22.1 Aviso de peso pronto

```text
Todos os pesos informados são de alimento pronto, como aparece na sua dieta.
A lista de compras calcula os ingredientes crus necessários.
```

## 22.2 Aviso de receita travada

```text
Siga a receita como está.
Não adicione óleo, azeite, creme, requeijão, queijo, molhos ou ingredientes extras fora da receita.
Alterar esses itens muda o valor final da preparação.
```

## 22.3 Aviso de rendimento

```text
Depois de pronto, pese a preparação antes de separar as porções.
```

## 22.4 Aviso de falta de rendimento

```text
Se render menos do que o esperado, não reduza o peso das porções para fazer render. Separe as porções no peso planejado.
```

## 22.5 Aviso de sobra

```text
Se sobrar preparação pronta, guarde como porção extra. Não aumente o peso das porções planejadas.
```

---

# 23. Critérios de aceite

## 23.1 Acesso

- Dado que o aluno abre o app, quando digita a senha correta, então acessa o Planejador de Proteínas.
- Dado que o aluno não digitou a senha, então não consegue acessar a área interna do app.

## 23.2 Seleção de receitas

- Dado que o aluno está na etapa de seleção, quando busca por “frango”, então o app mostra receitas compatíveis.
- Dado que o aluno seleciona uma receita, então o card muda visualmente para selecionado.
- Dado que o aluno seleciona apenas uma receita, então o app mostra aviso de repetição.
- Dado que o aluno seleciona mais de três receitas, então o app mostra aviso de preparo mais trabalhoso.

## 23.3 Peso e porções

- Dado que o aluno escolheu receitas, quando avança, então cada receita aparece com campos de peso e quantidade.
- Dado que o aluno informa peso não múltiplo de 5, então o sistema corrige ou exibe erro.
- Dado que o aluno deseja dois pesos para a mesma receita, quando clica em “Adicionar outro peso”, então uma nova linha aparece.
- Dado que o aluno deixa peso vazio, então não consegue revisar.

## 23.4 Resultado

- Dado que o aluno gera o planejamento, então o app mostra abas de Resumo, Compras, Preparo e Porcionamento.
- Dado que existem ingredientes iguais em mais de uma receita, então a lista de compras soma esses ingredientes.
- Dado que o cálculo de ingrediente principal resulta em valor quebrado, então a compra arredonda para cima.
- Dado que o aluno abre a aba Porcionamento, então vê apenas porções e pesos, sem linguagem de pote/unidade.

## 23.5 Copiar

- Dado que o aluno clica em “Copiar lista de compras”, então a lista é copiada para a área de transferência.
- Dado que o aluno clica em “Copiar planejamento”, então o porcionamento final é copiado.

## 23.6 LocalStorage

- Dado que o aluno preenche um planejamento e fecha o app, quando retorna no mesmo navegador, então o planejamento atual pode ser recuperado.
- Dado que o aluno clica em “Limpar planejamento”, então o localStorage do planejamento atual é apagado.

## 23.7 Admin

- Dado que o admin cria uma receita publicada, então ela aparece para o aluno.
- Dado que o admin arquiva uma receita, então ela deixa de aparecer para o aluno.
- Dado que o admin edita ingredientes/rendimento de uma receita, então os próximos planejamentos usam os novos dados.

---

# 24. Estratégia de implementação em fases — Supabase-first

O projeto **não deve ser construído como um app mockado para depois ser migrado**. Isso costuma gerar retrabalho, desalinhamento de tipos, telas dependentes de dados falsos e uma segunda implementação desnecessária.

A estratégia correta é:

> O app nasce com estrutura real de Supabase desde o primeiro ciclo. Dados mockados, se existirem, devem ser temporários, isolados e descartáveis com um único prompt.

## 24.1 Regra principal de arquitetura

A UI nunca deve importar dados mockados diretamente.

Errado:

```text
components/RecipeCard.vue importa mockRecipes.ts
pages/planejar.vue importa mockRecipes.ts
```

Correto:

```text
UI → composable/useRecipes.ts → providers/recipesProvider.ts → Supabase
```

Se houver mock, ele deve ficar atrás da mesma interface de provider.

```text
UI
  ↓
useRecipes()
  ↓
recipesProvider
  ↓
supabaseRecipesProvider ou mockRecipesProvider temporário
```

Assim, para remover mocks depois, basta apagar o provider temporário e deixar o Supabase como fonte única.

---

## 24.2 Fase 0 — Contratos, tipos e Supabase schema

Objetivo: criar a base real do projeto antes da interface crescer.

Entregas:

- criar projeto Nuxt 4 + TypeScript;
- configurar Supabase client;
- criar tipos de domínio;
- criar migrations do Supabase;
- criar seeds iniciais reais;
- criar bucket `recipe-images`;
- criar provider de receitas com contrato único;
- criar serviço de cálculo independente da UI;
- criar `mockRecipesProvider` apenas como fallback temporário, se necessário.

Arquivos esperados:

```text
src/types/recipe.ts
src/types/planner.ts
src/services/planningCalculator.ts
src/providers/recipes/recipesProvider.ts
src/providers/recipes/supabaseRecipesProvider.ts
src/providers/recipes/mockRecipesProvider.ts  # temporário
src/providers/recipes/index.ts
src/composables/useRecipes.ts
src/composables/usePlannerState.ts
src/composables/useStudentAccess.ts
supabase/migrations/0001_initial_schema.sql
supabase/seed.sql
```

Regra:

> Mesmo que a UI comece com poucos dados, ela deve consumir o provider como se os dados viessem do Supabase.

---

## 24.3 Fase 1 — Supabase real com seeds

Objetivo: ter receitas reais no banco desde o começo.

Entregas:

- aplicar migrations;
- criar categorias iniciais: Proteínas e Carboidratos;
- deixar Carboidratos inativo/invisível no MVP;
- criar tags iniciais;
- cadastrar pelo menos 3 a 6 receitas de proteína como seed;
- cadastrar ingredientes e passos dessas receitas;
- testar leitura de receitas publicadas;
- testar imagens temporárias no Storage ou usar placeholders controlados.

A primeira versão funcional deve ser capaz de buscar receitas publicadas do Supabase.

Mock só pode existir para desenvolvimento local se o Supabase não estiver configurado.

---

## 24.4 Fase 2 — Jornada do aluno consumindo provider real

Objetivo: construir o fluxo completo do aluno, mas sem acoplar a UI ao mock.

Entregas:

- acesso por senha única;
- tela inicial;
- escolha de receitas;
- busca e filtros;
- preenchimento de peso e porções;
- múltiplos pesos por receita;
- revisão;
- resultado com abas;
- lista de compras consolidada;
- preparo escalado;
- porcionamento;
- biblioteca de receitas;
- copiar lista e planejamento;
- localStorage do planejamento atual.

Regra:

> A jornada pode ser desenvolvida com o provider alternando entre Supabase e mock, mas a interface não deve saber qual fonte está sendo usada.

---

## 24.5 Fase 3 — Admin real

Objetivo: permitir cadastrar e editar receitas no Supabase.

Entregas:

- login admin via Supabase Auth;
- rotas protegidas de admin;
- listar receitas;
- criar receita;
- editar receita;
- arquivar receita;
- publicar receita;
- editar ingredientes;
- editar passos de preparo;
- editar tags;
- upload/troca de imagem no bucket `recipe-images`.

Regras:

- apenas receitas `published` aparecem para aluno;
- `draft` aparece apenas no admin;
- `archived` fica salvo, mas invisível para aluno;
- o admin será usado apenas pelo nutricionista no MVP.

---

## 24.6 Fase 4 — Remoção dos mocks

Objetivo: apagar todos os dados mockados quando o Supabase estiver estável.

Critério para remover mocks:

- Supabase configurado;
- receitas publicadas no banco;
- leitura funcionando;
- admin funcionando ou seeds suficientes para operar;
- nenhum componente importando mock diretamente;
- provider Supabase validado.

Arquivos removíveis:

```text
src/providers/recipes/mockRecipesProvider.ts
src/dev/mockRecipes.ts
src/data/mockRecipes.ts
qualquer flag DATA_PROVIDER=mock
qualquer fallback visual baseado em dados falsos
```

O app deve ficar assim:

```text
UI → useRecipes() → supabaseRecipesProvider
```

---

## 24.7 Fase 5 — PWA e deploy

Objetivo: deixar o app pronto para uso real pelos alunos.

Entregas:

- manifest;
- ícones;
- theme color;
- loading states;
- error states;
- estados vazios;
- ajustes mobile;
- deploy na Vercel;
- variáveis de ambiente configuradas;
- teste em celular real.

---

## 24.8 Fase 6 — Carboidratos

Objetivo futuro: liberar o Planejador de Carboidratos sem refazer a arquitetura.

Entregas futuras:

- ativar categoria Carboidratos;
- cadastrar receitas/preparações de carboidrato;
- usar a mesma jornada: escolher item, informar peso pronto, informar porções, gerar compras/preparo/porcionamento;
- manter proteína como módulo principal até a expansão estar validada.

---

# 25. Stack e arquitetura recomendada

Considerando o uso de Antigravity, Supabase e Vercel:

```text
Nuxt 4
TypeScript
Pinia
Supabase
Vercel
CSS custom ou Tailwind
PWA module
```

## 25.1 Arquitetura Supabase-first

O app deve nascer com Supabase configurado desde o início.

Variáveis recomendadas:

```text
NUXT_PUBLIC_SUPABASE_URL=
NUXT_PUBLIC_SUPABASE_ANON_KEY=
NUXT_STUDENT_ACCESS_PASSWORD=
NUXT_PUBLIC_DATA_PROVIDER=supabase
```

`NUXT_PUBLIC_DATA_PROVIDER` pode aceitar temporariamente:

```text
supabase
mock
```

Mas a UI não pode depender disso diretamente.

A decisão de provider deve ficar isolada em:

```text
src/providers/recipes/index.ts
```

Exemplo conceitual:

```ts
export const recipesProvider =
  config.public.dataProvider === 'mock'
    ? mockRecipesProvider
    : supabaseRecipesProvider
```

Depois, para remover mocks, esse arquivo passa a exportar diretamente:

```ts
export const recipesProvider = supabaseRecipesProvider
```

## 25.2 Regra de ouro

Nenhum componente deve importar:

```text
mockRecipes
mockRecipesProvider
```

Componentes só podem consumir:

```text
useRecipes()
```

ou dados já retornados por composables/stores.

## 25.3 Mock permitido, mas descartável

Mock data só é permitido se cumprir todos os critérios:

- mesmo shape dos dados vindos do Supabase;
- isolado em pasta `src/dev` ou `src/providers/recipes/mockRecipesProvider.ts`;
- nunca importado diretamente por componentes;
- removível sem reescrever tela;
- usado apenas para fallback/dev;
- não usado como fonte principal do projeto.

---

# 26. Prompt técnico resumido para Antigravity — Supabase-first

Construa uma PWA mobile-first chamada **Planejador de Refeições**, inicialmente focada em **Planejador de Proteínas**.

A aplicação deve nascer pronta para Supabase desde o primeiro ciclo. Não construa um app inteiro em dados mockados para depois migrar.

## Regras de arquitetura

- Crie Supabase schema/migrations no início.
- Crie provider real `supabaseRecipesProvider` desde o início.
- Se usar mock, ele deve ser apenas fallback temporário atrás da mesma interface de provider.
- Nenhum componente pode importar mock data diretamente.
- A UI deve consumir receitas apenas por `useRecipes()` ou `recipesProvider`.
- O mock deve ser removível depois com um único prompt.

## Fluxo principal do aluno

1. tela de acesso por senha única;
2. tela inicial com explicação curta;
3. seleção de receitas em cards com foto, busca, filtros e atributos visuais;
4. preenchimento manual do peso pronto que aparece na dieta e quantidade de porções;
5. suporte a múltiplos pesos por receita;
6. revisão do planejamento;
7. resultado com abas: Resumo, Compras, Preparo e Porcionamento.

## Regras do produto

- O app não prescreve dieta.
- O app não calcula equivalência nutricional para o aluno.
- O aluno informa os pesos que já aparecem no aplicativo de dieta.
- Todos os pesos informados são de alimento pronto.
- A lista de compras converte para ingredientes crus.
- A linguagem deve usar “porções”, nunca “potes” ou “unidades”.
- A lista de compras deve ser consolidada.
- Ingredientes principais arredondam para cima.
- Temperos são à gosto.
- Ingredientes críticos devem ter aviso para não aumentar.
- Receita é travada.
- O planejamento atual deve persistir em localStorage.
- O admin será apenas um usuário, via Supabase Auth.
- O banco será Supabase e deploy na Vercel.

## Estrutura mínima esperada

```text
src/types/recipe.ts
src/types/planner.ts
src/services/planningCalculator.ts
src/providers/recipes/recipesProvider.ts
src/providers/recipes/supabaseRecipesProvider.ts
src/providers/recipes/mockRecipesProvider.ts  # temporário e isolado
src/providers/recipes/index.ts
src/composables/useRecipes.ts
src/composables/usePlannerState.ts
src/composables/useStudentAccess.ts
supabase/migrations/0001_initial_schema.sql
supabase/seed.sql
```

Use o protótipo HTML existente como referência visual e de fluxo, mas reestruture em componentes, estado, providers e serviços de cálculo.

---

# 26.1 Prompt futuro para apagar mocks

Quando o Supabase estiver configurado e validado, usar este prompt no Antigravity:

```text
Remova completamente todos os dados mockados do projeto.

Regras:
- apagar mockRecipesProvider.ts;
- apagar qualquer arquivo mockRecipes.ts ou pasta src/dev relacionada a receitas mockadas;
- remover a flag NUXT_PUBLIC_DATA_PROVIDER;
- remover qualquer branch provider === 'mock';
- deixar supabaseRecipesProvider como única fonte de receitas;
- garantir que todos os componentes continuem consumindo useRecipes();
- garantir que nenhum componente importe dados mockados diretamente;
- manter os tipos de domínio, serviços de cálculo e UI sem alteração funcional;
- rodar checagem de TypeScript e corrigir imports quebrados.

Resultado esperado:
UI → useRecipes() → supabaseRecipesProvider
```

---

# 27. Definição final do produto

O Planejador de Refeições é uma ferramenta de execução alimentar.

Ele pega aquilo que já está prescrito no app de dieta e transforma em:

- receitas escolhidas;
- pesos por porção;
- quantidade total de porções;
- compra necessária;
- preparo escalado;
- porcionamento final.

O objetivo não é ensinar nutrição dentro do app. O objetivo é fazer o aluno parar de improvisar na cozinha.

A experiência precisa terminar com uma resposta clara:

> Ao final do preparo, separe exatamente estas porções.
