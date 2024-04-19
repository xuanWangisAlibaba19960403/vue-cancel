import { ref } from 'vue'
import { request } from "@/utils/request/index.js";

export const getUserList = (params) => {
  return request(
      '/users',
      params
  )
}

export const useGetUserListApi = () => {
  const userList = ref([])
  const setUserList = (params) => {
    return getUserList(params).then((res) => {
      userList.value = res
    })
  }

  return {
    userList,
    setUserList
  }
}