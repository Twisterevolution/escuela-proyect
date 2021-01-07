<template>
<div>
    <tablatipo
      tablename="Años Academicos Abiertos"
      :encabezado="datosCabeceraTabla"
      :datostabla="datosTablaAcademico"
      @abrirDialog1="abrirDialog1Parent"
    ></tablatipo>
    <v-dialog
        v-model="dialogNuevoAnoAcademico"
        scrollable 
        persistent :overlay="false"
        max-width="600px"
        transition="dialog-transition"
    >
    <v-card>
        <v-card-title primary-title class="text-center">
            CREACION DE NUEVO AÑO ACADEMICO
        </v-card-title>
        <v-card-text>
            <v-select
                dense
                outlined
                class="mt-3"
                :items="['2019','2020','2021','2022','2023','2024','2025','2026','2027','2028','2029','2030']"
                v-model="aacademico.añoacademico"
                label="Año Academico a abrir"
            ></v-select>
            
            <v-divider class="mb-1"></v-divider>
            <v-row>
                <h3 class="col-12">DURACION AÑO ACADEMICO</h3>
                <v-col cols="6">
                    <v-text-field
                        dense
                        outlined
                        hide-details
                        type="date"
                        name="name"
                        label="FECHA INICIO AÑO ACADEMICO"
                        v-model="aacademico.inicioaño"
                        id="id"
                    ></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field
                        dense
                        outlined
                        hide-details
                        type="date"
                        name="name"
                        label="FECHA TERMINO AÑO ACADEMICO"
                        v-model="aacademico.terminoaño"
                        id="id"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-divider class="mb-1"></v-divider>
            <v-row >
                <h3 class="col-6 mt-2 ml-2" >PERIODO ACADEMICO</h3>
                <v-radio-group v-model="aacademico.periodo" row>
                   <v-radio label="SEMESTRAL" value="2" ></v-radio>
                   <v-radio label="TRIMESTRAL" value="3"></v-radio>
                </v-radio-group>
               
            </v-row>
            <v-divider class="mb-1"></v-divider>
                       
                <h3 class="col-12">PERIODOS DE VACACIONES {{aacademico.periodo}}</h3>
                 <v-row >
                    <v-col cols="6" >
                        <v-text-field
                            dense
                            hide-details
                            outlined
                            type="date"
                            name="name"
                            label="INICIO"
                            v-model="aacademico.v1inicio"
                            id="id"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            dense
                            hide-details
                            outlined
                            type="date"
                            name="name"
                            label="TERMINO"
                            v-model="aacademico.v1termino"
                            id="id"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="6" >
                        <v-text-field
                            dense
                            outlined
                            hide-details
                            type="date"
                            name="name"
                            label="INICIO"
                            v-model="aacademico.v2inicio"
                            id="id"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            dense
                            hide-details
                            outlined
                            type="date"
                            name="name"
                            label="TERMINO"
                            v-model="aacademico.v2termino"
                            id="id"
                        ></v-text-field>
                    </v-col>
                </v-row>
                 <v-row v-if="aacademico.periodo==3">
                    <v-col cols="6" >
                        <v-text-field
                            dense
                            hide-details
                            outlined
                            type="date"
                            name="name"
                            label="INICIO"
                            v-model="aacademico.v3inicio"
                            id="id"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            dense
                            hide-details
                            outlined
                            type="date"
                            name="name"
                            label="TERMINO"
                            v-model="aacademico.v3termino"
                            id="id"
                        ></v-text-field>
                    </v-col>
                 </v-row>
        </v-card-text>
        <v-card-actions>
            <v-btn @click="dialogNuevoAnoAcademico=false" color="success" text>cancelar</v-btn>
            <v-btn color="success">GUARDAR</v-btn>
        </v-card-actions>
    </v-card>
        
    </v-dialog>
    <!-- <child @abremodal="otrometodo" ></child> -->
    </div>
</template>

<script>
import tablatipo from './tablatipo.vue'
export default {
  components: { tablatipo },
    name:"ano-academico",
    data() {
        return {
            aacademico:{
                añoacademico:"",
                inicioaño:"",
                terminoaño:"",
                periodo:"2",
                v1inicio:"",
                v2inicio:"",
                v3inicio:"",
                v1termino:"",
                v2termino:"",
                v3termino:"",

            },
            dialogNuevoAnoAcademico:false,
           
            datosCabeceraTabla:[    
                {text:'AÑO', value: 'nombre'},
                {text:'ESTADO', value:'codigo'},
                {text:'INICIO', value: 'inicio'},
                {text:'ACCIONES', value: 'actions'}
            ],
            datosTablaAcademico:[
                {nombre: '2021', codigo: 'Abierto', inicio: '06-03-2021'},
                {nombre: '2020', codigo: 'finalizado', inicio: '04-03-2020'},
                {nombre: '2019', codigo: 'cerrado', inicio: '15-03-2019'},
                {nombre: '2018', codigo: 'cerrado', inicio: '08-03-2018'},
            ]
             
        }
    },
    methods: {
        abrirDialog1Parent:function(params){
            this.dialogNuevoAnoAcademico = params
        }
    },
}
</script>

<style>


    
</style>