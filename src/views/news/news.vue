<template>
  <div>
    <el-row>
      <img src="../../assets/news-new.jpg" style="width: 100%;height: 200px" alt="新闻中心" class="hidden-md-and-down">
    </el-row>
    <div :style="padding">
      <el-row>
        <el-col class="el-col-lg-4 el-col-md-24 el-col-sm-24" style="overflow-x: hidden">
          <ul style="padding-left: 0">
            <li>
              <img src="../../assets/news.png" alt="新闻中心" style="width: 100%;height: 80px"
                   class="hidden-md-and-down">
              <img src="../../assets/news.png" alt="新闻中心" style="width: 100%" class="hidden-md-and-up">
            </li>
            <li>
              <div style="border:1px solid #dedede;padding: 5%">
                <el-button type="text" style="font-size: 16px;color: black;text-align: left;" :class="show1Class"
                           @click="showNews1">公司新闻
                </el-button>
              </div>
            </li>
            <li>
              <div style="border:1px solid #dedede;padding: 5%">
                <el-button type="text" style="font-size: 16px;color: black;text-align: left;" :class="show2Class"
                           @click="showNews2">行业动态
                </el-button>
              </div>
            </li>
          </ul>
        </el-col>
        <el-col class="el-col-lg-16 el-col-md-24 el-col-sm-24">
          <div :style="newsStyle1">
            <el-table
                :data="newsTableData1"
                :style="tableStyle"
                :cell-style="{'font-size':'16px'}"
            >
              <el-table-column
                  prop="title"
                  label="标题"
              >
                <template slot-scope="scope">
                  <el-button type="text" @click="router2NewsDetail(scope.row.id)">{{ scope.row.title }}
                  </el-button>
                </template>
              </el-table-column>
              <el-table-column
                  prop="time"
                  label="日期"
                  width="160"
              >
              </el-table-column>
            </el-table>
            <el-pagination
                layout="prev, pager, next, total"
                :total="pagination1.total"
                :page-size="pagination1.size"
                :current-page="pagination1.current"
                @current-change="currentChange1"
            >
            </el-pagination>
          </div>
          <div :style="newsStyle2">
            <el-table
                :data="newsTableData2"
                :style="tableStyle"
                :cell-style="{'font-size':'16px'}">
              <el-table-column
                  prop="title"
                  label="标题"
              >
                <template slot-scope="scope">
                  <el-button type="text" @click="router2NewsDetail(scope.row.id)">{{ scope.row.title }}
                  </el-button>
                </template>
              </el-table-column>
              <el-table-column
                  prop="time"
                  label="日期"
                  width="160"
              >
              </el-table-column>
            </el-table>
            <el-pagination
                layout="prev, pager, next, total"
                :total="pagination2.total"
                :page-size="pagination2.size"
                :current-page="pagination2.current"
                @current-change="currentChange2"
            >
            </el-pagination>
          </div>
          <div :style="newsDetailStyle">
            <div style="padding-left: 20%;padding-right: 20%" class="hidden-md-and-down">
              <h3>{{ title }}</h3>
              <span style="text-align:left;">更新时间:  {{ time }}</span>
              <div v-html="content" style="text-align:left !important">
              </div>
            </div>
            <div class="hidden-md-and-up">
              <h3>{{ title }}</h3>
              <span style="text-align:left;">更新时间:  {{ time }}</span>
              <div v-html="content" style="text-align:left !important">
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

import request from "../../request/request";

export default {
  name: "news",
  data() {
    return {
      newsDetailStyle: {
        'display': 'none'
      },
      content: '',
      title: '',
      time: '',
      padding: {
        'padding-left': '12%',
        'margin-top': '2%'
      },
      tableStyle: {},
      tabPosition: 'left',
      pagination1: {
        current: 1,
        size: 10,
        total: 0,
      },
      hidden: {
        'display': 'none'
      },
      show: {
        'display': 'block'
      },
      newsStyle1: {
        'display': 'none'
      },
      newsStyle2: {
        'display': 'block'
      },
      pagination2: {
        current: 1,
        size: 10,
        total: 0,
      },
      newsTableData1: [],
      newsTableData2: [],
      show1Class: 'highlight',
      show2Class: 'normal',
    }
  },
  created() {
    this.updateCss();
    this.fetchNews();
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
        this.showNews1();
      } else if (id === '2') {
        this.showNews2();
      }
    },
    show1() {
      this.style1 = this.show;
      this.style2 = this.hidden;
      this.newsDetailStyle = this.hidden;
    },
    show2() {
      this.style1 = this.hidden;
      this.style2 = this.show;
      this.newsDetailStyle = this.hidden;
    },
    updateCss() {
      if (window.outerWidth <= 992) {
        this.tabPosition = 'top';
        this.padding = {};
        this.tableStyle = {};
      }
    },
    currentChange1(val) {
      this.pagination1.current = val;
      this.fetchNews()
    },
    currentChange2(val) {
      this.pagination2.current = val;
      this.fetchNews()
    },
    fetchNews() {
      request.listNews(this.pagination1, '1').then((ret) => {
        this.newsTableData1 = ret.data.list;
        this.pagination1.total = ret.data.total;
        this.pagination1.current = ret.data.current;
        this.pagination1.size = ret.data.size;
      }).catch((err) => {
        console.log(err)
      })
      request.listNews(this.pagination2, '2').then((ret) => {
        this.newsTableData2 = ret.data.list;
        this.pagination2.total = ret.data.total;
        this.pagination2.current = ret.data.current;
        this.pagination2.size = ret.data.size;
      }).catch((err) => {
        console.log(err)
      })
    },
    router2NewsDetail(id) {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      request.fetchSingleNews(id).then((ret) => {
        this.newsDetailStyle = this.show;
        this.newsStyle1 = this.hidden;
        this.newsStyle2 = this.hidden;
        this.content = ret.data.content;
        this.time = ret.data.time;
        this.title = ret.data.title;
        loading.close();
      }).catch((err) => {
        console.log(err);
      })
    },
    showNews2() {
      this.newsStyle2 = this.hidden;
      this.newsStyle1 = this.show;
      this.newsDetailStyle = this.hidden;
      this.show2Class = 'highlight';
      this.show1Class = 'normal';
      this.fetchNews();
    },
    showNews1() {
      this.newsStyle2 = this.show;
      this.newsStyle1 = this.hidden;
      this.newsDetailStyle = this.hidden;
      this.show2Class = 'normal';
      this.show1Class = 'highlight';
      this.fetchNews();
    }
  }
}
</script>

<style scoped>
.textLeft {
  text-align: left;
}

.el-button--text {
  background: 0 0;
  padding-left: 0;
  padding-right: 0;
  color: black;
}

li {
  text-decoration: snow;
  text-align: left;
  list-style-type: none;
}

.normal {
  font-size: 16px;
  color: black !important;
  text-align: left;
}

.highlight {
  font-size: 16px;
  text-align: left;
  color: blue !important;
}
</style>