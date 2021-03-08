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
          <li v-for="product in productTableData" :key="product.id">
            <div style="border:1px solid #dedede;padding: 5%" class="hoverGray">
              <a href="/#/product_detail">
                <div v-html="product.name" style="color: black"></div>
              </a>
            </div>
          </li>
        </ul>
      </el-aside>
      <el-container>
        <div>
          <el-row>
            <el-col :span="4" :offset="1">
              <img src="../../assets/product/5N高纯铜.jpg" style="width: 100%" alt="pic"/>
            </el-col>
            <el-col :span="18" :offset="1">
              <p style="font-weight: bold;text-align: left">5N高纯铜</p>
              <p style="text-align: left">
                纯度99.999%以上<br>
                氧含量小于3ppm<br>
                重量大于600kg<br>
                产品可加工成锭、棒、管、板等<br>
                产品可应用于平板显示、高纯合金制造、薄膜太阳能电池导电层、超导领域等<br>
              </p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4" :offset="1">
              <img src="../../assets/product/6N高纯铜.jpg" style="width: 100%" alt="pic"/>
            </el-col>
            <el-col :span="18" :offset="1">
              <p style="font-weight: bold;text-align: left">6N高纯铜</p>
              <p style="text-align: left">
                纯度99.99997%以上<br>
                氧含量小于3ppm<br>
                重量大于600kg<br>
                产品可加工成锭、棒、管、板等<br>
                产品可应用于半导体溅射靶材制造、高纯合金制造、先进封装靶材等<br>
              </p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4" :offset="1">
              <img src="../../assets/product/铜铁合金.jpg" style="width: 100%" alt="pic"/>
            </el-col>
            <el-col :span="18" :offset="1">
              <p style="font-weight: bold;text-align: left">铜铁合金</p>
              <p style="text-align: left">
                纯度99.99%以上<br>
                合金比例有：CuFe10、CuFe20、CuFe40<br>
                产品导电性好、导热性高、延展性好、耐蚀性强、具备高电磁屏蔽性能<br>
                产品可应用于5G散热片、通信医疗电磁屏蔽、半导体引线框架和内部连接器、模具制造等<br>
              </p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4" :offset="1">
              <img src="../../assets/product/钨铜合金.jpg" style="width: 100%" alt="pic"/>
            </el-col>
            <el-col :span="18" :offset="1">
              <p style="font-weight: bold;text-align: left">钨铜合金</p>
              <p style="text-align: left">
                纯度99.99%以上<br>
                合金比例有：WCu5、WCu10、WCu20、WCu30<br>
                密度：13-17g/cm3<br>
                硬度：170-280 HRB<br>
                电阻率：4-7μΩ·cm<br>
                产品耐高温、强度高、耐电弧烧蚀、密度大<br>
                产品可用于电火花电极、高压放电管电极、电阻焊电极等<br>
              </p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4" :offset="1">
              <img src="../../assets/product/钼铜合金.jpg" style="width: 100%" alt="pic"/>
            </el-col>
            <el-col :span="18" :offset="1">
              <p style="font-weight: bold;text-align: left">钼铜合金</p>
              <p style="text-align: left">
                纯度99.99%以上<br>
                合金比例有：MoCu50、MoCu40、MoCu30、MoCu20、MoCu10<br>
                密度、热导率、热膨胀系数、导电率、硬度随合金比例不同而变化，适用于不同的应用场景。<br>
                产品应用于大功率微电子器件热沉封接材料<br>
              </p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4" :offset="1">
              <img src="../../assets/product/铝硌硼.jpg" style="width: 100%" alt="pic"/>
            </el-col>
            <el-col :span="18" :offset="1">
              <p style="font-weight: bold;text-align: left">铝铬硼</p>
              <p style="text-align: left">
                合金比例有：Cr-Al-B：（65:30:5）at%、（63:30:7）at%、（63:27:10）at%<br>
                产品具备超高的硬度（约50GPa）、低的内应力、提高涂层和刀具的工作寿命、热稳定性高<br>
                产品应用于金属刀具、模具、工具的表面改性<br>
              </p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4" :offset="1">
              <img src="../../assets/product/铝硅合金.jpg" style="width: 100%" alt="pic"/>
            </el-col>
            <el-col :span="18" :offset="1">
              <p style="font-weight: bold;text-align: left">铝硅合金</p>
              <p style="text-align: left">
                纯度99.9%以上<br>
                合金比例有：Si-Al：（20:80）at%、（40:60）at%、（60:40）at%、（80:20）at%、（85:15）at%、（90:10）at%<br>
                密度、热导率、热膨胀系数、抗拉强度、延伸率、弹性模量随合金比例不同而变化，适用于不同的应用场景<br>
                产品应用于光学框架、热沉件、低辐射玻璃等领域<br>
              </p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4" :offset="1">
              <img src="../../assets/product/铝碳化硼.jpg" style="width: 100%" alt="pic"/>
            </el-col>
            <el-col :span="18" :offset="1">
              <p style="font-weight: bold;text-align: left">铝碳化硼</p>
              <p style="text-align: left">
                密度（g/cm3）：小于2.6<br>
                抗拉强度（MPa）：大于500<br>
                弹性模量（GPa）：大于350<br>
                断裂韧性（MPa/m2）:大于15<br>
                产品轻质、强度高、韧性高、耐磨性好、耐蚀性好、防辐射性高<br>
                产品应用于军用装甲、核放射中子吸收、医疗器械防辐射、雷达屏蔽材料、高端密封件及其他高耐磨、高防护要求的领域。<br>
              </p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4" :offset="1">
              <img src="../../assets/product/镍磷合金.jpg" style="width: 100%" alt="pic"/>
            </el-col>
            <el-col :span="18" :offset="1">
              <p style="font-weight: bold;text-align: left">镍磷合金</p>
              <p style="text-align: left">
                纯度99.9%以上<br>
                合金比例有：Ni-P：（92:8）at%、（88:12）at%、（80:20）at%<br>
                产品耐蚀性强、镀膜后耐磨性好、磨蹭均匀、光泽度高、致密度高、电磁屏蔽性好<br>
                产品应用于IGBT基板镀层、手机壳镀膜、玻璃镀膜、陶瓷镀膜、合金表面改性、汽车车身镀膜等领域<br>
              </p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4" :offset="1">
              <img src="../../assets/product/碲化镉.jpg" style="width: 100%" alt="pic"/>
            </el-col>
            <el-col :span="18" :offset="1">
              <p style="font-weight: bold;text-align: left">碲化镉</p>
              <p style="text-align: left">
                纯度99.99%以上、纯度99.999%以上<br>
                产品转换效率高、低能耗、太阳光谱一致<br>
                产品可应用于薄膜太阳能电池、核放射性检测仪、光谱分析、电离辐射检测仪、空间光检测仪等领域<br>
              </p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4" :offset="1">
              <img src="../../assets/product/铬硅合金.jpg" style="width: 100%" alt="pic"/>
            </el-col>
            <el-col :span="18" :offset="1">
              <p style="font-weight: bold;text-align: left">铬硅合金</p>
              <p style="text-align: left">
                纯度：99.9%以上、纯度99.99%以上<br>
                产品电阻稳定性好、电阻温度系数小、电阻均匀性高、具有良好的耐磨耐热和抗氧化能力、电学稳定性高<br>
                产品应用于金属膜电阻器<br>
              </p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4" :offset="1">
              <img src="../../assets/product/二硫化钼.jpg" style="width: 100%" alt="pic"/>
            </el-col>
            <el-col :span="18" :offset="1">
              <p style="font-weight: bold;text-align: left">二硫化钼</p>
              <p style="text-align: left">
                纯度99.99%以上、纯度99.999%以上<br>
                产品耐磨寿命高、运动摩擦系数低、固体润滑效果好、晶型结构更规整、晶粒更大<br>
                产品应用于固体润滑剂可用于各种工况下的润滑<br>
              </p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18" :offset="6">
              <p style="font-weight: bold;text-align: left">定制化产品</p>
              <p style="text-align: left">
                公司具备通用性溶渗工艺的技术储备，可根据客户实际需求制造其他特殊要求的难加工合金及极端应用场合的多功能金属复合材料
              </p>
            </el-col>
          </el-row>
        </div>
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
  name: "product_detail",
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
    };
  },
  created() {
    this.updateCss();
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