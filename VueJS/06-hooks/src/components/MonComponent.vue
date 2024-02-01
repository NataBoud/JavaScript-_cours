<script setup>
import { onMounted, onUnmounted } from 'vue'


onMounted(() => {
    console.log('onMounted');
})

onUnmounted(() => {
    console.log('onUnmounted');
})

</script>

<template>
    <p>Mon paragraphe</p>
</template>

<style scoped>

</style>
