
<template>
  <div class="hello">
    <div class="title-class">获取图片信息</div>
    <img id="imgElement" src="../../assets/img/Bush-dog.jpg" width="500px">
    <div>图片信息：{{imgInfo}}</div>
  </div>
</template>

<script>
  import store from "@/vuex/store";

  export default {
    components: {},
    name: "app",
    store,
    data() {
      return {
        imgInfo: ''
      };
    },
    created: function () {
      this.initFun();
    },
    methods: {
      initFun: function () {
        let self = this;
        EXIF.getData(document.getElementById('imgElement'), function () {
          console.log('callback');
          self.imgInfo = EXIF.getTag(this, "Make");
        });
      }
    }
  };
</script>
<style scoped>
  div {
    margin-top: 1rem;
  }

  .mtp-class {
    margin-top: 3rem;
  }

  .title-class {
    font-size: 6rem;
    color: #ff1100;
  }

  .time-class {
    font-size: 12rem;
    color: #666666;
  }

  .time-class-working {
    font-size: 12rem;
    color: #11aaff;
  }

  .input-event {
    line-height: 1.26;
    position: relative;
    height: 4rem;
    width: 25%;
    min-width: 20rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-left: 0.3rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    align-items: center;
  }

  .tm-btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
  }

  .tm-btn-primary:hover {
    color: #fff;
    background-color: #2e6da4;
    border-color: #2e6da4;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
  }
</style>
