<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>username:{{ $route.params.username }}</h1>
    <h1>age:{{ $route.params.age }}</h1>
    <h2>{{$store.state.count}}:from state</h2>
    <p>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import store from "@/vuex/store"
export default {
  name: 'Mpp',
  data () {
    return {
      msg: 'Welcome to Your Mpp page'
    }
  },
  store
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
