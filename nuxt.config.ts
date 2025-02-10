// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,
  hooks: {},

  app: {
    baseURL: '/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        "data-theme": 'light'
      }
    }
  },

  css: ["~/assets/app.css"],

  modules: [
    '@nuxt/content',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
        sass: {
          api: "modern-compiler",
        },
      },
    },
    define: {
      "process.env.DEBUG": false,
    },
    plugins: [tailwindcss()],
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false
    }
  },

  devServerHandlers: [],
  compatibilityDate: '2024-11-01',
})