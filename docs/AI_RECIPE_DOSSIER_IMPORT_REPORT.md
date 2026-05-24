# Relatorio seco de importacao do dossie de receitas

Gerado em: 2026-05-24T18:41:05.805Z
Arquivo analisado: `c:\Users\Vítor Velame\Downloads\cardapio-engenharia-hibrida.md`

Este relatorio nao grava dados no Supabase, nao altera migrations e nao altera regras de compra, preparo ou porcionamento.

## Resumo

- Receitas lidas do dossie: 15
- Receitas que parecem ja existir no catalogo local: 12
- Receitas novas candidatas: 3
- Ingredientes medidos unicos detectados: 37

## Receitas existentes para enriquecer

| Receita no dossie | Slug atual | Peso pronto atual -> dossie | Ingredientes atual -> dossie | Passos atual -> dossie | Nutricao atual |
|---|---|---:|---:|---:|---|
| Almôndegas de Carne | `almondegas-carne` | 720g -> 968g | 1 -> 7 | 2 -> 4 | vazia; dossie preenche |
| Almôndegas de Frango | `almondegas-frango` | 760g -> 968g | 1 -> 7 | 2 -> 5 | vazia; dossie preenche |
| Carne de Panela | `carne-panela` | 700g -> 1,2kg | 1 -> 8 | 2 -> 6 | vazia; dossie preenche |
| Filé Mignon Suíno Acebolado | `file-mignon-suino` | 780g -> 1kg | 1 -> 5 | 2 -> 4 | vazia; dossie preenche |
| Frango com Creme de Milho | `frango-creme-milho` | 820g -> 1,3kg | 1 -> 6 | 2 -> 5 | vazia; dossie preenche |
| Frango Desfiado | `frango-desfiado` | 750g -> 880g | 1 -> 5 | 2 -> 5 | vazia; dossie preenche |
| Frango Moído | `frango-moido` | 760g -> 930g | 1 -> 7 | 2 -> 6 | vazia; dossie preenche |
| Lombo Suíno Barbecue | `lombo-barbecue` | 720g -> 900g | 1 -> 5 | 2 -> 6 | vazia; dossie preenche |
| Patinho Moído | `patinho-moido` | 700g -> 880g | 1 -> 7 | 2 -> 5 | vazia; dossie preenche |
| Sobrecoxa Assada | `sobrecoxa-assada` | 720g -> 682g | 1 -> 6 | 2 -> 6 | vazia; dossie preenche |
| Strogonoff de Frango | `strogonoff-frango` | 850g -> 1,2kg | 1 -> 9 | 2 -> 6 | vazia; dossie preenche |
| Tilápia Grelhada | `tilapia-grelhada` | 850g -> 832g | 1 -> 4 | 2 -> 4 | vazia; dossie preenche |

## Receitas novas candidatas

| Receita | Slug sugerido | Peso pronto | Ingredientes | Passos |
|---|---|---:|---:|---:|
| Strogonoff de Carne | `strogonoff-de-carne` | 1,2kg | 9 | 6 |
| Iscas de Carne Aceboladas com Pimentão e Tomate | `iscas-de-carne-aceboladas-com-pimentao-e-tomate` | 1,3kg | 7 | 5 |
| Iscas de Frango Aceboladas com Pimentão e Tomate | `iscas-de-frango-aceboladas-com-pimentao-e-tomate` | 1,3kg | 7 | 5 |

## Ingredientes medidos detectados

### Proteínas

- Coxão mole (ou patinho) (1kg)
- Coxão mole ou patinho (iscas) (1kg)
- Filé de tilápia (1kg)
- Filé mignon suíno (1kg)
- Lombo suíno (1kg)
- Patinho (tiras finas) (1kg)
- Patinho moído (1kg)
- Peito de frango (1kg)
- Peito de frango (cubos) (1kg)
- Peito de frango (iscas) (1kg)
- Peito de frango moído (1kg)
- Sobrecoxa de frango (com osso e pele) (1kg)

### Laticínios

- Creme de leite light (Nestlé Levíssimo) (200g)
- Ovo inteiro (55g)

### Carboidratos

- Farelo de aveia (45g)
- Milho verde (lata, escorrido) (200g)

### Vegetais

- Alho (20g)
- Alho (30g)
- Cebola (100g)
- Cebola (150g)
- Cebola (240g)
- Cebola (300g)
- Cebola (80g)
- Cebola (rodelas — cama da assadeira) (200g)
- Extrato de tomate (30g)
- Pimentão (misto) (240g)
- Salsinha fresca (10g)
- Suco de limão (30g)
- Tomate (100g)
- Tomate (150g)
- Tomate (240g)

### Temperos

- Azeite de oliva (10g)
- Azeite de oliva (15g)
- Ketchup (30g)
- Molho barbecue (Heinz) (100g)
- Mostarda amarela (15g)
- Shoyu (30g)

## Pontos que precisam de decisao antes da importacao real

- Almôndegas de Carne: slug do dossie `almondegas-de-carne` deve atualizar a receita existente `almondegas-carne`, preservando imagem/status atuais.
- Almôndegas de Frango: slug do dossie `almondegas-de-frango` deve atualizar a receita existente `almondegas-frango`, preservando imagem/status atuais.
- Carne de Panela: ingrediente com alternativa de compra ("Coxão mole (ou patinho)"). Escolher um item principal ou cadastrar alternativa com alias antes de publicar.
- Carne de Panela: slug do dossie `carne-de-panela` deve atualizar a receita existente `carne-panela`, preservando imagem/status atuais.
- Filé Mignon Suíno Acebolado: slug do dossie `file-mignon-suino-acebolado` deve atualizar a receita existente `file-mignon-suino`, preservando imagem/status atuais.
- Frango com Creme de Milho: slug do dossie `frango-com-creme-de-milho` deve atualizar a receita existente `frango-creme-milho`, preservando imagem/status atuais.
- Lombo Suíno Barbecue: slug do dossie `lombo-suino-barbecue` deve atualizar a receita existente `lombo-barbecue`, preservando imagem/status atuais.
- Strogonoff de Frango: slug do dossie `strogonoff-de-frango` deve atualizar a receita existente `strogonoff-frango`, preservando imagem/status atuais.
- Iscas de Carne Aceboladas com Pimentão e Tomate: ingrediente com alternativa de compra ("Coxão mole ou patinho (iscas)"). Escolher um item principal ou cadastrar alternativa com alias antes de publicar.
- Receitas existentes devem ser enriquecidas sem apagar imagem, status e eventuais links de video ja cadastrados.
- Ingredientes "a gosto" devem entrar como temperos livres, sem peso de compra obrigatorio.
- Como o app nao prescreve dieta, os dados nutricionais devem ficar como informacao da receita/admin, sem virar foco do fluxo do aluno.

## Proxima etapa segura

Criar um importador idempotente que use estes dados estruturados para fazer upsert de categorias, tags, ingredientes mestre, receitas, ingredientes da receita e passos. O importador deve ter `--dry-run` e so escrever no Supabase apos autorizacao explicita.

