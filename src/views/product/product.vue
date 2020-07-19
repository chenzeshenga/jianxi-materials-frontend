<template>
    <div :style="padding">
        <el-tabs/>
        <el-tabs :tab-position="tabPosition">
            <el-tab-pane label="产品1">
                <el-col class="el-col-lg-8 el-col-md-24 el-col-sm-24">
                    <div class="control-section avatar-card">
                        <div class="sample_container">
                            <div class="e-card e-custom-card">
                                <div class="e-card-header">
                                    <div class="e-avatar e-avatar-circle e-avatar-xlarge">
                                        <img src="../../assets/jianxi.png" alt="profile_pic">
                                    </div>
                                </div>
                                <div class="e-card-header">
                                    <div class="e-card-header-caption center">
                                        <div class="e-card-header-title name">产品名称</div>
                                        <div class="e-card-sub-title">产品编号</div>
                                    </div>
                                </div>
                                <div class="e-card-content">
                                    <p class="avatar-content">
                                        产品配方：氧化铟、氧化锡
                                        <br>
                                        分子重量：
                                        <br>
                                        产品纯度：
                                        <br>
                                        CAS NO.:
                                        <br>
                                        EC NO.:
                                        <br>
                                        MDL:
                                        <br>
                                        产品形态：
                                        <br>
                                        熔点：
                                        <br>
                                        沸点：
                                        <br>
                                        密度：
                                        <br>
                                        杂质含量：
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-tab-pane>
            <el-tab-pane label="产品2"></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>

    export default {
        name: "product",
        data() {
            return {
                padding: {
                    'padding-left': '10%'
                },
                tabPosition: 'left'
            };
        },
        created() {
            this.updateCss();
        }
        ,
        mounted() {
        }
        ,
        methods: {
            updateCss() {
                if (window.outerWidth <= 992) {
                    this.tabPosition = 'top';
                    this.padding = {};
                }
            },
        }
    }
</script>

<style scoped>
    .textLeft {
        text-align: left;
    }
</style>