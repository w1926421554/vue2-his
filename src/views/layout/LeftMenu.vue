<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      unique-opened
      router
    >

    <!-- 
            <el-submenu index="/goods">
        <template slot="title">
          <i class="iconfont icon-goods"></i>
          <span slot="title">商品列表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/goods/list">商品列表</el-menu-item>
          <el-menu-item index="/goods/add">商品添加</el-menu-item>
          <el-menu-item index="/goods/cate">商品分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
     -->
      <el-submenu index="/division">
        <template slot="title">
          <span>医院综合</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/division/list">科室管理</el-menu-item>
          <el-menu-item index="/division/add">添加科室</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="/patient">
        <template slot="title">
          <span>患者大数据</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/patient/data">疾病大数据</el-menu-item>
          <el-menu-item index="/patient/total">药品耗材统计</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


      <el-submenu index="/individual">
        <template slot="title">
          <span>动态个人</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/individual/registration">挂号管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="/pharmacy">
        <template slot="title">
          <span>中西医药房</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/pharmacy/data">营收数据表</el-menu-item>
          <el-menu-item index="/pharmacy/prescription">处方综合管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="/drugs">
        <template slot="title">
          <span>医疗药品出入库</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/drugs/list">医疗用品综合管理</el-menu-item>
          <el-menu-item index="/drugs/add">添加药品耗材</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


      <el-submenu index="/doctor">
        <template slot="title">
          <span>分级医生</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/doctor/list">综合列表</el-menu-item>
          <el-menu-item index="/doctor/shift">排班管理</el-menu-item>
          <el-menu-item index="/doctor/info">修改个人信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      

      <el-submenu index="/nurse">
        <template slot="title">
          <span>分级护士</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/nurse/list">综合列表</el-menu-item>
          <el-menu-item index="/nurse/shift">排班管理</el-menu-item>
          <el-menu-item index="/nurse/info">修改个人信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


      <el-submenu index="/bed">
        <template slot="title">
          <span>病床管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/bed/list">综合管理</el-menu-item>
          <el-menu-item index="/bed/add">添加床位</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="/account">
        <template slot="title">
          <span>全账号管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/account/list">账号管理</el-menu-item>
          <el-menu-item index="/account/add">添加账号</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
