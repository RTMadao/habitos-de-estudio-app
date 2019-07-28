import Padre from "../modelo/logica/padre";
import firebase from 'firebase'
import { db } from '../main.js'

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
        return true;
    }
    actualizar(padre=Padre){

    }
    cantidadPadres(){

    }
    login () {
        db.collection("users").add({
        first: "carlos",
        last: "bello",
        born: 1815
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
    leer (){
        db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        console.log(doc.data());
        });
        });
    }
}