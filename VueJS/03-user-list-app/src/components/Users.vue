<script setup>
import { ref, computed, reactive } from "vue";

// const inputEmail = ref("");
// const emailTouched = ref(false);

// const emailInvalid = computed(() => {
//   const regexpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
//   return emailTouched.value && !regexpEmail.test(inputEmail.value);
// });

const newContact = reactive({
  inputFirstname: "",
  inputLastname: "",
  inputNumero: "",
  inputEmail: "",
});

const contacts = reactive([]);

const addContact = () => {
  contacts.push(newContact);
   console.log(contacts);
};

// const deleteContact = (contact) => {
//   contacts.contact.splice(contacts.contact.indexOf(contact), 1);
// }


</script>

<template>
  <h1>Liste des contacts</h1>
  <main>
    <form action="#">
      <h2>Jouter un contact</h2>
      <div>
        <label for="firstname">Prenom: </label>
        <input
          v-model="newContact.inputFirstname"
          id="firstname"
          type="text"
          size="20"
          name="firstname"
        />
      </div>

      <div>
        <label for="lastname">Nom: </label>
        <input
          v-model="newContact.inputLastname"
          id="lastname"
          type="text"
          name="lastname"
          size="20"
        />
      </div>

      <div>
        <label for="numero">Numéro de téléphone: </label>
        <input
          v-model="newContact.inputNumero"
          id="numero"
          type="text"
          name="numero"
          size="20"
        />
      </div>

      <div>
        <label for="email">Email: </label>
        <input
          v-model="newContact.inputEmail"
         
          type="email"
          id="email"
          size="20"
          required
        />
        <!-- @input="passwordTouched = true" -->
        <!-- <span v-if="emailInvalid">L'émail n'est pas valide</span> -->
      </div>

      <button :disabled="submitDisabled" @click="addContact" id="btn">
        Ajouter
      </button>
    </form>

    <table>
      <thead>
        <th>Prénom</th>
        <th>Nom</th>
        <th>Numéro de téléphone</th>
        <th>Email</th>
        <th>Supprimer</th>
      </thead>
      <tbody>
        <tr v-for="(contact) in contacts" :key="contact.inputFirstname">
          <td>{{ contact.inputFirstname }}</td>
          <td>{{ contact.inputLastname }}</td>
          <td>{{ contact.inputNumero }}</td>
          <td>{{ contact.inputEmail }}</td>
          <td>
            <button id="btn-delete" @click="deleteContact(contact)">X</button>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: space-around;
}

thead > th {
  padding: 0.3em 2.8em;
  margin: 0.5em 0;
}
td {
  
  vertical-align: top;
}

form > div {
  display: flex;
  flex-direction: column;
}
h1 {
  font-size: 3em;
}
form > h2 {
  font-size: 2em;
  margin: 0 0 0.9em 0;
}

div > input {
  height: 1.5em;
  padding: 0.3em 0.8em;
  margin: 0.5em 0;
  border-radius: 0.8em;
}
input {
  border: none;
  box-shadow: 0 1px 4px #73737455;
}
div > label {
  text-align: left;
}
input:focus,
input:focus-visible {
  outline: 0.1em auto rgb(187, 202, 240);
}

form {
  background-color: aliceblue;
  padding: 2.8em 4.8em;
  border-radius: 2.2em;
  box-shadow: 0 1px 4px #73737455;
}

#btn {
  font-size: 1em;
}

form > button {
  padding: 0.7em 2.2em;
  margin: 1.5em 0.7em;
  border-radius: 1em;
  border: none;
  outline: none;
  background-color: rgb(98, 47, 240);
  color: hsl(0, 0%, 95%);
  cursor: pointer;
  box-shadow: 0 0 2px #1d1d1d;
}

button#btn-delete {
  padding: 0.5em 1.1em;
  margin: 1.5em 0.7em;
  border-radius: 1em;
  border: none;
  background-color: rgb(201, 20, 20);
  color: hsl(0, 0%, 95%);
  cursor: pointer;
  box-shadow: 0 0 2px #1d1d1d40;
}

button,
button:active,
button:focus {
  border: none;
}

form > button:not([disabled]):hover {
  background-color: rgb(77, 58, 241);
}

form > button:is([disabled]) {
  background-color: rgb(146, 150, 155);
}

span {
  color: rgb(221, 36, 36);
}
</style>
