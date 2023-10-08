// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
    strict: true,
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "nuxt-icon",
  ],
  colorMode: {
    classSuffix: "",
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  googleFonts: {
    families: {
      Poppins: true,
    },
  },
});