import Padre from "../logica/padre";
import PadrePersistencia from "../../persistencia/padrePersistencia";

export default class PadreController{
    listarEstudiantes(codPadre){
        return new Promise((resolve,reject) => {  
            new PadrePersistencia().listarHijos(codPadre)        
            .then(lista => {
                resolve(lista);
            })
        });
    }
}