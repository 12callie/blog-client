<template>
  <div id="my">
    <section class="user-info">
      <img
        class="avatar"
        src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
        alt=""
      />
      <h3>小艺</h3>
    </section>
    <section>
      <div class="item">
        <div class="date">
          <span class="day">20</span>
          <span class="month">5月</span>
          <span class="year">2022</span>
        </div>
        <h3>前端异步大揭秘</h3>
        <p>
          本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的
          callback、ES2016中的Promise和Generator、 Node 用于解决回调的co
          模块、ES2017中的async/await。适合初步接触 Node.js以及少量
          ES6语法的同学阅读...
        </p>
        <div class="actions">
          <router-link to="/edit">编辑</router-link>
          <a href="#">删除</a>
        </div>
      </div>

      <div class="item">
        <div class="date">
          <span class="day">20</span>
          <span class="month">5月</span>
          <span class="year">2022</span>
        </div>
        <h3>前端异步大揭秘</h3>
        <p>
          本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的
          callback、ES2016中的Promise和Generator、 Node 用于解决回调的co
          模块、ES2017中的async/await。适合初步接触 Node.js以及少量
          ES6语法的同学阅读...
        </p>
        <div class="actions">
          <router-link to="/edit">编辑</router-link>
          <a href="#">删除</a>
        </div>
      </div>
      <div class="item">
        <div class="date">
          <span class="day">20</span>
          <span class="month">5月</span>
          <span class="year">2022</span>
        </div>
        <h3>前端异步大揭秘</h3>
        <p>
          本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的
          callback、ES2016中的Promise和Generator、 Node 用于解决回调的co
          模块、ES2017中的async/await。适合初步接触 Node.js以及少量
          ES6语法的同学阅读...
        </p>
        <div class="actions">
          <router-link to="/edit">编辑</router-link>
          <a href="#">删除</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "My"
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/myAndUser.less";
</style>
