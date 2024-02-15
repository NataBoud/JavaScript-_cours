<script setup lang="ts">
import { IonContent, IonHeader, IonButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { useRouter } from 'vue-router'
import Image from '../components/Image.vue'

const router = useRouter();
function homeScreenHandler() {
  router.push('/home');
}

</script>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <Image />

    </ion-content>
    <ion-button @click="homeScreenHandler">
      Ajouter
    </ion-button>

  </ion-page>
</template>

<style scoped></style>
