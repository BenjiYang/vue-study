import Vue from 'vue'
import App from './App'
import router from './router' // 配完router index，这里导入方式与index里的不同，是从文件夹导入，注意小写
import ElementUI from 'element-ui'; // 配置ElementUI，Ref: https://element.eleme.cn/#/zh-CN/component/quickstart
import 'element-ui/lib/theme-chalk/index.css'; // 配置ElementUI，Ref: https://element.eleme.cn/#/zh-CN/component/quickstart
import axios from 'axios';
import VueAxios from 'vue-axios';


// Vue使用引入
Vue.use(router);
Vue.use(ElementUI);
Vue.use(VueAxios, axios);

new Vue({
  el: '#app',
  router,   // 配置路由
  render: h => h(App) // 配置ElementUI，Ref: https://element.eleme.cn/#/zh-CN/component/quickstart
})
