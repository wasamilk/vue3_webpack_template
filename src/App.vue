<template>
  <h1>app</h1>
</template>

<script>
// import Fruit from '~/components/Fruit'
export default{
  data(){
    return {
      data1: 'data1'
    }
  },
  methods: {
    testMethod1(){
      this.data1 = 'data after testMethod'
    }
  }
}
</script>

<style lang="scss">
  h1 {
    font-size: 30px;
    font-weight: bold;
  }

  table, th, td {
    border: 1px solid black;
    padding: 5px;
    font-weight: bold;
    text-align: center;
  }
</style>