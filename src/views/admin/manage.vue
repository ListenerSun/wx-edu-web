<template>
  <div class="manage">
    <el-col>
      <mainMenu/>
      <manage-header/>
      <router-view>
      </router-view>
    </el-col>
  </div>
</template>

<script>
  import manageHeader from "../../components/manageHeader";
  import mainMenu from './mainMenu'

  export default {
    name: 'manage',
    components: {
      mainMenu,
      manageHeader
    },
    methods: {
      // 获取字典列表
      getAllDicList(){
        let url = this.HOME + "/course/common/dic/list"
        this.HTTP.get(url,null).then(res => {
          if (res.success){
            localStorage.setItem(this.dicListKey,JSON.stringify(res.data))
          }
        })
      }
    },
  mounted () {
      this.getAllDicList()
  }
  }
</script>

<style scoped>
  .manage {
    background: #EFEEF0;
  }
</style>
