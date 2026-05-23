alter table public.recipe_ingredients
  add column if not exists package_size_g numeric,
  add column if not exists purchase_increment_g numeric,
  add column if not exists purchase_unit text,
  add column if not exists package_label text,
  add column if not exists buy_in_whole_packages boolean default false;
