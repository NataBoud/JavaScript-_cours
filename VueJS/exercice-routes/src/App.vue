<script setup>
import { createRouter } from 'vue-router'
import About from './About.vue';
import Home from './Home.vue';
import Contact from './Contact.vue';

const routes = [
    {path: "/", component: Home},
    {path: "/about", component: About},
    {path: "/contact", component: Contact}
]

const router = createRouter({routes})

</script>

<template>
    <div>
        <router-link to="/">Accueil</router-link>
        <router-link to="/about">A propos</router-link>
        <router-link to="/contact">Contact</router-link>
    </div>
</template>

<style scoped>

</style>

