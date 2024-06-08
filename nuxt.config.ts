// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@sidebase/nuxt-auth"],
  css: ["~/assets/css/tailwind.css"],
  auth: {
    provider: {
      type: "authjs",
    },
  },

  runtimeConfig: {
    authSecret: process.env.NUXT_AUTH_SECRET,
    githubId: process.env.GITHUB_ID,
    githubSecret: process.env.GITHUB_SECRET,
    googleId: process.env.GOOGLE_ID,
    googleSecret: process.env.GOOGLE_SECRET,
  },
})
