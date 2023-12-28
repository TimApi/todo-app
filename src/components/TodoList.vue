<script setup lang="ts">
import type { ITodoItem } from '@/interface/TodoInterface'
import todoItem from '@/components/TodoItem.vue'

const props = defineProps<{
  todoList: ITodoItem[] | Set<ITodoItem>
}>()

const emit = defineEmits<{
  (e: 'removeTodoItem', removeTodoItem: ITodoItem): void
  (e: 'finishTodo', removeTofinishTododoItem: ITodoItem): void
}>()

const emitRemovedTodoItem = (removeTodoItem: ITodoItem) => {
  emit('removeTodoItem', removeTodoItem)
}

</script>

<template>
  <div
    class="shadow-black/80 w-full -mt-6 flex flex-col justify-center"
    v-if="todoList.length >= 1 || todoList.size"
  >
    <ul class="w-full">
      <li
        class="w-full border-b-2 border-solid border-gray"
        v-for="(todo, index) in todoList"
        :key="index"
      >
        <todoItem
          @emit-todo="emitRemovedTodoItem"
          :todo="todo"
        />
      </li>
    </ul>
  </div>
</template>
