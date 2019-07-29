import ActividadController from "../../modelo/controladores/actividadController";
import NotificacionController from "../../modelo/controladores/notificacionController";
import store from "../../store";
import ControladorPadre from "./controladorPadre";

export default class ControladorEstudiante{
    constructor(){
        this._actividadControler = new ActividadController();
        this._notificacionController = new NotificacionController();
    }

    agregarActividad(tarea,materia,fechaEntrega){
        return new Promise((resolve,reject) => {
            let padre = store.state.padreUsuario;
            let estudiante = store.state.usuarioActivo;          
            this._actividadControler.anadirActividad(tarea,materia,fechaEntrega,estudiante,padre)
            .then(lista => {
                resolve(lista);
            })
        });
    }
    modificarActividad(tarea,materia,fechaEntrega,estado,codEstudiante,codAvtividad){
        let estudiante = this._actividadControler.modificarActividad(tarea,materia,fechaEntrega,estado);
        if(estudiante == null){

        }else{

        }
    }
    eliminarActividad(codActividad,codEstudiante){
        let estudiante = this._actividadControler.eliminarActividad(codActividad,codEstudiante);
        if(estudiante == null){

        }else{

        }
    }
    listar(){
        return new Promise((resolve,reject) => {          
            new ControladorPadre().listarEstudiantes(store.state.padreUsuario)
            .then(lista => {
                lista.forEach(hijo => {
                    if(hijo.nombreUsuario == store.state.usuarioActivo){
                        resolve(hijo.listarActividades);
                    }
                });
            })
        });
    }
}