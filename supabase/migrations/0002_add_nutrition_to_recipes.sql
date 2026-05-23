alter table public.recipes
  add column if not exists kcal_per_100g numeric,
  add column if not exists protein_g_per_100g numeric,
  add column if not exists carbs_g_per_100g numeric,
  add column if not exists fat_g_per_100g numeric,
  add column if not exists fiber_g_per_100g numeric,
  add column if not exists sodium_mg_per_100g numeric,
  add column if not exists nutrition_notes text;
