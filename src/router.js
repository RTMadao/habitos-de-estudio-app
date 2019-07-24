import Vue from 'vue'
import Router from 'vue-router'
import index from './views/views/index.vue'
import crearCuenta from './views/views/crearCuenta.vue'
import iniciarSesion from './views/views/iniciarSesion.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/crearCuenta',
      name: 'crearCuenta',
      component: crearCuenta
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/iniciarSesion',
      name: 'iniciarSesion',
      component: iniciarSesion
    }
  ]
})
