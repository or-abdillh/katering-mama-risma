import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: ["~/assets/css/tailwind.css"],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  modules: [
    "@nuxtjs/google-fonts"
  ],

  googleFonts: {
    families: {
      "Poppins": [400, 500, 600, 700],
      "Roboto": [100, 200, 300, 400, 500, 600]
    },
    preload: true,
    useStylesheet: true
  }
})