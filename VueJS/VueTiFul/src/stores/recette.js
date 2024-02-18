import { defineStore } from "pinia";
import { v4 as newId } from "uuid";

export const useRecetteListStore = defineStore("itemList", {
  state: () => ({
    recetteList: [],
    recetteToEdit: [],
  }),

  getters: {
    getOneById: (state) => {
      return (id) => state.recetteList.find((recette) => recette.id === id);
    },
  },

  actions: {
    addRecette(recetteInfo) {
      this.recetteList.push({
        ...recetteInfo,
        id: newId(),
      });
      console.log(this.recetteList);
    },

    deleteRecette(recetteId) {
      this.recetteList = this.recetteList.filter((x) => {
        return x.id !== recetteId;
      });
    }
  },
});
