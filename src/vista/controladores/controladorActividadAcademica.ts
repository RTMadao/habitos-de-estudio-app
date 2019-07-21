import { ControladorActividadAcademicaModelo } from '@/modelo/controladores/controladorActividadAcademica';

export class ControladorActividadAcademica{

    private _controladorActividadAcademicaModelo: ControladorActividadAcademicaModelo;

    constructor(){this._controladorActividadAcademicaModelo=new ControladorActividadAcademicaModelo}

    public anadirActividadAcademica(tarea: String, materia: String, fechaEntrega: Date, nombreEstudiante: String): void{
        let listActividades = this._controladorActividadAcademicaModelo.anadirActividadAcademica(tarea,materia,fechaEntrega,nombreEstudiante);
    }

    public modificarActividadAcademica(id: number, listCampos: Array<String>, listValores: Array<String>, nombreEstudiante: string){

    }
}