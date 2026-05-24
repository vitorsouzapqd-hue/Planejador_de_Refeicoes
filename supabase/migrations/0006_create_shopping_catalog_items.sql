create extension if not exists "pgcrypto";

create table if not exists public.shopping_catalog_items (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  display_name text,
  aliases text[] default '{}',
  shopping_category text not null,
  default_quantity_text text,
  default_unit text,
  notes text,
  is_active boolean default true,
  is_food boolean default true,
  ingredient_id uuid references public.ingredients(id),
  sort_order integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  constraint shopping_catalog_items_category_check check (
    shopping_category in (
      'Proteínas',
      'Carboidratos',
      'Frutas',
      'Vegetais',
      'Bebidas',
      'Temperos',
      'Mercearia',
      'Laticínios',
      'Congelados',
      'Utilidades',
      'Outros'
    )
  )
);

create index if not exists shopping_catalog_items_slug_idx
  on public.shopping_catalog_items(slug);
create index if not exists shopping_catalog_items_active_category_idx
  on public.shopping_catalog_items(is_active, shopping_category, sort_order);
create index if not exists shopping_catalog_items_ingredient_id_idx
  on public.shopping_catalog_items(ingredient_id);

drop trigger if exists set_shopping_catalog_items_updated_at on public.shopping_catalog_items;
create trigger set_shopping_catalog_items_updated_at
before update on public.shopping_catalog_items
for each row execute function public.set_updated_at();

alter table public.shopping_catalog_items enable row level security;

drop policy if exists "Public can read active shopping catalog items" on public.shopping_catalog_items;
create policy "Public can read active shopping catalog items"
on public.shopping_catalog_items
for select
to anon, authenticated
using (is_active = true);

drop policy if exists "Authenticated admins can manage shopping catalog items" on public.shopping_catalog_items;
create policy "Authenticated admins can manage shopping catalog items"
on public.shopping_catalog_items
for all
to authenticated
using (true)
with check (true);

