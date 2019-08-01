import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import * as VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false
Vue.use(VueFire)

firebase.initializeApp({})

export const db = firebase.firestore()


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
