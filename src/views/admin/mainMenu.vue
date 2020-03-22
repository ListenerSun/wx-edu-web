<template>
  <el-col :span="4">
    <div style="height:720px;background:#304156">
      <el-menu class="menuClass" default-active text-color="white" background-color="#304156" router>
        <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-user-solid"></i>学生管理</template>
          <el-menu-item index="/manage/stuRegisterList">招生概况</el-menu-item>
          <el-menu-item index="/manage/classInfoList">课程管理</el-menu-item>
          <el-menu-item index="/index">报名</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-plus"></i>讲师管理</template>
          <el-menu-item index="addGoods">讲师审核</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-warning"></i>说明</template>
          <el-menu-item index="explain">说明</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </el-col>
</template>

<script>
  export default {
    name: 'mainMenu'
  }
</script>

<style scope>
  .menuClass {
    padding-right: 80px;
    padding-top: 60px;
  }
</style>