with catalog_seed (
  name,
  slug,
  display_name,
  aliases,
  shopping_category,
  default_quantity_text,
  default_unit,
  notes,
  is_food,
  sort_order,
  ingredient_slug
) as (
  values
    ('Peito de frango cru', 'peito-de-frango-cru', 'Peito de frango cru', ARRAY['frango', 'peito de frango']::text[], 'Proteínas', '1kg', 'kg', null, true, 101, 'peito-de-frango-cru'),
    ('Patinho moído cru', 'patinho-moido-cru', 'Patinho moído cru', ARRAY['patinho', 'carne moida']::text[], 'Proteínas', '1kg', 'kg', null, true, 102, 'patinho-moido-cru'),
    ('Sobrecoxa crua', 'sobrecoxa-crua', 'Sobrecoxa crua', ARRAY['sobrecoxa de frango']::text[], 'Proteínas', '1kg', 'kg', null, true, 103, null),
    ('Ovos', 'ovos', 'Ovos', ARRAY['ovo']::text[], 'Proteínas', '1 bandeja', 'bandeja', null, true, 104, null),
    ('Atum em lata', 'atum-em-lata', 'Atum em lata', ARRAY['atum']::text[], 'Proteínas', '1 lata', 'lata', null, true, 105, null),
    ('Sardinha em lata', 'sardinha-em-lata', 'Sardinha em lata', ARRAY['sardinha']::text[], 'Proteínas', '1 lata', 'lata', null, true, 106, null),
    ('Filé de tilápia', 'file-de-tilapia', 'Filé de tilápia', ARRAY['tilapia', 'peixe']::text[], 'Proteínas', '1kg', 'kg', null, true, 107, null),
    ('Lombo suíno', 'lombo-suino', 'Lombo suíno', ARRAY['lombo']::text[], 'Proteínas', '1kg', 'kg', null, true, 108, 'lombo-suino-cru'),
    ('Carne de panela', 'carne-de-panela', 'Carne de panela', ARRAY['acém', 'paleta']::text[], 'Proteínas', '1kg', 'kg', null, true, 109, null),
    ('Carne moída', 'carne-moida', 'Carne moída', ARRAY['carne moida bovina']::text[], 'Proteínas', '1kg', 'kg', null, true, 110, null),

    ('Arroz branco', 'arroz-branco', 'Arroz branco', ARRAY['arroz']::text[], 'Carboidratos', '1 pacote', 'pacote', null, true, 201, null),
    ('Arroz integral', 'arroz-integral', 'Arroz integral', ARRAY[]::text[], 'Carboidratos', '1 pacote', 'pacote', null, true, 202, null),
    ('Macarrão', 'macarrao', 'Macarrão', ARRAY['massa']::text[], 'Carboidratos', '1 pacote', 'pacote', null, true, 203, null),
    ('Batata inglesa', 'batata-inglesa', 'Batata inglesa', ARRAY['batata']::text[], 'Carboidratos', '1kg', 'kg', null, true, 204, null),
    ('Batata doce', 'batata-doce', 'Batata doce', ARRAY[]::text[], 'Carboidratos', '1kg', 'kg', null, true, 205, null),
    ('Mandioca', 'mandioca', 'Mandioca', ARRAY['aipim', 'macaxeira']::text[], 'Carboidratos', '1kg', 'kg', null, true, 206, null),
    ('Aveia', 'aveia', 'Aveia', ARRAY[]::text[], 'Carboidratos', '1 pacote', 'pacote', null, true, 207, null),
    ('Tapioca', 'tapioca', 'Tapioca', ARRAY['goma de tapioca']::text[], 'Carboidratos', '1 pacote', 'pacote', null, true, 208, null),
    ('Pão francês', 'pao-frances', 'Pão francês', ARRAY['pao de sal']::text[], 'Carboidratos', '6 unidades', 'unidade', null, true, 209, null),
    ('Pão integral', 'pao-integral', 'Pão integral', ARRAY[]::text[], 'Carboidratos', '1 pacote', 'pacote', null, true, 210, null),
    ('Cuscuz', 'cuscuz', 'Cuscuz', ARRAY['flocao']::text[], 'Carboidratos', '1 pacote', 'pacote', null, true, 211, null),
    ('Farinha de tapioca', 'farinha-de-tapioca', 'Farinha de tapioca', ARRAY[]::text[], 'Carboidratos', '1 pacote', 'pacote', null, true, 212, null),
    ('Granola', 'granola', 'Granola', ARRAY[]::text[], 'Carboidratos', '1 pacote', 'pacote', null, true, 213, null),

    ('Banana', 'banana', 'Banana', ARRAY[]::text[], 'Frutas', '1 dúzia', 'dúzia', null, true, 301, null),
    ('Maçã', 'maca', 'Maçã', ARRAY[]::text[], 'Frutas', '1kg', 'kg', null, true, 302, null),
    ('Goiaba', 'goiaba', 'Goiaba', ARRAY[]::text[], 'Frutas', '1kg', 'kg', null, true, 303, null),
    ('Mamão', 'mamao', 'Mamão', ARRAY[]::text[], 'Frutas', '1 unidade', 'unidade', null, true, 304, null),
    ('Abacaxi', 'abacaxi', 'Abacaxi', ARRAY[]::text[], 'Frutas', '1 unidade', 'unidade', null, true, 305, null),
    ('Uva', 'uva', 'Uva', ARRAY[]::text[], 'Frutas', '1 bandeja', 'bandeja', null, true, 306, null),
    ('Laranja', 'laranja', 'Laranja', ARRAY[]::text[], 'Frutas', '1kg', 'kg', null, true, 307, null),
    ('Morango', 'morango', 'Morango', ARRAY[]::text[], 'Frutas', '1 bandeja', 'bandeja', null, true, 308, null),
    ('Manga', 'manga', 'Manga', ARRAY[]::text[], 'Frutas', '1kg', 'kg', null, true, 309, null),
    ('Melancia', 'melancia', 'Melancia', ARRAY[]::text[], 'Frutas', '1 unidade', 'unidade', null, true, 310, null),
    ('Pera', 'pera', 'Pera', ARRAY[]::text[], 'Frutas', '1kg', 'kg', null, true, 311, null),
    ('Kiwi', 'kiwi', 'Kiwi', ARRAY[]::text[], 'Frutas', '1 bandeja', 'bandeja', null, true, 312, null),

    ('Tomate', 'tomate', 'Tomate', ARRAY[]::text[], 'Vegetais', '1kg', 'kg', null, true, 401, null),
    ('Cebola', 'cebola', 'Cebola', ARRAY[]::text[], 'Vegetais', '1kg', 'kg', null, true, 402, null),
    ('Alho', 'alho', 'Alho', ARRAY[]::text[], 'Vegetais', '1 cabeça', 'cabeça', null, true, 403, null),
    ('Cenoura', 'cenoura', 'Cenoura', ARRAY[]::text[], 'Vegetais', '1kg', 'kg', null, true, 404, null),
    ('Alface', 'alface', 'Alface', ARRAY[]::text[], 'Vegetais', '1 unidade', 'unidade', null, true, 405, null),
    ('Brócolis', 'brocolis', 'Brócolis', ARRAY[]::text[], 'Vegetais', '1 unidade', 'unidade', null, true, 406, null),
    ('Abóbora', 'abobora', 'Abóbora', ARRAY[]::text[], 'Vegetais', '1kg', 'kg', null, true, 407, null),
    ('Pepino', 'pepino', 'Pepino', ARRAY[]::text[], 'Vegetais', '2 unidades', 'unidade', null, true, 408, null),
    ('Couve', 'couve', 'Couve', ARRAY[]::text[], 'Vegetais', '1 maço', 'maço', null, true, 409, null),
    ('Rúcula', 'rucula', 'Rúcula', ARRAY[]::text[], 'Vegetais', '1 maço', 'maço', null, true, 410, null),
    ('Beterraba', 'beterraba', 'Beterraba', ARRAY[]::text[], 'Vegetais', '1kg', 'kg', null, true, 411, null),
    ('Repolho', 'repolho', 'Repolho', ARRAY[]::text[], 'Vegetais', '1 unidade', 'unidade', null, true, 412, null),
    ('Abobrinha', 'abobrinha', 'Abobrinha', ARRAY[]::text[], 'Vegetais', '1kg', 'kg', null, true, 413, null),
    ('Chuchu', 'chuchu', 'Chuchu', ARRAY[]::text[], 'Vegetais', '1kg', 'kg', null, true, 414, null),

    ('Água mineral', 'agua-mineral', 'Água mineral', ARRAY['agua']::text[], 'Bebidas', '1 garrafa', 'garrafa', null, true, 501, null),
    ('Água com gás', 'agua-com-gas', 'Água com gás', ARRAY['agua gasosa']::text[], 'Bebidas', '1 garrafa', 'garrafa', null, true, 502, null),
    ('Isotônico', 'isotonico', 'Isotônico', ARRAY[]::text[], 'Bebidas', '1 unidade', 'unidade', null, true, 503, null),
    ('Suco zero', 'suco-zero', 'Suco zero', ARRAY['suco sem açúcar']::text[], 'Bebidas', '1 unidade', 'unidade', null, true, 504, null),
    ('Café', 'cafe', 'Café', ARRAY[]::text[], 'Bebidas', '1 pacote', 'pacote', null, true, 505, null),
    ('Chá', 'cha', 'Chá', ARRAY[]::text[], 'Bebidas', '1 caixa', 'caixa', null, true, 506, null),
    ('Água de coco', 'agua-de-coco', 'Água de coco', ARRAY[]::text[], 'Bebidas', '1 unidade', 'unidade', null, true, 507, null),

    ('Sal', 'sal', 'Sal', ARRAY[]::text[], 'Temperos', '1 pacote', 'pacote', null, true, 601, null),
    ('Pimenta', 'pimenta', 'Pimenta', ARRAY[]::text[], 'Temperos', '1 unidade', 'unidade', null, true, 602, null),
    ('Páprica', 'paprica', 'Páprica', ARRAY[]::text[], 'Temperos', '1 unidade', 'unidade', null, true, 603, null),
    ('Orégano', 'oregano', 'Orégano', ARRAY[]::text[], 'Temperos', '1 unidade', 'unidade', null, true, 604, null),
    ('Chimichurri', 'chimichurri', 'Chimichurri', ARRAY[]::text[], 'Temperos', '1 unidade', 'unidade', null, true, 605, null),
    ('Cheiro-verde', 'cheiro-verde', 'Cheiro-verde', ARRAY['salsinha', 'cebolinha']::text[], 'Temperos', '1 maço', 'maço', null, true, 606, null),
    ('Manjericão', 'manjericao', 'Manjericão', ARRAY[]::text[], 'Temperos', '1 maço', 'maço', null, true, 607, null),
    ('Louro', 'louro', 'Louro', ARRAY[]::text[], 'Temperos', '1 pacote', 'pacote', null, true, 608, null),
    ('Açafrão', 'acafrao', 'Açafrão', ARRAY['curcuma']::text[], 'Temperos', '1 unidade', 'unidade', null, true, 609, null),
    ('Curry', 'curry', 'Curry', ARRAY[]::text[], 'Temperos', '1 unidade', 'unidade', null, true, 610, null),
    ('Cominho', 'cominho', 'Cominho', ARRAY[]::text[], 'Temperos', '1 unidade', 'unidade', null, true, 611, null),
    ('Alho em pó', 'alho-em-po', 'Alho em pó', ARRAY[]::text[], 'Temperos', '1 unidade', 'unidade', null, true, 612, null),
    ('Cebola em pó', 'cebola-em-po', 'Cebola em pó', ARRAY[]::text[], 'Temperos', '1 unidade', 'unidade', null, true, 613, null),

    ('Molho de tomate', 'molho-de-tomate', 'Molho de tomate', ARRAY[]::text[], 'Mercearia', '1 unidade', 'unidade', null, true, 701, null),
    ('Ketchup', 'ketchup', 'Ketchup', ARRAY['catchup']::text[], 'Mercearia', '1 unidade', 'unidade', null, true, 702, null),
    ('Mostarda', 'mostarda', 'Mostarda', ARRAY[]::text[], 'Mercearia', '1 unidade', 'unidade', null, true, 703, null),
    ('Azeite', 'azeite', 'Azeite', ARRAY[]::text[], 'Mercearia', '1 vidro', 'vidro', null, true, 704, null),
    ('Óleo', 'oleo', 'Óleo', ARRAY['oleo de cozinha']::text[], 'Mercearia', '1 unidade', 'unidade', null, true, 705, null),
    ('Vinagre', 'vinagre', 'Vinagre', ARRAY[]::text[], 'Mercearia', '1 unidade', 'unidade', null, true, 706, null),
    ('Creme de leite', 'creme-de-leite', 'Creme de leite', ARRAY[]::text[], 'Mercearia', '1 unidade', 'unidade', null, true, 707, null),
    ('Requeijão', 'requeijao', 'Requeijão', ARRAY[]::text[], 'Mercearia', '1 unidade', 'unidade', null, true, 708, null),
    ('Milho', 'milho', 'Milho', ARRAY[]::text[], 'Mercearia', '1 lata', 'lata', null, true, 709, null),
    ('Ervilha', 'ervilha', 'Ervilha', ARRAY[]::text[], 'Mercearia', '1 lata', 'lata', null, true, 710, null),
    ('Palmito', 'palmito', 'Palmito', ARRAY[]::text[], 'Mercearia', '1 vidro', 'vidro', null, true, 711, null),
    ('Azeitona', 'azeitona', 'Azeitona', ARRAY[]::text[], 'Mercearia', '1 vidro', 'vidro', null, true, 712, null),
    ('Molho shoyu', 'molho-shoyu', 'Molho shoyu', ARRAY['shoyu']::text[], 'Mercearia', '1 unidade', 'unidade', null, true, 713, null),
    ('Leite de coco', 'leite-de-coco', 'Leite de coco', ARRAY[]::text[], 'Mercearia', '1 unidade', 'unidade', null, true, 714, null),
    ('Pasta de amendoim', 'pasta-de-amendoim', 'Pasta de amendoim', ARRAY[]::text[], 'Mercearia', '1 pote', 'pote', null, true, 715, null),

    ('Iogurte natural', 'iogurte-natural', 'Iogurte natural', ARRAY['iogurte']::text[], 'Laticínios', '1 unidade', 'unidade', null, true, 801, null),
    ('Leite', 'leite', 'Leite', ARRAY[]::text[], 'Laticínios', '1 litro', 'litro', null, true, 802, null),
    ('Queijo cottage', 'queijo-cottage', 'Queijo cottage', ARRAY['cottage']::text[], 'Laticínios', '1 pote', 'pote', null, true, 803, null),
    ('Muçarela', 'mucarela', 'Muçarela', ARRAY['mussarela']::text[], 'Laticínios', '1 pacote', 'pacote', null, true, 804, null),
    ('Parmesão', 'parmesao', 'Parmesão', ARRAY[]::text[], 'Laticínios', '1 pacote', 'pacote', null, true, 805, null),
    ('Ricota', 'ricota', 'Ricota', ARRAY[]::text[], 'Laticínios', '1 unidade', 'unidade', null, true, 806, null),
    ('Cream cheese', 'cream-cheese', 'Cream cheese', ARRAY[]::text[], 'Laticínios', '1 pote', 'pote', null, true, 807, null),

    ('Legumes congelados', 'legumes-congelados', 'Legumes congelados', ARRAY[]::text[], 'Congelados', '1 pacote', 'pacote', null, true, 901, null),
    ('Brócolis congelado', 'brocolis-congelado', 'Brócolis congelado', ARRAY[]::text[], 'Congelados', '1 pacote', 'pacote', null, true, 902, null),
    ('Frutas congeladas', 'frutas-congeladas', 'Frutas congeladas', ARRAY[]::text[], 'Congelados', '1 pacote', 'pacote', null, true, 903, null),
    ('Polpa de fruta', 'polpa-de-fruta', 'Polpa de fruta', ARRAY[]::text[], 'Congelados', '1 pacote', 'pacote', null, true, 904, null),

    ('Saco zip', 'saco-zip', 'Saco zip', ARRAY['ziplock', 'saco hermetico']::text[], 'Utilidades', '1 pacote', 'pacote', null, false, 1001, null),
    ('Papel alumínio', 'papel-aluminio', 'Papel alumínio', ARRAY[]::text[], 'Utilidades', '1 rolo', 'rolo', null, false, 1002, null),
    ('Papel toalha', 'papel-toalha', 'Papel toalha', ARRAY[]::text[], 'Utilidades', '1 pacote', 'pacote', null, false, 1003, null),
    ('Marmita descartável', 'marmita-descartavel', 'Marmita descartável', ARRAY['pote descartavel']::text[], 'Utilidades', '1 pacote', 'pacote', null, false, 1004, null),
    ('Guardanapo', 'guardanapo', 'Guardanapo', ARRAY[]::text[], 'Utilidades', '1 pacote', 'pacote', null, false, 1005, null),
    ('Filme plástico', 'filme-plastico', 'Filme plástico', ARRAY['plastico filme']::text[], 'Utilidades', '1 rolo', 'rolo', null, false, 1006, null),
    ('Etiquetas', 'etiquetas', 'Etiquetas', ARRAY[]::text[], 'Utilidades', '1 pacote', 'pacote', null, false, 1007, null),
    ('Sacos para congelamento', 'sacos-para-congelamento', 'Sacos para congelamento', ARRAY['saco para freezer']::text[], 'Utilidades', '1 pacote', 'pacote', null, false, 1008, null)
)
insert into public.shopping_catalog_items (
  name,
  slug,
  display_name,
  aliases,
  shopping_category,
  default_quantity_text,
  default_unit,
  notes,
  is_active,
  is_food,
  ingredient_id,
  sort_order
)
select
  catalog_seed.name,
  catalog_seed.slug,
  catalog_seed.display_name,
  catalog_seed.aliases,
  catalog_seed.shopping_category,
  catalog_seed.default_quantity_text,
  catalog_seed.default_unit,
  catalog_seed.notes,
  true,
  catalog_seed.is_food,
  ingredients.id,
  catalog_seed.sort_order
from catalog_seed
left join public.ingredients
  on ingredients.slug = catalog_seed.ingredient_slug
on conflict (slug) do update set
  name = excluded.name,
  display_name = excluded.display_name,
  aliases = excluded.aliases,
  shopping_category = excluded.shopping_category,
  default_quantity_text = excluded.default_quantity_text,
  default_unit = excluded.default_unit,
  notes = excluded.notes,
  is_food = excluded.is_food,
  ingredient_id = excluded.ingredient_id,
  sort_order = excluded.sort_order;
