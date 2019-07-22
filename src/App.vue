<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{info}}</h1>
    <h3>请输入数字  <input type="text" v-model.number="counter"></h3>
    <div v-for="item in counter" v-bind:key = "item.key">
      <count v-on:addnum="$store.commit('add',$event)" v-on:subnum="$store.commit('sub',$event)"></count>
    </div>
    <h2>总数：{{$store.getters.getCount()}}</h2>
    </div>
</template>
<script>
import count from './components/count.vue';
export default {
  name: 'app',
  data:function(){
    return {
      counter : 0,
      info:""
    }
  },
  components : {count},
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
// import axios from "axios";
//   mounted () {
//     axios
//       .get('http://localhost:8888/hello')
//       .then(response => (this.info = response.data))
//   }
