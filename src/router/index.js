import Vue from 'vue'
import Router from 'vue-router'
import StuRegister from '../views/student/StuRegister'
import manage from '../views/admin/manage'
import stuList from '../views/student/stuList'
import Admin from '../views/login/Admin'
import ClassInfoList from '../views/student/ClassInfoList'

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
    },
    {
      path: '/stuList',
      name: 'stuList',
      component: stuList
    },
    {
      path: '/classInfoList',
      name: 'classInfoList',
      component: ClassInfoList
    }
  ]
})
