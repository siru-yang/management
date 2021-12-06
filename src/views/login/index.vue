<template>
  <div>
    <div class="login-container">
      <el-form
        class="login-form"
        autocomplete="on"
        :model="loginForm"
        ref="loginForm"
        label-position="left"
      >
        <h3 class="title">后台管理系统</h3>
        <el-form-item prop="username">
          <el-input
            name="username"
            type="text"
            v-model.trim="loginForm.username"
            autocomplete="on"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            name="password"
            show-password
            @keyup.enter.native="handleLogin"
            v-model.trim="loginForm.password"
            autocomplete="on"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            :loading="loading"
            @click.native.prevent="login"
            >登 录</el-button
          >
        </el-form-item>
      </el-form>
      <!-- <div class="to-register-warp">
        还没有账号，现在去注册。
        <router-link :to="{path: '/signup'}">立即注册</router-link>
      </div>-->
    </div>
    <my-footer></my-footer>
  </div>
</template>


<script>
import MyFooter from "../layout/component/MyFooter.vue";
import { login } from "@/api/user";
export default {
  components: { MyFooter },
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "",
      },
      loading: false,
    };
  },
  mounted() {
    console.log("this.$store.state.user.token:", this.$store.state.user.token);
    console.log("this.$store.getters.token:", this.$store.getters.token);
    this.$store.commit("SET_TOKEN", "new token");
    console.log("this.$store.getters.token:", this.$store.getters.token);
  },
  methods: {
    login() {
      const{username, password} = this.loginForm
      login({username, password}).then((rsp) => {
        console.log("登录结果：", rsp);
        if(rsp.code == 0){
          this.$store.commit('SET_TOKEN',rsp.data)
          this.$router.push("/")
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>