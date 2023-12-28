<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ITodoItem } from '@/interface/TodoInterface'

const isClicked = ref(false)

const props = defineProps<{
  todo: ITodoItem
}>()

const finishTodo = computed(() => {
  if (!isClicked.value) {
    return ''
  } else {
    return 'line-through opacity-30'
  }
})

const emit = defineEmits<{
  (e: 'emitTodo', emitTodo: ITodoItem): void
  (e: 'finishedTodo', finishedTodo: ITodoItem): void
}>()

const emitTodoItem = (item: ITodoItem) => {
  emit('emitTodo', item)
}
</script>

<template>
  <button @click="emitTodoItem(todo)" class="flex bg-white py-2 px-4 rounded items-center w-full">
    <div class="flex justify-between w-full items-center">
      <div class="flex items-center">
        <div
          class="w-4 h-4 rounded-full border-solid border flex-shrink-0 flex border-blue-dark mr-2"
        ></div>
        <p :class="finishTodo">{{ todo.text }}</p>
      </div>
      <img
        @click="emitTodoItem(todo)"
        class="h-3 w-3 z-50"
        src="../../public/images/icon-cross.svg"
      />
    </div>
  </button>
</template>
