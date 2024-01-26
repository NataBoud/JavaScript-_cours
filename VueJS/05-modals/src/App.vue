<script setup>
import { ref, computed, reactive } from "vue";
import { v4 as newId } from "uuid";

import Modal from "./components/Modal.vue";



// const recipeFormInfos = reactive({
//   recipeInput: "",
//   ingrChoix: "",
//   nbPerson: 1,
// });

// const addRecipeHandler = () => {
//       const recipeObj = {
//           ...recipeFormInfos,
//           id: newId()
//       }
//       recipeFormInfos.push(recipeObj)

//       recipeFormInfos.name = "";
//       recipeFormInfos.ingrChoix = "";
//       recipeFormInfos.nbPerson = 1;
//   }

const resipes = ref([])
const addRecipeHandler = () => {
  const recipeObj = {
    recipeInput: "",
    ingredients: [],
    nbPerson: 0,
   
  };
  resipes.value.push(...recipeObj);
  // resipes.value.push(recipeInput.value);

  ingredients.value = [],
  nbPerson.value = 0,
  recipeInput.value = "";
  modalVisible.value = "";
};

const ingredients = ["sucre", "chocolat", "vanille", "farine", "citron"];
const randomPictureURL = "https://source.unsplash.com/random/200x200?cake&sig=" + Math.floor(Math.random() * 100) + 1;

const emits = defineEmits(["deleteContent"]);
const deletContentClickHandler = () => {
  emits("deleteContent");
};

const nbPerson =  ref(1)
const buttonDisabledComputed = computed(() => { return nbPerson.value < 1 });
const incrementCount = () => nbPerson.value++;
const decrementCount = () => nbPerson.value--;
const displaynbPerson = computed(() => {
  if (nbPerson.value !== 0) return nbPerson.value;
});

// if (localStorage.getItem("resipes")) {
//   resipes.value = JSON.parse(localStorage.getItem("resipes"));
// }

const modalVisible = ref("");
let indexEnCoursEdition = 0;



const editButtonClickHandler = (index) => {
  indexEnCoursEdition = index;
  recipeInput.value = resipes.value[index];
  modalVisible.value = "edit";
};

const editPrenomHandler = () => {
  resipes.value[indexEnCoursEdition] = recipeInput.value;
  // localStorage.setItem("resipes", JSON.stringify(resipes.value));
  recipeInput.value = "";
  modalVisible.value = "";
  console.log(resipes.value);
};
</script>

<template>
  <Teleport to="body">
    <Modal v-if="modalVisible == 'add'" @modal-close="modalVisible = ''">
      <form action="#" @submit.prevent="addRecipeHandler">
        <div>
          <label for="recipe">Nom de recette: </label>
          <input type="text" id="recipe" v-model="recipeInput" />
        </div>

        <div>
          <label for="ingredients">Vos ingredients: </label>
          <input
            type="text"
            list="ingredients"
            @input="ingrChoix = $event.target.value"
          />

          <datalist id="ingredients">
            <option v-for="ingr in ingredients" :value="ingr"></option>
          </datalist>

          <ul v-if="ingrChoix">
            <li
              v-for="ingrA in ingredients.filter((ingrB) =>
                ingrB.includes(ingrChoix)
              )"
            >
              {{ ingrA }}
            </li>
          </ul>
        </div>

        <div>
          <span>Nombre de personnes</span>
          <button
            class="btn"
            :disabled="buttonDisabledComputed"
            @click="decrementCount"
          >
            -
          </button>
          <span>{{ displaynbPerson }}</span>
          <button class="btn" @click="incrementCount">+</button>
        </div>

        <button>Ajouter</button>
      </form>
    </Modal>
  </Teleport>

  <Teleport to="body">
    <Modal v-if="modalVisible === 'edit'" @modal-close="modalVisible = ''">
      <form action="#" @submit.prevent="editPrenomHandler">
        <div>
          <label for="firstname">Firstname: </label>
          <input type="text" id="firstname" v-model="prenomInput" />
        </div>
        <button>Editer</button>
      </form>
    </Modal>
  </Teleport>

  <div>
    <div class="container">
      <h1>Recettes des Gâteau au Chocolat</h1>
      <button id="btn" @click="modalVisible = 'add'">
        Ajouter une recette
      </button>
    </div>
  </div>

  <div>
    <div class="card" v-for="(p, i) in resipes">
      <img :src="randomPictureURL" alt="Random Cake" />
      <ul>
        <!-- TODO: Faire une transition sur les <li> -->
        <li>
          {{ p }}
          <button @click="editButtonClickHandler(i)">Editer</button>
          <button @click="deletContentClickHandler = resipes.splice(i, 1)">
            Supprimer
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
div > button {
  margin: 0 9.5em;
  background-color: rgb(102, 70, 43);
  padding: 0.65em 0.9em;
  border-radius: 1.5em;
  color: hsl(0, 0%, 85%);
  font-size: 1.3rem;
  font-weight: 700;
  border: none;
  transition: background-color 400ms ease, scale 400ms ease;
  transform-origin: right;
}

div > button:hover {
  cursor: pointer;
  background-color: rgb(121, 95, 58);
}

.btn {
  margin: 0 0.5em;
  padding: 0.2em 0.5em;
  background-color: rgb(102, 70, 43);
  color: hsl(0, 0%, 85%);
  font-size: 1.3rem;
  font-weight: 700;
  border: none;
  transform-origin: right;
}

div > .card {
  aspect-ratio: 1 / 1.2;
  background-color: rgba(243, 235, 228, 0.891);
  border-radius: 2rem;
  display: grid;
  grid-template: 2fr 2fr 8fr / 1fr;
  color: hsl(0, 0%, 95%);
  box-shadow: 2px 2px 4px rgba(34, 33, 32, 0.3);
}
.card > img {
  width: 100%;
  border-radius: 2rem 2rem 0 0;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
</style>
