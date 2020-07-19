<template>
    <div :style="padding">
        <el-tabs/>
        <el-tabs :tab-position="tabPosition">
            <el-tab-pane label="行业动态">
                <ul>
                    <el-row>
                        <div class="hidden-md-and-up">
                            <div class="el-col-md-24 el-col-sm-24 textLeft">新闻内容1</div>
                        </div>
                        <div class="hidden-md-and-down">
                            <div class="el-col-lg-15 el-col-lg-offset-1 textLeft">新闻内容1</div>
                            <div class="hidden-md-and-up"><br></div>
                            <div class="el-col-lg-4 el-col-lg-offset-1 el-col-md-offset-16 el-col-sm-offset-16 el-col-md-8 el-col-sm-8">
                                2020-07-19
                            </div>
                        </div>
                    </el-row>
                </ul>
                <ul>
                    <el-row>
                        <div class="hidden-md-and-up">
                            <div class="el-col-md-24 el-col-sm-24 textLeft">新闻内容1</div>
                        </div>
                        <div class="hidden-md-and-down">
                            <div class="el-col-lg-15 el-col-lg-offset-1 textLeft">新闻内容1</div>
                            <div class="hidden-md-and-up"><br></div>
                            <div class="el-col-lg-4 el-col-lg-offset-1 el-col-md-offset-16 el-col-sm-offset-16 el-col-md-8 el-col-sm-8">
                                2020-07-19
                            </div>
                        </div>
                    </el-row>
                </ul>
                <ul>
                    <el-row>
                        <div class="hidden-md-and-up">
                            <div class="el-col-md-24 el-col-sm-24 textLeft">新闻内容1</div>
                        </div>
                        <div class="hidden-md-and-down">
                            <div class="el-col-lg-15 el-col-lg-offset-1 textLeft">新闻内容1</div>
                            <div class="hidden-md-and-up"><br></div>
                            <div class="el-col-lg-4 el-col-lg-offset-1 el-col-md-offset-16 el-col-sm-offset-16 el-col-md-8 el-col-sm-8">
                                2020-07-19
                            </div>
                        </div>
                    </el-row>
                </ul>
                <ul>
                    <el-row>
                        <div class="hidden-md-and-up">
                            <div class="el-col-md-24 el-col-sm-24 textLeft">新闻内容1</div>
                        </div>
                        <div class="hidden-md-and-down">
                            <div class="el-col-lg-15 el-col-lg-offset-1 textLeft">新闻内容1</div>
                            <div class="hidden-md-and-up"><br></div>
                            <div class="el-col-lg-4 el-col-lg-offset-1 el-col-md-offset-16 el-col-sm-offset-16 el-col-md-8 el-col-sm-8">
                                2020-07-19
                            </div>
                        </div>
                    </el-row>
                </ul>
                <ul>
                    <el-row>
                        <div class="hidden-md-and-up">
                            <div class="el-col-md-24 el-col-sm-24 textLeft">新闻内容1</div>
                        </div>
                        <div class="hidden-md-and-down">
                            <div class="el-col-lg-15 el-col-lg-offset-1 textLeft">新闻内容1</div>
                            <div class="hidden-md-and-up"><br></div>
                            <div class="el-col-lg-4 el-col-lg-offset-1 el-col-md-offset-16 el-col-sm-offset-16 el-col-md-8 el-col-sm-8">
                                2020-07-19
                            </div>
                        </div>
                    </el-row>
                </ul>
                <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                </el-pagination>
            </el-tab-pane>
            <el-tab-pane label="公司新闻"></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>

    export default {
        name: "news",
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