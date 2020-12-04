<template>
  <v-container>
      <tabla
        tablename="ASIGNATURAS"
        :encabezado="cabeceras"
        :datostabla="datostabla"
      ></tabla>
  </v-container>
</template>

<script>
import tabla from '../components/tablatipo'
export default {
    name: "tablaAdmin",
    components:{
        tabla
    },
     data() {
        return {
            cabeceras:[
                {text:'nombre', value: 'nombre'},
                {text:'nivel-asoc', value:'nivel_asoc'},
                {text:'codigo', value: 'codigo'},
                {text:'acciones', value: 'actions'}
            ],
            datostabla:[
                {nombre: 'castellano', codigo: 'cas001', nivel_asoc: '1°medio'},
                {nombre: 'Matematica', codigo: 'mat001', nivel_asoc: '1°medio'},
                {nombre: 'Historia', codigo: 'his001', nivel_asoc: '1°medio'},
                {nombre: 'Tecnologia', codigo: 'tec001', nivel_asoc: '1°medio'},
            ],
            
        }
    },
    computed: {
     
    },
    methods: {
        
    },
}
</script>