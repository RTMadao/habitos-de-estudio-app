import { Estudiante } from '@/modelo/clases/Estudiante';

export class ActividadAcademicaPersistencia{
    public guardar(estudiante: Estudiante){
        return true;
    }
    public buscar(nombreUsuario: String): Estudiante{
        return new Estudiante("","","","");
    }
    public autentificar(nombreUsuario:String,contrasena:String): boolean{
        return true;
    }
    public actualizar(estudiante:Estudiante, campo: String): boolean{
        return true;
    }
    public validar(estudiante: Estudiante): boolean{
        return true;
    }
}