<template>
    <v-card>
        <v-card-title primary-title>
            Nueva denuncia segun manual de convivencia
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="12">
                    <v-select
                        outlined
                        :items="tipoDenuncia"
                        label="Tipo de Denuncia / Procedimento"
                        v-model="tipoDenunciaSeleccionada"
                    ></v-select>
                </v-col>    
                <v-col cols="12" class="mb-5">
                    <v-btn color="warning" block @click="dialogBuscarAlumno = true">
                        <v-icon class="mr-3">mdi-account-multiple-plus-outline</v-icon> 
                        AGREGAR ALUMNO INVOLUCRADO</v-btn>
                </v-col>
                <div cols="12" class="d-flex ml-5  " v-for="(alumno,id) in alumnosInvolucrados" :key="id">
                    <v-text-field
                        dense
                        outlined
                        readonly
                        class="mr-2"
                        label="Nombre Alumno"
                        :value="alumno.nombre"
                    ></v-text-field>
                     <v-text-field
                        dense
                        outlined
                        readonly
                        label="Curso"
                        :value="alumno.curso"
                    ></v-text-field>
                    <v-btn class="ml-3" color="deep-orange accent-4" dark><v-icon>mdi-delete</v-icon></v-btn>
                </div>   
            </v-row>
            <v-row>
                <v-col>
                    <v-textarea
                        outlined
                        label="Descripcion de los hechos"
                    ></v-textarea>
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-btn @click="cerrardialog" color="warning" text dark>CANCELAR</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="success">GUARDAR</v-btn>
        </v-card-actions>
        <v-dialog
            v-model="dialogBuscarAlumno"
            persistent :overlay="false"
            max-width="600px"
           
        >
            <v-card>
                <v-card-title primary-title>
                    Buscar Alumno
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col class="d-flex">
                            <v-text-field
                                outlined
                                dense
                                hide-details
                                
                                label="Buscar por Apellido"
                                
                            ></v-text-field>
                            <v-btn
                                class="ml-3" 
                                color="success"
                            >buscar</v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="d-flex">
                            <v-select
                                outlined
                                dense
                                hide-details
                                
                                label="Buscar por Curso"
                               
                            ></v-select>
                            <v-btn
                                class="ml-3" 
                                color="success"
                            >buscar</v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>
                <v-col>
                <v-data-table
                    scrollable
                    :headers="encabezado"
                    :items="datos"
                   
                    hide-default-footer
                    :items-per-page="-1"
                    class="elevation-5"
                    
                >
                <template v-slot:item.select="{item}">                        
                    <v-checkbox @click="cerrarDialogBuscarAlumno(item)"></v-checkbox>
                </template>
                    
                </v-data-table>
                </v-col>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
export default {
    name:"form-denuncia",
    data() {
        return {
            dialogBuscarAlumno:false,
            search:"",
            tipoDenuncia:["Acoso sexual","Cyber Bulling","Embarazo"],
            alumnosInvolucrados:[],
            tipoDenunciaSeleccionada:"",

            encabezado:[
                {text: "Nombre Alumno", value: "nombre"},
                {text: "Curso", value: "curso"},
                {text:"Seleccionar", value: "select"}
            ],
            datos:[
                {id:1, nombre:"Juan Pablo", curso:"1°Medio A"},
                {id:2, nombre:"Eduardo Muñoz", curso:"2°Medio A"}
            ]
        }
    },
    methods: {
        cerrardialog:function(){
            this.alumnosInvolucrados=[]
            this.tipoDenunciaSeleccionada=""
            this.$emit('cerrar', false) 
        },
        cerrarDialogBuscarAlumno:function(e){
            this.dialogBuscarAlumno = false
            console.log(e);
            this.alumnosInvolucrados.push(e)

        }
    },
}
</script>

<style scoped>
/* *{
    border: 1px solid;
} */
.borde-grupo{
    border: 1px solid rgb(187, 187, 187);
    border-radius: 5px;
}
</style>