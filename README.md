# Planejador de Refeições

PWA mobile-first para transformar receitas cadastradas no Supabase em planejamento de preparo, compras e porções.

## Importar imagens de receitas

As imagens geradas por IA podem ficar em uma pasta local usada apenas como fonte de importação. Por padrão, o script lê:

```text
fotos_pratos
```

O caminho absoluto da máquina não é usado pela aplicação em runtime.

### Como preparar

Configure o Supabase no `.env`:

```text
NUXT_PUBLIC_SUPABASE_URL=
NUXT_PUBLIC_SUPABASE_ANON_KEY=
```

Para o script conseguir enviar arquivos e atualizar `recipes.image_path`, use uma destas opções:

```text
SUPABASE_SERVICE_ROLE_KEY=
```

ou:

```text
SUPABASE_AUTH_EMAIL=
SUPABASE_AUTH_PASSWORD=
```

`SUPABASE_SERVICE_ROLE_KEY` é recomendado apenas para uso local/seguro. Não exponha essa chave no frontend.

### Como rodar

Pré-visualizar sem alterar Supabase nem arquivos:

```bash
npm run import:recipe-images -- --dry-run
```

Importar tentando Supabase Storage primeiro:

```bash
npm run import:recipe-images
```

Forçar cópia temporária para `public/recipe-images`:

```bash
npm run import:recipe-images -- --target=public
```

Forçar apenas Supabase Storage:

```bash
npm run import:recipe-images -- --target=storage
```

### Configurações opcionais

```text
RECIPE_IMAGES_SOURCE_DIR=fotos_pratos
RECIPE_IMAGES_PUBLIC_DIR=public/recipe-images
RECIPE_IMAGES_TARGET=auto
```

`RECIPE_IMAGES_TARGET` aceita:

- `auto`: tenta Storage e cai para `public/recipe-images` se Storage falhar.
- `storage`: usa apenas o bucket `recipe-images`.
- `public`: copia para `public/recipe-images` e salva um caminho público em `image_path`.

### Como o vínculo é feito

O script normaliza o nome do arquivo para slug:

```text
frango_desfiado.png -> frango-desfiado
purê_batata_inglesa.png -> pure-batata-inglesa
```

Depois compara esse slug com:

- `recipes.slug`;
- nome da receita normalizado.

Se não encontrar imagem para uma receita, o placeholder visual continua sendo usado. Se encontrar imagem sem receita correspondente, ela aparece no relatório como ignorada.

### Relatório

Ao final, o script mostra:

- imagens vinculadas;
- imagens ignoradas;
- receitas sem imagem;
- avisos de autenticação, Storage ou atualização.

## Políticas de Storage

A migration inicial já cria o bucket `recipe-images` e as políticas:

- leitura pública para imagens;
- gerenciamento para usuários autenticados.

Se o banco remoto ainda não recebeu essa migration, aplique `supabase/migrations/0001_initial_schema.sql` antes de rodar a importação para Storage.
