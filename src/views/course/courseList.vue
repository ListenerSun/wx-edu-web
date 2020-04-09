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
    <el-table :data="courseDataList" border style="width: 120%; margin-left: 30px;" height="600">
      <el-table-column prop="courseName" label="课程名字" width="180" align="center"></el-table-column>
      <el-table-column prop="courseName" label="课程分类" width="180" align="center"></el-table-column>
      <el-table-column prop="coursePrice" label="课程价格" width="180" align="center"></el-table-column>
      <el-table-column prop="discountPrice" label="打折价格" width="180" align="center"></el-table-column>
      <el-table-column prop="courseLogo" label="课程Logo" width="180" align="center"></el-table-column>
      <el-table-column prop="isFree" label="是否免费" align="center"></el-table-column>
      <el-table-column prop="isVideo" label="视频课程" align="center"></el-table-column>
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
          <el-input v-model="courseFormData.courseLogo" :disabled="true"></el-input>
          <el-upload
            :on-success="uploadSuccess"
            :action="uploadUrl"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>

        <el-form-item label="是否免费" label-width="70px">
          <el-input v-model="courseFormData.isFree" autocomplete="off" style="width:150px;margin-left: 30px"></el-input>
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
        uploadUrl: 'http://localhost:9300/course/common/oss/upload',
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
      //新增课程
      submit(courseFormData){
        let url = this.HOME + '/course/edu/course/create'
        this.HTTP.post(url,this.courseFormData).then(res => {
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
      uploadSuccess(response){
        if (response.success){
          this.courseFormData.courseLogo = response.data.allPath
        }
      }
    }
  }
</script>

<style scoped>

</style>
