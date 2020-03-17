<template>
  <div class="manage_page fillcontain login-container">
    <el-row style="height: 100%;">
      <el-col :span="4"  style="min-height: 100%; background-color: #324057;">
        <el-menu :default-active="defaultActive" style="min-height: 100%;  background-color: #324057;" theme="dark" router>
          <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-document"></i>学生管理</template>
            <el-menu-item index="userList">用户列表</el-menu-item>
            <el-menu-item index="orderList">订单列表</el-menu-item>
            <el-menu-item index="adminList">管理员列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-plus"></i>添加数据</template>
            <el-menu-item index="addGoods">添加商品</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-warning"></i>说明</template>
            <el-menu-item index="explain">说明</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto; background: white">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "manage"
    }
</script>

<style lang="less" scoped>
  @import '../../style/mixin';
  .manage_page{

  }
  .login-container {
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
