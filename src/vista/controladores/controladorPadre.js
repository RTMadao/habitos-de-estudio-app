import PadreController from "../../modelo/controladores/padreController";
import NotificacionController from "../../modelo/controladores/notificacionController";

export default class ControladorPadre{
    constructor(){
        this._controlador = new PadreController();
    }

    listarEstudiantes(usuario){
        console.log(usuario.nombre);
        let respuesta = this._controlador.listarEstudiantes(usuario);
        console.log(respuesta);
        return respuesta;
    }
    listarNotificaciones(usuario){
        let controlNotificacion = new NotificacionController(usuario);
        return controlNotificacion.obtenerNotificaciones(usuario);
    }
}