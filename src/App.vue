<template>
  <div id="app">
    <manage/>
    <router-view v-if="isRouterAlive">
    </router-view>
  </div>
</template>

<script>
  import Admin from './views/login/Admin'
  import manage from './views/admin/manage'
  export default {
    name: 'App',
    components: {
      Admin,
      manage
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
