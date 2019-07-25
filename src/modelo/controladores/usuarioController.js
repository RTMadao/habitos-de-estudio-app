import PadrePersistencia from "../../persistencia/padrePersistencia";
import EstudiantePersistencia from "../../persistencia/estudiantePersistencia";
import Padre from "../model/padre";

export default class UsuarioController{
    constructor(){
        this._padrePersistencia = new PadrePersistencia();
        this._estudiantePersistencia = new EstudiantePersistencia();
    }

    registrarPadre(nombre,nombreUsuario,contrasena){
        let cod = this._padrePersistencia.cantidadPadres();
        return this._padrePersistencia.guardar(new Padre(cod,nombre,nombreUsuario,contrasena));
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