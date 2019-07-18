import { Estudiante } from './Estudiante';
import { Padre } from './Padre';

export class Notificacion{

    private id:number;
    private descripcion:String;
    private fechaEnviado:Date;
    private emisor:Estudiante;
    private receptor:Padre;

    constructor(id:number,descripcion:String,fechaEnviado:Date,emisor:Estudiante, receptor:Padre){
        this.id = id;
        this.descripcion = descripcion;
        this.fechaEnviado = fechaEnviado;
        this.emisor = emisor;
        this.receptor = receptor;
    }
}