import { Estudiante } from './Estudiante';
import { ActividadAcademica } from './ActividadAcademica';

export class SistemaControlActividad{

    public anadirActividadAcademica(tarea:String,materia:String,fechaEntrega:Date, estudiante: Estudiante): Estudiante{
        let codigo =  estudiante.listarActividadAcademica().length;
        let id = estudiante.id +"A"+ codigo;
        estudiante.listarActividadAcademica().push(new ActividadAcademica(id,tarea,materia,'pendiente',fechaEntrega));
        return estudiante;
    }

    public eliminarActividadAcademica(actividad: ActividadAcademica, estudiante: Estudiante): Estudiante{
        let indice = estudiante.listarActividadAcademica().indexOf(actividad);
        let eliminado = estudiante.listarActividadAcademica().splice(indice,1);
        let cod;
        
        estudiante.listarActividadAcademica().forEach((element,index) => {
            if(index>=indice){
                cod = index + 1;
                element.id = estudiante.id + "A" + cod;
            }    
        });

        return estudiante;
    }

    public modificarActividadAcademica(id:String, estudiante: Estudiante, estado:String, tarea:String,materia:String,fechaEntrega:Date): Estudiante{
        estudiante.listarActividadAcademica().forEach((element,index) => {
            if(element.id === id){
                element.tarea = tarea;
                element.materia = materia;
                element.estado = estado;
                element.fechaEntrega = fechaEntrega;
            }
        });

        return estudiante;
    }

    public listarActividadAcademica(estudiante:Estudiante): Array<ActividadAcademica>{
        return estudiante.listarActividadAcademica();   
    }
}