<script setup>
import { ref } from 'vue';
import { useTodoListStore } from '@/stores/toDoList';

const todo = ref('')

const store = useTodoListStore();

const addItem = (item) => {
    if (item.length === 0) return
    store.addTodo(item);
    todo.value = '';
}

</script>

<template>
 <div>
    <form @submit.prevent="addItem(todo)">
        <input v-model="todo" type="text">
        <button>Ajouter</button>
    </form>
 </div>
</template>

<style scoped>

</style>
