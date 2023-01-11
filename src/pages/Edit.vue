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
    <el-button>保存</el-button>
  </div>
</template>

<script>
export default {
  name: "Edit",
  data() {
    return {
      title: "",
      description: "",
      content: "",
      atIndex: false
    };
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/editAndCreate.less";
</style>
