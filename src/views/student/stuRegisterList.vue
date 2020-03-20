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
            <el-form-item label="手机号" prop="year">
              <el-input placeholder="根据手机号查询" prefix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="grade">
                <el-input placeholder="根据姓名查询" prefix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-button type="primary" size="small" @click="dialogFormVisible=true">检索</el-button>
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

    <!--报名弹窗-->
    <el-dialog title="请填写报名信息" :visible.sync="dialogFormVisible" :modal="false" center
               width="30%">
      <el-form ref="stuRegisterForm" :model="stuRegisterForm" :rules="rules" label-width="70px">
        <el-form-item label="手机号">
          <el-input v-model="stuRegisterForm.phone" placeholder="请输入手机号" maxlength="11" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="学生姓名">
          <el-input v-model="stuRegisterForm.studentName" placeholder="请输入姓名" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="学生性别">
          <el-select v-model="stuRegisterForm.sex" placeholder="请选择" style="width: 100px">
            <el-option
              v-for="item in sexOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="在读学校">
          <el-input v-model="stuRegisterForm.school" placeholder="请输在读学校" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="家庭地址">
          <el-input v-model="stuRegisterForm.address" placeholder="请输家庭地址" style="width: 200px"></el-input>
        </el-form-item>
        <el-button type="primary" @click="onSubmit(stuRegisterForm)"
                   style="display:block;margin:30px 50px 15px 90px; width: 100px">报名
        </el-button>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>

  export default {
    name: 'stuRegisterList',
    components: {
    },
    data () {
      return {
        stuRegisterListData: [],
        dialogFormVisible: false,
        sexOptions: [{
          value: 'F',
          label: '女'
        }, {
          value: 'M',
          label: '男'
        }, {
          value: 'O',
          label: '其他'
        }],
        stuRegisterForm: {
          studentName: '',
          sex: '',
          phone: '',
          school: '',
          address: '',
          classInfoId: 4
        },
        searchFormData:{
          phone: '',
          studentName: '',
          className: '',
          year: ''
        },
        rules: {
          studentName: [
            {required: true, message: '姓名不能为空', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '手机号不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    mounted () {
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
    },
    methods: {
      // 报名
      onSubmit (formData) {
        this.$refs.stuRegisterForm.validate(valid => {
          if (valid) {
            this.HTTP.post(this.HOME + '/class_order/add', formData).then(res => {
              if (res.success == true) {
                this.$message.success('报名成功')
                this.$emit('submit')
                this.dialogFormVisible = false
                this.reload()
              } else {
                this.$message({
                  showClose: true,
                  message: res.message,
                  type: 'warning'
                })
              }
            })
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
