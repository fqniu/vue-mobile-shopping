import request from '@/service/index';

/**
 * 详情数据
 */
 export const detailInfo = ( params) => {
  return request({
    url: '/api/goodlist/info/detail',
    params,
    method: 'get'
  })
}