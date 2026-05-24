alter table public.recipes
add column if not exists reference_video_url text,
add column if not exists reference_video_title text,
add column if not exists reference_video_source text,
add column if not exists reference_video_notes text;
