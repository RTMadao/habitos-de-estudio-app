<template>
    <v-container justify-center align-center>
        <v-toolbar app>
            <v-icon class="fas fa-book-open" style="font-size:30px; color:black" />
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-card class="elevation-14" style="height:90%; margin-top:50px">
            <v-layout>
                <v-flex xs6>
                    <v-carousel hide-controls xs6 >
                        <v-carousel-item> <v-img src="https://images.justwatch.com/poster/19530374/s592" alt="img 1" /> </v-carousel-item>
                        <v-carousel-item> <v-img src="https://images-na.ssl-images-amazon.com/images/I/81%2BB3qb13PL._SY679_.jpg" alt="img 2" /> </v-carousel-item>
                        <v-carousel-item> <v-img src="https://d3ieicw58ybon5.cloudfront.net/ex/350.484/shop/product/bc56f3ef2f984fa4b68f9c66ba29303d.jpg" alt="img 3" /> </v-carousel-item>
                    </v-carousel>
                </v-flex>
                <v-flex xs6 justify-center align-center>
                    <div class="formcontainer">
                        <div style="margin-top:20px" class="headline">CREA UNA CUENTA</div>
                        <input type="text" placeholder="Nombre">
                        <input type="text" placeholder="Nombre de Usuario">
                        <input type="text" placeholder="Contraseña">
                        <input type="text" placeholder="Confirmar Contraseña">
                        <input class="button" type="submit" value="Crear Cuenta">
                    </div>
                </v-flex>
            </v-layout>
        </v-card>
        
        
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

export default class crearCuenta extends Vue {
    

    Array<image>(){

    }
    
    items: any[] = [
        {
            name: "Gatito1", 
            src: 'https://www.feelcats.com/blog/wp-content/uploads/2019/03/gatitos-cuidados.jpg'
        },
        {
            name: "Gatito2",
            src: 'https://www.feelcats.com/blog/wp-content/uploads/2019/03/gatito-mainecoon.jpg'
        }

    ]

}
</script>


<style>
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