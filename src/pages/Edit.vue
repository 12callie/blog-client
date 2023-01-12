<template>
  <div id="edit">
    <h2>编辑文章</h2>
    <h4>文章标题</h4>
    <el-input type="text" v-model="title" maxlength="30"></el-input>
    <p class="msg">限30个字</p>
    <h4>内容简介</h4>
    <el-input
      type="textarea"
      v-model="description"
      :autosize="{ minRows: 2, maxRows: 6 }"
      maxlength="200"
    />
    <p class="msg">限200个字</p>
    <h4>文章内容</h4>
    <el-input
      type="textarea"
      v-model="content"
      :autosize="{ minRows: 4, maxRows: 30 }"
      maxlength="10000"
    />
    <p class="msg">限10000个字</p>
    <p>
      <label>是否展示到首页</label>
      <el-switch
        v-model="atIndex"
        active-color="rgb(0, 153, 0)"
        inactive-color="rgb(215,215,215)"
      />
    </p>
    <el-button @click="onSave">保存</el-button>
  </div>
</template>

<script>
import blog from "@/api/blog";

export default {
  name: "Edit",
  data() {
    return {
      title: "",
      description: "",
      content: "",
      atIndex: false,
      blogId: null
    };
  },
  created() {
    this.blogId = this.$route.params.blogId;
    blog.getDetail({ blogId: this.blogId }).then(res => {
      this.title = res.data.title;
      this.content = res.data.content;
      this.description = res.data.description;
      this.atIndex = res.data.atIndex;
    });
  },
  methods: {
    onSave() {
      blog
        .updateBlog(
          { blogId: this.blogId },
          {
            title: this.title,
            content: this.content,
            description: this.description,
            atIndex: this.atIndex
          }
        )
        .then(res => {
          console.log("更改成功", res);
          this.$message.success(res.msg);
          this.$router.push({ path: `/detail/${res.data.id}` });
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/editAndCreate.less";
</style>
