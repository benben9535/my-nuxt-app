/**
 * 共用函式
 * app為vue實體
 * inject會自動全局引入
 * 呼叫方法：
 * server - context.$generalTool.getOS()
 * client - this.$generalTool.getOS()
 */
// import router from 'vue-router'

export default ({ app }, inject) => {
  inject('generalTool', {
    /**
     * 取得使用者的作業系統
     */
    getOS() {
      const userAgent = window.navigator.userAgent
      const platform = window.navigator.platform
      const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
      const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']
      const iosPlatforms = ['iPhone', 'iPad', 'iPod']
      let result = null

      if (macosPlatforms.includes(platform)) {
        result = 'Mac OS'
      } else if (iosPlatforms.includes(platform)) {
        result = 'iOS'
      } else if (windowsPlatforms.includes(platform)) {
        result = 'Windows'
      } else if (/Android/.test(userAgent)) {
        result = 'Android'
      } else if (!result && /Linux/.test(platform)) {
        result = 'Linux'
      }

      return result
    },
    /**
     * 前往連結
     *
     * @param {String} name 路由名稱
     * @param {Object} params 參數
     */
    goToPage(name, params = {}) {
      app.router.push({ name, params })
    }
  })
}
