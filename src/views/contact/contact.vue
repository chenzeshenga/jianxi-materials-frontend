<template>
  <div>
    <img class="hidden-md-and-up" src="../../assets/contact.png" width="100%" alt="hr">
    <img class="hidden-md-and-down" src="../../assets/contact.png" style="width: 100%;height: 150px" alt="hr">
    <baidu-map style="width: 100%;height: 500px" class="map"
               ak="HWgG9jQ3R5AH31GEG1svVfM8h4chKRlj"
               @ready="handler"
               :scroll-wheel-zoom="true">
    </baidu-map>
  </div>
</template>

<script>
import request from '../../request/request';
import BaiduMap from "vue-baidu-map/components/map/Map";

export default {
  name: "contact",
  components: {
    BaiduMap,
  },
  data() {
    return {
      tableLoading: false,
      jobTableData: [],
      padding: {
        'padding-left': '10%'
      },
      content: ''
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
    showContent(content) {
      this.content = content
    },
    handler({BMap, map}) {
      // 初始化地图,设置中心点坐标
      let point = new BMap.Point(121.222564, 30.241683)
      map.centerAndZoom(point, 18)
      // 添加鼠标滚动缩放
      map.enableScrollWheelZoom();
      // 添加缩略图控件
      map.addControl(new BMap.OverviewMapControl({isOpen: false, anchor: 'BMAP_ANCHOR_BOTTOM_RIGHT'}));
      // 添加缩放平移控件
      map.addControl(new BMap.NavigationControl());
      //添加比例尺控件
      map.addControl(new BMap.ScaleControl());
      //添加地图类型控件
      map.addControl(new BMap.MapTypeControl());
      //设置标注的图标
      // let icon = new BMap.Icon("/img/jianxi.png", new BMap.Size(100, 100));
      //设置标注的经纬度
      let marker = new BMap.Marker(new BMap.Point(121.222564, 30.241683));
      //把标注添加到地图上
      map.addOverlay(marker);
      let content = "<table>";
      content = content + "<tr><td> 宁波建锡新材料有限公司</td></tr>";
      content = content + "<tr><td> 地址: 浙江宁波慈溪高新技术产业开发区新兴二路89号</td></tr>";
      content = content + "<tr><td> 联系方式: 0574-82357006</td></tr>";
      content += "</table>";
      let infowindow = new BMap.InfoWindow(content, {width: 400, height: 100});
      // 图标点击的时候显示标注
      marker.addEventListener("click", function () {
        this.openInfoWindow(infowindow);
      });
      // 标注默认显示
      map.openInfoWindow(infowindow, point);
      // setTimeout(() => marker.trigger('click'));
      // marker.trigger('click');
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
</style>