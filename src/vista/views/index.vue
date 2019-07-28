<template>
    <v-container fluid pa-0>
        <v-app-bar style="background-color:#0099cc" app>
            <v-spacer></v-spacer>
            <!--<router-link to="/crearCuenta">--><v-btn text @click="toCrearCuenta()">Crear Cuenta</v-btn><!--</router-link>-->
            <span> | </span>
            <v-btn text @click="toIniciarSesion()">Inicia sesión</v-btn>
        </v-app-bar>
        <v-card style="height:16%" />
        <v-card class="elevation-14">
            <v-card-title>
                <v-layout justify-center align-center mt-2><div class="fas fa-book-open" style="font-size:110px; color:#FFFE03" /></v-layout>
            </v-card-title>
            <v-card-text xs10>
                <v-layout justify-center align-center mt-4 class="display-4"> ¡Bienvenido a Aprende a Estudiar! </v-layout>
                <v-layout justify-center align-center mt-4 class="display-2"> ¿Listo para crear buenos habitos de estudio? </v-layout>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    
}
</script>