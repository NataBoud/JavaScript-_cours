import { createRouter, createWebHistory } from 'vue-router'
import RecettesView from '../views/RecettesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "recettes",
      component: RecettesView
    },
    {
      path: "/add-recette",
      name: "add-recette",
      component: () => import("../views/AddRecetteView.vue"),
    },
    {
      path: "/recette/:id",
      name: "recette-detail",
      component: () => import("../views/RecetteDetailView.vue"),
    },
  ],
});

export default router
