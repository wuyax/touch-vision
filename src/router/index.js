import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
if (process.env.NODE_ENV !== 'production' && !process.env.npm_config_cdn) {
  Vue.use(VueRouter)
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/adapt',
    name: 'adapt',
    component: () => import('../views/adapt.vue')
  },
  {
    path: '/onepx',
    name: 'onepx',
    component: () => import('../views/one-px.vue')
  },
  {
    path: '/proxy',
    name: 'proxy',
    component: () => import('../views/dev-proxy.vue')
  },
  {
    path: '/template',
    name: 'template',
    component: () => import('../views/default-temp.vue')
  },
  {
    path: '/usefulcomp',
    name: 'usefulcomp',
    component: () => import('../views/useful-comp.vue')
  },
  {
    path: '/aspectratio',
    name: 'aspectratio',
    component: () => import('../views/aspect-ratio.vue')
  },
  {
    path: '/thridpart',
    name: 'thridpart',
    component: () => import('../views/thrid-part.vue')
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import('../views/chart.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
