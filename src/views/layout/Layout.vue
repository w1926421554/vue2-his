<template>
  <div class="app">
    <el-container class="centent">
      <el-header class="header">西洲医院一体化</el-header>
      <el-container class="main">
        <el-aside class="left-menu" width="200px">
          <!-- 左侧导航栏 -->
          <LeftMenu></LeftMenu>
        </el-aside>
        <el-main class="right-main">
          <!-- 面包屑 -->
          <div class="contentTop">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/home' }"
                >系统</el-breadcrumb-item
              >
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <!-- layout -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <!-- 头部logo -->
    <!-- <div class="top">西洲医院一体化</div> -->
    <!-- <div class="center"> -->
    <!-- 左侧导航栏 -->
    <!-- <div class="left-menu">
        <LeftMenu></LeftMenu>
      </div> -->
    <!-- 主体内容 -->
    <!-- <div class="main">
        面包屑
        <div class="contentTop">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }"
              >系统</el-breadcrumb-item
            >
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        layout
        <router-view></router-view>
      </div> -->
    <!-- </div> -->
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
  .header {
    background-color: pink;
  }
  .centent {
    height: 100%;
    .main {
      .el-aside{
        overflow-x: hidden;
        ::-webkit-scrollbar{
          display: none;
        }
      }
      .left-menu {
        // height: 100%;
        ::v-deep .el-menu {
          border-right: none;
        }
      }
      .right-main {
        height: 100%;
        background-color: #f5f7fa;
        .contentTop {
          ::v-deep .el-breadcrumb__inner.is-link {
            color: #8a8d94 !important;
            font-weight: 400;
          }
        }
      }
    }
  }
}

// .top {
//   height: 50px;
//   background-color: pink;
// }

// .center {
//   flex: 1;
//   display: flex;

//   .left-menu {
//     width: 200px;
//     background-color: aqua;
//   }

//   .main {
//     flex: 1;
//     padding: 20px;
//     background-color: #f5f7fa;

// .contentTop {
//   ::v-deep .el-breadcrumb__inner.is-link {
//     color: #8a8d94 !important;
//     font-weight: 400;
//   }
// }
//   }
// }
</style>
