<template>
    <v-container>
        <v-toolbar style="background-color:#0099cc" app>
            <v-spacer></v-spacer>
            <router-link class="color" to="/crearCuenta"><v-btn flat>Crear Cuenta</v-btn></router-link>
            <span> | </span>
            <v-btn flat>Inicia sesión</v-btn>
        </v-toolbar>
        <v-card xs11 class="elevation-14" style="margin-top:16%">
            <v-card-title>
                <v-layout justify-center align-center mt-2><v-icon class="fas fa-book-open" style="font-size:110px; color:black" /></v-layout>
            </v-card-title>
            <v-card-text xs10>
                <div class="mx-auto display-4"> ¡Bienvenido! </div>
                <div class="display-2"> ¿Listo para crear buenos habitos de estudio? </div>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    
}
</script>