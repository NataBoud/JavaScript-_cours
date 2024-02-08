<script setup>
import { RouterLink, RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
import { ref, computed, reactive } from "vue";
import { v4 as newId } from "uuid";

// const pseudo = ref('');
const pseudoUnputTouched = ref(false);

const btnConfirmerDisabled = computed(
  () => newUser.pseudo === "" || !pseudoUnputTouched
);

const users = reactive([]);

const newUser = reactive({
  pseudo: "",
  date: new Date(),
});

const addUser = () => {
  users.push({
    ...newUser,
    id: newId(),
  });
  console.log(users);
};

const logOutHandler = () => {};

</script>



<template>

   <template v-if="users.length !== 0">
    <HomeView
      v-for="u in users"
      :key="u.id"
      :user="u"
      @log-out="logOutHandler()"
    />
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/product">Product</RouterLink>
      </nav>
    </header>
    <RouterView />
  </template>

  <main v-if="users.length === 0">
    <h1><span>Vue</span><span>2000</span></h1>

    <form action="#" @submit.prevent="addUser">
      <label for="pseudo">Veillez entrez un psedeu: </label>
      <div>
        <input
          v-model="newUser.pseudo"
          type="text"
          id="pseudo"
          @input="pseudoUnputTouched = true"
          @change="pseudoUnputTouched = true"
        />
        <button :disabled="btnConfirmerDisabled">Confirmer</button>
      </div>
    </form>
  </main>

</template>

<style scoped>
h1 {
  text-align: center;
  span:last-child {
    color: hsla(160, 100%, 37%, 1);
  }
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  > label {
    margin-bottom: 0.3rem;
  }
  > div > input {
    background-color: hsl(0, 0%, 10%);
    border: hsl(0, 0%, 45%) 0.05rem solid;
    border-radius: 0 0.25rem 0.25rem 0;
    margin-right: 0.55rem;
    padding: 0.45em 1em;
    color: hsl(0, 0%, 50%);
  }
  > div > button {
    background-color: hsla(160, 100%, 37%, 1);
    border: none;
    border-radius: 0.25em;
    padding: 0.45em 1em;
    cursor: pointer;
    border: hsla(160, 100%, 37%, 1) 0.03rem solid;
  }

  > div > button:is([disabled]) {
    background-color: hsl(0, 0%, 60%);
    color: hsl(0, 0%, 10%);
    border: hsl(0, 0%, 60%) 0.03rem solid;
  }

  > div > button:not([disabled]):hover {
    transition: 400ms ease;
    background-color: hsla(160, 100%, 37%, 0.8);
  }
}

header {
  line-height: 1.5;
  max-height: 100vh;
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
