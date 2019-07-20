import { Padre } from '@/modelo/clases/Padre';

export class PadrePersistencia{
    public guardarPadreBD(padre: Padre): boolean{
        return true;
    }
    public buscarPadreBD(nombreUsuario: String): Padre{
        return new Padre("","","");
    }
    public autentificarPadreBD(nombreUsuario:String,contrasena:String): boolean{
        return true;
    }
    public actualizarPadre(padre:Padre): boolean{
        return true;
    }
}