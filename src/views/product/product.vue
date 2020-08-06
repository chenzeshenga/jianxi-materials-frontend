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
                         @click="showProduct(product.name)">
                {{ product.name }}
              </el-button>
            </div>
          </li>
        </ul>
      </el-aside>
      <el-container>
        <el-main>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane :label="product.name" v-for="product in productCategoryList" :key="product.id"
                         @tab-click="handleClick">
              <div v-html="product.introduce"></div>
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </el-container>
    <div class="hidden-md-and-up">
      <ul style="padding: 0">
        <li v-for="product in productTableData" :key="product.id">
          <div style="border:1px solid #dedede;padding: 5%">
            <el-button type="text" style="font-size: 16px;color: black;text-align: left;"
                       @click="showProduct(product.name)">
              {{ product.name }}
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
          'name': '半导体靶材'
        },
        {
          'id': 2,
          'name': '平板靶材'
        },
        {
          'id': 3,
          'name': '太阳能靶材'
        },
        {
          'id': 4,
          'name': '其它靶材'
        },
        {
          'id': 5,
          'name': '金属复合材料'
        },
        {
          'id': 6,
          'name': '绑定服务'
        },
        {
          'id': 7,
          'name': '生产设备、辅助工具'
        },

      ],
      productCategoryList: [],
      imgSrc: '',
      name: '',
      introduce: '',
      content: '',
      activeName: '1'
    };
  },
  created() {
    this.updateCss();
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
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      request.showProduct(id).then((ret) => {
        this.productCategoryList = ret.data;
        // this.content = ret.data.introduce;
        loading.close();
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
</style>