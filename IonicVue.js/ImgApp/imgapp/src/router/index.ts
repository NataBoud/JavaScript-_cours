import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import ListImagePage from '@/views/ListImagePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/images'
  },
  {
    path: '/images',
    name: 'images',
    component: ListImagePage
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('@/views/AddImagePage.vue')
  },
  {
    path: '/detail/:id',
    name: 'Details',
    component: () => import('@/views/DetailsPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
