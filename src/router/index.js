import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue';
import GameImpiccato from '@/pages/GameImpiccato.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomePage
    },
    {
      path: "/game",
      component: GameImpiccato
    }
  ]
})

export default router
