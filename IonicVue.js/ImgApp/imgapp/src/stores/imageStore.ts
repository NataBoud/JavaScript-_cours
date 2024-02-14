import { defineStore } from "pinia";
import { ref } from 'vue'
import { Image } from '../types/imageType'

export const useImageStore = defineStore('image', () => {
    const images = ref<Image[]>([]);
    function addImage(image: Image) {
        images.value.push(image)
    }

    return { images, addImage }
})