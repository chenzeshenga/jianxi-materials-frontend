<template>
    <div>
        <el-container :style="padding" class="hidden-md-and-down">
            <el-aside style="padding-left: 5%;width: 20%">
                <ul>
                    <li>
                        <div>
                            <img src="../../assets/product-head.png" alt="产品" style="width: 100%;height: 100%"/>
                        </div>
                    </li>
                    <li v-for="product in productTableData" :key="product.id">
                        <div style="border:1px solid #dedede;padding: 5%">
                            <el-button type="text" style="font-size: 16px;color: black;text-align: left;"
                                       @click="showProduct(product.id)">
                                {{product.name}}
                            </el-button>
                        </div>
                    </li>
                </ul>
            </el-aside>
            <el-container>
                <el-main>
                    <div v-html="content"></div>
                </el-main>
            </el-container>
        </el-container>
        <div class="hidden-md-and-up">
            <ul style="padding: 0">
                <li v-for="product in productTableData" :key="product.id">
                    <div style="border:1px solid #dedede;">
                        <el-button type="text" style="font-size: 16px;color: black;text-align: left;"
                                   @click="showProduct(product.id)">
                            {{product.name}}
                        </el-button>
                    </div>
                </li>
            </ul>
            <el-row>
                <div v-html="content"></div>
            </el-row>
        </div>
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
                productTableData: [],
                imgSrc: '',
                name: '',
                introduce: '',
                currProduct: {
                    productName: 'sdfsfds',
                    id: '12fdglfdk'
                },
                content: ''
            };
        },
        created() {
            this.updateCss();
            this.fetchProduct();
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
                    this.name = ret.data.name;
                    this.content = ret.data.introduce;
                }).catch((err) => {
                    console.log(err);
                })
            },
            fetchProduct() {
                request.listProduct().then((ret) => {
                    this.productTableData = ret.data;
                    let firstProduct = this.productTableData[0];
                    this.showProduct(firstProduct.id);
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

    li {
        list-style: none;
        font-size: 20px;
        text-align: left;
    }

    @media screen and (max-width: 992px) {
        .condition-style {
            padding-left: 0;
        }
    }
</style>