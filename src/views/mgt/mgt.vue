<template>
  <el-container style="padding-left: 10%">
    <el-aside width="100px">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo">
        <el-menu-item index="1">
          <em class="el-icon-location"></em>
          <el-button type="text" slot="title" @click="newsUpdate">新闻</el-button>
        </el-menu-item>
        <el-menu-item index="2">
          <em class="el-icon-menu"></em>
          <el-button type="text" slot="title" @click="productUpdate">产品</el-button>
        </el-menu-item>
        <el-menu-item index="3">
          <em class="el-icon-menu"></em>
          <el-button type="text" slot="title" @click="hrUpdate">招聘</el-button>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main style="padding-left: 10%" :style="newsMainStyle">
        <h3>新闻管理</h3>
        <el-table :data="newsTableData" v-loading.body="tableLoading">
          <el-table-column prop="title" label="标题">
          </el-table-column>
          <el-table-column prop="time" label="更新时间">
          </el-table-column>
          <el-table-column prop="typeDesc" label="新闻类型">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-tooltip
                  content="编辑"
                  placement="top"
              >
                <el-button
                    @click="newsEdit(scope.$index, scope.row)"
                    size="small"
                    type="info"
                    icon="el-icon-edit"
                    circle
                    plain
                ></el-button>
              </el-tooltip>
              <el-tooltip
                  content="删除"
                  placement="top"
              >
                <el-button
                    @click="newsDelete(scope.$index, scope.row)"
                    size="mini"
                    type="danger"
                    icon="el-icon-delete"
                    circle
                    plain
                ></el-button>
              </el-tooltip>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
            layout="prev, pager, next, total"
            :total="pagination.total"
            :page-size="pagination.size"
            :current-page="pagination.current"
            @current-change="currentChange"
        >
        </el-pagination>
        <div style="margin-top: 2%">
          新增新闻
          <el-row style="margin-top: 2%">
            <el-col :span="2">标题</el-col>
            <el-col :span="18">
              <el-tooltip content="请输入新闻标题，30个字以内">
                <el-input v-model="news.title"></el-input>
              </el-tooltip>
            </el-col>
          </el-row>
          <el-row style="margin-top: 2%">
            <el-col :span="2">类型</el-col>
            <el-col :span="18">
              <el-radio v-model="news.type" label="1" border>行业动态</el-radio>
              <el-radio v-model="news.type" label="2" border>公司新闻</el-radio>
            </el-col>
          </el-row>
          <el-row style="margin-top: 2%">
            <el-col :span="2">内容</el-col>
          </el-row>
          <div ref="newsEditor" style="text-align:left"></div>
          <el-button @click="news2Backend" style="margin-top: 2%">确定</el-button>
        </div>
      </el-main>
      <el-main style="padding-left: 10%" :style="productMainStyle">
        <h3>产品管理</h3>
        <el-table :data="productTableData" v-loading.body="tableLoading">
          <el-table-column prop="name" label="名称">
          </el-table-column>
          <el-table-column prop="category" label="分类">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-tooltip
                  content="编辑"
                  placement="top"
              >
                <el-button
                    @click="productEdit(scope.$index, scope.row)"
                    size="small"
                    type="info"
                    icon="el-icon-edit"
                    circle
                    plain
                ></el-button>
              </el-tooltip>
              <el-tooltip
                  content="删除"
                  placement="top"
              >
                <el-button
                    @click="productDelete(scope.$index, scope.row)"
                    size="mini"
                    type="danger"
                    icon="el-icon-delete"
                    circle
                    plain
                ></el-button>
              </el-tooltip>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 2%">
          新增产品
          <el-row style="margin-top: 2%">
            <el-col :span="2">名称</el-col>
            <el-col :span="18">
              <el-tooltip content="请输入产品名称，30个字以内">
                <el-input v-model="product.name"></el-input>
              </el-tooltip>
            </el-col>
          </el-row>
          <el-row style="margin-top: 2%">
            <el-col :span="2">产品分类</el-col>
            <el-col :span="18">
              <el-tooltip content="产品分类">
                <el-select v-model="product.category" placeholder="请选择">
                  <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
              </el-tooltip>
            </el-col>
          </el-row>
          <el-row style="margin-top: 2%">
            <el-col :span="2">产品级别</el-col>
            <el-col :span="18">
              <el-tooltip content="产品级别">
                <el-select v-model="product.level" placeholder="请选择">
                  <el-option key="0" value="0">0</el-option>
                  <el-option key="1" value="1">1</el-option>
                </el-select>
              </el-tooltip>
            </el-col>
          </el-row>
          <el-row style="margin-top: 2%">
            <el-upload
                class="upload-demo"
                drag
                action="http://47.111.170.208:8889/materials/file"
                multiple
                :on-success="successUpload"
            >
              <em class="el-icon-upload"/>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-row>
          <el-row style="margin-top: 2%">
            <el-col :span="2">内容</el-col>
          </el-row>
          <div ref="productEditor" style="text-align:left"></div>
          <el-button @click="product2Backend" style="margin-top: 2%">确定</el-button>
        </div>
      </el-main>
      <el-main style="padding-left: 10%" :style="hrMainStyle">
        <h3>职位管理</h3>
        <el-table :data="jobTableData" v-loading.body="tableLoading">
          <el-table-column prop="title" label="名称">
          </el-table-column>
          <el-table-column prop="content" label="内容">
          </el-table-column>
          <el-table-column prop="contact" label="联系方式">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-tooltip
                  content="删除"
                  placement="top"
              >
                <el-button
                    @click="jobDelete(scope.$index, scope.row)"
                    size="mini"
                    type="danger"
                    icon="el-icon-delete"
                    circle
                    plain
                ></el-button>
              </el-tooltip>
              <el-tooltip
                  content="编辑"
                  placement="top"
              >
                <el-button
                    @click="jobUpdateTrigger(scope.$index, scope.row)"
                    size="mini"
                    type="info"
                    icon="el-icon-edit"
                    circle
                    plain
                ></el-button>
              </el-tooltip>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 2%">
          新增职位
          <el-row style="margin-top: 2%">
            <el-input v-model="job.title" style="margin-top: 2%;margin-bottom: 2%">
              <template slot="prepend">职位名称：</template>
            </el-input>
            职位介绍：
            <el-input v-model="job.content" type="textarea" style="margin-bottom: 2%">
            </el-input>
            <el-input v-model="job.contact">
              <template slot="prepend">联系方式：</template>
            </el-input>
          </el-row>
          <el-button @click="jobUpdate" style="margin-top: 2%">确定</el-button>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import request from "../../request/request";
