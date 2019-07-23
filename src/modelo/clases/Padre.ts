import {Estudiante} from './Estudiante';

export class Padre{
    private _id: String;
    private _nombre: String;
    private _nombreUsuario: String;
    private _contrasena: String;
    private _listaHijos: Array<Estudiante>;
    
    constructor(id: String, nombre: String, nombreUsuario: String, contrasena: String){
        this._id=id;
        this._nombre=nombre;
        this._nombreUsuario=nombreUsuario;
        this._contrasena=contrasena;
        this._listaHijos=new Array<Estudiante>();
    }

    public registrarHijo(nombre: String, nombreUsuario: String, contrasena: String): void{
        this._listaHijos.push(new Estudiante(nombre, nombreUsuario, contrasena, nombreUsuario))
    }

    public get id(){
        return this._id;
    }
}