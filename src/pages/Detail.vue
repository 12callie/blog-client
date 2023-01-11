<template>
  <div id="detail">
    <section class="user-info">
      <img
        class="avatar"
        src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
        alt=""
      />
      <h3>前端异步大揭秘</h3>
      <p>
        <router-link to="/user">小艺</router-link>
        <span>发布于3天前</span>
      </p>
    </section>
    <section class="article">
      <p>
        本文以一个简单的文件读写为例，讲解了异步的不同写法，包括普通的callback、ES2016中的Promise和Generator、Node用于解决回调的co模块、ES2017中的async/await。适合初步接触Node.,js以及少量ES6语法
      </p>
      <h1>一个范例</h1>
      <ul>
        以一个范例做为例，我们要实现的功能如下:
        <li>读取a.md文件，得到内容</li>
        <li>把内容转换成HTML字符串</li>
        <li>把HTML字符串写入b.html</li>
      </ul>
      <p>
        本文以一个简单的文件读写为例，讲解了异步的不同写法，包括普通的callback、ES2016中的Promise和Generator、Node用于解决回调的co模块、ES2017中的async/await。适合初步接触Node.,js以及少量ES6语法
      </p>
      <h1>一个范例</h1>
      <ul>
        以一个范例做为例，我们要实现的功能如下:
        <li>读取a.md文件，得到内容</li>
        <li>把内容转换成HTML字符串</li>
        <li>把HTML字符串写入b.html</li>
      </ul>
      <p>
        本文以一个简单的文件读写为例，讲解了异步的不同写法，包括普通的callback、ES2016中的Promise和Generator、Node用于解决回调的co模块、ES2017中的async/await。适合初步接触Node.,js以及少量ES6语法
      </p>
      <h1>一个范例</h1>
      <ul>
        以一个范例做为例，我们要实现的功能如下:
        <li>读取a.md文件，得到内容</li>
        <li>把内容转换成HTML字符串</li>
        <li>把HTML字符串写入b.html</li>
      </ul>

      <p>
        本文以一个简单的文件读写为例，讲解了异步的不同写法，包括普通的callback、ES2016中的Promise和Generator、Node用于解决回调的co模块、ES2017中的async/await。适合初步接触Node.,js以及少量ES6语法
      </p>
      <h1>一个范例</h1>
      <ul>
        以一个范例做为例，我们要实现的功能如下:
        <li>读取a.md文件，得到内容</li>
        <li>把内容转换成HTML字符串</li>
        <li>把HTML字符串写入b.html</li>
      </ul>
      <p>
        本文以一个简单的文件读写为例，讲解了异步的不同写法，包括普通的callback、ES2016中的Promise和Generator、Node用于解决回调的co模块、ES2017中的async/await。适合初步接触Node.,js以及少量ES6语法
      </p>
      <h1>一个范例</h1>
      <ul>
        以一个范例做为例，我们要实现的功能如下:
        <li>读取a.md文件，得到内容</li>
        <li>把内容转换成HTML字符串</li>
        <li>把HTML字符串写入b.html</li>
      </ul>
      <p>
        本文以一个简单的文件读写为例，讲解了异步的不同写法，包括普通的callback、ES2016中的Promise和Generator、Node用于解决回调的co模块、ES2017中的async/await。适合初步接触Node.,js以及少量ES6语法
      </p>
      <h1>一个范例</h1>
      <ul>
        以一个范例做为例，我们要实现的功能如下:
        <li>读取a.md文件，得到内容</li>
        <li>把内容转换成HTML字符串</li>
        <li>把HTML字符串写入b.html</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "Detail"
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
