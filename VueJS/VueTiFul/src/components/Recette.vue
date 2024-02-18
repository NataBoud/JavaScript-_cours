<script setup>
import { useRecetteListStore } from "@/stores/recette";
import { storeToRefs } from "pinia";

const store = useRecetteListStore();

const { recetteList } = storeToRefs(store);

</script>

<template>
  <div class="recette-cards">
    <div
      v-for="recette in recetteList"
      :key="recette.id"
      class="card"
      @click="
        $router.push({
          name: 'recette-detail',
          params: { id: recette.id },
        })
      "
    >
      <img
        :src="
          'https://source.unsplash.com/random/500x500?food&sig=' +
          Math.floor(Math.random() * 100) +
          1
        "
        alt="Food Cake"
      />
      <ul>
        <li>
          <b>{{ recette.title }}</b>
        </li>
        <!-- <li>{{ recette.description }}</li> -->
        <li>
          <b class="b">Ingrédients: </b>{{ recette.ingredients.join(", ") }}
        </li>
        <li><b class="b">Nombre de personnes: </b>{{ recette.nbPerson }}</li>
        <li>
          <b class="b">Temps de préparation: </b
          >{{ recette.timeCooking }} minutes
        </li>
        <li><b class="b">Difficulté: </b>{{ recette.difficultie }} sur 10</li>
        
      </ul>
    </div>
  </div>
</template>

<style scoped>
.recette-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: start;
  cursor: pointer;

  .card {
    max-width: 25%;
    background-color: aliceblue;
    border-radius: 3rem;
    display: grid;
    color: hsl(0, 2%, 8%);
    box-shadow: 4px 7px 20px rgba(30, 30, 30, 0.3);
    aspect-ratio: 1 / .2;
    cursor: pointer;
    > img {
      width: 100%;
      border-radius: 3rem 3rem 0 0;
      aspect-ratio: 1 / .9;
      object-fit: cover;
    }

    ul {
      align-items: center;
      padding: 0 1.8rem 1.8rem;

      > li:first-child > b {
        font-size: 1.8rem;
        justify-content: center;
        align-items: center;
        display: flex;
        font-weight: 600;
        color: hsl(0, 0%, 36%);
           margin-top: .7rem;
      }
      > li {
        list-style-type: none;
        
        .b {
          padding-bottom: 0.3rem;
          padding-right: 0.7rem;
          font-weight: 600;
          color: hsl(0, 0%, 42%);
        }
      }

    
    }
  }
}
</style>
