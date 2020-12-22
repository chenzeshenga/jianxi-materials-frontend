<template>
  <div class="home">
    <el-row class="hidden-md-and-down">
      <div class="wrapper" :style="wrapper">
        <p style="z-index: 20;margin-left: 20%;margin-top: -5%">创新、共赢、严谨、诚信</p>
        <el-button
            style="filter:alpha(Opacity=80);-moz-opacity:0.5;opacity: 0.5;font-size: 40px;color: white;text-align: left;margin-left: -32%"
            type="text" @click="route2introduce">
          了解更多
        </el-button>
      </div>
      <div class="wrapper2" :style="wrapper2">
        <p style="z-index: 20;margin-left: 20%">高纯金属及特种合金产业的拓荒者和耕耘者</p>
        <el-button
            style="filter:alpha(Opacity=80);-moz-opacity:0.5;opacity: 0.5;font-size: 40px;color: white;text-align: left;margin-left: -32%"
            type="text" @click="route2introduce">
          了解更多
        </el-button>
      </div>
      <el-carousel :interval="4000" height="800px" @change="carouselChange">
        <el-carousel-item>
          <img src="../assets/index/1.jpg" style="width: 100%" alt="建锡"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/index/2.jpg" style="width: 100%" alt="建锡"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/index/3.jpg" style="width: 100%" alt="建锡"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/index/4.jpg" style="width: 100%" alt="建锡"/>
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <el-row class="hidden-md-and-up">
      <el-carousel style="width: 100%;height: 200px" direction="vertical" :autoplay="true">
        <el-carousel-item>
          <img src="../assets/index/1.jpg" style="width: 100%" alt="建锡"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/index/2.jpg" style="width: 100%" alt="建锡"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/index/3.jpg" style="width: 100%" alt="建锡"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/index/4.jpg" style="width: 100%" alt="建锡"/>
        </el-carousel-item>
      </el-carousel>
      <div class="wrapper3" :style="wrapper">
        <p style="z-index: 20;">创新、共赢、严谨、诚信</p>
        <el-button
            style="text-align: left;margin-left: -32%"
            type="text" @click="route2introduce">
          了解更多
        </el-button>
      </div>
      <div class="wrapper4" :style="wrapper2">
        <p style="z-index: 20;">特种合金靶材产业的拓荒者和耕耘者</p>
        <p style="z-index: 20;">全球知名的靶材及特种合金品牌</p>
        <el-button style="color: white;text-align: left;margin-left: -32%"
                   type="text" @click="route2introduce">
          了解更多
        </el-button>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      hidden: {
        display: 'none'
      },
      show: {
        display: 'block'
      },
      wrapper: {},
      wrapper2: {},
    };
  },
  created() {
    this.wrapper = this.show;
    this.wrapper2 = this.hidden;
  },
  methods: {
    carouselChange(newIndex) {
      if (newIndex % 2 === 1) {
        this.wrapper = this.hidden;
        this.wrapper2 = this.show;
      } else {
        this.wrapper = this.show;
        this.wrapper2 = this.hidden;
      }
    },
    route2introduce() {
      this.$router.push({path: '/introduce'})
    }
  }
}
</script>

<style scoped>
p {
  text-align: left;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  /*初始状态 透明度为0*/
  40% {
    opacity: 0;
  }
  /*过渡状态 透明度为0*/
  100% {
    opacity: 1;
  }
  /*结束状态 透明度为1*/
}

@-webkit-keyframes fade-in { /*针对webkit内核*/
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.wrapper {
  animation: fade-in; /*动画名称*/
  animation-duration: 1.5s; /*动画持续时间*/
  -webkit-animation: fade-in 1.5s; /*针对webkit内核*/
  z-index: 20;
  margin-top: 15%;
  border: black;
  position: absolute;
  font-size: 50px;
  color: white;
  margin-left: 10%;
  width: 40%
}

.wrapper2 {
  animation: fade-in; /*动画名称*/
  animation-duration: 1.5s; /*动画持续时间*/
  -webkit-animation: fade-in 1.5s; /*针对webkit内核*/
  z-index: 20;
  margin-top: 15%;
  border: black;
  position: absolute;
  font-size: 40px;
  color: white;
  margin-left: 10%;
  width: 52%
}

.wrapper3 {
  animation: fade-in; /*动画名称*/
  animation-duration: 1.5s; /*动画持续时间*/
  -webkit-animation: fade-in 1.5s; /*针对webkit内核*/
  z-index: 20;
  margin-top: 12%;
  border: black;
  font-size: 20px;
}

.wrapper4 {
  animation: fade-in; /*动画名称*/
  animation-duration: 1.5s; /*动画持续时间*/
  -webkit-animation: fade-in 1.5s; /*针对webkit内核*/
  z-index: 20;
  margin-top: 12%;
  border: black;
  font-size: 16px;
}
</style>