<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>username:{{ $route.params.username }}</h1>
    <h1>age:{{ $route.params.age }}</h1>
    <h2>{{$store.state.count}}:from state</h2>
    <!-- <h2>{{count1}}:from state</h2> -->
    <h2>{{count}}:from state</h2>
    <p>
      <button @click="$store.commit('add',10)">+</button>
      <button @click="reduce(5)">-</button>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import store from "@/vuex/store";
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "Mpp",
  data() {
    return {
      msg: "Welcome to Your Mpp page"
    };
  },
  store,
  // computed: {
  //   count1() {
  //     return store.state.count + "-computed";
  //   },
  // }
  // computed: mapState({
  //   count2: function(state) {
  //     return state.count;
  //   }
  // })
  computed: {
    ...mapState(["count"]),
    ...mapGetters(['count'])
  },
  methods:mapMutations(['add','reduce'])
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
