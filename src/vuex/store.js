import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}
const mutations = {
  add(state, n) {
    return state.count += n;
  },
  reduce(state, n) {
    return state.count -= n;
  }
}
const getters = {
  count: state => state.count += 20
}

export default new Vuex.Store({
  state, mutations, getters
})