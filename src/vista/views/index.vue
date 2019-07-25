<template>
    <v-container fluid p-0>
        <v-toolbar style="background-color:#0099cc" app>
            <v-spacer></v-spacer>
            <router-link to="/crearCuenta"><v-btn color="#0099cc" class="elevation-0">Crear Cuenta</v-btn></router-link>
            <span> | </span>
            <v-btn color="#0099cc" class="elevation-0">Inicia sesión</v-btn>
        </v-toolbar>
        <v-card xs10 sm6 class="elevation-14" style="margin-top:16%">
            <v-card-title>
                <v-layout justify-center align-center mt-2><div class="fas fa-book-open" style="font-size:110px; color:#FFFE03" /></v-layout>
            </v-card-title>
            <v-card-text xs10 justify-center align-center>
                <div class="mx-auto display-4"> ¡Bienvenido a Aprende a Estudiar! </div>
                <div class="display-2"> ¿Listo para crear buenos habitos de estudio? </div>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    
}
</script>