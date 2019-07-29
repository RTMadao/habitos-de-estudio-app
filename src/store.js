import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarioActivo : 'madao',
    padreUsuario : 'el papa'
  },
  mutations: {
    asignarUsuario(state, usuario){
      state.usuarioActivo = usuario;
    },
    asignarPadre(state, padre){
      state.padreUsuario = padre;
    }
  },
  actions: {

  }
})
