<script setup>
import { useRecetteListStore } from "@/stores/recette";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

const route = useRoute();
const store = useRecetteListStore();
const { getOneById } = storeToRefs(store);

const recetteId = String(route.params.id);
const findRecette = getOneById.value(recetteId);
</script>

<template>

  <div class="recette-cards">  
    <p>Recette Details</p>
    <div class="card">
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
          <b>{{ findRecette.title }}</b>
        </li>
        <li>{{ findRecette.description }}</li>
        <li>
          <b class="b">Ingrédients: </b>{{ findRecette.ingredients.join(", ") }}
        </li>
        <li><b class="b">Nombre de personnes: </b>{{ findRecette.nbPerson }}</li>
        <li>
          <b class="b">Temps de préparation: </b
          >{{ findRecette.timeCooking }} minutes
        </li>
        <li>
          <b class="b">Difficulté: </b>{{ findRecette.difficultie }} sur 10
        </li>
        <div>
          <button>
            <RouterLink to="/">Retour</RouterLink>
          </button>
        </div>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
