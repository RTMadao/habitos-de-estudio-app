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
                        <v-flex mt-3 justify-center align-center><div class="headline"> <v-icon class="fas fa-user" style="color:black"/> CREA UNA CUENTA</div> <br> </v-flex>
                        <v-flex><input type="text" placeholder="Nombre"> </v-flex>
                        <v-flex><input type="text" placeholder="Nombre de Usuario"> </v-flex>
                        <v-flex><input type="password" placeholder="Contraseña"> </v-flex>
                        <v-flex><input type="password" placeholder="Confirmar Contraseña"> </v-flex>
                        <v-flex><input class="button" type="submit" value="Crear Cuenta"> </v-flex>
                        <v-flex><div  style="color:black"> ¿Ya tienes cuenta? ¡Inicie sesion aquí! </div>  </v-flex>
                    </v-layout>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    
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