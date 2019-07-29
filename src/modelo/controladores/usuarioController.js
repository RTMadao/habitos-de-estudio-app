import PadrePersistencia from "../../persistencia/padrePersistencia";
import EstudiantePersistencia from "../../persistencia/estudiantePersistencia";
import Padre from "../logica/padre";


export default class UsuarioController{
    constructor(){
        this._padrePersistencia = new PadrePersistencia();
        this._estudiantePersistencia = new EstudiantePersistencia();
        this._usuarioActivo = null;
    }

    registrarPadre(nombre,nombreUsuario,contrasena){
        let usuarioExistente = this._padrePersistencia.buscarNombreUsuario(nombreUsuario);
        if(usuarioExistente == null){
            let cod = this._padrePersistencia.cantidadPadres();
            console.log(cod);
            this._usuarioActivo = new Padre(cod.toString(),nombre,nombreUsuario,contrasena);            
            let resultado = this._padrePersistencia.guardar(this._usuarioActivo); //devuelve boolean si guarda correctamente en la base de datos
            return resultado;
        }else{
            return {confirmacion: false, mensaje: "el nombre de usuario ya existe"};
        }
    }
    autenticarPadre(nombreUsuario,contrasena){
        let auth = this._padrePersistencia.autenticar(nombreUsuario,contrasena);//devuelve boolean si corresponde el usuario con la contraseña
        if(auth){
            this._usuarioActivo = this._padrePersistencia.buscarNombreUsuario(nombreUsuario);
            return true;
        }
        return false;
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