import tailwindcss from "@tailwindcss/vite"


export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/main.css"],

  vite: {
    plugins: [tailwindcss()],
    // Force Vue's compiler to handle macro imports smoothly without strict FS checks
    vue: {
      compilerOptions: {
        // Bypasses the strict script compilation errors for deep external components
        isCustomElement: (tag) => tag.startsWith("Reka"),
      },
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  modules: ["shadcn-nuxt"],
  shadcn: {
    prefix: "",
    componentDir: "~/components/ui",
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
      ignore: ["~/components/ui/"],
    },
  ],
});