<template>
  <el-col span="20">
    <!-- 表格 -->
    <el-table :data="courseDataList" border style="width: 100%" height="600">
      <el-table-column prop="className" label="班级名称" width="180" align="center"></el-table-column>
      <el-table-column prop="subjects" label="科目" width="180" align="center"></el-table-column>
      <el-table-column prop="grade" label="年级" width="180" align="center"></el-table-column>
      <el-table-column prop="days" label="补课天数" align="center"></el-table-column>
      <el-table-column prop="planAmount" label="计划招生数" align="center"></el-table-column>
      <el-table-column prop="hasAmount" label="已报名人数" align="center"></el-table-column>
      <el-table-column prop="enrollState" label="招生状态" align="center"></el-table-column>
      <el-table-column prop="year" label="年份" align="center"></el-table-column>
      <el-table-column label="操作" align="center" width="200px">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="enrollClass(scope.$index, scope)">发布招生</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-col>
</template>

<script>
  export default {
    name: 'courseList',
    data() {
      return {
        courseDataList: []
      }
    }
  }
</script>

<style scoped>

</style>
