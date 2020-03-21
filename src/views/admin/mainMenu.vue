<template>
  <el-col :span="4">
    <el-row>
      <el-menu
        default-active
        text-color="black"
        active-text-color="#ffd04b" router>
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
    </el-row>

  </el-col>
</template>

<script>
  export default {
    name: 'mainMenu'
  }
</script>

<style scope>
</style>
