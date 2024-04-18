import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component: () => import('../views/dashboard/index.vue')
  },
  {
    path: '/foo',
    component: () => import('../views/foo/index.vue')
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
