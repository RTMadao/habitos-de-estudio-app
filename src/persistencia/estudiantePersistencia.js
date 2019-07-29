import Estudiante from "../modelo/logica/estudiante";
import { db } from "../main";



export default class EstudiantePersistencia{
    guardar(estudiante=Estudiante,codPadre){

    }
    buscar(codEstuiante){
        return new Promise((resolve,reject) => {
            db.collection("users").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if(doc.data().listaHijos != undefined){
                        doc.data().listaHijos.forEach(hijo => {
                            if(hijo.nombreUsuario == codEstuiante){
                                resolve(hijo);
                            }      
                        });
                    }
                });
            });
        });
    }
    autenticar(nombreUsuario,contrasena){
        return new Promise((resolve,reject) => {
            console.log(nombreUsuario+contrasena);
            db.collection("users").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if(doc.data().listaHijos != undefined){
                        doc.data().listaHijos.forEach(hijo => {
                            if(hijo.nombreUsuario == nombreUsuario){
                                resolve({auth: hijo.contrasena == contrasena, padre: doc.data().nombreUsuario});
                            }      
                        });
                    }
                });
            });
        });
    }
    actualizar(estudiante=Estudiante){

    }
}