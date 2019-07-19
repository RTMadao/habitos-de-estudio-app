import {ActividadAcademica} from './ActividadAcademica';
import { Padre } from './Padre';
import { Notificacion } from './Notificacion';

export class Estudiante{
    private nombre: String;
    private nombreUsuario: String;
    private contrasena: String;
    private padre: String;
    private listaActividades: Array<ActividadAcademica>;

    constructor(nombre: String, nombreUsuario: String, contrasena: String, padre: String){
        this.nombre=nombre;
        this.padre=padre
        this.nombreUsuario=nombreUsuario;
        this.contrasena=contrasena;
        this.listaActividades=new Array<ActividadAcademica>();
    }

    public anadirNotificacion(descripcion:String,fechaEnviado:Date){

    }

    public listarNoActividadAcademica(): Array<Notificacion>{
        return [];
    }

    public anadirActividadAcademica(estado:String,tarea:String,materia:String,fechaEntrega:Date){

    }

    public marcarActividadRealizada(id: number){
        
    }
}