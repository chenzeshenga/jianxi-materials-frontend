<template>
    <div id="app" style="width: 100%">
        <el-row class="hidden-md-and-down">
            桌面端
            <el-col :span="8">
                <img src="./assets/jianxi.jpg" alt="jianxi">
            </el-col>
            <el-col :span="8" :offset="7" style="padding-top: 50px;">
                <el-button type="text">
                    <h2>
                        <router-link to="/introduce" class="font-black">公司介绍</router-link>
                    </h2>
                </el-button>
                <el-button type="text">
                    <h2>
                        <router-link to="/about" class="font-black">新闻中心</router-link>
                    </h2>
                </el-button>
                <el-button type="text">
                    <h2>
                        <router-link to="/" class="font-black">产品服务</router-link>
                    </h2>
                </el-button>
                <el-button type="text">
                    <h2>
                        <router-link to="/" class="font-black">下载中心</router-link>
                    </h2>
                </el-button>
                <el-button type="text">
                    <h2>
                        <router-link to="/" class="font-black">联系我们</router-link>
                    </h2>
                </el-button>
            </el-col>
        </el-row>
        <el-row class="hidden-md-and-up" style="height: 100px">
            移动端
            <el-col :span="16">
                <img src="./assets/jianxi.jpg" alt="jianxi" style="height: 100px">
            </el-col>
            <el-col :span="8" style="padding-top: 30px">
                <el-dropdown>
                  <span class="el-dropdown-link">
                    公司介绍<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            <router-link to="/introduce" class="font-black">公司介绍</router-link>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <router-link to="/introduce" class="font-black">新闻中心</router-link>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <router-link to="/introduce" class="font-black">产品服务</router-link>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <router-link to="/introduce" class="font-black">下载中心</router-link>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <router-link to="/introduce" class="font-black">联系我们</router-link>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>
        <router-view/>
        <el-row>
            <h5>西安塔博瑞克新材料有限公司</h5>
            <h5>陕西省西安市高新区高新一路18号海归路1栋4 单元4020号</h5>
            <h5>电话：13991807916 | 传真： | 邮箱：| 网址：| 备案号</h5>
        </el-row>
    </div>
</template>

<script>
    // import request from "./utils/request";

    export default {
        name: 'app',

        methods: {}
    }
</script>

<style>
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

</style>
