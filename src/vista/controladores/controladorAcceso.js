import UsuarioController from "../../modelo/controladores/usuarioController";
import router from "../../router";
import store from "../../store";


export default class ControladorAcceso{
    constructor(){
        this._controladorUsuario = new UsuarioController();
    }
    registrarPadre(nombre,nombreUsuario,contrasena){
        this._controladorUsuario.registrarPadre(nombre,nombreUsuario,contrasena)
        .then(respuesta => {
            alert(respuesta.mensaje);
            store.commit('asignarUsuario',nombreUsuario)
            if(respuesta.confirmacion) router.push('inicioPadre');
        });
    }
    confirmarContrasena(contrasena1,contrasena2){
        return contrasena1 === contrasena2;
    }
    registrarEstudiante(nombre,nombreUsuario,contrasena){
        this._controladorUsuario.registrarEstudiante(store.state.usuarioActivo,nombre,nombreUsuario,contrasena);
    }
    iniciarSesionPadre(nombreUsuario,contrasena){
        this._controladorUsuario.autenticarPadre(nombreUsuario,contrasena)
        .then(auth => {
            if(auth) router.push('inicioPadre');
        });
        store.commit('asignarUsuario',nombreUsuario)
    }
    iniciarSesionEstudiante(nombreUsuario,contrasena){
        this._controladorUsuario.autenticarEstudiante(nombreUsuario,contrasena)
        .then(res => {
            if(res.auth){
                router.push('inicioEstudiante');
                store.commit('asignarUsuario',nombreUsuario);
                store.commit('asignarPadre',res.padre);
            }
        });
        
    }

}