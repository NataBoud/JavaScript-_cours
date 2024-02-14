<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonCol,
  IonGrid,
  IonRow,
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

<template>

  <ion-page>
  
    <ion-content :fullscreen="true" color="dark">

      <ion-header collapse="condense">
        <ion-toolbar color="dark">
          <ion-item color="dark">
            <ion-title color="primary" size="large" class="title">FizzBuzz</ion-title>
          </ion-item>
        </ion-toolbar>
      </ion-header>

      <ion-grid>
        <ion-row>

          <ion-col  >
            <ion-button :disabled="decrementDisabled" @click="decrement" fill="clear">
              <ion-icon :icon="removeCircleSharp"></ion-icon>
            </ion-button>
          </ion-col>

          <ion-col size="6"><span>{{ fizzBuzzDisplay }}</span></ion-col>

          <ion-col >
            <ion-button @click="increment" fill="clear">
              <ion-icon :icon="addCircleSharp"></ion-icon>
            </ion-button>
          </ion-col>

        </ion-row>
      </ion-grid>

    </ion-content>
  </ion-page>

</template>



<style scoped>

.title {
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
}

#left {
   margin-left: auto;

}

#right {
  margin-left: auto;
}

span {
  font-size: 1.5rem;
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
