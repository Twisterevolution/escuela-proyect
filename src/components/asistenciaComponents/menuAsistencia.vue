<template>
    <v-container>
        <v-row class="text-center" justify="center">
            <v-col md="6">
                <v-btn x-large color="primary" block :to="{name:'PasarAsistencia'}">pasar asistencia por cursos</v-btn>    
            </v-col>
        </v-row>
        <v-row class="text-center" justify="center">
            <v-col md="6">
                 <v-btn x-large color="primary" block :to="{name:'BuscarAsistencia'}">busqueda de asistencia</v-btn>  
            </v-col>
        </v-row>
        <v-row class="text-center" justify="center">
            <v-col md="6" >
                 <v-btn x-large color="primary" block>administracion asistencias</v-btn>  
            </v-col>
        </v-row>
         <v-row class="text-center" justify="center">
            <v-col md="6" >
                 <v-btn x-large  @click="$router.go(-1)" color="warning" block outlined><v-icon left>mdi-arrow-left-circle</v-icon>volver al menu </v-btn>  
            </v-col>
        </v-row>
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