import { ControladorActividadAcademicaModelo } from '@/modelo/controladores/controladorActividadAcademica';

export class ControladorActividadAcademica{

    private _controladorActividadAcademicaModelo: ControladorActividadAcademicaModelo;

    constructor(){this._controladorActividadAcademicaModelo=new ControladorActividadAcademicaModelo}

    public anadirActividadAcademica(tarea: String, materia: String, estado: String, fechaEntrega: Date, nombre: String): void{
        let actividad;
        this._controladorActividadAcademicaModelo.anadirActividadAcademica(tarea,materia,fechaEntrega,nombre);
    }
}