import type { Product } from "@prisma/client"
import type { OnLoad } from "~/types/load"

export const useProduct = () => {
  const { addToast, removeToast, toasts, handleToast } = useToast()
  const headers = useRequestHeaders(["cookie"]) as HeadersInit
  const form = reactive<Omit<Product, "id">>({
    name: "",
    description: "",
    price: 0,
    qty: 0,
  })

  const onLoad = reactive<OnLoad>({
    status: "info",
    text: "",
    loading: false,
  })

  const onDelete = async (id: string) => {
    onLoad.loading = true
    addToast("Creating...", "info")
    const { status, pending } = await useFetch("/api/product/" + id, {
      headers,
      method: "DELETE",
    })
    if (status.value === "success") {
      addToast("Success Delete...", "success")
    }
    if (status.value === "error") {
      addToast("Fail Delete...", "error")
    }
    onLoad.loading = pending.value
  }

  const onCreate = async () => {
    onLoad.loading = true
    addToast("Creating...", "info")

    const { status, pending } = await useFetch("/api/product", {
      method: "POST",
      body: form,
    })

    if (status.value === "success") {
      addToast("Success Create...", "success")
    }
    if (status.value === "error") {
      addToast("Fail Create...", "error")
    }
    onLoad.loading = pending.value
  }

  const onEdit = async (id: string) => {
    onLoad.loading = true
    const data = await handleToast<Product>("Update", onLoad, () =>
      // @ts-ignore
      useFetch(`/api/product/${id}`, {
        headers,
        method: "PUT",
        body: form,
      })
    )
    // console.log(data, "edit result")
  }

  return {
    form,
    onLoad,
    toasts,
    headers,
    onCreate,
    removeToast,
    onDelete,
    onEdit,
  }
}
