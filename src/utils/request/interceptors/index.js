import { setupErrorInterceptors } from "./error.js";
import { setupCancelInterceptors } from "./cancel.js";

export const setupInterceptors = (request) => {
  setupErrorInterceptors(request)
  setupCancelInterceptors(request)

  request.interceptors.response.use((res) => {
    return res?.data ?? null
  })
}