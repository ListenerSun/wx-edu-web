<template>
  <el-form ref="form" :model="stuRegisterForm" :rules="rules" label-width="70px">
    <el-form-item label="手机号">
      <el-input v-model="stuRegisterForm.phone" placeholder="请输入手机号" maxlength="11" style="width: 200px"></el-input>
    </el-form-item>
    <el-form-item label="学生姓名">
      <el-input v-model="stuRegisterForm.studentName" placeholder="请输入姓名" style="width: 200px"></el-input>
    </el-form-item>
    <el-form-item label="学生性别">
      <el-select v-model="stuRegisterForm.sex" placeholder="请选择" style="width: 100px">
        <el-option
          v-for="item in stuRegisterForm.sexOptions"
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
</template>

<script>
  export default {
    data () {
      return {
        stuRegisterForm: {
          studentName: '',
          sex: '',
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
          phone: '',
          school: '',
          address: ''
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
    methods: {
      onSubmit (formData) {
        alert(formData.phone)
        this.HTTP.post(this.HOME + '/class_order/add')
      }
    }
  }
</script>

<style scoped>
</style>
