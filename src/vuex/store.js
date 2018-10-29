import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}
const mutations = {
  add(state) {
    return state.count++;
  },
  reduce(state) {
    return state.count--;
  }
}

export default new Vuex.Store({
  state, mutations
})