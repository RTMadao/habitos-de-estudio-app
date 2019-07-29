import Estudiante from "./estudiante";


export default class Padre{

    constructor(id,nombre,nombreUsuario,contrasena){
        this._id = id;
        this._nombre = nombre;
        this._nombreUsuario = nombreUsuario;
        this._contrasena = contrasena;
        this._listaHijos = [];
        this._listaHijosDB;
    }

    copiar(padre=Padre){
        this._id = padre.id;
        this._nombre = padre.nombre;
        this._nombreUsuario = padre.nombreUsuario;
        this._contrasena = padre.contrasena;
        if(!padre.listaHijos == undefined) this._listaHijos = padre.listaHijos;
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
    get listaHijosDB(){
        return this._listaHijosDB;
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
    listarHijosDB(){
        let cadena =[];
        this._listaHijos.forEach(hijo => {
            cadena.push({
                id:hijo.id,
                nombre:hijo.nombre,
                nombreUsuario:hijo.nombreUsuario,
                contrasena:hijo.contrasena
            });
        });
        this._listaHijosDB = cadena;
    }
    registrarHijo(nombre,nombreUsuario,contrasena){
        
        let cod = this._id + "E" + this._listaHijos.length;
        let estudiante = new Estudiante(cod,nombre,nombreUsuario,contrasena,this._id);
        this._listaHijos.push(estudiante);
        
        return this._listaHijos;
    }
}