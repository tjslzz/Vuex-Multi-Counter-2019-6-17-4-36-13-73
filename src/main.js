import Vue from 'vue'
import App from './App.vue'
import 'es6-promise/auto'

Vue.config.productionTip = false

import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    count:0
  },
  getters:{
    getCount:function(state){
      return function(){
        return state.count;
      }
    }
  },
  mutations:{
    add(state,num){
      state.count+=num;
    },
    sub(state,num){
      state.count-=num;
    }
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
