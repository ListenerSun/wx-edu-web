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
    }
  }
</script>

<style scoped>
  .manage {
    background: #EFEEF0;
  }
</style>
