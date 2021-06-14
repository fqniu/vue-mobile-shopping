<template>
  <div class="mine">
    <div class="login_btn" @click="gotologin">
      <span>登录</span> 
    </div>
    <div class="login_btn" @click="gotologin">
      <span>注册</span>
    </div>
  </div>
</template>
<script>

export default {
  name: "index",
  components:{
    
  },
  data() {
    return {

    };
  },
  created() {},
  computed: {},
  methods: {
    gotologin(){
      this.$router.push('/login')
    }
  },
};
</script>
<style lang="scss" scoped>
.mine{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login_btn{
  width: 7rem;
  height: 2rem;
  border-radius: .2rem;
  border: 1px solid #ccc;
  font-size: .28rem;
  font-weight: 600;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 .2rem .05rem #ccc; 
}
</style>