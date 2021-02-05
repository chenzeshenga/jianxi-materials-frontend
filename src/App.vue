<template>
  <div id="app" style="width: 100%">
    <el-row class="hidden-md-and-down" :gutter="50">
      <el-col :span="6" :offset="3">
        <img src="./assets/图标1.jpg" alt="jianxi" style="padding-top:2%;width: 100%">
      </el-col>
      <el-col :span="12" :offset="2" style="padding-top: 2%;">
        <el-button type="text">
                    <span class="nav">
                            <router-link to="/" class="font-black">首页</router-link>
                    </span>
        </el-button>
        <el-button type="text">
                    <span class="nav">
                        <el-dropdown>
                            <router-link to="/introduce" class="font-black nav">关于我们</router-link>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item><router-link to="/introduce?id=1"
                                                               class="font-black">公司概述</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/introduce?id=2"
                                                               class="font-black">团队介绍</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/introduce?id=3"
                                                               class="font-black">技术路线</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/introduce?id=5"
                                                               class="font-black">组织架构</router-link></el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </span>
        </el-button>
        <el-button type="text">
                    <span class="nav">
                        <el-dropdown>
                        <router-link to="/news" class="font-black nav">新闻中心</router-link>
                        <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item><router-link to="/news?id=2"
                                                               class="font-black">行业动态</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/news?id=1"
                                                               class="font-black">公司新闻</router-link></el-dropdown-item>
                            </el-dropdown-menu>
                            </el-dropdown>
                    </span>
        </el-button>
        <el-button type="text">
                    <span class="nav">
                        <el-dropdown>
                          <router-link to="/product" class="font-black nav">产品与服务</router-link>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item><router-link to="/product"
                                                               class="font-black">高纯金属</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/product"
                                                               class="font-black">铜合金</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/product"
                                                               class="font-black">铝合金</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/product"
                                                               class="font-black">其他产品</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/product"
                                                               class="font-black">定制化产品</router-link></el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </span>
        </el-button>
        <el-button type="text">
                    <span class="nav">
                        <router-link to="/contact" class="font-black">联系我们</router-link>
                    </span>
        </el-button>
      </el-col>
    </el-row>
    <el-row class="hidden-md-and-up" style="height: 100px">
      <el-col :span="16">
        <img src="./assets/图标1.jpg" alt="jianxi" style="width:100%;padding-top:30px">
      </el-col>
      <el-col :span="8" style="padding-top: 30px">
        <el-dropdown>
                  <span class="el-dropdown-link" style="font-size: 16px">
                    首页<em class="el-icon-arrow-down el-icon--right"></em>
                  </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="/" class="font-black">首页</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/introduce" class="font-black">关于我们</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/news" class="font-black">新闻中心</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/product" class="font-black">产品与服务</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/contact" class="font-black">联系我们</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <router-view/>
    <el-row>
      <h5>宁波建锡新材料有限公司 电话：0574-82357006 | 邮箱：jianxi@jianxi-materials.com | 备案号: <span><a
          href="https://beian.miit.gov.cn" target="_blank">浙ICP备2020033888号-1</a></span></h5>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app',

  methods: {}
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h2 {
  color: black;
}

.font-black {
  color: black;
}

a {
  text-decoration: none;
}

.nav {
  font-size: 20px;
  margin-right: 20px
}

a:hover {
  background: #3a8ee6;
  color: white;
}

.bg-color-grey {
  color: #000;
  background-color: #dedede;
  font-size: 22px;
  border-radius: 5px;
}

h5 {
  color: lightgray;
}
</style>
