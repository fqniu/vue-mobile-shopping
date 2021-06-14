export default {
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,

  /**
   * @description api请求基础路径
   */
  baseUrl: {
    // dev:'http://localhost:5000',
    // dev:'http://www.fqniu.xyz:5000',
    // dev:'http://www.fqniu.xyz:5001',
    dev:'https://www.fqniu.xyz:5002',
    pro:'https://www.fqniu.xyz:5002',
  },

  projectName:'fqniu',
  /**
   * @description 默认打开的首页的路由name值，默认为home
  */
  homeName: 'home'
}
