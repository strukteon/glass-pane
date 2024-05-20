import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/p',
      name: 'create person',
      component: () => import('../views/CreatePerson.vue'),
    },
    {
      path: '/p/:pid',
      name: 'person',
      component: () => import('../views/Person.vue'),
    },
    {
      path: '/o',
      name: 'create organization',
      component: () => import('../views/CreateOrganization.vue'),
    },
    {
      path: '/o/:oid',
      name: 'organization',
      component: () => import('../views/Organization.vue'),
    },
    {
      path: '/playground',
      name: 'playground',
      component: () => import('../views/Playground.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
  ]
})

export default router
