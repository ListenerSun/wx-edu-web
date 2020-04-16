<template>
  <el-col :span="20">
    <div>
      <!--工具条-->
      <el-form v-model="courseSearchForm" :inline="true" style="width: 40%; margin-top: 30px;padding-left: 0">
        <el-form-item label="课程名称" prop="courseName">
          <el-input placeholder="课程名称" prefix-icon="el-icon-search" style="width:200px;"></el-input>
        </el-form-item>
        <el-button type="primary" size="medium" @click="">检索</el-button>
        <el-button type="primary" size="medium" @click="dialogFormVisible=true">新增课程</el-button>
      </el-form>
    </div>
    <!-- 表格 -->
    <el-table :data="courseDataList" border class="courseDataTable" >
      <el-table-column prop="courseName" label="课程名字" width="180px" align="center"></el-table-column>
      <el-table-column prop="courseType" label="课程分类" width="180px" align="center"></el-table-column>
      <el-table-column prop="coursePrice" label="课程原价" width="120px" :formatter="coursePriceFormatter" align="center"></el-table-column>
      <el-table-column prop="discountPrice" label="活动价" width="120px" :formatter="coursePriceFormatter" align="center"></el-table-column>
      <el-table-column prop="courseTeacherName" label="讲师姓名" width="140px" align="center"></el-table-column>
      <el-table-column prop="isFree" label="是否免费" :formatter="isFreeFormatter" align="center" width="100px"></el-table-column>
      <el-table-column prop="isVideo" label="是否视频" align="center" width="120px" :formatter="isVideoFormatter" ></el-table-column>
      <el-table-column prop="courseState" label="上架状态" align="center" width="120px"  ></el-table-column>
      <el-table-column label="操作" align="center" width="200px">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="">上架</el-button>
          <el-button type="danger" size="small" @click="">下架</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--新增课程弹窗-->
    <el-dialog title="新增课程信息" :visible.sync="dialogFormVisible" :modal="false" @close="" center
               width="20%">
      <el-form ref="courseFormData" :model="courseFormData" style="padding-left: 50px">
        <el-form-item label="课程名称" label-width="70px">
          <el-input v-model="courseFormData.courseName" autocomplete="off"
                    style="width:150px;margin-left: 30px"></el-input>
        </el-form-item>
        <el-form-item label="课程价格" label-width="70px">
          <el-input v-model="courseFormData.coursePrice" autocomplete="off"
                    style="width:150px;margin-left: 30px"></el-input>
        </el-form-item>
        <el-form-item label="课程Logo" label-width="80px" style="padding-right: 40px">
          <el-upload
            :on-success="uploadSuccess"
            :action="uploadUrl"
            list-type="picture"
            style="width:150px;margin-left: 30px">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="收费状态" label-width="70px">
          <el-radio-group v-model="courseFormData.isFree" style="width:150px; margin-left:30px">
            <el-radio label=true>收费</el-radio>
            <el-radio label=false>免费</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit(courseFormData)">新增</el-button>
      </div>
    </el-dialog>
  </el-col>
</template>

<script>
  export default {
    name: 'courseList',
    inject: ['reload'],
    data () {
      return {
        uploadUrl: this.HOME + '/course/common/oss/upload',
        courseSearchForm: {
          courseName: ''
        },
        courseDataList: [],
        courseFormData: {
          courseLogo: 'wx-edu.oss-accelerate.aliyuncs.com/picture/325040cfcb3c4e07aba70fc7620ff70d.png'
        },
        dialogFormVisible: false
      }
    },
    methods: {
      //coursePriceFormatter
      coursePriceFormatter(row, column, cellValue, index) {
        return cellValue + '元'
      },
      //isFreeFormatter
      isFreeFormatter (row, column, cellValue, index) {
        return cellValue === true ? '是' : '否'
      },
      //isVideoFormatter
      isVideoFormatter  (row, column, cellValue, index) {
        return cellValue === true ? '是' : '否'
      },
      //新增课程
      submit (courseFormData) {
        let url = this.HOME + '/course/edu/course/create'
        this.HTTP.post(url, courseFormData).then(res => {
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
            })
          }
        }).catch(() => {
          this.$message.error('系统故障')
        })
      },
      //上传成功回调函数
      uploadSuccess (response) {
        if (response.success) {
          this.courseFormData.courseLogo = response.data.allPath
        }
      },
      //查询所有课程列表
      queryCourseList () {
        let url = this.HOME + '/course/edu/course/list'
        this.HTTP.get(url, null).then(res => {
          if (res.success) {
            this.courseDataList = res.data
          } else {
            this.$message({
              showClose: true,
              message: res.message,
              type: 'error'
            })
          }
        })
      }
    },
    // 钩子
    mounted () {
      this.queryCourseList()
    }
  }
</script>

<style scoped>
  .courseDataTable {
    width: 1162px;
    margin: 0 0 0 60px;
  }
</style>
