<template>
    <v-toolbar app>
        <v-toolbar-title> -icono- </v-toolbar-title>
        <v-spacer></v-spacer>
        
        
    </v-toolbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class navbarOut extends Vue {
  @Prop() private msg!: string;
}
</script>
