<template>
  <el-col :span="20">
    <el-table :data="courseInfoData" border class="courseDataTable" @selection-change="handleSelectionChange">
      <el-table-column prop="courseName" label="课程名字" width="180px" align="center"></el-table-column>
      <el-table-column prop="courseType" label="课程分类" width="180px" align="center"></el-table-column>
      <el-table-column prop="coursePrice" label="课程原价" width="120px" align="center"></el-table-column>
      <el-table-column prop="discountPrice" label="活动价" width="120px" align="center"></el-table-column>
      <el-table-column prop="courseTeacherName" label="讲师姓名" width="140px" align="center"></el-table-column>
    </el-table>
  </el-col>

</template>

<script>
  export default {
    name: 'courseInfo',
    data () {
      return {
        courseInfoData: []
      }
    }
  }
</script>

<style scoped>

</style>
