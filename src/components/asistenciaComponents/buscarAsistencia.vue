<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card elevation="5">
          <v-row>
            <v-col>
              <v-card-title>
                <v-col md="3" cols="12">
                  <v-btn @click="$router.go(-1)" color="warning" outlined dark class="px-5" large>
                    <v-icon left>mdi-arrow-left-circle</v-icon>volver
                  </v-btn>
                </v-col>

                <v-col md="3" cols="12">
                  <v-card elevation="5" class="py-3" color="info">
                    <h5
                      class="text-center white--text"
                    >TOTAL DIAS CLASES AÑO: {{$store.state.anioAcademicoData.anioAcademicoNumero}}</h5>
                    <h4 class="text-center white--text">{{dias}} DIAS</h4>
                  </v-card>
                </v-col>
                <v-col md="3" cols="12">
                  <v-card elevation="5" class="py-3" color="info">
                    <h5 class="text-center white--text">DIAS DE CLASES A LA FECHA</h5>
                    <h4 class="text-center white--text">15 DIAS</h4>
                  </v-card>
                </v-col>
                <v-col md="3" cols="12">
                  <v-card elevation="5" class="py-3" color="info">
                    <h5 class="text-center white--text">AVANCE DEL AÑO ESCOLAR</h5>
                    <h4 class="text-center white--text">7,9%</h4>
                  </v-card>
                </v-col>
              </v-card-title>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-if="false">
      <v-col>
        <v-card>TOTAL DIAS ASISTIDOS 10</v-card>
      </v-col>
      <v-col>
        <v-card>TOTAL DIAS INASISTENCIA 5</v-card>
      </v-col>
      <v-col>
        <v-card>PORCENTAJE ASISTENCIA ACTUAL 66%</v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card elevation="5">
            
          <v-card-title >
              ALUMNOS ESTABLECIMENTO AÑO 2021
          </v-card-title>
          <v-row>
              <v-col md="4">
                  <v-card-title>
                      <v-radio-group row>
                          <v-radio label="Buscar Alumno" class="ml-5" @click="tipoDeBusqueda(1)"></v-radio>
                          <v-radio label="Buscar Curso"  @click="tipoDeBusqueda(2)"></v-radio>
                      </v-radio-group>
                  </v-card-title>
              </v-col>
              <v-col md="8" v-if="buscarPorAlumno">
                  <v-card-text >
                        <v-row>
                            <v-col>
                                <v-autocomplete
                                    dense
                                    v-model="alumnoBuscado"
                                    :items="todosLosAlumos"
                                    auto-select-first
                                    item-text="nombre"
                                    item-value="idalumno"
                                    outlined
                                    label="Nombre Alumno"
                                ></v-autocomplete>
                            </v-col>
                            <v-col>
                                <v-text-field dense outlined label="desde"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field dense outlined label="hasta"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-select dense outlined :items="aniosNumeros" v-model="anioNumero" label="Año"></v-select>
                            </v-col>
                        </v-row>
                </v-card-text>
              </v-col>
              <v-col md="8" v-if="buscarPorCurso">
                <v-card-text >
                    <v-row>
                        <v-col>
                            <v-select
                                dense
                                v-model="cursoBuscado"
                                :items="todosLosAlumos"
                                outlined
                                label="Curso"
                            ></v-select>
                        </v-col>
                    </v-row>
                </v-card-text>
              </v-col>
          </v-row>
          <v-card-text>
            <v-data-table 
                dense
                :headers="cabecerasTabla" 
                :items="asistenciaResumenTodosLosAlumnos"
            ></v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "buscar-asistencia",
  data() {
    return {
      buscarPorCurso:false,
      buscarPorAlumno:false,
      anioNumero: null,
      dias: "",
      alumnoBuscado: "",
      cursoBuscado:"",
      aniosNumeros: [],
      todosLosAlumos: [],
      asistenciaResumenTodosLosAlumnos: [],
      cabecerasTabla: [
          { text: "Nombre Alumno", value: "nombre1" },
          { text: "Curso"},
          { text: "Dias de asitencia"},
          { text: "% asistencia"},
          { text: "Dias Ausente"},
          { text: "Dias de Atrasos"},
          { text: "Dias Licencia"},
          {text: "acciones"}

          ]
    };
  },
  methods: {
    traerTodosLosAlumnos: function() {
      let datosConsultar = {
        anioAcademico: this.$store.state.anioAcademicoData.id
      };
      let datosAnio = null;
      axios.get("/api/anioActivo").then(res => {
        datosAnio = res.data;
        this.dias = res.data.dias;
        axios
          .post("/api/getmatricula", { anioAcademico: datosAnio.id })
          .then(res => {
            let datos = res.data;
            let concatenados = datos.reduce((acc, x) => {
              let ob = {
                nombre: x.nombre1 + " " + x.apellido1,
                idalumno: x.idalumno
              };
              acc.push(ob);
              return acc;
            }, []);

            this.todosLosAlumos = concatenados;
          });
      });
    },
    traerAsistenciaTodosLosAlumnos: function() {
      console.log("datos");
      let anionumero = "";
      if (this.$store.state.anioAcademicoData.anioAcademicoNumero == undefined) {
        let datos = JSON.parse(localStorage.getItem("LSanioAcademicoId"));
        anionumero = datos.anioAcademicoNumero;
      } else {
        anionumero = this.$store.state.anioAcademicoData.anioAcademicoNumero;
      }
      axios.post("/api/getasistenciaresumen", { anioAcademicoNumero: anionumero })
            .then(res => {
                this.asistenciaResumenTodosLosAlumnos = res.data;
                console.log(res.data);
            });
    },
    tipoDeBusqueda:function(e){
        if (e ==1) {
            this.buscarPorAlumno = true
            this.buscarPorCurso = false   
        }else{
            this.buscarPorAlumno = false
            this.buscarPorCurso = true 
        }
    },
  },
  computed: {},
  created() {
    this.traerTodosLosAlumnos();
    this.traerAsistenciaTodosLosAlumnos();
  }
};
</script>

<style scoped>
</style>>
   
