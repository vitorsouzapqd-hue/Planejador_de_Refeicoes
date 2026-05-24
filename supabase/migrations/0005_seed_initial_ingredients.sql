insert into public.ingredients (
  id,
  name,
  slug,
  display_name,
  aliases,
  shopping_category,
  default_unit,
  kcal_per_100g,
  protein_g_per_100g,
  carbs_g_per_100g,
  fat_g_per_100g,
  fiber_g_per_100g,
  sodium_mg_per_100g,
  nutrition_source,
  default_rounding_mode,
  default_rounding_step,
  buy_in_whole_packages,
  package_size_g,
  package_label,
  purchase_increment_g,
  default_correction_factor,
  edible_portion_percent,
  sort_order
)
values
  ('40000000-0000-0000-0000-000000000001', 'Peito de frango cru', 'peito-de-frango-cru', 'peito de frango cru', array['frango', 'peito de frango'], 'Proteínas', 'g', 120, 22.5, 0, 2.6, 0, 70, 'Valor inicial aproximado por 100g cru.', 'up', 100, true, 1000, 'pacote', 100, 1.08, 92, 1),
  ('40000000-0000-0000-0000-000000000002', 'Patinho moído cru', 'patinho-moido-cru', 'patinho moído cru', array['patinho', 'carne moída'], 'Proteínas', 'g', 133, 21.7, 0, 4.7, 0, 60, 'Valor inicial aproximado por 100g cru.', 'up', 100, false, null, null, 100, 1.02, 98, 2),
  ('40000000-0000-0000-0000-000000000003', 'Sobrecoxa crua', 'sobrecoxa-crua', 'sobrecoxa crua', array['frango sobrecoxa', 'sobrecoxa de frango'], 'Proteínas', 'g', 144, 17.6, 0, 8.2, 0, 85, 'Valor inicial aproximado por 100g cru.', 'up', 100, false, null, null, 100, 1.25, 80, 3),
  ('40000000-0000-0000-0000-000000000004', 'Arroz branco cru', 'arroz-branco-cru', 'arroz branco cru', array['arroz'], 'Carboidratos', 'g', 358, 7.2, 78.8, 0.3, 1.6, 1, 'Valor inicial aproximado por 100g cru.', 'up', 100, false, null, null, 100, 1, 100, 4),
  ('40000000-0000-0000-0000-000000000005', 'Batata inglesa crua', 'batata-inglesa-crua', 'batata inglesa crua', array['batata'], 'Carboidratos', 'g', 64, 1.8, 14.7, 0, 1.2, 1, 'Valor inicial aproximado por 100g cru.', 'up', 100, false, null, null, 100, 1.14, 88, 5),
  ('40000000-0000-0000-0000-000000000006', 'Batata doce crua', 'batata-doce-crua', 'batata doce crua', array['batata doce'], 'Carboidratos', 'g', 118, 1.3, 28.2, 0.1, 2.6, 9, 'Valor inicial aproximado por 100g cru.', 'up', 100, false, null, null, 100, 1.13, 88, 6),
  ('40000000-0000-0000-0000-000000000007', 'Tomate', 'tomate', 'tomate', array['tomate médio'], 'Vegetais', 'g', 18, 0.9, 3.9, 0.2, 1.2, 5, 'Valor inicial aproximado por 100g.', 'up', 100, false, null, null, 100, 1.05, 95, 7),
  ('40000000-0000-0000-0000-000000000008', 'Cebola', 'cebola', 'cebola', array['cebola média'], 'Vegetais', 'g', 40, 1.1, 9.3, 0.1, 1.7, 4, 'Valor inicial aproximado por 100g.', 'up', 100, false, null, null, 100, 1.11, 90, 8),
  ('40000000-0000-0000-0000-000000000009', 'Cenoura', 'cenoura', 'cenoura', array['cenoura pequena'], 'Vegetais', 'g', 41, 0.9, 9.6, 0.2, 2.8, 69, 'Valor inicial aproximado por 100g.', 'up', 100, false, null, null, 100, 1.1, 91, 9),
  ('40000000-0000-0000-0000-000000000010', 'Azeite', 'azeite', 'azeite', array['azeite de oliva'], 'Outros', 'g', 884, 0, 0, 100, 0, 2, 'Valor inicial aproximado por 100g.', 'up', 13, false, null, null, 13, 1, 100, 10),
  ('40000000-0000-0000-0000-000000000011', 'Óleo', 'oleo', 'óleo', array['óleo vegetal', 'oleo'], 'Outros', 'g', 884, 0, 0, 100, 0, 0, 'Valor inicial aproximado por 100g.', 'up', 13, false, null, null, 13, 1, 100, 11),
  ('40000000-0000-0000-0000-000000000012', 'Sal', 'sal', 'sal', array['sal refinado'], 'Temperos', 'g', 0, 0, 0, 0, 0, 38758, 'Valor inicial aproximado por 100g.', 'none', null, false, null, null, null, 1, 100, 12),
  ('40000000-0000-0000-0000-000000000013', 'Pimenta', 'pimenta', 'pimenta', array['pimenta do reino'], 'Temperos', 'g', 251, 10.4, 64, 3.3, 25.3, 20, 'Valor inicial aproximado por 100g.', 'none', null, false, null, null, null, 1, 100, 13),
  ('40000000-0000-0000-0000-000000000014', 'Goiaba', 'goiaba', 'goiaba', array[]::text[], 'Frutas', 'g', 68, 2.6, 14.3, 1, 5.4, 2, 'Valor inicial aproximado por 100g.', 'up', 100, false, null, null, 100, 1.08, 93, 14),
  ('40000000-0000-0000-0000-000000000015', 'Banana', 'banana', 'banana', array['banana prata', 'banana nanica'], 'Frutas', 'g', 89, 1.1, 22.8, 0.3, 2.6, 1, 'Valor inicial aproximado por 100g.', 'up', 100, false, null, null, 100, 1.35, 74, 15),
  ('40000000-0000-0000-0000-000000000016', 'Alface', 'alface', 'alface', array[]::text[], 'Vegetais', 'g', 15, 1.4, 2.9, 0.2, 1.3, 28, 'Valor inicial aproximado por 100g.', 'up', 100, false, null, null, 100, 1.25, 80, 16)
