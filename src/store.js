import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarioActivo : {nombre:'carlos',contrasena:'123'}
  },
  mutations: {
    asignarUsuario(state, usuario){
      state.usuarioActivo = usuario;
    }
  },
  actions: {

  }
})
