<template>

  <h1
    v-once
    @click="increase">
    {{ count }}(v-once)
  </h1>
  <h1
      @click="increase">
    {{ count }}(v-bind)
  </h1>
  <div v-if="isCountOverFour">
    4 이상
  </div>
  <hr/>

  <h1 v-html="msg">
  </h1>
  <h1>
    {{ msg }}
  </h1>
  <hr/>

  <ul>
    <Fruit
      v-for="fruit in fruits"
      :key="fruit"
      :name="fruit"
      :class="testBind"/>
  </ul>
  <hr/>

  <p>{{ testTxt }}</p>
  <p>{{ reversedTxt }}</p>
</template>

<script>
import Fruit from '~/components/Fruit'
export default{
  components: {
    Fruit: Fruit
  },
  data(){
    return {
      count: 2,
      fruits:['Apple', 'Banana', 'Cherry'],
      msg: `<div style="color:red;">v-html</div>`,
      bindMsg : 'v-bind',
      testBind : 'testClass',
      testTxt: 'Hello world'
    }
  },
  methods: {
    //increase: function(){
    increase(){
      this.count += 1;
    }
  },
  computed: {
    isCountOverFour(){
      return this.count >= 4
    },
    reversedTxt(){
      return this.testTxt.split('').reverse().join('')
    }
  }
}
</script>

<style lang="scss">
  h1 {
    font-size: 30px;
    color: blue;
  }
  #v-bind {
    color:greenyellow;
  }

  ul {
    li {
      font-size: 30px;
    }
  }

  .testClass {
    color:blueviolet;
  }
</style>