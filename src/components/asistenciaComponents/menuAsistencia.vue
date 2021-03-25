<template>
    <v-container>
        <v-card elevation="5">
            <v-card-title class="text-center">
                MENU ASISTENCIAS
            </v-card-title>
            <v-card-text>
                <v-row class="text-center" >
                    <v-col md="12">
                        <v-btn x-large color="primary" block :to="{name:'PasarAsistencia'}">pasar asistencia</v-btn>    
                    </v-col>
                </v-row>
                <v-row class="text-center" >
                    <v-col md="12">
                        <v-btn x-large color="primary" block :to="{name:'BuscarAsistencia'}">buscar asistencia</v-btn>  
                    </v-col>
                </v-row>
                <v-row class="text-center" >
                    <v-col md="12" >
                        <v-btn x-large color="primary" block>admini asistencias</v-btn>  
                    </v-col>
                </v-row>
                <v-row class="text-center" >
                    <v-col md="12" >
                        <v-btn x-large  @click="$router.go(-1)" color="warning" block outlined><v-icon left>mdi-arrow-left-circle</v-icon>volver al menu </v-btn>  
                    </v-col>
                </v-row>
            </v-card-text>
       
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "menu-asistencia",

    data() {
        return {
            
        }
    },
}
</script>
<style scoped>


    
</style>