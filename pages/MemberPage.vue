<template>
  <div>
    會員中心
  </div>
</template>

<script>
export default {
  name: 'MemberPage',
  layout: 'CommonLayout',
  validate({ params, query, store }) {
    return false
  },
  data() {
    return {
      title: 'Member'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: '會員中心～～' },
        { hid: 'og:title', property: 'og:title', content: '會員中心' }
      ]
    }
  }
}
</script>
