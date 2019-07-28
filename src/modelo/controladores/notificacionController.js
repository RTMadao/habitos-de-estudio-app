import NotificacionPersistencia from "../../persistencia/notificacionPersistencia";
import EstudiantePersistencia from "../../persistencia/estudiantePersistencia";
import PadrePersistencia from "../../persistencia/padrePersistencia";
import SistemaNotificacion from "../logica/sistemaNotificacion";
import Padre from "../logica/padre";

export default class NotificacionController{
    constructor(padre=Padre){
        this._notificacionPersistencia = new NotificacionPersistencia();
        this._estudiantePersistencia = new EstudiantePersistencia();
        this._padrePersistencia = new PadrePersistencia();
        this._sistemaControlNotificaciones = new SistemaNotificacion(this._notificacionPersistencia.listar(padre.id));
    }

    anadirNotificacion(descripcion,codPadre,fechaEnviado,codEstudiante){
        let notificacion = this._sistemaControlNotificaciones.anadirNotificacion(descripcion,codPadre,fechaEnviado,codEstudiante);
        this._notificacionPersistencia.guardar(notificacion);
    }
    eliminarNotificacion(codNotificacion){
        this._sistemaControlNotificaciones.eliminarNotificacion(codNotificacion);
        this._notificacionPersistencia.eliminar(codNotificacion);
        return this._sistemaControlNotificaciones.listaNotificaciones();
    }
    obtenerNotificaciones(){
        return this._sistemaControlNotificaciones.listaNotificaciones;
    }
}