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
                                <el-button type="text" style="font-size: 16px;color: black;text-align: left;"
                                           @click="show1">公司概述
                                </el-button>
                            </div>
                        </li>
                        <li>
                            <div style="border:1px solid #dedede;padding: 5%;border-top: none">
                                <el-button type="text" style="font-size: 16px;color: black;text-align: left;"
                                           @click="show2">团队介绍
                                </el-button>
                            </div>
                        </li>
                        <li>
                            <div style="border:1px solid #dedede;padding: 5%;border-top: none">
                                <el-button type="text" style="font-size: 16px;color: black;text-align: left;"
                                           @click="show3">技术实力
                                </el-button>
                            </div>
                        </li>
                        <li>
                            <div style="border:1px solid #dedede;padding: 5%;border-top: none">
                                <el-button type="text" style="font-size: 16px;color: black;text-align: left;"
                                           @click="show5">组织架构
                                </el-button>
                            </div>
                        </li>
                        <li>
                            <div style="border:1px solid #dedede;padding: 5%;border-top: none">
                                <el-button type="text" style="font-size: 16px;color: black;text-align: left;"
                                           @click="show6">公司地址
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
                                公司产品可分为磁控溅射镀膜靶材、蒸镀用高纯金属颗粒、多功能金属复合材料、设备及服务等，主要应用于半导体、平板显示、薄膜太阳能、刀具镀膜、装饰镀膜、低辐射玻璃、金属膜电阻器等方面。公司产品着力于替代进口、解决瓶颈问题、降低成本，为全球客户提供高端合金材料、制品及解决方案。
                            </p>
                            <p class="mobile">
                                公司秉承“创新、共赢、严谨、诚信”的经营理念，采用ISO9001质量管理和ISO14001环境管理体系，严格把控生产工艺，培养员工的主人翁意识和责任感、以科技创新和新产品持续研发能力为驱动，在先进金属材料蓬勃发展的当前夯实基础，不断推陈出新，改进产品质量，提高服务水平，打造靶材和特种合金领域的全球知名品牌。
                            </p>
                            <p class="mobile">
                                公司理念（价值观）：创新、共赢、严谨、诚信
                            </p>
                            <p class="mobile">
                                使命：解决中国高端靶材和特种合金的技术瓶颈问题和受制于进口问题
                            </p>
                            <p class="mobile">
                                定位：特种合金靶材产业的拓荒者和耕耘者
                            </p>
                            <p class="mobile">
                                目标：全球知名的靶材及特种合金品牌
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
                                公司产品可分为磁控溅射镀膜靶材、蒸镀用高纯金属颗粒、多功能金属复合材料、设备及服务等，主要应用于半导体、平板显示、薄膜太阳能、刀具镀膜、装饰镀膜、低辐射玻璃、金属膜电阻器等方面。公司产品着力于替代进口、解决瓶颈问题、降低成本，为全球客户提供高端合金材料、制品及解决方案。
                            </p>
                            <p>
                                公司秉承“创新、共赢、严谨、诚信”的经营理念，采用ISO9001质量管理和ISO14001环境管理体系，严格把控生产工艺，培养员工的主人翁意识和责任感、以科技创新和新产品持续研发能力为驱动，在先进金属材料蓬勃发展的当前夯实基础，不断推陈出新，改进产品质量，提高服务水平，打造靶材和特种合金领域的全球知名品牌。
                            </p>
                            <p style="font-weight: bold">
                                公司理念（价值观）
                            </p>
                            <p>
                                创新、共赢、严谨、诚信
                            </p>
                            <p style="font-weight: bold">
                                使命
                            </p>
                            <p>
                                解决中国高端靶材和特种合金的技术瓶颈问题和受制于进口问题
                            </p>
                            <p style="font-weight: bold">
                                定位
                            </p>
                            <p>
                                特种合金靶材产业的拓荒者和耕耘者
                            </p>
                            <p style="font-weight: bold">
                                目标
                            </p>
                            <p>
                                全球知名的靶材及特种合金品牌
                            </p>
                        </div>
                    </div>
                    <div :style="style2">
                        <el-col class="el-col-lg-8 el-col-md-24 el-col-sm-24">
                            <div class="control-section avatar-card">
                                <div class="sample_container">
                                    <div class="e-card e-custom-card">
                                        <div class="e-card-header">
                                            <div class="e-avatar e-avatar-circle e-avatar-xlarge">
                                                <img src="../../assets/Y.jpg" alt="profile_pic">
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
                                                <img src="../../assets/W.jpg" alt="profile_pic">
                                            </div>
                                        </div>
                                        <div class="e-card-header">
                                            <div class="e-card-header-caption center">
                                                <div class="e-card-header-title name" style="font-size: 16px">
                                                    公司联合创始人/总工程师/技术带头人
                                                </div>
                                                <div class="e-card-sub-title">王亚平</div>
                                            </div>
                                        </div>
                                        <div class="e-card-content">
                                            <p class="avatar-content">
                                                西安交通大学教授，博士生导师，承担多项国家、省部级科研项目，曾获国家科技进步二等级、陕西省科学技术一等奖、二等级等奖项，拥有多项专利
                                                在金属合金领域耕耘近三十年，成功研发和产业化多种金属合金产品，属于相关领域的国际权威专家。
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
                                                <img src="../../assets/B.jpg" alt="profile_pic">
                                            </div>
                                        </div>
                                        <div class="e-card-header">
                                            <div class="e-card-header-caption center">
                                                <div class="e-card-header-title name">总经理</div>
                                                <div class="e-card-sub-title">白浩博</div>
                                            </div>
                                        </div>
                                        <div class="e-card-content">
                                            <p class="avatar-content">
                                                西安交通大学硕士学位，曾任国有大型研究所研发负责人，产业化公司副总经理，拥有多年工业制作、新材料领域的企业管理和产品开发经验。</p>
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
                                                <img src="../../assets/YF.jpg" alt="profile_pic">
                                            </div>
                                        </div>
                                        <div class="e-card-header">
                                            <div class="e-card-header-caption center">
                                                <div class="e-card-header-title name">销售副总</div>
                                                <div class="e-card-sub-title">于丰</div>
                                            </div>
                                        </div>
                                        <div class="e-card-content">
                                            <p class="avatar-content">
                                                西安交通大学硕士学位，曾任大唐电信科技股份有限公司二级事业部总经理，管理200余人的市场销售团队，拥有丰富的市场销售经验和销售团队管理技能。</p>
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
                                                <img src="../../assets/L.jpg" alt="profile_pic">
                                            </div>
                                        </div>
                                        <div class="e-card-header">
                                            <div class="e-card-header-caption center">
                                                <div class="e-card-header-title name">生产副总</div>
                                                <div class="e-card-sub-title">罗凯于</div>
                                            </div>
                                        </div>
                                        <div class="e-card-content">
                                            <p class="avatar-content">
                                                西安交通大学硕士学位，曾任某大型国企生产部副主任，在工业制作、新材料领域有多年的生产和项目管理经验。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </div>
                    <div :style="style3">
                        <img src="../../assets/tech2.png" style="width: 100%" alt="技术">
                        <img src="../../assets/tech1.png" style="width: 100%" alt="技术">
                    </div>
                    <div :style="style4">
                        <img src="../../assets/convince.png" alt="公司理念" style="margin-top: 2%">
                    </div>
                    <div :style="style5">
                        <vue2-org-tree class="hidden-md-and-up" :data="data" :horizontal="true"
                                       :label-class-name="labelClassName"
                        />
                        <vue2-org-tree class="hidden-md-and-down" :data="data" :horizontal="false"
                                       :label-class-name="labelClassName"
                        />
                    </div>
                    <div :style="style6">
                        <baidu-map style="width: 100%;height: 500px" class="map"
                                   ak="HWgG9jQ3R5AH31GEG1svVfM8h4chKRlj"
                                   @ready="handler"
                                   :scroll-wheel-zoom="true">
                        </baidu-map>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import BaiduMap from 'vue-baidu-map/components/map/Map.vue';

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
                show: {
                    'display': 'block'
                },
                hidden: {
                    'display': 'none'
                }
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
            show1() {
                this.style1 = this.show;
                this.style2 = this.hidden;
                this.style3 = this.hidden;
                this.style4 = this.hidden;
                this.style5 = this.hidden;
                this.style6 = this.hidden;
            },
            show2() {
                this.style1 = this.hidden;
                this.style2 = this.show;
                this.style3 = this.hidden;
                this.style4 = this.hidden;
                this.style5 = this.hidden;
                this.style6 = this.hidden;
            },
            show3() {
                this.style1 = this.hidden;
                this.style2 = this.hidden;
                this.style3 = this.show;
                this.style4 = this.hidden;
                this.style5 = this.hidden;
                this.style6 = this.hidden;
            },
            show4() {
                this.style1 = this.hidden;
                this.style2 = this.hidden;
                this.style3 = this.hidden;
                this.style4 = this.show;
                this.style5 = this.hidden;
                this.style6 = this.hidden;
            },
            show5() {
                this.style1 = this.hidden;
                this.style2 = this.hidden;
                this.style3 = this.hidden;
                this.style4 = this.hidden;
                this.style5 = this.show;
                this.style6 = this.hidden;
            },
            show6() {
                this.style1 = this.hidden;
                this.style2 = this.hidden;
                this.style3 = this.hidden;
                this.style4 = this.hidden;
                this.style5 = this.hidden;
                this.style6 = this.show;
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


</style>
