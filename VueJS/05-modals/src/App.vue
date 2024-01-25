<script setup>
import { ref } from 'vue'
import Modal from './components/Modal.vue';

const resipes = ref([])
const ingredients = ['sucre', 'chocolat', 'vanille', 'farine', 'citron']
const ingrChoix = ref('')

const emits = defineEmits(['deleteContent']);
const deletContentClickHandler = () => { emits('deleteContent') }

if (localStorage.getItem('resipes')) {
  resipes.value = JSON.parse(localStorage.getItem('resipes'))
}

const prenomInput = ref('')
const modalVisible = ref('')
let indexEnCoursEdition = 0;

const addPrenomHandler = () => {

  const recipeObj = {
    name: '',
    pictureURL: 'https://source.unsplash.com/random?cake',
    nbPerson: 0,
    ingredients: [],

  }
  resipes.value.push(prenomInput.value)
  
  localStorage.setItem('resipes', JSON.stringify(resipes.value))
  prenomInput.value = ''
  modalVisible.value = ''
}

const editButtonClickHandler = (index) => {
  indexEnCoursEdition = index;
  prenomInput.value = resipes.value[index]
  modalVisible.value = 'edit'
}

const editPrenomHandler = () => {
  resipes.value[indexEnCoursEdition] = prenomInput.value
  localStorage.setItem('resipes', JSON.stringify(resipes.value))
  // [1, 2, 3, 4, 5]
  // [1, 2, 6, 4, 5]
  // prenoms.value = [...prenoms.value.filter(p => p !== laVariableDuPrenom), laVersionModifiée]
  prenomInput.value = ''
  modalVisible.value = ''
  console.log(resipes.value);
}
</script>


<template>
  <Teleport to="body">

    <Modal v-if="modalVisible == 'add'" @modal-close="modalVisible = ''">
      <form action="#" @submit.prevent="addPrenomHandler">
        <div>
          <label for="firstname">Firstname: </label>
          <input type="text" id="firstname" v-model="prenomInput">
        </div>

        <div>
          <input type="text" list="ingredients" @input="ingrChoix = $event.target.value">

          <datalist id="ingredients">
            <option v-for="ingr in ingredients" :value="ingr"></option>
          </datalist>

          <ul v-if="ingrChoix">
            <li v-for="ingrA in ingredients.filter(ingrB => ingrB.includes(ingrChoix))">
              {{ ingrA }}
              <input type="checkbox" id="ingrA">
            </li>
          </ul>
        </div>

        <button>Ajouter</button>
      </form>
    </Modal>

  </Teleport>

  <Teleport to="body">

    <Modal v-if="modalVisible === 'edit'" @modal-close="modalVisible = ''">
      <form action="#" @submit.prevent="editPrenomHandler">
        <div>
          <label for="firstname">Firstname: </label>
          <input type="text" id="firstname" v-model="prenomInput">
        </div>
        <button>Editer</button>
      </form>
    </Modal>

  </Teleport>

  <button @click="modalVisible = 'add'">Ajouter une recette</button>

  <ul>
    <!-- TODO: Faire une transition sur les <li> -->
    <li v-for="(p, i) in resipes">
      {{ p }}
      <button @click="editButtonClickHandler(i)">Editer</button>
      <button @click="deletContentClickHandler = resipes.splice(i, 1)">Supprimer</button>
    </li>
  </ul>
</template>



<style scoped></style>
