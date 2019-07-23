import { Notificacion } from '@/modelo/clases/Notificacion';

export class NotificacionPersistencia{
    public guardar(notificacion: Notificacion){
        return true;
    }
    public eliminar(notificacion: Notificacion): boolean{
        return true;
    }
    public listar(padre: String): Array<Notificacion>{
        return [];
    }
}