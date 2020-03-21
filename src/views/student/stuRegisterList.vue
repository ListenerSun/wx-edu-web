<template>
  <el-col :span="20">
    <el-form v-model="searchFormData" :inline="true" class="searchForm" label-width="70px">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="searchFormData.phone" placeholder="根据手机号查询" prefix-icon="el-icon-search"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="studentName">
        <el-input v-model="searchFormData.studentName" placeholder="根据姓名查询" prefix-icon="el-icon-search"></el-input>
      </el-form-item>
      <el-button type="primary" size="medium" @click="queryStuRegisterInfo(searchFormData)">检索</el-button>
      <el-button type="primary" size="medium" @click="dialogFormVisible=true">导出</el-button>
    </el-form>
    <!-- 表格 -->
    <el-table :data="stuRegisterListData" border class="stuRegisterTable">
      <el-table-column type="selection" width="55" lable="全选" align="center"></el-table-column>
      <el-table-column prop="studentName" label="学生姓名" width="120" align="center"></el-table-column>
      <el-table-column prop="phone" label="联系方式" width="150" align="center"></el-table-column>
      <el-table-column prop="className" label="班级名称" width="150" align="center"></el-table-column>
      <el-table-column prop="grade" label="年级" width="100" align="center"></el-table-column>
      <el-table-column prop="subjects" label="补课科目" width="150" align="center"></el-table-column>
      <el-table-column prop="address" label="家庭地址" width="180" align="center"></el-table-column>
      <el-table-column prop="year" label="年份" width="120" align="center"></el-table-column>
    </el-table>
  </el-col>

</template>

<script>

  export default {
    name: 'stuRegisterList',
    components: {},
    data() {
      return {
        stuRegisterListData: [],
        searchFormData: {
          phone: '',
          studentName: '',
          className: '',
          year: ''
        }
      }
    },
    methods: {
      // 查询报名信息接口
      queryStuRegisterInfo(searchFormData) {
        let url = this.HOME + '/student/class_order/list'
        this.HTTP.post(url, searchFormData).then(res => {
          this.stuRegisterListData = res.data
        })
      }
    },
    mounted() {
      let url = this.HOME + '/student/class_order/list'
      this.HTTP.post(url, this.searchFormData).then(res => {
        if (res.success == true) {
          this.stuRegisterListData = res.data
        } else {
          this.$message({
            showClose: true,
            message: res.message,
            type: 'warning'
          })
        }
      }).catch((err) => {
        console.log(err.message)
        this.$message.error('系统故障')
      })
    }
  }
</script>

<style scoped>
  .searchForm {
    padding-top: 10px;
  }

  /*学生信息表格*/
  .stuRegisterTable {
    width: 100%;
    margin: 0 0 0 90px;
  }
</style>
