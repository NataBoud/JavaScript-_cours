<script setup>
import { ref, computed } from "vue";



const pseudo = ref("");
const pseudoUnputTouched = ref(false);
const btnConfirmerDisabled = computed(
  () => pseudo.value === "" || !pseudoUnputTouched
);
</script>

<template>
  <main>
    <h1><span>Vue</span><span>2000</span></h1>
    <form action="#" @submit.prevent="submitHandler">
      <label for="pseudo">Veillez entrez un psedeu: </label>
      <div>
        <input
          v-model="pseudo"
          type="text"
          id="pseudo"
          @input="pseudoUnputTouched = true"
          @change="pseudoUnputTouched = true"
        />
        <button :disabled="btnConfirmerDisabled">Confirmer</button>
      </div>
    </form>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
  span:last-child {
    color: hsla(160, 100%, 37%, 1);
  }
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > label {
    margin-bottom: 0.3rem;
  }
  > div > input {
    background-color: hsl(0, 0%, 10%);
    border: hsl(0, 0%, 45%) 0.05rem solid;
    border-radius: 0 0.25rem 0.25rem 0;
    margin-right: 0.55rem;
    padding: 0.45em 1em;
    color: hsl(0, 0%, 50%);
  }
  > div > button {
    background-color: hsla(160, 100%, 37%, 1);
    border: none;
    border-radius: 0.25em;
    padding: 0.45em 1em;
    cursor: pointer;
    border: hsla(160, 100%, 37%, 1) 0.03rem solid;
  }

  > div > button:is([disabled]) {
    background-color: hsl(0, 0%, 60%);
    color: hsl(0, 0%, 10%);
    border: hsl(0, 0%, 60%) 0.03rem solid;
  }

  > div > button:not([disabled]):hover {
    transition: 400ms ease;
    background-color: hsla(160, 100%, 37%, 0.8);
  }
}
</style>
