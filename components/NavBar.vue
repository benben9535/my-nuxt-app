<template>
  <nav class="nav">
    <div class="logo" @click="goToPage('index')">Logo</div>
    <div class="menu">
      <div @click="goToPage('AboutUs')">About us</div>
      <div>Products</div>
    </div>
    <div class="tools">
      <div>Cart</div>
      <div @click="goToPage('MemberPage')">Member</div>
    </div>
  </nav>
</template>

<script>
/**
 * Nav組件
 */
export default {
  name: 'NavBar',
  methods: {
    goToPage(name) {
      // this.$router.push({ name })
      this.$generalTool.goToPage(name)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  box-sizing: border-box;
  position: fixed;
  height: 80px;
  width: 100vw;
  background-color: rgba($color: #FFF, $alpha: 0.5);
  box-shadow: 0 2px 10px rgba($color: #000000, $alpha: 0.1);
  color: #b1b1b1;
  padding: 0 40px;
  display: flex;
  align-items: center;
}

.logo {
  cursor: pointer;
  font-size: 20px;
  margin-right: 100px;
}
.menu {
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  div {
    cursor: pointer;
    margin-right: 20px;
  }
}
.tools {
  display: flex;
  align-items: center;
  margin-left: auto;
  div {
    cursor: pointer;
    width: 60px;
    font-size: 16px;
    margin-left: 15px;
  }
}
</style>
