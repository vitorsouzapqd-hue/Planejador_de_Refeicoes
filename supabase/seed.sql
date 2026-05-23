insert into public.recipe_categories (id, name, slug, description, is_active, sort_order)
values
  ('10000000-0000-0000-0000-000000000001', 'Proteínas', 'proteinas', 'Preparo de proteínas para porções planejadas.', true, 1),
  ('10000000-0000-0000-0000-000000000002', 'Carboidratos', 'carboidratos', 'Arroz, batatas, macarrão e outras bases.', true, 2),
  ('10000000-0000-0000-0000-000000000003', 'Saladas', 'saladas', 'Folhas, legumes e mixes de salada.', true, 3),
  ('10000000-0000-0000-0000-000000000004', 'Frutas', 'frutas', 'Frutas planejadas em gramas.', true, 4)
on conflict (slug) do update set
  name = excluded.name,
  description = excluded.description,
  is_active = excluded.is_active,
  sort_order = excluded.sort_order;

insert into public.recipe_tags (id, name, slug)
values
  ('20000000-0000-0000-0000-000000000001', 'Frango', 'frango'),
  ('20000000-0000-0000-0000-000000000002', 'Carne', 'carne'),
  ('20000000-0000-0000-0000-000000000003', 'Suíno', 'suino'),
  ('20000000-0000-0000-0000-000000000004', 'Fácil', 'facil'),
  ('20000000-0000-0000-0000-000000000005', 'Rápido', 'rapido'),
  ('20000000-0000-0000-0000-000000000006', 'Barato', 'barato'),
  ('20000000-0000-0000-0000-000000000007', 'Congela bem', 'congela-bem'),
  ('20000000-0000-0000-0000-000000000008', 'Receita sensível', 'receita-sensivel')
on conflict (slug) do update set
  name = excluded.name;

insert into public.recipes (
  id,
  category_id,
  name,
  slug,
  short_description,
  type,
  status,
  image_path,
  base_raw_weight_g,
  base_ready_weight_g,
  base_yield_note,
  cost_level,
  time_level,
  work_level,
  practicality_level,
  freezes_well,
  storage_instructions,
  reheat_instructions,
  locked_recipe_warning,
  sort_order
)
values
  (
    '30000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000001',
    'Frango Desfiado',
    'frango-desfiado',
    'Frango úmido, temperado e fácil de porcionar.',
    'frango',
    'published',
    null,
    1000,
    750,
    '1kg de peito de frango cru rende cerca de 750g pronto.',
    2,
    2,
    2,
    4,
    true,
    'Manter refrigerado por até 3 dias ou congelar em porções.',
    'Reaquecer em panela ou micro-ondas até ficar bem quente.',
    'Siga a receita como está. Não adicione óleo, azeite, creme, requeijão, queijo, molhos ou ingredientes extras fora da receita.',
    1
  ),
  (
    '30000000-0000-0000-0000-000000000002',
    '10000000-0000-0000-0000-000000000001',
    'Patinho Moído Refogado',
    'patinho-moido-refogado',
    'Patinho moído simples para uma base prática da semana.',
    'carne',
    'published',
    null,
    1000,
    700,
    '1kg de patinho cru rende cerca de 700g pronto.',
    3,
    1,
    1,
    4,
    true,
    'Manter refrigerado por até 3 dias ou congelar.',
    'Reaquecer em panela, mexendo para manter úmido.',
    'Siga a receita como está. Não adicione óleo, azeite, creme, requeijão, queijo, molhos ou ingredientes extras fora da receita.',
    2
  ),
  (
    '30000000-0000-0000-0000-000000000003',
    '10000000-0000-0000-0000-000000000001',
    'Lombo Suíno Desfiado',
    'lombo-suino-desfiado',
    'Lombo cozido e desfiado para variar as proteínas.',
    'suino',
    'published',
    null,
    1000,
    680,
    '1kg de lombo suíno cru rende cerca de 680g pronto.',
    3,
    3,
    2,
    3,
    true,
    'Manter refrigerado por até 3 dias ou congelar.',
    'Reaquecer com um pouco do caldo do preparo.',
    'Siga a receita como está. Não adicione óleo, azeite, creme, requeijão, queijo, molhos ou ingredientes extras fora da receita.',
    3
  )
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  short_description = excluded.short_description,
  type = excluded.type,
  status = excluded.status,
  image_path = excluded.image_path,
  base_raw_weight_g = excluded.base_raw_weight_g,
  base_ready_weight_g = excluded.base_ready_weight_g,
  base_yield_note = excluded.base_yield_note,
  cost_level = excluded.cost_level,
  time_level = excluded.time_level,
  work_level = excluded.work_level,
  practicality_level = excluded.practicality_level,
  freezes_well = excluded.freezes_well,
  storage_instructions = excluded.storage_instructions,
  reheat_instructions = excluded.reheat_instructions,
  locked_recipe_warning = excluded.locked_recipe_warning,
  sort_order = excluded.sort_order;

