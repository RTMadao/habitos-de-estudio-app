import {Estudiante} from './Estudiante';
import { ActividadAcademica } from './ActividadAcademica';

export class Padre{
    private nombre: String;
    private nombreUsuario: String;
    private contrasena: String;
    private listaHijos: Array<Estudiante>;
    
    constructor(nombre: String, nombreUsuario: String, contrasena: String){
        this.nombre=nombre;
        this.nombreUsuario=nombreUsuario;
        this.contrasena=contrasena;
        this.listaHijos=new Array<Estudiante>();
    }

    public registrarHijo(nombre: String, nombreUsuario: String, contrasena: String){
        this.listaHijos.push(new Estudiante(nombre, nombreUsuario, contrasena, this.nombreUsuario))
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
}