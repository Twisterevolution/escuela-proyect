<template>
    <v-row>
        <v-col cols="12" class="text-start title-color-bg ">
            <h2 class="title-color-bg white--text"><v-btn class="btnseparate" color="success" to='./matriculas'>VOLVER</v-btn> ASIGNAR ALUMNOS A SUS CURSOS</h2>
        </v-col>
        <v-col cols="4" class="br-secction">
            <h3>selecciona año y grado</h3>
            <v-select
                dense
                outlined
                class="mt-3"
                :items="['2019','2020','2021']"
                
                label="AÑO ACADEMICO"
            ></v-select>
            <v-select
                dense
                outlined
                :items="['1medio','2medio']"
                
                label="GRADO A ASIGNAR"
            ></v-select>
            <v-card width="370" elevation="5" class=" mx-1 my-3 d-inline-block"
                v-for="ready in cursos" :key="ready.id"
            >
                <v-row class="">
                    <v-col cols="5" class="ml-3">
                        <h3>{{ready.text}}</h3>  
                    </v-col>
                    <v-col cols="6">
                        <v-chip class="" color="primary">Total Alumnos: {{ready.total}}</v-chip>
                    </v-col>                        
                </v-row>
            </v-card>
            
           
             
        </v-col>
        <v-col cols="8">
             <v-data-table
                dense
                loading-text="... Un momento porfavor"
                :headers="cabecera"
                :items="datosTabla"
                class="elevation-5 mt-3"
            >
            <template v-slot:item.asignar="{item}">
                <v-select
                    dense
                    outlined
                    class="my-1"
                    hide-details
                    :items="cursos"
                    v-model="item.curso"
                    label="asignar curso"
                    @input="total3"
                ></v-select>
            </template>
           
            </v-data-table>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name:"asignar-alumno-a-curso",
    data() {
        return {
            cabecera:[
                {text:'N°Mat', value:'matricula'},
                {text:'Rut', value:'rut'},
                {text:'alumno', value:'nombre'},
                {text:'Curso asignado', value:'curso', align:'center'},
                {text:'asignar', value:'asignar', width: "25%"}
            ],
            datosTabla:[
                {matricula:'1232', rut:'14.585.245-8', nombre:'Americo Dislexico', curso:''},
                {matricula:'4321', rut:'14.585.245-9', nombre:'Americo Dislexico', curso:''},
                {matricula:'1232', rut:'14.585.245-0', nombre:'Americo Dislexico', curso:''}
            ],
            cursos:[
                {id: 1, text: '1 medio A', value: '1mA', total:0},
                {id: 2, text: '1 medio B', value: '1mB', total:0},
                {id: 3, text: '1 medio C', value: '1mC', total:0},
            ],
        }
    },
    methods: {
        total3: function(){
            
            for (let index = 0; index < this.cursos.length; index++) {
                let tot = 0
                for (let indexb = 0; indexb < this.datosTabla.length; indexb++) {
                    if (this.datosTabla[indexb].curso == this.cursos[index].value) {
                        tot += 1
                    }
                    
                }
                this.cursos[index].total = tot
            }
        },
        total2: function(){
            for (const cursox of this.datosTabla) {
                console.log(cursox.curso);
                let res2 =  this.cursos.find(x => {
                    return x.value == cursox.curso
                }) ;
                
                

            }
        },
         total(dato){
             let suma = this.datosTabla.filter(x => {
                return x.curso == dato
            })
            let resultado = suma.length
            const res2 =  this.cursos.find(x => {
               return x.value == dato
            }) ;
            res2.total=resultado
            console.log(res2);
        }
    },
    computed: {
       
    },
}
</script>

<style>

.title-color-bg{
    background-color: gray;
    border-radius: 10px;
}
.br-secction{
    border: 1px solid;
    border-radius: 10px;
    margin-top: 5px;
}
.btnseparate{
    margin-right: 250px;
}
   
</style>