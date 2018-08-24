const pkg = require('./package');

module.exports = {
    mode: 'spa',

  /*
  ** Headers of the page
  *
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },*/
    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description},
        ],
        script: [
            {
                src:
                    '//www.socialintents.com/api/socialintents.1.3.js#2c9fa5636549dc8e0165564971330288',
                async: 'async',
            },
        ],
        link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#FFFFFF'},

    /*
    ** Global CSS
    */
    css: ['~/css/main.css'],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        // Doc: https://buefy.github.io/#/documentation
        'nuxt-buefy',
    ],
    /*
    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                });
            }
        },
    },
    router: {
        base: process.env.NODE_ENV === "production" ? '/vue/dist/' : ""
    }
};
