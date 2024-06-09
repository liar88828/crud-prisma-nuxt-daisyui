<template>
  <div
    :class="[
      // ' stack  ',
      'toast toast-top toast-end ',
      'transition-opacity ease-in-out duration-700 opacity-100 ',
    ]"
  >
    <LazyElToastStatus
      v-for="toast in toasts"
      :key="toast.id"
      :msg="toast.msg"
      :type="toast.type"
      @close="removeToast(toast.id)"
    />
  </div>
</template>

<script setup lang="ts">
import type { StatusLoad } from "~/types/status"

defineProps<{
  toasts: { id: string; msg: string; type: StatusLoad }[]
  removeToast: (id: string) => void
}>()
</script>
