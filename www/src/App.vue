<template>
  <div id="nav">
    <div>
      <router-link to="index">主页</router-link>
      <router-link to="list">首页</router-link>
    </div>

    <div>
      <router-link to="login">登录</router-link>
      <router-link to="reg">注册</router-link>
    </div>
  </div>
  <router-view />
</template>
<script>
export default {
}
</script>
<style scoped>
#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
