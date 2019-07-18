import {Estudiante} from './Estudiante';

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

    public eliminarActividadAcademica(id:number){

    }

    public modificarActividadAcademica(id:number){

    }

    public listarNoActividadesEstudiante(estudiante:Estudiante){
        
    }

    public eliminarNotificacion(id:number){

    }

    public listarNotificaciones(){
        
    }
}