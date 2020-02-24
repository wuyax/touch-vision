import { TIMEOUT, ERR_OK, baseURL, STATUS } from './config.js'
import axios from 'axios'

axios.defaults.withCredentials = true

/**
 * 将中文转换为 ASCII 码
 * @param  {Object} params {key: '汉字'}
 * @return {Object}        {key: '%E6%B1%89%E5%AD%97'}
 */
export const handleChinese = function(params) {
  const pattern = new RegExp('[\u4E00-\u9FA5]+') // 正则匹配中文字符
  let newObj = {}
  for (let i in params) {
    if (pattern.test(params[i])) {
      newObj[i] = encodeURI(params[i])
    } else {
      newObj[i] = params[i]
    }
  }
  return newObj
}
/* 
  常见的 Content-Type
  application/x-www-form-urlencoded
  application/json
  application/octet-stream
  multipart/form-data
*/
// axios 配置
const xhr = axios.create({
  baseURL: baseURL,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  withCredentials: true
})

//添加请求拦截器
xhr.interceptors.request.use(
  function(config) {
    if (config.method === 'post') {
      return config
    }
    // 简单的调用 get 请求
    if (config.method === 'get') {
      return config
    }
  },
  function(error) {
    //请求错误时做些事
    return Promise.reject(error)
  }
)

// 添加响应拦截器
xhr.interceptors.response.use(
  //请求成功
  function(response) {
    if (response.data[STATUS] == ERR_OK) {
      return response.data
    } else {
      return Promise.reject(response.data)
    }
  },
  //请求失败
  function(error) {
    return Promise.reject(error)
  }
)

export default xhr
