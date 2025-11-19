import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/GisLayer.vue'),
    },
    {
      path: '/home',
      name: 'home-page',
      component: () => import('../views/Home.vue'),
    },
  ],
})

export default router
