import { setupErrorInterceptors } from "@/utils/request/interceptors/error.js";
import { setupCancelInterceptors } from "@/utils/request/interceptors/cancel.js";

export const setupInterceptors = (request) => {
  setupErrorInterceptors(request)
  setupCancelInterceptors(request)

  request.interceptors.response.use((res) => {
    return res?.data ?? null
  })
}