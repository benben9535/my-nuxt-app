<template>
  <transition name="fade-500">
    <div v-if="loading" class="loading-mask">
      Loading...
    </div>
  </transition>
</template>
<script>
/**
 * 自訂義Loading遮罩
 */
export default {
  name: 'LoadingMask',
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: rgba($color: #fff, $alpha: 0.7);
  color: #b1b1b1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
