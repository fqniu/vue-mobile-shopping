<template>
  <div class="share">
    <img src="../assets/images/share.png" alt="" />
    <div class="wrapper">
      <div class="user-register flex-column bg-fff bdr-018">
        <div class="fs-36 color-000 font-bold reg-txt">注册</div>
        <div class="ipt fs-28">
          <input
            type="number"
            placeholder="请输入手机号码"
            v-model="userPhone"
          />
        </div>
        <div class="ipt fs-28">
          <input
            type="number"
            placeholder="验证码"
            class="code"
            v-model="code"
          />
          <span class="fs-28" @click="getCode()" v-if="false">获取验证码</span>
          <span class="fs-28 color-B3B" v-else>{{ 58 }}后重新获取</span>
        </div>
        <div class="ipt reg-btn fs-30 color-fff font-bold">立即注册</div>
      </div>
    </div>
    <div class="wrapper reg-text">
      <div class="fs-36 color-000 font-bold">广告精准投放</div>
      <div class="fs-28 color-B3B mt-15">定价精准、受众精准、排他保护</div>
    </div>
    <div class="wrapper reg-footer">
      <div class="fs-36 color-000 font-bold">以货置换广告</div>
      <div class="fs-28 color-B3B mt-15">商品生产流通企业，用货品置换广告</div>
      <div class="ipt reg-btn fs-30 color-fff font-bold mt-50 down-btn">
        立即下载体验
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "share",
  data() {
    return {
      userPhone: null,
      code: null,
    };
  },
  methods: {
    getCode() {
      if (!this.$Utils.validateMobile(this.userPhone)) {
        this.$toast({
          message: "请输入正确的手机号",
          position: "center",
          duration: 1000,
        });
        return;
      }
    },
  },
};
</script>

<style scoped lang="scss">
input {
  border: 0;
  outline: none;
  input::-webkit-input-placeholder {
    /* WebKit browsers 适配谷歌 */
    color: #b3b3b3;
  }
  input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 适配火狐 */
    color: #b3b3b3;
  }
  input::-moz-placeholder {
    /* Mozilla Firefox 19+ 适配火狐 */
    color: #b3b3b3;
  }
  input:-ms-input-placeholder {
    /* Internet Explorer 10+  适配ie*/
    color: #b3b3b3;
  }
}
.share {
  position: relative;
}
.wrapper {
  position: absolute;
  top: 6.8rem;
  display: flex;
  width: 100%;
  justify-content: center;
}
.user-register {
  width: 6.22rem;
  height: 5.36rem;
  justify-content: space-evenly;
  box-shadow: 0px 3px 6px rgba(226, 151, 0, 0.8);
}
.reg-txt {
  &:after {
    content: "";
    display: inline-block;
    width: 0.32rem;
    height: 0.04rem;
    border-radius: 0.02rem;
    background: #ccc;
    position: absolute;
    top: 0.92rem;
    left: 3.55rem;
  }
}
.ipt {
  width: 5.26rem;
  height: 0.88rem;
  border: 0.01rem solid #d2d2d2;
  border-radius: 0.44rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-left: 0.4rem;
  span {
    color: #ccc;
  }
}
.code {
  width: 3rem;
}
.reg-btn {
  border: 0;
  padding: 0;
  background: #ccc;
  justify-content: center;
}
.reg-text {
  top: 22rem;
  flex-direction: column;
  align-items: center;
}
.reg-footer {
  top: 33.2rem;
  flex-direction: column;
  align-items: center;
}
.down-btn {
  box-shadow: 0.01rem 0.03rem 0.06rem #ccc;
}
</style>