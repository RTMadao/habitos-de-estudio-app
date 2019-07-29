<template>
    <v-container fluid pa-0 justify-center align-center>
        <v-app-bar app style="background-color:#0099cc">
            <v-icon class="fas fa-book-open" style="font-size:30px; color:#FFFE03" />
            <v-spacer></v-spacer>
            <v-btn text @click="toAgregarEstudiante">Agregar estudiante</v-btn>
            <span> | </span>
            <v-btn text @click="toIndex()">Cerrar sesión</v-btn>
        </v-app-bar>

        <!-- -->

        <v-layout wrap>
            <v-flex xs11 md9>
                <listaEstudiantes/>
            </v-flex>
            <v-flex style="background-color:#e8e8e8" xs11 md3 align-center justify-center>
                <v-layout column align-content-space-around justify-center>
                    <v-flex mt-3>
                        <div style="text-align:center; text-decoration:underline;" class="display-1"> NOTIFICACIONES </div>
                    </v-flex>
                </v-layout>
                <v-layout column mt-3>
                    <v-flex style="padding:5px; background-color:#e6ffff; border-radius: 18px 18px 18px 18px; -moz-border-radius: 18px 18px 18px 18px; -webkit-border-radius: 18px 18px 18px 18px; border: 2px solid #79b0f7; " xs11 ma-4 v-for="(notificacion, index) in notificaciones" v-bind:key="index" >
                        <div> <span style="font-weight: bold;"> {{notificacion.estudiante}} - </span> {{notificacion.mensaje}} </div> 
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import listaEstudiantes from '../components/listaEstudiantes.vue';
import {mapState} from 'vuex';
import ControladorPadre from '../controladores/controladorPadre';
import router from '../../router';

export default {
    components:{
        listaEstudiantes
    },
    data(){
        return{
            notificaciones:[]
        }
    },
    methods:{
        toAgregarEstudiante(){
            router.push('agregarEstudiante');
        }
    },
    computed:{
        ...mapState(['usuarioActivo'])
    },
    created(){
        let controlador = new ControladorPadre()
        this.notificaciones = controlador.listarNotificaciones(this.$store.state.usuarioActivo);
    }
}
</script>

<style scoped>

</style>
