<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, computed } from "vue";

// Gestion un v-if
const userStartApp = ref(true)

// Basculer sur le composant enfant HomeView
const startToggle = () => {
  userStartApp.value = !userStartApp.value
}

//Envoyer le pseudo au composant enfant HomeView
const pseudo = ref('');

// Définir la méthode pour gérer l'évènement émit par composant enfant HomeView
const handleUserStartApp = (newValueEmit) => {
  userStartApp.value = newValueEmit;
  pseudo.value = ""
  
}

// sécurité
const pseudoUnputTouched = ref(false);
const btnConfirmerDisabled = computed(() => pseudo.value === "" || !pseudoUnputTouched);

// const users = reactive([]);
// const newUser = reactive({
//   pseudo: "",
//   date: new Date(),
// });

// const addUser = () => {
//   users.push({
//     ...newUser,
//     id: newId(),
//   });
//   console.log(users);
// };

// const logOutHandler = () => { };

</script>

<template>

  <main>

    <div class="connexion" v-if="userStartApp">
      <h1><span>Vue</span><span>2000</span></h1>
        <label for="pseudo">Veillez entrez un psedeu: </label>
        <div>
          <input v-model="pseudo"
            type="text" 
            @input="pseudoUnputTouched = true"
            @change="pseudoUnputTouched = true" 
          />
          <button :disabled="btnConfirmerDisabled"
            @click="startToggle"
          >
          Confirmer
          </button>
        </div>
    </div>

    <div v-else>
       <RouterView :getPseudo="pseudo" @update:userStartApp="handleUserStartApp"/>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/product">Product</RouterLink>
      </nav>
    </div>

  </main>
 
</template>

<style scoped>
h1 {
  text-align: center;
  span:last-child {
    color: hsla(160, 100%, 37%, 1);
  }
}
.connexion {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  >label {
    margin-bottom: 0.3rem;
  }

  >div>input {
    background-color: hsl(0, 0%, 10%);
    border: hsl(0, 0%, 45%) 0.05rem solid;
    border-radius: 0 0.25rem 0.25rem 0;
    margin-right: 0.55rem;
    padding: 0.45em 1em;
    color: hsl(0, 0%, 50%);
  }

  >div>button {
    background-color: hsla(160, 100%, 37%, 1);
    border: none;
    border-radius: 0.25em;
    padding: 0.45em 1em;
    cursor: pointer;
    border: hsla(160, 100%, 37%, 1) 0.03rem solid;
  }

  >div>button:is([disabled]) {
    background-color: hsl(0, 0%, 60%);
    color: hsl(0, 0%, 10%);
    border: hsl(0, 0%, 60%) 0.03rem solid;
  }

  >div>button:not([disabled]):hover {
    transition: 400ms ease;
    background-color: hsla(160, 100%, 37%, 0.8);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
