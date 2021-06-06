import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/list.vue')
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export { router, routes }
