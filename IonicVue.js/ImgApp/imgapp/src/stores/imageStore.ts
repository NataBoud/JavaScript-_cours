import { defineStore } from "pinia";
import { ref, computed } from 'vue';
import { Image } from '@/types/imageType';
import { v4 as uuid } from "uuid";

export const useImageStore = defineStore('image', () => {
    const images = ref<Image[]>([]);

    function addImage(image: Omit<Image, "id">) {
        // ajout d'une image avec la destructation + les valeurs de la image
        images.value.push({ id: uuid(), ...image })
    }

    const getImageById = computed(() => {
        return (id: string) =>
            images.value.find((image) => image.id === id) ?? null
    })



    return { images, addImage }
})