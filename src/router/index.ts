import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/gis-layer',
      name: 'gis-layer',
      component: () => import('../views/GisLayer.vue'),
    },
  ],
})

export default router
