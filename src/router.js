import Vue from 'vue'
import Router from 'vue-router'
import index from './vista/views/index.vue'
import crearCuenta from './vista/views/crearCuenta.vue'
import iniciarSesion from './vista/views/iniciarSesion.vue'

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
