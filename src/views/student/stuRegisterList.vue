<template>
  <div>
    <el-col :span="20">
      <el-card class="box-card">
        <!--工具条-->
        <!--<el-col :span="24" class="el-table_headtoolbar" style="padding-bottom: 0px;">
          <el-button type="primary" size="small" @click="dialogFormVisible=true">报名</el-button>
        </el-col>-->
        <!--工具条-->
        <el-col :span="24" class="el-table_headtoolbar" style="padding-bottom: 0px;">
          <el-form v-model="searchFormData" :inline="true" class="searchForm" label-width="70px">
            <el-form-item label="手机号" prop="phone">
              <el-input v-model="searchFormData.phone" placeholder="根据手机号查询" prefix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="studentName">
              <el-input v-model="searchFormData.studentName" placeholder="根据姓名查询" prefix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-button type="primary" size="medium" @click="queryStuRegisterInfo(searchFormData)">检索</el-button>
          </el-form>
        </el-col>

        <!-- 表格 -->
        <el-table :data="stuRegisterListData" border style="width: 100%">
          <el-table-column prop="studentName" label="学生姓名" width="180" align="center"></el-table-column>
          <el-table-column prop="phone" label="联系方式" width="180" align="center"></el-table-column>
          <el-table-column prop="className" label="班级名称" align="center"></el-table-column>
          <el-table-column prop="grade" label="年级" align="center"></el-table-column>
          <el-table-column prop="subjects" label="补课科目" width="180" align="center"></el-table-column>
          <el-table-column prop="address" label="家庭地址" align="center"></el-table-column>
          <el-table-column prop="year" label="年份" align="center"></el-table-column>
        </el-table>
      </el-card>
    </el-col>


  </div>
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
        let url = this.HOME + '/class_order/list'
        this.HTTP.post(url, searchFormData).then(res => {
          this.stuRegisterListData = res.data
        })
      }
    },
    mounted() {
      let url = this.HOME + '/class_order/list'
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

</style>
