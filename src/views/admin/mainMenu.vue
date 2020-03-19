<template>
  <el-col :span="4">
    <el-menu
      text-color="black"
      active-text-color="#ffd04b" router>
      <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-user-solid"></i>学生管理</template>
        <el-menu-item index="/stuRegisterList">学生信息</el-menu-item>
        <el-menu-item index="/classInfoList">课程管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-plus"></i>老师管理</template>
        <el-menu-item index="addGoods">添加商品</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-warning"></i>说明</template>
        <el-menu-item index="explain">说明</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-col>
</template>

<script>
  export default {
    name: 'mainMenu'
  }
</script>

<style scope>
  .fillcontain {
    background: white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-size: 100px;
    min-height: 800px;
    min-width: 630px;
    z-index: 999;
  }
</style>
