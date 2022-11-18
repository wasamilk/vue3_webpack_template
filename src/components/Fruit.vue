<template>
  <li>
    {{ name }}
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type:String,
      default:'default test'
    }
  },
  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {
    console.log("created")
  },
  mounted(){
    this.count += 1;
    console.log("onMounted")
  },
  updated() {
    console.log("updated")
  }
}
</script>

<style scoped>

</style>