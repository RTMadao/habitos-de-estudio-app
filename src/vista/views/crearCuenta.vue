<template>
    <v-container fluid pa-0 justify-center align-center>
        <v-app-bar app style=" background-color:#0099cc">
            <v-icon class="fas fa-book-open" style="font-size:30px; color:#FFFE03" />
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-layout wrap mt-5 justify-center style="height:85%" >
            <v-flex xs10 md4 class="elevation-14" style="background-color:#a5e6e6">
                <v-carousel hide-delimiters hide-delimiter-background show-arrows-on-hover>
                    <v-carousel-item>
                        <v-layout justify-center fill-height align-center>
                            <div class="display-3"> Asegúrese de que su hijo cuenta con un sitio de estudio bien iluminado, cómodo y libre de distracciones. </div>
                        </v-layout>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-layout justify-center fill-height align-center>
                            <div class="display-2"> Al llegar a casa, verifique las tareas realizadas por su hijo. De esta forma sabemos que realmente las completó. </div>
                        </v-layout>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
            <v-flex xs10 md4 style="background-color:#e6ffff" class="elevation-14" justify-center align-center>
                <v-layout mt-5 class="formRegistro">
                    <v-layout justify-center align-center class="formcontainer" column>
                        <v-flex mt-3 justify-center align-center><div class="headline"> <v-icon class="fas fa-user" style="color:black"/> CREA UNA CUENTA</div> <br> </v-flex>
                        <v-flex><input v-model="nombre" type="text" placeholder="Nombre"> </v-flex>
                        <v-flex><input v-model="nombreUsuario" type="text" placeholder="Nombre de Usuario"> </v-flex>
                        <v-flex><input v-model="contrasena" type="password" placeholder="Contraseña"> </v-flex>
                        <v-flex><input v-model="contrasenaConfirmacion" type="password" placeholder="Confirmar Contraseña"> </v-flex>
                        <v-flex><input v-on:click="registrar" class="button" type="submit" value="Crear Cuenta"> </v-flex>
                        <v-flex><div  style="color:black"> ¿Ya tienes cuenta? ¡Inicie sesion aquí! </div>  </v-flex>
                    </v-layout>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import ControladorAcceso from '../controladores/controladorAcceso';
export default {
    data(){
        return{
            nombre:"",
            nombreUsuario:"",
            contrasena:"",
            contrasenaConfirmacion:"",
            controlador: new ControladorAcceso()
        }
    },
    methods:{
        registrar(){
            if(this.controlador.confirmarContrasena(this.contrasena,this.contrasenaConfirmacion)){
                this.controlador.registrarPadre(this.nombre,this.nombreUsuario,this.contrasena);   
            }else{
                console.log("las contraseñas no coinciden")
            }
        }
    }
}
</script>


<style scoped>
.formRegistro{
    height:90%;
    display: flex;
    justify-content: center;
    align-items: center;
}


input{
    font-size: 20px;
    width: 300px;
    margin: 0px;
    margin-top: 5%;
    align-content: center;
    text-align: center;
    padding: 4px 0px;
    border-radius:5px;
    border: 1px solid darkgray;
    background-color: white;
}
.button{
    background-color: #ffcc33; /*FFFE03*/
    display: inline-block;
    margin-bottom: 6px;
    color: black;
    padding: 4px 0px;
    width: 200px;
    text-decoration: none;
    border: 1px solid darkgray;
}
</style>