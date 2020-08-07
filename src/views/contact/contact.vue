<template>
  <div>
    <img class="hidden-md-and-up" src="../../assets/contact.png" width="100%" alt="hr">
    <img class="hidden-md-and-down" src="../../assets/contact.png" style="width: 100%;height: 150px" alt="hr">
    <div class="hidden-md-and-down">
      <el-container :style="padding" class="hidden-md-and-down">
        <el-aside style="padding-left: 5%;width: 20%">
          <ul>
            <li v-for="job in jobTableData" :key="job.id">
              <div style="border:1px solid #dedede;padding: 5%">
                <el-button type="text" style="font-size: 16px;color: black;text-align: left;"
                           @click="showContent(job.content)">
                  {{ job.title }}
                </el-button>
              </div>
            </li>
          </ul>
        </el-aside>
        <el-container>
          <div v-html="content" style="padding-top: 2%;padding-left: 5%">
          </div>
        </el-container>
      </el-container>
    </div>
    <div class="hidden-md-and-up">
      <ul style="padding: 0">
        <li v-for="job in jobTableData" :key="job.id">
          <div style="border:1px solid #dedede;padding: 5%">
            <el-button type="text" style="font-size: 16px;color: black;text-align: left;"
                       @click="showContent(job.content)">
              {{ job.title }}
            </el-button>
          </div>
        </li>
      </ul>
      <div v-html="content" style="padding-top: 2%;">
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../request/request";

export default {
  name: "contact",
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