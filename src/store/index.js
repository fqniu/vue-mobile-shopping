import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    historyArr: [],
    userNameFirst: 'fq',
    userNameLast: 'niu',
  },
  mutations: {
    // 用户信息
    userInformation(state, userInfo) {
      state.userInformation = userInfo
    },
    // 用户token所有数据
    userToken(state, userToken) {
      state.userToken = userToken
    },
    // 数据处理

  },
  getters: {
    userInfo(state) {
      return state.userNameFirst + 'fqniu'
    },
    userTk(state) {
      return state.userNameLast + '202102122141'
    }
  },
  actions: {
    //设置token
    // 在store/index.js中的actions里面，方法的形参可以直接将commit解构出来，这样可以方便后续操作。
    setAliasName({
      commit
    }, aliasName) {
      commit('setAliasName', aliasName)
    },
  },
  modules: {
    user,
  }
})