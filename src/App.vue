<template>
  <div id="app">
    <router-view/>
    <ButtonView/>
  </div>
</template>

<script>
  import ButtonView from './components/ButtonView'

  export default {
    name: 'App',
    components: {
      ButtonView
    }
  }
</script>

<style>

</style>
