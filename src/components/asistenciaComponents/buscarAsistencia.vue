<template>
    <v-container>
        <v-row>
            <v-col>
               <v-card elevation="5">
                   <v-card-title primary-title>
                       <v-btn
                            @click="$router.go(-1)"
                            color="warning"
                            outlined
                            dark
                            class="px-5"
                            large
                        >
                        <v-icon left>mdi-arrow-left-circle</v-icon>volver
                        </v-btn>
                   </v-card-title>
                   <v-card-title primary-title>
                       Parametros de Busqueda
                   </v-card-title>
                   <v-card-text>
                       <v-row>
                           <v-col>
                               <v-autocomplete 
                                    dense
                                    v-model="alumnoBuscado"
                                    :items="todosLosAlumos"
                                    item-text="nombre"
                                    item-value="idalumno"
                                    outlined
                                    label="Nombre Alumno"
                                >
                                </v-autocomplete>
                            </v-col>
                            <v-col>
                                <v-text-field
                                    dense
                                    outlined
                                    label="desde"
                                ></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field
                                    dense
                                    outlined
                                    label="hasta"
                                ></v-text-field>
                            </v-col>
                            <v-col>
                                <v-select
                                    dense
                                    outlined
                                    :items="items"
                                    v-model="anioNumero"
                                    label="Año"
                                ></v-select>
                            </v-col>    
                       </v-row>
                   </v-card-text>
               </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card>
                    T. DIAS CLASES AÑO 190 DIA (38 SEMANAS)
                </v-card>
            </v-col>
             <v-col>
                <v-card>
                    TOTAL DIAS DE CLASE 15
                </v-card>
            </v-col>
             <v-col>
                <v-card>
                    TOTAL AVANCE AÑO ESCOLAR 7.9%
                </v-card>
            </v-col>
        </v-row>
        <v-row>
             <v-col>
                <v-card>
                    TOTAL DIAS ASISTIDOS 10 
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    TOTAL DIAS INASISTENCIA 5 
                </v-card>
            </v-col>
             <v-col>
                <v-card>
                    PORCENTAJE ASISTENCIA ACTUAL 66%
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title primary-title>
                        Nombre alumno:------------------
                    </v-card-title>
                    <v-card-text>
                        <ul>
                            <li>fecha: 01-03-2021 ...........    estado: presente</li>
                            <li>fecha: 02-03-2021 ...........    estado: presente</li>
                            <li>fecha: 03-03-2021 ...........    estado: presente</li>
                            <li>fecha: 04-03-2021 ...........    estado: ausente</li>
                            <li>fecha: 05-03-2021 ...........    estado: ausente</li>
                        </ul>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: "buscar-asistencia",
    data() {
        return {
            anioNumero:null,
            alumnoBuscado:null,
            todosLosAlumos:null 
        }
    },
    methods:{
        traerTodosLosAlumnos: function(){
            let datosConsultar = {"anioAcademico": this.$store.state.anioAcademicoData.id }            
            axios.post('/api/getmatricula', datosConsultar)
                .then(res=>{
                    let datos = res.data
                    let concatenados = datos.reduce((acc, x)=>{
                        let ob = {"nombre": x.nombre1 +" "+x.apellido1, "idalumno": x.idalumno}
                        acc.push(ob)
                        return acc
                    },[])
                                   
                    this.todosLosAlumos = concatenados
                })
        }
    },
    computed: {
        
    },
    created() {
        this.traerTodosLosAlumnos();
    },
}
</script>