<template>
      <div>1111</div>
</template>

<script>
    export default {
      mounted() {
        var url = 'http://localhost:9100/account/user/register_code/11111111111'
        this.HTTP.get(url, null).then((res) => {
          console.log(res)
          if (res.data.success == false) {
            this.$message.warning(res.data.message)
            this.loading = false
          } else {
            alert(res.data)
            this.$message.success('欢迎您来到新思路后台管理系统')
            // setCookie('phone', this.AdminDatas.phone, 1000 * 60)
            this.$router.push('/manage')
          }
        }).catch(() => {
          this.loading = false
          this.$message.error('系统故障')
        })
      }
    }
</script>

<style scoped>

</style>
