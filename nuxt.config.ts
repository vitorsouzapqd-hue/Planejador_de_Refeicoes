export default defineNuxtConfig({
  compatibilityDate: '2026-05-21',
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      studentAccessPassword: process.env.NUXT_STUDENT_ACCESS_PASSWORD ?? '',
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL ?? '',
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
      dataProvider: process.env.NUXT_PUBLIC_DATA_PROVIDER ?? 'supabase',
    },
  },
  typescript: {
    strict: true,
    typeCheck: false,
  },
})
