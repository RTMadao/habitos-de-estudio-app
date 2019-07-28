import PadrePersistencia from "../../persistencia/padrePersistencia";
import EstudiantePersistencia from "../../persistencia/estudiantePersistencia";
import Padre from "../logica/padre";
import { strict } from "assert";


export default class UsuarioController{
    constructor(){
        this._padrePersistencia = new PadrePersistencia();
        this._estudiantePersistencia = new EstudiantePersistencia();
    }

    registrarPadre(nombre,nombreUsuario,contrasena){
        let usuarioExistente = this._padrePersistencia.buscarNombreUsuario(nombreUsuario);
        if(usuarioExistente == null){
            let cod = this._padrePersistencia.cantidadPadres();
            return this._padrePersistencia.guardar(new Padre(toString(cod),nombre,nombreUsuario,contrasena));
        }else{
            return {confirmacion: false, mensaje: "el nombre de usuario ya existe"};
        }
    }
    autenticarPadre(nombreUsuario,contrasena){
        return this._padrePersistencia.autenticar(nombreUsuario,contrasena);
    }
    registrarEstudiante(codPadre,nombre,nombreUsuario,contrasena){
        let padre = this._padrePersistencia.buscar(codPadre);
        this._estudiantePersistencia.guardar(padre.registrarHijo(nombre,nombreUsuario,contrasena),padre.id);
        return padre;
    }
    autenticarEstudiante(nombreUsuario,contrasena){
        return this._estudiantePersistencia.autenticar(nombreUsuario,contrasena);
    }
}