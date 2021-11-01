import Vue from 'vue'
import App from './App'
import router from "./router"; // 自动扫面router文件夹下到路由配置

// 生产模式下提示toggle
Vue.config.productionTip = false

new Vue({
  el: '#app',
  //  配置路由
  router,
  components: { App },
  template: '<App/>'
})
