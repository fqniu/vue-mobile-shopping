<template>
  <div class="login-body">
    <!--		<img :src="logoUrl" alt="" class="login-logo">-->
    <input
      class="com-input"
      type="text"
      v-model="account"
      placeholder="请输入手机号"
      @keyup.enter="loginFun()"
      style="margin-top: 1.3rem"
    />
    <input
      class="com-input"
      type="password"
      v-model="password"
      placeholder="请输入验证码"
      @keyup.enter="loginFun()"
    />
    <span @click="getCode()" class="get-code">获取验证码</span>
    <div class="form-group" style="margin-top: 0.8rem">
      <button
        @click="loginFun()"
        class="button-login click"
        :class="{ disabled: loadState == 'loading' }"
        :disabled="loadState == 'loading'"
      >
        <p>登录</p>
        <!--<mt-spinner type="fading-circle" color="#ffffff" :size="20" v-show="loadState=='loading' " style="margin: auto;"></mt-spinner>-->
      </button>
    </div>

    <div class="forget click" @click="$router.push('/forget')">忘记密码</div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import config from "@/config";
import { getCode, login } from "@/api/user";

export default {
  name: "login",
  created() {
    this.$store.state.showFooter = false;
  },
  data() {
    return {
      account: "15602436052",
      password: "123456",
      loadState: "finish",
      // logoUrl: require("../../assets/images/logo_"+ config.projectName+".png")
    };
  },
  mounted() {
    if (localStorage.loginMsg) {
      let msg = JSON.parse(localStorage.loginMsg);
      this.account = msg.ac;
      this.password = msg.psw;
    }
  },
  methods: {
    async getCode() {
      if (!this.account) {
        this.$toast({
          message: "请输入手机号",
          position: "bottom",
          duration: 1000,
        });
        return false;
      }
      let params = {
        mobile: this.account,
        tmplType: "login",
      };
      let res = await getCode(params);
    },
    // ...mapActions([
    //     'handleLogin',
    //     'getUserInfo'
    // ]),
    // ...mapMutations([
    //     'userInformation',
    //     'userToken'
    // ]),
    ...mapMutations({
      userInfo: "userInformation",
      userTk: "userToken",
    }),
    async loginFun() {
      if (!this.account) {
        this.$toast({
          message: "请输入手机号",
          position: "bottom",
          duration: 1000,
        });
        return false;
      }
      if (!this.password) {
        this.$toast({
          message: "请输入验证码",
          position: "bottom",
          duration: 1000,
        });
        return false;
      }
      let data = {
        mobileno: this.account,
        verifyCode: this.password,
        flag: "login",
      };
      // let res = await login(data)
      // if(res.code === 0){
      //     let token = res.data.access_token
      //     this.$store.commit('setToken', {token, auto})
      //     this.$router.push('/home');
      // }
      // console.log(res)
      this.$router.push("/order");
    },
    // loginFun: function () {
    //   if (!this.account) {
    //     this.$toast({
    //       message: "请输入手机号",
    //       position: "bottom",
    //       duration: 1000,
    //     });
    //     return false;
    //   }
    //   if (!this.password) {
    //     this.$toast({
    //       message: "请输入密码",
    //       position: "bottom",
    //       duration: 1000,
    //     });
    //     return false;
    //   } else {
    //     this.loadState = "loading";
    //     let username = this.account;
    //     let password = this.password;
    //     let aliasName = config.projectName;
    //     let auto = true;
    //     this.handleLogin({ username, password, aliasName, auto })
    //       .then((res) => {
    //         this.loadState = "finish";
    //         if (aliasName == "changtong") {
    //           this.$router.push("/homeByToolCabinet");
    //         } else {
    //           this.$router.push("/home");
    //         }
    //       })
    //       .finally(() => {
    //         this.loadState = "finish";
    //       });
    //   }
    // },
  },
};
</script>
<style lang="scss" scoped>
.get-code {
  display: inline-block;
  text-align: right;
  margin-left: 0.6rem;
  margin-top: 0.4rem;
}
.login-body {
  background: #fff;
  min-height: 100vh;
  padding-top: 1rem;
  position: relative;
}
.login-logo {
  width: 1.3rem;
  height: 1.3rem;
  background: #888888;
  display: block;
  margin: 0 auto;
}
.com-input {
  margin: 0 0.6rem;
  padding: 0.25rem 0;
  border: none;
  border-bottom: 0.01rem solid #eee;
  font-size: 0.34rem;
  color: #333;
  line-height: 0.48rem;
  width: 6.3rem;
  display: block;
  &::-webkit-input-placeholder {
    color: #ccc;
  }
}
.button-login {
  width: 6.3rem;
  margin: auto;
  background: #ccc;
  height: 0.94rem;
  text-align: center;
  line-height: 0.94rem;
  color: #fff;
  font-size: 0.36rem;
  border: none;
  border-radius: 0.1rem;
  display: block;
  &.disabled {
    opacity: 0.7;
  }
}
.forget {
  color: #999;
  font-size: 0.28rem;
  text-align: center;
  line-height: 0.4rem;
  margin-top: 2rem;
}
</style>