update public.recipes
set
  kcal_per_100g = 160,
  protein_g_per_100g = 24,
  carbs_g_per_100g = 2,
  fat_g_per_100g = 6,
  nutrition_notes = 'Valores aproximados por 100g da preparação pronta.'
where slug = 'frango-desfiado';

update public.recipes
set
  kcal_per_100g = 190,
  protein_g_per_100g = 27,
  carbs_g_per_100g = 1,
  fat_g_per_100g = 9,
  nutrition_notes = 'Valores aproximados por 100g da preparação pronta.'
where slug = 'patinho-moido-refogado';

update public.recipes
set
  kcal_per_100g = 210,
  protein_g_per_100g = 26,
  carbs_g_per_100g = 2,
  fat_g_per_100g = 11,
  nutrition_notes = 'Valores aproximados por 100g da preparação pronta.'
where slug = 'lombo-suino-desfiado';

insert into public.recipe_tag_links (recipe_id, tag_id)
values
  ('30000000-0000-0000-0000-000000000001', '20000000-0000-0000-0000-000000000001'),
  ('30000000-0000-0000-0000-000000000001', '20000000-0000-0000-0000-000000000004'),
  ('30000000-0000-0000-0000-000000000001', '20000000-0000-0000-0000-000000000007'),
  ('30000000-0000-0000-0000-000000000002', '20000000-0000-0000-0000-000000000002'),
  ('30000000-0000-0000-0000-000000000002', '20000000-0000-0000-0000-000000000005'),
  ('30000000-0000-0000-0000-000000000002', '20000000-0000-0000-0000-000000000007'),
  ('30000000-0000-0000-0000-000000000003', '20000000-0000-0000-0000-000000000003'),
  ('30000000-0000-0000-0000-000000000003', '20000000-0000-0000-0000-000000000007'),
  ('30000000-0000-0000-0000-000000000003', '20000000-0000-0000-0000-000000000008')
on conflict do nothing;

delete from public.recipe_ingredients
where recipe_id in (
  '30000000-0000-0000-0000-000000000001',
  '30000000-0000-0000-0000-000000000002',
  '30000000-0000-0000-0000-000000000003'
);

