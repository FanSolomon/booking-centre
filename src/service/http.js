import axios from 'axios'
import router from '../router'
import jwtDecode from 'jwt-decode'
import http from './http'

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
      if (response.data.code === '0000' || response.data.code === '0008') {
        localStorage.removeItem('bcToken')
        localStorage.removeItem('user')
        router.push('/login')
      } else {

      }
    }
  }
  return response
}, err => {
  if (err && err.response) {
    if (err.response.data.code === '0000' || err.response.data.code === '0008') {
      localStorage.removeItem('bcToken')
      localStorage.removeItem('user')
      router.push('/login')
    } else {

    }
    switch (err.response.status) {
      case 400:
        err.message = '错误请求'
        break
      case 401:
        err.message = '未授权，请重新登录'
        // 清除过期token
        localStorage.removeItem('bcToken')
        localStorage.removeItem('user')
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

// 刷新token请求
function refreshTokenRequst () {
  console.log('refreshTokenRequst')
  const bcToken = localStorage.getItem('bcToken')
  const formData = new FormData()
  formData.append('token', bcToken)
  axios.request({
    method: 'post',
    baseURL: process.env.VUE_APP_API_URL,
    url: '/auth/refreshToken',
    data: formData,
    timeout: 30000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json; charset=UTF-8'
    }
  }).then((res) => {
    console.log(res)
    const result = res.data
    if (result.success === true) {
      const token = result.data.access_token
      // token存储到localStorage
      localStorage.setItem('bcToken', token)
      const decoded = jwtDecode(token)
      console.log(decoded)
      onAccessTokenFetched()
    } else {
      if (typeof res.errorMsg === 'undefined' || res.errorMsg == null || res.errorMsg === '') {
        console.log('刷新token失败，未知错误')
      } else {
        console.log(res.errorMsg)
      }
      localStorage.removeItem('bcToken')
      localStorage.removeItem('user')
      router.push('/login')
    }
  }).catch((err) => {
    localStorage.removeItem('bcToken')
    localStorage.removeItem('user')
    router.push('/login')
    console.log(err)
  }).finally(() => {
    isRefreshing = false
  })
}

// Promise函数集合
let subscribers = []
function onAccessTokenFetched () {
  subscribers.forEach((callback) => {
    callback()
  })
  subscribers = []
}

function addSubscriber (callback) {
  subscribers.push(callback)
}

let isRefreshing = false
function checkStatus (response, url, data, type) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && response.data.code === '0007') {
    // 刷新token的函数,这需要添加一个开关，防止重复请求
    if (!isRefreshing) {
      isRefreshing = true
      refreshTokenRequst()
    }
    // Promise函数
    console.log('Promise函数,type:' + type)
    const retryOriginalRequest = new Promise((resolve) => {
      addSubscriber(() => {
        switch (type) {
          case 'post':
            resolve(http.post(url, data))
            break
          case 'postForm':
            resolve(http.postForm(url, data))
            break
          case 'postWithoutToken':
            resolve(http.postWithoutToken(url, data))
            break
          default:
            break
        }
        // resolve(http.post(url, data))
      })
    })
    return retryOriginalRequest
  } else if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
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
        return checkStatus(response, url, data, 'post')
      }
    ).catch(
      (err) => {
        return err
      }
    )
  },
  postForm (url, data) {
    return axios({
      method: 'post',
      baseURL: '/',
      url,
      data: data,
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Authorization: 'Bearer ' + localStorage.getItem('bcToken')
      }
    }).then(
      (response) => {
        return checkStatus(response, url, data, 'postForm')
      }
    ).catch(
      (err) => {
        return err
      }
    )
  },
  postWithoutToken (url, data) {
    return axios({
      method: 'post',
      baseURL: '/',
      url,
      data: data,
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(
      (response) => {
        return checkStatus(response, url, data, 'postWithoutToken')
      }
    ).catch(
      (err) => {
        return err
      }
    )
  }
}
