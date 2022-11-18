<template>
  <h1
    v-once
    @click="increase">
    {{ count }}(v-once)
  </h1>
  <h1 v-html="msg">
  </h1>
  <h1 :id="bindMsg">
    bindMsg
  </h1>

  <div v-if="count >= 4">
    4 이상
  </div>
  <ul>
    <Fruit
      v-for="fruit in fruits"
      :key="fruit"
      :name="fruit">
      {{ fruit }}
    </Fruit>
  </ul>
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
      fruits:['Apple', 'banana', 'grape'],
      msg: `<div style="color:red;">v-html</div>`,
      bindMsg : 'v-bind'
    }
  },
  methods: {
    //increase: function(){
    increase(){
      this.count += 1;
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
</style>