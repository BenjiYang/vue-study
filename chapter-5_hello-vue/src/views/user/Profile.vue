<template>
  <div>
    <h1>个人信息</h1>
    <p>{{$route.params.id}}</p>  <!-- 方路由参数传递方式1：Profile子组件属性绑定Main父组件的路由标签，此处直接通过全局路由属性获取值，打印在UI -->
    <p>{{id}}</p>  <!-- 路由参数传递方式2：当前组件export的引用方式 -->
  </div>
</template>

<script>
    export default {
        props: ['id'],   // 路由参数传递方式2：以组件的方式将属性'id'导出，且在Main组件中通过路由绑定
        name: "UserProfile",
        /**
         * 路由钩子函数，to,from,next，a.k.a."过滤器"
         * 参数说明：
         - to：路由将要跳转的路径信息
         - from：路径跳转前的路径信息
         - next：路由的控制参数
         - next() 跳入下一个页面
         - next(’/path’) 改变路由的跳转方向，使其跳到另一个路由
         - next(false) 返回原来的页面
         - next((vm)=>{}) 仅在 beforeRouteEnter 中可用，vm 是组件实例
         *
         */
        beforeRouteEnter: (to, from, next)=> {
          console.log("进入路由之前");
          //next();
          next(vm => {
            vm.getData(); // 进入路由之前执行该方法
          })
        },
        beforeRouteLeave: (to, from, next)=> {
          console.log("离开路由之前");
          next();
        },
        methods: {
          getData: function() {
            this.axios({
              method: 'get',
              url: 'http://localhost:8080/static/mock/data.json'
            }).then(function(response) {
              console.log(response)
            });
          }
        }
    }
</script>

<style scoped>

</style>
