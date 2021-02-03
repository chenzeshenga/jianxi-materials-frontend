<template>
  <div>
    <img class="hidden-md-and-up" src="../../assets/contact.png" width="100%" alt="hr">
    <img class="hidden-md-and-down" src="../../assets/contact.png" style="width: 100%;height: 150px" alt="hr">
    <div class="about" style="padding-left: 10%">
      <el-row style="margin-top: 2%">
        <el-col class="el-col-lg-4 el-col-lg-offset-1 el-col-md-24 el-col-sm-24" style="overflow-x: hidden">
          <ul class="condition-style">
            <li>
              <div style="border:1px solid #dedede;padding: 5%">
                <el-button type="text" :class="show1Class" @click="show1">联系方式
                </el-button>
              </div>
            </li>
            <li>
              <div style="border:1px solid #dedede;padding: 5%;border-top: none">
                <el-button type="text" :class="show2Class"
                           @click="show2">公司地址
                </el-button>
              </div>
            </li>
          </ul>
        </el-col>
        <el-col class="el-col-lg-18 el-col-md-24 el-col-sm-24">
          <div :style="style1">
            <p style="text-align: left;padding-left: 3%;margin-left: 0">
              地址：浙江省宁波市慈溪市高新区新兴二路89号<br>
              邮箱：jianxi@jianxi-materials.com<br>
              <br>
              办公室：<br>
              联系人：楼女士<br>
              电话：0574-82357006<br>
              <br>
              销售：<br>
              联系人：于先生<br>
              电话：0574-82357008<br>
              手机：13363990612<br>
            </p>
          </div>
          <div :style="style2">
            <div style="width: 100%;height: auto">
              <baidu-map class="bm-view" :scroll-wheel-zoom="true" :center="location" :zoom="zoom">
                <bm-marker :position="markerLocation" :dragging="true"
                           animation="BMAP_ANIMATION_BOUNCE">
                </bm-marker>
                <bm-overlay
                    pane="labelPane"
                    :class="{sample: true, active}"
                    @draw="draw"
                    @mouseover.native="active = true"
                    @mouseleave.native="active = false">
                  <div>
                    <table>
                      <tr>
                        <td> 宁波建锡新材料有限公司</td>
                      </tr>
                      <tr>
                        <td> 地址: 浙江宁波慈溪高新技术产业开发区新兴二路89号</td>
                      </tr>
                      <tr>
                        <td> 联系方式: 0574-82357006</td>
                      </tr>
                    </table>
                  </div>
                </bm-overlay>
              </baidu-map>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import request from '../../request/request';

export default {
  name: "contact",
  data() {
    return {
      tableLoading: false,
      jobTableData: [],
      padding: {
        'padding-left': '10%'
      },
      content: '',
      show1Class: 'highlight',
      show2Class: 'normal',
      show: {
        'display': 'block'
      },
      hidden: {
        'display': 'none'
      },
      style1: {'display': 'block'},
      style2: {'display': 'none'},
      infoWindow: {
        show: true,
        contents: "123"
      },
      // 设置中心点 经度纬度
      location: {
        lng: 121.217564,
        lat: 30.243683,
      },
      markerLocation: {
        lng: 121.222564,
        lat: 30.241683,
      },
      // 中心点缩放大小
      zoom: 18,
      active: false,
    }
  },
  created() {
    this.updateCss();
    this.fetchJob();
  },
  methods: {
    updateCss() {
      if (window.outerWidth <= 992) {
        this.tabPosition = 'top';
        this.padding = {};
      }
    },
    fetchJob() {
      this.tableLoading = true;
      request.listJobs().then((ret) => {
        this.jobTableData = ret.data;
        this.tableLoading = false;
      }).catch((err) => {
        console.log(err)
      })
    },
    show1() {
      this.style1 = this.show;
      this.style2 = this.hidden;
      this.show1Class = 'highlight';
      this.show2Class = 'normal';
    },
    show2() {
      this.style1 = this.hidden;
      this.style2 = this.show;
      this.show1Class = 'normal';
      this.show2Class = 'highlight';
    },
    draw({el, BMap, map}) {
      const pixel = map.pointToOverlayPixel(new BMap.Point(121.222564, 30.241683))
      el.style.left = pixel.x - 60 + 'px'
      el.style.top = pixel.y - 20 + 'px'
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

.bm-view {
  width: 100%;
  height: 100vh;
}

.sample {
  width: 400px;
  height: 120px;
  line-height: 40px;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  box-shadow: 0 0 5px #000;
  color: #fff;
  text-align: left;
  padding: 10px;
  position: absolute;
}

.sample.active {
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
}
</style>