<template>
  <div id="app">
    <Header id="header"></Header>
    <main id="main">
      <router-view />
    </main>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: { Header, Footer }
};
</script>

<style lang="less">
@import "~@/assets/styles/reset.less";
@import "~@/assets/styles/common.less";

#app {
  font-family: @font-hei;

  display: grid;
  grid-template-columns: 12% auto 12%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    ". main ."
    "footer footer footer";

  #header {
    grid-area: header;
    padding-left: 12%;
    padding-right: 12%;
  }

  #main {
    grid-area: main;
  }

  #footer {
    grid-area: footer;
    padding-left: 12%;
    padding-right: 12%;
  }
}

@media (max-width: 768px) {
  #app {
    grid-template-columns: 16px auto 16px;

    #header,
    #footer {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
}
</style>
