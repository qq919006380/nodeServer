<template>
  <div id="nav" class="shadow-md mb-4 p-4 bg-blue-100">
    <div>
      <router-link to="index">主页</router-link>
      <router-link to="list">首页</router-link>
    </div>

    <div>
      <router-link to="login">登录</router-link>
      <router-link to="reg">注册</router-link>
    </div>
  </div>
  <div class="container-warp">
    <router-view />
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
#nav {
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

.container-warp{
  /* background-color: aquamarine; */
  /* background-image: url('./static/bg.png'); */
}
</style>
