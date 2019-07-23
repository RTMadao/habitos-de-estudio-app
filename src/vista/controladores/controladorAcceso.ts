import { UsuarioController } from '@/modelo/controladores/UsuarioController';

export class ControladorAcceso{

    private _logicaAcceso: UsuarioController;

    constructor(){this._logicaAcceso=new UsuarioController}

    public registrar(nombre:String,nombreUsuario:String,contrasena:String, esPadre: boolean): void{
        if(esPadre) this._logicaAcceso.registrarPadre(nombre,nombreUsuario,contrasena);
        else this._logicaAcceso.registrarEstudiante(nombre,nombreUsuario,contrasena);
    }

    public iniciarSesion(nombreUsuario:String,contrasena:String, esPadre: boolean): void{
        if(esPadre){

        }else{
            
        }
    }

    public cerrarSesion(){

    }
}