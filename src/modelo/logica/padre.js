import { Estudiante } from "./Estudiante";

export default class Padre{

    constructor(id,nombre,nombreUsuario,contrasena){
        this._id = id;
        this._nombre = nombre;
        this._nombreUsuario = nombreUsuario;
        this._contrasena = contrasena;
        this._listaHijos = [];
    }

    get id(){
        return this._id;
    }
    get nombre(){
        return this._nombre;
    }
    get nombreUsuario(){
        return this._nombreUsuario;
    }
    get contrasena(){
        return this._contrasena;
    }
    get listaHijos(){
        return this._listaHijos;
    }

    set id(value){
        this._id=value;
    }
    set nombre(value){
        this._nombre=value;
    }
    set nombreUsuario(value){
        this._nombreUsuario=value;
    }
    set contrasena(value){
        this._contrasena=value;
    }
    set listaHijos(value){
        this._listaHijos=value;
    }

    registrarHijo(nombre,nombreUsuario,contrasena){
        let cod = this._id + "E" + this._listaHijos.lenght;
        let estudiante = new Estudiante(cod,nombre,nombreUsuario,contrasena,this._id);
        this._listaHijos.push(estudiante);
        return estudiante;
    }
}