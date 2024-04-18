import { useCancelMap } from "./useCancelMap.js";

const getId = (mark) => {
  let id = 0;
  return () => `${mark ?? ''}${id++}`
}
export const getApiId = getId('API')
export const getPositionId = getId('POSITION')
const getReqId = getId('REQ')
export const useApiCancel = (api) => {
  const map = useCancelMap()
  const apiId = getApiId()
  const pId = getPositionId()
  const key = apiId + pId
  return (...args) => {
    const reqId = getReqId()
    const query = args.filter((param) => {
      return !param instanceof PointerEvent
    }) ?? []
    const config = query.at(0) ?? {}
    const controller = new AbortController();
    config.signal = controller.signal
    config.abort = () => {
      console.warn('取消', reqId)
      controller.abort()
    }
    config.reqId = reqId
    config.reqKey = key
    config.map = map
    query[0] = config
    return api.call(
        null,
        ...query
    )
  }
}