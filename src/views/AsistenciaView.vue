<template>
    <div>
      <v-row>
        <v-col md="3">
           <menu-asistencia></menu-asistencia>
        </v-col>
        <v-col md="9">
          <v-row>
            <v-col>
              <dashboard-asistencia></dashboard-asistencia>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="6">
              <v-card >
                <v-card-text mr-5>
                  <grafico-prueba></grafico-prueba>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col md="6">
              <v-card >
                <v-card-text mr-5>
                  <grafico-prueba2></grafico-prueba2>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
         
         
         
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          
        </v-col>
      </v-row>
      
    </div>
</template>

<script>
import menuAsistencias from '../components/asistenciaComponents/menuAsistencia'
import dashBoardAsistenciaVue from '../components/asistenciaComponents/dashBoardAsistencia.vue';
import grafico from '../components/grafico.js'
import grafico2 from '../components/grafico2.js'



export default {
  name: "asistenciaView",
  
  components:{
      "menu-asistencia":menuAsistencias,
      "dashboard-asistencia": dashBoardAsistenciaVue,
      "grafico-prueba": grafico,
      "grafico-prueba2": grafico2
  },
  data() {
    return {
     
    }
  },


};
</script>

<style scoped>
menu-lateral{
    border: 1px solid
}
</style>