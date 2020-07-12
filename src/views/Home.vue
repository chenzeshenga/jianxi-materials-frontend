<template>
    <div class="home">
        <el-row class="hidden-md-and-down">
            <el-carousel :interval="4000" type="card" height="400px">
                <el-carousel-item v-for="item in pics" :key="item">
                    <el-image :src="item" fit="contain"></el-image>
                </el-carousel-item>
            </el-carousel>
        </el-row>
        <el-row class="hidden-md-and-up">
            <el-carousel style="width: 100%;height: 200px" direction="vertical" :autoplay="true">
                <el-carousel-item v-for="item in pics" :key="item">
                    <el-image :src="item" fit="contain"></el-image>
                </el-carousel-item>
            </el-carousel>
        </el-row>

    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    import api from "../request/request";

    export default {
        name: 'Home',
        // components: {
        //   HelloWorld
        // },
        data() {
            return {
                pics: [
                    'http://localhost:8888/img/1',
                    'http://localhost:8888/img/2',
                    'http://localhost:8888/img/3',
                    'http://localhost:8888/img/4',
                    'http://localhost:8888/img/5',
                    'http://localhost:8888/img/6',
                ]
            };
        },
        created() {
            api.test().then(res => {
                console.log(res)
            })
        }
    }
</script>
