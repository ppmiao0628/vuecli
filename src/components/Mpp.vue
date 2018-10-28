<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>username:{{ $route.params.username }}</h1>
    <h1>age:{{ $route.params.age }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Mpp',
  data () {
    return {
      msg: 'Welcome to Your Mpp page'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
