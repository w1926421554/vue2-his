<template>
  <div class="app">
    <!-- 头部logo -->
    <div class="top">1</div>
    <div class="center">
      <!-- 左侧导航栏 -->
      <div class="left-menu">
        <LeftMenu></LeftMenu>
      </div>
      <!-- 主体内容 -->
      <div class="main">
        3
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from "./LeftMenu.vue";

export default {
  components: { LeftMenu },
};
</script>

<style lang="scss" scoped>
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.top {
  height: 50px;
  background-color: pink;
}

.center {
  flex: 1;
  display: flex;

  .left-menu {
    width: 200px;
    background-color: aqua;
  }

  .main {
    flex: 1;
    background-color: coral;
  }
}
</style>
