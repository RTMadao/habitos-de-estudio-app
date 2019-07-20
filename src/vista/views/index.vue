<template>
    <v-container>
        <v-toolbar app>
            <v-spacer></v-spacer>
            <v-btn flat>Crear Cuenta</v-btn>
            <span> | </span>
            <v-btn flat>Inicia sesión</v-btn>
        </v-toolbar>
        <v-card xs11 mt-4>
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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

export default class inicio extends Vue {}
</script>


<style>

</style>
