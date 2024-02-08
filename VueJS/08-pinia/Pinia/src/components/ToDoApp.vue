<script setup>
import ToDoForm from './ToDoForm.vue';
import ToDoList from './ToDoList.vue';

</script>

<template>
    <div class="todo-app">
        <h1>Todo List</h1>
        <ToDoForm />
        <ToDoList />
    </div>
</template>

<style scoped>
.todo-app {
    padding: 7vh;
    min-height: 100vh;
    width: 30vw;
    background-color: rgb(243, 243, 235);
    border-radius: 1em;
    
}
</style>
