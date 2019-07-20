<template>
    <navbarOut/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import navbarOut from '@/vista/components/navbar_out.vue'

@Component({
    components:{
        navbarOut
    }
})


export default class inicio extends Vue {}
</script>