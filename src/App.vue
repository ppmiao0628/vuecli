<template>
  <div id="app">
    <div class="head">
      <router-link to='/'>index</router-link> |
      <router-link to='/tomatotime'>tomatoTime</router-link> |
      <router-link to='/mpp/keller/23'>Mpp</router-link> |
      <router-link to='/goHome'>goHome</router-link> |
      <router-link to='/goParams/keller/23'>goParams</router-link> |
      <router-link :to="{name:'mpp1',params:{username:'keller',age:25}}">Mpp1</router-link>
    </div>
  
    <!-- <div>{{$route.name}}</div> -->
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
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.head {
  width: 100%;
  height: 3rem;
  background-color: #acd;
  
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
