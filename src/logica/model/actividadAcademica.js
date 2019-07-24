export default class ActividadAcademica{

    constructor(id,tarea,materia,fechaEntrega){
        this._id = id;
        this._tarea = tarea;
        this._materia = materia;
        this._estado = "pendiente";
        this._fechaEntrega = fechaEntrega;
    }

    get id(){
        return this._id;
    }
    get tarea(){
        return this._tarea;
    }
    get materia(){
        return this._materia;
    }
    get estado(){
        return this._estado;
    }
    get fechaEntrega(){
        return this._fechaEntrega;
    }

    set id(value){
        this._id=value;
    }
    set tarea(value){
        this._tarea=value;
    }
    set materia(value){
        this._materia=value;
    }
    set estado(value){
        this._estado=value;
    }
    set fechaEntrega(value){
        this._fechaEntrega=value;
    }
}