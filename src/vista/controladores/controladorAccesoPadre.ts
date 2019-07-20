import { ControladorPadre } from '@/modelo/controladores/controladorPadre';

export class ControladorAccesoPadre{

    private _controladorPadre: ControladorPadre;

    constructor(){this._controladorPadre=new ControladorPadre}

    public registrar(nombre:String,nombreUsuario:String,contrasena:String): void{
        let padre;
        let realizado = this._controladorPadre.registrar(nombre,nombreUsuario,contrasena);
        if(realizado){
            padre = this._controladorPadre.obtenerUsuario(nombreUsuario);
        }
    }

    public iniciarSesion(nombreUsuario:String,contrasena:String): void{
        let padre;
        let estaAutentificado = this._controladorPadre.autentificar(nombreUsuario,contrasena);
        if (estaAutentificado){
            padre = this._controladorPadre.obtenerUsuario(nombreUsuario);
        }
    }

    public cerrarSesion(){

    }
}