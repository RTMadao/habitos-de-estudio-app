import Vue from 'vue'
import Router from 'vue-router'
import index from './vista/views/index.vue'
import crearCuenta from './vista/views/crearCuenta.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect:'/index'
    },
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path:'/crearCuenta',
      name: 'crearCuenta',
      component: crearCuenta
    }
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
