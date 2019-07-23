import { Padre } from './Padre';
import { Estudiante } from './Estudiante';
import { Notificacion } from './Notificacion';

export class SistemaNotificacion{

    private _listaNotificaciones:Array<Notificacion>;
    
    constructor()
    constructor(lista: Array<Notificacion>)
    constructor(lista?: Array<Notificacion>){
        if(lista === undefined){
            this._listaNotificaciones = new Array<Notificacion>();
        }else{
            this._listaNotificaciones = lista;
        }
    }

    public anadirNotificacion(descripcion:String,fechaEnviado:Date,emisor:Estudiante, receptor:Padre): void{
    }

    public eliminarNotificacion(id:number): void{
    }

    public listarNotificaciones(receptor:Padre): Array<Notificacion>{
        return this._listaNotificaciones;
    }
}