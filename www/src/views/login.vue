<template>
  <div class="login-wrap">
    <el-form :model="formLabelAlign" :rules="rules" label-position="right" label-width="80px">
      <el-form-item label="用户名" prop="user">
        <el-input v-model="formLabelAlign.user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="formLabelAlign.password"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="login">登录</el-button>
  </div>
</template>
<script>
import { reactive } from '@vue/reactivity';
import { $api } from '../api';
export default {
  setup() {
    let formLabelAlign = reactive({
      user: "",
      password: ""
    })

    let rules = {
      user: [
        { required: true, message: '请输入用户名', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
      ],

    }
    async function login() {
      let postData = {
        username: formLabelAlign.user,
        password: formLabelAlign.password
      }
      var { data } = await $api.user.login(postData);
      console.log(data);

      // var data = {
      //   id: '1',
      // }
      // fetch('http://localhost:8000/api/user/login', {
      //   method: 'POST',
      //   body: data
      // })
      //   .then(response => response.json())
      //   .then(data => console.log(data));


    }

    return {
      formLabelAlign, rules, login
    }
  }
};
</script>
<style scoped lang='less'>
.login-wrap {
  width: 400px;
}
</style>