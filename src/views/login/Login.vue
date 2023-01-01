<template>
  <div>
    <el-card>
      <el-input
        v-model="acc"
        clearable
        placeholder="请输入您的用户名/邮箱"
      ></el-input>
      <el-input
        show-password
        clearable
        placeholder="请输入您的密码"
        v-model="pwd"
      ></el-input>
      <el-button type="primary" @click="clickLogin">下一步</el-button>
      <el-checkbox v-model="checkout"></el-checkbox>
    </el-card>
  </div>
</template>

<script>
import { userLogin } from "@/api/user";
export default {
  data() {
    return {
      // 账号
      acc: "admin",
      //密码
      pwd: "a123456",
      // 复选框
      checkout: false,
    };
  },
  methods: {
    async clickLogin() {
      let res = await userLogin({ account: this.acc, password: this.pwd });
      if (res.data.code == 1) {
        //登录成功
        this.$router.push("/home");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
