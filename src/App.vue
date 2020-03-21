<template>
  <div id="app">
    <router-view v-if="isRouterAlive">
    </router-view>
  </div>
</template>

<script>
  import mainMenu from "./views/admin/mainMenu";
  import manage from "./views/admin/manage";
  import index from "./views/index/index";
  import ClassInfoList from "./views/student/ClassInfoList";
  export default {
    name: 'App',
    components: {
      index,
      manage,
      mainMenu,
      ClassInfoList
    },
    provide () {
      return {
        reload: this.reload
      }
    },
    data () {
      return {
        isRouterAlive: true
      }
    },
    methods: {
      reload () {
        this.isRouterAlive = false
        this.$nextTick(function () {
          this.isRouterAlive = true
        })
      }
    }
  }
</script>

<style>

</style>
