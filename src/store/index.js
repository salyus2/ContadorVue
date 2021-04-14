import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    appName: 'Contador'
  },
  mutations: {
    increment (state, qty){
      state.counter += qty
    },
    decrement (state, qty) {
      state.counter -= qty
    }
  },

  modules: {
  }
})
