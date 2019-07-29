import Padre from "../modelo/logica/padre";
import firebase from 'firebase'
import { db } from '../main.js'

export default class PadrePersistencia{
    guardar(padre=Padre){
        // Add a new document in collection "cities"
        db.collection("users").doc(padre.id).set({
            id: padre.id,
            nombre: padre.nombre,
            nombreUsuario: padre.nombreUsuario,
            contrasena: padre.contrasena
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
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
        let conteo = 0;
        db.collection("users").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                conteo++;
                console.log(doc.data() + conteo);
            });
            return conteo+1;
        });
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