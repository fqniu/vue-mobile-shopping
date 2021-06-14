import request from '@/service/index';
import postJson from "@/service/postJson";

//支付
export const payByCoin = (params) => {
  return request({
    url: '',
    params,
    method: 'get'
  })
}
//查询账户余额
export const getBalance = (params) => {
  return request({
    url: '',
    params,
    method: 'get'
  })
}