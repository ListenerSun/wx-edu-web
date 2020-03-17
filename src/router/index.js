import Vue from 'vue'
import Router from 'vue-router'
import Admin from '../views/login/Admin'
import StuRegister from '../views/student/StuRegister'
import manage from '../views/admin/manage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/StuRegister',
      name: 'StuRegister',
      component: StuRegister
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage
    }
  ]
})
