<template>
  <div>
    <el-container :style="padding" class="hidden-md-and-down">
      <el-aside style="padding-left: 3%;width: 20%;overflow-x: hidden">
        <ul>
          <li>
            <div>
              <img src="../../assets/product-head.png" alt="产品" style="width: 100%;height: 100%"/>
            </div>
          </li>
          <li v-for="tmp in product" :key="tmp.id">
            <div style="border:1px solid #dedede;padding: 5%" class="hoverGray">
              <a :href="tmp.link" v-if="tmp.level==='1'">
                <div v-html="tmp.name" style="color: black"></div>
              </a>
              <a :href="tmp.link" v-if="tmp.level==='0'">
                <div v-html="tmp.name" style="color: black"></div>
              </a>
            </div>
          </li>
        </ul>
      </el-aside>
      <el-container>
        <div>
          <el-row v-for="tmp in product" v-bind:key="tmp.id">
            <el-col :span="4" :offset="1" v-if="tmp.level==='1'">
              <img :src="tmp.img" style="width: 100%" alt="pic"/>
            </el-col>
            <el-col :span="18" :offset="1" v-if="tmp.level==='1'">
              <div v-html="tmp.introduce"/>
            </el-col>
          </el-row>
        </div>
      </el-container>
    </el-container>
    <div class="hidden-md-and-up">
      <ul style="padding: 0">
        <li v-for="tmp in product" :key="tmp.id">
          <div style="border:1px solid #dedede;padding: 5%">
            <el-button type="text" style="font-size: 16px;color: black;text-align: left;"
                       @click="showProduct(tmp.name)">
              <div v-html="tmp.name" style="color: black"></div>
            </el-button>
          </div>
        </li>
      </ul>
      <el-row>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane :label="product.name" v-for="product in productCategoryList" :key="product.id"
                       @tab-click="handleClick">
            <div v-html="product.introduce"></div>
          </el-tab-pane>
        </el-tabs>
      </el-row>
    </div>
  </div>
</template>


<script>

import request from "../../request/request";

export default {
  name: "product_category",
  data() {
    return {
      padding: {
        'padding-left': '10%'
      },
      tabPosition: 'left',
      productTableData: [
        {
          'id': 1,
          'name': '高纯金属'
        },
        {
          'id': 11,
          'name': '&nbsp;&nbsp;&nbsp;&nbsp;5N高纯铜'
        },
        {
          'id': 12,
          'name': '&nbsp;&nbsp;&nbsp;&nbsp;6N高纯铜'
        },
        {
          'id': 2,
          'name': '铜合金'
        },
        {
          'id': 21,
          'name': '&nbsp;&nbsp;&nbsp;&nbsp;铜铁合金'
        },
        {
          'id': 22,
          'name': '&nbsp;&nbsp;&nbsp;&nbsp;钨铜合金'
        },
        {
          'id': 23,
          'name': '&nbsp;&nbsp;&nbsp;&nbsp;钼铜合金'
        },
        {
          'id': 3,
          'name': '铝合金'
        },
        {
          'id': 31,
          'name': '&nbsp;&nbsp;&nbsp;&nbsp;铝铬硼'
        },
        {
          'id': 32,
          'name': '&nbsp;&nbsp;&nbsp;&nbsp;铝硅合金'
        },
        {
          'id': 33,
          'name': '&nbsp;&nbsp;&nbsp;&nbsp;铝碳化硼'
        },
        {
          'id': 4,
          'name': '其他产品'
        },
        {
          'id': 41,
          'name': '&nbsp;&nbsp;&nbsp;&nbsp;镍磷合金'
        },
        {
          'id': 42,
          'name': '&nbsp;&nbsp;&nbsp;&nbsp;碲化镉'
        },
        {
          'id': 43,
          'name': '&nbsp;&nbsp;&nbsp;&nbsp;铬硅合金'
        },
        {
          'id': 44,
          'name': '&nbsp;&nbsp;&nbsp;&nbsp;二硫化钼'
        },
        {
          'id': 5,
          'name': '定制化产品'
        },
      ],
      productCategoryList: [],
      imgSrc: '',
      name: '',
      introduce: '',
      content: '',
      activeName: '0',
      productCategoryMap: {},
      product: [],
    };
  },
  created() {
    this.updateCss();
    this.fetchLevel2Product();
  },
  mounted() {
  },
  watch: {
    $route() {
      this.fetchLevel2Product();
    }
  },
  methods: {
    updateCss() {
      if (window.outerWidth <= 992) {
        this.tabPosition = 'top';
        this.padding = {};
      }
    },
    showProduct(id) {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      request.showProduct(id).then((ret) => {
        this.productCategoryList = ret.data;
        loading.close();
      }).catch((err) => {
        console.log(err);
      })
    },
    fetchProduct() {
      request.listProduct().then((ret) => {
        for (let tmp of ret.data) {
          let arr = this.productCategoryMap[tmp.category];
          if (arr === undefined) {
            arr = [];
          }
          arr.push(tmp);
          this.productCategoryMap[tmp.category] = arr;
        }
        console.log(this.productCategoryMap);
      }).catch((err) => {
        console.log(err);
      })
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    fetchLevel2Product() {
      const id = this.$route.query.id;
      this.product = [];
      request.listProductDetail(id).then((response) => {
        for (let product of response.data) {
          let level = product.level;
          if (level === '0') {
            this.product.push(product);
            let sub = product.sub;
            for (let subProduct of sub) {
              subProduct.name = '&nbsp;&nbsp;&nbsp;&nbsp;' + subProduct.name;
              this.product.push(subProduct);
            }
          }
        }
      })
    },
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

a:hover {
  font-weight: bold;
  text-underline: black;
  background-color: gray;
}

.hoverGray:hover {
  background-color: lightgray;
}
</style>