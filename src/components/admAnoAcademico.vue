<template>
<div>
    <tablatipo
      tablename="Años Academicos Abiertos"
      :encabezado="datosCabeceraTabla"
      :datostabla="datosTablaAcademico"
      @abrirDialog1="abrirDialog1Parent"
      :loading="cargando"
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
            CREACIÓN DE NUEVO AÑO ACADÉMICO
        </v-card-title>
        <v-card-text>
            <v-select
                dense
                outlined
                hide-details
                class="mt-3"
                :items="['2019','2020','2021','2022','2023','2024','2025','2026','2027','2028','2029','2030']"
                v-model="aacademico.añoacademico"
                label="Selecciona año académico"
            ></v-select>
            
            <v-divider class="mb-1"></v-divider>
            <v-row>
                <h3 class="col-12">DURACIÓN AÑO ACADÉMICO</h3>
                <v-col cols="6">
                    <v-text-field
                        dense
                        outlined
                        hide-details
                        type="date"
                        name="name"
                        label="FECHA INICIO AÑO ACADÉMICO"
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
                        label="FECHA TÉRMINO AÑO ACADÉMICO"
                        v-model="aacademico.terminoaño"
                        id="id"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-divider class="mb-1"></v-divider>
            <v-row class="">
                <v-col class="periodo-academico-border mb-2 mx-3">
                  <h3 >PERIODO ACADÉMICO</h3>
                <v-radio-group hide-details v-model="aacademico.periodo" row dense>
                   <v-radio label="SEMESTRE" value="2" ></v-radio>
                   <v-radio label="TRIMESTRE" value="3"></v-radio>
                </v-radio-group>  
                </v-col>
                <v-col class="periodo-academico-border mb-2 mx-3">
                    <h3 class="mb-3">MATRÍCULAS DEL PERIODO</h3>
                <v-text-field
                    dense
                    outlined
                    hide-details
                    type="number"
                    name="name"
                    label="Total"
                    v-model="aacademico.matriculasDisponibles"
                ></v-text-field>
                </v-col>
               
            </v-row>
            <v-divider class="mb-1"></v-divider>
                       
                <h3 class="col-12">VACACIONES</h3>
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
                            label="TÉRMINO"
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

    </div>
</template>

<script>
import axios from 'axios'
import tablatipo from './tablatipo.vue'
export default {
  components: { tablatipo },
    name:"ano-academico",
    data() {
        return {
            cargando:true,
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
                matriculasDisponibles:""

            },
            dialogNuevoAnoAcademico:false,
           
            datosCabeceraTabla:[    
                {text:'AÑO', value: 'anioAcademicoNumero'},
                {text:'ESTADO', value:'estado.estado'},
                {text:'INICIO', value: 'fechaInicio'},
                {text:'ACCIONES', value: 'actions'}
            ],
            datosTablaAcademico:[
                
            ]
             
        }
    },
    methods: {
        abrirDialog1Parent:function(params){
            this.dialogNuevoAnoAcademico = params
        },
        traeranios(){
            axios.get('/api/anioAcademico')
            .then(res=>{
                this.datosTablaAcademico = res.data
                this.cargando=false
            })
        }
    },
    mounted() {
        this.traeranios()
    },
}
</script>

<style scoped>
.periodo-academico-border{
    border: 1px solid rgb(187, 187, 187);
    border-radius: 5px;
}


    
</style>