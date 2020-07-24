<template>
    <div id="app" style="width: 100%">
        <el-row class="hidden-md-and-down">
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
                        <router-link to="/news" class="font-black">新闻中心</router-link>
                    </h2>
                </el-button>
                <el-button type="text">
                    <h2>
                        <router-link to="/product" class="font-black">产品服务</router-link>
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
                            <router-link to="/news" class="font-black">新闻中心</router-link>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <router-link to="/product" class="font-black">产品服务</router-link>
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
            <h5>宁波建锡新材料有限公司</h5>
            <h5>地址:浙江宁波慈溪高新技术产业开发区新兴二路89号</h5>
            <h5>电话：13363990612/13991957119 | 传真： | 邮箱：| 网址：| 备案号</h5>
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

</style>
