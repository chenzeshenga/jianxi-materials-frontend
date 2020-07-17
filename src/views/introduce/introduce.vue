<template>
    <div class="about">
        <el-tabs/>
        <el-tabs :tab-position="tabPosition">
            <el-tab-pane label="公司概述">
                <el-row>
                    <el-col :offset="2">
                        西安塔博瑞克新材料有限公司的技术及产品源于西安交通大学技术团
                        队的多年研发成果，在产业化的过程中多名拥有西安交大教育背景的管
                        理、技术和市场人才加入了公司，共同组建了文化统一、各有所长、团
                        结奋斗的核心团队。
                        公司在特种合金靶材领域具有领先的技术优势，已开发并批量生产了
                        多项具有完全自主知识产权、国际领先的技术和产品，具有按照客户要
                        求开发特种合金靶材的技术能力。公司技术团队在密切关注国内外镀膜
                        及镀膜材料的发展方向的基础上，引领高性能特种镀膜靶材的技术发
                        展，为行业提供最先进、最优质的镀膜材料。
                        公司目前生产全球唯一的镍-磷烧结靶材，国内唯一的铝-铬-硼（硼：
                        1-10 at.%)靶材，以及高纯铜（6N）、ITO靶材、高纯（3N5)全系列铝-硅
                        （硅: 10-90 at.%)靶、氧化铌靶、钼-铌靶、铝-钛靶、镍-硼靶以及铝-钴、
                        铝-铬、铜-磷、镍-磷、铬-硅高纯合金粉以及超轻、超强、高导热率、耐
                        腐蚀等材料。公司致力于镀膜靶材的技术研发和产品服务，产品应用于
                        装饰镀膜、工具镀膜、太阳能、玻璃、手机、功率电子器件等行业
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="地址">
                <!--                <el-button>导航</el-button>-->
                <baidu-map style="width: 100%;height: 500px" class="map"
                           ak="HWgG9jQ3R5AH31GEG1svVfM8h4chKRlj"
                           @ready="handler"
                           :scroll-wheel-zoom="true">
                </baidu-map>
            </el-tab-pane>
        </el-tabs>
        <router-link to="/introduce/orgCharts" class="font-black"></router-link>
    </div>
</template>

