<template>
  <div class="content">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'MyToast',
  data () {
    return {
      msg: 'this is a toast'
    }
  }
}
</script>

<style scoped>
.content {
  position: fixed;
  left: 50%;
  top: 50%;
  font-size: 1.5pc;
  padding: 1rem;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: #000;
  background-color: darkgray;
}
</style>
