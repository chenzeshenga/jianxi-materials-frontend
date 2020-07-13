<template>
    <div>
        <el-row>
            <el-col :span="2" :offset="2">
                <el-tree :data="treeData" :props="defaultProps" :default-expanded-keys="[1]" node-key="id"/>
            </el-col>
            <el-col :span="20">
                <div>
                    <vue2-org-tree class="hidden-md-and-up" :data="data" :horizontal="true"
                                   :label-class-name="labelClassName"
                    />
                </div>
                <div>
                    <vue2-org-tree class="hidden-md-and-down" :data="data" :horizontal="false"
                                   :label-class-name="labelClassName"
                    />
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>

    export default {
        name: "orgCharts",
        data() {
            return {
                data: {
                    id: 0,
                    label: "董事会",
                    children: [
                        {
                            id: 2,
                            label: "总经理",
                            children: [
                                {
                                    id: 5,
                                    label: "研发部",
                                    children: [
                                        {
                                            id: 99, label: '西安交大电学材料课题组'
                                        }
                                    ]
                                },
                                {
                                    id: 6,
                                    label: "市场部",
                                    children: [
                                        {id: 100, label: '销售部'},
                                        {id: 101, label: '产品开发中心'}
                                    ]
                                },
                                {
                                    id: 9,
                                    label: "产品部",
                                    children: [
                                        {id: 102, label: '质量部'},
                                        {id: 103, label: '生产部'}
                                    ]
                                },
                                {
                                    id: 10,
                                    label: "办公室",
                                    children: [
                                        {id: 104, label: '财务室'},
                                    ]
                                }
                            ]
                        },
                    ]
                },
                labelClassName: "bg-white",
                treeData: [{
                    id: 1,
                    label: '公司介绍',
                    children: [
                        {
                            label: '公司概述',
                        },
                        {
                            label: '团队介绍',
                        },
                        {
                            label: '技术实力',
                        },
                        {
                            label: '组织架构',
                        },
                        {
                            label: '公司理念',
                        },
                    ]
                },],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        created() {
        }
        ,
        mounted() {
        }
        ,
        methods: {}
    }
</script>

<style scoped>

</style>