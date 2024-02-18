<script setup>
import { computed } from "vue";
import { useRecetteListStore } from "@/stores/recette";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

const route = useRoute();
const store = useRecetteListStore();
const { getOneById } = storeToRefs(store);
// const { deleteRecette, editRecette } = store;

const recetteId = String(route.params.id);
const findRecette = getOneById.value(recetteId);

const buttonDisabledComputed = computed(() => {
  return findRecette.nbPerson < 1;
});

const incrementCount = () => findRecette.nbPerson++;
const decrementCount = () => findRecette.nbPerson--;

const ingredients = [
  "sucre",
  "chocolat",
  "vanille",
  "farine",
  "noix",
  "sel",
  "levure",
  "crème fraîche",
  "farine",
  "oeufs",
  "beurre",
  "crème",
  "lait",
];

</script>

<template>
  
  <div class="form-content">
    <h2>Edition de {{ findRecette.title }}</h2>
    <form
      action="#"
      @submit.prevent=" $router.push('/')"
    >
      <div>
        <label for="title">Nom de recette: </label>
        <input type="text" id="title" v-model="findRecette.title" />
      </div>

      <div>
        <label for="description">Description: </label>
        <textarea
          id="description"
          cols="5"
          rows="3"
          style="resize: none"
          maxlength="150"
          v-model="findRecette.description"
        ></textarea>
      </div>

      <div>
        <label for="ingredients">Vos ingredients: </label>
        <select multiple v-model="findRecette.ingredients">
          <option v-for="ingr in ingredients" :value="ingr">
            {{ ingr }}
          </option>
        </select>
      </div>

      <div>
        <label class="ingredients">Selectionnés:</label>
        <li v-for="ingr in findRecette.ingredients">{{ ingr }}</li>
      </div>

      <div>
        <label for="nb-person">Nombre de personnes: </label>
        <div class="form">
          <button
            type="button"
            class="btn"
            @click="decrementCount"
            :disabled="buttonDisabledComputed"
          >
            -
          </button>
          <span>{{ findRecette.nbPerson }}</span>
          <button type="button" class="btn" @click="incrementCount">+</button>
        </div>
      </div>

      <div>
        <label for="time-cooking">Temps de préparation (minutes): </label>
        <input
          type="number"
          id="time-cooking"
          name="time-cooking"
          min="1"
          max="1000"
          v-model="findRecette.timeCooking"
        />
        <span>{{ findRecette.timeCooking }} minutes</span>
      </div>

      <div>
        <label for="difficultie">Difficulté: </label>
        <input
          type="range"
          min="0"
          :max="10"
          id="difficultie"
          @input="findRecette.difficultie = +$event.target.value"
          :value="findRecette.difficultie"
        />
      </div>

      <div>
        <span>{{ findRecette.difficultie }} sur 10</span>
      </div>
      <div>
         <button>Valider</button>
      </div>
     
    </form>
  </div>
</template>

<style scoped>
.form-content {
  animation: fade 1s ease;
  height: 90dvh;
  padding: 5%;
  box-sizing: border-box;
  border-radius: 1.5rem;
  aspect-ratio: 1 / 1;
  background-color: hsl(0, 0%, 95%);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
}

form {
  height: 50dvh;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    padding: 0.5rem;


    .form {
      width: 80%;
      height: 80%;
    }
    .ingredients {
      width: 21ch;
    }

    > label,
    input {
      font-size: 1rem;
    }

    > label {
      width: 25ch;
      color: #647eff;
      margin-right: 2rem;
    }

    > input,
    select,
    textarea {
      color: hsl(0, 0%, 9%);
      width: 80%;
      box-sizing: border-box;
      padding: 0.5em 1em;
      background-color: hsl(0, 0%, 95%);
      outline: none;
      border: 0.025em hsl(0, 0%, 71%) solid;
      border-radius: 0.7rem;
    }
    span{
      width: 20%;
      text-align: end;
    }
    #time-cooking {
      margin-left: 2rem;
    }

    > li {
      list-style-type: none;
      padding: 0.5rem;
    }

    .btn {
      color: hsl(0, 0%, 95%);
      font-size: 1rem;
      border: none;
      border-radius: 0.7em;
      box-sizing: border-box;
      padding: 0.5em 1em;
      background: #647eff;
      margin: auto 0 0 auto;
      transition: all 400ms ease;
      box-shadow: inset 1px 1px 3px rgba(255, 255, 255, 0.4),
        1px 1px 3px rgba(0, 0, 0, 0.3);
    }
    .btn:hover {
      cursor: pointer;
      background-color: #4f6dff;
    }
    > div .span {
      padding: 0.7em;
    }
  }
  > div:nth-child(5) > div > span {
    padding: 0.7em;
  }

  > div:nth-child(7) > input[type="range"] {
    accent-color: #647eff;
    background-color: hsl(0, 10%, 92%);
    cursor: pointer;
  }

  > div:nth-child(8) > span {
    flex-basis: 100%;
    text-align: right;
    margin-left: auto;
  }

  > div button:last-child {
    color: hsl(0, 0%, 95%);
    font-size: 1rem;
    border: none;
    border-radius: 1em;
    box-sizing: border-box;
    padding: 0.7em 1.4em;
    background: #647eff;
    margin: 2rem 0 0 auto;
    transition: all 400ms ease;
    box-shadow: inset 1px 1px 3px rgba(255, 255, 255, 0.4),
      1px 1px 3px rgba(0, 0, 0, 0.3);
  }

  > button:last-child:hover {
    cursor: pointer;
    background-color: #4f6dff;
  }
}
</style>
