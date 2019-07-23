import { UsuarioController } from '@/modelo/controladores/UsuarioController';
import { Padre } from '@/modelo/clases/Padre';
import { PadreController } from '@/modelo/controladores/PadreController';

export class ControladorAcceso{

    private _logicaAcceso: UsuarioController;

    constructor(){
        this._logicaAcceso=new UsuarioController();
    }

    registrar(nombre:String,nombreUsuario:String,contrasena:String):void
    registrar(nombre:String,nombreUsuario:String,contrasena:String, padre: String): void
    public registrar(nombre:String,nombreUsuario:String,contrasena:String, padre?: String){
        if(padre === undefined){
            this._logicaAcceso.registrarPadre(nombre,nombreUsuario,contrasena);
        }else{
            this._logicaAcceso.registrarEstudiante(nombre,nombreUsuario,contrasena,padre);
        }
    }

    public iniciarSesion(nombreUsuario:String,contrasena:String, esPadre: boolean): void{
        if(esPadre){
            this._logicaAcceso.autentificarPadre(nombreUsuario,contrasena);
        }else{
            this._logicaAcceso.autentificarEstudiante(nombreUsuario,contrasena);
        }
    }

    public cerrarSesion(){

    }
}