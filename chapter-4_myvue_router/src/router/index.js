import Vue from 'vue'
// 导入路由插件
import Router from 'vue-router'
// 导入自定义组件 - HomePage
import HomePage from "../components/HomePage";
// 导入自定义组件 - ContentPage
import ContentPage from "../components/ContentPage";

// 安装路由
Vue.use(Router)

// 1） 路由器控制路由
export default new Router({
  routes: [
    {
      path: '/content',  // 路由路径
      name: 'content',  // 路由名称（可省略）
      component: ContentPage  // 跳转到组件
    },
    {
      path: '/home',  // 路由路径
      name: 'home',  // 路由名称（可省略）
      component: HomePage  // 跳转到组件
    }
  ]
})
