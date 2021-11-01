<template>
  <div id="app">
    <router-link to="/main">首页</router-link>
    <router-link to="/login">登陆页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

