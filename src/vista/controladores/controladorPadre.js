import PadreController from "../../modelo/controladores/padreController";
import NotificacionController from "../../modelo/controladores/notificacionController";

export default class ControladorPadre{
    constructor(){
        this._controlador = new PadreController();
    }

    listarEstudiantes(usuario){
        return new Promise((resolve,reject) => {          
            this._controlador.listarEstudiantes(usuario)
            .then(lista => {
                resolve(lista);
            })
        });
    }
    listarNotificaciones(usuario){
        let controlNotificacion = new NotificacionController(usuario);
        return controlNotificacion.obtenerNotificaciones(usuario);
    }
}