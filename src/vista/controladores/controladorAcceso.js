import UsuarioController from "../../modelo/controladores/usuarioController";


export default class ControladorAcceso{
    constructor(){
        this._controladorUsuario = new UsuarioController();
    }
    registrarPadre(nombre,nombreUsuario,contrasena){
        let respuesta = this._controladorUsuario.registrarPadre(nombre,nombreUsuario,contrasena);
        alert(respuesta.mensaje);
        if(respuesta.confirmacion) console.log("inisiar sesion");
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
        let padre = this._controladorUsuario.autenticarPadre(nombreUsuario,contrasena);
        if(padre == null){

        }else{

        }
    }
    iniciarSesionEstudiante(nombreUsuario,contrasena){
        let estudiante = this._controladorUsuario.autenticarEstudiante(nombreUsuario,contrasena);
        if(estudiante == null){

        }else{

        }
    }

}