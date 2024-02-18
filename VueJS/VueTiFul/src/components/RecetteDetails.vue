<script setup>
import { useRecetteListStore } from "@/stores/recette";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

const route = useRoute();
const store = useRecetteListStore();
const { getOneById } = storeToRefs(store);
const { deleteRecette, editRecette } = store;

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
        <li>
          <b class="b">Nombre de personnes: </b>{{ findRecette.nbPerson }}
        </li>
        <li>
          <b class="b">Temps de préparation: </b
          >{{ findRecette.timeCooking }} minutes
        </li>
        <li>
          <b class="b">Difficulté: </b>{{ findRecette.difficultie }} sur 10
        </li>
        <div>
          <button
            @click="
              editRecette(findRecette.id),
                $router.push({
                  name: 'recette-edit',
                  params: { id: findRecette.id },
                })
            "
          >
            Editer
          </button>
         
          <button>
            <RouterLink to="/">Retour</RouterLink>
          </button> 
          <button @click="deleteRecette(findRecette.id), $router.push('/')">Supprimer</button>
        </div>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.card {
  min-width: 20%;

  display: grid;
  color: hsl(0, 2%, 8%);

  cursor: pointer;
  > img {
    width: 100%;

    aspect-ratio: 1 / 0.3;
    object-fit: cover;
  }
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
    > button:nth-child(2) {
      background-color: #647eff;
      margin-right: 0.5rem;
    }
    > button:last-child {
      background-color: rgb(190, 61, 61);
    }
    > button:last-child:hover {
      background-color: rgb(210, 75, 75);
    }
  }
}
</style>
