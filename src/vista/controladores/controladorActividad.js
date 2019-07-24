import ActividadController from "../../logica/controladores/actividadController";

export default class ControladorActividad{
    constructor(){
        this._actividadControler = new ActividadController();
    }

    agregarActividad(tarea,materia,fechaEntrega,codEstudiante){
        let estudiante = this._actividadControler.anadirActividad(tarea,materia,fechaEntrega,codEstudiante);
        if(estudiante == null){

        }else{

        }
    }
    modificarActividad(tarea,materia,fechaEntrega,estado,codEstudiante,codAvtividad){
        let estudiante = this._actividadControler.modificarActividad(tarea,materia,fechaEntrega,estado);
        if(estudiante == null){

        }else{

        }
    }
    eliminarActividad(codActividad,codEstudiante){
        let estudiante = this._actividadControler.eliminarActividad(codActividad,codEstudiante);
        if(estudiante == null){

        }else{

        }
    }
}