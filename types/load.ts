import type { StatusLoad } from "./status"

export type OnLoad = { status: StatusLoad; text: string; loading: boolean }

export type OnRes<T> = {
  data: T
  status: boolean
  code: number
}

export type OnFetch<T> = globalThis.Ref<OnRes<T>>
