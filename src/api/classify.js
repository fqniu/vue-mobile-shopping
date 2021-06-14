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
export const goodsList = (params) => {
  return request({
    url: '/api/goodlist/info',
    params,
    method: 'get'
  })
}

// 商品接口
/**
 * 必填： 用户ID：userId
 * 非必填：无
 */
export const shoppingCart = (data) => {
  return postJson({
    url: '',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

// 商品专题页
/**
 * 非必填：无
 */
export const shoppingSpecial = (data) => {
  return postJson({
    url: '',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}