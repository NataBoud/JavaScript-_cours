<!-- <script setup>
import { reactive } from "vue";

const minuteurForm = reactive({
    minutes: 0,
    seconds: 0,
}) ;

const emits = defineEmits(["ajouterMinumeur"])
const submitHandler = () => {
    emits("ajouterMinumeur", {
        ...minuteurForm
    })
}
</script>

<template>
    <form action="#" @submit.prevent="submitHandler">
        <div>
            <label for="minutes">Minutes: </label>
            <input v-model="minuteurForm.minutes" type="number" min="0" max="59" required>
        </div>

        <div>
            <label for="seconds">Seconds: </label>
            <input v-model="minuteurForm.seconds" type="number" min="0" max="59" required>
        </div>
        <button>Ajouter un minuteur</button>
    </form>
</template>

<style scoped>

</style> -->
