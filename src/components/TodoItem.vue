<script setup lang="ts">
import { computed, ref } from 'vue'

const isClicked = ref(false)

const setbackground = computed(() => {
  if (!isClicked.value) {
    return 'bg-transparent'
  } else {
    return `bg-icon-check bg-[background-size: 20px, 20px] bg-no-repeat bg-red-500`
  }
})
</script>

<template>
  <div class="flex bg-white w-fit py-0.5 px-4 rounded items-center">
    <div
      class="w-4 h-4 rounded-full border-solid border flex-shrink-0 flex border-blue-dark"
    ></div>
    <p>test</p>
  </div>
</template>
