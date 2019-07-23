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

    public anadirNotificacion(descripcion:String,fechaEnviado:Date,emisor:Estudiante, receptor:Padre): Array<Notificacion>{
        let cod = receptor.id + "N" + this._listaNotificaciones.length;
        this._listaNotificaciones.push(new Notificacion(cod,descripcion,fechaEnviado,emisor,receptor));
        return this._listaNotificaciones;
    }

    public eliminarNotificacion(id:String): Array<Notificacion>{
        let indice = 0;
        this._listaNotificaciones.forEach((element,index) => {
            if(element.id === id){
                indice = index;
            }
        });
        
        this._listaNotificaciones.splice(indice,1);
        
        let cod;
        this._listaNotificaciones.forEach((element,index) => {
            if(index>=indice){
                cod = index + 1;
                element.id = element.receptor.id + "A" + cod;
            }    
        });

        return this._listaNotificaciones;
    }

    public listarNotificaciones(receptor:Padre): Array<Notificacion>{
        return this._listaNotificaciones;
    }
}