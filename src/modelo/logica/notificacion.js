export default class Notificacion{

    constructor(id,descripcion,emisor,receptor,fechaEnviado){
        this._id = id;
        this._descripcion = descripcion;
        this._emisor = emisor;
        this._receptor = receptor;
        this._fechaEnviado = fechaEnviado;
    }

    get id(){
        return this._id;
    }
    get descripcion(){
        return this._descripcion;
    }
    get emisor(){
        return this._emisor;
    }
    get receptor(){
        return this._receptor;
    }
    get fechaEnviado(){
        return this._fechaEnviado;
    }

    set id(value){
        this._id=value;
    }
    set descripcion(value){
        this._descripcion=value;
    }
    set emisor(value){
        this._emisor=value;
    }
    set receptor(value){
        this._receptor=value;
    }
    set fechaEnviado(value){
        this._fechaEnviado=value;
    }
}