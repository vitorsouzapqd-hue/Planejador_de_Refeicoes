create table if not exists public.ingredients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  display_name text,
  aliases text[] default '{}',
  shopping_category text not null,
  default_unit text not null default 'g',
  is_active boolean default true,
  kcal_per_100g numeric,
  protein_g_per_100g numeric,
  carbs_g_per_100g numeric,
  fat_g_per_100g numeric,
  fiber_g_per_100g numeric,
  sodium_mg_per_100g numeric,
  nutrition_source text,
  nutrition_notes text,
  default_rounding_mode text default 'up',
  default_rounding_step numeric,
  buy_in_whole_packages boolean default false,
  package_size_g numeric,
  package_label text,
  purchase_increment_g numeric,
  default_correction_factor numeric,
  edible_portion_percent numeric,
  correction_notes text,
  notes text,
  sort_order integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  constraint ingredients_shopping_category_check check (
    shopping_category in ('Proteínas', 'Carboidratos', 'Frutas', 'Vegetais', 'Bebidas', 'Temperos', 'Outros')
  ),
  constraint ingredients_default_rounding_mode_check check (
    default_rounding_mode in ('up', 'nearest', 'manual', 'none')
  )
);

create table if not exists public.ingredient_household_measures (
  id uuid primary key default gen_random_uuid(),
  ingredient_id uuid references public.ingredients(id) on delete cascade,
  measure_name text not null,
  grams_equivalent numeric,
  ml_equivalent numeric,
  is_default boolean default false,
  notes text,
  sort_order integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.recipe_ingredients
  add column if not exists ingredient_id uuid references public.ingredients(id);

alter table public.recipes
  add column if not exists reference_video_url text,
  add column if not exists reference_video_title text,
  add column if not exists reference_video_source text,
  add column if not exists reference_video_notes text,
  add column if not exists base_clean_weight_g numeric,
  add column if not exists cooking_method text,
  add column if not exists correction_factor numeric,
  add column if not exists cooking_factor numeric;

create index if not exists ingredients_slug_idx on public.ingredients(slug);
create index if not exists ingredients_is_active_idx on public.ingredients(is_active);
create index if not exists ingredients_shopping_category_idx on public.ingredients(shopping_category);
create index if not exists ingredient_household_measures_ingredient_id_idx
  on public.ingredient_household_measures(ingredient_id);
create index if not exists recipe_ingredients_ingredient_id_idx
  on public.recipe_ingredients(ingredient_id);

drop trigger if exists set_ingredients_updated_at on public.ingredients;
create trigger set_ingredients_updated_at
before update on public.ingredients
for each row execute function public.set_updated_at();

drop trigger if exists set_ingredient_household_measures_updated_at on public.ingredient_household_measures;
create trigger set_ingredient_household_measures_updated_at
before update on public.ingredient_household_measures
for each row execute function public.set_updated_at();

alter table public.ingredients enable row level security;
alter table public.ingredient_household_measures enable row level security;

drop policy if exists "Public can read active ingredients from published recipes" on public.ingredients;
create policy "Public can read active ingredients from published recipes"
on public.ingredients
for select
to anon, authenticated
using (
  is_active = true
  and exists (
    select 1
    from public.recipe_ingredients ri
    join public.recipes r on r.id = ri.recipe_id
    where ri.ingredient_id = ingredients.id
      and r.status = 'published'
  )
);

drop policy if exists "Authenticated admins can manage ingredients" on public.ingredients;
create policy "Authenticated admins can manage ingredients"
on public.ingredients
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can read active ingredient household measures" on public.ingredient_household_measures;
create policy "Public can read active ingredient household measures"
on public.ingredient_household_measures
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.ingredients i
    where i.id = ingredient_household_measures.ingredient_id
      and i.is_active = true
      and exists (
        select 1
        from public.recipe_ingredients ri
        join public.recipes r on r.id = ri.recipe_id
        where ri.ingredient_id = i.id
          and r.status = 'published'
      )
  )
);

drop policy if exists "Authenticated admins can manage ingredient household measures" on public.ingredient_household_measures;
create policy "Authenticated admins can manage ingredient household measures"
on public.ingredient_household_measures
for all
to authenticated
using (true)
with check (true);
