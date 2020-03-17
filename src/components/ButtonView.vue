<template>
  <mt-button type="primary" @click="onSubmit">报名</mt-button>
</template>

<script>
  import Vue from 'vue'
  import {Button} from 'mint-ui'

  Vue.component(Button.name, Button)
  export default {
    name: 'Main',
    methods: {
      onSubmit () {
        this.$router.push('/StuRegister')
      }
    }
  }
</script>

<style scoped>

</style>
