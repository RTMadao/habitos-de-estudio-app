import UsuarioController from "../../modelo/controladores/usuarioController";
import router from "../../router";


export default class ControladorAcceso{
    constructor(){
        this._controladorUsuario = new UsuarioController();
    }
    registrarPadre(nombre,nombreUsuario,contrasena){
        let respuesta = this._controladorUsuario.registrarPadre(nombre,nombreUsuario,contrasena);
        alert(respuesta.mensaje);
        if(respuesta.confirmacion) router.push('inicioPadre');
    }
    confirmarContrasena(contrasena1,contrasena2){
        return contrasena1 === contrasena2;
    }
    registrarEstudiante(codPadre,nombre,nombreUsuario,contrasena){
        let padre = this._controladorUsuario.registrarEstudiante(codPadre,nombre,nombreUsuario,contrasena);
        if(padre == null){

        }else{

        }
    }
    iniciarSesionPadre(nombreUsuario,contrasena){
        let auth = this._controladorUsuario.autenticarPadre(nombreUsuario,contrasena);
        if(auth) router.push('inicioPadre')
    }
    iniciarSesionEstudiante(nombreUsuario,contrasena){
        let auth = this._controladorUsuario.autenticarEstudiante(nombreUsuario,contrasena);
        //if(auth) router.push('inicioPadre')
    }

}