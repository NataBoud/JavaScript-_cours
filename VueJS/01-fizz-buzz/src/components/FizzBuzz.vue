<script setup>
import { ref, computed } from "vue";

let count = ref(1);

const buttonDisabledComputed = computed(() => {
  return count.value < 1;
});

const incrementCount = () => count.value++;
const decrementCount = () => count.value--;

const displayCount = computed(() => {
  if (count.value % 3 === 0 && count.value % 5 === 0 && count.value !== 0) {
    return " FizzBuzz";
  } else if (count.value % 3 === 0 && count.value !== 0) {
    return " Fizz";
  } else if (count.value % 5 === 0 && count.value !== 0) {
    return " Buzz";
  } else return count.value;
});
</script>

<template>
  <h1>Compteur FizzBuzz</h1>
  <button :disabled="buttonDisabledComputed" @click="decrementCount">-</button>
  <span >{{ displayCount }}</span>
  <button @click="incrementCount">+</button>
</template>

<style scoped>
button {
  background-color: rgb(144, 17, 17);
  font-size: 2em;
  padding: 0.5em 1em;
  color: hsl(0, 0%, 95%);
  border-radius: 0.5em;
  border: none;
  margin: 0.7em;
  transition: background-color 400ms ease, scale 400ms ease;
}

button:not([disabled]):hover {
  background-color: rgb(172, 32, 32);
  cursor: pointer;
  scale: 1.02;
}

button:is([disabled]) {
  background-color: gray;
}

span {
  display: inline-block;
  width: 7em;
  font-size: 2em;
}
</style>
