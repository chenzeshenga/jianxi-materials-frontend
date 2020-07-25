<template>
    <div :style="padding">
        <el-container>
            <el-aside width="100px">
                <el-table :data="productTableData">
                    <el-table-column prop="product" label="产品">
                        <template slot-scope="scope">
                            <el-button type="text" @click="showProduct(scope.row.id)">{{scope.row.name}}
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-aside>
            <el-container>
                <el-main>
                    <img :src="imgSrc" style="width: 400px;height:250px" alt="产品">
                    <el-row style="margin-top: 5px">
                        <span>产品名称： <b>{{name}}</b></span>
                    </el-row>
                    <el-row style="margin-top: 5px">
                        <span>产品简介</span>
                    </el-row>
                    <div v-html="introduce">
                    </div>
                </el-main>

            </el-container>
        </el-container>
    </div>
</template>

<script>

    import request from "../../request/request";

    export default {
        name: "product",
        data() {
            return {
                padding: {
                    'padding-left': '10%'
                },
                tabPosition: 'left',
                productTableData: [
                    {
                        'product': 'product'
                    }
                ],
                imgSrc: '',
                name: '',
                introduce: ''
            };
        },
        created() {
            this.updateCss();
            this.fetchProduct();
            this.showProduct('1');
        },
        mounted() {
        },
        methods: {
            updateCss() {
                if (window.outerWidth <= 992) {
                    this.tabPosition = 'top';
                    this.padding = {};
                }
            },
            showProduct(id) {
                request.showProduct(id).then((ret) => {
                    console.log(ret.data)
                    this.name = ret.data.name;
                    this.introduce = ret.data.introduce;
                    this.imgSrc = 'http://locaclhost:8889/img/' + ret.data.img;
                }).catch((err) => {
                    console.log(err);
                })
            },
            fetchProduct() {
                request.listProduct().then((ret) => {
                    this.productTableData = ret.data;
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped>
    .textLeft {
        text-align: left;
    }
</style>