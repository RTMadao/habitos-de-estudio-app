import { Padre } from '@/modelo/clases/Padre';

export class PadrePersistencia{
    public guardar(padre: Padre){
        return true;
    }
    public buscar(nombreUsuario: String): Padre{
        return new Padre("","","");
    }
    public autentificar(nombreUsuario:String,contrasena:String): boolean{
        return true;
    }
    public actualizar(padre:Padre): boolean{
        return true;
    }
    public validar(padre: Padre): boolean{
        return true;
    }
}