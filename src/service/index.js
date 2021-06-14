import axios from 'axios';

import { Toast } from 'vant';
import qs from 'qs';
import { getToken, getAgentId, removeToken } from '@/utils/util'
import config from '@/config'

const URL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
/**
 * 创建axios实例
 * @type {AxiosInstance}
 */
axios.defaults.timeout = 600000;
axios.defaults.baseURL = URL; //填写域名
/**
 * 请求参数处理
 */
axios.interceptors.request.use((config) => {
  // let user = JSON.parse(sessionStorage.getItem('user'));
  // const agentId = getAgentId();
  // if(config.data && agentId){
  //     config.data.agentId = agentId
  // }
  // if(config.params && agentId){
  //     config.params.agentId = agentId
  // }
  config.method === 'post' ?
    config.data = qs.stringify({
      ...config.data
    }) :
    config.params = {
      ...config.params
    }
  const token = getToken()
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token
  }
  // config.headers['Authorization'] = 'Bearer ' + "7816014465510072321f41238a-c847-4ff1-9381-e641bc2d5f16"
  // config.headers['Authorization'] = 'Bearer ' + "781167421495619584a3d02aa9-1dcf-435d-9215-7d5d18eddcff"
  // console.log("请求的token",config.headers['Authorization'])
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    overlay: false,
    duration: 0
  });
  return config
})


//响应拦截器即异常处理
axios.interceptors.response.use(
  (response) => {
    Toast.clear();
    if (response.data.code === 200) {
      // 服务端定义的响应code码为0时请求成功
      // 使用Promise.resolve 正常响应
      return Promise.resolve(response.data)
    } else if (response.code == 500) {
      // 使用Promise.reject 响应
      Toast({
        message: response.data.message,
        position: 'bottom',
        duration: 1000
      });
      return Promise.reject(response.data)
    }
  }, error => {
    let message = ''
    console.log("请求错误-------------", error);
    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          // location.reload()
          if (error.response.data.code === 2012) {
            Toast({
              message: '请重新登录',
              position: 'bottom',
              duration: 1000
            });
            // 判断token是否失效，如果失效则跳到登录页
            removeToken()
            try {
              u.native.toLogin();
            } catch (e) {
              console.log(e)
            }
          }
          return
        case 403 || 400:
          message = error.response.data.path + ',' + error.response.data.message
          break
          // case 500 || 502:
          //     message = '网络繁忙，请稍后再试'
          //     break
          // case 502:
          //     message = '连接服务器失败'
          //     break
        default:
          message = error.response.data.message ? error.response.data.message : '网络繁忙，请稍后再试'
          break
      }
      Toast({
        message: message,
        position: 'bottom',
        duration: 1000
      });
      // 请求错误处理
      return Promise.reject(error)
    } else {
      message = '网络繁忙，请稍后再试'
      Toast({
        message: message,
        position: 'bottom',
        duration: 1000
      });
      return Promise.reject(error)
    }
  }
)

export default axios