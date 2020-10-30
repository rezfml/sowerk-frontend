import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png' },
      { rel: 'icon', type: 'image/x-icon', href: 'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'},
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' }
    ],
    script: [
      { src: "https://js.stripe.com/v3/" },
      { src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBwenW5IeaHFqdpup30deLmFlTdDgOMM6Q&libraries=places"},
    ],
  },
  generate: {
    fallback: true
  },
  /*
  * Router
  * */
  router: {
    // linkActiveClass: 'active-link primary'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-google-autocomplete.js', ssr: false},
    { src: '~/plugins/gmap-vue.js'},
    { src: '~/plugins/axios.js'},
    { src: '~/plugins/errorHandler.js'},
  ],


  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'auth/login', method: 'post' },
          logout: false,
          user: { url: 'auth/users', method: 'get', propertyName: false },
          // user: false,
        },
      },
    },
    redirect: {
      login: '/?login=1',
      logout: '/',
      user: '/dashboard/buyer/home',
      callback: '/'
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://www.sowerkbackend.com/api/'
  },
  toast: {
    position: 'bottom-right',
    duration: 2000
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: "#A61C00",
          accent: colors.red.lighten1,
          secondary: colors.amber.accent2,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      transpile: ['vue-google-autocomplete']
    }
  }
}
