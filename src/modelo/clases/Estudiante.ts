import {ActividadAcademica} from './ActividadAcademica';
import { Padre } from './Padre';
import { Notificacion } from './Notificacion';
import { Usuario } from './Usuario';

export class Estudiante extends Usuario{
    
    private padre: String;
    private listaActividades: Array<ActividadAcademica>;

    constructor(nombre: String, nombreUsuario: String, contrasena: String, padre: String){
        super(nombre,nombreUsuario,contrasena);
        this.padre=padre
        this.listaActividades=new Array<ActividadAcademica>();
    }

    public anadirNotificacion(descripcion:String,fechaEnviado:Date): boolean{
        return true;

    }

    public listarActividadAcademica(): Array<ActividadAcademica>{
        return [];
        
    }

    public anadirActividadAcademica(estado:String,tarea:String,materia:String,fechaEntrega:Date): boolean{
        return true;

    }

    public marcarActividadRealizada(id: number): boolean{
        return true;
        
    }
}