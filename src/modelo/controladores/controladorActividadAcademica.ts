import { ActividadAcademicaPersistencia } from '@/persistencia/actividadAcademicaPersistencia';
import { ActividadAcademica } from '../clases/ActividadAcademica';
import { SistemaControlActividad } from '../clases/SistemaControlActividad';
import { EstudiantePersistencia } from '@/persistencia/estudiantePersistencia';
import { Estudiante } from '../clases/Estudiante';

export class ControladorActividadAcademicaModelo{
    private _actividadAcademicaPersistencia: ActividadAcademicaPersistencia;
    private _sistemaControlActividad: SistemaControlActividad;
    private _estudiantePersistencia: EstudiantePersistencia;

    constructor(){
        this._actividadAcademicaPersistencia=new ActividadAcademicaPersistencia;
        this._sistemaControlActividad=new SistemaControlActividad;
        this._estudiantePersistencia=new EstudiantePersistencia;
    }

    public anadirActividadAcademica(tarea: String, materia: String, fechaEntrega: Date, nombreEstudiante: String): Array<ActividadAcademica>{
        let estudiante = this._estudiantePersistencia.buscar(nombreEstudiante);
        this._sistemaControlActividad.anadirActividadAcademica(tarea,materia,fechaEntrega,estudiante);
        this._estudiantePersistencia.actualizar(estudiante, "listaActividades");
        return estudiante.listaActividades;
    }
}