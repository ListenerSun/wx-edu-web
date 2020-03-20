import Vue from 'vue'
import Router from 'vue-router'
import manage from '../views/admin/manage'
import stuList from '../views/student/stuList'
import Admin from '../views/login/Admin'
import ClassInfoList from '../views/student/ClassInfoList'
import mainMenu from '../views/admin/mainMenu'
import stuRegisterList from '../views/student/stuRegisterList'
import index from '../views/index/index'

const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/stuRegisterList',
      name: 'stuRegisterList',
      component: stuRegisterList
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage
    },
    {
      path: '/mainMenu',
      name: 'mainMenu',
      component: mainMenu
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
