alter table public.shopping_catalog_items
  add column if not exists shopping_subcategory text;

alter table public.shopping_catalog_items
  drop constraint if exists shopping_catalog_items_category_check;

update public.shopping_catalog_items
set shopping_category = 'Temperos e Condimentos'
where shopping_category = 'Temperos';

update public.shopping_catalog_items
set shopping_category = 'Despensa'
where shopping_category = 'Mercearia';

alter table public.shopping_catalog_items
  add constraint shopping_catalog_items_category_check check (
    shopping_category in (
      'Proteínas',
      'Carboidratos',
      'Vegetais',
      'Frutas',
      'Laticínios',
      'Congelados',
      'Temperos e Condimentos',
      'Despensa',
      'Bebidas',
      'Utilidades',
      'Outros'
    )
  );

create index if not exists shopping_catalog_items_category_subcategory_idx
  on public.shopping_catalog_items(shopping_category, shopping_subcategory, sort_order);
