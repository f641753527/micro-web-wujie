<template>
  <div class="layout">
    <Aside />
    <router-view class="layout--right" />
  </div>
</template>

<script setup>
import Aside from "./Aside.vue";
</script>

<style lang="less">
.layout {
  height: 100%;
  display: flex;
  &--right {
    flex: 1 1 auto;
  }
}
</style>
