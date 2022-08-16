<template>
  <div class="layout">
    <Header />
    <div id="micro_web_container"></div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
  display: flex;
  flex-direction: column;
}
#micro_web_container {
  flex: 1 1 auto;
}
</style>
