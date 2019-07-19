import {Estudiante} from './Estudiante';
import { ActividadAcademica } from './ActividadAcademica';
import { Usuario } from './Usuario';
import { Recomendacion } from './Recomendacion';

export class Padre extends Usuario{
    
    private _listaHijos: Array<Estudiante>;
    
    constructor(nombre: String, nombreUsuario: String, contrasena: String){
        super(nombre,nombreUsuario,contrasena);
        this._listaHijos=new Array<Estudiante>();
    }

    public registrarHijo(nombre: String, nombreUsuario: String, contrasena: String){
        this._listaHijos.push(new Estudiante(nombre, nombreUsuario, contrasena, super.nombreUsuario))
    }

    public eliminarActividadAcademica(id:number): boolean{
        return true;
    }

    public modificarActividadAcademica(id:number): boolean{
        return true;

    }

    public listarActividadesEstudiante(estudiante:Estudiante): Array<ActividadAcademica>{
        return [];
    }

    public eliminarNotificacion(id:number): boolean{
        return true;

    }

    public listarNotificaciones(): boolean{
        return true;
        
    }

    public listarRecomendaciones(escenarioUso: String): Array<Recomendacion>{
        return [];
    }
}