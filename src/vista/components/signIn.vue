<template>
    <v-container>
        
            <div class="formcontainer">
                <input type="text" placeholder="Nombre">
                <input type="text" placeholder="Nombre de Usuario">
                <input type="text" placeholder="Contraseña">
                <input type="text" placeholder="Confirmar Contraseña">
                <input class="button" type="submit" value="Crear Cuenta">
            </div>
        
    </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class signIn extends Vue {
  @Prop() private msg!: string;
}
</script>
<style scoped>
.formcontainer{
    color: rgb(22, 22, 22);
    top: 50%;
    margin-top: -150px;
    margin-left: 15%;
    position: absolute;
    background-color: white;
    width: 350px;
    height: 400px;
    border-radius: 14px;
    border: 1px solid darkgrey;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
input{
    font-size: 20px;
    width: 300px;
    margin: 0px;
    margin-bottom: 3%;
    align-content: center;
    text-align: center;
    padding: 4px 0px;
    border: 1px solid darkgray;
    background-color: white;
}
.button{
    background-color: white;
    display: inline-block;
    margin-bottom: 6px;
    color: rgb(22, 22, 22);
    padding: 4px 0px;
    width: 200px;
    text-decoration: none;
    border: 1px solid darkgray;
}
</style>
