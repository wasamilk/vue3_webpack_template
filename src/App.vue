<template>
  <button @click="clickeActive">Active</button>
  <button @click="clickeError">Error</button>
  <button @click="clickeReset">Reset</button>
  <h1 :class="{active:isActive, error:hasError}">Test text</h1>
  
</template>

<script>
import Fruit from '~/components/Fruit'
export default{
  components: {
    Fruit: Fruit
  },
  data(){
    return {
      isActive:false,
      hasError: false
    }
  },
  methods: {
    clickeActive(){
      this.isActive = true;
    },
    clickeError(){
      this.hasError = true;
    },
    clickeReset(){
      this.isActive = false;
      this.hasError = false;
    }
  }
}
</script>

<style lang="scss">
  .active {
    font-weight: bold;
  }

  .error {
    color:red;
  }
</style>