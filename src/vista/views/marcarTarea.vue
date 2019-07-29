<template>
    <v-container fluid pa-0 justify-center align-center>
        <v-app-bar app style=" background-color:#43A638">
            <v-icon class="fas fa-book-open" style="font-size:30px; color:#FFFE03" />
            <v-spacer></v-spacer>
            <v-btn text @click="toInicioEstudiante()"> <span class="fas fa-arrow-left"/> Volver </v-btn>
        </v-app-bar>
        <v-layout wrap mt-5 justify-center style="height:85%" >
            <v-flex xs10 md4 style="background-color:#a3f799; border-radius: 4px 4px 4px 4px; -moz-border-radius: 4px 4px 4px 4px; -webkit-border-radius: 4px 4px 4px 4px;" class="elevation-14" justify-center align-center>
                <v-layout my-5 class="formRegistro">
                    <v-layout justify-center align-center class="formcontainer" column>
                        <v-flex px-2 my-2 xs11 style="max-height:30px" v-for="(tarea,index) in tareas" v-bind:key="index">
                                <v-flex v-if="!tarea.hecha" >
                                    <v-checkbox v-model="tarea.selected" color="blue" class="title" style="font-color:black" :label="`[${tarea.fecha.toString()}] ${tarea.descripcion} en ${tarea.materia}`"></v-checkbox>
                                </v-flex>
                                
                            </v-flex>
                        <v-flex my-3 > <v-btn style="background-color:#adffa3"> Marcar como terminadas </v-btn> </v-flex>
                    </v-layout>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            tareas:[
                {
                    fecha: '27-07-2019',
                    materia:'economia',
                    descripcion: 'Expo',
                    hecha: false,
                    verificada: false,
                    selected:false
                },
                {
                    fecha: '27-07-2019',
                    materia:'dibujo',
                    descripcion:'Proyecto',
                    hecha: true,
                    verificada: true,
                    selected:false
                }
            ]
        }
    }
}
</script>

<style scoped>
</style>