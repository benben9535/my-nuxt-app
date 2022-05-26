<template>
  <div class="error">
    404 Error
    <div class="back-btn" @click="goBack">Back</div>
  </div>
</template>

<script>
/**
 * 自定義Error頁面組件
 */
export default {
  name: 'Error',
  methods: {
    /**
     * 回上一頁
     */
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  width: 100vw;
  height: 100vh;
  background-color: #ffe4e4;
  color: #fff;
  font-size: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.back-btn {
  width: 200px;
  height: 50px;
  line-height: 50px;
  font-size: 26px;
  text-align: center;
  background-color: #fff;
  color: #ffe4e4;
  border-radius: 12px;
  margin-top: 30px;
  cursor: pointer;
}
</style>
