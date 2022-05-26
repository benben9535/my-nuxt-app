<template>
  <div>
    product detail
  </div>
</template>

<script>
export default {
  asyncData(context) {
    console.log(context.params.productId)
    return {
      id: context.params.productId
    }
  }
}
</script>
