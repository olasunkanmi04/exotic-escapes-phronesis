import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/invoices',
      name: 'invoices',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Invoices.vue')
    },
    {
      path: '/deposit',
      name: 'deposit',
      component: () => import('../views/Deposit.vue')
    },
    {
      path: '/book',
      name: 'book',
      component: () => import('../views/Book.vue')
    }
  ]
})

export default router
