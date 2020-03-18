<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-col :span="4">
          <el-input placeholder="请输入年份"></el-input>
        </el-col>
        <el-button type="primary" size="medium" @click="dialogFormVisible = true">添加</el-button>

      </div>
      <!-- 表格 -->
      <el-table :data="classDataList" height="250" border style="width: 100%">
        <el-table-column prop="className" label="班级名称" width="180" align="center"></el-table-column>
        <el-table-column prop="subjects" label="科目" width="180" align="center"></el-table-column>
        <el-table-column prop="grade" label="年级" width="180" align="center"></el-table-column>
        <el-table-column prop="days" label="补课天数" align="center"></el-table-column>
        <el-table-column prop="planAmount" label="计划招生数" align="center"></el-table-column>
        <el-table-column prop="hasAmount" label="剩余名额" align="center"></el-table-column>
        <el-table-column prop="year" label="年份" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <el-button type="primary" size="small">编辑</el-button>
          <el-button type="danger" size="small">删除</el-button>
        </el-table-column>
      </el-table>

    </el-card>

    <!--弹窗-->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible" :modal="false">
      <el-form ref="formData" :model="form">
        <el-form-item label="班级名称" :label-width="formLabelWidth">
          <el-input v-model="form.className" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年级" :label-width="formLabelWidth">
          <el-select v-model="form.grade" placeholder="请选择年级">
            <el-option v-for="item in gradeOptions" :key="item.code" :label="item.name"
                       :value="item.code"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="补课科目" :label-width="formLabelWidth">
          <el-select v-model="form.subjectList" multiple placeholder="请选择">
            <el-option v-for="item in subjectOptions" :key="item.code" :label="item.name" :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="补课天数" :label-width="formLabelWidth">
          <el-input v-model="form.days" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="计划招生人数" :label-width="formLabelWidth">
          <el-input v-model="form.planAmount" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年份" :label-width="formLabelWidth">
          <el-input v-model="form.year" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        classDataList: [],
        dialogFormVisible: false,
        form: {
          className: '',
          grade: '',
          subjectList: [],
          planAmount: '',
          year: ''
        },
        formLabelWidth: '120px',
        gradeOptions: [
          {
            name: '一年级',
            code: '1'
          },
          {
            name: '二年级',
            code: '2'
          },
          {
            name: '三年级',
            code: '3'
          },
          {
            name: '四年级',
            code: '4'
          },
          {
            name: '五年级',
            code: '5'
          },
          {
            name: '六年级',
            code: '6'
          },
          {
            name: '七年级',
            code: '7'
          },
          {
            name: '八年级',
            code: '8'
          },
          {
            name: '九年级',
            code: '9'
          }
        ],
        subjectOptions: [
          {
            name: '语文',
            code: '1'
          },
          {
            name: '数学',
            code: '2'
          },
          {
            name: '英语',
            code: '3'
          },
          {
            name: '物理',
            code: '4'
          },
          {
            name: '化学',
            code: '5'
          }
        ]
      }
    },
    methods: {

      goBack () {
        console.log('go back')
      },
      submit () {
        console.log(this.$refs.formData)
      }
    },
    mounted () {
      var url = 'http://localhost:9400/student/class_info/list'
      let param = {year: null, grade: ''}
      this.HTTP.post(url, param).then((res) => {
        if (res.success == true) {
          this.classDataList = res.data
        } else {
          this.$message.warning(res.data.message)
          // setCookie('phone', this.AdminDatas.phone, 1000 * 60)
        }
      }).catch((err) => {
        console.log(err)
        this.$message.error('系统故障')
      })
    }
  }
</script>

<style scoped>
  .addButton {
    margin-top: 20px;
    margin-bottom: 10px;
    margin-right: 50px;
    margin-left: 70px;
  }
</style>
