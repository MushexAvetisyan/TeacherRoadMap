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
    path: '/JAVASCRIPT',
    name: 'JAVASCRIPT',
    component: () => import('../views/JAVASCRIPT.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
