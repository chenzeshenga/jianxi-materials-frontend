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
          <el-row :gutter="60" style="padding: 2%">
            <el-col :span="8">
              <img src="../../assets/product/5N高纯铜.jpg" width="300px" height="250px" alt="pic"/>
              <br>
              5N高纯铜
            </el-col>
            <el-col :span="8">
              <img src="../../assets/product/6N高纯铜.jpg" width="300px" height="250px" alt="pic"/>
              <br>
              6N高纯铜
            </el-col>
            <el-col :span="8">
              <img src="../../assets/product/铜铁合金.jpg" width="300px" height="250px" alt="pic"/>
              <br>
              铜铁合金
            </el-col>
          </el-row>
          <el-row :gutter="60" style="padding: 2%">
            <el-col :span="8">
              <img src="../../assets/product/钨铜合金.jpg" width="300px" height="250px" alt="pic"/>
              <br>
              钨铜合金
            </el-col>
            <el-col :span="8">
              <img src="../../assets/product/钼铜合金.jpg" width="300px" height="250px" alt="pic"/>
              <br>
              钼铜合金
            </el-col>
            <el-col :span="8">
              <img src="../../assets/product/铝硌硼.jpg" width="300px" height="250px" alt="pic"/>
              <br>
              铝硌硼
            </el-col>
          </el-row>
          <el-row :gutter="60" style="padding: 2%">
            <el-col :span="8">
              <img src="../../assets/product/铝硅合金.jpg" width="300px" height="250px" alt="pic"/>
              <br>
              铝硅合金
            </el-col>
            <el-col :span="8">
              <img src="../../assets/product/铝碳化硼.jpg" width="300px" height="250px" alt="pic"/>
              <br>
              铝碳化硼
            </el-col>
            <el-col :span="8">
              <img src="../../assets/product/镍磷合金.jpg" width="300px" height="250px" alt="pic"/>
              <br>
              镍磷合金
            </el-col>
          </el-row>
          <el-row :gutter="60" style="padding: 2%">
            <el-col :span="8">
              <img src="../../assets/product/碲化镉.jpg" width="300px" height="250px" alt="pic"/>
              <br>
              碲化镉
            </el-col>
            <el-col :span="8">
              <img src="../../assets/product/铬硅合金.jpg" width="300px" height="250px" alt="pic"/>
              <br>
              铬硅合金
            </el-col>
            <el-col :span="8">
              <img src="../../assets/product/二硫化钼.jpg" width="300px" height="250px" alt="pic"/>
              <br>
              二硫化钼
            </el-col>
          </el-row>
        </div>
      </el-container>
    </el-container>
    <div class="hidden-md-and-up">
      <ul style="padding: 0">
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
      <el-row style="padding: 1%">
        <img src="../../assets/product/5N高纯铜.jpg" height="250px" alt="pic"/>
        <br>
        5N高纯铜
      </el-row>
      <el-row style="padding: 1%">
        <img src="../../assets/product/6N高纯铜.jpg" height="250px" alt="pic"/>
        <br>
        6N高纯铜
      </el-row>
      <el-row style="padding: 1%">
        <img src="../../assets/product/铜铁合金.jpg" height="250px" alt="pic"/>
        <br>
        铜铁合金
      </el-row>
      <el-row style="padding: 1%">
        <img src="../../assets/product/钨铜合金.jpg" height="250px" alt="pic"/>
        <br>
        钨铜合金
      </el-row>
      <el-row style="padding: 1%">
        <img src="../../assets/product/钼铜合金.jpg" height="250px" alt="pic"/>
        <br>
        钼铜合金
      </el-row>
      <el-row style="padding: 1%">
        <img src="../../assets/product/铝硌硼.jpg" height="250px" alt="pic"/>
        <br>
        铝硌硼
      </el-row>
      <el-row style="padding: 1%">
        <img src="../../assets/product/铝硅合金.jpg" height="250px" alt="pic"/>
        <br>
        铝硅合金
      </el-row>
      <el-row style="padding: 1%">
        <img src="../../assets/product/铝碳化硼.jpg" height="250px" alt="pic"/>
        <br>
        铝碳化硼
      </el-row>
      <el-row style="padding: 1%">
        <img src="../../assets/product/镍磷合金.jpg" height="250px" alt="pic"/>
        <br>
        镍磷合金
      </el-row>
      <el-row style="padding: 1%">
        <img src="../../assets/product/碲化镉.jpg" height="250px" alt="pic"/>
        <br>
        碲化镉
      </el-row>
      <el-row style="padding: 1%">
        <img src="../../assets/product/铬硅合金.jpg" height="250px" alt="pic"/>
        <br>
        铬硅合金
      </el-row>
      <el-row style="padding: 1%">
        <img src="../../assets/product/二硫化钼.jpg" height="250px" alt="pic"/>
        <br>
        二硫化钼
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
          'name': '&nbsp;&nbsp;&nbsp;&nbsp;铝硌硼'
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
    this.fetchProductCategory();
  },
  mounted() {
  },
  methods: {
    fetchProductCategory() {
      this.product = [];
      request.listProduct().then((response) => {
        for (let product of response.data) {
          let level = product.level;
          if (level === '0') {
            product.link = '/#/product_category?id=' + product.id;
            this.product.push(product);
            let sub = product.sub;
            for (let subProduct of sub) {
              subProduct.name = '&nbsp;&nbsp;&nbsp;&nbsp;' + subProduct.name;
              subProduct.link = '/#/product_detail?id=' + subProduct.id;
              this.product.push(subProduct);
            }
          }
        }
      })
    },
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

a:hover {
  font-weight: bold;
  text-underline: black;
  background-color: gray;
}

.hoverGray:hover {
  background-color: lightgray;
}
</style>