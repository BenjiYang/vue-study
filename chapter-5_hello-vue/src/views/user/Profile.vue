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
        name: "UserProfile"
    }
</script>

<style scoped>

</style>
