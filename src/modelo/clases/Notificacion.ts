import { Estudiante } from './Estudiante';
import { Padre } from './Padre';

export class Notificacion{

    private _id:String;
    private descripcion:String;
    private fechaEnviado:Date;
    private emisor:Estudiante;
    private _receptor:Padre;

    constructor(id:String,descripcion:String,fechaEnviado:Date,emisor:Estudiante, receptor:Padre){
        this._id = id;
        this.descripcion = descripcion;
        this.fechaEnviado = fechaEnviado;
        this.emisor = emisor;
        this._receptor = receptor;
    }

    public get id(){
        return this._id;
    }

    public set id(cod: String){
        this._id=cod;
    }

    public get receptor(){
        return this._receptor;
    }
}