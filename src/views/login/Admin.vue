<template>
  <div class="login_page fillcontain login-container">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer">
        <div ref="mm" class="manage_tip">
          <p>新思路学生管理系统</p>
        </div>
        <el-form ref="loginData" :model="loginData" :rules="rules">
          <el-form-item prop="phone">
            <el-input
              v-model="loginData.phone"
              prefix-icon="el-icon-user-solid"
              placeholder="用户名">
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginData.password"
              show-password
              prefix-icon="el-icon-key"
              type="password"
              placeholder="密码"/>
          </el-form-item>
          <el-form-item>
            <!--<router-link to="/manage">-->
            <el-button :loading="loading" @click="handleLogin('loginData')" type="primary" class="submit_btn">登陆
            </el-button>
            <!--</router-link>-->
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'admin',
    data () {
      return {
        loading: false,
        loginData: {
          phone: '17629211310',
          password: '123456'
        },
        rules: {
          phone: [{required: true, message: '请输入手机号码', trigger: 'blur'},
            {
              validator: function (rule, value, callback) {
                if (/^1[34578]\d{9}$/.test(value) == false) {
                  callback(new Error('请输入正确的手机号'))
                } else {
                  callback()
                }
              },
              trigger: 'blur'
            }],
          password: [{required: true, message: '请输入密码', trigger: 'blur'},
            {min: 5, max: 25, message: '长度在 5 到 25个字符'},
            {pattern: /^(\w){5,25}$/, message: '只能输入5-25个字母、数字、下划线'}]
        }
      }
    },
    mounted () {
      console.log(this.$refs);
      /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
      // if (getCookie('phone')) {
      //   this.$router.push('/manage')
      // }
    },
    methods: {
      handleLogin () {
        this.$refs.loginData.validate(valid => {
          if (valid) {
            this.loading = true
            var url = this.HOME + '/user/login_by_password'
            this.HTTP.post(url, this.loginData).then((res) => {
              console.log(res)
              if (res.data.success == false) {
                this.$message.warning(res.data.message)
                this.loading = false
              } else {
                this.loading = false
                this.$message.success('欢迎您来到新思路后台管理系统')
                // setCookie('phone', this.AdminDatas.phone, 1000 * 60)
                this.$router.push('/manage')
              }
            }).catch(() => {
              this.loading = false
              this.$message.error('系统故障')
            })
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../../style/mixin';

  .login_page {
    background-color: #324057;
  }

  .login-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-size: 100px;
    min-height: 800px;
    min-width: 630px;
    z-index: 999;
  }

  .manage_tip {
    position: absolute;
    width: 100%;
    top: -100px;
    left: 0;

    p {
      font-size: 34px;
      color: #fff;
    }
  }

  .form_contianer {
    .wh(320px, 210px);
    .ctp(320px, 210px);
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;

    .submit_btn {
      width: 100%;
      font-size: 16px;
    }
  }

  .tip {
    font-size: 12px;
    color: red;
  }

  .form-fade-enter-active, .form-fade-leave-active {
    transition: all 1s;
  }

  .form-fade-enter, .form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }
</style>
