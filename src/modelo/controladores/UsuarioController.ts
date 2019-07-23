import { PadrePersistencia } from '@/persistencia/padrePersistencia';
import { EstudiantePersistencia } from '@/persistencia/estudiantePersistencia';
import { Padre } from '../clases/Padre';

export class UsuarioController{
    private _padrePersistencia: PadrePersistencia;
    private _estudiantePersistencia: EstudiantePersistencia;

    constructor(){
        this._padrePersistencia = new PadrePersistencia();
        this._estudiantePersistencia = new EstudiantePersistencia();
    }

    public registrarPadre(nombre: String, nombreUsuario: String, contrasena: String): boolean{
        this._padrePersistencia.guardar(new Padre('cod',nombre,nombreUsuario,contrasena));
        return true;
    }

    public autentificarPadre(): boolean{
        return true;
    }

    public registrarEstudiante(nombre: String, nombreUsuario: String, contrasena: String): boolean{
        this._padrePersistencia.guardar(new Padre('cod',nombre,nombreUsuario,contrasena));
        return true;
    }

    public autentificarEstudiante(): boolean{
        return true;
    }
}