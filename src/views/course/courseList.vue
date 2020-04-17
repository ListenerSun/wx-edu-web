<template>
  <el-col :span="20">
    <el-col >
      <!--工具条-->
      <el-form v-model="courseSearchForm" :inline="true" style="width: 100%; margin-top: 30px;margin-left:-240px">
        <el-form-item label="课程名称" prop="courseName">
          <el-input placeholder="课程名称" prefix-icon="el-icon-search" style="width:150px;"></el-input>
        </el-form-item>
        <el-form-item label="课程类型" prop="courseType">
          <el-select  v-model="courseSearchForm.grade" filterable placeholder="请选择课程类型" style="width:150px">
            <el-option v-for="option in courseTypeOptions" :key="option.code" :label="option.name" :value="option.code">
            </el-option>
          </el-select>
        </el-form-item>
        <el-button type="primary" size="medium" @click="" icon="el-icon-search">检索</el-button>
        <el-button type="primary" size="medium" @click="dialogFormVisible=true" icon="el-icon-plus" :round="true" style="margin-left:100px">新增课程</el-button>
        <el-button type="primary" size="medium" @click="" icon="el-icon-top" style="" :round="true">上架</el-button>
        <el-button type="info" size="medium" @click="" icon="el-icon-bottom" :round="true">下架</el-button>
      </el-form>
    </el-col>
    <!-- 表格 -->
    <el-table :data="courseDataList" border class="courseDataTable" @selection-change="handleSelectionChange">
      <el-table-column prop="id" type="selection" width="55px" lable="全选" align="center"></el-table-column>
      <el-table-column prop="courseName" label="课程名字" width="180px" align="center"></el-table-column>
      <el-table-column prop="courseType" label="课程分类" width="180px" align="center"></el-table-column>
      <el-table-column prop="coursePrice" label="课程原价" width="120px" :formatter="coursePriceFormatter"
                       align="center"></el-table-column>
      <el-table-column prop="discountPrice" label="活动价" width="120px" :formatter="coursePriceFormatter"
                       align="center"></el-table-column>
      <el-table-column prop="courseTeacherName" label="讲师姓名" width="140px" align="center"></el-table-column>
      <el-table-column prop="isFree" label="是否免费" :formatter="isFreeFormatter" align="center"
                       width="100px"></el-table-column>
      <el-table-column prop="isVideo" label="是否视频" align="center" width="120px"
                       :formatter="isVideoFormatter"></el-table-column>
      <el-table-column prop="courseState" label="上架状态" align="center" :formatter="courseStateFormatter" width="120px"></el-table-column>
      <el-table-column label="操作" align="center" width="240px">
        <template slot-scope="scope">
          <el-button size="small" plain style="font-size: 13px;background-color: #8cc5ff;"><router-link to="/manage/courseInfo" >课程详情</router-link></el-button>
          <el-button size="small" type="primary" icon="el-icon-edit"></el-button>
          <el-button size="small" type="danger" icon="el-icon-delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页插件 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageParam.currentPage"
      :page-sizes="pageParam.pageSizes"
      :page-size="pageParam.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageParam.total">
    </el-pagination>
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
        <el-form-item label="课程类型" label-width="70px">
          <el-select v-model="courseFormData.courseType" filterable placeholder="请选择"
                     style="width:150px;margin-left: 30px">
            <el-option v-for="option in courseTypeOptions" :key="option.code" :label="option.name" :value="option.code">

            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="课程Logo" label-width="80px" style="padding-right: 40px">
          <el-upload
            :on-success="uploadSuccess"
            :action="uploadUrl"
            list-type="picture"
            style="width:150px;margin-left: 30px">
            <el-button size="small" type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
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
        <el-button  size="medium "type="info" @click="dialogFormVisible = false">取 消</el-button>
        <el-button size="medium " type="primary" @click="submit(courseFormData)" style="margin-left:50px">新增</el-button>
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
        pageParam: {
          currentPage: 1,
          pageSizes: [10, 30, 50, 100],
          pageSize: 10,
          total: 1000
        },
        courseStateArray: [ '未上架','上架中','已下架'],
        courseTypeOptions: [],
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
      // 分页设置
      handleSizeChange(pageSize) {
        this.queryCourseList(1,pageSize)
      },
      handleCurrentChange(page) {
        this.queryCourseList(page,this.pageParam.pageSize)
      },
      //选中方法
      handleSelectionChange (val) {
        this.selectRows = val
      },
      // courseStateFormatter
      courseStateFormatter(row, column, cellValue, index) {
        return this.courseStateArray[cellValue]
      },
      //coursePriceFormatter
      coursePriceFormatter (row, column, cellValue, index) {
        return cellValue + '元'
      },
      //isFreeFormatter
      isFreeFormatter (row, column, cellValue, index) {
        return cellValue === true ? '是' : '否'
      },
      //isVideoFormatter
      isVideoFormatter (row, column, cellValue, index) {
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
      queryCourseList (page,size) {
        let url = this.HOME + '/course/edu/course/list?page='+page+'&size='+size
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
      this.queryCourseList(this.pageParam.currentPage,this.pageParam.pageSize)
      this.courseTypeOptions = JSON.parse(localStorage.getItem(this.dicListKey)).course_type
    }
  }
</script>

<style scoped>
  .courseDataTable {
    width: 100%;
    margin: 0 0 0 60px;
  }
  a {
    text-decoration: none;
  }
</style>
