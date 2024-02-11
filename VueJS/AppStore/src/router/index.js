import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/produits",
      name: "produits",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ProduitsView.vue"),
    },
    {
      path: "/add-produit",
      name: "add-produit",
      component: () => import("../views/AddProduitView.vue"),
    },
    {
      path: "/produit/:id",
      name: "produitDetail",
      component: () => import("../views/ProduitDetailView.vue"),
    },
  ],
});

export default router
