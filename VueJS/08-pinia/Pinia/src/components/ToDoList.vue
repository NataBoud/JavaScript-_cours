<script setup>
import { useTodoListStore } from '@/stores/toDoList';
import { storeToRefs } from 'pinia';

const store = useTodoListStore();
const { todoList } = storeToRefs(store)
const { toggleCompleted, deleteTodo } = store;

</script>

<template>
  <div v-for="todo in todoList" :key="todo.id">
    <span :class="{ completed: todo.completed }">{{ todo.item }} </span>
    <span class="emogi" @click="toggleCompleted(todo.id)">&#10004;</span>
    <span class="emogi" @click="deleteTodo(todo.id)">&#10060;</span>
  </div>
</template>

<style scoped>
.emogi {
  cursor: pointer;
  border: solid 1px black;
  padding: 0.15em;
}
 .completed {
  text-decoration: line-through;
 }

</style>
