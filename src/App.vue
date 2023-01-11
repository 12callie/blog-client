<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
@import "~@/assets/styles/common.less";
@import "~@/assets/styles/reset.less";

#app {
  font-family: @font-hei;
}
</style>
