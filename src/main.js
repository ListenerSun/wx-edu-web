// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from "element-ui"
import * as HttpUtils from './utils/HttpUtils'
import 'element-ui/lib/theme-chalk/index.css'
import Mint from 'mint-ui';


Vue.use(Mint);
// 定义全局 axios
Vue.prototype.HTTP = HttpUtils
// 后端请求地址
// Vue.prototype.HOME = 'http://wx-edu/wx_edu'
Vue.prototype.HOME = 'http://lcoalhost:9400'
//全局使用ElementUI
Vue.use(ElementUI)
//全局注册，使用方法为:this.$axios
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
