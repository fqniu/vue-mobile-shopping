import request from '@/service/index'
import postJson from "@/service/postJson"

// 主页数据轮播图
export const homeSwipeList = () => {
  return request({
    url: '/api/goodlist',
    method: 'get'
  })
}
 
// 主页数据列表
export const homeGoodsList = (params) => {
  return request({
    url: '/api/goodlist/info',
    params,
    method: 'get'
  })
}


