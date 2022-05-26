<template>
  <div>
    <NavBar />
    <Nuxt class="main" />
    <FooterBar />
  </div>
</template>

<style lang="scss" scoped>
.main {
  min-height: calc(100vh - 80px - 30px);
  padding-top: 80px;
}
</style>
