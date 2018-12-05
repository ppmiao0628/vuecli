<template>
  <div class="content" v-if="show" :class="showContent?'fadein':'fadeout'">
    <div>{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'MyToast',
  data() {
    return {
      text: 'this is a toast'
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
.fadein {
  -webkit-animation: animate-in 0.25s;
  -o-animation: animate-in 0.25s;
  animation: animate-in 0.25s;
}
.fadeout {
  -webkit-animation: animate-out 0.25s;
  -o-animation: animate-out 0.25s;
  animation: animate-out 0.25s;
  opacity: 0;
}
  @keyframes animate-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes animate-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
