import Vue from 'vue'
import Router from 'vue-router'
import inicio from './vista/views/inicio.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: inicio
    },
//    {
//      path: '/about',
//      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
//      component: () => import(/* webpackChunkName: "about" */ './vista/views/About.vue')
//    }
  ]
})
