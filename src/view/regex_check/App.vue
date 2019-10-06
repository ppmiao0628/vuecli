<template>
<div id="app">
  <input type="text" v-model="inputRegex">
  <input type="text" v-model="inputStr">
  <button @click="getResult" >check</button>
  <div v-text="showResult"></div>
</div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        inputRegex:'',
        inputStr:'',
        showResult:''
      }
    },
    methods:{
      getResult(){
        // debugger;
        console.log(this.inputRegex);
        if (this.inputRegex.indexOf('/')===0 && this.inputRegex.lastIndexOf('/')===this.inputRegex.length-1){
          this.showResult = eval(this.inputRegex).test(this.inputStr);
        } else {
          let RegexExec = new RegExp(this.inputRegex);
          this.showResult = RegexExec.test(this.inputStr);
        }
      }
    }
  }
</script>
