import { EstudiantePersistencia } from '@/persistencia/estudiantePersistencia';
import { Estudiante } from '../clases/Estudiante';

export class ControladorEstudiante{
    private _estudiantePersistencia: EstudiantePersistencia;

    constructor(){
        this._estudiantePersistencia=new EstudiantePersistencia
    }

    public registrar(nombre:String,nombreUsuario:String,contrasena:String,padre:String): boolean{
        let estudiante = new Estudiante(nombre,nombreUsuario,contrasena, padre);
        let yaRegistrado = this._estudiantePersistencia.validar(estudiante); 
        if(!yaRegistrado){
            this._estudiantePersistencia.guardar(estudiante);
            return true;
        }
        return false;
    }

    public obtenerUsuario(nombreUsuario: String): Estudiante{
        return this._estudiantePersistencia.buscar(nombreUsuario);
    }

    public autentificar(nombreUsuario:String,contrasena:String): boolean{
        let auth = this._estudiantePersistencia.autentificar(nombreUsuario,contrasena);
        if(auth) return true;
        return false;
    }
}