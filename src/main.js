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

firebase.initializeApp({
  apiKey: "AIzaSyDbnvq2AKOxrkuTAPS_ylBL6_lNheFodv8",
  authDomain: "vueisoft.firebaseapp.com",
  databaseURL: "https://vueisoft.firebaseio.com",
  projectId: "vueisoft",
  storageBucket: "",
  messagingSenderId: "888276932037"
})

export const db = firebase.firestore()


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
