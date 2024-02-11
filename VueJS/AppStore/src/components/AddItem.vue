<script setup>
import { reactive } from "vue";
import { useProduitListStore } from "@/stores/Products";


const store = useProduitListStore();

const itemInfo = reactive({});
function addItem(itemInfo) {
    if (itemInfo.length === 0) {
        return
    }
    store.addItem(itemInfo);

    itemInfo.name = '';
    itemInfo.description = '';
    itemInfo.price = 0
}

</script>

<template>
  <div class="content">
    <form action="#" @submit.prevent="addItem(itemInfo), $router.push('/produits')" >
      <div>
        <label for="name">Nom de produit: </label>
        <input type="text" id="name" v-model="itemInfo.name"/>
      </div>
      <div>
        <label for="description">Description: </label>
        <textarea
          id="description"
          cols="5"
          rows="8"
          style="resize: none"
          maxlength="150"
          v-model="itemInfo.description"
        ></textarea>
      </div>
      <div>
        <label for="price">Prix (euros): </label>
        <input type="number" id="price" name="price" min="1" max="1000" v-model="itemInfo.price"/>
      </div>
      <button>Ajouter le produit</button>
    </form>
  </div>
</template>

<style scoped>
.content {
  height: 80dvh;
  padding: 3%;
  box-sizing: border-box;
  border-radius: 1.5rem;
  aspect-ratio: 0.5 / 0.4;
  background-color: hsl(0, 0%, 95%);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  height: 40%;
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

    > label,
    input {
      font-size: 1rem;
    }

    > label {
      width: 25ch;
      color: rgb(76, 74, 73);
      margin-right: 2rem;
      margin-bottom: auto;
    }

    > input,
    select,
    textarea {
      color: hsl(0, 0%, 9%);
      width: 80%;
      box-sizing: border-box;
      padding: 0.5em 1em;
      background-color: hsl(0, 0%, 93%);
      outline: none;
      border: 0.025em hsl(0, 0%, 75%) solid;
      border-radius: 0.35rem;
    }

    > li {
      list-style-type: none;
      padding: 0.5rem;
    }
  }

  > button:last-child {
    color: hsl(0, 0%, 95%);
    font-size: 1.3rem;
    border: none;
    border-radius: 0.45em;
    box-sizing: border-box;
    padding: 0.7em 1.4em;
    background-color: hsla(160, 100%, 37%, 1);
    margin: auto 0 0 auto;
    transition: all 400ms ease;
    box-shadow: inset 1px 1px 3px rgba(255, 255, 255, 0.4),
      1px 1px 3px rgba(0, 0, 0, 0.3);
  }

  > button:last-child:hover {
    cursor: pointer;
    background-color: rgb(9, 158, 108);
  }
}
</style>
