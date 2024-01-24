<script setup>
import { defineProps } from 'vue'

const props = defineProps(['theme', 'btnText', 'ftSize'])

const btnClasses = {
    'btn-cta': props.theme === 'cta',
    'btn-danger': props.theme === 'danger',
}

const btnStyles = {
    fontSize: props.ftSize ?? '16px'
}
</script>

<template>
    <button :style="btnStyles" :class="btnClasses">{{ btnText }}</button>
</template>

<style scoped>
button {
    background-color: green;
    border: none;
    padding: 0.25em 0.5em;
    border-radius: 0.25em;
    font-size: 1.2rem;
    color: hsl(0, 0%, 95%);
    margin-block: 0.5em;
}
.btn-cta {
    background-color: rgb(84, 42, 182);
}

.btn-danger {
    background-color: rgb(233, 9, 9);
}
</style>