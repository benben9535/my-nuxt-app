<template>
  <div>
    關於我們頁面
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  layout: 'CommonLayout',
  data() {
    return {
      title: 'About us'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: '關於我們的描述文字～' },
        { hid: 'og:title', property: 'og:title', content: '關於我們的og-title' }
      ]
    }
  }
}
</script>
