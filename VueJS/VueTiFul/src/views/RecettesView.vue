<script setup>
import { RouterLink, RouterView } from "vue-router";
import RecetteList from "../components/RecetteList.vue";
</script>

<template>
  <main>
    <h1 class="title-gradient">VueTiFull</h1>

    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/add-recette">Ajouter une recette</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
    
    <RecetteList />
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  color: hsl(0, 0%, 15%);
}

.title-gradient {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h1 {
  font-size: 76px;
  font-weight: 900;
  text-align: center;
}
</style>
