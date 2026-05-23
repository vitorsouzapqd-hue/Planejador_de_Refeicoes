create extension if not exists "pgcrypto";

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.recipe_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  is_active boolean default true,
  sort_order integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.recipes (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references public.recipe_categories(id),
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
  sort_order integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  constraint recipes_status_check check (status in ('draft', 'published', 'archived')),
  constraint recipes_base_weights_check check (base_raw_weight_g > 0 and base_ready_weight_g > 0)
);

create table if not exists public.recipe_tags (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  created_at timestamptz default now()
);

create table if not exists public.recipe_tag_links (
  recipe_id uuid references public.recipes(id) on delete cascade,
  tag_id uuid references public.recipe_tags(id) on delete cascade,
  primary key (recipe_id, tag_id)
);

create table if not exists public.recipe_ingredients (
  id uuid primary key default gen_random_uuid(),
  recipe_id uuid references public.recipes(id) on delete cascade,
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
  updated_at timestamptz default now(),
  constraint recipe_ingredients_role_check check (
    ingredient_role in ('main', 'complement', 'critical', 'seasoning')
  ),
  constraint recipe_ingredients_rounding_mode_check check (
    rounding_mode in ('up', 'nearest', 'manual', 'none')
  )
);

create table if not exists public.recipe_steps (
  id uuid primary key default gen_random_uuid(),
  recipe_id uuid references public.recipes(id) on delete cascade,
  step_number integer not null,
  instruction text not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique (recipe_id, step_number)
);

create table if not exists public.app_settings (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  value text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists recipes_status_idx on public.recipes(status);
create index if not exists recipes_category_id_idx on public.recipes(category_id);
create index if not exists recipes_type_idx on public.recipes(type);
create index if not exists recipe_ingredients_recipe_id_idx on public.recipe_ingredients(recipe_id);
create index if not exists recipe_steps_recipe_id_idx on public.recipe_steps(recipe_id);
create index if not exists recipe_tag_links_tag_id_idx on public.recipe_tag_links(tag_id);

drop trigger if exists set_recipe_categories_updated_at on public.recipe_categories;
create trigger set_recipe_categories_updated_at
before update on public.recipe_categories
for each row execute function public.set_updated_at();

drop trigger if exists set_recipes_updated_at on public.recipes;
create trigger set_recipes_updated_at
before update on public.recipes
for each row execute function public.set_updated_at();

drop trigger if exists set_recipe_ingredients_updated_at on public.recipe_ingredients;
create trigger set_recipe_ingredients_updated_at
before update on public.recipe_ingredients
for each row execute function public.set_updated_at();

drop trigger if exists set_recipe_steps_updated_at on public.recipe_steps;
create trigger set_recipe_steps_updated_at
before update on public.recipe_steps
for each row execute function public.set_updated_at();

drop trigger if exists set_app_settings_updated_at on public.app_settings;
create trigger set_app_settings_updated_at
before update on public.app_settings
for each row execute function public.set_updated_at();

alter table public.recipe_categories enable row level security;
alter table public.recipes enable row level security;
alter table public.recipe_tags enable row level security;
alter table public.recipe_tag_links enable row level security;
alter table public.recipe_ingredients enable row level security;
alter table public.recipe_steps enable row level security;
alter table public.app_settings enable row level security;

drop policy if exists "Public can read active categories" on public.recipe_categories;
create policy "Public can read active categories"
on public.recipe_categories
for select
to anon, authenticated
using (is_active = true);

drop policy if exists "Authenticated admins can manage categories" on public.recipe_categories;
create policy "Authenticated admins can manage categories"
on public.recipe_categories
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can read published recipes" on public.recipes;
create policy "Public can read published recipes"
on public.recipes
for select
to anon, authenticated
using (
  status = 'published'
  and exists (
    select 1
    from public.recipe_categories rc
    where rc.id = recipes.category_id
      and rc.is_active = true
  )
);

drop policy if exists "Authenticated admins can manage recipes" on public.recipes;
create policy "Authenticated admins can manage recipes"
on public.recipes
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can read tags from published recipes" on public.recipe_tags;
create policy "Public can read tags from published recipes"
on public.recipe_tags
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.recipe_tag_links rtl
    join public.recipes r on r.id = rtl.recipe_id
    where rtl.tag_id = recipe_tags.id
      and r.status = 'published'
  )
);

drop policy if exists "Authenticated admins can manage tags" on public.recipe_tags;
create policy "Authenticated admins can manage tags"
on public.recipe_tags
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can read tag links from published recipes" on public.recipe_tag_links;
create policy "Public can read tag links from published recipes"
on public.recipe_tag_links
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.recipes r
    where r.id = recipe_tag_links.recipe_id
      and r.status = 'published'
  )
);

drop policy if exists "Authenticated admins can manage tag links" on public.recipe_tag_links;
create policy "Authenticated admins can manage tag links"
on public.recipe_tag_links
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can read ingredients from published recipes" on public.recipe_ingredients;
create policy "Public can read ingredients from published recipes"
on public.recipe_ingredients
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.recipes r
    where r.id = recipe_ingredients.recipe_id
      and r.status = 'published'
  )
);

drop policy if exists "Authenticated admins can manage ingredients" on public.recipe_ingredients;
create policy "Authenticated admins can manage ingredients"
on public.recipe_ingredients
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can read steps from published recipes" on public.recipe_steps;
create policy "Public can read steps from published recipes"
on public.recipe_steps
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.recipes r
    where r.id = recipe_steps.recipe_id
      and r.status = 'published'
  )
);

drop policy if exists "Authenticated admins can manage steps" on public.recipe_steps;
create policy "Authenticated admins can manage steps"
on public.recipe_steps
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Authenticated admins can manage settings" on public.app_settings;
create policy "Authenticated admins can manage settings"
on public.app_settings
for all
to authenticated
using (true)
with check (true);

insert into storage.buckets (id, name, public)
values ('recipe-images', 'recipe-images', true)
on conflict (id) do update set public = excluded.public;

drop policy if exists "Public can read recipe images" on storage.objects;
create policy "Public can read recipe images"
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'recipe-images');

drop policy if exists "Authenticated admins can manage recipe images" on storage.objects;
create policy "Authenticated admins can manage recipe images"
on storage.objects
for all
to authenticated
using (bucket_id = 'recipe-images')
with check (bucket_id = 'recipe-images');
