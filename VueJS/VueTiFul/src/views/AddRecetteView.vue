<script setup>
import AddRecette from '@/components/AddRecette.vue';

</script>

<template>
  <div class="about">
    <h1>Page d'ajout</h1>
    <AddRecette/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    /* display: flex;
    align-items: center; */
  }
}
</style>
