import axios from "axios";
import { setupInterceptors } from '@/utils/request/interceptors/index.js'

export const request = axios.create({
  baseURL: 'http://localhost:9091',
})

setupInterceptors(request)