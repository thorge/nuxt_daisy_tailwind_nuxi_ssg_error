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

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "github-light",
            dark: 'github-dark',
            sepia: 'monokai'
          },
        },
      },
    },
    renderer: {
      anchorLinks: false,
    }
  },

  modules: [
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxtjs/i18n',
  ],

  i18n: {
    baseUrl: 'https://thorge.github.io/',
    customRoutes: 'config',
    pages: {
      'news/index': {
        de: '/aktuelles',
        en: '/news',
      },
      'news/[slug]': {
        de: '/aktuelles/[slug]',
        en: '/news/[slug]',
      },
      about: {
        de: '/ueber-uns',
        en: '/about-us',
      },
      events: {
        de: '/veranstaltungen',
        en: '/events',
      },
      publications: {
        de: '/publikationen',
        en: '/publications',
      },
      contact: {
        de: '/kontakt',
        en: '/contact',
      },
      imprint: {
        de: '/impressum',
        en: '/imprint',
      },
    },
    locales: [
      {
        code: 'de',
        language: 'de-DE',
        name: 'Deutsch',
      },
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
      }
    ],
    defaultLocale: "de",
    strategy: "prefix_except_default", //prefix_and_default
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts'
  },

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