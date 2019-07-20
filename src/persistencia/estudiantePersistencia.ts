import { Estudiante } from '@/modelo/clases/Estudiante';

export class EstudiantePersistencia{
    public guardarEstudianteBD(estudiante: Estudiante): boolean{
        return true;
    }
    public buscarEstudianteBD(nombreUsuario: String): Estudiante{
        return new Estudiante("","","","");
    }
    public autentificarEstudianteBD(nombreUsuario:String,contrasena:String): boolean{
        return true;
    }
    public actualizarEstudiante(estudiante: Estudiante): boolean{
        return true;
    }
}