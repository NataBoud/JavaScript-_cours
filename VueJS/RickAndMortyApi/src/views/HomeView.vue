<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/character/";
const characters = ref([]);

onMounted(async () => {
  try {
    const res = await axios.get(BASE_URL);
    if (res.status !== 200) return;
    res.data.results.forEach((char) => {
      characters.value.push({ name: char.name, image: char.image });
    });

    console.log(characters.value);
    
  } catch (error) {
    console.error(err);
  }
});


</script>

<template>
  <main>
    <h1>Coucou</h1>

    <!-- <div class="cards">
      <div v-for="character in characters" :key="character.id">
        <img :src="character.image" :alt="character.name" />
        <ul>
          <li>{{ character.name }}</li>
          
        </ul>
      </div>
    </div> -->
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
