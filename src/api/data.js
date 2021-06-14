import request from '@/service/index';

/**
 * 基础数据
 */
export const initData = (url, params) => {
  return request({
    url: url,
    params,
    method: 'get'
  })
}

/**
 * 查询年月日周维度下销售额
 */
export const qrySaleByDimension = (params) => {
  return request({
    url: '',
    params,
    method: 'get'
  })
}

/**
 * 查询年月日周维度下销售额
 */
export const qryRank = (params) => {
  return request({
    url: '',
    params,
    method: 'get'
  })
}

/**
 * 查询设备数量
 */
export const qryShopNum = (params) => {
  return request({
    url: '',
    params,
    method: 'get'
  })
}

/**
 * 设备故障
 */
export const qryDeviceFaultRank = (params) => {
  return request({
    url: '',
    params,
    method: 'get'
  })
}

/**
 * 设备使用占比
 */
export const qryDeviceState = (params) => {
  return request({
    url: '',
    params,
    method: 'get'
  })
}

/**
 * 设备类型占比
 */
export const qryDeviceType = (params) => {
  return request({
    url: '',
    params,
    method: 'get'
  })
}

/**
 * 查询商品排行
 */
export const qryProdRank = (params) => {
  return request({
    url: '',
    params,
    method: 'get'
  })
}