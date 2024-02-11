<script setup>
import { useProduitListStore } from "@/stores/Products";
import { reactive } from "vue";
import { storeToRefs } from "pinia";

const store = useProduitListStore();

const { itemList } = storeToRefs(store);
const { deleteItem } = store;

const itemFound = reactive({});
function detailsItem(itemFound) {
    if (itemFound.length === 0) {
        return
    }
    store.detailsItem(itemFound);

}


const produitParDefaut = [
  {
    picture: "https://source.unsplash.com/random/300x300?shirt&sig=1",
    name: "Produit 1",
    description: "Description 1",
    price: 10,
  },
];
</script>

<template>
  <div class="products-cards">
    <div v-for="product in produitParDefaut" :key="product.id" class="card" >
      <img :src="product.picture" alt="Random shirt" />
      <ul>
        <li>
          <b>{{ product.name }}</b>
        </li>
        <li>{{ product.description }}</li>
        <li>Prix: {{ product.price }} €</li>
      </ul>
      <div id="default-buttons">
        <button @click="">Editer</button>
        <button @click="">Supprimer</button>
      </div>
    </div>
    <div v-for="item in itemList" 
      :key="item.id" 
      class="card" 
      @click="detailsItem(itemFound), $router.push({ 
        name: 'produitDetail', 
        params: { id: item.id } 
        })"
      
      >
      <img :src="'https://source.unsplash.com/random/300x300?shirt&sig=' + Math.floor(Math.random() * 100) + 1"
        alt="Random shirt" />
      <ul>
        <li><b>{{ item.name }}</b></li>
        <li>{{ item.description }}</li>
        <li>Prix: {{ item.price }} €</li>
        <div>
          <button @click="$router.push( '/produit/' + item.id)">Editer</button>
          <button @click="deleteItem(item.id)">Supprimer</button>
        </div>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.products-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .card {
    aspect-ratio: 0.7 / 1;
    cursor: pointer;
    border-radius: 2rem;
    display: grid;
    background-color: hsl(0, 0%, 95%);
    color: hsl(0, 2%, 8%);
    box-shadow: 4px 7px 20px rgba(30, 30, 30, 0.3);
    margin: 1rem;

    >img {
      width: 100%;
      border-radius: 2rem 2rem 0 0;
      aspect-ratio: 1 / 0.9;
      object-fit: cover;
    }

    ul {
      align-items: center;
      padding: 0 1.5rem 1rem;
     

      >li:first-child>b {
        font-size: 1.8rem;
        justify-content: center;
        align-items: center;
        display: flex;
      }

      >li {
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

        >button {
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

        >button:first-child {
          margin-right: 0.5rem;
          background-color: rgb(191, 122, 38);
        }

        >button:first-child:hover {
          background-color: rgb(205, 144, 69);
        }

        >button:last-child {
          background-color: rgb(190, 61, 61);
        }

        >button:last-child:hover {
          background-color: rgb(210, 75, 75);
        }
      }
    }
  }
  #default-buttons  {
        text-align: end;
        margin-bottom: 1rem;
        padding: 0 1.5rem 1rem;

        >button {
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

        >button:first-child {
          margin-right: 0.5rem;
          background-color: rgb(191, 122, 38);
        }

        >button:first-child:hover {
          background-color: rgb(205, 144, 69);
        }

        >button:last-child {
          background-color: rgb(190, 61, 61);
        }

        >button:last-child:hover {
          background-color: rgb(210, 75, 75);
        }
     
      }

 
}</style>
