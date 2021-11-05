export default {
  target: "static",
  css: ["@/assets/scss/index.scss"],
  head: {
    meta: [
      { name: "viewport", content: "width=device-width" },
      {
        name: "google-site-verification",
        content: "5l968c3Y4q09l5Z8FCYBHjRaPArd7XBkd7Ootf7AAuM",
      },
    ],
  },
  components: true,
  plugins: [{ src: "@/plugins/vue-material-icons", mode: "client" }],
  buildModules: ["@nuxtjs/style-resources", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Roboto: true,
      "Open+Sans": true,
    },
  },
  build: {
    loaders: {
      scss: { sourceMap: false },
    },
  },
  styleResources: {
    scss: ["./assets/**/*.scss"],
  },
};
