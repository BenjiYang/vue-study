<template>
  <div>
    <h1>个人信息</h1>
    {{$route.params.id}}  <!-- 任何元素必须在html根节点下，此处div外层包装 -->
  </div>
</template>

<script>
    export default {
        name: "UserProfile"
    }
</script>

<style scoped>

</style>
