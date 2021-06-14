import request from '@/service/index'
import postJsonRequest from "@/service/postJson"
/**
 * 获取分类
 */
export const getCategory = (params) => {
  return request({
    url: '',
    params,
    method: 'get'
  })
}

export function getDictList(codeTypeList) {
  const data = {
    codeTypeList: codeTypeList
  }
  return postJsonRequest({
    url: '',
    data,
    method: 'post'
  })
}

//获取地区信息列表
export function getArea(params) {
  return request({
    url: '',
    params,
    method: 'get'
  })
}

//我的系统公告
export const myMsgNoticeList = (params) => {
  return request({
    url: '',
    params,
    method: 'get'
  })
}

//查询公告详情
export const getMsgNoticeDetail = (params) => {
  return request({
    url: '',
    params,
    method: 'get'
  })
}