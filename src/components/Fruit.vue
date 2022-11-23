<template>
  <li>
    (Fruit) : {{ name }}
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type:String,
      default:'default test'
    }
  }
}
</script>

<style scoped>

</style>