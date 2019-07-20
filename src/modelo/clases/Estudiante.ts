import {ActividadAcademica} from './ActividadAcademica';
import { Padre } from './Padre';
import { Notificacion } from './Notificacion';
import { Usuario } from './Usuario';
import { Recomendacion } from './Recomendacion';
import { SistemaControlActividad } from './SistemaControlActividad';

export class Estudiante extends Usuario{
    
    private _padre: String;
    private _listaActividades: Array<ActividadAcademica>;

    constructor(nombre: String, nombreUsuario: String, contrasena: String, padre: String){
        super(nombre,nombreUsuario,contrasena);
        this._padre=padre
        this._listaActividades=new Array<ActividadAcademica>();
    }

    get padre(){
        return this._padre;
    }

    get listaActividades(){
        return this._listaActividades;
    }

    public anadirNotificacion(descripcion:String,fechaEnviado:Date): boolean{
        return true;

    }

    public listarActividadAcademica(): Array<ActividadAcademica>{
        return [];
        
    }

    public anadirActividadAcademica(tarea: ActividadAcademica): void{
        this._listaActividades.push(tarea);
    }

    public marcarActividadRealizada(id: number): boolean{
        return true;
        
    }
}