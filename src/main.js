// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入 mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import axios from 'axios'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'

//全局使用ElementUI
Vue.use(ElementUI)
//全局注册，使用方法为:this.$axios
Vue.prototype.$axios = axios
Vue.config.productionTip = false
//全局使用MintUI
Vue.use(Mint);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
