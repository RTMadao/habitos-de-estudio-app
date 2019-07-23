import { Estudiante } from './Estudiante';
import { ActividadAcademica } from './ActividadAcademica';

export class SistemaControlActividad{

    public anadirActividadAcademica(tarea:String,materia:String,fechaEntrega:Date, estudiante: Estudiante): void{
        let codigo =  estudiante.listarActividadAcademica().length;
        let id = estudiante.id +"A"+ codigo;
        estudiante.listarActividadAcademica().push(new ActividadAcademica(id,tarea,materia,'pendiente',fechaEntrega));
    }

    public eliminarActividadAcademica(actividad: ActividadAcademica, estudiante: Estudiante): void{
        let indice = estudiante.listarActividadAcademica().indexOf(actividad);
        estudiante.listarActividadAcademica().
    }

    public modificarActividadAcademica(id:number, estudiante: Estudiante, tarea:String,materia:String,fechaEntrega:Date): void{
    }

    public listarActividadAcademica(estudiante:Estudiante): Array<ActividadAcademica>{
        return [];   
    }

    public marcarActividadRealizada(id: number): void{
    }
}