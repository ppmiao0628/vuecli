<template>
  <div id="app">
    <ul class="navi-base">
      <li class="navi-item">
        <router-link class="navi-item-link" to='/'>主页</router-link>
      </li>
      <li class="navi-item">
        <router-link class="navi-item-link" to='/tomatotime'>tomatoTime</router-link>
      </li>
      <li class="navi-item">
        <router-link class="navi-item-link" to='/mpp/keller/23'>Mpp</router-link>
      </li>
      <li class="navi-item">
        <router-link class="navi-item-link" to='/goHome'>goHome</router-link>
      </li>
      <li class="navi-item">
        <router-link class="navi-item-link" to='/goParams/keller/23'>goParams</router-link>
      </li>
      <li class="navi-item">
        <router-link class="navi-item-link" :to="{name:'mpp1',params:{username:'keller',age:25}}">Mpp1</router-link>
      </li>
    </ul>
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
    margin: 0 1rem;
  }

  .navi-base {
    width: 100%;
    height: 3rem;
    list-style-type: none;
    background-color: #333;
    padding-top: 6px;
    padding-bottom: 6px;
  }

  .navi-item {
    display: inline;
    color: #fff;
    float: left;
  }

  .navi-item-link {
    width: 0.05rem;
    height: 100%;
  }

  .navi-item-link:link, .navi-item-link:visited {
    font-weight: bold;
    color: #FFFFFF;
    background-color: #888;
    text-align: center;
    padding: 6px;
    text-decoration: none;
    text-transform: uppercase;
  }

  .navi-item-link:hover, .navi-item-link:active {
    background-color: #000;
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