<script>
    import BaiduMap from 'vue-baidu-map/components/map/Map.vue'

    export default {
        name: 'introduce',
        components: {
            BaiduMap,
        },
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
                }
            }
        },
        created() {
            this.updateTabPosition();
        },
        mounted() {
        },
        methods: {
            updateTabPosition() {
                if (window.outerWidth <= 992) {
                    this.tabPosition = 'top';
                }
            },
            handler({BMap, map}) {
                // 初始化地图,设置中心点坐标
                let point = new BMap.Point(121.216564, 30.242683)
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
                let marker = new BMap.Marker(new BMap.Point(121.216564, 30.242683));
                //把标注添加到地图上
                map.addOverlay(marker);
                let content = "<table>";
                content = content + "<tr><td> 宁波建锡新材料有限公司</td></tr>";
                content = content + "<tr><td> 地址:浙江宁波慈溪高新技术产业开发区新兴二路89号</td></tr>";
                content = content + "<tr><td> 联系方式:13363990612/13991957119</td></tr>";
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

<!--<style scoped lang="scss">-->
<!--    .bm-view {-->
<!--        width: 100%;-->
<!--        height: 300px;-->
<!--    }-->

<!--    /* 地图标注圆角显示 */-->
<!--    .BMap_bubble_title {-->
<!--        color: black;-->
<!--        font-size: 13px;-->
<!--        font-weight: bold;-->
<!--        text-align: left;-->
<!--    }-->

<!--    .BMap_pop div:nth-child(1) {-->
<!--        border-radius: 7px 0 0 0;-->
<!--    }-->

<!--    .BMap_pop div:nth-child(3) {-->
<!--        border-radius: 0 7px 0 0;-->
<!--        background: #ABABAB;;-->
<!--        /*background: #ABABAB;*/-->
<!--        width: 23px;-->
<!--        width: 0px;-->
<!--        height: 10px;-->
<!--    }-->

<!--    .BMap_pop div:nth-child(3) div {-->
<!--        border-radius: 7px;-->
<!--    }-->

<!--    .BMap_pop div:nth-child(5) {-->
<!--        border-radius: 0 0 0 7px;-->
<!--    }-->

<!--    .BMap_pop div:nth-child(5) div {-->
<!--        border-radius: 7px;-->
<!--    }-->

<!--    .BMap_pop div:nth-child(7) {-->
<!--        border-radius: 0 0 7px 0;-->
<!--    }-->

<!--    /*.BMap_pop div:nth-child div(7) {*/-->
<!--    /*    border-radius:7px ;*/-->
<!--    /*}*/-->
<!--    /*   .BMap_pop>img {*/-->
<!--    /*       display: none;*/-->
<!--    /*   }*/-->

<!--    $bgBlueColor: #1881bf;-->
<!--    h3.title {-->
<!--        box-sizing: border-box;-->
<!--        height: 34px;-->
<!--        line-height: 34px;-->
<!--        font-size: 16px;-->
<!--        font-weight: 600;-->
<!--        padding: 0 0 0 30px;-->
<!--        border: 1px #E5EEF3 solid;-->
<!--        color: #2274A4;-->
<!--        background: #F5F9F9;-->
<!--        width: 100%;-->
<!--        text-align: left;-->
<!--    }-->

<!--    .container {-->
<!--        margin: 0 auto;-->
<!--        min-width: 1366px;-->
<!--        padding: 0px;-->
<!--        min-height: 710px;-->

<!--        .left {-->
<!--            width: 320px;-->
<!--            float: left;-->

<!--            .header {-->
<!--                width: 300px;-->
<!--                clear: left;-->
<!--                height: 34px;-->
<!--                line-height: 34px;-->
<!--                color: black;-->
<!--                background: #F5F9F9;-->
<!--                padding-left: 20px;-->
<!--            }-->

<!--            .top {-->
<!--                height: 70px;-->
<!--                padding: 8px 5px 12px 5px;-->
<!--            }-->
<!--        }-->

<!--        .right-context {-->
<!--            float: left;-->
<!--        }-->

<!--        .item {-->
<!--            margin: 5px;-->
<!--            height: 28px;-->
<!--            line-height: 28px;-->

<!--            .electricity {-->
<!--                color: #FFD670;-->
<!--            }-->

<!--            .water {-->
<!--                color: #4EB9DB;-->
<!--            }-->

<!--            .air {-->
<!--                color: #F39795;-->
<!--            }-->

<!--            .iconfont {-->
<!--                font-size: 22px;-->
<!--            }-->
<!--        }-->

<!--        .query-submit {-->
<!--            width: 90px;-->
<!--            border-radius: 28px;-->
<!--            background: $bgBlueColor;-->
<!--            color: #fff;-->
<!--            text-align: center;-->
<!--            cursor: pointer;-->
<!--        }-->

<!--        .list {-->
<!--            .item {-->
<!--                width: 93px;-->
<!--                height: 30px;-->
<!--                line-height: 30px;-->
<!--                display: block;-->
<!--            }-->

<!--            .item.fl {-->
<!--                float: left;-->
<!--            }-->

<!--            .list-context {-->
<!--                border-radius: 5px;-->
<!--                margin-top: 10px;-->
<!--                background: white;-->

<!--                .list-scroll {-->
<!--                    margin-top: 10px;-->
<!--                    overflow-y: auto;-->
<!--                    min-height: 537px;-->
<!--                    overflow-x: hidden;-->

<!--                    .row {-->
<!--                        float: left;-->
<!--                        width: 320px;-->
<!--                        cursor: pointer;-->

<!--                        .head-title {-->
<!--                            overflow: hidden;-->
<!--                            text-overflow: ellipsis;-->
<!--                            white-space: nowrap;-->
<!--                            font-size: 16px;-->
<!--                            color: #1781BF;-->
<!--                            font-weight: 400;-->
<!--                            padding-left: 20px;-->
<!--                            height: 30px;-->
<!--                            line-height: 30px;-->
<!--                        }-->

<!--                        .row-content {-->
<!--                            overflow: hidden;-->
<!--                            text-overflow: ellipsis;-->
<!--                            white-space: nowrap;-->
<!--                            padding-bottom: 10px;-->
<!--                            font-size: 12px;-->
<!--                            color: rgb(128, 128, 128);-->
<!--                            border-bottom: 1px solid #eee;-->
<!--                            padding-left: 10px;-->
<!--                        }-->
<!--                    }-->

<!--                    .row.active {-->
<!--                        background-color: #CFDDF3;-->
<!--                    }-->
<!--                }-->
<!--            }-->
<!--        }-->

<!--        .map {-->
<!--            min-width: 800px;-->
<!--            width: 1000px;-->
<!--            height: 710px;-->
<!--            float: left;-->
<!--            background: white;-->
<!--            border-radius: 5px;-->
<!--            margin-left: 10px;-->

<!--            .right {-->
<!--                text-align: left;-->
<!--            }-->

<!--            .left {-->
<!--                width: 100px;-->
<!--            }-->
<!--        }-->

<!--    }-->
<!--</style>-->


<!--<style lang="scss">-->
<!--    .pm-distribution {-->
<!--        .BMap_bubble_title {-->
<!--            color: #2DB7F5 !important;-->
<!--            font-size: 16px;-->
<!--            font-weight: 400;-->
<!--            margin-bottom: 8px;-->
<!--            overflow: hidden;-->
<!--            text-overflow: ellipsis;-->
<!--            white-space: nowrap;-->
<!--            width: 220px !important;-->
<!--        }-->
<!--    }-->
<!--</style>-->