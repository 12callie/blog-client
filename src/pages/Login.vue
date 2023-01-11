<template>
  <div id="login">
    <h4>用户名</h4>
    <input v-model="username" placeholder="请输入用户名" />
    <h4>密码</h4>
    <input
      v-model="password"
      type="password"
      placeholder="请输入密码"
      @keyup.enter="onLogin"
    />
    <el-button size="medium" @click="onLogin">立即登录</el-button>
    <p class="notice">
      没有账号？
      <router-link to="/register">注册新用户</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Login.vue",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onLogin() {
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$router.push({ path: this.$route.query.redirect || "/" });
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/registerAndLogin.less";
</style>
