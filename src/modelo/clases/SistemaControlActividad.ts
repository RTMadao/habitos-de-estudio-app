import { Estudiante } from './Estudiante';
import { ActividadAcademica } from './ActividadAcademica';

export class SistemaControlActividad{

    public anadirActividadAcademica(tarea:String,materia:String,fechaEntrega:Date, estudiante: Estudiante): void{
        
    }

    public eliminarActividadAcademica(id:number, estudiante: Estudiante): void{
    }

    public modificarActividadAcademica(id:number, estudiante: Estudiante, tarea:String,materia:String,fechaEntrega:Date): void{
    }

    public listarActividadAcademica(estudiante:Estudiante): Array<ActividadAcademica>{
        return [];   
    }

    public marcarActividadRealizada(id: number): void{
    }
}