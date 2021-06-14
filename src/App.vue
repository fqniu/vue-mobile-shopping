<template>
  <div class="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="appView" v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition :name="transitionName">
      <router-view  class="appView"  v-if="!$route.meta.keepAlive"  ref="appView"></router-view>
    </transition>

    <footer class="footer" v-if="isInTabPage">
      <div  class="tab-item"  v-for="item in tabList"  @click="tabClick(item)"  :key="item.icon">
        <div class="tab-item-img">
          <img :src="activeTabName == item.routerName ? item.activeIcon : item.icon" alt=""/>
        </div>
        <div class="tab-item-text" :class="{ 'color-main': activeTabName == item.routerName }">
          {{ item.name }}
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { setToken, getToken, removeToken } from "@/utils/util";

export default {
  name: "App",
  computed: {
    activeTabName: function () {
      return this.$route.name;
    },
    isInTabPage: function () {
      if (
        this.$route.name == "home" ||
        this.$route.name == "classify" ||
        this.$route.name == "shopping" ||
        this.$route.name == "order" ||
        this.$route.name == "mine"
      ) {
        // if(this.$route.name == '' || this.$route.name == 'classify' || this.$route.name == 'shopping' || this.$route.name == 'order' || this.$route.name == 'mine'){
        return true;
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      transitionName: "slide-left",
      routerStyle: {},
      tabList: [
        {
          icon: require("./assets/images/tab/home.png"),
          activeIcon: require("./assets/images/tab/home-active.png"),
          name: "首页",
          routerName: "home",
          isToApp: false,
        },
        {
          icon: require("./assets/images/tab/classify.png"),
          activeIcon: require("./assets/images/tab/classify-active.png"),
          name: "分类",
          routerName: "classify",
          isToApp: false,
        },
        {
          icon: require("./assets/images/tab/shopping.png"),
          activeIcon: require("./assets/images/tab/shopping-active.png"),
          name: "购物车",
          routerName: "shopping",
          isToApp: false,
        },
        {
          icon: require("./assets/images/tab/order.png"),
          activeIcon: require("./assets/images/tab/order-active.png"),
          name: "订单",
          routerName: "order",
          isToApp: false,
        },
        {
          icon: require("./assets/images/tab/mine.png"),
          activeIcon: require("./assets/images/tab/mine-active.png"),
          name: "我的",
          routerName: "mine",
          isToApp: false,
        },
      ],
    };
  },
  created() {
    // console.log("app-created")
  },
  methods: {
    tabClick(data) {
      if (data.isToApp) {
      } else {
        this.$router.push({ name: data.routerName });
      }
    },
  },
  watch: {
    $route(to, from) {
      // console.log(to,from);
      if (to.meta.index > from.meta.index) {
        this.transitionName = "vux-pop-in";
      } else {
        // this.transitionName = "vux-pop-out";
        this.transitionName = "vux-pop-in";
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.app {
  width: 100%;
  background: #f5f5f5;
  min-height: 100vh;
}
.appView {
  width: 100%;
  position: absolute;
  -webkit-transition: all 0.15s cubic-bezier(0.55, 0, 0.1, 1);
  -moz-transition: all 0.15s cubic-bezier(0.55, 0, 0.1, 1);
  -ms-transition: all 0.15s cubic-bezier(0.55, 0, 0.1, 1);
  -o-transition: all 0.15s cubic-bezier(0.55, 0, 0.1, 1);
  transition: all 0.15s cubic-bezier(0.55, 0, 0.1, 1);
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.08rem;
  display: flex;
  align-items: center;
  background: #fff;
  .tab-item {
    width: 20%;
    text-align: center;
  }
  .tab-item-img {
    width: auto;
    height: 0.44rem;
    margin: auto;
    img {
      height: 100%;
      width: auto;
    }
  }
  .tab-item-text {
    font-size: 0.2rem;
    color: #2e2e2e;
    text-align: center;
    line-height: 0.3rem;
    margin-top: 0.05rem;
  }
}
</style>
