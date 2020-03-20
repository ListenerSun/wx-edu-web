<template>
  <div class="divClass">
    <el-col :span="15">
      <div>
        <el-row :span="15">
          <el-carousel :interval="4000" type="card" height="300px">
            <el-carousel-item v-for="item in 6" :key="item">
              <img src="./yangbo.png">
            </el-carousel-item>
          </el-carousel>
        </el-row>
      </div>
      <div>
        <el-row :span="20" class="el-table_headtoolbar" style="padding-bottom: 0px;">
          <el-form v-model="searchFormData" :inline="true" class="searchForm" label-width="70px">
            <el-form-item label="手机号" prop="phone">
              <el-input v-model="searchFormData.phone" placeholder="根据手机号查询"></el-input>
            </el-form-item>
            <el-form-item label="年份" prop="year">
              <el-input v-model="searchFormData.year" placeholder="请输入报名年份" ></el-input>
            </el-form-item>
            <el-button type="primary" size="medium" @click="queryStuRegisterInfo(searchFormData)">查询报名信息</el-button>
          </el-form>
        </el-row>
        <div v-show="isShow">
          <el-table :data="stuRegisterListData" border style="width: 100%">
            <el-table-column prop="studentName" label="学生姓名" width="180" align="center"></el-table-column>
            <el-table-column prop="phone" label="联系方式" width="180" align="center"></el-table-column>
            <el-table-column prop="className" label="班级名称" align="center"></el-table-column>
            <el-table-column prop="grade" label="年级" align="center"></el-table-column>
            <el-table-column prop="subjects" label="补课科目" width="180" align="center"></el-table-column>
            <el-table-column prop="address" label="家庭地址" align="center"></el-table-column>
            <el-table-column prop="year" label="年份" align="center"></el-table-column>
          </el-table>
        </div>
      </div>
      <div>
        <el-row :span="15">
          <el-card class="box-card">
            <!-- 表格 -->
            <el-table :data="classDataList" border style="width: 100%">
              <el-table-column prop="className" label="班级名称" width="150" align="center"></el-table-column>
              <el-table-column prop="subjects" label="补课科目" width="150" align="center"></el-table-column>
              <el-table-column prop="grade" label="年级" width="150" align="center"></el-table-column>
              <el-table-column prop="days" label="补课天数" align="center" width="150"></el-table-column>
              <el-table-column prop="planAmount" label="计划招生数" align="center" width="150"></el-table-column>
              <el-table-column prop="hasAmount" label="已报名人数" align="center" width="150"></el-table-column>
              <el-table-column prop="year" label="年份" align="center"></el-table-column>
              <el-table-column label="操作" align="center" width="150px">
                <template slot-scope="scope">
                  <el-button v-if="scope.row.planAmount > scope.row.hasAmount " type="primary" size="medium"
                             @click="openDialog(scope.$index,scope)">报名
                  </el-button>
                  <el-button v-else type="info" disabled>已报满</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-row>
      </div>
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
    inject: ['reload'],
    name: 'index',
    data() {
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
          studentName: [
            {required: true, message: '姓名不能为空', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '手机号不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    mounted() {
      var url = this.HOME + '/class_info/enroll/list'
      this.HTTP.post(url, null).then((res) => {
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
      //打开弹窗
      openDialog(index) {
        this.dialogFormVisible = true;
        this.classInfoId = this.classDataList[index].id
      },
      // 报名
      onSubmit(formData) {
        this.$refs.stuRegisterForm.validate(valid => {
          if (valid) {
            this.stuRegisterForm.classInfoId = this.classInfoId
            console.log(this.stuRegisterForm.classInfoId)
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
      },
      // 查询报名信息接口
      queryStuRegisterInfo(searchFormData) {
        let url = this.HOME + '/class_order/query'
        this.HTTP.get(url, searchFormData).then(res => {
          this.isShow = true
          this.stuRegisterListData = res.data
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

  .divClass {
    height: 700px;
    width: 2000px;
    margin: 150px;
    position: absolute;
    top: 0;
    bottom: 0;
  }
</style>
