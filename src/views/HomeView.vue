<script setup lang="ts">
import inputVue from '@/components/Input.vue'
import todoItem from '@/components/TodoItem.vue'
import { ref } from 'vue'

export interface ITodo {
  text: string
}


const todoList = ref<ITodo[]>([])

const addTodo = (todoItem: ITodo) => {
  todoList.value.push(todoItem.text)
}
</script>

<template>
  <main>
    <header class="w-full h-[300px] bg-desktop-dark bg-no-repeat">
      <div class="container">
        <div class="flex pt-12 h-full justify-between">
          <h1 class="uppercase text-white text-3xl font-bold tracking-[20px]">todo</h1>
          <img class="h-6 w-6" src="../../public/images/icon-moon.svg" />
        </div>
        <inputVue @todo="addTodo" />
      </div>
    </header>
    <div class="container">
      <ul>
        <li v-for="(todo, index) in todoList" :key="index">
          <todoItem />
          {{ todo.text }}
        </li>
      </ul>
    </div>
  </main>
</template>
