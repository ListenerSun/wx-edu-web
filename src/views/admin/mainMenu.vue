<template>
  <el-col :span="3" style="height: 100%">
    <!--    <div style="height:720px;background:#304156">-->
    <el-row style="height: 100%">
      <!--<el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>-->
      <el-menu class="menuClass" default-active text-color="white" background-color="#304156" :collapse-transition="true"
               router>
        <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-user-solid"></i>学生管理</template>
          <el-menu-item index="/manage/stuRegisterList">招生概况</el-menu-item>
          <el-menu-item index="/manage/classInfoList">课程管理</el-menu-item>
          <el-menu-item index="/index">报名</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-user"></i>讲师管理</template>
          <el-menu-item index="/index">讲师审核</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-reading"></i>课程管理</template>
          <el-menu-item index="/manage/courseList">课程列表</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"><i class="el-icon-s-tools"></i>系统配置</template>
          <el-menu-item index="">说明</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-row>

    <!--    </div>-->
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
