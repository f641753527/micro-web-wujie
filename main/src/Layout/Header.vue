<template>
  <ul class="layout-header">
    <li v-for="app of apps" :key="app.path">
      <router-link :to="app.path">{{ app.name }}</router-link>
    </li>
  </ul>
</template>

<script setup>
import { apps } from "../apps";
</script>

<style lang="less">
.layout-header {
  padding: 0 12px;
  flex: 0 0 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  a {
    margin-right: 16px;
    color: #fff;
  }
}
</style>
