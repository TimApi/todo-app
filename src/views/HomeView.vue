<script setup lang="ts">
import inputVue from '@/components/Input.vue'
import todoItem from '@/components/TodoItem.vue'
import Footer from '../components/Footer.vue'
import type { ITodoItem } from '../interface/TodoInterface'
import { ref } from 'vue'

const todoList = ref<ITodoItem[]>([])
const todoCompleted = ref<ITodoItem[]>([])

const addTodo = (todoItem: ITodoItem) => {
  if (todoList) todoList.value.push(todoItem)
}

const removeTodoItem = (item: ITodoItem) => {
  const index = todoList.value.indexOf(item)
  if (index > -1) {
    todoList.value.splice(index, 1)
  }
}

const finishedTodo = (todo: ITodoItem) => {
  console.log(todo)
  console.log(todoCompleted.value)
  todoCompleted.value.push(todo)
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
      <div
        class="shadow-black/80 w-full -mt-6 flex flex-col justify-center"
        v-if="todoList.length >= 1"
      >
        <ul class="w-full">
          <li
            class="w-full border-b-2 border-solid border-gray"
            v-for="(todo, index) in todoList"
            :key="index"
          >
            <todoItem @emit-todo="removeTodoItem" @finished-todo="finishedTodo" :todo="todo" />
          </li>
        </ul>
        <Footer :todo-list="todoList" />
      </div>
    </div>
  </main>
</template>
