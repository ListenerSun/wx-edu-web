<template>
  <div id="app">
    <index></index>
    <router-view v-if="isRouterAlive">
    </router-view>
  </div>
</template>

<script>
  import index from "./views/index/index";
  export default {
    name: 'App',
    components: {
      index
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
