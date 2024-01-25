<script setup>
import { ref } from 'vue'
import ContactAddForm from './components/ContactAddForm.vue'
import DisplayContactCards from './components/DisplayContactCards.vue';

const contacts = ref([]);

</script>

<template>
  <h1>Les contacts</h1>
  <ContactAddForm @add-contact="contacts.push($event)" />
  <DisplayContactCards v-for="(newCard, i) in contacts" :cardProps="newCard" @deleteCard="contacts.splice(i, 1)" />
</template>

<style scoped></style>
