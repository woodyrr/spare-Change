// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', 'shadcn-nuxt', "@sentry/nuxt/module"],
  css: [
    '@/assets/main.css',
  ],
  // '@nuxt/ui','@nuxtjs/tailwindcss',
  runtimeConfig: {
    public: {
      baseUrl: 'http://localhost:3000',
      // baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    },
  },
  
  supabase: {
    redirectOptions: {
      login: '/',
      callback: '/confirm',
    },
  },

  sentry: {
    // debug:true,
    sourceMapsUploadOptions: {
      org: "woody-ramey",
      project: "node",
      authToken: process.env.SENTRY_AUTH_TOKEN,
      // authToken: import.meta.env.SENTRY_AUTH_TOKEN,
      
    },
  },
})