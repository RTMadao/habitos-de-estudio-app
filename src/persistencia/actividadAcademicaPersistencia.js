import Estudiante from "../modelo/logica/estudiante";
import ActividadAcademica from "../modelo/logica/actividadAcademica";
import Padre from "../modelo/logica/padre";
import { db } from "../main";

export default class ActividadAcademicaPersistencia{
    guardar(padre=Padre){
        return new Promise((resolve,reject) => {
            // Add a new document in collection "cities"
            
            console.log(padre);
            db.collection("users").doc(padre.id).update({
                listaHijos: padre.listaHijos
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
            resolve({confirmacion: true, mensaje: "se a guardado exitosamente"})
        });
    }
    eliminar(idActividad){

    }
    modificar(actividad=ActividadAcademica){

    }
    listar(idEstudiante){

    }
}