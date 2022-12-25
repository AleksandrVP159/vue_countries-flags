import { createRouter, createWebHistory } from 'vue-router'
import Details from '../pages/Details.vue'
import Home from '../pages/Home.vue'
import NotFound from '../pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/country/:name',
      name: 'Details',
      component: Details
    },
    {
      path: '/:catchAll(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router