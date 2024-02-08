<script setup>
import { ref, reactive, computed } from "vue";
import RecipeForm from "./components/RecipeForm.vue";
import RecipeDisplay from "./components/RecipeDisplay.vue";

const recipes = ref([]);
const recipeModalFormMode = ref("");
const recipeBeingEdited = reactive({});

const startAddRecipeHandler = () => {
  for (const key in recipeBeingEdited) {
    recipeBeingEdited[key] = "";
  }
  recipeBeingEdited.nbPerson = 0,
  recipeBeingEdited.difficultie = 0
  recipeModalFormMode.value = "add";
};

const addRecipeHandler = (recipe) => {
  recipes.value.push(recipe);
  recipeModalFormMode.value = "";
};

// Ici les valeurs nBperson et difficultie se mettent par default alors qu'ils doivent avoir une valeur donnée par utilisateur lors de la creation de recrette
const startEditRecipeHandler = (recipeId) => {
  const recipeFound = recipes.value.find((r) => r.id === recipeId);
  if (recipeFound) {
    for (const key in recipeFound) {
      recipeBeingEdited[key] = recipeFound[key];
    }
    recipeModalFormMode.value = "edit";
  }
};

const editRecipeHandler = (recipe) => {
  const recipeFound = recipes.value.find((r) => r.id === recipe.id);
  if (recipeFound) {
    recipeFound.title = recipe.title;
    recipeFound.description = recipe.description;
    recipeFound.ingredients = recipe.ingredients;
    recipeFound.nbPerson = recipe.nbPerson;
    recipeFound.timeCooking = recipe.timeCooking;
    recipeFound.difficultie = recipe.difficultie;
  }
  recipeModalFormMode.value = "";
};

const deleteRecipeHandler = (recipeId) => {
  const recipeFound = recipes.value.find((r) => r.id === recipeId);
  if (recipeFound) {
    if (confirm("Etes-vous sûr ?")) {
      recipes.value = recipes.value.filter((r) => r !== recipeFound);
    }
  }
};
</script>

<template>
  <div>
    <div class="container">
      <h1>Recettes des Gâteaux</h1>
      <button @click="startAddRecipeHandler">Ajouter</button>

      <RecipeForm
        v-if="recipeModalFormMode"
        :mode="recipeModalFormMode"
        @close-modal="recipeModalFormMode = ''"
        @add-recipe="addRecipeHandler"
        @edit-recipe="editRecipeHandler"
        :recipe="recipeBeingEdited"
        
      />
    </div>
  </div>
  <h3 v-if="recipes.length === 0">Pas de recette...</h3>
  <template v-else>
    <div>
      <RecipeDisplay
        v-for="r in recipes"
        :recipe="r"
        @edit-recipe="startEditRecipeHandler"
        @delete-recipe="deleteRecipeHandler"
      />
    </div>
  </template>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h3 {
  padding: 2em;
  color: rgb(102, 70, 43);
  text-align: center;
}

div > button {
  margin: 0 9.5em;
  background-color: rgb(102, 70, 43);
  padding: 0.8em 1.4em;
  border-radius: 0.9em;
  color: hsl(0, 0%, 95%);
  font-size: 1.3rem;
  font-weight: 700;
  border: none;
  transition: all 400ms ease;
  box-shadow: inset 1px 1px 3px rgba(255, 255, 255, 0.4),
    1px 1px 3px rgba(0, 0, 0, 0.3);
}

div > button:hover {
  cursor: pointer;
  background-color: rgb(121, 95, 58);
}
</style>
