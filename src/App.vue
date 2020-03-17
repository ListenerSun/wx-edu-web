<template>
  <div id="app">
    <router-view/>
    <manage/>
  </div>
</template>

<script>
  import Admin from "./views/login/Admin";
  import Manage from "./views/admin/manage";

  export default {
    name: 'App',
    components: {
      Manage,
      Admin
    }
  }
</script>

<style>

</style>
