<template>
  <div id="detail">
    <section class="user-info">
      <img class="avatar" :src="user.avatar" :alt="user.username" />
      <h3>{{ title }}</h3>
      <p>
        <router-link :to="`/user/${user.id}`">{{ user.username }}</router-link>
        <span>发布于{{ friendlyDate(createdAt) }}</span>
      </p>
    </section>
    <section class="article" v-html="markdown"></section>
  </div>
</template>

<script>
import marked from "marked";
import blog from "@/api/blog";

export default {
  name: "Detail",
  data() {
    return {
      title: "",
      rawContent: "",
      user: {},
      createdAt: ""
    };
  },
  computed: {
    markdown() {
      return marked(this.rawContent);
    }
  },
  created() {
    const blogId = this.$route.params.blogId;
    blog.getDetail({ blogId: blogId }).then(res => {
      console.log(res);
      this.title = res.data.title;
      this.rawContent = res.data.content;
      this.user = res.data.user;
      this.createdAt = res.data.createdAt;
    });
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/base.less";
@import "~@/assets/styles/article.less";

#detail {
  .user-info {
    display: grid;
    grid: auto auto / 80px 1fr;
    padding-top: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #ebebeb;

    .avatar {
      grid-column: 1;
      grid-row: 1 / span 2;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    h3 {
      grid-column: 2;
      grid-row: 1;
      margin: 5px 0;
    }

    p {
      grid-column: 2;
      grid-row: 2;
      font-size: 12px;
      color: @textLighterColor;

      a {
        color: @themeColor;
        text-decoration: none;
        margin-right: 4px;
      }
    }
  }

  .article {
    padding: 30px 0;
  }
}
</style>
