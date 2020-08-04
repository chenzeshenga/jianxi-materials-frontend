<template>
    <div id="app" style="width: 100%">
        <el-row class="hidden-md-and-down" :gutter="50">
            <el-col :span="4" :offset="3">
                <img src="./assets/图标1.jpg" alt="jianxi">
            </el-col>
            <el-col :span="12" :offset="2" style="padding-top: 50px;">
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
                                                               class="font-black">技术实力</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/introduce?id=4"
                                                               class="font-black">公司理念</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/introduce?id=5"
                                                               class="font-black">组织架构</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/introduce?id=6"
                                                               class="font-black">地址</router-link></el-dropdown-item>
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
                        <router-link to="/product" class="font-black nav">产品服务</router-link>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item><router-link to="/product"
                                                               class="font-black">半导体</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/product"
                                                               class="font-black">平板显示</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/product"
                                                           class="font-black">太阳能</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/product"
                                                               class="font-black">其他</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/product"
                                                               class="font-black">服务</router-link></el-dropdown-item>
                                </el-dropdown-menu>
                        </el-dropdown>
                    </span>
                </el-button>
                <el-button type="text">
                    <span class="nav">
                        <router-link to="/document" class="font-black">下载中心</router-link>
                    </span>
                </el-button>
                <el-button type="text">
                    <span class="nav">
                        <router-link to="/contact" class="font-black">人力资源</router-link>
                    </span>
                </el-button>
            </el-col>
        </el-row>
        <el-row class="hidden-md-and-up" style="height: 100px">
            <el-col :span="16">
                <img src="./assets/图标1.jpg" alt="jianxi" style="height: 40%;width: 90%;margin-top: 5%">
            </el-col>
            <el-col :span="8" style="padding-top: 30px">
                <el-dropdown>
                  <span class="el-dropdown-link">
                    首页<i class="el-icon-arrow-down el-icon--right"></i>
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
                            <router-link to="/product" class="font-black">产品服务</router-link>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <router-link to="/document" class="font-black">下载中心</router-link>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <router-link to="/contact" class="font-black">人力资源</router-link>
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

</style>
