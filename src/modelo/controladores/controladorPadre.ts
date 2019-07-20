import { Padre } from '../clases/Padre';
import { PadrePersistencia } from '@/persistencia/padrePersistencia';

export class ControladorPadre{
    private _padrePersistencia: PadrePersistencia;

    constructor(){
        this._padrePersistencia=new PadrePersistencia
    }

    public registrar(nombre:String,nombreUsuario:String,contrasena:String): boolean{
        let padre = new Padre(nombre,nombreUsuario,contrasena);
        let yaRegistrado = this._padrePersistencia.validar(padre); 
        if(!yaRegistrado){
            this._padrePersistencia.guardar(padre);
            return true;
        }
        return false;
    }

    public obtenerUsuario(nombreUsuario: String): Padre{
        return this._padrePersistencia.buscar(nombreUsuario);
    }

    public autentificar(nombreUsuario:String,contrasena:String): boolean{
        let auth = this._padrePersistencia.autentificar(nombreUsuario,contrasena);
        if(auth) return true;
        return false;
    }
}