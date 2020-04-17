import Vue from 'vue'
import Router from 'vue-router'
import Admin from '../views/login/Admin'
import ClassInfoList from '../views/student/ClassInfoList'
import stuRegisterList from '../views/student/stuRegisterList'
import manage from "../views/admin/manage";
import index from "../views/index/index";
import courseList from '../views/course/courseList'
import courseInfo from '../views/course/courseInfo'

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
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage,
      children: [
        {
          path: 'classInfoList',
          name: 'classInfoList',
          component: ClassInfoList
        },
        {
          path: 'stuRegisterList',
          name: 'stuRegisterList',
          component: stuRegisterList
        },
        {
          path: 'courseList',
          name: 'courseList',
          component: courseList
        },
        {
          path: 'courseInfo',
          name: 'courseInfo',
          component: courseInfo
        }
      ]
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    }

  ]
})
