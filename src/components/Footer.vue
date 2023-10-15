<script setup lang="ts">
import type { ITodoItem } from '@/interface/TodoInterface';
const props = defineProps<{
  todoList: ITodoItem[]
}>()
</script>

<template>
  <div class="container">
    <p >{{ todoList.length }} items left</p>
  </div>
</template>
