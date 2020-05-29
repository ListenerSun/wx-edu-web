<template>
  <div class="manage">
    <el-col>
      <mainMenu/>
      <manage-header/>
      <menu-tab/>
      <router-view>
      </router-view>
    </el-col>
  </div>
</template>

<script>
  import manageHeader from "./manageHeader";
  import mainMenu from './mainMenu'
  import MenuTab from './menuTab'

  export default {
    name: 'manage',
    components: {
      MenuTab,
      mainMenu,
      manageHeader
    },
    methods: {
      // 获取字典列表
      getAllDicList(){
        let url = this.HOME + "/common/dic/list"
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
