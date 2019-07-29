<template>
    <v-container v-if="esEstudiante === true" fluid pa-0 justify-center align-center>
        <v-app-bar app style="background-color:#43A638">
            <v-icon class="fas fa-book-open" style="font-size:30px; color:#FFFE03" />
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-layout wrap mt-5 justify-center style="height:85%" >
            <v-flex xs10 md4 class="elevation-14" style="background-color:#a3f799">
                <v-carousel hide-delimiters hide-delimiter-background show-arrows-on-hover>
                    <v-carousel-item>
                        <v-layout align-center fill-height justify-center>
                            <div class="display-2"> No olvides tomar agua, estar hidratado ayuda a mejorar el rendimiento. </div>
                        </v-layout>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-layout justify-center fill-height align-center>
                            <div class="display-2"> Durante las pausas puedes comer algo ligero y saludable, alguna fruta estaría más que bien. </div>
                        </v-layout>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-layout justify-center fill-height align-center>
                            <div class="display-2"> Estirate un poco entre cada ciclo, esto te ayudará a sentirte activo mientras estudias. </div>
                        </v-layout>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
            <v-flex xs10 md4 style="background-color:#c2f5bc" class="elevation-14" justify-center align-center>
                <v-layout mt-5 class="formRegistro">
                    <v-layout justify-center align-center class="formcontainer" column>
                        <v-flex mt-3 justify-center align-center><div class="headline"> <v-icon class="fas fa-user" style="color:black"/> INICIA SESIÓN</div> <br> </v-flex>
                        <div class="my-2">
                            <v-btn small style="background-color:#0099cc" @click="esEstudiante=!esEstudiante">¿Eres padre?</v-btn>
                        </div>
                        <v-flex><input v-model="nombreUsuario" type="text" placeholder="Nombre de Usuario"> </v-flex>
                        <v-flex><input v-model="contrasena" type="password" placeholder="Contraseña"> </v-flex>
                        <v-flex><input v-on:click="iniciarSecion" class="button" type="submit" value="Entrar"> </v-flex>
                        <v-flex><div  style="color:black"> ¿No tienes cuenta? ¡Crea una aquí! </div>  </v-flex>
                    </v-layout>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>

    <!-- -->

    <v-container v-else fluid pa-0 justify-center align-center>
        <v-app-bar app style="background-color:#0099cc">
            <v-icon class="fas fa-book-open" style="font-size:30px; color:#FFFE03" />
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-layout wrap mt-5 justify-center style="height:85%" >
            <v-flex xs10 md4 class="elevation-14" style="background-color:#a5e6e6">
                <v-carousel hide-delimiters hide-delimiter-background show-arrows-on-hover>
                    <v-carousel-item>
                        <v-layout align-center fill-height justify-center>
                            <div class="display-2"> Recuerde que su acompañamientos es primordial para su hijo. </div>
                        </v-layout>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-layout justify-center fill-height align-center>
                            <div class="display-2"> Cada noche, arregle junto con su hijo su sitio de estudio. Esto ayudará a que no tenga distracciones al momento de hacer sus tareas. </div>
                        </v-layout>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-layout justify-center fill-height align-center>
                            <div class="display-2"> Verifique las notificaciones frecuentemente. </div>
                        </v-layout>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
            <v-flex xs10 md4 style="background-color:#e6ffff" class="elevation-14" justify-center align-center>
                <v-layout mt-5 class="formRegistro">
                    <v-layout justify-center align-center class="formcontainer" column>
                        <v-flex mt-3 justify-center align-center><div class="headline"> <v-icon class="fas fa-user" style="color:black"/> INICIA SESIÓN</div> <br> </v-flex>
                        <div class="my-2">
                            <v-btn small style="background-color:#73d169" @click="esEstudiante=!esEstudiante">¿Eres estudiante?</v-btn>
                        </div>
                        <v-flex><input v-model="nombreUsuario" type="text" placeholder="Nombre de Usuario"> </v-flex>
                        <v-flex><input v-model="contrasena" type="password" placeholder="Contraseña"> </v-flex>
                        <v-flex><input v-on:click="iniciarSecion" class="button" type="submit" value="Entrar"> </v-flex>
                        <v-flex><div  style="color:black"> ¿No tienes cuenta? ¡Crea una aquí! </div>  </v-flex>
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
            esEstudiante:true,
            nombreUsuario:"",
            contrasena:"",
            controlador: new ControladorAcceso()
        }
    },
    methods:{
        iniciarSecion(){
            if(this.esEstudiante) this.controlador.iniciarSesionEstudiante(this.nombreUsuario,this.contrasena);
            else this.controlador.iniciarSesionPadre(this.nombreUsuario,this.contrasena);
        }
    }    
}
</script>


<style scoped>
.formSesion{
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
    background-color: #ffcc33;
    display: inline-block;
    margin-bottom: 6px;
    color: black;
    padding: 4px 0px;
    width: 200px;
    text-decoration: none;
    border: 1px solid darkgray;
}
</style>