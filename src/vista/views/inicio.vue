<template>
    <v-container>
        <navbarOut/>
        <signIn xs6 xl5 />
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import navbarOut from '@/vista/components/navbar_out.vue'
import signIn from '@/vista/components/signIn.vue'

@Component({
    components:{
        navbarOut,
        signIn
    }
})

export default class inicio extends Vue {}
</script>

<style scoped>
    signIn{
        height: 75%;
        
    }
</style>
