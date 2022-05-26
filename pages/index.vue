<template>
  <div>
    home
    <button @click="openLoading">loading</button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'CommonLayout',
  asyncData(context) {
    console.log('asyncData')
  },
  fetch() {
    console.log('fetch')
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
    console.log(this.$generalTool.getOS())
  },
  methods: {
    openLoading() {
      this.$nuxt.$loading.start() // 啟動 loading
      setTimeout(() => {
        this.$nuxt.$loading.finish() // 關閉 loading
      }, 1000)
    }
  }
}
</script>
