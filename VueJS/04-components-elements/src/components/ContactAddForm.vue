<script setup>
import { defineEmits, reactive } from 'vue';
import { v4 as newId } from 'uuid'
import Buttons from './Buttons.vue';
const emits = defineEmits(['addContact'])

const contact = reactive({
    firstname: '',
    lastname: ''
})

const submitHandler = () => {
    emits('addContact', {
        ...contact,
        id: newId()
    })
    contact.firstname = '';
    contact.lastname = '';
}
</script>

<template>
    <form action="#" @submit.prevent="submitHandler">
        <div>
            <label for="firstname">Firstname: </label>
            <input type="text" id="firstname" v-model="contact.firstname">
        </div>

        <div>
            <label for="lastname">Lastname: </label>
            <input type="text" id="lastname" v-model="contact.lastname">
        </div>

        <Buttons theme="cta" btnText="Ajouter"/>
    </form>
</template>

<style scoped></style>