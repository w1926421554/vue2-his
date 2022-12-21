<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      unique-opened
      @open="handleOpen"
      @close="handleClose"
    >

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>医院综合</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
