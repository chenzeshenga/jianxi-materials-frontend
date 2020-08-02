<template>
    <div>
        <div class="hidden-md-and-down">
            <el-row style="padding-left: 20%;width: 100%;padding-right: 20%">
                <el-col :span="8" v-for="document in documentTableData" v-bind:key="document.uuid" style="padding: 1%">
                    <el-card shadow="hover">
                        <el-row>
                            <el-col :span="4" v-if="document.name.endsWith('xls')">
                                <img src="../../assets/excel.svg" alt="类型"
                                     style="width: 40px;height: 40px;">
                            </el-col>
                            <el-col :span="4" v-else-if="document.name.endsWith('doc') || document.name.endsWith('docx')">
                                <img src="../../assets/word.svg" alt="类型"
                                     style="width: 40px;height: 40px;">
                            </el-col>
                            <el-col :span="4" v-else-if="document.name.endsWith('ppt')">
                                <img src="../../assets/ppt.svg" alt="类型"
                                     style="width: 40px;height: 40px;">
                            </el-col>
                            <el-col :span="4" v-else-if="document.name.endsWith('pdf')">
                                <img src="../../assets/Pdf.svg" alt="类型"
                                     style="width: 40px;height: 40px;">
                            </el-col>
                            <el-col :span="4" v-else>
                                <img src="../../assets/file.svg" alt="类型"
                                     style="width: 40px;height: 40px;">
                            </el-col>
                            <el-col :span="16" :offset="1" style="padding-top: 2%">
                                <span style="font-size: 16px;color: black;overflow: hidden">
                                    文件名称:
                                    <el-button type="text"
                                               @click="downloadDoc(document.uuid)">{{document.name}}</el-button>
                                </span>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :offset="8">
                                <span style="color: grey;font-size: 12px">
                                上传时间:{{document.ctime}}
                                </span>
                            </el-col>
                        </el-row>
                    </el-card>
                </el-col>
            </el-row>
            <el-pagination
                    layout="prev, pager, next, total"
                    :total="pagination.total"
                    :page-size="pagination.size"
                    :current-page="pagination.current"
            >
            </el-pagination>
        </div>
        <div class="hidden-md-and-up">
            <el-row style=";width: 100%;">
                <el-col :span="24" v-for="document in documentTableData" v-bind:key="document.uuid" style="padding: 1%">
                    <el-card shadow="hover">
                        <el-row>
                            <el-col :span="4" v-if="document.name.endsWith('xls')">
                                <img src="../../assets/excel.svg" alt="类型"
                                     style="width: 40px;height: 40px;">
                            </el-col>
                            <el-col :span="4" v-else-if="document.name.endsWith('doc') || document.name.endsWith('docx')">
                                <img src="../../assets/word.svg" alt="类型"
                                     style="width: 40px;height: 40px;">
                            </el-col>
                            <el-col :span="4" v-else-if="document.name.endsWith('ppt')">
                                <img src="../../assets/ppt.svg" alt="类型"
                                     style="width: 40px;height: 40px;">
                            </el-col>
                            <el-col :span="4" v-else-if="document.name.endsWith('pdf')">
                                <img src="../../assets/Pdf.svg" alt="类型"
                                     style="width: 40px;height: 40px;">
                            </el-col>
                            <el-col :span="4" v-else>
                                <img src="../../assets/file.svg" alt="类型"
                                     style="width: 40px;height: 40px;">
                            </el-col>
                            <el-col :span="16" :offset="1" style="padding-top: 2%">
                                <span style="font-size: 16px;color: black;overflow: hidden">
                                    文件名称:
                                    <el-button type="text"
                                               @click="downloadDoc(document.uuid)">{{document.name}}</el-button>
                                </span>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :offset="8">
                                <span style="color: grey;font-size: 12px">
                                上传时间:{{document.ctime}}
                                </span>
                            </el-col>
                        </el-row>
                    </el-card>
                </el-col>
            </el-row>
            <el-pagination
                    layout="prev, pager, next, total"
                    :total="pagination.total"
                    :page-size="pagination.size"
                    :current-page="pagination.current"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import request from "../../request/request";
    import moment from "moment";

    export default {
        name: "document",
        data() {
            return {
                pagination: {
                    current: 1,
                    size: 10,
                    total: 0,
                },
                documentTableData: [],
                typeStyle1: {},
                typeStyle2: {},
                typeStyle3: {},
                typeStyle4: {},
                typeStyle5: {'display': 'block'},
                show: {
                    "display": "block"
                },
                hidden: {
                    "display": "none"
                },
            }
        },
        created() {
            this.fetchDoc()
        },
        mounted() {
        },
        methods: {
            fetchDoc() {
                request.listDoc(this.pagination).then((ret) => {
                    this.documentTableData = ret.data.list;
                    console.log(this.documentTableData);
                    for (let doc of this.documentTableData) {
                        doc.ctime = moment(doc.ctime).format('yyyyMMDD');
                    }
                    this.pagination.total = ret.data.total;
                    this.pagination.current = ret.data.current;
                    this.pagination.size = ret.data.size;
                }).catch((err) => {
                    console.log(err)
                })
            },
            downloadDoc(uuid) {
                console.log(uuid);
                const link = document.createElement('a');
                link.style.display = 'none';
                // link.href = 'http://localhost:8889/document/file/' + uuid;
                link.href = 'http://47.105.33.48:8889/document/file/' + uuid;
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
            },
            showType1() {
                this.typeStyle1 = this.show;
                this.typeStyle2 = this.hidden;
                this.typeStyle3 = this.hidden;
                this.typeStyle4 = this.hidden;
                this.typeStyle5 = this.hidden;
            },
            showType2() {
                this.typeStyle1 = this.hidden;
                this.typeStyle2 = this.show;
                this.typeStyle3 = this.hidden;
                this.typeStyle4 = this.hidden;
                this.typeStyle5 = this.hidden;
            },
            showType3() {
                this.typeStyle1 = this.hidden;
                this.typeStyle2 = this.hidden;
                this.typeStyle3 = this.show;
                this.typeStyle4 = this.hidden;
                this.typeStyle5 = this.hidden;
            },
            showType4() {
                this.typeStyle1 = this.hidden;
                this.typeStyle2 = this.hidden;
                this.typeStyle3 = this.hidden;
                this.typeStyle4 = this.show;
                this.typeStyle5 = this.hidden;
            },
            showType5() {
                this.typeStyle1 = this.hidden;
                this.typeStyle2 = this.hidden;
                this.typeStyle3 = this.hidden;
                this.typeStyle4 = this.hidden;
                this.typeStyle5 = this.show;
            },
        }
    }
</script>

<style scoped>
    .el-button--text {
        background: 0 0;
        padding-left: 0;
        padding-right: 0;
        color: black;
        font-size: 16px;
    }

    .ppt-button {
        background-image: url("../../assets/ppt.svg");
    }
</style>