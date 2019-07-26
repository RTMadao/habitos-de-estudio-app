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
                            <v-img src="https://i1.adis.ws/i/petsathome/breed-Husky-image-2.jpg?qlt=75" alt="img 1" />
                        </v-layout>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-layout justify-center fill-height align-center>
                            <div class="display-3"> HEEEEY </div>
                        </v-layout>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-layout justify-center fill-height align-center>
                            <div class="display-2"> Para las recomendaciones :B </div>
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
                        <v-flex><input type="text" placeholder="Nombre de Usuario"> </v-flex>
                        <v-flex><input type="password" placeholder="Contraseña"> </v-flex>
                        <v-flex><input class="button" type="submit" value="Entrar"> </v-flex>
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
                            <v-img src="https://ep01.epimg.net/internacional/imagenes/2017/06/08/mundo_global/1496905694_554768_1496906045_noticia_normal.jpg" alt="img 1" />
                        </v-layout>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-layout justify-center fill-height align-center>
                            <div class="display-3"> HEEEEY </div>
                        </v-layout>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-layout justify-center fill-height align-center>
                            <div class="display-2"> Para las recomendaciones :B </div>
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
                        <v-flex><input type="text" placeholder="Nombre de Usuario"> </v-flex>
                        <v-flex><input type="password" placeholder="Contraseña"> </v-flex>
                        <v-flex><input class="button" type="submit" value="Entrar"> </v-flex>
                        <v-flex><div  style="color:black"> ¿No tienes cuenta? ¡Crea una aquí! </div>  </v-flex>
                    </v-layout>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            esEstudiante:true
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