<script setup lang="ts">
import type { ITodoItem, IListType } from '@/interface/TodoInterface'
const props = defineProps<{
  todoList: ITodoItem[]
}>()

const emit = defineEmits(['activeListType', 'clearCompleted'])

const emitType = (type: IListType) => {
  emit('activeListType', type)
}

const emitClearTodoList = () => {
  emit('clearCompleted')
}
</script>

<template>
  <div class="container">
    <p>{{ todoList.length }} items left</p>
    <div class="flex justify-between">
      <ul class="flex gap-4">
        <li @click="emitType('allTodo')">
          <button>All</button>
        </li>
        <li @click="emitType('activeTodoList')">
          <button>Active</button>
        </li>
        <li @click="emitType('CompletedTodoList')">
          <button>Completed</button>
        </li>
      </ul>
      <button @click="emitClearTodoList">Clear completed</button>
    </div>
  </div>
</template>
