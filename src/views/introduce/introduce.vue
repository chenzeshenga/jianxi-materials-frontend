<template>
    <div class="about" :style="padding">
        <el-tabs/>
        <el-tabs :tab-position="tabPosition">
            <el-tab-pane label="公司概述">
                <el-row>
                    <span>
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
                    </span>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="团队介绍">
                <el-row>
                    <el-col class="el-col-lg-8 el-col-md-24 el-col-sm-24">
                        <div class="control-section avatar-card">
                            <div class="sample_container">
                                <div class="e-card e-custom-card">
                                    <div class="e-card-header">
                                        <div class="e-avatar e-avatar-circle e-avatar-xlarge">
                                            <img src="../../assets/jianxi.png" alt="profile_pic">
                                        </div>
                                    </div>
                                    <div class="e-card-header">
                                        <div class="e-card-header-caption center">
                                            <div class="e-card-header-title name">公司创始人 董事长</div>
                                            <div class="e-card-sub-title">姚建军</div>
                                        </div>
                                    </div>
                                    <div class="e-card-content">
                                        <p class="avatar-content">
                                            西安交通大学工学博士学位，高级工程师。2013年入选国家科技部科技创新创业人才计划；2014年入选中组部第一批“万人计划”科技创业领军人才。
                                            曾任国有大型研究所常务副院长，组织和承担了多项国家、省部级项目，产学研转化落地、科技与金融结合经验丰富。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col class="el-col-lg-8 el-col-md-24 el-col-sm-24">
                        <div class="control-section avatar-card">
                            <div class="sample_container">
                                <div class="e-card e-custom-card">
                                    <div class="e-card-header">
                                        <div class="e-avatar e-avatar-circle e-avatar-xlarge">
                                            <img src="../../assets/jianxi.png" alt="profile_pic">
                                        </div>
                                    </div>
                                    <div class="e-card-header">
                                        <div class="e-card-header-caption center">
                                            <div class="e-card-header-title name">Laura Callahan</div>
                                            <div class="e-card-sub-title">Sales Coordinator</div>
                                        </div>
                                    </div>
                                    <div class="e-card-content">
                                        <p class="avatar-content"> Laura received a BA in psychology from the University
                                            of
                                            Washington. She has also completed a course
                                            in business French. She reads and writes French.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col class="el-col-lg-8 el-col-md-24 el-col-sm-24">
                        <div class="control-section avatar-card">
                            <div class="sample_container">
                                <div class="e-card e-custom-card">
                                    <div class="e-card-header">
                                        <div class="e-avatar e-avatar-circle e-avatar-xlarge">
                                            <img src="../../assets/jianxi.png" alt="profile_pic">
                                        </div>
                                    </div>
                                    <div class="e-card-header">
                                        <div class="e-card-header-caption center">
                                            <div class="e-card-header-title name">Laura Callahan</div>
                                            <div class="e-card-sub-title">Sales Coordinator</div>
                                        </div>
                                    </div>
                                    <div class="e-card-content">
                                        <p class="avatar-content"> Laura received a BA in psychology from the University
                                            of
                                            Washington. She has also completed a course
                                            in business French. She reads and writes French.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col class="el-col-lg-8 el-col-md-24 el-col-sm-24">
                        <div class="control-section avatar-card">
                            <div class="sample_container">
                                <div class="e-card e-custom-card">
                                    <div class="e-card-header">
                                        <div class="e-avatar e-avatar-circle e-avatar-xlarge">
                                            <img src="../../assets/jianxi.png" alt="profile_pic">
                                        </div>
                                    </div>
                                    <div class="e-card-header">
                                        <div class="e-card-header-caption center">
                                            <div class="e-card-header-title name">Laura Callahan</div>
                                            <div class="e-card-sub-title">Sales Coordinator</div>
                                        </div>
                                    </div>
                                    <div class="e-card-content">
                                        <p class="avatar-content"> Laura received a BA in psychology from the University
                                            of
                                            Washington. She has also completed a course
                                            in business French. She reads and writes French.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col class="el-col-lg-8 el-col-md-24 el-col-sm-24">
                        <div class="control-section avatar-card">
                            <div class="sample_container">
                                <div class="e-card e-custom-card">
                                    <div class="e-card-header">
                                        <div class="e-avatar e-avatar-circle e-avatar-xlarge">
                                            <img src="../../assets/jianxi.png" alt="profile_pic">
                                        </div>
                                    </div>
                                    <div class="e-card-header">
                                        <div class="e-card-header-caption center">
                                            <div class="e-card-header-title name">Laura Callahan</div>
                                            <div class="e-card-sub-title">Sales Coordinator</div>
                                        </div>
                                    </div>
                                    <div class="e-card-content">
                                        <p class="avatar-content"> Laura received a BA in psychology from the University
                                            of
                                            Washington. She has also completed a course
                                            in business French. She reads and writes French.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col class="el-col-lg-8 el-col-md-24 el-col-sm-24">
                        <div class="control-section avatar-card">
                            <div class="sample_container">
                                <div class="e-card e-custom-card">
                                    <div class="e-card-header">
                                        <div class="e-avatar e-avatar-circle e-avatar-xlarge">
                                            <img src="../../assets/jianxi.png" alt="profile_pic">
                                        </div>
                                    </div>
                                    <div class="e-card-header">
                                        <div class="e-card-header-caption center">
                                            <div class="e-card-header-title name">Laura Callahan</div>
                                            <div class="e-card-sub-title">Sales Coordinator</div>
                                        </div>
                                    </div>
                                    <div class="e-card-content">
                                        <p class="avatar-content"> Laura received a BA in psychology from the University
                                            of
                                            Washington. She has also completed a course
                                            in business French. She reads and writes French.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="技术实力">技术实力</el-tab-pane>
            <el-tab-pane label="组织架构">
                <el-row>
                    <el-col :span="20">
                        <div>
                            <vue2-org-tree class="hidden-md-and-up" :data="data" :horizontal="true"
                                           :label-class-name="labelClassName"
                            />
                        </div>
                        <div>
                            <vue2-org-tree class="hidden-md-and-down" :data="data" :horizontal="false"
                                           :label-class-name="labelClassName"
                            />
                        </div>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="公司理念">公司理念</el-tab-pane>
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
                },
                labelClassName: "bg-white",
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
                    this.padding = {};
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

<style scoped>

</style>
