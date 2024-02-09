<script setup>
import { computed, ref } from "vue";
// const emits = defineEmits(["logOut"]);

// Récupération de pseudo avec props
const props = defineProps({
  getPseudo: String
})
// Date
const formattedDateTime = computed(() => {
  const option = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  return new Date().toLocaleDateString('fr-FR', option);
})
// Se déconnecter avec emit

const userStartApp = ref(false)

const emit = defineEmits(['update:userStartApp'])

const toggleUserstartApp = () => {
  userStartApp.value = !userStartApp.value;
  emit('update:userStartApp', userStartApp.value) // =>
  // => emmetre l'évènement avec la nouvelle valeur
  
}



</script>

<template>
  <div>
    <h3>Bienvenue {{ getPseudo }}</h3>
    <p>Nous sommes le {{ formattedDateTime }}</p>
    <button @click="toggleUserstartApp">Se déconnecter</button>
  </div>
</template>

<style scoped>

div {
  text-align: center;

  >button {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  >button {
    background-color: hsla(160, 100%, 37%, 1);
    border: none;
    border-radius: 0.25em;
    padding: 0.45em 1em;
    cursor: pointer;
    border: hsla(160, 100%, 37%, 1) 0.03rem solid;
  }
}

</style>
