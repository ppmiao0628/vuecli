import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1,
  totalTime: 0
}
const mutations = {
  add(state, n) {
    console.log('mutatiosn-add');
    return state.count += n;
  },
  // reduce(state, n) {
  //   console.log('mutatiosn-reduce');
  //   return state.count -= n;
  // },
  setTotalTime (state, t) {
    state.totalTime = t
  },
  reduceTotalTime (state) {
    return state.totalTime--
  }
}
const getters = {
  count: state => {
    console.log('getters');
    return state.count += 20;
  }
}
const actions = {
  addActions(context) {
    context.commit('add', 4);
    setTimeout(() => {
      context.commit('reduce', 5)
    }, 3000);
    console.log('addActions执行了');
  },
  reduceActions({ commit }) {
    commit('reduce', '3');
  }
}
export default new Vuex.Store({
  state, mutations, getters, actions
})