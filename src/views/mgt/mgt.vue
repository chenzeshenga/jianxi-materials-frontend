<template>
    <el-container style="padding-left: 10%">
        <el-aside width="100px">
            <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo">
                <el-menu-item index="1">
                    <em class="el-icon-location"></em>
                    <el-button type="text" slot="title" @click="newsUpdate">新闻</el-button>
                </el-menu-item>
                <el-menu-item index="2">
                    <em class="el-icon-menu"></em>
                    <el-button type="text" slot="title" @click="productUpdate">产品</el-button>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-main style="padding-left: 10%">
                <h3>新闻管理</h3>
                <el-table :data="newsTableData">
                    <el-table-column prop="title" label="标题">
                    </el-table-column>
                    <el-table-column prop="time" label="时间">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-tooltip
                                    content="编辑"
                                    placement="top"
                            >
                                <el-button
                                        @click="newsEdit(scope.$index, scope.row)"
                                        size="small"
                                        type="info"
                                        icon="el-icon-edit"
                                        circle
                                        plain
                                ></el-button>
                            </el-tooltip>
                            <el-tooltip
                                    content="删除"
                                    placement="top"
                            >
                                <el-button
                                        @click="newsDelete(scope.$index, scope.row)"
                                        size="mini"
                                        type="danger"
                                        icon="el-icon-delete"
                                        circle
                                        plain
                                ></el-button>
                            </el-tooltip>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                        layout="prev, pager, next, total"
                        :total="pagination.total"
                        :page-size="pagination.size"
                        :current-page="pagination.current"
                        @current-change="currentChange"
                >
                </el-pagination>
                <div style="margin-top: 2%">
                    新增新闻
                    <el-row style="margin-top: 2%">
                        <el-col :span="2">标题</el-col>
                        <el-col :span="18">
                            <el-tooltip content="请输入新闻标题，30个字以内">
                                <el-input v-model="news.title"></el-input>
                            </el-tooltip>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 2%">
                        <el-col :span="2">类型</el-col>
                        <el-col :span="18">
                            <el-radio v-model="news.type" label="1" border>行业动态</el-radio>
                            <el-radio v-model="news.type" label="2" border>公司新闻</el-radio>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 2%">
                        <el-col :span="2">内容</el-col>
                    </el-row>
                    <div id="defaultRTE" style="margin-top: 2%">
                        <ejs-richtexteditor id="defaultRTE" name="defaultRTE" class="form-control"
                                            ref="rteInstance"
                                            :placeholder="placeholder" :showCharCount="showCharCount"
                                            :maxLength="maxLength" :value="value"
                                            height="500px"></ejs-richtexteditor>
                    </div>
                    <el-button @click="news2Backend" style="margin-top: 2%">确定</el-button>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Vue from "vue";
    import {
        RichTextEditorPlugin,
        Toolbar,
        Link,
        Image,
        QuickToolbar,
        HtmlEditor,
        Count
    } from "@syncfusion/ej2-vue-richtexteditor";
    import request from "../../request/request";

    Vue.use(RichTextEditorPlugin);

    export default {
        name: "mgt",
        provide: {
            richtexteditor: [Toolbar, Link, Image, QuickToolbar, HtmlEditor, Count]
        },
        data() {
            return {
                newsTableData: [],
                news: {
                    id: 0,
                    title: '',
                    content: '',
                    type: '1'
                },
                productTableData: [],
                hidden: true,
                newsStyle: {
                    'margin-top': '5%',
                    'display': 'none'
                },
                value: null,
                showCharCount: true,
                maxLength: 2000,
                placeholder: '请输入新闻内容',
                pagination: {
                    current: 1,
                    size: 10,
                    total: 0,
                },
                newsType: '1'
            };
        },
        created() {
            this.fetchNews();
        },
        methods: {
            fetchNews() {
                request.listNews(this.pagination, this.newsType).then((ret) => {
                    console.log(ret);
                    this.newsTableData = ret.data.list;
                    this.pagination.total = ret.data.total;
                    this.pagination.current = ret.data.current;
                    this.pagination.size = ret.data.size;
                }).catch((err) => {
                    console.log(err)
                })
            },
            currentChange(val) {
                this.pagination.current = val;
                this.fetchNews()
            },
            newsUpdate() {
                console.log('news update')
                this.newsType = '1';
            },
            productUpdate() {
                console.log('product update')
                this.newsType = '2';
            },
            newsEdit(index, row) {
                console.log(index);
                console.log(row);
                this.news.id = row.id;
                this.news.title = row.title;
                this.news.content = row.content;
                this.news.type = row.type;
                this.$refs.rteInstance.ej2Instances.value = row.content;
            },
            newsDelete(index, row) {
                console.log(index);
                console.log(row);
            },
            news2Backend() {
                if (!this.news.title) {
                    this.$message.warning('请输入标题');
                    return;
                }
                console.log(this.news);
                this.news.content = this.$refs.rteInstance.ej2Instances.value;
                console.log(this.news);
                request.addOrUpdateNews(this.news).then((ret) => {
                    console.log(ret);
                    this.$message.success('新闻创建成功');
                    this.news = {
                        title: '',
                        content: '',
                        type: '1'
                    };
                    this.value = null;
                    this.fetchNews();
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped>
    @import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
    @import "../../../node_modules/@syncfusion/ej2-lists/styles/material.css";
    @import "../../../node_modules/@syncfusion/ej2-popups/styles/material.css";
    @import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
    @import "../../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
    @import "../../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
    @import "../../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>