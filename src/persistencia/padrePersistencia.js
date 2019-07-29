import Padre from "../modelo/logica/padre";
import firebase from 'firebase'
import { db } from '../main.js'

export default class PadrePersistencia{
    guardar(padre=Padre){
        return new Promise((resolve,reject) => {
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
            resolve({confirmacion: true, mensaje: "se a guardado exitosamente"})
        });
    }
    listarHijos(codPadre){
        return new Promise((resolve,reject) => {
            db.collection("users").where("nombreUsuario", "==", codPadre)
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.data().listaHijos);
                    resolve(doc.data().listaHijos);
                });
            });
        });
    }
    buscar(codPadre){
        return new Promise((resolve,reject) => {
            db.collection("users").where("nombreUsuario", "==", codPadre)
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    resolve(doc.data());
                });
            });
        });
    }
    buscarNombreUsuario(nombreUsuario){
        return null;
    }
    autenticar(nombreUsuario,contrasena){
        return new Promise((resolve,reject) => {
            db.collection("users").where("nombreUsuario", "==", nombreUsuario)
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.data().contrasena == contrasena);
                    resolve(doc.data().contrasena == contrasena);
                });
            });
        });
    }
    actualizar(padre=Padre){
        return new Promise((resolve,reject) => {
            // Add a new document in collection "cities"
            
            padre.listarHijosDB();
            console.log(padre);
            db.collection("users").doc(padre.id).set({
                id: padre.id,
                nombre: padre.nombre,
                nombreUsuario: padre.nombreUsuario,
                contrasena: padre.contrasena,
                listaHijos: padre.listaHijosDB
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
    cantidadPadres(){
        return new Promise((resolve,reject) => {
            let conteo = 0;
            db.collection("users").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    conteo++;
                    console.log(doc.data() + conteo);
                });
                setTimeout(function(){
                    resolve(conteo + 1); // ¡Todo salió bien!
                }, 250);
            });
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