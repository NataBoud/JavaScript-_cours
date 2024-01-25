<script setup>
import { defineProps, defineEmits } from 'vue';
import Buttons from './Buttons.vue';

const emits = defineEmits(['deleteCard']);
const props = defineProps(['cardProps'])

const deleteCardEmit = () => { emits('deleteCard') }

</script>

<template>
    <div class="mon-card">

        <div class="container">
            <h4><b>{{ cardProps.firstname }}</b></h4>
            <p>{{ cardProps.lastname }}</p>
        </div>
        <!-- <button @click="deleteCardEmit" id="btn-delete"><b>Supprimer</b></button> -->
        <Buttons @click="deleteCardEmit" id="btn-delete" theme="danger" btnText="Supprimer"/>
    </div>
</template>

<style scoped>
.mon-card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 40%;
}

.mon-card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
    padding: 2px 16px;
}
</style>