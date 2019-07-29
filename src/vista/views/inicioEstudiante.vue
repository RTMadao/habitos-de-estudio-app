<template>
    <v-container fluid pa-0 justify-center align-center>
        <v-app-bar app style="background-color:#43A638">
            <v-icon class="fas fa-book-open" style="font-size:30px; color:#FFFE03" />
            <v-spacer></v-spacer>
            <v-btn text @click="toNotificarPadre()"> <div class="far fa-bell"/> Noticificar padre</v-btn>
            <span> | </span>
            <v-btn text @click="toIndex()">Cerrar sesión   <div class="fas fa-sign-out-alt"/> </v-btn>
        </v-app-bar>

        <!-- -->

        <v-layout row>
            <v-flex align-center justify-center xs11 md7>
                    <v-layout align-center justify-center wrap>
                        <v-flex xs11 sm5 xl2 ma-5> 
                            <v-card color="#c2f5bc" style="border-radius: 4px 4px 4px 4px; -moz-border-radius: 4px 4px 4px 4px; -webkit-border-radius: 4px 4px 4px 4px; border: 2px solid #6cd160; height:400px">
                                <v-flex style="max-height:40px;border-bottom: 1px solid #6cd160;"> <v-btn text style="text-decoration: underline;"> Ver en planeador semanal <div class="far fa-calendar-alt"/> </v-btn> </v-flex>
                                <v-layout column justify-start style="height:280px;" >
                                    
                                    <v-flex px-2 xs11 style="max-height:30px" v-for="(tarea,index) in tareas" v-bind:key="index">
                                        <v-flex v-if="tarea.hecha" >
                                            <v-flex v-if="tarea.verificada">
                                                <div style="color:grey; text-decoration:line-through;"> [{{tarea.fechaEntrega}} ] {{tarea.tarea}} en {{tarea.materia}} </div>
                                            </v-flex>
                                            <v-flex v-else>
                                                <div style="color:grey;"> [{{tarea.fechaEntrega}} ] {{tarea.tarea}} en {{tarea.materia}} (Revisar) </div>
                                            </v-flex>
                                        </v-flex>
                                        <v-flex v-else>
                                            <div style="color:black;"> [{{tarea.fechaEntrega}} ] {{tarea.tarea}} en {{tarea.materia}} </div>
                                        </v-flex>
                                    </v-flex>
                                </v-layout>
                            </v-card> 
                        </v-flex>
                </v-layout>
            </v-flex>
            <v-flex align-center justify-center xs11 md5>
                <v-layout xs10 mt-5 class="formTarea" justify-center align-center>
                    <v-card style="width:450px; height:320px" color="yellow">
                        <v-layout xs8 justify-center align-center class="formcontainer"  column>
                            <v-flex mt-3 justify-center align-center><div class="headline"> <v-icon class="fas fa-tasks" style="color:black"/> AGREGA UNA TAREA</div> <br> </v-flex>
                            <v-flex><input v-model="fecha" type="date" placeholder="Fecha"> </v-flex>
                            <v-flex mt-3> <textarea v-model="actividad" rows="3" cols="23" style="background-color:white; border-radius: 4px 4px 4px 4px; -moz-border-radius: 4px 4px 4px 4px; -webkit-border-radius: 4px 4px 4px 4px; border: 1px solid darkgrey" placeholder="Descripcion"> </textarea> </v-flex>
                            <!--<v-flex><input v-model="actividad" type="-" > </v-flex>-->
                            <v-flex><input v-model="materia" type="text" placeholder="Materia"> </v-flex>
                            <v-flex><input v-on:click="agregarActividad" class="button" type="submit" value="Agregar" style="font-color:yellow;border: 1px solid yellow; background-color: white;"> </v-flex>
                        </v-layout> 
                    </v-card>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
//import planeadorSemanal from '../components/planeadorSemanal.vue'
import ControladorEstudiante from '../controladores/controladorEstudiante';
export default {
    data(){
        return{
            selActividades:['investigación','taller','examen'],
            fecha:'',
            actividad:'',
            materia:'',
            tareas:[]
        }
    },
    methods:{
        agregarActividad(){
            new ControladorEstudiante().agregarActividad(this.actividad,this.materia,this.fecha);
            new ControladorEstudiante().listar()
            .then(lista =>{
                this.tareas = lista;
            });
        }
    },
    created(){
        new ControladorEstudiante().listar()
        .then(lista =>{
            this.tareas = lista;
        });
    }
}
</script>

<style scoped>
input{
    font-size: 16px;
    width: 200px;
    margin: 0px;
    margin-top: 5%;
    align-content: center;
    text-align: center;
    padding: 4px 0px;
    border-radius:5px;
    border: 1px solid darkgray;
    background-color: white;
}
</style>
