<template>
    <v-container>
        <v-row class="d-flex buscador2">
             <v-col cols="2" class="mt-3 pl-0">
                <v-btn
                    dense
                    text
                    outlined
                    color="primary"
                    @click="$router.go(-1)"
                >
                volver
                </v-btn>
            </v-col>
            <v-col class="buscador d-flex" cols="10">
                <v-col class="mt-1" cols="1">
                    <h3>Filtrar</h3>
                </v-col>
                <v-col>
                    <v-text-field
                        dense
                        outlined
                        hide-details=""
                        label="Por Año Academico"
                        v-model="filtro.anioFiltrado"
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field
                        dense
                        outlined
                        hide-details=""
                        label="Por Rut"
                        v-model="filtro.rutFiltrado"
                        v-mask="'########-#'"
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-select
                        dense
                        outlined
                        hide-details=""
                        :items="$store.state.nivelesapp"
                        item-text="nombreNivel"
                        item-value="id"
                        label="Por Nivel"
                        v-model="filtro.nivelFiltrado"
                    ></v-select>
                </v-col>
                <v-col>
                    <v-btn
                        dense
                    
                        color="primary"
                    >
                    BUSCAR
                    </v-btn>
                </v-col>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
            <tabla-alumnos
            :encabezado="headers"
            :datostabla="items"
            :tablename="nombretabla"
            ></tabla-alumnos>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import TablaAlumnos from '../components/tablaAlumnos.vue'
export default {
    name:"alumnos",
    components:{
        "tabla-alumnos":TablaAlumnos
    },
    data() {
        return {
            nombretabla:"Alumnos",
            filtro:{
                rutFiltrado:"",
                nivelFiltrado:"",
                anioFiltrado:""
            },
             headers:[
                {text:'N°MAT', value: 'nombre'},
                {text:'Apellido Paterno', value:'nivel_asoc'},
                {text:'Apellido Materno', value: 'codigo'},
                {text:'Nombres', value: 'actions'},
                {text:'Curso', value:'nombre'},
                {text:'Estado', value:'nombre'}
            ],
            items:[
                {nombre: 'castellano', codigo: 'cas001', nivel_asoc: '1°medio'},
                {nombre: 'Matematica', codigo: 'mat001', nivel_asoc: '1°medio'},
                {nombre: 'Historia', codigo: 'his001', nivel_asoc: '1°medio'},
                {nombre: 'Tecnologia', codigo: 'tec001', nivel_asoc: '1°medio'},
            ],
        }
    },
}
</script>
<style scoped>
.buscador2{
    margin-left: 1px;
    margin-right: 1px;
}
    .buscador{
        border: 1px solid rgb(187, 187, 187);
        border-radius: 5px;
        /* margin-left: 1px; */
        /* margin-right: 1px; */
        
    }
</style>