import { ref } from 'vue'
import { request } from "@/utils/request/index.js";

export const getJobList = (params) => {
  return request(
      '/users',
      params
  )
}
export const useGetJobListApi = () => {
  const jobList = ref([])
  const getJobList = (params) => {
    return getJobList().then((res) => {
      jobList.value = res
    })
  }

  return {
    jobList,
    getJobList
  }
}