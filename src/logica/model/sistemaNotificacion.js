import Padre from "./padre";
import Estudiante from "./Estudiante";
import Notificacion from "./notificacion";

export default class SistemaNotificacion{
    constructor(lista){
        if(lista==null){
            this._listaNotificaciones = [];
        }else{
            this._listaNotificaciones = lista;
        }
    }

    get listaNotificaciones(){
        return this._listaNotificaciones;
    }

    anadirNotificacion(descripcion,receptor=Padre,fechaEnviado,emisor=Estudiante){
        let cod = receptor.id + "N" + this._listaNotificaciones.length;
        let notificacion = new Notificacion(cod,descripcion,emisor,receptor,fechaEnviado);
        this._listaNotificaciones.push(notificacion);
        return notificacion;
    }
    eliminarNotificacion(codNotificacion){
        let indice;
        let cod;

        this._listaNotificaciones.forEach((element,index) => {
            if(element.id==codNotificacion) indice = index; 
        });
        this._listaNotificaciones.splice(indice,1);

        this._listaNotificaciones.forEach((element,index) => {
            if (index>=indice) {
                cod = index + 1;
                element.id = estudiante.id + "N" + cod;
            }
        });
    }
}