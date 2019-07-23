import { PadreController } from '@/modelo/controladores/PadreController';
import { EstudianteController } from '@/modelo/controladores/EstudianteController';

export class ControladorActividadAcademica{

    private _logicaPadre: PadreController;
    private _logicaEstudiante: EstudianteController;

    constructor(cod: String){
        this._logicaEstudiante = new EstudianteController();
        this._logicaPadre = new PadreController(cod);
    }

    
}