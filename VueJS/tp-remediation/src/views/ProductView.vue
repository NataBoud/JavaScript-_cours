<script setup>
const products = [
  {
    id: 1,
    name: "Produit 1",
    description: "Description du produit 1",
    price: 10,
  },
  {
    id: 2,
    name: "Produit 2",
    description: "Description du produit 2",
    price: 20,
  },
  {
    id: 3,
    name: "Produit 3",
    description: "Description du produit 3",
    price: 30,
  },
  {
    id: 4,
    name: "Produit 4",
    description: "Description du produit 4",
    price: 40,
  },
  {
    id: 5,
    name: "Produit 5",
    description: "Description du produit 5",
    price: 50,
  },
];
</script>

<template>
  <div>
    <h1>Nos Produits</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Prix: {{ product.price }} €</p>
      </li>
    </ul>
  </div>
</template>

<style>
div {
  h1 {
    text-align: center;
    color: hsl(0, 0%, 75%);
    font-size: 2.2em;
    padding-bottom: 1rem;
  }
  ul {
    align-items: center;
    padding-inline-start: 0;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 8rem;

    > li {
      list-style-type: none;
      text-align: center;
      padding: 2rem;
      border: solid hsl(0, 0%, 50%) 0.125rem;
      border-radius: 0.35rem;
      margin: 0.75rem;
      max-width: 10dvw;

      > h2 {
        font-size: 1.5em;
        color: hsl(0, 0%, 65%);
      }

      > p {
        color: hsl(0, 0%, 50%);
        font-size: 1.1em;
      }
    }
  }
}
</style>
