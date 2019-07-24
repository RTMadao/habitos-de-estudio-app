import UsuarioController from "../../logica/controladores/usuarioController";

export default class ControladorAcceso{
    constructor(){
        this._controladorUsuario = new UsuarioController();
    }

    registrarPadre(nombre,nombreUsuario,contrasena){
        let padre = this._controladorUsuario.registrarPadre(nombre,nombreUsuario,contrasena);
        if(padre == null){

        }else{

        }
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