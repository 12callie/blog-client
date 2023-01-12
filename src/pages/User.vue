<template>
  <div id="user">
    <section class="user-info">
      <img class="avatar" :src="user.avatar" :alt="user.username" />
      <h3>{{ user.username }}</h3>
    </section>
    <section>
      <router-link
        class="item"
        v-for="blog in blogs"
        :key="blog.id"
        :to="`/detail/${blog.id}`"
      >
        <div class="date">
          <span class="day">{{ splitDate(blog.createdAt).date }}</span>
          <span class="month">{{ splitDate(blog.createdAt).month }}月</span>
          <span class="year">{{ splitDate(blog.createdAt).year }}</span>
        </div>
        <h3>{{ blog.title }}</h3>
        <p>
          {{ blog.description }}
        </p>
      </router-link>
    </section>
    <div class="block">
      <el-pagination
        :page-size="20"
        layout="prev, pager, next"
        :total="total"
        :current-page.sync="page"
        @current-change="onPageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import blog from "@/api/blog";

export default {
  name: "User",
  data() {
    return {
      blogs: [],
      user: {},
      page: 1,
      total: 0
    };
  },
  created() {
    const userId = this.$route.params.userId;
    this.page = Number(this.$route.query.page) || 1;
    blog.getBlogsByUserId(userId, { page: this.page }).then(res => {
      this.blogs = res.data;
      this.total = res.total;
      if (res.data.length > 0) {
        this.user = res.data[0].user;
      }
    });
  },
  methods: {
    splitDate(dataStr) {
      let dateObj = typeof dataStr === "object" ? dataStr : new Date(dataStr);
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      };
    },
    onPageChange(newPage) {
      const userId = this.$route.params.userId;
      blog.getBlogsByUserId(userId, { page: newPage }).then(res => {
        this.blogs = res.data;
        this.total = res.total;
        this.$router.push({
          path: `/user/${this.user.id}`,
          query: { page: newPage }
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/myAndUser.less";
</style>
