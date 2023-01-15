export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "rafaeldemacedo",
    htmlAttrs: {
      lang: "en",
    },
    bodyAttrs: {
      class: "font-general text-gray-900 text-base bg-body",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { name: "google-site-verification", content: 'P_e1OkQmIFmyicM9ay9pJ5BInK7oCWEdU29I7dWBf9I' }
    ],
    link: [{ rel: "icon", type: "image/svg", href: "/favicon.svg" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://tailwindcss.com/docs/guides/nuxtjs
    "@nuxt/postcss8",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: "https://rafaeldemacedo.com",
    lastmod: "2022-12-17",
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
