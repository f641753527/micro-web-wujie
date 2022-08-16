<template>
  <ul class="menu">
    <li class="menu-item" v-for="menu of constRoutes" :key="menu.path">
      <router-link :to="menu.path">
        <a href="">{{ menu.meta.title }}</a>
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { constRoutes } from "../router";
</script>

<style lang="less">
.menu {
  flex: 0 0 240px;
  background-color: #000;
  &-item {
    padding-left: 12px;
    height: 48px;
    line-height: 48px;
    a {
      display: block;
      height: 100%;
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>
