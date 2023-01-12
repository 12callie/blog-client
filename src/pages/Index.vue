<template>
  <div id="index">
    <section class="blog-posts">
      <router-link
        class="item"
        v-for="blog in blogs"
        :key="blog.id"
        :to="`/detail/${blog.id}`"
      >
        <figure class="avatar">
          <img
            class="avatar"
            :src="blog.user.avatar"
            :alt="blog.user.username"
          />
          <figcaption>{{ blog.user.username }}</figcaption>
        </figure>
        <h3>
          {{ blog.title }} <span>{{ friendlyDate(blog.createdAt) }}</span>
        </h3>
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
  name: "Index",
  data() {
    return {
      blogs: [],
      page: 0,
      total: 0
    };
  },
  created() {
    this.page = Number(this.$route.query.page) || 1;
    blog.getIndexBlogs({ page: this.page }).then(res => {
      this.blogs = res.data;
      this.page = res.page;
      this.total = res.total;
    });
  },
  methods: {
    onPageChange(newPage) {
      blog.getIndexBlogs({ page: newPage }).then(res => {
        this.blogs = res.data;
        this.page = res.page;
        this.total = res.total;
        this.$router.push({ path: "/", query: { page: newPage } });
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/base.less";

#index {
  .blog-posts {
    padding-top: 78px;

    .item {
      display: grid;
      grid: auto auto / 80px 1fr;
      margin-bottom: 50px;

      .avatar {
        grid-column: 1;
        grid-row: 1 / span 2;
        justify-self: center;
        align-self: center;
        text-align: center;

        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }

        figcaption {
          font-size: 12px;
          color: @textLighterColor;
        }
      }

      h3 {
        grid-column: 2;
        grid-row: 1;
        margin: 5px 0;

        span {
          font-size: 12px;
          color: @textLighterColor;
          font-weight: normal;
          margin-left: 6px;
        }
      }

      p {
        grid-column: 2;
        grid-row: 2;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .block {
    text-align: center;
    padding: 24px;
  }
}
</style>
