<template>
  <div id="register">
    <h4>用户名</h4>
    <input v-model="username" placeholder="请输入用户名" />
    <h4>密码</h4>
    <input
      v-model="password"
      type="password"
      placeholder="请输入密码"
      @keyup.enter="onRegister"
    />
    <el-button size="medium" @click="onRegister">立即注册</el-button>
    <p class="notice">
      已有账号？
      <router-link to="/login">立即登录</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onRegister() {
      this.$store
        .dispatch("register", {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$router.push("/");
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/registerAndLogin.less";
</style>