import E from 'wangeditor';

export default {
  name: "mgt",
  data() {
    return {
      options: [
        {
          value: '高纯金属',
          label: '高纯金属'
        },
        {
          value: '铜合金',
          label: '铜合金    '
        },
        {
          value: '铝合金',
          label: '铝合金'
        },
        {
          value: '其他产品',
          label: '其他产品'
        },
        {
          value: '定制化产品',
          label: '定制化产品'
        }
      ],
      tableLoading: false,
      news: {
        id: 0,
        title: '',
        content: '',
        type: '1'
      },
      newsTableData: [],
      product: {
        id: 0,
        name: '',
        introduce: '',
        img: '',
        level: '',
      },
      job: {
        id: 0,
        title: '',
        content: '',
        contact: ''
      },
      productTableData: [],
      docTableData: [],
      jobTableData: [],
      hidden: {
        display: 'none'
      },
      show: {
        display: 'block'
      },
      newsStyle: {
        'margin-top': '5%',
        'display': 'none'
      },
      showCharCount: true,
      maxLength: 2000,
      placeholder: '请输入新闻内容',
      pagination: {
        current: 1,
        size: 10,
        total: 0,
      },
      pagination4Product: {
        current: 1,
        size: 10,
        total: 0,
      },
      newsType: '1',
      newsMainStyle: {
        display: 'block'
      },
      productMainStyle: {
        display: 'none'
      },
      hrMainStyle: {
        display: 'none'
      },
      newsEditor: null,
      newsEditorContent: '',
      productEditor: null,
      productEditorContent: '',
    };
  },
  created() {
    this.isMd();
    this.fetchNews();
    this.fetchProduct();
    this.fetchJob();
  },
  mounted() {
    this.newsEditor = new E(this.$refs.newsEditor)
    this.newsEditor.customConfig.onchange = (html) => {
      this.newsEditorContent = html;
    }
    this.newsEditor.customConfig.uploadImgServer = "http://47.111.170.208:8889/materials/file";
    this.newsEditor.create();

    this.productEditor = new E(this.$refs.productEditor)
    this.productEditor.customConfig.onchange = (html) => {
      this.productEditorContent = html
    }
    this.productEditor.customConfig.uploadImgServer = "http://47.111.170.208:8889/materials/file";
    this.productEditor.create()
  },
  methods: {
    isMd() {
      if (window.outerWidth <= 992) {
        this.$message.warning('请使用桌面版管理内容')
      }
    },
    fetchNews() {
      this.tableLoading = true;
      request.listAllNews(this.pagination).then((ret) => {
        let list = ret.data.list;
        for (let news of list) {
          if ('1' === news.type) {
            news.typeDesc = '行业动态';
          } else {
            news.typeDesc = '公司新闻';
          }
        }
        this.newsTableData = list;
        this.pagination.total = ret.data.total;
        this.pagination.current = ret.data.current;
        this.pagination.size = ret.data.size;
        this.tableLoading = false;
      }).catch((err) => {
        console.log(err)
      })
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
    fetchProduct() {
      this.tableLoading = true;
      request.listAllProduct().then((ret) => {
        this.productTableData = ret.data;
        this.tableLoading = false;
      }).catch((err) => {
        console.log(err)
      })
    },
    currentChange(val) {
      this.pagination.current = val;
      this.fetchNews()
    },
    currentChange4Product(val) {
      this.pagination4Product.current = val;
      this.fetchProduct()
    },
    newsUpdate() {
      this.newsType = '1';
      this.newsMainStyle = this.show;
      this.productMainStyle = this.hidden;
      this.hrMainStyle = this.hidden;
    },
    productUpdate() {
      this.newsMainStyle = this.hidden;
      this.productMainStyle = this.show;
      this.hrMainStyle = this.hidden;
    },
    hrUpdate() {
      this.newsMainStyle = this.hidden;
      this.productMainStyle = this.hidden;
      this.hrMainStyle = this.show;
    },
    newsEdit(index, row) {
      this.news.id = row.id;
      this.news.title = row.title;
      this.news.content = row.content;
      this.news.type = row.type;
      this.newsEditor.txt.html(row.content);
    },
    productEdit(index, row) {
      this.product = row;
      this.productEditor.txt.html(row.introduce);
    },
    newsDelete(index, row) {
      request.deleteNews(row.id).then((ret) => {
        console.log(ret);
        this.$message.success('新闻删除成功');
        this.fetchNews();
      }).catch((err) => {
        console.log(err)
      })
    },
    productDelete(index, row) {
      request.deleteProduct(row.id).then((ret) => {
        console.log(ret);
        this.$message.success('产品删除成功');
        this.fetchProduct();
      }).catch((err) => {
        console.log(err)
      })
    },
    jobUpdate(index, row) {
      console.log(index);
      console.log(row);
      if (!this.job.title) {
        this.$message.warning('请输入标题');
        return;
      }
      request.addOrUpdateJob(this.job).then(() => {
        this.$message.success('职位创建成功');
        this.job = {
          id: 0,
          title: '',
          content: '',
          contact: ''
        };
        this.fetchJob();
      }).catch((err) => {
        console.log(err);
      })
    },
    jobUpdateTrigger(index, row) {
      this.job.id = row.id;
      this.job.title = row.title;
      this.job.content = row.content;
      this.job.contact = row.contact;
    },
    jobDelete(index, row) {
      request.deleteJob(row.id).then((ret) => {
        console.log(ret);
        this.$message.success('职位删除成功');
        this.fetchJob();
      }).catch((err) => {
        console.log(err)
      })
    },
    news2Backend() {
      if (!this.news.title) {
        this.$message.warning('请输入标题');
        return;
      }
      this.news.content = this.newsEditorContent;
      request.addOrUpdateNews(this.news).then(() => {
        this.$message.success('新闻创建成功');
        this.news = {
          title: '',
          content: '',
          type: '1'
        };
        this.fetchNews();
      }).catch((err) => {
        console.log(err);
      })
    },
    product2Backend() {
      if (!this.product.name) {
        this.$message.warning('请输入产品名称');
        return;
      }
      this.product.introduce = this.productEditorContent
      request.addOrUpdateProduct(this.product).then(() => {
        this.$message.success('产品创建成功');
        this.product = {
          id: 0,
          name: '',
          introduce: '',
          img: ''
        };
        this.fetchProduct();
      }).catch((err) => {
        console.log(err);
      })
    },
    successUpload(response) {
      this.product.img = response.data[0];
    },
  }
}
</script>

<style scoped>
@import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>