<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ $route.params.username }}</h1>
    <h1>{{ $route.params.age }}</h1>

  </div>
</template>

<script>
export default {
  name: 'Mpp1',
  data () {
    return {
      msg: 'Welcome to Your Mpp1 page'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
