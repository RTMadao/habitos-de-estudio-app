<template>
    <v-container>
        <v-layout align-content-space-around wrap>
            <v-flex xs11 sm5 xl2 ma-5 v-for="(estudiante, id) in estudiantes" v-bind:key="id"> 
                <v-card color="#e8e8e8" style="border-radius: 4px 4px 4px 4px; -moz-border-radius: 4px 4px 4px 4px; -webkit-border-radius: 4px 4px 4px 4px; border: 2px solid #919191; height:400px">
                    <div style="text-align:center; padding-top:6px" class="display-1"> {{estudiante.nombre}} </div>
                    <v-layout column justify-start style="background-color:#e6ffff; height:280px; border-top: 2px solid #79b0f7;border-bottom: 2px solid #79b0f7;" >
                        <v-flex px-2 xs11 style="max-height:30px" v-for="(tarea,index) in estudiante.tareas" v-bind:key="index">
                            <v-flex v-if="tarea.hecha" >
                                <v-flex v-if="tarea.verificada">
                                    <a style="color:grey; text-decoration:line-through;" v-bind:class="{seleccionado : tarea.id == seleccionada}" v-on:click="seleccionar(tarea.id)"> [{{tarea.fecha}} ] {{tarea.actividad}} en {{tarea.materia}} </a>
                                </v-flex>
                                <v-flex v-else>
                                    <a v-on:click="seleccionar(tarea.id)" style="color:grey;"> [{{tarea.fecha}} ] {{tarea.actividad}} en {{tarea.materia}} (Revisar) </a>
                                </v-flex>
                            </v-flex>
                            <v-flex v-else>
                                <a v-on:click="seleccionar(tarea.id)" style="color:black;"> [{{tarea.fecha}} ] {{tarea.actividad}} en {{tarea.materia}} </a>
                            </v-flex>
                        </v-flex>
                    </v-layout>
                    <v-layout justify-center align-center >
                        <v-flex xs6 justify-center align-center> <v-btn style="background-color:#ffcc33; display: inline-block; margin-bottom: 6px; color: black; padding: 4px 0px; width: 200px; text-decoration: none; border: 1px solid darkgray;"> Modificar tarea </v-btn> </v-flex>
                        <v-flex xs6 justify-center align-center><v-btn style="background-color:#ffcc33; display: inline-block; margin-bottom: 6px; color: black; padding: 4px 0px; width: 200px; text-decoration: none; border: 1px solid darkgray;"> Modificar tarea </v-btn></v-flex>
                    </v-layout>
                </v-card> 
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
import ControladorPadre from '../controladores/controladorPadre';

export default {
    data(){
        return{
            estudiantes:[],
            seleccionada:null
        }
    },
    computed:{
        ...mapState(['usuarioActivo'])
    },
    methods:{
        seleccionar(select){
            this.seleccionada = select; 
            console.log(select);
        }
    },
    created(){
        let controlador = new ControladorPadre()
        controlador.listarEstudiantes(this.$store.state.usuarioActivo)
        .then(lista => {
            this.estudiantes = lista;
        });
    }
}
</script>
<style scoped>
.seleccionado{
    color: darkblue;
}
</style>
