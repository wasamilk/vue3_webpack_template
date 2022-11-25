<template>
  <div>
    <h1 ref="title"> testComponent </h1>
    <Child ref="child"/>
  </div>
</template>

<script>
import Child from "~/components/Child"
export default {
  name: "TestComponent",
  components:{
    Child
  },
  created() {
    console.log(this.$refs.title)
  },
  mounted() {
    console.log(this.$refs.title)
    console.log(this.$refs.child.$refs.child)
  }
}
</script>

<style scoped>
  h1 {
    color: red;
    padding-bottom: 20px;
  }
  h3{
    padding-top: 10px;
    padding-bottom: 10px;
  }
  div {
    padding: 30px;
  }
</style>