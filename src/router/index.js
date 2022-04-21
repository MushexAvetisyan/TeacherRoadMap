import Vue from 'vue'
import VueRouter from 'vue-router'
import HTML from '../views/HTML.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Html',
    component: HTML
  },
  {
    path: '/CSS',
    name: 'CSS',
    component: () => import('../views/CSS.vue')
  },
  {
    path: '/Bootstrap',
    name: 'Bootstrap',
    component: () => import('../views/Bootstrap.vue')
  },
  {
    path: '/JQuery',
    name: 'JQuery',
    component: () => import('../views/JQuery.vue')
  },
  {
    path: '/JAVASCRIPT',
    name: 'JAVASCRIPT',
    component: () => import('../views/JAVASCRIPT.vue')
  },
  {
    path: '/PHP',
    name: 'PHP',
    component: () => import('../views/PHP.vue')
  },
  {
    path: '/VueJs',
    name: 'VueJs',
    component: () => import('../views/VueJs.vue')
  },
  {
    path: '/Git',
    name: 'Git',
    component: () => import('../views/Git.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
