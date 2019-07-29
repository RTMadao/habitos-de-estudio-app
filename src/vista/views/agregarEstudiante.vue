<template>
    <v-container fluid pa-0 justify-center align-center>
        <v-app-bar app style=" background-color:#0099cc">
            <v-icon class="fas fa-book-open" style="font-size:30px; color:#FFFE03" />
            <v-spacer></v-spacer>
            <v-btn text @click="toInicioPadre()"> <span class="fas fa-arrow-left"/> Volver </v-btn>
        </v-app-bar>
        <v-layout wrap mt-5 justify-center style="height:85%" >
            <v-flex xs10 md4 class="elevation-14" style="background-color:#a3f799">
                <v-carousel hide-delimiters hide-delimiter-background show-arrows-on-hover>
                    <v-carousel-item>
                        <v-layout align-center fill-height justify-center>
                            <div class="display-2"> No le asigne un usuario muy complicado. </div>
                        </v-layout>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-layout justify-center fill-height align-center>
                            <div class="display-2"> No coloque una contraseña difícil de recordar para su hijo. </div>
                        </v-layout>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-layout justify-center fill-height align-center>
                            <div class="display-2"> Se recomienda que esté presente en la primera sesión para orientar al niño. </div>
                        </v-layout>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
            <v-flex xs10 md4 style="background-color:#c2f5bc" class="elevation-14" justify-center align-center>
                <v-layout mt-5 class="formRegistro">
                    <v-layout justify-center align-center class="formcontainer" column>
                        <v-flex mt-3 justify-center align-center><div class="headline"> <v-icon class="fas fa-child" style="color:black"/> AGREGA UN ESTUDIANTE</div> <br> </v-flex>
                        <v-flex><input type="text" placeholder="Nombre"> </v-flex>
                        <v-flex><input type="text" placeholder="Nombre de Usuario"> </v-flex>
                        <v-flex><input type="password" placeholder="Contraseña"> </v-flex>
                        <v-flex><input type="password" placeholder="Confirmar Contraseña"> </v-flex>
                        <v-flex><input class="button" type="submit" value="Agregar estudiante"> </v-flex>
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