import {ActividadAcademica} from './ActividadAcademica';

export class Estudiante{
    
    private _id: String;
    private _nombre: String;
    private _nombreUsuario: String;
    private _contrasena: String;
    private _listaActividades: Array<ActividadAcademica>;

    constructor(id: String, nombre: String, nombreUsuario: String, contrasena: String){
        this._id=id;
        this._nombre=nombre;
        this._nombreUsuario=nombreUsuario;
        this._contrasena=contrasena;
        this._listaActividades=new Array<ActividadAcademica>();
    }

    public listarActividadAcademica(): Array<ActividadAcademica>{
        return this._listaActividades;
    }

    public get id(){
        return this._id;
    }
}