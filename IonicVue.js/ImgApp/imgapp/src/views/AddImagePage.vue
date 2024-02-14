<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';

import { useRouter } from 'vue-router'
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

      <div id="container">
        <strong>Photo</strong>

        <form action="#" @submit.prevent="" >
      <div>
        <label for="name">Titre: </label>
        <input type="text" id="name" />
      </div>
      <div>
        <label for="description">Description: </label>
        <textarea
          id="description"
          cols="5"
          rows="8"
          style="resize: none"
          maxlength="150"
      
        ></textarea>
      </div>
    <ion-button @click="homeScreenHandler">
            Ajouter
        </ion-button>
    </form>


        
        
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
