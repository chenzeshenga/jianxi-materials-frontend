<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" style="width: 40%;padding-left: 30%">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.pwd" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from "../../request/request";

export default {
  name: "login",
  data() {
    return {
      form: {
        username: '',
        pwd: '',
      }
    }
  },
  methods: {
    onSubmit() {
      request.login(this.form).then(() => {
        this.$message.success('登录成功');
        this.$router.push({path: '/mgt/mgt'})
      }).catch(() => {
        this.$message.error('error 用户名或密码错误');
      })
    }
  }
}
</script>

<style scoped>

</style>