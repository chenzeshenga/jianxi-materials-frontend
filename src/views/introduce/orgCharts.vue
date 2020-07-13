<template>
    <div>
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
                labelClassName: "bg-white"
            }
        },
        created() {
        },
        mounted() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>