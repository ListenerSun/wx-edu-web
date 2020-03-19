<template>
  <div>
    <el-col :span="20">
      <el-card class="box-card">
        <!--工具条-->
        <el-col :span="24" class="el-table_headtoolbar" style="padding-bottom: 0px;">
          <el-form v-model="searchForm" :inline="true" class="searchForm" label-width="50px">
            <el-form-item label="年份" prop="year">
              <el-input placeholder="年份" prefix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item label="年级" prop="grade">
              <el-select v-model="searchForm.grade" filterable placeholder="请选择" prop="sex">
                <el-input placeholder="年级" prefix-icon="el-icon-search"></el-input>
                <el-option v-for="item in gradeOptions" :key="item.code" :label="item.name"
                           :value="item.name"></el-option>
              </el-select>
            </el-form-item>
            <el-button type="primary" size="small" @click="dialogFormVisible=true">检索</el-button>
            <el-button type="primary" size="small" @click="dialogFormVisible=true">新增</el-button>
          </el-form>
        </el-col>

        <!-- 表格 -->
        <el-table :data="classDataList" border style="width: 100%">
          <el-table-column prop="className" label="班级名称" width="180" align="center"></el-table-column>
          <el-table-column prop="subjects" label="科目" width="180" align="center"></el-table-column>
          <el-table-column prop="grade" label="年级" width="180" align="center"></el-table-column>
          <el-table-column prop="days" label="补课天数" align="center"></el-table-column>
          <el-table-column prop="planAmount" label="计划招生数" align="center"></el-table-column>
          <el-table-column prop="hasAmount" label="已报名人数" align="center"></el-table-column>
          <el-table-column prop="year" label="年份" align="center"></el-table-column>
          <el-table-column label="操作" align="center" width="200px">
            <template slot-scope="scope">
              <el-button type="primary" size="small">编辑</el-button>
              <el-button type="danger" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <!--新增弹窗-->
    <el-dialog title="新增补课班级信息" :visible.sync="dialogFormVisible" :modal="false" @close="handleClose" center
               width="30%">
      <el-form ref="formData" :model="formData" style="padding-left: 100px">
        <el-form-item label="班级名称" label-width="70px">
          <el-input v-model="formData.className" autocomplete="off" style="width:150px;margin-left: 30px"></el-input>
        </el-form-item>
        <el-form-item label="年级" label-width="70px">
          <el-select v-model="formData.grade" placeholder="请选择年级" style="width:150px;margin-left: 30px">
            <el-option v-for="item in gradeOptions" :key="item.code" :label="item.name"
                       :value="item.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="补课科目" label-width="70px" style="padding-right: 40px">
          <el-select v-model="formData.subjectList" multiple value-key="code" placeholder="请选择"
                     style="width:150px;margin-left: 30px">
            <el-option v-for="item in subjectOptions" :key="item.code" :label="item.name" :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="补课天数" label-width="70px">
          <el-input v-model="formData.days" autocomplete="off" style="width:150px;margin-left: 30px"></el-input>
        </el-form-item>
        <el-form-item label="计划招生人数" label-width="100px">
          <el-input v-model="formData.planAmount" autocomplete="off" style="width:150px;"></el-input>
        </el-form-item>
        <el-form-item label="年份" label-width="70px">
          <el-input v-model="formData.year" autocomplete="off" style="width:150px;margin-left: 30px"></el-input>
        </el-form-item>
        <el-form-item label="假期类型" label-width="70px">
          <el-select v-model="formData.vacationType" placeholder="请选择假期类型" style="width:150px;margin-left: 30px">
            <el-option v-for="item in vacationTypeOptions" :key="item.code" :label="item.name"
                       :value="item.name"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit(formData)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    inject: ['reload'],
    data () {
      return {
        classDataList: [],
        dialogFormVisible: false,
        formData: {
          className: '',
          grade: '',
          subjectList: [],
          planAmount: '',
          year: '',
          vacationType: ''
        },
        searchForm: {
          grade: []
        },
        vacationTypeOptions: [
          {
            name: '暑假',
            code: '1'
          },
          {
            name: '寒假',
            code: '2'
          }
        ],
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
      // 关闭补课班级信息弹框操作
      handleClose () {
        this.$refs.formData.resetFields()
        this.$emit('handleClose')
        this.reload()
      },
      // 新增补课班级信息
      submit (formData) {
        let url = 'http://localhost:9400/student/class_info/add'
        this.HTTP.post(url, this.formData).then(res => {
          if (res.success == true) {
            this.$message.success('添加成功')
            this.$emit('submit')
            this.dialogFormVisible = false
            this.reload()
          } else {
            this.$message({
              showClose: true,
              message: res.message,
              type: 'warning'
            });
          }
        }).catch(() => {
          this.$message.error('系统故障')
        })
      }
    },
    mounted () {
      var url = 'http://localhost:9400/student/class_info/list'
      let param = {year: null, grade: ''}
      this.HTTP.post(url, param).then((res) => {
        if (res.success == true) {
          this.classDataList = res.data
        } else {
          this.$message({
            showClose: true,
            message: res.message,
            type: 'warning'
          });
        }
      }).catch((err) => {
        console.log(err)
        this.$message.error('系统故障')
      })
    }
  }
</script>

<style scoped>

</style>
