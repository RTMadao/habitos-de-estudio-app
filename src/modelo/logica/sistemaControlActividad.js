import Estudiante from "./estudiante";
import ActividadAcademica from "./actividadAcademica";


export default class SistemaControlActividad{
    anadirActividadAcademica(tarea,materia,fechaEntrega,estudiante){
        let cod = estudiante.listarActividades.length;
        let id = estudiante.id + "A" + cod;
        estudiante.listarActividades.push(new ActividadAcademica(id,tarea,materia,fechaEntrega));
        return estudiante;
    }
    eliminarActividadAcademica(codActividad, estudiante=Estudiante){
        let indice;
        let cod;

        estudiante.listaActividades.forEach((element,index) => {
            if(element.id==codActividad) indice = index; 
        });
        estudiante.listaActividades.splice(indice,1);

        estudiante.listaActividades.forEach((element,index) => {
            if (index>=indice) {
                cod = index + 1;
                element.id = estudiante.id + "A" + cod;
            }
        });

        return estudiante;
    }
    modificarActividadAcademica(id,tarea,materia,estado,fechaEntrega,estudiante=Estudiante){
        estudiante.listaActividades.forEach(element => {
            if(element.id==id){
                element.tarea = tarea;
                element.materia = materia;
                element.fechaEntrega = fechaEntrega;
                element.estado = estado;
            }
        });

        return estudiante;
    }
    listarActividadAcademica(estudiante=Estudiante){
        return estudiante.listaActividades;
    }
}