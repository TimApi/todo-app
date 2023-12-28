<script setup lang="ts">
import inputVue from '@/components/Input.vue'
import Footer from '../components/Footer.vue'
import TodoList from '@/components/TodoList.vue'
import type { ITodoItem, IListType } from '../interface/TodoInterface'
import { computed, ref } from 'vue'

const activeListType = ref<IListType>('activeTodoList')
const todoActiveList = ref<ITodoItem[]>([])
const todoCompletedList = ref<ITodoItem[]>([])

const addTodo = (item: ITodoItem) => {
  if (item.listType === 'activeTodoList') {
    todoActiveList.value.push(item)
  }
}

const removeTodoItem = (item: ITodoItem) => {
  if (item.listType === 'activeTodoList') {
    const index = todoActiveList.value.indexOf(item)
    if (index > -1) {
      todoActiveList.value.splice(index, 1)
    }
    todoCompletedList.value.push(item)
  }
}

const setListActiveListType = (activeListItem: IListType) => {
  activeListType.value = activeListItem
}

const allTodos = computed(() => {
  const allTodoArray = todoActiveList.value.concat(todoCompletedList.value)
  return new Set(allTodoArray)
})

const clearTodoList = () => {
  todoCompletedList.value = []
}
</script>

<template>
  <main>
    <header class="w-full h-[300px] bg-desktop-dark bg-no-repeat">
      <div class="container">
        <div class="flex pt-12 h-full justify-between items-center">
          <h1 class="uppercase text-white text-3xl font-bold tracking-[20px]">todo</h1>
          <img class="h-6 w-6" src="../../public/images/icon-moon.svg" />
        </div>
        <div class="flex w-full justify-center">
          <inputVue @todo="addTodo" />
        </div>
      </div>
    </header>
    <div class="container">
      <div>
        <TodoList
          v-if="activeListType === 'activeTodoList'"
          @remove-todo-item="removeTodoItem"
          :todo-list="todoActiveList"
        />
        <TodoList
          v-else-if="activeListType === 'CompletedTodoList'"
          @remove-todo-item="removeTodoItem"
          :todo-list="todoCompletedList"
        />
        <TodoList v-else @remove-todo-item="removeTodoItem" :todo-list="allTodos" />
      </div>
    </div>
    <Footer
      :todo-list="todoActiveList"
      @active-list-type="setListActiveListType"
      @clear-completed="clearTodoList"
    />
  </main>
</template>
