<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="dark">
        <ion-title>FizzBuzz</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" color="dark">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title color="dark" size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong>Ready to play ?</strong>
        <ion-grid>
          <ion-row>

            <ion-col>
              <ion-button :disabled="decrementDisabled" @click="decrement" fill="clear">
                <ion-icon :icon="removeCircleSharp" color="danger" size="large"></ion-icon>
              </ion-button>
            </ion-col>

            <ion-col><span>{{ fizzBuzzDisplay }}</span></ion-col>

            <ion-col>
              <ion-button @click="increment" fill="clear">
                <ion-icon :icon="addCircleSharp" color="danger" size="large"></ion-icon>
              </ion-button>
            </ion-col>

          </ion-row>
        </ion-grid>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonCol, IonGrid, IonRow,
  IonIcon
} from '@ionic/vue';
import { removeCircleSharp, addCircleSharp } from 'ionicons/icons';
import { ref, computed } from 'vue'

let counter = ref<number>(0);
const decrement = () => counter.value--
const increment = () => counter.value++
const decrementDisabled = computed(() => counter.value <= 0)
const fizzBuzzDisplay = computed(() => {
  if (counter.value === 0) return counter.value
  else {
    if (counter.value % 15 === 0) return "FizzBuzz"
    else if (counter.value % 5 === 0) return "Buzz"
    else if (counter.value % 3 === 0) return "Fizz"
    else return counter.value
  }
})
</script>

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

ion-col {
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    text-align: center;
  }
}
</style>
