<script setup>
import { useRecetteListStore } from "@/stores/recette";
import { storeToRefs } from "pinia";

const store = useRecetteListStore();

const { recetteList } = storeToRefs(store);
const { deleteRecette } = store;
</script>

<template>
  <div class="recette-cards">
    <div v-for="recette in recetteList" :key="recette.id" class="card" @click="$router.push({ 
        name: 'recette-detail', 
        params: { id: recette.id } 
        })">
      <img
        :src="
          'https://source.unsplash.com/random/350x350?food&sig=' +
          Math.floor(Math.random() * 100) +
          1
        "
        alt="Food Cake"
      />
      <ul>
        <li>
          <b>{{ recette.title }}</b>
        </li>
        <li>{{ recette.description }}</li>
        <li>
          <b class="b">Ingrédients: </b>{{ recette.ingredients.join(", ") }}
        </li>
        <li><b class="b">Nombre de personnes: </b>{{ recette.nbPerson }}</li>
        <li>
          <b class="b">Temps de préparation: </b
          >{{ recette.timeCooking }} minutes
        </li>
        <li><b class="b">Difficulté: </b>{{ recette.difficultie }} sur 10</li>
        <div>
          <button @click="">Editer</button>
          <button @click="deleteRecette(recette.id)">Supprimer</button>
          
        </div>
        <!-- <RouterLink
            :to="{
              name: 'recette-detail',
              params: { id: recette.id },
            }"
          >
            Détails
          </RouterLink> -->
      </ul>
    </div>
  </div>
</template>

<style scoped>
.recette-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  cursor: pointer;

  .card {
    min-width: 20%;
    background-color: rgba(243, 235, 228, 0.891);
    border-radius: 2rem;
    display: grid;
    color: hsl(0, 2%, 8%);
    box-shadow: 4px 7px 20px rgba(30, 30, 30, 0.3);
    aspect-ratio: 1 / 0.9;

    > img {
      width: 100%;
      border-radius: 2rem 2rem 0 0;
      aspect-ratio: 1 / 0.5;
      object-fit: cover;
    }

    ul {
      align-items: center;
      padding: 0 1.5rem 1rem;

      > li:first-child > b {
        font-size: 1.8rem;
        justify-content: center;
        align-items: center;
        display: flex;
        font-weight: 600;
        color: hsl(0, 0%, 36%);
      }
      > li {
        list-style-type: none;
        padding: 0.5rem 0;
        .b {
          padding-bottom: 0.3rem;
          padding-right: 0.7rem;
          font-weight: 600;
          color: hsl(0, 0%, 42%);
        }
      }

      div {
        text-align: end;
        margin-top: 1rem;

        > button {
          padding: 0.175rem 0, 3rem;
          color: hsl(0, 0%, 95%);
          font-size: 0.8rem;
          border: none;
          border-radius: 0.5em;
          padding: 0.8em 1.4em;
          transition: all 400ms ease;
          cursor: pointer;
          box-shadow: inset 1px 1px 3px rgba(255, 255, 255, 0.4),
            1px 1px 3px rgba(0, 0, 0, 0.3);
        }
        > button:first-child {
          margin-right: 0.5rem;
          background-color: rgb(191, 122, 38);
        }
        > button:first-child:hover {
          background-color: rgb(205, 144, 69);
        }
        > button:last-child {
          background-color: rgb(190, 61, 61);
        }
        > button:last-child:hover {
          background-color: rgb(210, 75, 75);
        }
      }
    }
  }
}
</style>
