import { Padre } from './Padre';
import { Estudiante } from './Estudiante';
import { ActividadAcademica } from './ActividadAcademica';

export class SistemaControlActividad{

    public anadirActividadAcademica(tarea:String,materia:String,fechaEntrega:Date, estudiante: Estudiante): void{
        let actividad = new ActividadAcademica(tarea,materia,"pendiente",fechaEntrega);
        estudiante.anadirActividadAcademica(actividad);
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