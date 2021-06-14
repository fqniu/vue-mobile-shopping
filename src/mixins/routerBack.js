export default {
  data() {
    return {

    }
  },
  methods: {
    getScrollerPosition() {
      sessionStorage.askPositon = this.$refs.scroller && this.$refs.scroller.getPosition() && this.$refs.scroller.getPosition().top;
    }
  },
  beforeRouteEnter(to, from, next) {
    if (!sessionStorage.askPositon || from.path == '/') { //当前页面刷新不需要切换位置
      sessionStorage.askPositon = 0;
      next();
    } else {
      next(vm => {
        if (vm && vm.$refs.scroller) { //通过vm实例访问this
          setTimeout(function () {
            vm.$refs.scroller.scrollTo(0, sessionStorage.askPositon, false);
            sessionStorage.askPositon = 0;
          }, 100) //同步转异步操作
        }
      })
    }
  },

}