export const setupCancelInterceptors = (request) => {
  request.interceptors.request.use(
      (config) => {
        const {
          map,
          reqKey,
          abort
        } = config
        console.log(
            map,
            reqKey,
            abort
        )
        console.warn(
            '请求',
            config.reqId
        )
        if (map?.has(reqKey)) {
          map?.get(reqKey)?.()
          map?.delete(reqKey)
        }
        map.set(
            reqKey,
            abort
        )
        return config
      }
  )
  request.interceptors.response.use(
      (res) => {
        console.log(res)
        console.warn(
            '响应',
            res.config?.reqId
        )
        const {
          map,
          reqKey
        } = res.config
        map?.delete(reqKey)
        return res ?? null
      },
      (error) => {
        console.log(error)
      }
  )
}