import { Padre } from './Padre';
import { Estudiante } from './Estudiante';
import { Notificacion } from './Notificacion';

export class SistemaNotificacion{

    public anadirNotificacion(descripcion:String,fechaEnviado:Date,emisor:Estudiante, receptor:Padre): boolean{
        return true;

    }

    public eliminarNotificacion(id:number): boolean{
        return true;

    }

    public listarNotificaciones(receptor:Padre): Array<Notificacion>{
        return [];
        
    }
}