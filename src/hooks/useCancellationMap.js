import { getCurrentInstance, onUnmounted } from "vue";

export const store = new Map()

export const useCancellationMap = () => {
  const instance = getCurrentInstance()
  const uid = instance.uid
  const map = store.get(uid) ?? new Map()
  store.set(
      uid,
      map
  )
  onUnmounted(() => {
    map.values().forEach((cancel) => {
      cancel()
    })
    map.clear()
    store.delete(uid)
  })
  return map
}

