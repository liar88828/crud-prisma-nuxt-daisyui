<template>
  <div class="flex flex-col w-full">
    <div :class="['divider', horizontal && 'divider-horizontal']">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: false,
  },
  horizontal: {
    type: Boolean,
    default: false,
    required: false,
  },
})
</script>
