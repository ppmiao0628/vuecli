<template>
  <div class="hello">
    <div class="title-class">番茄时间法</div>
    <div :class="timeClass">{{minTime}}:{{secTime}}</div>
    <div><input class="input-event" type="text" placeholder="请输入你要做的事情" v-model="eventName"></div>
    <div class="mtp-class">
      <div>
        <button class="tm-btn-primary" @click="startFun">{{startMenu}}</button>
      </div>
      <div>
        <button class="tm-btn-primary" @click="restFun">{{restMenu}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/vuex/store";
// import toast from "../../components/mytoast/MyToast";


export default {
  components: {},
  name: "app",
  store,
  data() {
    return {
      minTime: "25",
      secTime: "00",
      eventName: "",
      startMenu: "开始一个番茄时间",
      startMenuFlag: "true",
      restMenu: "开始休息",
      restMenuFlag: "true",
      timeClass: "time-class",
      total: 0
    };
  },
  created: function() {
    this.initFun();
  },
  methods: {
    initFun: function() {
      this.minTime = "25";
      this.secTime = "00";
      this.startMenu = "开始一个番茄时间";
      this.timeClass = "time-class";
    },
    startFun: function() {
      let self = this;
      if (!self.eventName) {
        self.$toast('兄弟，你没填内容啊');
        return;
      }
      self.startMenuFlag = !self.startMenuFlag;
      self.startMenu = self.startMenuFlag
        ? "开始一个番茄时间"
        : "停止一个番茄时间";
      self.minTime = "00";
      self.secTime = "05";
      self.updateTime();
    },
    restFun: function() {
      // let self = this
    },
    abortFun: function() {
      // let self = this
    },
    stopFun: function() {
      // let self = this
    },
    updateTime: function() {
      let self = this;
      this.timeClass = "time-class-working";
      store.commit(
        "setTotalTime",
        Number(self.minTime) * 60 + Number(self.secTime)
      );
      let interval = setInterval(function() {
        store.commit("reduceTotalTime");
        self.secTime = self.padStart(self.$store.state.totalTime % 60);
        self.minTime = self.padStart(
          Math.floor(self.$store.state.totalTime / 60)
        );
        if (!self.$store.state.totalTime) {
          console.log("停止");
          clearInterval(interval);
          setTimeout(()=>{
            alert("恭喜获得一个番茄时间");
          },1);
        }
      }, 1000);
    },
    checkEventName: function () {
      let self = this;
      if (!self.eventName){
        return false;
      }
      return true;
    },
    padStart: function(str) {
      let len = String(str).length;
      return len > 1 ? str : "0" + str;
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
