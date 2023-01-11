<template>
  <header :class="{ login: isLogin, 'no-login': !isLogin }">
    <template v-if="!isLogin">
      <h1>Let'S SHARE</h1>
      <p>精品博客汇聚</p>
      <div class="btns">
        <router-link to="/login">
          <el-button>立即登录</el-button>
        </router-link>
        <router-link to="/register">
          <el-button>注册账号</el-button>
        </router-link>
      </div>
    </template>
    <template v-if="isLogin">
      <h1>
        <router-link to="/">Let'S SHARE</router-link>
      </h1>
      <router-link to="/create"><i class="edit el-icon-plus"></i></router-link>
      <div class="user">
        <img
          class="avatar"
          :src="user.avatar"
          :alt="user.username"
          :title="user.username"
        />
        <ul>
          <li>
            <router-link to="/my">我的</router-link>
          </li>
          <li><a href="#" @click="logout">注销</a></li>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  created() {
    this.checkLogin();
  },
  computed: {
    ...mapGetters(["isLogin", "user"])
  },
  methods: {
    ...mapActions(["checkLogin", "logout"])
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/base.less";

header.no-login {
  display: grid;
  justify-items: center;
  background: @bgColor;
  padding: 60px 12% 30px 12%;

  h1 {
    color: #fff;
    font-size: 40px;
    text-transform: uppercase;
  }

  p {
    margin-top: 16px;
    color: #fff;
  }

  .btns {
    margin-top: 20px;

    a {
      &:nth-child(1) {
        margin-right: 20px;
      }
    }
  }
}

header.login {
  background: @bgColor;
  display: flex;
  align-items: center;
  padding: 16px 12%;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 40px;
    text-transform: uppercase;
    flex: 1;

    a {
      color: #fff;
      text-decoration: none;
      cursor: pointer;
    }
  }

  .edit {
    color: #fff;
    font-size: 30px;
  }

  .user {
    position: relative;

    &:hover ul {
      display: block;
    }

    .avatar {
      width: 44px;
      height: 44px;
      border: 1px solid #fff;
      border-radius: 50%;
      margin-left: 16px;
    }

    ul {
      display: none;
      position: absolute;
      right: 0;
      border: 1px solid #eaeaea;
      background: #fff;

      a {
        text-decoration: none;
        color: #333;
        font-size: 12px;
        display: block;
        padding: 5px 10px;

        &:hover {
          background: rgb(234, 234, 234);
        }
      }
    }
  }
}
</style>
