<script setup>
import AddItem from "../components/AddItem.vue";
</script>

<template>
  <div class="products">
    <h1>This is an add products page</h1>
    <AddItem />
  </div>
</template>

<style scoped>
.products {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
