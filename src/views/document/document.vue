<template>
    <div>
        <div class="hidden-md-and-down">
            <el-table :data="documentTableData" style="margin-left: 20%">
                <el-table-column
                        prop="ctime"
                        label="日期"
                        width="240"
                >
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="文档名称"
                >
                    <template slot-scope="scope">
                        <el-button type="text" @click="downloadDoc(scope.row.uuid)">{{scope.row.name}}
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    layout="prev, pager, next, total"
                    :total="pagination.total"
                    :page-size="pagination.size"
                    :current-page="pagination.current"
            >
            </el-pagination>
        </div>
        <div class="hidden-md-and-up">
            <el-table :data="documentTableData">
                <el-table-column
                        prop="ctime"
                        label="日期"
                        width="240"
                >
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="文档名称"
                >
                    <template slot-scope="scope">
                        <el-button type="text" @click="downloadDoc(scope.row.uuid)">{{scope.row.name}}
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
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
            }
        }
    }
</script>

<style scoped>

</style>