import { message } from 'ant-design-vue'
import { isCancel } from 'axios'

export const setupErrorInterceptors = (request) => {
  request.interceptors.request.use((config) => {
    return config
  }, (error) => {
    message.error(error.message)
    return Promise.reject(error);
  })
  request.interceptors.response.use((res) => {
    return res ?? null
  }, (error) => {
    console.log(error)
    if (isCancel(error)) {
      console.log('取消请求！')
    } else {
      message.error(error.message)
    }
    return Promise.reject(error);
  })
}