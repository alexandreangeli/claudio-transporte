export default {
  target: "static",
  css: ["@/assets/scss/index.scss"],
  head: {
    meta: [
      { name: "viewport", content: "width=device-width" },
      {
        name: "google-site-verification",
        content: "googlec3779c504f1b7cf6.html",
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
