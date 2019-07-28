import Padre from "../modelo/logica/padre";


export default class PadrePersistencia{
    guardar(padre=Padre){
        return {confirmacion: true, mensaje: "se a guardado exitosamente"};
    }
    buscar(codPadre){
        
    }
    buscarNombreUsuario(nombreUsuario){
        return null;
    }
    autenticar(nombreUsuario,contrasena){
        return padre;
    }
    actualizar(padre=Padre){

    }
    cantidadPadres(){

    }
}