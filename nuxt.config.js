export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-nuxt-app',
    htmlAttrs: {
      lang: 'zh-Hant'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'nuxt專案邊做邊學～SSR我來了' },
      { hid: 'keyword', name: 'keyword', content: 'vue,ssr,nuxt' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // 定義預設Loading Progress Bar
  // loading: {
  //   color: '#ffe4e4', // 進度條顏色
  //   failedColor: '#ffe4e4', // 錯誤時的進度條顏色
  //   height: '5px', // 進度條粗細
  //   throttle: 200, // 呈現效果前的緩衝時間
  //   duration: 5000, // 呈現效果的最長時間
  //   rtl: false // 進度條方向，false 從左到右，true 反之
  // },

  // 自訂義Loading組件
  loading: '@/components/LoadingMask.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/index.scss',
    '@/assets/scss/transition.scss'
  ],

  // 定義路由頁面轉場效果
  pageTransition: {
    name: 'fade-to-right',
    mode: 'out-in'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // 引入共用函式
    '~/plugins/general-tool.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}

  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       name: 'custom',
  //       path: '/custom',
  //       component: resolve(__dirname, 'pages/CommonPage.vue')
  //     })
  //   }
  // }
}
