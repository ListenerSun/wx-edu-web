<template>
  <el-col :span="17" :push="5">
    <mt-button type="primary" @click="toLogin">登入后台</mt-button>
    <el-col :span="17">
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="item in 6" :key="item">
          <el-card>
            <img src="./yangbo.png">
          </el-card>
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <!-- 查询学生报名信息-->
    <el-col :span="17">
      <el-form ref="searchFormData" :model="searchFormData" :rules="rules" :inline="true" label-width="70px">
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="searchFormData.phone" placeholder="根据手机号查询"></el-input>
        </el-form-item>
        <el-form-item label="年份" prop="year">
          <el-input v-model="searchFormData.year" placeholder="请输入报名年份"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="medium" @click="queryStuRegisterInfo(searchFormData)">查询报名信息</el-button>
        </el-form-item>
      </el-form>
      <el-table v-show="isShow" :data="stuRegisterListData" border style="width: 100%">
        <el-table-column prop="studentName" label="学生姓名" width="100" align="center"></el-table-column>
        <el-table-column prop="phone" label="联系方式" width="120" align="center"></el-table-column>
        <el-table-column prop="className" label="班级名称" align="center"></el-table-column>
        <el-table-column prop="grade" label="年级" align="center"></el-table-column>
        <el-table-column prop="subjects" label="补课科目" width="130" align="center"></el-table-column>
        <el-table-column prop="address" label="家庭地址" width="150" align="center"></el-table-column>
        <el-table-column prop="year" label="年份" align="center"></el-table-column>
      </el-table>
    </el-col>
    <el-col :span="21">
      <!-- 表格 -->
      <el-table :data="classDataList" border style="width: 100%">
        <el-table-column prop="className" label="班级名称" width="130" align="center"></el-table-column>
        <el-table-column prop="subjects" label="补课科目" width="130" align="center"></el-table-column>
        <el-table-column prop="grade" label="年级" width="100" align="center"></el-table-column>
        <el-table-column prop="days" label="补课天数" align="center" width="100"></el-table-column>
        <el-table-column prop="planAmount" label="计划招生数" align="center" width="100"></el-table-column>
        <el-table-column prop="hasAmount" label="已报名人数" align="center" width="120"></el-table-column>
        <el-table-column prop="year" label="年份" width="110" align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="150px">
          <template slot-scope="scope">
            <el-button v-if="scope.row.planAmount > scope.row.hasAmount " type="primary" size="medium"
                       @click="openDialog(scope.$index,scope)">报名
            </el-button>
            <el-button v-else type="info" disabled>已报满</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>

    <!--报名弹窗-->
    <el-dialog title="请填写报名信息" :visible.sync="dialogFormVisible" :modal="false" center
               width="30%">
      <el-form ref="stuRegisterForm" :model="stuRegisterForm" :rules="rules" label-width="90px"
               style="margin: 0 0 0 40px;">
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="stuRegisterForm.phone" placeholder="请输入手机号" maxlength="11" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="学生姓名" prop="studentName">
          <el-input v-model="stuRegisterForm.studentName" placeholder="请输入姓名" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="学生性别" prop="sex">
          <el-select v-model="stuRegisterForm.sex" placeholder="请选择" style="width: 100px">
            <el-option
              v-for="item in sexOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="在读学校" prop="school">
          <el-input v-model="stuRegisterForm.school" placeholder="请输在读学校" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="家庭地址" prop="address">
          <el-input v-model="stuRegisterForm.address" placeholder="请输家庭地址" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(stuRegisterForm)"
                     style="display:block; width: 100px">报名
          </el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-col>


</template>

<script>
  export default {
    inject: ['reload'],
    name: 'index',
    data () {
      return {
        stuRegisterListData: [],
        isShow: false,
        classInfoId: '',
        imgUrl: './test.png',
        classDataList: [],
        dialogFormVisible: false,
        searchFormData: {phone: '', year: ''},
        formData: {
          className: '',
          grade: '',
          subjectList: [],
          planAmount: '',
          year: '',
          vacationType: ''
        },
        stuRegisterForm: {
          studentName: '',
          sex: '',
          phone: '',
          school: '',
          address: '',
          classInfoId: ''
        },
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
        rules: {
          studentName: [{required: true, message: '姓名不能为空', trigger: 'blur'}],
          phone: [{required: true, message: '手机号不能为空', trigger: 'blur'}],
          year: [{required: true, message: '请选择年份', trigger: 'blur'}]
        }
      }
    },
    mounted () {
      var url = this.HOME + '/student/class_info/enroll/list'
      this.HTTP.get(url, null).then((res) => {
        if (res.success == true) {
          let enrollStateArray = ['招生中', '已招满']
          res.data.forEach(item => {
            item.enrollState = enrollStateArray[item.enrollState]
          })
          this.classDataList = res.data
        } else {
          this.$message({
            showClose: true,
            message: res.message,
            type: 'warning'
          })
        }
      }).catch((err) => {
        console.log(err)
        this.$message.error('系统故障')
      })
    },

    methods: {
      //跳转登入
      toLogin () {
        this.$router.push('/Admin')
      },
      //打开弹窗
      openDialog (index) {
        this.dialogFormVisible = true
        this.classInfoId = this.classDataList[index].id
      },
      // 报名
      onSubmit (formData) {
        console.log(formData)
        this.$refs.stuRegisterForm.validate(valid => {
          alert(valid)
          if (valid) {
            this.stuRegisterForm.classInfoId = this.classInfoId
            this.HTTP.post(this.HOME + '/student/class_order/add', formData).then(res => {
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
      },
      // 查询报名信息接口
      queryStuRegisterInfo (searchFormData) {
        let url = this.HOME + '/student/class_order/query'
        this.$refs.searchFormData.validate((valid) => {
          if (valid) {
            alert(1)
            this.HTTP.get(url, searchFormData).then(res => {
              this.isShow = true
              this.stuRegisterListData = res.data
            })
          }
        })
      }
    }

  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

</style>
