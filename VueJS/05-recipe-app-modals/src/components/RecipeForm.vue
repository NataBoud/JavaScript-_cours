<script setup>
import { Teleport, reactive, computed } from "vue";
import { v4 as newId } from "uuid";

const props = defineProps({
  mode: {
    type: String,
    default: "add",
  },
  recipe: {
    type: Object,
    default: null,
  },
});

const recipeInfos = reactive({
  id: props.recipe ? props.recipe.id : undefined,
  title: props.recipe ? props.recipe.title : "",
  description: props.recipe ? props.recipe.description : "",
  ingredients: props.recipe ? props.recipe.ingredients : [],
  nbPerson: 0,
  timeCooking: props.recipe ? props.recipe.timeCooking : 0,
  difficultie: props.recipe ? props.recipe.difficultie : 0,
});

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
const buttonDisabledComputed = computed(() => {
  return recipeInfos.nbPerson < 1;
});
const incrementCount = () => recipeInfos.nbPerson++;
const decrementCount = () => recipeInfos.nbPerson--;

const emits = defineEmits(["addRecipe", "editRecipe", "closeModal"]);

const submitHandler = () => {
  if (props.mode === "add")
    emits("addRecipe", {
      ...recipeInfos,
      id: newId(),
    });
  else if (props.mode === "edit") emits("editRecipe", {...recipeInfos});
};
</script>

<template>
  <Teleport to="#app-modal">
    <div class="modal-bg" @click.self="$emit('closeModal')">
      <div class="modal-content">
        <form action="#" @submit.prevent="submitHandler">
          <!-- <p>je suis un formulaire en mode {{ mode }}</p> -->
          <div>
            <label for="title">Nom de recette: </label>
            <input type="text" id="title" v-model="recipeInfos.title" />
          </div>

          <div>
            <label for="description">Description: </label>
            <textarea
              id="description"
              cols="5"
              rows="3"
              style="resize: none"
              maxlength="150"
              v-model="recipeInfos.description"
            ></textarea>
          </div>

          <div>
            <label for="ingredients">Vos ingredients: </label>
            <select multiple v-model="recipeInfos.ingredients">
              <option v-for="ingr in ingredients" :value="ingr">
                {{ ingr }}
              </option>
            </select>
          </div>

          <div>
            <label class="ingredients">Selectionnés:</label>
            <li v-for="ingr in recipeInfos.ingredients">{{ ingr }}</li>
          </div>

          <div>
            <label for="nb-person">Nombre de personnes: </label>
            <div class="form">
              <button
                type="button"
                class="btn"
                :disabled="buttonDisabledComputed"
                @click="decrementCount"
              >
                -
              </button>
              <span>{{ recipeInfos.nbPerson }}</span>
              <button type="button" class="btn" @click="incrementCount">
                +
              </button>
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
              v-model="recipeInfos.timeCooking"
            />
            <!-- <span>{{ recipeInfos.timeCooking }} minutes</span>  -->
          </div>

          <div>
            <label for="nbVictims">Difficulté: </label>
            <input
              type="range"
              min="0"
              :max="10"
              id="difficultie"
              @input="recipeInfos.difficultie = +$event.target.value"
              :value="recipeInfos.difficultie"
            />
          </div>

          <div>
            <span>{{ recipeInfos.difficultie }} sur 10</span>
          </div>

          <button>
            {{
              mode.substring(0, 1).toUpperCase() +
              mode.substring(1).toLowerCase()
            }}
            la recette
          </button>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-bg {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: grid;
  place-content: center;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.modal-content {
  animation: fade 1s ease;
  height: 80dvh;
  padding: 5%;
  box-sizing: border-box;
  border-radius: 1.5rem;
  aspect-ratio: 1 / 1;
  background-color: hsl(0, 0%, 95%);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
}

form {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    padding: 0.5rem;

    .form {
      width: 80%;
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
      color: rgb(102, 70, 43);
      margin-right: 2rem;
    }

    > input,
    select,
    textarea {
      color: hsl(0, 0%, 9%);
      width: 80%;
      box-sizing: border-box;
      padding: 0.5em 1em;
      background-color: hsl(0, 10%, 92%);
      outline: none;
      border: 0.025em hsl(0, 3%, 70%) solid;
      border-radius: 0.7rem;
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
      background-color: rgb(102, 70, 43);
      margin: auto 0 0 auto;
      transition: all 400ms ease;
      box-shadow: inset 1px 1px 3px rgba(255, 255, 255, 0.4),
        1px 1px 3px rgba(0, 0, 0, 0.3);
    }
    .btn:hover {
      cursor: pointer;
      background-color: rgb(121, 95, 58);
    }
    > div .span {
      padding: 0.7em;
    }
  }
  > div:nth-child(5) > div > span {
    padding: 0.7em;
  }

  > div:nth-child(7) > input[type="range"] {
    accent-color: rgb(102, 70, 43);
    background-color: hsl(0, 10%, 92%);
    cursor: pointer;
  }

  > div:nth-child(8) > span {
    flex-basis: 100%;
    text-align: right;
    margin-left: auto;
  }

  > button:last-child {
    color: hsl(0, 0%, 95%);
    font-size: 1.3rem;
    border: none;
    border-radius: 1em;
    box-sizing: border-box;
    padding: 0.7em 1.4em;
    background-color: rgb(102, 70, 43);
    margin: auto 0 0 auto;
    transition: all 400ms ease;
    box-shadow: inset 1px 1px 3px rgba(255, 255, 255, 0.4),
      1px 1px 3px rgba(0, 0, 0, 0.3);
  }

  > button:last-child:hover {
    cursor: pointer;
    background-color: rgb(121, 95, 58);
  }
}
</style>
