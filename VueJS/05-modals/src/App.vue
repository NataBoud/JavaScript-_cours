<script setup>
import { ref, computed, reactive } from "vue";
import { v4 as newId } from "uuid";
import Modal from "./components/Modal.vue";


const modalVisible = ref("");
const resipes = reactive([])

const ingredients = ["sucre", "chocolat", "vanille", "farine", "noix", "sel", "levure", "crème fraîche", "farine", "oeufs", "beurre", "crème", "lait"];
const buttonDisabledComputed = computed(() => { return recipeFormInfos.nbPerson < 1 });
const incrementCount = () => recipeFormInfos.nbPerson++;
const decrementCount = () => recipeFormInfos.nbPerson--;

const recipeFormInfos = reactive({
  recipeInput: "",
  ingredients: [],
  nbPerson: 0,
});

const addRecipeHandler = () => {
  resipes.push({
    ...recipeFormInfos,
    picture: "https://source.unsplash.com/random/200x200?cake&sig=" + Math.floor(Math.random() * 100) + 1,
    id: newId()
  });
  recipeFormInfos.recipeInput = "";
  recipeFormInfos.ingredients = [];
  recipeFormInfos.nbPerson = 0;
  modalVisible.value = ""
};


let indexEnCoursEdition = 0;
const editRecipeHandler = () => {
  const recipeFound = resipes.find((_, index) => index === indexEnCoursEdition)
  // resipes[indexEnCoursEdition].recipeInput = recipeFormInfos.recipeInput;
  // resipes[indexEnCoursEdition].ingredients = recipeFormInfos.ingredients;
  // resipes[indexEnCoursEdition].nbPerson = recipeFormInfos.nbPerson;
  recipeFound.recipeInput = recipeFormInfos.recipeInput;
  recipeFound.ingredients = recipeFormInfos.ingredients;
  recipeFound.nbPerson = recipeFormInfos.nbPerson;
  recipeFormInfos.recipeInput = "";
  recipeFormInfos.ingredients = [];
  recipeFormInfos.nbPerson = 0;
  modalVisible.value = ""
};

const editButtonClickHandler = (index) => {
  indexEnCoursEdition = index;
  recipeFormInfos.recipeInput = resipes[index].recipeInput;
  recipeFormInfos.ingredients = resipes[index].ingredients;
  recipeFormInfos.nbPerson = resipes[index].nbPerson;
  modalVisible.value = "edit";
};

const emits = defineEmits(["deleteContent"]);
const deletContentClickHandler = () => { emits("deleteContent") };

</script>

<template>
  <Teleport to="body">
    <Modal v-if="modalVisible == 'add'" @modal-close="modalVisible = ''">

      <!-- <FormRecipe @add-recipe="resipes.push($event)"/> -->

      <form action="#" @submit.prevent="addRecipeHandler">
        <div>
          <label for="recipe">Nom de recette: </label>
          <input type="text" id="recipe" v-model="recipeFormInfos.recipeInput" />
        </div>

        <div>
          <label for="ingredients">Vos ingredients: </label>
          <select multiple v-model="recipeFormInfos.ingredients">
            <option v-for="ingr in ingredients" :value="ingr">{{ ingr }}</option>
          </select>
          <div>
            <span>Selectionnés:</span>
            <ul>
              <li v-for="ingr in recipeFormInfos.ingredients">{{ ingr }}</li>
            </ul>
          </div>
        </div>

        <div>
          <span>Nombre de personnes</span>
          <button type="button" class="btn" :disabled="buttonDisabledComputed" @click="decrementCount">-</button>
          <span>{{ recipeFormInfos.nbPerson }}</span>
          <button type="button" class="btn" @click="incrementCount">+</button>
        </div>

        <button>Ajouter</button>
      </form>

    </Modal>
  </Teleport>

  <Teleport to="body">
    <Modal v-if="modalVisible === 'edit'" @modal-close="modalVisible = ''">


      <form action="#" @submit.prevent="editRecipeHandler">
        <div>
          <label for="recipe">Nom de recette: </label>
          <input type="text" id="recipe" v-model="recipeFormInfos.recipeInput" />
        </div>

        <div>
          <label for="ingredients">Vos ingredients: </label>
          <select multiple v-model="recipeFormInfos.ingredients">
            <option v-for="ingr in ingredients" :value="ingr">{{ ingr }}</option>
          </select>
          <div>
            <span>Selectionnés:</span>
            <ul>
              <li v-for="ingr in recipeFormInfos.ingredients">{{ ingr }}</li>
            </ul>
          </div>
        </div>

        <div>
          <span>Nombre de personnes</span>
          <button type="button" class="btn" :disabled="buttonDisabledComputed" @click="decrementCount">-</button>
          <span>{{ recipeFormInfos.nbPerson }}</span>
          <button type="button" class="btn" @click="incrementCount">+</button>
        </div>

        <button>Editer</button>
      </form>
    </Modal>
  </Teleport>

   <div>
    <div class="container">
      <h1>Recettes des Gâteaux</h1>
      <button id="btn" @click="modalVisible = 'add'">
        Ajouter une recette
      </button>
    </div>
  </div>

  <div>
    <div class="card" v-for="(r, i) in resipes">
      <img :src="r.picture" alt="Random Cake" />
      <ul>
        <li>{{ r.recipeInput }}</li>
        <li>{{ r.nbPerson }}</li>
        <li>{{ r.ingredients.join(', ') }}</li>
        <button @click="editButtonClickHandler(i)">Editer</button>
        <button @click="deletContentClickHandler = resipes.splice(i, 1)">Supprimer</button>
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

div>button {
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

div>button:hover {
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

div>.card {
  aspect-ratio: 1 / 1.2;
  background-color: rgba(243, 235, 228, 0.891);
  border-radius: 2rem;
  display: grid;
  grid-template: 2fr 2fr 8fr / 1fr;
  color: hsl(0, 2%, 8%);
  box-shadow: 2px 2px 4px rgba(34, 33, 32, 0.3);
}

.card>img {
  width: 100%;
  border-radius: 2rem 2rem 0 0;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
</style>
