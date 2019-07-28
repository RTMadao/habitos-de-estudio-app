import SistemaNotificacion from "../model/sistemaNotificacion";
import NotificacionPersistencia from "../../persistencia/notificacionPersistencia";
import EstudiantePersistencia from "../../persistencia/estudiantePersistencia";
import PadrePersistencia from "../../persistencia/padrePersistencia";

export default class NotificacionController{
    constructor(codPadre){
        this._notificacionPersistencia = new NotificacionPersistencia();
        this._estudiantePersistencia = new EstudiantePersistencia();
        this._padrePersistencia = new PadrePersistencia();
        this._sistemaControlNotificaciones = new SistemaNotificacion(this._notificacionPersistencia.listar(codPadre));
    }

    anadirNotificacion(descripcion,codPadre,fechaEnviado,codEstudiante){
        let notificacion = this._sistemaControlNotificaciones.anadirNotificacion(descripcion,codPadre,fechaEnviado,codEstudiante);
        this._notificacionPersistencia.guardar(notificacion)
        return this._sistemaControlNotificaciones.listaNotificaciones;
    }
    eliminarNotificacion(codNotificacion){
        this._sistemaControlNotificaciones.eliminarNotificacion(codNotificacion);
        this._notificacionPersistencia.eliminar(codNotificacion);
        return this._sistemaControlNotificaciones.listaNotificaciones();
    }
    listarNotificaciones(){
    }
}