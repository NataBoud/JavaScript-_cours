import { defineStore } from "pinia";
import { v4 as newId } from "uuid";

export const useProduitListStore = defineStore("itemList", {
  state: () => ({
    itemList: [],
    itemInfo: {
      id: 0,
      name: "",
      description: "",
      price: 0,
    },
    itemFound: {},
  }),
  // getters: {}
  actions: {
    addItem(itemInfo) {
      this.itemList.push({
        ...itemInfo,
        id: newId(),
      });
      console.log(this.itemList);
    },

    deleteItem(itemId) {
      this.itemList = this.itemList.filter((x) => {
        return x.id !== itemId;
      });
    },
    detailsItem(itemId) {
      const itemFound = this.itemList.find((index) => index.id === itemId);
      
      if (itemFound) {
        itemFound.name = itemInfo.name;
        itemFound.description = itemInfo.description;
        itemFound.price = itemInfo.price;
      }
    },
  },
});
