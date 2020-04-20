<template>
  <el-col :span="3" style="height: 100%">
    <!--    <div style="height:720px;background:#304156">-->
    <el-row style="height: 100%">
      <el-menu class="menuClass" default-active text-color="white" background-color="#304156" :collapse-transition="true"
               router>
        <el-menu-item index="manage" style="padding-left: 10px">
          <i class="iconfont icon-shouye_tianchong" style="font-size: 20px;"></i>
          <span style="padding-left: 2px;">首&#12288;页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="iconfont icon-xueshengguanli" style="font-size:21px;font-weight: bold"></i>
           <span>学生管理</span>
          </template>
          <el-menu-item index="/manage/stuRegisterList">招生概况</el-menu-item>
          <el-menu-item index="/manage/classInfoList">课程管理</el-menu-item>
          <el-menu-item index="/index">报名</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="iconfont icon-jiaoyu2" style="font-size: 21px;font-weight: bold;padding-right: 3px"></i><span>讲师管理</span></template>
          <el-menu-item index="/manage/classInfoList">讲师列表</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="iconfont icon-kecheng" style="font-size: 16px;padding-right: 3px"></i><span>课程管理</span></template>
          <el-menu-item index="/manage/courseList">课程列表</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"><i class="iconfont icon-Customermanagement-fill" style="font-size: 23px;padding-right: 3px"></i><span>用户管理</span></template>
          <el-menu-item index="">用户管理</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title"><i class="iconfont icon-quanxian" style="font-size: 20px;padding-right:4px"></i><span>权限管理</span></template>
          <el-menu-item index="">权限管理</el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title"><i class="el-icon-s-tools"></i><span>系统配置</span></template>
          <el-menu-item index="">说明</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-row>
    <!--    </div>-->
  </el-col>
</template>

<script>
  export default {
    name: 'mainMenu',

  }
</script>

<style scope>
  .menuClass {
    padding-right: 80px;
    padding-top: 60px;
  }
</style>
