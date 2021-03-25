<template>
    <v-container>
        <v-row >
            <v-col>
                <v-card color="info">
                    <v-row>
                   <v-card-title class="mr-2">
                        <h5 class="white--text">ESTADISTICAS GENERALES</h5>
                   </v-card-title>
                   </v-row>
                   <v-card-text class="pt-0">
                   <v-row>
                       <v-col md="4">
                           <cardinfo
                            color= "warning"
                            
                            heading= "Total Alumnos"
                            icon= "mdi-pencil"
                            
                            subtitle= "año 2021"
                            title= "250"
                        ></cardinfo>
                       </v-col>
                       <v-col md="4">
                           <cardinfo
                            color= "warning"
                            
                            heading= "Promedio asistencia Diaria"
                            icon= "mdi-pencil"
                            
                            subtitle= "chano"
                            title= "235"
                        ></cardinfo>
                       </v-col>
                       <v-col md="4">
                           <cardinfo
                            color= "warning"
                            
                            heading= "Promedio atrasos diarios"
                            icon= "mdi-pencil"
                            
                            subtitle= "chano"
                            title= "23"
                        ></cardinfo>
                       </v-col>
                   </v-row>
                   </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import cardinfo from '../asistenciaComponents/cardInfo'
export default {
    name:"dashboard-asistencia",
    components:{
        cardinfo
    }
}
</script>
<style scoped>

    
</style>