insert into public.recipe_ingredients (
  recipe_id,
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
values
  ('30000000-0000-0000-0000-000000000001', 'Peito de frango cru', 'Proteínas', 'main', 1000, 'g', false, false, true, 100, 'up', 'peito de frango cru', null, 1),
  ('30000000-0000-0000-0000-000000000001', 'Tomate médio', 'Hortifruti', 'complement', 2, 'un', false, false, true, 1, 'up', 'tomates médios', null, 2),
  ('30000000-0000-0000-0000-000000000001', 'Cebola média', 'Hortifruti', 'complement', 1, 'un', false, false, true, 1, 'up', 'cebolas médias', null, 3),
  ('30000000-0000-0000-0000-000000000001', 'Óleo', 'Outros', 'critical', 1, 'colher de sopa', true, false, true, 1, 'up', 'óleo', 'Ingrediente sensível: não aumentar.', 4),
  ('30000000-0000-0000-0000-000000000001', 'Sal, pimenta e páprica', 'Temperos', 'seasoning', null, null, false, true, true, null, 'none', 'sal, pimenta e páprica', null, 5),

  ('30000000-0000-0000-0000-000000000002', 'Patinho moído cru', 'Proteínas', 'main', 1000, 'g', false, false, true, 100, 'up', 'patinho moído cru', null, 1),
  ('30000000-0000-0000-0000-000000000002', 'Cebola média', 'Hortifruti', 'complement', 1, 'un', false, false, true, 1, 'up', 'cebolas médias', null, 2),
  ('30000000-0000-0000-0000-000000000002', 'Alho', 'Hortifruti', 'complement', 2, 'dentes', false, false, true, 1, 'up', 'dentes de alho', null, 3),
  ('30000000-0000-0000-0000-000000000002', 'Óleo', 'Outros', 'critical', 1, 'colher de sopa', true, false, true, 1, 'up', 'óleo', 'Ingrediente sensível: não aumentar.', 4),
  ('30000000-0000-0000-0000-000000000002', 'Sal, pimenta e cheiro-verde', 'Temperos', 'seasoning', null, null, false, true, true, null, 'none', 'sal, pimenta e cheiro-verde', null, 5),

  ('30000000-0000-0000-0000-000000000003', 'Lombo suíno cru', 'Proteínas', 'main', 1000, 'g', false, false, true, 100, 'up', 'lombo suíno cru', null, 1),
  ('30000000-0000-0000-0000-000000000003', 'Cebola média', 'Hortifruti', 'complement', 1, 'un', false, false, true, 1, 'up', 'cebolas médias', null, 2),
  ('30000000-0000-0000-0000-000000000003', 'Molho de tomate', 'Outros', 'critical', 1, 'sachê', true, false, true, 1, 'up', 'molho de tomate', 'Ingrediente sensível: seguir receita.', 3),
  ('30000000-0000-0000-0000-000000000003', 'Sal, pimenta e louro', 'Temperos', 'seasoning', null, null, false, true, true, null, 'none', 'sal, pimenta e louro', null, 4);

delete from public.recipe_steps
where recipe_id in (
  '30000000-0000-0000-0000-000000000001',
  '30000000-0000-0000-0000-000000000002',
  '30000000-0000-0000-0000-000000000003'
);

insert into public.recipe_steps (recipe_id, step_number, instruction)
values
  ('30000000-0000-0000-0000-000000000001', 1, 'Cozinhe o frango com os temperos e vegetais da receita.'),
  ('30000000-0000-0000-0000-000000000001', 2, 'Desfie bem depois de cozido.'),
  ('30000000-0000-0000-0000-000000000001', 3, 'Reduza o caldo até ficar úmido, sem excesso de líquido.'),
  ('30000000-0000-0000-0000-000000000001', 4, 'Pese a preparação pronta antes de separar as porções.'),

  ('30000000-0000-0000-0000-000000000002', 1, 'Refogue a cebola e o alho com o óleo da receita.'),
  ('30000000-0000-0000-0000-000000000002', 2, 'Adicione o patinho moído e cozinhe até ficar bem soltinho.'),
  ('30000000-0000-0000-0000-000000000002', 3, 'Ajuste os temperos da receita e reduza o líquido.'),
  ('30000000-0000-0000-0000-000000000002', 4, 'Pese a preparação pronta antes de separar as porções.'),

  ('30000000-0000-0000-0000-000000000003', 1, 'Cozinhe o lombo com os temperos e ingredientes da receita.'),
  ('30000000-0000-0000-0000-000000000003', 2, 'Desfie a carne depois de macia.'),
  ('30000000-0000-0000-0000-000000000003', 3, 'Misture ao molho e reduza até ficar úmido.'),
  ('30000000-0000-0000-0000-000000000003', 4, 'Pese a preparação pronta antes de separar as porções.');
