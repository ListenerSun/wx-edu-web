<template>
  <div>
    <img :src="imgUrl">
    <el-col :span="15">
      <el-row :span="15">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-row>
      <el-row :span="15">
        <el-card class="box-card">
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
                <el-button type="primary" size="small">报名</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-row>
    </el-col>
  </div>

</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        imgUrl: './test.png',
        classDataList: [],
        dialogFormVisible: false,
        formData: {
          className: '',
          grade: '',
          subjectList: [],
          planAmount: '',
          year: '',
          vacationType: ''
        }
      }
    },
    mounted () {
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

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
