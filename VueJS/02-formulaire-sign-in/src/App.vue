<script setup>
import { ref, computed } from 'vue';

// const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const inputEmail = ref('')
const emailTouched = ref(false)
const inputPassword = ref('')
const passwordTouched = ref(false)

const emailInvalid = computed(() => {
  // console.log(email.value);
  const regexpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  // const regexpEmailBis = new RegExp('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$', 'g')
  return emailTouched.value && !regexpEmail.test(email.value)
})

const passwordInvalid = computed(() => {
  return password.value.trim() === '' && passwordTouched.value
})

</script>

<template>
  <div>
    <form action="">
      <h3>Sign in</h3>

      <div>
        <label for="email">Entrez votre email: </label>
        <input v-model="inputEmail" @input="emailTouched = true" type="email" id="email" size="30" required/>
        <!-- <span v-if="!regex.test(inputEmail)">le mail n'est pas valide</span> -->
        <span v-if="emailInvalid">le mail n'est pas valide</span>
      </div>


      <div>
        <label for="password">Entrez votre mot de pass:</label>
        <input v-model="inputPassword" @input="passwordTouched = true" type="password" id="password" size="30" required />
        <!-- <span v-if="inputPassword.trim() !== ''">Password n'est pas valide</span> -->
        <span v-if="passwordInvalid">Password n'est pas valide</span>
      </div>

      <button 
        :disabled="passwordInvalid || emailInvalid || !passwordTouched || !emailTouched" type="submit" 
        id="btn"
      >
        Se connecter
      </button>

    </form>


  </div>
</template>

<style scoped>
form>div {
  display: flex;
  flex-direction: column;

}

form>h3 {
  font-size: 3em;
  margin: 0.5em;
}

div {
  margin: 2em 0;
}

div>input {
  height: 1.5em;
  padding: 0.5em 0.8em;
  margin: 0.5em 4.5em;
  border-radius: 1.2em;
}

form {
  background-color: rgb(245, 248, 247);
  padding: 2.8em 1.8em;
  border-radius: 2.2em;
}

#btn {
  font-size: 1.2em;
}

form>button {
  padding: 0.8em 1.8em;
  margin: 3em 4.5em;
  border-radius: 1.2em;
  border: none;
  background-color: rgb(42, 23, 212);
  color: hsl(0, 0%, 95%);
  cursor: pointer;

  transition: background-color 400ms ease, scale 400ms ease;
}

form>button:not([disabled]):hover {
  background-color: rgb(77, 58, 241);
}

form>button:is([disabled]) {
  background-color: gray;
}

span {
  color: rgb(221, 36, 36);
}
</style>
