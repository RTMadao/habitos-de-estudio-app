import Notificacion from "../modelo/logica/notificacion";

export default class NotificacionPersistencia{
    guardar(notificacion=Notificacion){

    }
    eliminar(idNotificacion){

    }
    listar(idPadre){
        return [
            {
                estudiante: 'Gerardo',
                mensaje: 'We, help'
            },
            {
                estudiante: 'Maria',
                mensaje:'No se si deberia estar en un componente'
            },
            {
                estudiante: 'Carlos',
                mensaje:'Ayuda D:'
            }
        ];
    }
}