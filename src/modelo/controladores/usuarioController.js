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
        return new Promise((resolve,reject) => {
            let usuarioExistente = this._padrePersistencia.buscarNombreUsuario(nombreUsuario);
            if(usuarioExistente == null){
                this._padrePersistencia.cantidadPadres()
                .then(conteo => {
                    this._usuarioActivo = new Padre(conteo.toString(),nombre,nombreUsuario,contrasena);            
                    return this._padrePersistencia.guardar(this._usuarioActivo); //devuelve boolean si guarda correctamente en la base de datos
                })
                .then(respuesta => {
                    console.log(respuesta);
                    resolve(respuesta);
                });
            }else{
                reject({confirmacion: false, mensaje: "el nombre de usuario ya existe"});
            }
        });
    }
    autenticarPadre(nombreUsuario,contrasena){
        return new Promise((resolve,reject) => {
            this._padrePersistencia.autenticar(nombreUsuario,contrasena)//devuelve boolean si corresponde el usuario con la contraseña
            .then(auth => {
                console.log(auth);
                if(auth) resolve(true);
                else reject(false);
            });
        });
    }
    registrarEstudiante(codPadre,nombre,nombreUsuario,contrasena){
        this._padrePersistencia.buscar(codPadre)
        .then(padre => {
            let padreM = new Padre("","","","");
            padreM.copiar(padre);
            let lista = padreM.registrarHijo(nombre,nombreUsuario,contrasena);
            this._padrePersistencia.actualizar(padreM);
        });
    }
    autenticarEstudiante(nombreUsuario,contrasena){
        return new Promise((resolve,reject) => {
            this._estudiantePersistencia.autenticar(nombreUsuario,contrasena)//devuelve boolean si corresponde el usuario con la contraseña
            .then(res => {
                console.log(res);
                if(res.auth) resolve(res);
                else reject(false);
            });
        });
    }
}