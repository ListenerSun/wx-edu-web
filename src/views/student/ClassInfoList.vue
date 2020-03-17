<template>
  <el-table
    :data="classDataList"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="subjects"
      label="科目"
      width="180">
    </el-table-column>
    <el-table-column
      prop="grade"
      label="年级"
      width="180">
    </el-table-column>
    <el-table-column
      prop="days"
      label="补课天数">
    </el-table-column>
    <el-table-column
      prop="planAmount"
      label="计划招生数">
    </el-table-column>
    <el-table-column
      prop="year"
      label="年份">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        classDataList: []
      }
    },
    mounted() {
      var url = 'http://localhost:9400/student/class_info/list'
      let param = {year: null, grade: ""}
      this.HTTP.post(url, param).then((res) => {
        console.log(res)
        if (res.success == true) {
          this.classDataList = res.data
        } else {
          this.$message.warning(res.data.message)
          // setCookie('phone', this.AdminDatas.phone, 1000 * 60)
        }
      }).catch(() => {
        this.$message.error('系统故障')
      })
    }
  }
</script>

<style scoped>

</style>
