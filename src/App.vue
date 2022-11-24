<template>
  <button @click="changeFlag1">{{ isShow1 }}</button>
  <button @click="changeFlag2">{{ isShow2 }}</button>
  <h1 v-if="isShow1">
    Flag1 = {{ isShow1 }}
  </h1>
  <h1 v-if="isShow2">
    Flag2 = {{ isShow2 }}
  </h1>
  <h1 v-else>
    v-else 1
  </h1>
  <hr/>
  <br/>
  <input type="text" v-model="inputTxt"/>
  <button @click="removeFruit">removeFruit</button>
  <button @click="addFruit">addFruit</button>

  <template v-if="isFruitsExist()">
    <table class="addTopMargin">
      <tr>
        <th v-for="fruit in fruits" :key="fruit">{{fruit.at(0)}}</th>
      </tr>
      <tr>
        <td v-for="fruit in fruits"
            :key="fruit"
            :class="fruit.toLowerCase()">
          {{fruit}}
        </td>
      </tr>
      <tr>
        <td  v-for="fruit in fruitsObj" :key="fruit">
          <button @click="btnTest" :class="fruit.name">-</button>
          {{ fruit.cnt }}
          <button @click="btnTest" :class="fruit.name">+</button>
        </td>
      </tr>
    </table>
  </template>
  <template v-else>
    <h1 class="no-fruit">no fruits</h1>
  </template>


</template>

<script>
import Fruit from '~/components/Fruit'
export default{
  data(){
    return {
      isShow1: true,
      isShow2: true
      ,fruits : ['Apple','Banana','Cherry']
      ,inputTxt:''
      ,count: 0
      ,fruitsObj:{}
    }
  }, methods: {
    changeFlag1(){
      this.isShow1 = !(this.isShow1);
    },
    changeFlag2(){
      this.isShow2 = !(this.isShow2);
    },
    isFruitsExist(){
      if(this.fruits==undefined || this.fruits.length==0){
        return false;
      } else {
        return true;
      }
    },
    removeFruit() {
      const newTxt = this.inputTxtToUpper;
      this.fruits = this.fruits.filter(function(e) { return e !== newTxt })
      this.fruitsObj = this.fruitsObj.filter(function(e) { return e.name !== newTxt })
    },
    addFruit() {
      if(this.inputTxtToUpper.length == 0){
        alert('empty!');
        return;
      }
      else if( this.fruits.includes(this.inputTxtToUpper) ) {
        alert('already exist')
        return;
      }
      this.sortingFruits = this.inputTxtToUpper;
    },
    btnTest(e) {
      const btnType = e.target.innerText;
      const btnClass = e.target.className;
      this.fruitsObj = this.fruitsObj.map(fruit => {
        // console.log(fruit)
        if (fruit.name === btnClass) {
          if(btnType == '+'){
            fruit.cnt += 1
          }else if(fruit.cnt == 1){
            //remove
          }else {
            fruit.cnt -= 1
          }
        }
        return fruit
      })
    }
  },
  computed: {
    inputTxtToUpper() {
      return this.inputTxt.charAt(0).toUpperCase() + this.inputTxt.slice(1).toLowerCase()
    },
    sortingFruits: {
      // get() {
      //   return this.fruits.sort();
      // },
      set(newTxt) {
        this.fruits.push(newTxt);
        this.fruits.sort();
        const arrIndx = this.fruits.indexOf(newTxt);
        this.fruitsObj.splice(arrIndx, 0, {name:newTxt, cnt:1});
      }
    }
    // ,
    // countingFruits: {
    //   set(fruit) {
    //     console.log('countingFruits : ', this.fruitsObj[fruit]);
    //   }
    // }
  },
  mounted() {
    this.fruitsObj = this.fruits.map((fruit) => {
      return {
        cnt: 1,
        name: fruit
      }
    })
    console.log(typeof this.fruitsObj)  //object
    console.log(this.fruitsObj)  //object
  }
}
</script>

<style lang="scss">
  table, th, td {
    border: 1px solid black;
    padding: 5px;
    font-weight: bold;
    text-align: center;
  }
  .apple, .cherry, .tomato {
    color:red;
  }
  .banana, .lemon {
    color:yellowgreen;
  }
  .grape {
    color:purple;
  }
  .orange {
    color:orange;
  }

  .addTopMargin {
    margin-top: 10px;
  }

  .no-fruit {
    font-size: 30px;
    font-weight: bold;
    color:red;
  }

</style>