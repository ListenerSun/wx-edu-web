<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="70px">
    <el-form-item label="手机号">
      <el-input v-model="stuRegisterForm.phone" placeholder="请输入手机号" maxlength="11" style="width: 200px"></el-input>
    </el-form-item>
    <el-form-item label="学生姓名">
      <el-input v-model="stuRegisterForm.name" placeholder="请输入姓名" style="width: 200px"></el-input>
    </el-form-item>
    <el-form-item label="学生性别">
      <el-select v-model="value" placeholder="请选择" style="width: 100px">
        <el-option
          v-for="item in stuRegisterForm.sex"
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
    <el-button type="primary" @click="onSubmit" style="display:block;margin:30px 50px 15px 90px; width: 100px">报名
    </el-button>
  </el-form>
</template>

<script>
  export default {
    data () {
      return {
        stuRegisterForm: {
          name: '',
          sex: [{
            value: 'F',
            label: '女'
          }, {
            value: 'M',
            label: '男'
          }, {
            value: 'O',
            label: '其他'
          }],

          school: '',
          address: ''
        },
        rules: {
          name: {
            required: true, //是否必填
            message: '地址不能为空', //规则
            trigger: 'blur' //何事件触发
          }
        }
      }
    },
    methods: {
      onSubmit () {
        this.$axios.post()
        console.log('submit!')
      }
    }
  }
</script>

<style scoped>
</style>
