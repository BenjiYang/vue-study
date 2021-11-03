import Vue from 'vue'
// 导入路由插件
import Router from 'vue-router'
// 导入自定义组件
import Main from '../views/Main'
import Login from "../views/Login"
import UserProfile from "../views/user/Profile"
import UserList from "../views/user/List"

// 安装路由
Vue.use(Router);

// 路由器控制路由
export default new Router({
  routes: [
    {
      path: '/main',  // 路由路径
      component: Main  // 跳转到组件
    },
    {
      path: '/login',  // 路由路径
      component: Login,  // 跳转到组件
      children: [
        {
          path: '/profile', component: UserProfile
        },
        {
          path: '/list', component: UserList
        }
      ]
    }
  ]
})
