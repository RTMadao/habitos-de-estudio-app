<template>
    <v-container fluid pa-0 justify-center align-center>
        <v-app-bar app style=" background-color:#43A638">
            <v-icon class="fas fa-book-open" style="font-size:30px; color:#FFFE03" />
            <v-spacer></v-spacer>
            <v-btn text @click="toInicioEstudiante()"> <span class="fas fa-arrow-left"/> Volver </v-btn>
        </v-app-bar>
        <v-layout wrap mt-5 justify-center style="height:85%" >
            <v-flex xs10 md4 style="background-color:#a3f799; border-radius: 4px 4px 4px 4px; -moz-border-radius: 4px 4px 4px 4px; -webkit-border-radius: 4px 4px 4px 4px;" class="elevation-14" justify-center align-center>
                <v-layout mt-5 class="formRegistro">
                    <v-layout justify-center align-center class="formcontainer" column>
                        <v-flex mt-3 justify-center align-center><div class="headline"> <v-icon class="far fa-envelope" style="color:black"/> ENVIALE UN MENSAJE A TU PADRE</div> <br> </v-flex>
                        <v-flex> <textarea rows="4" cols="48" style="background-color:white; border-radius: 4px 4px 4px 4px; -moz-border-radius: 4px 4px 4px 4px; -webkit-border-radius: 4px 4px 4px 4px; border: 2px solid #adffa3" placeholder="Escribe tu mensaje: "/> </v-flex>
                        <v-flex my-3 > <v-btn style="background-color:#adffa3"> Enviar </v-btn> </v-flex>
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