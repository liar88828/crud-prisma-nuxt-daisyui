import type { AsyncDataRequestStatus } from "#app"
import type { OnFetch } from "~/types/load"
import type { StatusLoad } from "~/types/status"

export const useToast = () => {
  const toasts = ref<{ id: string; msg: string; type: StatusLoad }[]>([])
  const visible = ref(true)
  function addToast(msg: string, type: StatusLoad) {
    const id = Math.random().toString(5)
    toasts.value.push({ id, msg, type })
  }

  function removeToast(id: string) {
    toasts.value = toasts.value.filter((toast) => toast.id !== id)
  }

  const handleToast = async <T>(
    msg: string,
    // add: (msg: string, type: StatusLoad) => void,
    onLoad: {
      status: StatusLoad
      text: string
      loading: boolean
    },
    fun: () => Promise<{
      status: globalThis.Ref<AsyncDataRequestStatus>
      pending: globalThis.Ref<boolean>
      data: OnFetch<T>
    }>
  ): Promise<OnFetch<T>> => {
    onLoad.loading = true
    addToast(`${msg}ing...`, "info")

    const { status, pending, data } = await fun()

    if (status.value === "success") {
      addToast(`Success ${msg}...`, "success")
    }
    if (status.value === "error") {
      addToast(`Fail ${msg}...`, "error")
    }
    onLoad.loading = pending.value
    return data
  }

  return {
    handleToast,
    addToast,
    removeToast,
    toasts,
    visible,
  }
}
