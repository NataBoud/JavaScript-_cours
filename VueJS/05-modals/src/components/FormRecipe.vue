<!-- <script setup>
import { ref, computed, reactive } from "vue";
import { v4 as newId } from "uuid";

const ingredients = ["sucre", "chocolat", "vanille", "farine", "noix", "sel", "levure", "crème fraîche", "farine", "oeufs", "beurre", "crème", "lait"];
const buttonDisabledComputed = computed(() => { return recipeFormInfos.nbPerson < 1 });
const incrementCount = () => recipeFormInfos.nbPerson++;
const decrementCount = () => recipeFormInfos.nbPerson--;

const recipeFormInfos = reactive({
    recipeInput: "",
    ingredients: [],
    nbPerson: 0,
});

const emitsAdd = defineEmits(['addRecipe'])
const emitsEdit = defineEmits(['editRecipe'])

const modalVisible = ref("");
const resipes = reactive([])

const submitRecipeHandler = () => {
    emitsAdd("addRecipe", {
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
    recipeFound.recipeInput = recipeFormInfos.recipeInput;
    recipeFound.ingredients = recipeFormInfos.ingredients;
    recipeFound.nbPerson = recipeFormInfos.nbPerson;
    recipeFormInfos.recipeInput = "";
    recipeFormInfos.ingredients = [];
    recipeFormInfos.nbPerson = 0;
    modalVisible.value = ""
};



// const emitsBtnAjouter = defineEmits(['emitsBtnAjouter'])

// const modalCloseWithBtnAjouter = () => {
//     emitsBtnAjouter('emitsBtnAjouter')
// }

</script>

<template>

    <form action="#" @submit.prevent="submitRecipeHandler">
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
            <button type="button" class="btn" :disabled="buttonDisabledComputed" @click="decrementCount">
                -
            </button>
            <span>{{ recipeFormInfos.nbPerson }}</span>
            <button type="button" class="btn" @click="incrementCount">+</button>
        </div>

        <button>Ajouter</button>
    </form>


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


</template>

<style scoped></style> -->
