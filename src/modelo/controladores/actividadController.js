import SistemaControlActividad from "../logica/sistemaControlActividad";
import EstudiantePersistencia from "../../persistencia/estudiantePersistencia";
import Estudiante from "../logica/estudiante";
import ActividadAcademicaPersistencia from "../../persistencia/actividadAcademicaPersistencia";
import PadrePersistencia from "../../persistencia/padrePersistencia";

export default class ActividadController{
    constructor(){
        this._sistemaControladorActividad = new SistemaControlActividad();
        this._estudiantePersistencia = new EstudiantePersistencia();
        this._actividadAcademicaPersistencia = new ActividadAcademicaPersistencia();
    }

    anadirActividad(tarea,materia,fechaEntrega,codEstudiante,codPadre){
        return new Promise((resolve,reject) => {
            var estudianteM = new Estudiante("","","","","");
            this._estudiantePersistencia.buscar(codEstudiante)
            .then(estudiante =>{
                
                console.log(estudianteM);
                estudianteM = this._sistemaControladorActividad.anadirActividadAcademica(tarea,materia,fechaEntrega,estudiante);
                
                return new PadrePersistencia().buscar(codPadre);
            })
            .then(padre => {
                padre.listaHijos.forEach((element,index) => {
                    if(element.id == estudianteM.id){
                        padre.listaHijos[index].listarActividades = Estudiante.listarDB(estudianteM);
                    }
                });
                this._actividadAcademicaPersistencia.guardar(padre);
                resolve('lista');
            });
        });
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