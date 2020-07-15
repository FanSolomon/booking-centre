import axios from 'axios'
import router from '../router'

// 请求拦截
axios.interceptors.request.use(config => {
  return config
},
error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  if (response && response.status === 200) {
    /* 业务报错的相关处理 */
    if (response.data.success === false || response.data.success === 'false') {
      if (response.data.errorCode === '0000') {
        localStorage.removeItem('bcToken')
        router.push('/login')
      } else {

      }
    }
  }
  return response
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '错误请求'
        break
      case 401:
        err.message = '未授权，请重新登录'
        // 清除过期token
        localStorage.removeItem('bcToken')
        router.push('/login')
        break
      case 403:
        err.message = '拒绝访问'
        break
      case 404:
        err.message = '请求错误,未找到该资源'
        break
      case 405:
        err.message = '请求方法未允许'
        break
      case 408:
        err.message = '请求超时'
        break
      case 304:
        err.message = ''
        break
      case 500:
        break
      case 501:
        err.message = '网络未实现'
        break
      case 502:
        err.message = '网络错误'
        break
      case 503:
        err.message = '服务不可用'
        break
      case 504:
        err.message = '网络超时'
        break
      case 505:
        err.message = 'http版本不支持该请求'
        break
      default:
        err.message = `连接错误${err.response.status}`
    }
  } else {
    err.message = '连接到服务器失败'
  }
  return Promise.reject(err)
})

function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response.data
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

export default {
  data () {
    return {}
  },
  post (url, data) {
    return axios({
      method: 'post',
      baseURL: '/',
      url,
      data: data,
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: 'Bearer ' + localStorage.getItem('bcToken')
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).catch(
      (err) => {
        return err
      }
    )
  }
}
