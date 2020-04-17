<template>
  <el-col :span="21">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">

    </el-tabs>
  </el-col>
</template>
<script>
  export default {
    name: 'menuTab',
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>

</style>
