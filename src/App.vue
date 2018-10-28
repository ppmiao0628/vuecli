<template>
  <div id="app">
    <router-link to='/'>index</router-link> |
    <router-link to='/mpp'>Mpp</router-link> |
    <router-link :to="{name:'mpp1',params:{username:'keller',age:25}}">Mpp1</router-link>
    <div>{{$route.name}}</div>
    <router-view/>
    <router-view name="left" class="left-view"></router-view>
    <router-view name="right" class="right-view"></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.left-view {
  float: left;
  width: 50%;
  height: 500px;
  background: #0a2;
}
.right-view {
  float: right;
  width: 50%;
  height: 500px;
  background: #ac0;
}
</style>
