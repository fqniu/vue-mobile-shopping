import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import config from "@/config";
// import server from './service';
import Utils from './utils/index';
import { setToken,  getToken } from '@/utils/util';
import getPageTitle from '@/utils/get-page-title';

import Vant from 'vant';
import './assets/css/reset.css';
import './assets/css/number.css';
import './assets/alifonts/iconfont.css';
import 'vant/lib/index.css';
import './index.scss';
import './assets/css/main.scss';

Vue.use(Vant);
import {
  Toast,
  Dialog
} from 'vant';
Vue.prototype.$toast = Toast;
Vue.prototype.$dialog = Dialog;

// import VueScroller from 'vue-scroller'
// Vue.use(VueScroller)

// import echarts from 'echarts';
// Vue.prototype.$echarts = echarts;

// bus总线 vue实例
Vue.prototype.$bus = new Vue()

//引入地图
// import AMap from 'vue-amap'
// Vue.use(AMap);

// vue剪切板功能
// import VueClipboard from 'vue-clipboard2'
// Vue.use(VueClipboard)

import global from './utils/global';
Vue.use(global); //将全局函数当做插件来进行注册

Vue.config.productionTip = false;
// Vue.prototype.$server = server;
Vue.prototype.$Utils = Utils;

Vue.prototype.formatPrice = function (num) {
  return this.$Utils.forMatPrice(num)
};

// 获取当前设备类型的方法
Vue.prototype.$getUserAgent = function () {
  const ua = navigator.userAgent.toLowerCase()
  // console.log("手机机型参数", ua)
  if (ua.indexOf('android') != -1) {
    // 返回 0 为安卓机型
    return 0
  } else if (ua.indexOf('iphone') != -1) {
    // 返回 1 为iOS机型
    return 1
  }
}

// Date.prototype.Format = function (fmt) {
//   var o = {
//     "M+": this.getMonth() + 1, //月份
//     "d+": this.getDate(), //日
//     "h+": this.getHours(), //小时
//     "m+": this.getMinutes(), //分
//     "s+": this.getSeconds(), //秒
//     "q+": Math.floor((this.getMonth() + 3) / 3), //季度
//     "S": this.getMilliseconds() //毫秒
//   };
//   if (/(y+)/.test(fmt))
//     fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
//   for (var k in o)
//     if (new RegExp("(" + k + ")").test(fmt))
//       fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
//   return fmt;
// }

// //移除数组内相同元素
// Array.prototype.removeSameEle = function () {
//   var arr = new Array();
//   for (var i = 0; i < this.length; i++) {
//     if (arr.indexOf(this[i]) == -1) {
//       arr.push(this[i]);
//     }
//   }
//   return arr;
// }

const turnTo = (to, access, next) => {
  // console.log(to);
  if (!to.name) {
    // 防止地址栏刷新动态路由跳转到401或404,先跳转到homeName
    router.replace(to)
  } else {
    next()
  }
}

const LOGIN_PAGE_NAME = 'login'
const homeName = 'home'
const permitList = []

router.afterEach((to, from, next) => {
  //标题更新
  if (to.meta.title) {
    document.title = store.webTitle = getPageTitle(to.meta.title) //改APP标题用的
  }
  //是否显示头部标题
  try {
    window.native.getApp();
    store.state.showHeader = true

  } catch (e) {
    store.state.showHeader = !!to.meta.isShowHeader
  }
  //判断历史记录 用于app返回操作App.vue的back()
  let historyIndex = store.state.historyArr.length - 2
  historyIndex >= 0 && to.path == store.state.historyArr[historyIndex] ? store.state.historyArr.splice(historyIndex + 1, 1) : store.state.historyArr.push(to.path)
});

// router.beforeEach((to, from, next) => {
//     try {
//         window.native.getApp();
//         next();
//     }
//     catch (e) {
//         const token = getToken()
//         if (!token && !permitList.includes(to.name)) {
//             //未登录
//             next({
//                 name: LOGIN_PAGE_NAME // 跳转到登录页
//             })
//             // next() // 跳转
//         } else if (!token && permitList.includes(to.name)) {
//             next() // 跳转
//         }else if (token && to.name === LOGIN_PAGE_NAME) {
//             // 已登录且要跳转的页面是登录页
//             console.log(config.projectName)
//             console.log(homeName)
//             next({
//                 name: homeName // 跳转到homeName页
//             })
//         } else {
//             if (store.state.user.hasGetInfo) {
//                 turnTo(to, store.state.user.access, next)
//             } else {
//                 store.dispatch('getUserInfo').then(res => {
//                     turnTo(to, store.state.user.access, next)
//                 }).catch(err => {
//                     setToken('')
//                     next({
//                         name: 'login'
//                     })
//                 })
//             }
//         }
//     }
//
// });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");