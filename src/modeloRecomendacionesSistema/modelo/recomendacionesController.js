import RecomendacionesPersistencia from "../persistencia/recomendacionesPersistencia";

export default class RecomendacionesController{
    
    constructor(){
        this._recomendacionesPersistencia = new RecomendacionesPersistencia();
    }
    
    listarRecomendaciones(escenarioUso){
        return this._recomendacionesPersistencia.listarrecomendaciones(escenarioUso);
    }
}