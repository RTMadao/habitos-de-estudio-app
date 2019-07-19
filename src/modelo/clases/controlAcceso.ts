import { Usuario } from './Usuario';
import { Padre } from './Padre';

export class controlAcceso{

    public agregarPadre(nombre:String,nombreUsuario:String,contrasena:String): boolean{
        return true;
    }

    public iniciarSesion(nombreUsuario:String,contrasena:String): Usuario{
        return new Padre("","","");
    }

    public listarPadres(id:number): Array<Padre>{
        return [];

    }
}