<template>
  <div>
    <el-row class="hidden-md-and-down">
      <img src="../../assets/about.jpg" style="width: 100%;height: 180px" alt="关于我们">
    </el-row>
    <div class="about" :style="padding">
      <el-row style="margin-top: 2%">
        <el-col class="el-col-lg-4 el-col-lg-offset-1 el-col-md-24 el-col-sm-24" style="overflow-x: hidden">
          <ul class="condition-style">
            <li>
              <div>
                <img src="../../assets/introduce.png" alt="关于我们" style="width: 100%;height: 100%"/>
              </div>
            </li>
            <li>
              <div style="border:1px solid #dedede;padding: 5%">
                <el-button type="text" :class="show1Class" @click="show1">公司概述
                </el-button>
              </div>
            </li>
            <li>
              <div style="border:1px solid #dedede;padding: 5%;border-top: none">
                <el-button type="text" :class="show2Class"
                           @click="show2">团队介绍
                </el-button>
              </div>
            </li>
            <li>
              <div style="border:1px solid #dedede;padding: 5%;border-top: none">
                <el-button type="text" :class="show3Class"
                           @click="show3">技术路线
                </el-button>
              </div>
            </li>
            <li>
              <div style="border:1px solid #dedede;padding: 5%;border-top: none">
                <el-button type="text" :class="show5Class"
                           @click="show5">组织架构
                </el-button>
              </div>
            </li>
          </ul>
        </el-col>
        <el-col class="el-col-lg-18 el-col-md-24 el-col-sm-24">
          <div :style="style1">
            <div class="hidden-md-and-up">
              宁波建锡新材料有限公司
              <br>
              <p class="mobile">
                宁波建锡新材料有限公司成立于2020年6月18日，是由创业团队整合西安交通大学金属材料强度国家重点实验室及电力设备电气绝缘国家重点实验室的历年科研成果和技术团队而发起成立的，公司注册地位于宁波市慈溪市。
              </p>
              <p class="mobile">
                公司在高纯金属和特种极端性能合金材料方向拥有多项自主知识产权，技术和产品处于国际先进水平，有根据客户需求开发特种合金材料的技术能力。
              </p>
              <p class="mobile">
                公司提供的高纯材料应用于面板、芯片的磁控溅射靶材，超导，量子等领域。特种极端性能合金材料应用于核工业中子吸收、重型装甲减重、水刀、高功率电子封装散热等领域。这些高端材料大部分进口或进口受限，公司致力于替代进口，开发生产高参数、高性能金属材料，力求在某些细分应用领域突破技术瓶颈，解决国家重大需求。
              </p>
              <p class="mobile">
                公司秉承“创新、共赢、严谨、诚信”的经营理念，采用ISO9001质量管理和ISO14001环境管理体系，严格把控生产工艺，培养员工的主人翁意识和责任感、以科技创新和新产品持续研发能力为驱动，在先进金属材料蓬勃发展的当前夯实基础，不断推陈出新，改进产品质量，提高服务水平，打造高纯金属和特种合金领域的全球知名品牌。
              </p>
              <p class="mobile">
                公司理念（价值观）
              </p>
              <p class="mobile">
                创新、共赢、严谨、诚信
              </p>
              <p class="mobile">
                使命
              </p>
              <p class="mobile">
                解决中国高纯金属和特种合金的技术瓶颈问题和受制于进口问题
              </p>
              <p class="mobile">
                定位
              </p>
              <p class="mobile">
                高纯金属及特种合金产业的拓荒者和耕耘者
              </p>
              <p class="mobile">
                目标
              </p>
              <p class="mobile">
                全球知名的高纯金属及特种合金品牌
              </p>
            </div>
            <div class="hidden-md-and-down">
              <p style="text-align: center;font-size: 20px;font-weight: bold">
                宁波建锡新材料有限公司
              </p>
              <br>
              <p>
                宁波建锡新材料有限公司成立于2020年6月18日，是由创业团队整合西安交通大学金属材料强度国家重点实验室及电力设备电气绝缘国家重点实验室的历年科研成果和技术团队而发起成立的，公司注册地位于宁波市慈溪市。
              </p>
              <p>
                公司在高纯金属和特种极端性能合金材料方向拥有多项自主知识产权，技术和产品处于国际先进水平，有根据客户需求开发特种合金材料的技术能力。
              </p>
              <p>
                公司提供的高纯材料应用于面板、芯片的磁控溅射靶材，超导，量子等领域。特种极端性能合金材料应用于核工业中子吸收、重型装甲减重、水刀、高功率电子封装散热等领域。这些高端材料大部分进口或进口受限，公司致力于替代进口，开发生产高参数、高性能金属材料，力求在某些细分应用领域突破技术瓶颈，解决国家重大需求。
              </p>
              <p>
                公司秉承“创新、共赢、严谨、诚信”的经营理念，采用ISO9001质量管理和ISO14001环境管理体系，严格把控生产工艺，培养员工的主人翁意识和责任感、以科技创新和新产品持续研发能力为驱动，在先进金属材料蓬勃发展的当前夯实基础，不断推陈出新，改进产品质量，提高服务水平，打造高纯金属和特种合金领域的全球知名品牌。
              </p>
              <p>
                公司理念（价值观）
              </p>
              <p>
                创新、共赢、严谨、诚信
              </p>
              <p>
                使命
              </p>
              <p>
                解决中国高纯金属和特种合金的技术瓶颈问题和受制于进口问题
              </p>
              <p>
                定位
              </p>
              <p>
                高纯金属及特种合金产业的拓荒者和耕耘者
              </p>
              <p>
                目标
              </p>
              <p>
                全球知名的高纯金属及特种合金品牌
              </p>
            </div>
          </div>
          <div :style="style2">
            <div style="text-align: left;padding-left: 3%">
              <span style="font-size: 24px;font-weight: bold;">姚建军</span>
              <el-tag style="margin-left: 2%;font-size: 14px;font-weight: bold">公司创始人 董事长</el-tag>
              <el-divider/>
              <span style="font-size: 18px">
                西安交通大学工学博士学位，高级工程师。2013年入选国家科技部科技创新创业人才计划；2014年入选中组部第一批“万人计划”科技创业领军人才。曾任国有大型研究所常务副院长，组织和承担了多项国家、省部级项目，产学研转化落地、科技与金融结合经验丰富。
              </span>
            </div>
            <div style="text-align: left;padding-left: 3%;margin-top: 3%">
              <span style="font-size: 24px;font-weight: bold;">王亚平</span>
              <el-tag style="margin-left: 2%;font-size: 14px;font-weight: bold">公司联合创始人 总工程师 技术带头人</el-tag>
              <el-divider/>
              <span style="font-size: 18px">
                西安交通大学教授，博士生导师，承担多项国家、省部级科研项目，曾获国家科技进步二等级、陕西省科学技术一等奖、二等级等奖项，拥有多项专利。在金属合金领域耕耘近三十年，成功研发和产业化多种金属合金产品，属于相关领域的国际权威专家。
              </span>
            </div>
            <div style="text-align: left;padding-left: 3%;margin-top: 3%">
              <span style="font-size: 24px;font-weight: bold;">白浩博</span>
              <el-tag style="margin-left: 2%;font-size: 14px;font-weight: bold">总经理</el-tag>
              <el-divider/>
              <span style="font-size: 18px">
                西安交通大学硕士学位，曾任国有大型研究所研发负责人，产业化公司副总经理，拥有多年工业制造、新材料领域的企业管理和产品开发经验。
              </span>
            </div>
            <div style="text-align: left;padding-left: 3%;margin-top: 3%">
              <span style="font-size: 24px;font-weight: bold;">于丰</span>
              <el-tag style="margin-left: 2%;font-size: 14px;font-weight: bold">销售副总</el-tag>
              <el-divider/>
              <span style="font-size: 18px">
                西安交通大学硕士学位，曾任大唐电信科技股份有限公司二级事业部总经理，管理200余人的市场销售团队，拥有丰富的市场销售经验和销售团队管理技能。
              </span>
            </div>
            <div style="text-align: left;padding-left: 3%;margin-top: 3%">
              <span style="font-size: 24px;font-weight: bold;">罗凯于</span>
              <el-tag style="margin-left: 2%;font-size: 14px;font-weight: bold">生产副总</el-tag>
              <el-divider/>
              <span style="font-size: 18px">
                西安交通大学硕士学位，曾任某大型国企生产部副主任，在工业制造、新材料领域有多年的生产和项目管理经验。
              </span>
            </div>
          </div>
          <div :style="style3">
            <img src="../../assets/附件2-技术路线.jpg" style="width: 100%" alt="技术">
          </div>
          <div :style="style4">
            <img src="../../assets/convince.png" alt="公司理念" style="margin-top: 2%">
          </div>
          <div :style="style5">
            <img class="hidden-md-and-down" src="../../assets/orgChart.jpg" alt="组织架构图" style="width: 100%"/>
            <img class="hidden-md-and-up" src="../../assets/orgChart.jpg" alt="组织架构图"/>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'introduce',
  data() {
    return {
      tabPosition: 'left',
      center: {lng: 109.45744048529967, lat: 36.49771311230842},
      zoom: 13,
      map: {
        center: {lng: 118, lat: 28},
        zoom: 20,
      },
      markers: [],
      activeName: '',
      position: {
        start: '{}',
        end: {}
      },
      labelClassName: "bg-color-grey",
      data: {
        id: 0,
        label: "董事会",
        children: [
          {
            id: 2,
            label: "总经理",
            children: [
              {
                id: 5,
                label: "研发部",
                children: [
                  {
                    id: 99, label: '西安交大电学材料课题组'
                  }
                ]
              },
              {
                id: 6,
                label: "市场部",
                children: [
                  {id: 100, label: '销售部'},
                  {id: 101, label: '产品开发中心'}
                ]
              },
              {
                id: 9,
                label: "产品部",
                children: [
                  {id: 102, label: '质量部'},
                  {id: 103, label: '生产部'}
                ]
              },
              {
                id: 10,
                label: "办公室",
                children: [
                  {id: 104, label: '财务室'},
                ]
              }
            ]
          },
        ]
      },
      padding: {
        'padding-left': '10%'
      },
      padding2: {},
      style1: {'display': 'block'},
      style2: {'display': 'none'},
      style3: {'display': 'none'},
      style4: {'display': 'none'},
      style5: {'display': 'none'},
      style6: {'display': 'none'},
      show1Class: 'highlight',
      show2Class: 'normal',
      show3Class: 'normal',
      show4Class: 'normal',
      show5Class: 'normal',
      show6Class: 'normal',
      show: {
        'display': 'block'
      },
      hidden: {
        'display': 'none'
      },
    }
  },
  created() {
    this.updateTabPosition();
  },
  mounted() {
  },
  watch: {
    $route() {
      this.showTab();
    }
  },
  methods: {
    showTab() {
      const id = this.$route.query.id;
      if (id === '1') {
        this.show1();
      } else if (id === '2') {
        this.show2();
      } else if (id === '3') {
        this.show3();
      } else if (id === '4') {
        this.show4();
      } else if (id === '5') {
        this.show5();
      } else if (id === '6') {
        this.show6();
      } else {
        this.show1();
      }
    },
    updateTabPosition() {
      if (window.outerWidth <= 992) {
        this.tabPosition = 'top';
        this.padding = {};
        this.padding2 = {
          'padding-left': '2%',
          'padding-right': '2%',
        }
      }
    },
    show1() {
      this.style1 = this.show;
      this.style2 = this.hidden;
      this.style3 = this.hidden;
      this.style4 = this.hidden;
      this.style5 = this.hidden;
      this.style6 = this.hidden;
      this.show1Class = 'highlight';
      this.show2Class = 'normal';
      this.show3Class = 'normal';
      this.show4Class = 'normal';
      this.show5Class = 'normal';
      this.show6Class = 'normal';
    },
    show2() {
      this.style1 = this.hidden;
      this.style2 = this.show;
      this.style3 = this.hidden;
      this.style4 = this.hidden;
      this.style5 = this.hidden;
      this.style6 = this.hidden;
      this.show1Class = 'normal';
      this.show2Class = 'highlight';
      this.show3Class = 'normal';
      this.show4Class = 'normal';
      this.show5Class = 'normal';
      this.show6Class = 'normal';
    },
    show3() {
      this.style1 = this.hidden;
      this.style2 = this.hidden;
      this.style3 = this.show;
      this.style4 = this.hidden;
      this.style5 = this.hidden;
      this.style6 = this.hidden;
      this.show1Class = 'normal';
      this.show2Class = 'normal';
      this.show3Class = 'highlight';
      this.show4Class = 'normal';
      this.show5Class = 'normal';
      this.show6Class = 'normal';
    },
    show4() {
      this.style1 = this.hidden;
      this.style2 = this.hidden;
      this.style3 = this.hidden;
      this.style4 = this.show;
      this.style5 = this.hidden;
      this.style6 = this.hidden;
      this.show1Class = 'normal';
      this.show2Class = 'normal';
      this.show3Class = 'normal';
      this.show4Class = 'highlight';
      this.show5Class = 'normal';
      this.show6Class = 'normal';
    },
    show5() {
      this.style1 = this.hidden;
      this.style2 = this.hidden;
      this.style3 = this.hidden;
      this.style4 = this.hidden;
      this.style5 = this.show;
      this.style6 = this.hidden;
      this.show1Class = 'normal';
      this.show2Class = 'normal';
      this.show3Class = 'normal';
      this.show4Class = 'normal';
      this.show5Class = 'highlight';
      this.show6Class = 'normal';
    },
    show6() {
      this.style1 = this.hidden;
      this.style2 = this.hidden;
      this.style3 = this.hidden;
      this.style4 = this.hidden;
      this.style5 = this.hidden;
      this.style6 = this.show;
      this.show1Class = 'normal';
      this.show2Class = 'normal';
      this.show3Class = 'normal';
      this.show4Class = 'normal';
      this.show5Class = 'normal';
      this.show6Class = 'highlight';
    },

  }
}
</script>

<style scoped>
p {
  text-align: left;
  padding-left: 8%;
  padding-right: 6%;
}

.mobile {
  text-align: left;
  padding-left: 0;
  padding-right: 0;
}

li {
  list-style: none;
  font-size: 20px;
  text-align: left;
}

button span {
  font-size: 20px;
  text-align: left;
}

@media screen and (max-width: 992px) {
  .condition-style {
    padding-left: 0;
  }
}

.normal {
  font-size: 16px;
  color: black;
  text-align: left;
}

.highlight {
  font-size: 16px;
  text-align: left;
  color: blue;
}

</style>
