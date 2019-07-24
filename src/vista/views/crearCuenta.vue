<template>
    <v-container justify-center align-center>
        <v-toolbar app style=" background-color:#0099cc">
            <v-icon class="fas fa-book-open" style="font-size:30px; color:#ffcc33" />
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-card class="elevation-14" style="height:90%; margin-top:50px; background-color:#ccffff">
            <v-layout>
                <v-flex xs6>
                    <v-carousel hide-controls xs6 >
                        <v-carousel-item> <v-img src="https://images.justwatch.com/poster/19530374/s592" alt="img 1" /> </v-carousel-item>
                        <v-carousel-item> <v-img src="https://images-na.ssl-images-amazon.com/images/I/81%2BB3qb13PL._SY679_.jpg" alt="img 2" /> </v-carousel-item>
                        <v-carousel-item> <v-img src="https://d3ieicw58ybon5.cloudfront.net/ex/350.484/shop/product/bc56f3ef2f984fa4b68f9c66ba29303d.jpg" alt="img 3" /> </v-carousel-item>
                    </v-carousel>
                </v-flex>
                <v-flex xs6 justify-center align-center>
                    <div class="formRegistro">
                        <div class="formcontainer">
                            <div style="margin-top:20px" class="headline"> <v-icon class="fas fa-user" style="color:black"/> CREA UNA CUENTA</div> <br>
                            <input type="text" placeholder="Nombre"> <br>
                            <input type="text" placeholder="Nombre de Usuario"> <br>
                            <input type="password" placeholder="Contraseña"> <br>
                            <input type="password" placeholder="Confirmar Contraseña"> <br>
                            <input class="button" type="submit" value="Crear Cuenta"> <br>
                            <router-link class="color" to="/iniciarSesion"><div style="color:black"> ¿Ya tienes cuenta? ¡Inicie sesion aquí! </div> </router-link>
                        </div>
                    </div>
                    
                </v-flex>
            </v-layout>
        </v-card>
    </v-container>
</template>

<script>
export default {
    
}
</script>


<style scoped>
.formRegistro{
    height:90%;
    display: flex;
    justify-content: center;
    align-items: center;
}


input{
    font-size: 20px;
    width: 300px;
    margin: 0px;
    margin-top: 5%;
    align-content: center;
    text-align: center;
    padding: 4px 0px;
    border-radius:5px;
    border: 1px solid darkgray;
    background-color: white;
}
.button{
    background-color: #ffcc33;
    display: inline-block;
    margin-bottom: 6px;
    color: black;
    padding: 4px 0px;
    width: 200px;
    text-decoration: none;
    border: 1px solid darkgray;
}
</style>