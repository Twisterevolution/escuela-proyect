<template>
    <v-container>
        <tabla-alumnos
        :encabezado="headers"
        :datostabla="items"
        :tablename="nombretabla"
        ></tabla-alumnos>
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