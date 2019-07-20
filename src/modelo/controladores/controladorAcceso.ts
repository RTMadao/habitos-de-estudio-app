import { Usuario } from '../clases/Usuario';
import { Padre } from '../clases/Padre';

export abstract class controlAcceso{

    abstract registrar(nombre:String,nombreUsuario:String,contrasena:String): boolean;

    abstract inisiarSesion(padre: Padre, nombre:String,nombreUsuario:String,contrasena:String): boolean

    abstract cerrarSesion(nombreUsuario:String): Usuario;
}