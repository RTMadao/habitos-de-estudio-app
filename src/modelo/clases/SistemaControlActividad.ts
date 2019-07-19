import { Padre } from './Padre';
import { Estudiante } from './Estudiante';

export class SistemaNotificacion{

    public anadirActividadAcademica(estado:String,tarea:String,materia:String,fechaEntrega:Date): boolean{
        return true;

    }

    public eliminarActividadAcademica(id:number): boolean{
        return true;

    }

    public modificarActividadAcademica(id:number): boolean{
        return true;

    }

    public listarActividadAcademica(estudiante:Estudiante): Array<ActividadAcademica>{
        return [];
        
    }

    public marcarActividadRealizada(id: number): boolean{
        return true;

    }
}