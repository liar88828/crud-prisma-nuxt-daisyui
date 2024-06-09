<template>
  <div
    :class="[
      '   alert  ',
      // 'card shadow-md bg-primary text-primary-content',
      type === 'success' ? 'alert-success' : '',
      type === 'info' ? 'alert-info' : '',
      type === 'error' ? 'alert-error' : '',
    ]"
  >
    <!-- <div class="card-body">
      <h2 class="card-title">Notification 1</h2>
      <p>You have 3 unread messages. Tap here to see.</p>
    </div> -->
    <span> {{ msg }}</span>
  </div>
</template>

<script lang="ts" setup>
import type { StatusLoad } from "~/types/status"
defineProps<{ msg: string; type: StatusLoad }>()

const { visible } = useToast()
const $emit = defineEmits(["close"])

onMounted(() => {
  setTimeout(() => {
    visible.value = false
    $emit("close")
  }, 2000)
})
</script>
