<template>
    <v-container justify-center align-center>
        <v-toolbar app style=" background-color:#0099cc">
            <v-icon class="fas fa-book-open" style="font-size:30px; color:#ffcc33" />
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-card class="elevation-14" style="height:90%; margin-top:50px; background-color:#ccffff">
            <v-layout>
                <v-flex xs6>
                    <v-carousel hide-controls xs6>
                        <v-carousel-item> <v-img src="https://pm1.narvii.com/6724/16d21c3505e31896095ecfd5571ef41d6f6393afv2_hq.jpg" alt="img 1" /> </v-carousel-item>
                        <v-carousel-item> <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mwG33FEWtbHMI1IykWXmL3j7Fnkc6BRsA6ci3wDJekGUAEdo" alt="img 2" /> </v-carousel-item>
                        <v-carousel-item> <v-img src="https://www.huevadas.net/hacer/memes-y-graficos/uploads/memes/a2cb2cb146f1c055430cfb161f4c2bc0/bMhRDG.jpg" alt="img 3" /> </v-carousel-item>
                    </v-carousel>
                </v-flex>
                <v-flex xs6 justify-center align-center>
                    <div class="formSesion">
                        <div class="formcontainer">
                            <div style="margin-top:20px" class="headline"> <v-icon class="fas fa-user" style="color:black"/> INICIA SESIÓN </div> <br>
                            <input type="text" placeholder="Nombre de Usuario"> <br>
                            <input type="password" placeholder="Contraseña"> <br>
                            <input class="button" type="submit" value="Entrar"> <br>
                            <router-link class="color" to="/crearCuenta"><div style="color:black"> ¿No tienes cuenta? ¡Crea una aquí! </div> </router-link>
                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-card>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

export default class iniciarSesion extends Vue {

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