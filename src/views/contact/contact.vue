<template>
    <div>
        <img class="hidden-md-and-up" src="../../assets/hr-deader.jpg" width="100%" alt="hr">
        <img class="hidden-md-and-down" src="../../assets/hr-deader.jpg" style="width: 100%;height: 150px" alt="hr">
        <div class="hidden-md-and-down">
            <el-row style="padding-left: 20%;width: 100%;padding-right: 20%">
                <el-col class="el-col-lg-8 el-col-md-24 el-col-sm-24" v-for="o in 3" :key="o"
                        style="margin-top: 2%;">
                    <el-card style=" padding: 0; text-align:left ">
                        <div style="padding: 14px;">
                            <span>岗位信息：123</span><br>
                            <span>岗位介绍：介绍</span><br>
                            <span>联系方式：介绍</span>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        <div class="hidden-md-and-up">
            <el-row style="width: 100%;padding: 1%">
                <el-col class="el-col-lg-8 el-col-md-24 el-col-sm-24" v-for="o in 3" :key="o"
                        style="margin-top: 2%;margin-left: 1%">
                    <el-card style=" padding: 0; text-align:left ">
                        <div style="padding: 14px;">
                            <span>岗位信息：123</span><br>
                            <span>岗位介绍：介绍</span><br>
                            <span>联系方式：介绍</span>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "contact",
        methods: {}
    }
</script>

<style scoped>

</style>