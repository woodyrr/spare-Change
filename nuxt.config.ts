// https://nuxt.com/docs/api/configuration/nuxt-config
// console.log(`${useRuntimeConfig().public.baseUrl}`)
export default defineNuxtConfig({
  // "start": "node --env-file=.env --import ./server/sentry.server.config.mjs ./sentry.client.config.js",
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', 'shadcn-nuxt', "@sentry/nuxt/module"],
  css: [
    '@/assets/main.css',
  ],
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    },
  },
  
  supabase: {
    redirectOptions: {
      login: '/',
      callback: '/confirm',
    },
  },

  // sentry: {
  //   // debug:true,
  //   sourceMapsUploadOptions: {
  //     org: "woody-ramey",
  //     project: "node",
  //     authToken: process.env.SENTRY_AUTH_TOKEN,
      
  //   },
  // },
})