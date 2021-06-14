import Vue from 'vue'
import Router from 'vue-router'


import login from '@/views/login'
import Forget from '@/views/forget_psd'
import pageNone from '@/views/pageNone'


Vue.use(Router)
export default new Router({
  // mode: 'history',

  routes: [{
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '登录',
        index: 1,
      }
    },
    {
      path: '/forget',
      name: 'forget',
      component: Forget,
      meta: {
        title: '忘记密码',
        index: 2,
      }
    },
    {
      path: '*',
      name: '404',
      component: pageNone,
      meta: {
        title: '404',
        index: 10,
      }
    },
    {
      path: '/share',
      name: 'share',
      component: resolve => require(['@/views/share.vue'], resolve),
    },

    {
      path: '/',
      redirect: '/home',
    },

    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/views/home/index.vue'], resolve),
      meta: {
        title: '首页',
        index: 1,
        keepAlive: true
      }
    },
    {
      path: '/classify',
      name: 'classify',
      component: resolve => require(['@/views/classify/index.vue'], resolve),
      meta: {
        title: '分类',
        index: 1,
        keepAlive: true
      }
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: resolve => require(['@/views/shopping/index.vue'], resolve),
      meta: {
        title: '购物车',
        index: 1,
        keepAlive: true
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: resolve => require(['@/views/detail/index.vue'], resolve),
      meta: {
        title: '详情',
        index: 2,
        // keepAlive: true
      }
    },
    {
      path: '/order',
      name: 'order',
      component: resolve => require(['@/views/order/index.vue'], resolve),
      meta: {
        title: '订单',
        index: 1,
        keepAlive: true
      }
    },
    {
      path: '/order/orderDetail',
      name: 'orderDetail',
      component: resolve => require(['@/views/order/orderDetail.vue'], resolve),
      meta: {
        // title: '订单',
        index: 2,
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: resolve => require(['@/views/mine/index.vue'], resolve),
      meta: {
        title: '我的',
        index: 1,
        keepAlive: true
      }
    },
  ],

  // scrollBehavior (to, from, savedPosition) {
  //     return { x: 0, y: 0 }
  // }

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
})