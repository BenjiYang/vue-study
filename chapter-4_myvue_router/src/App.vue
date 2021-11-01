<template>
  <!-- App主页面展示 -->
  <div id="app">
    <h1>App page</h1>
    <router-link to="/home">跳到首页</router-link>
    <router-link to="/content">跳到内容页</router-link>
    <router-view></router-view> <!-- router-view 用于展示跳转后的子组件，配合router-link使用-->
  </div>
</template>

<script>
export default  {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