on conflict (slug) do update set
  name = excluded.name,
  display_name = excluded.display_name,
  aliases = excluded.aliases,
  shopping_category = excluded.shopping_category,
  default_unit = excluded.default_unit,
  kcal_per_100g = excluded.kcal_per_100g,
  protein_g_per_100g = excluded.protein_g_per_100g,
  carbs_g_per_100g = excluded.carbs_g_per_100g,
  fat_g_per_100g = excluded.fat_g_per_100g,
  fiber_g_per_100g = excluded.fiber_g_per_100g,
  sodium_mg_per_100g = excluded.sodium_mg_per_100g,
  nutrition_source = excluded.nutrition_source,
  default_rounding_mode = excluded.default_rounding_mode,
  default_rounding_step = excluded.default_rounding_step,
  buy_in_whole_packages = excluded.buy_in_whole_packages,
  package_size_g = excluded.package_size_g,
  package_label = excluded.package_label,
  purchase_increment_g = excluded.purchase_increment_g,
  default_correction_factor = excluded.default_correction_factor,
  edible_portion_percent = excluded.edible_portion_percent,
  sort_order = excluded.sort_order;

insert into public.ingredient_household_measures (
  ingredient_id,
  measure_name,
  grams_equivalent,
  ml_equivalent,
  is_default,
  sort_order
)
select i.id, measure.measure_name, measure.grams_equivalent, measure.ml_equivalent, measure.is_default, measure.sort_order
from (
  values
    ('tomate', 'tomate médio', 120::numeric, null::numeric, true, 1),
    ('cebola', 'cebola média', 100::numeric, null::numeric, true, 1),
    ('cenoura', 'cenoura pequena', 60::numeric, null::numeric, true, 1),
    ('azeite', 'colher de sopa de azeite', 13::numeric, 15::numeric, true, 1),
    ('arroz-branco-cru', 'xícara de arroz cru', 180::numeric, null::numeric, true, 1)
) as measure(ingredient_slug, measure_name, grams_equivalent, ml_equivalent, is_default, sort_order)
join public.ingredients i on i.slug = measure.ingredient_slug
where not exists (
  select 1
  from public.ingredient_household_measures existing
  where existing.ingredient_id = i.id
    and existing.measure_name = measure.measure_name
);

update public.recipe_ingredients ri
set ingredient_id = i.id
from public.ingredients i
where ri.ingredient_id is null
  and (
    (i.slug = 'peito-de-frango-cru' and ri.name ilike 'Peito de frango%')
    or (i.slug = 'patinho-moido-cru' and ri.name ilike 'Patinho%')
    or (i.slug = 'tomate' and ri.name ilike 'Tomate%')
    or (i.slug = 'cebola' and ri.name ilike 'Cebola%')
    or (i.slug = 'oleo' and (ri.name ilike '%leo%' or ri.display_name ilike '%leo%'))
    or (i.slug = 'sal' and ri.ingredient_role = 'seasoning' and ri.name ilike 'Sal%')
  );
