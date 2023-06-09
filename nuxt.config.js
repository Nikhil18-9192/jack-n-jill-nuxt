export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: 'Jack & Jill',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Jack and Jill in Kolhapur is one of the leading businesses in the Baby Care Product Dealers.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;600;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/strapi',
    '@nuxtjs/apollo',
  ],
  styleResources: {
    scss: ['~assets/global.scss'],
  },


  strapi: {
    url:
      process.env.NODE_ENV === 'production'
        ? 'https://jj-postgres.herokuapp.com/'
        : 'http://localhost:1337',
  },

  apollo: {
    tokenName: 'apollo-token',

    clientConfigs: {
      default: {
        httpEndpoint:
          process.env.NODE_ENV === 'production'
            ? 'https://jj-postgres.herokuapp.com/graphql'
            : 'http://localhost:1337/graphql',
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://jj-postgres.herokuapp.com'
        : 'http://localhost:1337',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
