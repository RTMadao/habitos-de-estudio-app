export class ActividadAcademica{
    private _tarea: String;
    private _id: String
    private _materia: String;
    private _estado: String;
    private _fechaEntrega: Date;

    constructor(id: String, tarea: String, materia: String, estado: String, fechaEntrega: Date){
        this._tarea=tarea;
        this._materia=materia;
        this._estado=estado;
        this._id=id;
        this._fechaEntrega=fechaEntrega;
    }

    public get id(){
        return this._id;
    }

    public set id(cod: String){
        this._id = cod;
    }

    public get tarea(){
        return this._tarea;
    }

    public set tarea(tarea: String){
        this._tarea = tarea;
    }
    
    public get materia(){
        return this._materia;
    }

    public set materia(materia: String){
        this._materia = materia;
    }

    public get estado(){
        return this._estado;
    }

    public set estado(estado: String){
        this._estado = estado;
    }

    public get fechaEntrega(){
        return this._fechaEntrega;
    }

    public set fechaEntrega(fechaEntrega: Date){
        this._fechaEntrega = fechaEntrega;
    }
}