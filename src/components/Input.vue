<script setup lang="ts">
import type { ITodoItem } from '@/interface/TodoInterface'
import { computed, ref } from 'vue'

const isClicked = ref(false)
const todo = ref<ITodoItem | ''>('')

const setbackground = computed(() => {
  if (!isClicked.value) {
    return 'bg-transparent'
  } else {
    return `bg-icon-check bg-[background-size: 20px, 20px] bg-no-repeat bg-red-500`
  }
})

const emit = defineEmits<{
  (e: 'todo', todoItem: ITodoItem): void
}>()

const emitTodo = () => {
  if (todo.value) {
    emit('todo', todo.value)
  }
  todo.value = ''
}
</script>

<template>
  <div class="flex bg-white w-fit py-0.5 px-4 rounded items-center">
    <div
      :class="setbackground"
      @click="isClicked = !isClicked"
      class="w-4 h-4 rounded-full border-solid border flex-shrink-0 flex border-blue-dark mr-2"
    ></div>

    <input v-model="todo" @change="emitTodo" type="text" class="py-2 leading-3" />
  </div>
</template>
