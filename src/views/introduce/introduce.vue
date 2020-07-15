<template>
    <div class="about">
        <el-tabs/>
        <el-tabs :tab-position="tabPosition">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
        <router-link to="/introduce/orgCharts" class="font-black">test</router-link>
    </div>
</template>

<script>
    export default {
        name: 'introduce',
        data() {
            return {
                tabPosition: 'left'
            }
        },
        created() {
            this.updateTabPosition();
        },
        mounted() {

        },
        methods: {
            updateTabPosition() {
                if (window.outerWidth <= 992) {
                    this.tabPosition = 'top';
                }
            }
        }
    }
</script>

<style scoped>

</style>