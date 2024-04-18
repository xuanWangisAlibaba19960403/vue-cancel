import { ref } from 'vue'
import { request } from "../utils/request/index.js";

export const useGetUserListApi = () => {
  const userList = ref([])
  const getUserList = (params) => {
    return request(
        '/users',
        params
    ).then((res) => {
      userList.value = res
    })
  }

  return {
    userList,
    getUserList
  }
}