alter table public.ingredients
  drop constraint if exists ingredients_shopping_category_check;

update public.ingredients
set shopping_category = case
  when shopping_category = 'Temperos' then 'Temperos e Condimentos'
  when shopping_category = 'Mercearia' then 'Despensa'
  else shopping_category
end
where shopping_category in ('Temperos', 'Mercearia');

alter table public.ingredients
  add constraint ingredients_shopping_category_check check (
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

create or replace function public.replace_recipe_tags(
  p_recipe_id uuid,
  p_tag_ids uuid[]
)
returns void
language plpgsql
security invoker
as $$
begin
  delete from public.recipe_tag_links
  where recipe_id = p_recipe_id;

  insert into public.recipe_tag_links (recipe_id, tag_id)
  select p_recipe_id, tag_id
  from unnest(coalesce(p_tag_ids, array[]::uuid[])) as tag_id;
end;
$$;

create or replace function public.replace_recipe_ingredients(
  p_recipe_id uuid,
  p_ingredients jsonb
)
returns void
language plpgsql
security invoker
as $$
begin
  delete from public.recipe_ingredients
  where recipe_id = p_recipe_id;

  insert into public.recipe_ingredients (
    recipe_id,
    ingredient_id,
    name,
    shopping_category,
    ingredient_role,
    base_quantity,
    unit,
    is_critical,
    is_free_seasoning,
    include_in_shopping_list,
    rounding_step,
    rounding_mode,
    display_name,
    notes,
    sort_order
  )
  select
    p_recipe_id,
    nullif(item->>'ingredient_id', '')::uuid,
    btrim(item->>'name'),
    coalesce(nullif(btrim(item->>'shopping_category'), ''), 'Outros'),
    item->>'ingredient_role',
    nullif(item->>'base_quantity', '')::numeric,
    nullif(btrim(item->>'unit'), ''),
    coalesce((item->>'is_critical')::boolean, false),
    coalesce((item->>'is_free_seasoning')::boolean, false),
    coalesce((item->>'include_in_shopping_list')::boolean, true),
    nullif(item->>'rounding_step', '')::numeric,
    coalesce(nullif(item->>'rounding_mode', ''), 'up'),
    nullif(btrim(item->>'display_name'), ''),
    nullif(btrim(item->>'notes'), ''),
    ordinality::integer - 1
  from jsonb_array_elements(coalesce(p_ingredients, '[]'::jsonb)) with ordinality as payload(item, ordinality)
  where btrim(coalesce(item->>'name', '')) <> '';
end;
$$;

create or replace function public.replace_recipe_steps(
  p_recipe_id uuid,
  p_steps jsonb
)
returns void
language plpgsql
security invoker
as $$
begin
  delete from public.recipe_steps
  where recipe_id = p_recipe_id;

  insert into public.recipe_steps (
    recipe_id,
    step_number,
    instruction
  )
  select
    p_recipe_id,
    ordinality::integer,
    btrim(item->>'instruction')
  from jsonb_array_elements(coalesce(p_steps, '[]'::jsonb)) with ordinality as payload(item, ordinality)
  where btrim(coalesce(item->>'instruction', '')) <> '';
end;
$$;

create or replace function public.replace_ingredient_household_measures(
  p_ingredient_id uuid,
  p_measures jsonb
)
returns void
language plpgsql
security invoker
as $$
begin
  delete from public.ingredient_household_measures
  where ingredient_id = p_ingredient_id;

  insert into public.ingredient_household_measures (
    ingredient_id,
    measure_name,
    grams_equivalent,
    ml_equivalent,
    is_default,
    notes,
    sort_order
  )
  select
    p_ingredient_id,
    btrim(item->>'measure_name'),
    nullif(item->>'grams_equivalent', '')::numeric,
    nullif(item->>'ml_equivalent', '')::numeric,
    coalesce((item->>'is_default')::boolean, false),
    nullif(btrim(item->>'notes'), ''),
    ordinality::integer - 1
  from jsonb_array_elements(coalesce(p_measures, '[]'::jsonb)) with ordinality as payload(item, ordinality)
  where btrim(coalesce(item->>'measure_name', '')) <> '';
end;
$$;
