<script setup>
const props = defineProps(["recipe"]);
const emits = defineEmits(["editRecipe", "deleteRecipe"]);

const picture =
  "https://source.unsplash.com/random/200x200?cake&sig=" +
  Math.floor(Math.random() * 100) +
  1;
</script>

<template>
  <div class="card">
    <img :src="picture" alt="Random Cake" />
    <ul>
      <li>
        <b>{{ recipe.title }}</b>
      </li>
      <li>{{ recipe.description }}</li>
      <li><b>Ingrédients: </b>{{ recipe.ingredients.join(", ") }}</li>
      <li><b>Nombre de personnes: </b>{{ recipe.nbPerson }}</li>
      <li><b>Temps de préparation: </b>{{ recipe.timeCooking }} minutes</li>
      <li><b>Difficulté: </b>{{ recipe.difficultie }} sur 10</li>
      <div>
        <button @click="$emit('editRecipe', recipe.id)">Editer</button>
        <button @click="$emit('deleteRecipe', recipe.id)">Supprimer</button>
      </div>
    </ul>
  </div>
</template>

<style scoped>
.card {
  aspect-ratio: 1 / 0.7;
  background-color: rgba(243, 235, 228, 0.891);
  border-radius: 2rem;
  display: grid;
  grid-template: 2fr 2fr 8fr / 1fr;
  color: hsl(0, 2%, 8%);
  box-shadow: 4px 7px  20px rgba(30, 30, 30, 0.3);

  > img {
    width: 100%;
    border-radius: 2rem 2rem 0 0;
    aspect-ratio: 1 / 0.7;
    object-fit: cover;
  }

  ul {
    align-items: center;
    padding: 0 1.5rem 1rem;
    margin-bottom: 1rem;

    > li:first-child > b {
      font-size: 1.8rem;
      justify-content: center;
      align-items: center;
      display: flex;
    }
    > li {
      list-style-type: none;
      padding: 0.5rem 0;

      b {
        padding-bottom: 0.3rem;
        padding-right: 0.7rem;
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
        border-radius: 0.8em;
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
</style>
