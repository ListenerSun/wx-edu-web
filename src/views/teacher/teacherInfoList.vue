<template>
  <!-- 表格 -->
  <el-table :data="courseDataList" border class="courseDataTable" @selection-change="handleSelectionChange">
    <el-table-column prop="id" type="selection" width="55px" lable="全选" align="center"></el-table-column>
    <el-table-column prop="courseName" label="课程名字" width="180px" align="center"></el-table-column>
    <el-table-column prop="courseType" label="课程分类" width="180px" align="center"
                     :formatter="courseTypeFormatter"></el-table-column>
    <el-table-column prop="coursePrice" label="课程原价" width="120px" :formatter="coursePriceFormatter"
                     align="center"></el-table-column>
    <el-table-column prop="discountPrice" label="活动价" width="120px" :formatter="coursePriceFormatter"
                     align="center"></el-table-column>
    <el-table-column prop="courseTeacherName" label="讲师姓名" width="140px" align="center"></el-table-column>
    <el-table-column prop="isFree" label="是否免费" :formatter="isFreeFormatter" align="center"
                     width="100px"></el-table-column>
    <el-table-column prop="isVideo" label="是否视频" align="center" width="120px"
                     :formatter="isVideoFormatter"></el-table-column>
    <el-table-column prop="courseState" label="上架状态" align="center" :formatter="courseStateFormatter"
                     width="120px"></el-table-column>
    <el-table-column label="操作" align="center" width="240px">
      <template slot-scope="scope">
        <el-button size="small" plain style="font-size: 13px;background-color: #8cc5ff;">
          <router-link to="/manage/courseInfo">课程详情</router-link>
        </el-button>
        <el-button size="small" type="primary" icon="el-icon-edit"></el-button>
        <el-button size="small" type="danger" icon="el-icon-delete"
                   @click="handleDelete(scope.$index, scope)"></el-button>
      </template>
    </el-table-column>
  </el-table>

</template>

<script>
  export default {
    name: 'teacherInfoList'
  }
</script>

<style scoped>

</style>
