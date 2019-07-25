import SistemaControlActividad from "../model/sistemaControlActividad";
import EstudiantePersistencia from "../../persistencia/estudiantePersistencia";

export default class ActividadController{
    constructor(){
        this._sistemaControladorActividad = new SistemaControlActividad();
        this._estudiantePersistencia = new EstudiantePersistencia();
    }

    anadirActividad(tarea,materia,fechaEntrega,codEstudiante){
        let estudiante = this._estudiantePersistencia.buscar(codEstudiante);
        estudiante = this._sistemaControladorActividad.anadirActividadAcademica(tarea,materia,fechaEntrega,estudiante);
        this._estudiantePersistencia.actualizar(estudiante);
        return estudiante;
    }
    modificarActividad(tarea,materia,fechaEntrega,estado,codEstudiante,codActividad){
        let estudiante = this._estudiantePersistencia.buscar(codEstudiante);
        return this._sistemaControladorActividad.modificarActividadAcademica(codActividad,tarea,materia,estado,fechaEntrega,estudiante);
    }
    eliminarActividad(codActividad,codEstudiante){
        let estudiante = this._estudiantePersistencia.buscar(codEstudiante);
        return this._sistemaControladorActividad.eliminarActividadAcademica(codActividad,estudiante);
    }
    listarActividades(codEstudiante){
        let estudiante = this._estudiantePersistencia.buscar(codEstudiante);
        return this._sistemaControladorActividad.listarActividadAcademica(estudiante);
    }
}