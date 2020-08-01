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
<!--                    <el-row>-->
                    <!--                        <el-col class="el-col-lg-10 el-col-lg-offset-4 el-col-md-24 el-col-sm-24"-->
                    <!--                                style="border: 1px solid #dedede">-->
                    <!--                            <h4>产品说明</h4>-->
                    <!--                            {{currProduct.productName}}<br>-->
                    <!--                            产品编号 {{currProduct.id}}-->
                    <!--                        </el-col>-->
                    <!--                    </el-row>-->
                    <!--                    <el-row>-->
                    <!--                        <el-col class="el-col-lg-8 el-col-md-24 el-col-sm-24">-->
                    <!--                            <img src="../../assets/product1.png" style="width: 100%">-->
                    <!--                        </el-col>-->
                    <!--                        <el-col class="el-col-lg-16 el-col-md-24 el-col-sm-24">-->
                    <!--                            <img src="../../assets/product1-2.png" style="width: 100%">-->
                    <!--                        </el-col>-->
                    <!--                    </el-row>-->

                    <!--                    <el-row class="el-col-lg-17 el-col-md-24 el-col-sm-24"-->
                    <!--                            style="border: 1px solid #dedede;margin-top: 1%;text-align: left;padding-top:2%">-->
                    <!--                        文档说明：<br>-->
                    <!--                        每批货物均附有符合标准的分析证书和材料安全数据表。<br>-->
                    <!--                        注意：<br>-->
                    <!--                        上述产品信息理论上是正确的。但并不是包罗万象的，只可用作指引。本文件中的信息-->
                    <!--                        以我们目前的知识和理解为基础，只适用于产品的适当安全注意事项。它不代表对产品-->
                    <!--                        性能的任何保证。塔博瑞克公司对接触或处理上述产品而引发的损失不承担任何法律责-->
                    <!--                        任。-->
                    <!--                    </el-row>-->
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
                <el-col class="el-col-lg-10 el-col-lg-offset-4 el-col-md-24 el-col-sm-24"
                        style="border: 1px solid #dedede">
                    <h4>产品说明</h4>
                    {{currProduct.productName}}<br>
                    产品编号 {{currProduct.id}}
                </el-col>
            </el-row>
            <el-row>
                <el-col class="el-col-lg-8 el-col-md-24 el-col-sm-24">
                    <img src="../../assets/product1.png" style="width: 100%">
                </el-col>
                <el-col class="el-col-lg-16 el-col-md-24 el-col-sm-24">
                    <img src="../../assets/product1-2.png" style="width: 100%">
                </el-col>
            </el-row>
            <el-row>
                <el-col class="el-col-lg-12 el-col-md-24 el-col-sm-24"
                        style="border: 1px solid #dedede;margin-top: 1%;text-align: left;padding-left: 5%;padding-top:2%">
                    产品配方：氧化铟、氧化锡<br>
                    分子重量：<br>
                    产品纯度：<br>
                    CAS NO.:<br>
                    EC NO.:<br>
                    MDL:<br>
                    产品形态：<br>
                    熔点：<br>
                    沸点：<br>
                    密度：<br>
                    杂质含量：<br>
                </el-col>

                <el-col class="el-col-lg-4 el-col-lg-offset-1 el-col-md-24 el-col-sm-24"
                        style="border: 1px solid #dedede;margin-top: 1%;text-align: left;padding-top:2%">
                    产品图片<br>
                    <img src="../../assets/product/ITO靶材.jpg" style="height: 150px;width: 150px">
                </el-col>
            </el-row>

            <el-row class="el-col-lg-17 el-col-md-24 el-col-sm-24"
                    style="border: 1px solid #dedede;margin-top: 1%;text-align: left;padding-top:2%">
                文档说明：<br>
                每批货物均附有符合标准的分析证书和材料安全数据表。<br>
                注意：<br>
                上述产品信息理论上是正确的。但并不是包罗万象的，只可用作指引。本文件中的信息
                以我们目前的知识和理解为基础，只适用于产品的适当安全注意事项。它不代表对产品
                性能的任何保证。塔博瑞克公司对接触或处理上述产品而引发的损失不承担任何法律责
                任。
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
                    this.name = ret.data.name;
                    this.content = ret.data.introduce;
                    // this.imgSrc = 'http://47.105.33.48:8889/img/' + ret.data.img;
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