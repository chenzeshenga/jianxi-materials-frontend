<template>
    <div :style="padding">
        <el-tabs/>
        <el-tabs :tab-position="tabPosition">
            <el-tab-pane disabled>
                <div slot="label">
                    <img src="../../assets/menu-top.jpg" alt="新闻中心">
                </div>
            </el-tab-pane>
            <el-tab-pane active>
                <div slot="label">
                    <span style="font-size: 20px">行业动态</span>
                </div>
                <el-table
                        :data="newsTableData1"
                        :style="tableStyle">
                    <el-table-column
                            prop="time"
                            label="日期"
                            width="100"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="title"
                            label="内容"
                    >
                        <template slot-scope="scope">
                            <el-button type="text" @click="router2NewsDetail(scope.row.id)">{{scope.row.title}}
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                        layout="prev, pager, next, total"
                        :total="pagination1.total"
                        :page-size="pagination1.size"
                        :current-page="pagination1.current"
                        @current-change="currentChange1"
                >
                </el-pagination>
            </el-tab-pane>
            <el-tab-pane>
                <div slot="label">
                    <span style="font-size: 20px">公司新闻</span>
                </div>
                <el-table
                        :data="newsTableData2"
                        :style="tableStyle">
                    <el-table-column
                            prop="time"
                            label="日期"
                            width="100"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="title"
                            label="内容"
                    >
                        <template slot-scope="scope">
                            <el-button type="text" @click="router2NewsDetail(scope.row.id)">{{scope.row.title}}
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                        layout="prev, pager, next, total"
                        :total="pagination2.total"
                        :page-size="pagination2.size"
                        :current-page="pagination2.current"
                        @current-change="currentChange2"
                >
                </el-pagination>
            </el-tab-pane>
        </el-tabs>

        <el-row>
            <el-col :span="4">
                <ul>
                    <img src="../../assets/news-top.jpg" alt="新闻中心">
                </ul>
                <ul>行业动态</ul>
                <ul>公司新闻</ul>
            </el-col>
            <el-col :span="16">
                123
            </el-col>
        </el-row>
    </div>
</template>

<script>

    import request from "../../request/request";

    export default {
        name: "news",
        data() {
            return {
                padding: {
                    'padding-left': '12%',
                    'margin-top': '2%'
                },
                tableStyle: {
                    'margin-left': '10%'
                },
                tabPosition: 'left',
                pagination1: {
                    current: 1,
                    size: 10,
                    total: 0,
                },
                pagination2: {
                    current: 1,
                    size: 10,
                    total: 0,
                },
                newsTableData1: [],
                newsTableData2: [],
            }
        },
        created() {
            this.updateCss();
            this.fetchNews();
        },
        mounted() {
        },
        methods: {
            updateCss() {
                if (window.outerWidth <= 992) {
                    this.tabPosition = 'top';
                    this.padding = {};
                    this.tableStyle = {};
                }
            },
            currentChange1(val) {
                this.pagination1.current = val;
                this.fetchNews()
            },
            currentChange2(val) {
                this.pagination2.current = val;
                this.fetchNews()
            },
            fetchNews() {
                request.listNews(this.pagination1, '1').then((ret) => {
                    this.newsTableData1 = ret.data.list;
                    this.pagination1.total = ret.data.total;
                    this.pagination1.current = ret.data.current;
                    this.pagination1.size = ret.data.size;
                }).catch((err) => {
                    console.log(err)
                })
                request.listNews(this.pagination2, '2').then((ret) => {
                    this.newsTableData2 = ret.data.list;
                    this.pagination2.total = ret.data.total;
                    this.pagination2.current = ret.data.current;
                    this.pagination2.size = ret.data.size;
                }).catch((err) => {
                    console.log(err)
                })
            },
            router2NewsDetail(id) {
                this.$router.push({path: '/newsDetail?newsId=' + id})
            }
        }
    }
</script>

<style scoped>
    .textLeft {
        text-align: left;
    }
</style>