<template>
  <v-container>
    <v-row>
      <v-col md="4" cols="12">
        <v-form v-model="buscarValid" ref="buscarcurso">
          <v-card>
            <v-card-text class="text-center">
              <v-select
                outlined
                :items="$store.state.nivelesapp"
                item-text="nivel"
                item-value="idnivel"
                @change="traercursos"
                v-model="nivel"
                label="CURSO"
                :rules="[v => !!v || 'Selecciones una opcion']"
                required
              ></v-select>
              <v-select
                v-if="letrasView"
                outlined
                :items="cursos"
                item-text="curso"
                item-value="idcurso"
                v-model="curso"
                label="LETRA"
                @change="borraTabla"
                :rules="[v => !!v || 'Selecciones una opcion']"
                required
              ></v-select>
              <div>JORNADA</div>
              <v-radio-group
                v-model.number="setAsistencia.sesion.idjornada"
                row
                :rules="[v => !!v || 'Selecciones una opcion']"
              >
                <v-row justify="space-around">
                  <v-radio
                    v-for="jornada in jornadas"
                    :key="jornada.idjornada"
                    :label="jornada.jornada"
                    :value="jornada.idjornada"
                  ></v-radio>
                </v-row>
              </v-radio-group>

              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="dateFormatted"
                    label="Fecha"
                    @blur="date = parseDate(dateFormatted)"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    v-on="on"
                    required
                    :rules="[v => !!v || 'Selecciones una opcion']"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  @input="menu1 = false"
                  locale="es"
                  first-day-of-week="1"
                ></v-date-picker>
              </v-menu>
            </v-card-text>
            <v-card-actions>
              <v-row>
                <v-col cols="12">
                  <v-btn
                    :disabled="!buscarValid"
                    @click="traerAlumnosCurso"
                    color="secondary"
                    class="white--text"
                    block
                    large
                  >BUSCAR</v-btn>
                </v-col>
                <v-col cols="12">
                  <v-btn
                   
                    @click="$router.go(-1)"
                    color="warning"
                    outlined
                    block
                    dark
                    class="px-5"
                    large
                  >
                    <v-icon left>mdi-arrow-left-circle</v-icon>volver
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
      <v-col md="8" >
        <v-card>
          <v-card-text>
            <v-card-title primary-title>
              <v-col md="8" cols="12">
                <h4>ASISTENCIA CURSO</h4>
              </v-col>

              <v-col md="2" cols="12">
                <v-btn
                  v-if="titulotabla"
                  color="primary"
                  class="white--text"
                  @click="guardarAsistencia"
                >
                  <v-icon left>mdi-checkbox-multiple-marked</v-icon>GUARDAR ASISTENCIA
                </v-btn>
              </v-col>
            </v-card-title>
            <v-row v-for="alumno in setAsistencia.asistentes" :key="alumno.idalumno" dense>
              <v-col
                cols="6"
                align-self="center"
              >{{alumno.apellidoPat}} {{alumno.apellidoMat}} , {{alumno.nombre1}}</v-col>
              <v-col cols="6">
                <v-radio-group
                  row
                  dense
                  hide-details
                  class="mt-0"
                  v-model="alumno.estadoAsistencia"
                >
                  <v-radio
                    label="Presente"
                    :value="estadosDeAsistencia[0].idestado_asistencia"
                    class="mr-5"
                  ></v-radio>
                  <v-radio label="Ausente" :value="estadosDeAsistencia[1].idestado_asistencia"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col>
                <v-divider class></v-divider>
              </v-col>
            </v-row>
            <v-card-actions>
                <v-row justify="center">
                    <v-col class="text-center">
                        <v-btn
                v-if="titulotabla"
                color="primary"
                class="white--text"
                @click="guardarAsistencia"
              >
                <v-icon left>mdi-checkbox-multiple-marked</v-icon>GUARDAR ASISTENCIA
              </v-btn>
                    </v-col>
                </v-row>
              
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "pasar-asitencia",
  data() {
    return {
      overlay: false,
      letrasView: false,
      buscarValid: true,
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
      nivel: null,
      curso: null,
      estadosDeAsistencia: [],
      cursos: [],
      jornadas: [],
      alumnosCurso: null,
      setAsistencia: {
        sesion: {
          idjornada: 0,
          fecha: this.date,
          idcurso: null,
          estadoSesion: 1
        },
        asistentes: []
      }
    };
  },
  methods: {
    traerjornada: function() {
      axios.get("/api/jornada").then(res => {
        this.jornadas = res.data;
      });
    },
    traerniveles() {
      this.alumnosCurso = null;
      axios.get("/api/niveles").then(res => {
        this.niveles = res.data;
      });
    },
    traeEstadoAsistencia: function() {
      axios.get("/api/estadoasistencia").then(res => {
        this.estadosDeAsistencia = res.data;
      });
    },
    traercursos: function() {
      this.letrasView = false;
      this.setAsistencia.asistentes = [];
      this.overlay = true;
      axios.get("/api/cursos").then(res => {
        this.letrasView = true;
        let cursosFilatrados = res.data.filter(x => {
          return x.nivel_idnivel == this.nivel;
        });
        this.cursos = cursosFilatrados;
        this.overlay = false;
      });
    },
    traerAlumnosCurso: function() {
      this.setAsistencia.sesion.idcurso = this.curso;
      this.setAsistencia.asistentes = [];
      this.overlay = true;

      let datosConsulta = {
        idcurso: this.setAsistencia.sesion.idcurso,
        fecha: this.setAsistencia.sesion.fecha
      };
      console.log(datosConsulta);

      axios.post("/api/getasistencia", datosConsulta).then(res => {
        if (res.data.length == 0) {
          axios
            .post("/api/getmatricula", {
              anioAcademico: this.$store.state.anioAcademicoData.id,
              idCurso: this.curso
            })
            .then(res => {
              this.alumnosCurso = res.data;

              for (let index = 0; index < res.data.length; index++) {
                this.setAsistencia.asistentes.push({
                  idAlumno: res.data[index].idalumno,
                  nombre1: res.data[index].nombre1,
                  apellidoPat: res.data[index].apellido1,
                  apellidoMat: res.data[index].apellido2,
                  estadoAsistencia: 1
                });
              }
              this.overlay = false;
            });
        } else {
          this.overlay = false;
          Swal.fire({
            allowOutsideClick: false,
            icon: "warning",
            title: "Asistencia ya existe para este curso",
            text: "verifique la informacion"
          });
        }
      });
    },
    guardarAsistencia: function() {
      console.log(this.setAsistencia);

      axios
        .post("/api/tomarasistencia", { setAsistencia: this.setAsistencia })
        .then(res => {
          console.log(res.data);
          if (true) {
            this.setAsistencia.asistentes = [];
            this.$refs.buscarcurso.reset();
            Swal.fire({
              allowOutsideClick: false,
              icon: "success",
              title: "Asistencia Guardada",
              text: "Exito"
            });
          }
        });
    },
    validarbuscar: function() {
      this.$refs.buscarcurso.validate();
    },
    borraTabla: function() {
      this.setAsistencia.asistentes = [];
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [day, month, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  },
  watch: {
    date(val) {
      this.setAsistencia.sesion.fecha = this.date;

      this.dateFormatted = this.formatDate(this.date);
    }
  },
  computed: {
    computedDateFormatted() {
      this.setAsistencia.sesion.fecha = this.date;
      return this.formatDate(this.date);
    },
    titulotabla() {
      if (this.setAsistencia.asistentes.length > 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    this.traerjornada();
    this.traeEstadoAsistencia();
  }
};
</script>

<style scoped>

</style>